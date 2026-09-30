from pypdf import PdfReader
import json
import os
import re

MANUALS = [
    {
        "id": "anytone-at-d168uv",
        "manufacturer": "AnyTone",
        "model": "AT-D168UV",
        "file": "static/manuals/anytone-at-d168uv.pdf",
    }
]

OUTPUT_DIR = "static/manual-data"

os.makedirs(OUTPUT_DIR, exist_ok=True)


def clean_text(text):
    if not text:
        return ""

    text = text.replace("\u00a0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)

    return text.strip()


def split_into_chunks(text, max_length=1200):
    paragraphs = [
        paragraph.strip()
        for paragraph in text.split("\n")
        if paragraph.strip()
    ]

    chunks = []
    current = ""

    for paragraph in paragraphs:
        if len(current) + len(paragraph) + 1 <= max_length:
            current += ("\n" if current else "") + paragraph
        else:
            if current:
                chunks.append(current)

            current = paragraph

    if current:
        chunks.append(current)

    return chunks


for manual in MANUALS:
    print(f"Processing {manual['manufacturer']} {manual['model']}...")

    reader = PdfReader(manual["file"])

    sections = []

    for page_number, page in enumerate(reader.pages, start=1):
        text = clean_text(page.extract_text())

        if not text:
            continue

        chunks = split_into_chunks(text)

        for chunk_number, chunk in enumerate(chunks, start=1):
            sections.append(
                {
                    "page": page_number,
                    "chunk": chunk_number,
                    "text": chunk,
                }
            )

    output = {
        "equipment_id": manual["id"],
        "manufacturer": manual["manufacturer"],
        "model": manual["model"],
        "manual": f"{manual['manufacturer']} {manual['model']} Manual",
        "pdf": f"/manuals/{manual['id']}.pdf",
        "sections": sections,
    }

    output_file = os.path.join(
        OUTPUT_DIR,
        f"{manual['id']}.json"
    )

    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(
            output,
            file,
            ensure_ascii=False,
            indent=2
        )

    print(
        f"Created {output_file} "
        f"with {len(sections)} searchable sections."
    )
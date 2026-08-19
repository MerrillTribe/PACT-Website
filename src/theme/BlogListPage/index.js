import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

function BlogListPageMetadata(props) {
  const {metadata} = props;

  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();

  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function CurrentAnnouncements() {
  return (
    <div className="current-announcements">
      <div className="current-announcements__heading">
        Current Announcements
      </div>

      <div className="current-announcements__grid">
        <div className="current-announcements__item">
          <h3>Next Interface</h3>

          <p>
            <strong>November 18, 2026</strong>
            <br />
            7:00–8:00 PM
            <br />
            Provo Fire Station 22 Community Room
          </p>

<Link to="/docs/training/meetings/">
  Interface Information →
</Link>
        </div>

        <div className="current-announcements__item">
          <h3>Weekly Training Net</h3>

          <p>
            <strong>Every Wednesday at 8:30 PM</strong>
            <br />
            Check-ins begin on 439.800 MHz simplex.
          </p>

          <Link to="/docs/training/weekly-training-net/">
            Net Information →
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <CurrentAnnouncements />

      <BlogPostItems items={items} />

      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
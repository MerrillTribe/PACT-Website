import React from 'react';
import Layout from '@theme/Layout';
import CommunicationsMap from '@site/src/components/CommunicationsMap';

export default function RepeaterMapPage() {
  return (
    <Layout
      title="PACT Communications Map"
      description="Interactive communications map for PACT repeaters, districts, and operational locations."
    >
      <main style={{padding: '2rem'}}>
        <h1>PACT Communications Map</h1>
        <p>
          Use this map to view PACT districts, local repeaters, linked repeaters,
          and operational locations.
        </p>

        <CommunicationsMap />
      </main>
    </Layout>
  );
}
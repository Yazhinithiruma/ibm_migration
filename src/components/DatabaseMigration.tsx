
import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

const DatabaseMigration: React.FC = () => {
  return (
    <div className="cds--content" style={{ padding: '6rem 2rem 2rem' }}>
      <Grid className="cds--grid--full-width">
        <Column lg={16} md={8} sm={4}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 className="cds--productive-heading-06" style={{ marginBottom: '1rem' }}>
              Database Migration
            </h1>
            <p className="cds--body-long-02" style={{ marginBottom: '2rem', color: '#525252' }}>
              Migrate your Teradata database schemas, tables, views, and stored procedures to DB2
            </p>
            
            <Tile style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#e5f6ff' }}>
              <h2 className="cds--productive-heading-04" style={{ marginBottom: '1rem' }}>
                Database Migration Coming Soon
              </h2>
              <p className="cds--body-long-01">
                This feature is currently under development. Please use the DataStage Migration 
                functionality which is fully available.
              </p>
            </Tile>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export default DatabaseMigration;

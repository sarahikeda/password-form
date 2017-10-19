import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ReviewDescription } from './ReviewDescription';

export class ReviewApp extends React.Component {
  render() {
    return (
      <div className='app-detailed-info'>
        <Tabs defaultActiveKey={1} id="review-tabs">
          <Tab eventKey={1} title="REVIEW" ><ReviewDescription app={this.props.app} /></Tab>
          <Tab eventKey={2} title="DOWNLOAD ASSETS">DOWNLOAD ASSETS content</Tab>
          <Tab eventKey={3} title="APPROVE/REJECT">APPROVE/REJECT content</Tab>
        </Tabs>
      </div>
    )
  }
};

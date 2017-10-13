import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Search extends React.Component {
  render() {
    return (
      <div className="header">
        <DropdownButton className="status-dropdown" title="Find Applications By Status">
          <MenuItem eventKey="1">Approved</MenuItem>
          <MenuItem eventKey="2">Rejected</MenuItem>
          <MenuItem eventKey="2">Under Review</MenuItem>
          <MenuItem eventKey="2">Withdrawn</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

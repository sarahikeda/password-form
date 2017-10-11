import React from 'react';
import { Table } from 'react-bootstrap';
import { AppDetailedInfo } from '../AppDetailedInfo/AppDetailedInfo';

export class AppProfile extends React.Component {
  render() {
    return (
      <div className="app-profile">
        <Table className="app-profile-info">
          <tbody>
            <tr>
              <td>
                <img className='individual-app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} />
              </td>
              <td>
                <p className="app-name">App Name: Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
                <p>Platform: Android</p>
                <p>Status: Under Review</p>
              </td>
              <td>
                <p className="app-created-date">App Submission Date: September 18, 2017|11:25 AM</p>
                <p>Device: Mobile</p>
                <p>App Type: FirstNet Reviewed</p>
                <p>Distribution: FirstNet Hosted</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Device Name: [devFirstName][devLastName]</p>
                <p>Device Email: [devEmailAddress]</p>
              </td>
              <td>
                <p>Developer Company: Aenean sodales</p>
                <p>App Package: someFileName.apk</p>
              </td>
            </tr>
            <tr>Save ID: etiam_aliquam_pharetra_1_0_0_96c365_fe4c_43aa_a563_42e795adeacc</tr>
          </tbody>
        </Table>
        <AppDetailedInfo />
      </div>
    );
  }
}

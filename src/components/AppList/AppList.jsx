import React from 'react';
import { Table } from 'react-bootstrap';

export class AppList extends React.Component {
  render() {
    return (
      <div className="app-list">
        <Table>
          <tbody>
{/*map out the elements and check for status rather than hard code*/}            
            <tr>
              <td><img className='app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} /></td>
              <td>
                <p className="app-name">Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
              </td>
              <td>Platform: Android</td>
              <td>
                <p>Status: Under Review</p>
                <p className="app-created-date">Submitted Date: September 18, 2017|11:25 AM</p>
              </td>
            </tr>
            <tr>
              <td><img className='app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} /></td>
              <td>
                <p className="app-name">Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
              </td>
              <td>Platform: Android</td>
              <td>
                <p>Status: Under Review</p>
                <p className="app-created-date">Submitted Date: September 18, 2017|11:25 AM</p>
              </td>
            </tr>
            <tr>
              <td><img className='app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} /></td>
              <td>
                <p className="app-name">Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
              </td>
              <td>Platform: Android</td>
              <td>
                <p>Status: Under Review</p>
                <p className="app-created-date">Submitted Date: September 18, 2017|11:25 AM</p>
              </td>
            </tr>
            <tr>
              <td><img className='app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} /></td>
              <td>
                <p className="app-name">Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
              </td>
              <td>Platform: Android</td>
              <td>
                <p>Status: Under Review</p>
                <p className="app-created-date">Submitted Date: September 18, 2017|11:25 AM</p>
              </td>
            </tr>
            <tr>
              <td><img className='app-img' alt="screenshot of app" src={require('../../../images/app-img.png')} /></td>
              <td>
                <p className="app-name">Etiam aliquam pharetra</p>
                <p>Version: 1.0.0</p>
              </td>
              <td>Platform: Android</td>
              <td>
                <p>Status: Under Review</p>
                <p className="app-created-date">Submitted Date: September 18, 2017|11:25 AM</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

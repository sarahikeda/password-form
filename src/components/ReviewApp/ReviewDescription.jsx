import React from 'react';
import { Table } from 'react-bootstrap';

export class ReviewDescription extends React.Component {
  render() {
    let app = this.props.app;
    return (
      <div className='review-description'>
        <Table className="app-description-info">
          <tbody>
            <tr>
              <td>
                Short Description:
              </td>
              <td>
                {app.shortDescription}
              </td>
            </tr>
            <tr>
              <td>
                Long Description:
              </td>
              <td>
                {app.longDescription}
              </td>
            </tr>
            <tr>
              <td>
                Version Notes:
              </td>
              <td>
                {app.versionNotes}
              </td>
            </tr>
            <tr>
              <td>
                Search Keywords:
              </td>
              <td>
                {app.tags}
              </td>
            </tr>
            <tr>
              <td>
                Category:
              </td>
              <td>
                {app.category.map(cat => cat + ", ")}
              </td>
            </tr>
            <tr>
              <td>
                Branch Discipline:
              </td>
              <td>
                {app.segments.map(segment => segment + ", ")}
              </td>
            </tr>
            <tr>
              <td>
                About The Developer
              </td>
              <td>
                {app.aboutDev}
              </td>
            </tr>
            <tr>
              <td>
                Developer Website
              </td>
              <td>
                <a href={app.devWebsite}>{app.devWebsite}</a>
              </td>
            </tr>
            <tr>
              <td>
                Mobile Screenshots
              </td>
              <td>
                {app.mobileImageUrls.map(imgUrl => {
                  return (
                    <img src={imgUrl} height="100" key={imgUrl} />
                  )
                })}
                {app.tabletImageUrls.map(imgUrl => {
                  return (
                    <img src={imgUrl} height="100" key={imgUrl} />
                  )
                })}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
};

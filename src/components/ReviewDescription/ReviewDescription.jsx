import React from 'react';
import { Table } from 'react-bootstrap';

export class ReviewDescription extends React.Component {
  render() {
    return (
      <div className='review-description'>
        <Table className="app-description-info">
          <tbody>
            <tr>
              <td>
                Short Description:
              </td>
              <td>
                Lorem ipsum dolor sit amet, ut vix quas nominati. Te vel patrioque liberavisse, quo mollis repudiandae ei. Vidisse vocibus noluisse ei vel, vel omnes percipitur ne. Nusquam evertitur persequeris vel in, blandit platonem ex mei. Ut possit nonumes pri.
              </td>
            </tr>
            <tr>
              <td>
                Long Description:
              </td>
              <td>
                Minimum petentium percipitur at nec, eam erat epicuri signiferumque ei, pri ex inani regione adipiscing. Ea erat ancillae sit. Ut alia idque virtute ius. Dolor utamur dignissim eam ut, labitur gubergren has ea. Animal torquatos ut pri, munere denique est ne, civibus noluisse signiferumque eu sit. In quando repudiare eum, eu habeo eruditi gloriatur sed. Epicurei verterem pri ne.
              </td>
            </tr>
            <tr>
              <td>
                Version Notes:
              </td>
              <td>
                Est in impetus invenire elaboraret. Fugit tantas vis at, ius id commodo delenit percipitur, eos iracundia vulputate in. Sea graeci accusamus accommodare et, qui utinam feugiat accusam in, quo cu vituperata temporibus.
              </td>
            </tr>
            <tr>
              <td>
                Search Keywords:
              </td>
              <td>
                Vel eros indoctum ut. Atqui timeam cu ius
              </td>
            </tr>
            <tr>
              <td>
                Category:
              </td>
              <td>
                Vel eros indoctum ut
              </td>
            </tr>
            <tr>
              <td>
                Branch Discipline:
              </td>
              <td>
                Vel eros indoctum ut fabulas offendit
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
};

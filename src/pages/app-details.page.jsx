import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { ReviewApp } from '../components/ReviewApp/ReviewApp';

@inject('store')
@observer export class AppDetailsPage extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    render() {
        return (
            <section id="edit-page">
                <div className="container">
                    {/* <AppMetaData app={this.props.app} /> */}
                    {/* <DeveloperMetaData app={this.props.app} /> */}
                    <ReviewApp app={this.props.store.awsStore.currentFile} />
                </div>
            </section>
        )
    }
}

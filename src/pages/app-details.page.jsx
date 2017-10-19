import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { ReviewApp } from '../components/ReviewApp/ReviewApp';

@inject('store')
@observer class AppDetailsPage extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        app: PropTypes.object.isRequired
    }

    render() {
        <section id="edit-page">
            <div className="container">
                {/* <AppMetaData app={this.props.app} /> */}
                {/* <DeveloperMetaData app={this.props.app} /> */}
                <ReviewApp app={this.props.app} />
            </div>
        </section>
    }
}
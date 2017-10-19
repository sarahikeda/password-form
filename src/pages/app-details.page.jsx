import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { ReviewApp } from '../components/ReviewApp/ReviewApp';

@inject('store')
@observer export class AppDetailsPage extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    handleApproveClick = () => {
        this.props.store.awsStore.changeAppStatus("APPROVED");
    }

    handleRejectClick = () => {
        this.props.store.awsStore.changeAppStatus("REJECTED");
    }

    handleRejectReasonChange = (e) => {
        console.log(1, e)
        this.props.store.awsStore.changeRejectReason(e.target.value)
    }

    render() {
        return (
            <section id="edit-page">
                <div className="container">
                    {/* <AppMetaData app={this.props.app} /> */}
                    {/* <DeveloperMetaData app={this.props.app} /> */}
                    <ReviewApp 
                        app={this.props.store.awsStore.currentFile} 
                        handleApproveClick={this.handleApproveClick} 
                        handleRejectClick={this.handleRejectClick} 
                        handleRejectReasonChange={this.handleRejectReasonChange} />
                </div>
            </section>
        )
    }
}

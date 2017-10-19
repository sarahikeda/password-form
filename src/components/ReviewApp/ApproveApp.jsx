import React from 'react';

export class ApproveApp extends React.Component {

    render() {
        let app = this.props.app;
        return (
            <div className='approve-app'>
                <div className="approve-app-details">
                    status: {app.custom_metadata.status}
                    <div>
                        <strong>App Name:</strong> {app.appName}
                    </div>
                    <div>
                        <strong>Platform:</strong> {app.platform}
                    </div>
                    <div>
                        <strong>App Version:</strong> {app.version}
                    </div>
                </div>
                <div className="approve-app-approve-button center-block">
                    <img src={require("../../../images/checkmark.png")} alt="check mark icon" height="50" /> <button onClick={this.props.handleApproveClick}>Approve App</button>
                </div>
                <div className="approve-app-reject-button center-block">
                    <div>
                        <img src={require("../../../images/cancel.png")} alt="cancel icon" height="50" /> <button onClick={this.props.handleRejectClick}>Reject App</button>
                    </div>
                    <div>
                        <textarea 
                            name="reject-reason" 
                            rows="5" 
                            onChange={this.props.handleRejectReasonChange}
                            value={this.props.app.custom_metadata.rejectReason} />
                    </div>
                </div>
            </div>
        )
    }
};

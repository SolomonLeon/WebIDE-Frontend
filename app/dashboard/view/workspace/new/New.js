import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './new.css';

import i18n from '../../../utils/i18n';

class New extends Component {
    render() {
        const { canCreate, wsLimit } = this.props;
        return (
            canCreate ? (
                <Link className="ws-card new" to="/dashboard/workspace/create">
                    <div className="avatar"></div>
                    <div className="content">
                        <div className="title">{i18n('global.createWorkspace')}</div>
                    </div>
                </Link>
            ) : (
                <div className="ws-card new disabled">
                    <div className="avatar"></div>
                    <div className="content">
                        <div className="title">{i18n('global.createWorkspace')}</div>
                        <div className="desc">{i18n('ws.limitTip', { limit: wsLimit })}</div>
                    </div>
                </div>
            )
        );
    }
}

const mapState = (state) => {
    return {
        canCreate: state.wsState.canCreate,
        wsLimit: state.wsState.wsLimit,
    };
}

export default connect(mapState)(New);

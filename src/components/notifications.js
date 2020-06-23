import React, {Component} from 'react';
import {connect} from "react-redux";
import { resetCounter } from "../redux/Counter/counter.actions";

class Notifications extends Component {
    render () {
        return (
            <button type="button" onClick={() => this.props.resetCounter()}
                    className="btn btn-primary">
                Notifications <span
                className="badge badge-light">{this.props.count} </span>
            </button>

        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        resetCounter: () => dispatch(resetCounter()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notifications)


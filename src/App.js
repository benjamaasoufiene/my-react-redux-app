import React, {Component} from "react"


import {connect} from "react-redux"
import {
    increaseCounter,
    decreaseCounter,
} from "./redux/Counter/counter.actions"

class App extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-header">
                    compteur
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title"> Total: {this.props.count}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={() => this.props.increaseCounter()}>+</button>
                            <button className="btn btn-danger" onClick={() => this.props.decreaseCounter()}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),

        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

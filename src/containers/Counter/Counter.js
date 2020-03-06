import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
// import { increment,  decrement, onAdd, onSubtract, storeResult, deleteResult } from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default :
                this.setState((prevState) => {
                    return { counter : prevState.counter };
                });
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(res => {
                        return <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch(actionCreators.increment()),
        onDecrementCounter : () => dispatch(actionCreators.decrement()),
        onAddCounter : () => dispatch(actionCreators.onAdd()),
        onSubCounter : () => dispatch(actionCreators.onSubtract()),
        onStoreResult : (result) => dispatch(actionCreators.storeResult(result)), 
        onDeleteResult : (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React from 'react';
import PonyItem from '../components/PonyItem.js';
import appStore from '../stores/appStore.js';
import actions  from '../actions/actions.js'

function getStateFromStores() {
    return {
        ponys: appStore.getPonys()
    };
}

export default
class PonyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = getStateFromStores();
    }

    componentDidMount() {
        appStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        appStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(getStateFromStores());
    };

    render() {
        return (
            <section>
                <h1>Наши Пони ({this.state.ponys.length})</h1>
                {!this.state.ponys.length && <h2>У нас нет ни одного пони 8 (</h2>}
                {this.state.ponys.map((pony, index) => {
                    return (<PonyItem key={pony.id} pony={pony}/>)
                })}
            </section>
        );
    }
}
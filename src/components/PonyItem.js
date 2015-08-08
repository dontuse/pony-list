import React from 'react';
import {Grid,Row,Col, Input} from 'react-bootstrap';
import actions from '../actions/actions.js';
import '../css/pony/pony.less';

class PonyItem extends React.Component {
    constructor(props) {
        super(props);
    }

    remove = (e) => {
        actions.remove(this.props.pony);
    };

    render() {
        return (
            <div className="pony">
                <div className="pony__name">{this.props.pony.name}</div>
                <div className="pony__prop">
                    Порода: {this.props.pony.kind ? <b>{this.props.pony.kind}</b> : <i>неизвестна</i>}
                </div>
                <div className="pony__prop">
                    Цвет: {this.props.pony.color ? <b>{this.props.pony.color}</b> : <i>неизвестна</i>}
                </div>
                <div className="pony__prop">
                    Возраст: {this.props.pony.age ? <b>{this.props.pony.age}</b> : <i>неизвестен</i>}
                </div>
                <div className="pony_prop">
                    {this.props.pony.isEvil ? <b>Он злой</b> : <b>Он добрый</b>}
                </div>
                <div className="pony__description">{this.props.pony.description}</div>

                <div className="pony__remove">
                    <span onClick={this.remove}>Удалить</span>
                </div>
            </div>
        );
    }
}

export default PonyItem;
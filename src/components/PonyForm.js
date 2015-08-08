import React from 'react';
import {Grid,Row,Col, Input, ButtonInput} from 'react-bootstrap';
import action from '../actions/actions.js';
import appStore from '../stores/appStore.js';

function getStateFromStore() {
    return {
        kinds: appStore.getPonyKinds(),
        colors: appStore.getPonyColors()
    }
}

class PonyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromStore();
    }

    componentDidMount() {
        appStore.addChangeListener(this._onChange);
    }

    submit = (e) => {
        e.preventDefault();
        let pony = {
            name: this.refs.name.getValue(),
            age: this.refs.age.getValue(),
            isEvil: this.refs.evil.getInputDOMNode().checked ? true : false,
            color: this.refs.color.getValue(),
            kind : this.refs.kind.getValue(),
            description: this.refs.description.getValue()
        };
        action.addPony(pony);
    };



    _onChange = () => {
        this.setState(getStateFromStore());
        this.refs.name.getInputDOMNode().value = '';
        this.refs.age.getInputDOMNode().value = '';
    };


    render() {
        return (
            <form onSubmit={this.submit}>
                <h3>Новый пони</h3>
                <Input required ref="name" type='text' label='Имя' placeholder='Назовите пони' />
                <Input ref="age" type='number' label='Возраст' placeholder='Сколько ему лет ?' />
                <Input value="isEvil" ref="evil" type='checkbox' label='Он Злой ?' checked={this.state.isEvil} />
                <Input ref="kind" defaultValue="" type='select' label='Порода' placeholder='Выберите породу'>
                    {this.state.kinds.map((kind, index) => {
                        return (<option key={index} value={kind}>{kind}</option>);
                    })}
                    <option value=''>...</option>
                </Input>
                <Input ref="color" defaultValue="" type='select' label='Какого он цвета ?' placeholder=''>
                    {this.state.colors.map((color, index) => {
                        return (<option key={index} value={color}>{color}</option>);
                    })}
                    <option value=''>...</option>
                </Input>
                <Input ref="description" type='textarea' label='Что мы о нем знаем ?' placeholder='' />
                <ButtonInput type='submit' value='Добавить' />
            </form>
        )
    }
}


export default PonyForm;
import React from 'react';
import classNames from 'classnames';

export default
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount || props.min};
        this.timer;
    }

    static propTypes = {
        initialCount: React.PropTypes.number,
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        interval: React.PropTypes.number,
        beforeIncrementDelay: React.PropTypes.number,
        cssMixs: React.PropTypes.array
    };

    static defaultProps = {
        initialCount: 0,
        interval: 100,
        beforeIncrementDelay: 200,
        min: 1,
        max: 99999,
        cssMixs: []
    };


    getValue() {
        return this.state.count;
    }

    onBlur() {
        let val = this.getFormattedNumber(this.state.count);
        this.setState({count: val});
        this.props.onBlur(val);
    }

    onChange() {
        let count = +React.findDOMNode(this.refs.count).value.trim();
        this.setState({count: count});
    }

    increment() {
        let nextVal = this.getFormattedNumber(this.state.count + 1);
        this.setState({count: nextVal});
    }

    decrement() {
        let nextVal = this.getFormattedNumber(this.state.count - 1);
        this.setState({count: nextVal});
    }

    onIncrementDown() {
        this.increment();
        this.incrementDelay = setTimeout(() => {
            this.timer = setInterval(this.increment.bind(this), this.props.interval);
        }, this.props.beforeIncrementDelay);
    }

    onIncrementUp() {
        clearTimeout(this.incrementDelay);
        clearInterval(this.timer);
    }

    onDecrementDown() {
        this.decrement();
        this.incrementDelay = setTimeout(() => {
            this.timer = setInterval(this.decrement.bind(this), this.props.interval);
        }, this.props.beforeIncrementDelay);
    }

    onDecrementUp() {
        clearTimeout(this.incrementDelay);
        clearInterval(this.timer);
    }

    getFormattedNumber(val) {
        let fNumber = val;
        if (val >= this.props.max) {
            fNumber = this.props.max
        }
        else if (val <= this.props.min) {
            fNumber = this.props.min
        }
        return fNumber;
    }


    render() {
        let bName = classNames('r-quality', ...this.props.cssMixs);
        let minClass = 'r-quality__ctrl';
        let maxClass = 'r-quality__ctrl';
        if (this.props.count - 1 < this.props.min_count) {
            minClass = minClass + ' disable';
        }
        if (this.props.count >= this.props.max_count) {
            maxClass = maxClass + ' disable';
        }
        return (
            <div className={bName}>
                <button
                    ref="down"
                    onMouseDown={this.onDecrementDown.bind(this)}
                    onMouseUp={this.onDecrementUp.bind(this)}
                    onMouseOut={this.onDecrementUp.bind(this)}
                    className={minClass}
                    type="button">-
                </button>
                <input
                    ref="count"
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.count}
                    type="number"
                    className="b-input r-quality__input"/>
                <button
                    ref="up"
                    onMouseDown={this.onIncrementDown.bind(this)}
                    onMouseUp={this.onIncrementUp.bind(this)}
                    onMouseOut={this.onIncrementUp.bind(this)}
                    className={maxClass}
                    type="button">+
                </button>
            </div>
        );
    }
}




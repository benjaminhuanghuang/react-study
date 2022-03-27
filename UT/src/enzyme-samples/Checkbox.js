import React from 'react';
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
        this.changeState = this.changeState.bind(this);
    }
    changeState () {
        this.setState({isChecked: !this.state.isChecked})
    }
    render() {
        return (<label>
                <input type="checkbox" checked={this.state.isChecked} onChange={this.changeState} />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
               </label>)
    }

}
export default Checkbox;
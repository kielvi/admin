import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Switch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}


  render() {
    const { id, label, type, ...inputProps } = this.props;

    return (
		<div className={"form-group t-left"}>
			<input
				name="isGoing"
				type="checkbox"
				checked={this.state.isGoing}
				onChange={this.handleInputChange}
				className={"switch__input switch--switch__input"}
        	/>
          	<label className={"switch__label switch--switch__label"} htmlFor={id}> {label}</label>
      </div>
    );
  }
}

export default Switch;

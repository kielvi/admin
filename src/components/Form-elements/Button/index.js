import React, { Component } from 'react';

const Button = ($this) => {
	return (
		<button type={$this.type} className={$this.class}>{$this.text}</button>
	)
}

export default Button;
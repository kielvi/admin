import React, { Component } from 'react';

const Input = ($this) => {
	return (
		<div className="form_group">
			<input type={$this.type} className={$this.class} placeholder={$this.placeholder} value={$this.value}></input>
		</div>
	)
}

export default Input;
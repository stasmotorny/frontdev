import React, { Component } from "react";
import serialize from 'form-serialize';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            data: ''
        };
    }

    handleDataChange(event) {
        console.log('handleDataChange', this.state);
        this.setState({data: event.target.value});
        let dv = {data: this.state.data};
        console.log('data', dv);
    }

    formSubmit = async (event) => {
        event.preventDefault();
        try {
            let form = this.state.data;
            console.log("11111" + serialize(form, {hash: true, empty: true}));
            const request = await fetch('https://script.google.com/macros/s/AKfycbzTxvHO3paUHMib0SY3Lo1uIEBumEGB6z1ILgMlw3fgK6LaKOs/exec', {
                method: "GET",
                contentType: "json",
                mode: "no-cors",
                data: this.state.data
            });

            const responseData = await request.json();

            console.log(
                "GET ResponsePost",
                "Response Body -> " + JSON.stringify(responseData));

            return JSON.stringify(responseData);
        } catch (e) {
            console.log(e);
        }
    }

    render () {
		return (
			<div>
				<p>Contacts</p>
				<form action="" id="testform" onSubmit={this.formSubmit}>
					<input type="text" name="data" ref="data" value={this.state.data} onChange={this.handleDataChange}/>
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
}

export default Contact;



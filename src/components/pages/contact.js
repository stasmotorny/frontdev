import React, { Component } from "react";
import '../../App.css';
import TextareaAutosize from 'react-autosize-textarea';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            data: '',
            company: '',
            name: '',
            email: '',
            phone: '',
            dataClass: 'unused',
            companyClass: 'unused',
            nameClass: 'unused',
            mailClass: 'unused',
            phoneClass: 'unused',
        };
    }

    handleDataChange(event) {
        this.setState({data: event.target.value}, () => {
            if(this.state.data === ''){
                this.setState({dataClass: 'unused'})
            }else{
                this.setState({dataClass:'used'})
            }
        });
    }

    handleCompanyChange(event) {
        this.setState({company: event.target.value}, () => {
            if(this.state.company === ''){
                this.setState({companyClass: 'unused'})
            }else{
                this.setState({companyClass:'used'})
            }
        });
    }

    handleNameChange(event) {
        this.setState({name: event.target.value}, () => {
            if (this.state.name === '') {
                this.setState({nameClass: 'unused'})
            } else {
                this.setState({nameClass: 'used'})
            }
        });
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value}, () => {
            if (this.state.email === '') {
                this.setState({mailClass: 'unused'})
            } else {
                this.setState({mailClass: 'used'})
            }
        });
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value}, () => {
            if (this.state.phone === '') {
                this.setState({phoneClass: 'unused'})
            } else {
                this.setState({phoneClass: 'used'})
            }
        });
    }

    formSubmit = async (e) => {
        e.preventDefault();
        try {
            let form = new FormData();
            form.append('data', this.state.data);
            form.append('company', this.state.company);
            form.append('name', this.state.name);
            form.append('email', this.state.email);
            form.append('phone', this.state.phone);
            this.setState ({
                data: '',
                company: '',
                name: '',
                email: '',
                phone: '',
                dataClass: 'unused',
                companyClass: 'unused',
                nameClass: 'unused',
                mailClass: 'unused',
                phoneClass: 'unused',});
            const request = await fetch('https://script.google.com/macros/s/AKfycbzTxvHO3paUHMib0SY3Lo1uIEBumEGB6z1ILgMlw3fgK6LaKOs/exec', {
                method: "POST",
                body: form
            });
            const responseData = await request.json();
            return JSON.stringify(responseData);
        } catch (e) {
            console.log(e);
        }
    }

    render () {
		return (
			<div className="contacts--block">
                <div className="contacts">
                    <h3 className="contacts--block__header header3">Contacts:</h3>
                    <div className="phone">
                        <p className="phone--header"><b>Phone: &#160;</b></p>
                        <a href="tel:063 837 45 95" className="phone--link"> 063 837 4595</a>
                    </div>
                    <div className="email">
                        <p className="email--header"><b>Email: &#160;</b></p>
                        <a href="mailto:stasmotorny@gmail.com" className="email--link"> stasmotorny@gmail.com</a>
                    </div>
                </div>
                <h3 className="contacts--form__header header3">Send me a message:</h3>
                <form id="testform" onSubmit={this.formSubmit}>
                    <div className="inplabgroup">
                        <input className={this.state.companyClass} id="company" type="text" name="company" value={this.state.company} onChange={this.handleCompanyChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="inplab" htmlFor="company">Company name</label>
                    </div>
                    <div className="inplabgroup">
                        <input className={this.state.nameClass} id="name" type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="inplab" htmlFor="name">Contact person name</label>
                    </div>
                    <div className="inplabgroup">
                        <input className={this.state.mailClass} id="email" type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="inplab" htmlFor="email">Email</label>
                    </div>
                    <div className="inplabgroup">
                        <input className={this.state.phoneClass} id="phone" type="tel" name="phone" pattern="\d{3}[\-]\d{3}[\-]\d{2}[\-]\d{2}" value={this.state.phone} onChange={this.handlePhoneChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="inplab" htmlFor="phone">Phone in format 000-000-00-00</label>
                    </div>
                    <div className="inplabgroup message">
                        <TextareaAutosize className={this.state.dataClass} id="data" type="text" name="data" value={this.state.data} onChange={this.handleDataChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="inplab msglbl" htmlFor="data">Your message</label>
                    </div>
                    <button type="submit" className="btn">Send</button>
				</form>
			</div>
		);
	}
}

export default Contact;



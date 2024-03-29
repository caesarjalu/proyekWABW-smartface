import React from 'react';
import './Register.css';
import Loading from '../Loading/Loading';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			name: "",
			loading: false
		};
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value});
	}

	onNameChange = (event) =>{
		this.setState({name: event.target.value});
	}

	onSubmitRegister = () =>{
		this.setState({ loading: true });
		fetch(this.props.url + "/register", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then( user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange("home");
			} 
			else {
				console.log("smth went wrong");
			}
			this.setState({ loading: false });
		});
	}

	render(){
		let loading = this.state.loading;
		return (
		<article className="br3 ba b--black-10 mt5 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80 card">
				<div className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f1 fw6 ph0 mh0">Register</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
							<input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent  w-100" type="text" name="name"  id="name" />
						</div>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
							<input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent  w-100" type="email" name="email-address"  id="email-address" />
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password" />
						</div>
					</fieldset>
					{
					loading ? <Loading />
					:
					<div className="">
						<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						type="submit" value="Register" 
						onClick={this.onSubmitRegister}/>
					</div>
					}
				</div>
			</main>
		</article>
		);
	}
}

export default Register;
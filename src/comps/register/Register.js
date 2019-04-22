import React from 'react';

const appEndpoint = 'https://iseeyou-app.herokuapp.com/';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: '',
      registerPwd: '',
      registerName: ''
    }
  }

  onNameChange = (e) => {
    this.setState({registerName: e.target.value})
  }

  onEmailChange = (e) => {
    this.setState({registerEmail: e.target.value})
  }

  onPwdChange = (e) => {
    this.setState({registerPwd: e.target.value})
  }

  onRegisterSubmit = () => {
    fetch(`${appEndpoint}register`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.registerEmail,
        password: this.state.registerPwd,
        name: this.state.registerName
      })
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    return (
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPwdChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input onClick={this.onRegisterSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Register;

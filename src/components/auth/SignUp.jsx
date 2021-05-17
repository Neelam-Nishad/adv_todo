import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp } from '../../actions/authActions';


export class SignUp extends Component {
    state = {
        mail: "",
        password: "",
        password2: "",
        errorMessage: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password!=this.state.password2){
            this.setState({errorMessage: <p className="text-danger">Please enter same passwords in conform password</p>})
            return;
        }
        else{
            this.setState({errorMessage: ""})
        }
        console.table(this.state);
        this.props.signUp(this.state);
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    } 
    render() {
        const {uid} = this.props;
        if(uid) return <Redirect to="/"/>
        return (
            <Form onSubmit={this.handleSubmit} className="col-md-6 mx-auto mt-5 border border-primary p-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={this.state.mail} onChange={this.handleChange} name="mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                </Form.Group>
                {this.state.errorMessage}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={this.state.password2} onChange={this.handleChange} name="password2"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                    Sign Up
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return{
        uid: uid,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signUp: (creds) => dispatch(signUp(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
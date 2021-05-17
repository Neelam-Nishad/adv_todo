import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signIn } from '../../actions/authActions';


export class SignIn extends Component {
    state = {
        mail: "",
        password: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.table(this.state);
        this.props.signIn(this.state);
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
                <Button variant="primary" type="submit" className="w-100 mt-4" >
                    Sign In
                </Button>
            </Form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds)),
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap"
import { connect } from 'react-redux'
import { addTask } from '../../actions/taskActions'

export class AddTask extends Component {
    state={
        task:"",
        checked: false,
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        // document.getElementById("check").innerText="";
    }
    render() {
        return (
            <Form className="col-md-6 mx-auto mt-5 p-5" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Control type="text" value={this.state.task} onChange={this.handleChange} name="task"  id="check"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="">
                    Add Task
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps) (AddTask)


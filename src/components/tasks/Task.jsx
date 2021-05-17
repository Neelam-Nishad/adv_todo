import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, removeTask, toggleChecked } from '../../actions/taskActions'
import Check from './Check'

export class Task extends Component {
    state = {
        clicked: false,
        tasks : {
            task: this.props.task.task
        }
    }
    handleRemove = (task) => {
        this.props.removeTask(task);
    }
    handleCheck = (task) => {
        this.props.toggleChecked(task);
    }
    handleChange = (e) => {
        this.setState({tasks: {task: e.target.value}})
    }
    handleClick = () => {
        this.setState({ clicked: true })
    }
    saveChanges =(e) => {
        this.setState({clicked: false})
        this.props.addTask(this.state.tasks);
        this.handleRemove(this.props.task)
        // window.location.reload();
    }
    render() {
        if (this.state.clicked) {
            return (
                <>
                    <tr>
                        <td><input value={this.state.tasks.task} onChange={this.handleChange} /></td>
                        <td><button onClick={this.handleClick}>🖊</button></td>
                        <td><button onClick={this.saveChanges}>⤵</button></td>
                        <td className="check"><Check checked={this.props.task.checked} onClick={() => this.handleCheck(this.props.task)}/></td>
                        <td onClick={() => this.handleRemove(this.props.task)}>⛔</td>
                    </tr>
                </>
            )
        }
        return (
            <>
                <tr>
                        <td>{this.props.task.task}</td>
                        <td><button onClick={this.handleClick}>🖊</button></td>
                        <td>⤵</td>
                        <td className="check"><Check checked={this.props.task.checked} onClick={() => this.handleCheck(this.props.task)}/></td>
                        <td onClick={() => this.handleRemove(this.props.task)}>⛔</td>
                    </tr>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task)),
        removeTask: (task) => dispatch(removeTask(task)),
        toggleChecked: task => dispatch(toggleChecked(task)),
    }
}

export default connect(null, mapDispatchToProps) (Task)


import React from 'react'
import Task from './Task'
import {Table} from "react-bootstrap"
import {connect} from "react-redux";
import {compose} from "redux";
import { firestoreConnect } from 'react-redux-firebase';

const Taskx = ({tasks}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr className="text-info">
                    <th>Tasks</th>
                    <th>Edit</th>
                    <th>Save</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks && tasks.map(task => <Task task={task} key={task.id}/>)}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => {
    console.log(state);
    const tasks = state.firestore.ordered.tasks;
    const uid = state.firebase.auth.uid;
    return {
        tasks: tasks,
        uid: uid,
    };
};
export default compose (
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection: "tasks",
            where: ["authorId", "==", ownProps.uid],
            // orderBy: ["task", "asc"]
        }
    ])
)(Taskx);

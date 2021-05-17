import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import AddTask from '../tasks/AddTask'
import Taskx from '../tasks/Taskx'

const Dashboard = ({uid}) => {
    if(!uid) return <Redirect to="/signin"/>
    return (
        <>
        <AddTask/>
        <Taskx/>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    }
}

export default connect(mapStateToProps)(Dashboard);

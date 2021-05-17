import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../actions/authActions'
import "../component.css"

const Navigation = ({signOut, uid}) => {
    if(uid){
        return(
            <div className="nav p-5">
            <div className="col-6 pt-3 pt-lg-0 order-1 order-lg-1">
                <NavLink to="/" exact><h1>TODO</h1></NavLink>
            </div>
            <div className="col-6 pt-3 pt-lg-1 order-2 order-lg-1">
                {/* <NavLink to="/signin" exact className="pr-2">Sign-In</NavLink> */}
                {/* <NavLink to="/signup" exact className="pr-2 pl-2">Sign-Up</NavLink> */}
                <NavLink to="/signin" className="pl-2" ><span onClick={() => signOut()}>Sign-Out</span></NavLink>
            </div>
        </div>
        )
    } else {
    return (
        <div className="nav p-5">
            <div className="col-6 pt-3 pt-lg-0 order-1 order-lg-1">
                <NavLink to="/" exact><h1>TODO</h1></NavLink>
            </div>
            <div className="col-6 pt-3 pt-lg-1 order-2 order-lg-1">
                <NavLink to="/signin" exact className="pr-2">Sign-In</NavLink>
                <NavLink to="/signup" exact className="pr-2 pl-2">Sign-Up</NavLink>
                {/* <NavLink to="/signin" className="pl-2" ><span onClick={() => signOut()}>Sign-Out</span></NavLink> */}
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Navigation);

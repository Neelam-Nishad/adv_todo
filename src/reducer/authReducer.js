const authReducer = (state={}, action) => {
    switch (action.type) {
        case "SIGN_IN":
            console.log("SIGNIN SUCCESSFULL");
            return state;
        case "SIGN_IN_ERROR":
            console.log("sign In errror");
            return state;
        case "SIGN_OUT":
            console.log("user signed out");
            return state;
        case "SIGN_UP": {
            console.log("user signed up");
            return state;
        }
        case "SIGN_UP_ERROR": {
            console.log("error in signup");
            return state;
        }
        default:
            return state;
    }
}

export default authReducer;
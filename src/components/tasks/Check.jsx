import React from "react";

const Check = ({checked, onClick}) => {
    if(checked === true){
        return (
            <span onClick={onClick}>
                ✔
            </span>
        )
    } else {
        return (
            <span onClick={onClick}>
                ❗
            </span>
        )
    }
}

export default Check;
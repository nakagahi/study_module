import React from "react"
import "./styles.scss"
import "./logo.svg"


export const App = () => {
    return (
        <>
            <div className="img-header">
                <img src="./asset/logo.svg" style={{height: 100}}/> 
            </div>

            <div className="container" style={{height: 200}}>
                <h1>Hello.</h1>
            </div>
        </>
    )
}
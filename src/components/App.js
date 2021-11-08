import React from "react";
import '@styles/App.css';
import Header from "@components/Header.js";


function App() {
    return (
        <React.Fragment>
            <Header/>
            <div className='App'>
                Этот текстик над синим текстиком
                <h1>Тут какой то тоже текстик...</h1>
            </div>
        </React.Fragment>
    );
}

export default App;
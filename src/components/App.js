import React from "react";
import '@styles/App.css';
import Main from "@components/Main.js";
import Header from "@components/Header.js";


function App() {
    const buttonName = 'Some button name YEAH';
    return (
        // Элемент React.Fragment можно записать и короткой формой: <></>
        <React.Fragment>
            <Header buttonNameProp = {buttonName} />
            <Main />
        </React.Fragment>
    );
}

export default App;
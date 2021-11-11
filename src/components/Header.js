import React, {useState} from "react";
import '@styles/Header.css';
import PropTypes from 'prop-types';


function Header(props) {
    console.log(props); // передал переменные с главного файла App.js
    let item = 1 + 1;
    let [count, setNewCount] = useState(0);
    const handlerClick = (e) => {
        console.log('hello', e, e.target);
        setNewCount(count + 1);
    };

    return (
        <header>I&#39;m Header!!!
            <button className={item > 2 ? 'button-more': 'button-less'} onClick={handlerClick}>{props.buttonNameProp} Clicked: {count} times</button>
        </header>
    );
}
// прописываем проверку типов данных в пропсах (только для разработки)
Header.propTypes = {
    buttonNameProp: PropTypes.string
};
// прописываем заглушку на пустой props
Header.defaultProps = {
    buttonNameProp: "Кнопка без названия"
};

export default Header;
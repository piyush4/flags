import React from 'react'
import {Context} from './ThemeContext'

function Header(){
    const {theme, handleTheme} = React.useContext(Context)
    console.log(handleTheme)
    return(
    <header className={`header ${theme} ${theme}-element`} role="Header">
        <h1>
            Where in the world?
        </h1>
        <p onClick={handleTheme}><i className="far fa-moon"></i> {theme==='dark'? 'Light' : 'Dark'} Mode</p>
    </header>
    )
}
export default Header
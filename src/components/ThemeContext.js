import React from 'react'

const Context = React.createContext()

function ContextProvider(props){

    const [theme, setTheme] = React.useState('light')

    function handleTheme(){
        console.log(theme)
        setTheme(prevTheme=>prevTheme === 'light'? 'dark' : 'light')
    }
    return (
        <Context.Provider value={{theme:theme, handleTheme:handleTheme}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
import React from 'react'
import { useHistory } from 'react-router-dom'
import goBackIcon from './icons/GoBack.svg'
import './Header.css'

type HeaderProps = {
    title: string
    returnOption?: boolean
}


export const Header: React.FC<HeaderProps> = ({ title, returnOption }) => {

    const history = useHistory()

    return (
        <header className='header-container'>
            {returnOption ? <img className="header-button-goback" onClick={() => history.goBack()} src={goBackIcon} alt="Go back" /> : null}
            <p className='header-title'>{title}</p>
        </header>
    )
}
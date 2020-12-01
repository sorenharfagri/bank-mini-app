import React from 'react'

import { Header } from '../../Header/Header'
import { Card } from '../Card/Card'
import { Currency } from '../Currency/Currency'
import { PaymentHistory } from '../PaymentHistory/PaymentHistory'
import './Main.css'

export const Main: React.FC = () => {

    return (
        <div className="main-container">
            <Header title="Главная" />
            <Card />
            <Currency />
            <PaymentHistory />
        </div>
    )
}
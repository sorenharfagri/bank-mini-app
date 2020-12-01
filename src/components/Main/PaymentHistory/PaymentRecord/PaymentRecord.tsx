import React from 'react';
import './PaymentRecord.css';
import { CurrencyState } from '../../../../redux/reducers/currencyReducer'
import { ValuteSymbols } from '../../../../helpers/ValuteSymbols'


interface PaymentRecordProps {
    currentValuteCode: keyof CurrencyState['valutes']
    title: string
    iconUrl: string
    date: string
    amount: string | number
    amountCurrentvault: string | number
}

/* 
   Обрабатываем ошибку, в случае которой не получили картинку с url
*/
function addDefaultSrc(ev: React.SyntheticEvent<HTMLImageElement, Event>) {
    (ev.target as HTMLImageElement).src = 'logo192.png'
}

export const PaymentRecord: React.FC<PaymentRecordProps> = ({ title, iconUrl, date, amount, amountCurrentvault, currentValuteCode }) => {

    return (
        <div className='payment-record-container'>
            <div className='payment-record-icon-container' >
                <img onError={addDefaultSrc} className='payment-record-icon' src={iconUrl} alt="" />
            </div>
            <div>
                <p className='payment-record-title'>{title}</p>
                <p className='payment-record-date'>{date}</p>
            </div>
            <div className='payment-record-amount-currency-container'>
                <p className='record-amount-currencyvault'>{ValuteSymbols[currentValuteCode]} {amountCurrentvault}</p>
                <p className='record-amount-primaryvault'>$ {amount}</p>
            </div>
        </div>
    )
}
import React from 'react'
import './CurrencyCard.css'
import { CurrencyState } from '../../../../redux/reducers/currencyReducer'
import { ValuteSymbols } from '../../../../helpers/ValuteSymbols'

interface CurrencyCardProps {
    charCode: keyof CurrencyState['valutes']
    isSelected: boolean
    callBack?(card: keyof CurrencyState['valutes']) : any
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({ charCode, isSelected, callBack }) => {
    
    return (
        <div onClick={callBack ? () => callBack(charCode) : () => {}} className={`${isSelected ? "currency-card-selected" : "currency-card"}`}>
            <p className='currency-card-wallet-icon'>{ValuteSymbols[charCode]}</p>
            <p className='currency-card-wallet-name'>{charCode}</p>
        </div>
    )

}
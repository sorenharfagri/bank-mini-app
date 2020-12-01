import React from 'react'
import './Card.css'
import userIcon from './icons/User.svg'

import { useSelector } from 'react-redux'
import { CardState } from '../../../redux/reducers/cardReducer'
import { CurrencyState } from '../../../redux/reducers/currencyReducer'

import { RootState } from '../../../redux/reducers/rootReducer'

import { useHistory } from 'react-router-dom'

import { ValuteSymbols } from '../../../helpers/ValuteSymbols'


export const Card: React.FC = () => {

    const card = useSelector<RootState, CardState['currentCard']>((state) => state.cardReducer.currentCard)
    const currentValuteCode = useSelector<RootState, CurrencyState['currentValuteCode']>((state) => state.currencyReducer.currentValuteCode)
    const currentCurrency = useSelector<RootState, CurrencyState['valutes'][typeof currentValuteCode]>((state) => state.currencyReducer.valutes[currentValuteCode])
    const rubForUSD = useSelector<RootState, CurrencyState['valutes']['USD']>((state) => state.currencyReducer.valutes.USD)

    const history = useHistory();

    function redirect() {
        history.push('/cards');
    }

    function addDefaultSrc(ev: React.SyntheticEvent<HTMLImageElement, Event>) {
        (ev.target as HTMLImageElement).src = `./cardMiniIcons/mastercard.svg`
    }


    return (
        <div onClick={redirect} className='card-container'>
            <div className='card-row'>
                <img onError={addDefaultSrc} className="card-icon" src={`./cardMiniIcons/${card.type}.svg`} alt='MasterCard' />
                <p className="card-number-text">{card.cardNumber}</p>
            </div>
            <div className='card-row'>
                <div className='card-cardholder-container'>
                    <img className='user-icon' src={userIcon} alt='UserIcon' />
                    <p className='card-cardholder-text'>{card.cardholderName}</p>
                </div>
                <div className='card-valid-container'>
                    <p className='card-valid-text-thru'>Valid thru</p>
                    <p className='card-valid-text-date'>{card.valid}</p>
                </div>
            </div>
            <div className='card-row'>
                <div className='card-balance-container-left'>
                    <p className='card-balance-text-amountCurrency'>{ValuteSymbols[currentValuteCode]} {(card.balance * rubForUSD / currentCurrency).toFixed(2)}</p>
                </div>
                <div className='card-balance-container-right'>
                    <p className='card-balance-text-yourbalance'>Your balance</p>
                    <p className='card-balance-text-amountDollars'>$ {card.balance}</p>
                </div>
            </div>
        </div>
    )
}
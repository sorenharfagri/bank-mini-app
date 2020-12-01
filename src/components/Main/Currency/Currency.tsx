import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../redux/reducers/rootReducer'
import { CurrencyState } from '../../../redux/reducers/currencyReducer'
import { setCurrentValute } from '../../../redux/actions/currencyActions'

import { CurrencyCard } from './CurrencyCard/CurrencyCard'
import './Currency.css'


export const Currency: React.FC = () => {

    const dispatch = useDispatch()
    const currentValuteCode = useSelector<RootState, CurrencyState['currentValuteCode']>(state => state.currencyReducer.currentValuteCode)

    function selectCurrency(charCode: keyof CurrencyState['valutes']) {
        dispatch(setCurrentValute(charCode))
    }

    return (
        <div className='currency-container'>
            <p className='currency-text'>Change currency</p>
            <div className='currency-card-list'>
                <CurrencyCard callBack={selectCurrency} isSelected={currentValuteCode === 'GBP'} charCode={'GBP'} />
                <CurrencyCard callBack={selectCurrency} isSelected={currentValuteCode === 'EUR'} charCode={'EUR'} />
                <CurrencyCard callBack={selectCurrency} isSelected={currentValuteCode === 'RUB'} charCode={'RUB'} />
            </div>
        </div>
    )
}
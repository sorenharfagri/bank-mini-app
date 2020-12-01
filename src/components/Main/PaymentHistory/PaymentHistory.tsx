import React from 'react';
import { useSelector } from 'react-redux'

import { CardState } from '../../../redux/reducers/cardReducer'
import { RootState } from '../../../redux/reducers/rootReducer'
import { CurrencyState } from '../../../redux/reducers/currencyReducer'

import './PaymentHistory.css';
import { PaymentRecord } from './PaymentRecord/PaymentRecord'

export const PaymentHistory: React.FC = () => {

    const history = useSelector<RootState, CardState['currentCard']>(state => state.cardReducer.currentCard)
    const currentValuteCode = useSelector<RootState, CurrencyState['currentValuteCode']>(state => state.currencyReducer.currentValuteCode)
    const currentCurrency = useSelector<RootState, CurrencyState['valutes'][typeof currentValuteCode]>(state => state.currencyReducer.valutes[currentValuteCode])
    const rubForUSD = useSelector<RootState, CurrencyState['valutes']['USD']>(state => state.currencyReducer.valutes.USD)



    return (
        <div className='history-main-container'>
            <h1 className='history-main-container-title'>History</h1>
            <div className='history-container'>
                {
                    history.transactionHistory.map(record =>
                        <PaymentRecord
                            currentValuteCode={currentValuteCode}
                            amountCurrentvault={(Number(record.amount) * rubForUSD / currentCurrency).toFixed(2)}
                            title={record.title}
                            amount={record.amount}
                            date={record.date}
                            iconUrl={record.icon_url}
                            key={Math.random()}
                        />
                    )
                }
            </div>
        </div>
    )
}
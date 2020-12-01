import { store } from '../store'
import { Api } from '../../helpers/Api'
import { addCard, setCurrentCard } from './cardActions'
import { setValute } from './currencyActions'

console.log('Api requests init')

interface CardJson {
    card_number: string
    type: string
    cardholder_name: string
    valid: string | number
    balance: number
    transaction_history: Array<{
        title: string
        icon_url: string
        date: string,
        amount: string
    }>
}

type CardRespone = {
    users: CardJson[]
}

Api<CardRespone>('https://hr.peterpartner.net/test/android/v1/users.json').then(data => {
    if (data.users[0]) {
        store.dispatch(setCurrentCard({
            cardNumber: data.users[0].card_number,
            type: data.users[0].type,
            cardholderName: data.users[0].cardholder_name,
            valid: data.users[0].valid,
            balance: data.users[0].balance,
            transactionHistory: data.users[0].transaction_history
        }))

        data.users.forEach(card => {
            store.dispatch(addCard({
                cardNumber: card.card_number,
                type: card.type,
                cardholderName: card.cardholder_name,
                valid: card.valid,
                balance: card.balance,
                transactionHistory: card.transaction_history
            }))
        })
    }


})


interface CurrencyJson {
    Valute: {
        EUR: {
            Value: number
        },
        USD: {
            Value: number
        },
        GBP: {
            Value: number
        }
    }
}

Api<CurrencyJson>('https://www.cbr-xml-daily.ru/daily_json.js').then(data => {
    store.dispatch(setValute("USD", data.Valute.USD.Value))
    store.dispatch(setValute("EUR", data.Valute.EUR.Value))
    store.dispatch(setValute("GBP", data.Valute.GBP.Value))
})
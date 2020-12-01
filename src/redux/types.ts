import { ADD_CARD, SET_CURRENTCARD, SET_VALUTE, SET_CURRENTVALUTE } from './constants'
import { CurrencyState } from '../redux/reducers/currencyReducer'


/* Card object types */
export interface TransactionHistory {
    title: string
    icon_url: string
    date: string
    amount: string | number
}

export interface ICard {
    cardNumber: string | number
    type: string
    cardholderName: string
    valid: string | number
    balance: number
    transactionHistory: TransactionHistory[]
}

/* Card action Types */

export interface IAddCardAction {
    type: typeof ADD_CARD,
    payload: ICard
}

export interface ISetCurrentCardAction {
    type: typeof SET_CURRENTCARD,
    payload: ICard
}

export type CardActionTypes = IAddCardAction | ISetCurrentCardAction;

/* Currency object types */

export interface Valute {
    charCode: string
    value: number
}

/* Currency action types */

export interface ISetValute {
    type: typeof SET_VALUTE,
    payload: {
        value: number,
        charCode: keyof CurrencyState['valutes']
    }
}

export interface ISetCurrentValute {
    type: typeof SET_CURRENTVALUTE,
    payload: {
        charCode: keyof CurrencyState['valutes']
    }
}

export type CurrencyActionTypes = ISetValute | ISetCurrentValute;
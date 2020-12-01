import { CurrencyActionTypes } from '../types'
import { CurrencyState } from '../reducers/currencyReducer'
import { SET_VALUTE, SET_CURRENTVALUTE } from '../constants'

export const setValute = (charCode: keyof CurrencyState['valutes'], value: number): CurrencyActionTypes => ({
    type: SET_VALUTE,
    payload: {
        value,
        charCode
    }
})

export const setCurrentValute = (charCode: keyof CurrencyState['valutes']) : CurrencyActionTypes => ({
    type: SET_CURRENTVALUTE,
    payload: {
        charCode
    }
})
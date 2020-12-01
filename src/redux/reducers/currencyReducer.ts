import { SET_VALUTE, SET_CURRENTVALUTE } from '../constants'
import { CurrencyActionTypes } from '../types'

export interface CurrencyState {
    valutes: {
        USD: number,
        EUR: number,
        RUB: number,
        GBP: number,
    },
    currentValuteCode: keyof CurrencyState['valutes']
}

const initialState: CurrencyState = {
    valutes: {
        USD: 70,
        EUR: 80,
        RUB: 1,
        GBP: 90
    },
    currentValuteCode: 'GBP'
}

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyActionTypes): CurrencyState => {

    switch (action.type) {
        case SET_VALUTE: return { ...state, valutes: { ...state.valutes, [action.payload.charCode]: action.payload.value } };
        case SET_CURRENTVALUTE: return {...state, currentValuteCode: action.payload.charCode}
        default:
            return state;
        
    }
}   
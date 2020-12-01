import { combineReducers } from 'redux'
import { cardReducer } from '../reducers/cardReducer'
import { currencyReducer } from '../reducers/currencyReducer'

export const rootReducer = combineReducers({currencyReducer, cardReducer})

export type RootState = ReturnType<typeof rootReducer>;
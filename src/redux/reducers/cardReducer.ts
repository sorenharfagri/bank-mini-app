import { ICard } from '../types'
import { SET_CURRENTCARD, ADD_CARD } from '../constants'
import { CardActionTypes } from '../types'

export interface CardState {
    cards: ICard[]
    currentCard: ICard
}

const initialState = {
    cards: [],
    currentCard: {
        cardNumber: '0000 0000 0000 0000',
        type: "Unknow",
        cardholderName: "Unknown",
        valid: "00/00",
        balance: 0,
        transactionHistory: []
    }
}

export const cardReducer = (state: CardState = initialState, action: CardActionTypes) : CardState => {

    switch (action.type) {
        case SET_CURRENTCARD: {
            return { ...state, currentCard: action.payload };
        }
        case ADD_CARD: {
            return { ...state, cards: [...state.cards, action.payload] }
        }
        default:
            return state
    }
}   
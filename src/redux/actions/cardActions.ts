import { ICard, CardActionTypes } from '../types'
import { SET_CURRENTCARD, ADD_CARD } from '../constants'

export const setCurrentCard = (card: ICard) : CardActionTypes => ({
    type: SET_CURRENTCARD,
    payload: card
})

export const addCard = (card: ICard) : CardActionTypes => ({
    type: ADD_CARD,
    payload: card
})
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ICard } from '../../../redux/types'
import { CardState } from '../../../redux/reducers/cardReducer'
import { RootState} from '../../../redux/reducers/rootReducer'
import { setCurrentCard } from '../../../redux/actions/cardActions'

import { Header } from '../../Header/Header'
import { CardItem } from '../CardItem/CardItem'
import './Cards.css'


export const Cards: React.FC = () => {

    const cards = useSelector<RootState, CardState['cards']>(state => state.cardReducer.cards)
    const currentCard = useSelector<RootState, CardState['currentCard']>(state => state.cardReducer.currentCard)

    const dispatch = useDispatch()
    const history = useHistory()

    function selectCurrentCard(_card: ICard) {
        if (_card.cardNumber != currentCard.cardNumber) {
            dispatch(setCurrentCard(_card))
            history.push('/')
        }
    }

    return (
        <div className='cards-container'>
            <Header title="Мои карты" returnOption={true} />
            <div className='cards-list'>
                {cards.map(card =>
                    <CardItem
                        card={card}
                        callBack={selectCurrentCard}
                        currentCard={card.cardNumber == currentCard.cardNumber}
                        key={card.cardNumber}
                    />
                )}
            </div>
        </div>
    )
} 
import React from 'react';

import './CardItem.css'
import curentItemIcon from './icons/CurrentItem.svg'
import { ICard } from '../../../redux/types'


interface CardItemProps {
    card: ICard
    currentCard?: boolean
    callBack?(card: ICard): any;
}

function addDefaultSrc(ev: React.SyntheticEvent<HTMLImageElement, Event>) {
    (ev.target as HTMLImageElement).src = `./cardMiniIcons/mastercard.svg`
}

export const CardItem: React.FC<CardItemProps> = ({ card, currentCard, callBack }) => {

    return (
        <div onClick={callBack ? () => callBack(card) : () => {}} className='card-item-container'>
            <div className='card-item-info'>
                <img onError={addDefaultSrc} className="card-item-icon" src={`./cardMiniIcons/${card.type}.svg`} alt='Card type' />
                <p className="card-item-number-text">{card.cardNumber}</p>
            </div>
            {currentCard ? <img className='card-item-currentitem-icon' src={curentItemIcon} alt='' /> : null}
        </div>
    )
}
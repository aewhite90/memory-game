import React, {useState, useEffect} from 'react';
import Card from './Card';
import faye from '../img/faye.jpg';
import spike from '../img/spike.jpg';
import edward from '../img/edward.jpg';
import ein from '../img/ein.jpg';
import jetblack from '../img/jet-black.jpg';
import judy from '../img/judy.jpg';
import julia from '../img/julia.jpg';
import punch from '../img/punch.jpg';

const Content = (props) => {
  const {scoreIncrement, lostGame} = props;

  const tiles = [
    {
      source: faye,
      title: 'Faye',
      clicked: false,
    },
    {
      source: spike,
      title: 'Spike',
      clicked: false,
    },
    {
      source: edward,
      title: 'Edward',
      clicked: false,
    },
    {
      source: ein,
      title: 'Ein',
      clicked: false,
    },
    {
      source: jetblack,
      title: 'Jet',
      clicked: false,
    },
    {
      source: judy,
      title: 'Judy',
      clicked: false,
    },
    {
      source: julia,
      title: 'Julia',
      clicked: false,
    },
    {
      source: punch,
      title: 'Punch',
      clicked: false,
    }
  ]

  const shuffle = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  } 

  const [cards, setCards] = useState(tiles)

  useEffect(() => {
    setCards(shuffle([...cards]))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const scorePoint = (e) => {
    const index = cards.findIndex(card => card.title === e.target.parentNode.id)
    if(cards[index].clicked === false) {
      cards[index].clicked = true;
      scoreIncrement();
    } else {
      lostGame();
    }
    setCards(shuffle([...cards]))
  }

  return cards.map((tile, index) => {
    return <Card source={tile.source} title={tile.title} key={index} onClick={scorePoint} />
  })
}

export default Content;
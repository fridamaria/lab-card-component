import React, { useState } from "react";
import "./app.css";
import { CardOne } from './components/CardOne'
import { CardTwo } from "components/CardTwo";
import Lemon from './assets/lemon.png'
import Rocket from './assets/rocket.png'
import Dog from './assets/dog.png'

export const App = () => {
  const [lemonButtonClicked, setLemonButtonClicked] = useState(false)
  const [rocketButtonClicked, setRocketButtonClicked] = useState(false)
  const [dogButtonClicked, setDogButtonClicked] = useState(false)

  const handleLemonClick = () => {
    setLemonButtonClicked(true)
  }

  const handleRocketClick = () => {
    setRocketButtonClicked(true)
  }

  const handleDogClick = () => {
    setDogButtonClicked(true)
  }

  return (
    <div className="App">

      <div className="outer-box">

        {!lemonButtonClicked &&
          <CardOne
            className="card lemon"
            cardTitle="Lemon"
            emoji={Lemon}
            emojiAlt="lemon"
            subTitle="This is a really tasty fruit."
            onClick={handleLemonClick}
            button="ORDER NOW" />
        }
        {lemonButtonClicked &&
          <CardTwo
            className="card2 lemon2"
            cardTitle="Lemon"
            emoji={Lemon}
            emojiAlt="lemon" />
        }
      </div>

      <div className="outer-box">
        {!rocketButtonClicked &&
          <CardOne
            className="card rocket"
            cardTitle="Rocket"
            emoji={Rocket}
            emojiAlt="rocket"
            subTitle="Join us into the outer space!"
            onClick={handleRocketClick}
            button="BOOK SEAT" />
        }
        {rocketButtonClicked &&
          <CardTwo
            className="card2 rocket2"
            cardTitle="Rocket"
            emoji={Rocket}
            emojiAlt="rocket" />
        }
      </div>

      <div className="outer-box">
        {!dogButtonClicked &&
          <CardOne
            className="card dog"
            cardTitle="Doggy"
            emoji={Dog}
            emojiAlt="dog"
            subTitle="This is a really cute dog."
            onClick={handleDogClick}
            button="ADOPT ME" />
        }
        {dogButtonClicked &&
          <CardTwo
            className="card2 dog2"
            cardTitle="Doggy"
            emoji={Dog}
            emojiAlt="dog" />
        }

      </div>

    </div>
  )
}
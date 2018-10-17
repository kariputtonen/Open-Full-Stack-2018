import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}
const Sisalto = (props) => {
//  Ei kovin kaunista, mutta en vielä osaa tehdä oikein
  return (
    <div>
      <Osa kurssinosa={props.kurssinosa} tehtavia={props.tehtavia} />

    </div>
  )
}
const Osa = (props) => {
  return (
    <p>{props.kurssinosa}: {props.tehtavia} tehtävää</p>
  )

}
const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.tehtavia} tehtävää</p>
    </div>
  )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssinosa={osa1.nimi} tehtavia={osa1.tehtavia}/>
      <Sisalto kurssinosa={osa2.nimi} tehtavia={osa2.tehtavia}/>
      <Sisalto kurssinosa={osa3.nimi} tehtavia={osa3.tehtavia}/>
      <Yhteensa tehtavia={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

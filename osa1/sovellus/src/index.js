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
// nyt kyllä tahmaa eteneminen. En ymmärrä kuinka tuo oliotaulukko tänne välitettäisiin.
// ja ilmeisesti selvisi tyyliin: {props.osat[0].nimi}
  return (
    <div>
      <Osa kurssinosa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
      <Osa kurssinosa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
      <Osa kurssinosa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
  )
}
const Osa = (props) => {
  return (
    <p><li>{props.kurssinosa}: {props.tehtavia} tehtävää</li></p>
  )

}
const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]
return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

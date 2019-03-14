import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}
const Sisalto = (props) => {
//  Ei kovin kaunista, mutta en vielä osaa tehdä oikein
// nyt kyllä tahmaa eteneminen. En ymmärrä kuinka tuo oliotaulukko tänne välitettäisiin.
// ja ilmeisesti selvisi tyyliin: {props.osat[0].nimi}
// Ja sitten laajennettiin kurssio-olion mallia ja lisätään piste-notaatioita
  return (
    <div>
      <Osa kurssinosa={props.kurssi.osat[0].nimi} tehtavia={props.kurssi.osat[0].tehtavia} />
      <Osa kurssinosa={props.kurssi.osat[1].nimi} tehtavia={props.kurssi.osat[1].tehtavia} />
      <Osa kurssinosa={props.kurssi.osat[2].nimi} tehtavia={props.kurssi.osat[2].tehtavia} />
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
      <p>Yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}
const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
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
  }
return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

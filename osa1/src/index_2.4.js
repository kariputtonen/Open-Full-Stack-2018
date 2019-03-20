import React from 'react'
import ReactDOM from 'react-dom'
// Tehtävään 2.4. tuki useille kursseille
  
function Kurssi(props) {
  return (
    <div>
      <Otsikko kurssi={props.kurssi} />
      <Sisalto kurssi={props.kurssi} />
      <Yhteensa kurssi={props.kurssi} />
    </div>
  )
}
const Otsikko = (props) => {
  return (
    <div key={props.kurssi.id}>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}

// map käyttöön
const Sisalto = (props) => {
  return (
    <div>
      {props.kurssi.osat.map(osa =>
        <li key={osa.id}>
         {osa.nimi}
         {": "} 
         {osa.tehtavia}
        </li>
      )}
    </div>
  )
}

const Yhteensa = (props) => {
  var summaaTehtavat = props.kurssi.osat.reduce(function(sum, osa) {
    //console.log("Summaus", sum, osa)
    return sum + osa.tehtavia
  }, 0)
  return (
    <div>
      <p>Yhteensä {summaaTehtavat} tehtävää</p>
    </div>
  )
}
// Useamman kurssin tuki laitettiin tähän constiin. Myös id:n tarve tuli selväksi selaimen varoitusten kautta.
const Kurssit = (props) => {
  return (
    <div>
      {props.kurssit.map((kurssi => 
        <div key={kurssi.id}>
          <Kurssi kurssi={kurssi} />
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
return (
    // Tuki usealla kurssille: Äkkiä keksimällä tähän tehdään yksinkertaisesti toiminto
    // joka "looppaa" nuo kurssit läpi. map:lla?  
    <div>
      <Kurssit kurssit={kurssit} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

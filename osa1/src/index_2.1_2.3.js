import React from 'react'
import ReactDOM from 'react-dom'
// Nyt kakkososassa päästään siistimään ykkösosan osaamattomuuttani hieman.
// Kakkososan alussa onkin esitelty map-funktio ja viittaus reducen käyttöön.
  
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
    <div>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}

// map käyttöön: Materiaalista tämän "apinointiin" kului jokunen tovi. 
// Erimerkki johdatti hieman "harhaan", enkä täysin ymmärtänyt konsoliin tulostuksen
// ja koodin toimimattomuuden yhteyttä.
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
  // käytetään reducea tässä, joka tuli kuvioihin uutena mukaan ja vaadittiin t. 2.3
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
const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
      },
      {
        nimi: 'Kikkelis kokkelis',
        tehtavia: 42,
        id: 4
      }
    ]
  }
return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

import React from 'react'
// Siirrettiin tämä Kurssien käsittely erilleen omaan hakemistoonsa

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
export default Kurssit
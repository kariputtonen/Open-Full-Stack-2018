import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi} - sovelluskehitys</h1>
    </div>
  )
}
const Sisalto = (props) => {
//  Ei kovin kaunista, mutta en vielä osaa tehdä oikein
  return (
    <div>
      <Osa kurssinosa={props.kurssinosa[0]} tehtavia={props.tehtavia[0]} />
      <Osa kurssinosa={props.kurssinosa[1]} tehtavia={props.tehtavia[1]} />
      <Osa kurssinosa={props.kurssinosa[2]} tehtavia={props.tehtavia[2]} />
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
  const kurssi = 'Half Stack'
  const osat = ['Reactin perusteet', 'Tiedonvälitys propseilla', 'Komponenttien tila']
  const tehtavat = [10, 7, 14]
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssinosa={osat} tehtavia={tehtavat}/>
      <Yhteensa tehtavia={tehtavat[0] + tehtavat[1] + tehtavat[2]} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

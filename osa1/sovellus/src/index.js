import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <p>{props.name} - sovelluskehitys</p>
    </div>
  )
}
const Sisalto = (props) => {
  return (
    <div>
      <p>{props.name} {props.tehtavia}</p>
    </div>
  )
}
const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.tehtavia}</p>
    </div>
  )
}
const App = () => {
  const kurssi = 'Half Stack'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  return (
    <div>
      <h1><Otsikko name={kurssi} /></h1>
      <p><Sisalto name={osa1} tehtavia={tehtavia1}/></p>
      <p><Sisalto name={osa2} tehtavia={tehtavia2}/></p>
      <p><Sisalto name={osa3} tehtavia={tehtavia3}/></p>
      <p><Yhteensa tehtavia={tehtavia1 + tehtavia2 + tehtavia3} /></p>
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

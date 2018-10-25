import React from 'react'
import ReactDOM from 'react-dom'

// Sovellus: Sama kuin 1.7, mutta siirretään toimintoja eri komponentteihin

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>

)
function Statistics()  {
  return (
    <div>
      <h1>Statistiikka</h1>
      <Statistic tila="hyva" text="Hyvä" />
      // Nämä siis pitäisi saada siistimmäksi:
      <p>Hyvä: {this.state.hyva}</p>
        <p>Neutraali: {this.state.neutraali}</p>
        <p>Huono: {this.state.huono}</p>
        <p>Keskiarvo: {this.state.keskiarvo}</p>
        <p>Positiivisia: {this.state.positiivisia} %</p>
    </div>
  )
}
function Statistic(props) {
  console.log(props.tila, props.text)
  return (
    <div>
      <p>{props.tila} {props.text}</p>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0
    }
  }

  // Klikkausten laskentatoiminnot
  asetaArvoon = (hyva, neutraali, huono) => {
    debugger
    this.setState({
      hyva: this.state.hyva + hyva,
      neutraali: this.state.neutraali + neutraali,
      huono: this.state.huono + huono
    })

    this.laskeStats(hyva, neutraali, huono)
  }

  // Tähän laskeStats()-funtioon piti siis lisätä argumentit (hyva, neutraali, huono),
  // jotta saatiin juuri painettu tila mukaan laskuihin.
  laskeStats = (hyva, neutraali, huono) => {

    let ka; // täytyykö nämä tosiaan esitellä näin? - tuli ruikutusta suorasta sijoituksesta
    ka = this.pyorista(((this.state.hyva+hyva) + (-(this.state.huono+huono)))/((this.state.hyva+hyva) +(this.state.neutraali+neutraali) + (this.state.huono+huono)), 2);
    let pos;
    pos = this.pyorista(100*(((this.state.hyva+hyva)/((this.state.hyva+hyva) + (this.state.neutraali+neutraali) + (this.state.huono+huono)))), 2)
    this.setState( {
      // Hieman rumasti tuo yhtälö rakennettu, mutta kelvatkoon. Meniköhän oikein?
      keskiarvo: ka,
      positiivisia: pos
    })
  }
  pyorista = (x, y) => {
    console.log(Number.parseFloat(x).toFixed(y))
    return Number.parseFloat(x).toFixed(y);
  }
  render() {
debugger
    return (

      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button onClick={this.asetaArvoon(1, 0, 0)} text="Hyvä" />
          <Button onClick={this.asetaArvoon(0, 1, 0)} text="Neutraali" />
          <Button onClick={this.asetaArvoon(0, 0, 1)} text="Huono" />

          <Statistics  />

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

// Sovellus: Sama kuin 1.7, mutta siirretään toimintoja eri komponentteihin

const Button = ({ handleClick, text }) => (
  
  <button onClick={handleClick}>
    {text}
  </button>
)
// Nämä Statistiikka-komponentit voisivat olla jollain tapaa
// kyllä dynaamisempia. Mutta näidenkin tappeluun kului
// aidosti monta päivää aikaa! En vaan osaa.
function Statistics(props)  {
  return (
    <div>
      <Statistic tila={props.tila} text={props.text} paate={props.paate}/>
    </div>
  )
}
function Statistic(props) {
  return (
    <div>
      <p>{props.text} {props.tila} {props.paate}</p>
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
    // console.log(Number.parseFloat(x).toFixed(y))
    return Number.parseFloat(x).toFixed(y);
  }
  render() {
// Kyllä tähän jotain järkeäkin pitäisi saada
// Vaikka tuossa kutsunkin erinäisiä komponentteja, niin
// koodi on sellaista copy-pastea, että alta pois. Looppeja?
// Nappien luonti oli myös tahmeaa, en keksinyt tapaa kuin
// kysymällä asiasta facebookissa kavereilta. Ei tämä opiskelu
// ihan vielä suju.
// Nuo tilat pitää siis tosiaan käsittääkseni ojentaa komponenteille
// yksitellen, eikä vain voi heittää oliota sinne?
    return (

      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button handleClick={() => this.asetaArvoon(1, 0, 0)} text="Hyvä" />
          <Button handleClick={() => this.asetaArvoon(0, 1, 0)} text="Neutraali" />
          <Button handleClick={() => this.asetaArvoon(0, 0, 1)} text="Huono" />

          <h1>Statistiikka</h1>
          <Statistics tila={this.state.hyva} text="Hyvä" />
          <Statistics tila={this.state.neutraali} text="Neutraali" />
          <Statistics tila={this.state.huono} text="Huono" />
          <Statistics tila={this.state.keskiarvo} text="Keskiarvo" />
          <Statistics tila={this.state.positiivisia} text="Positiivisia" paate="%" />
          
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

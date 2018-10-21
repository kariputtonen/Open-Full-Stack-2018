import React from 'react'
import ReactDOM from 'react-dom'

// Sovellus: Kolme nappia, jotka lisäävät painettaessa oman lokeronsa määrää
// ja näistä syötteistä lasketaan keskiarvo

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

  // HEMMETTI! Miten voi olla näin vaikeaa päästä käsiksi juuri vaihdettuun arvoon?
  // Lueskelin pitkään tästä ilmeisestä asynkronisuudesta, mutten löytänyt yksikertaista
  // ratkaisua. Sitten keksin, että kai täälläkin voi kutsua argumenteilla(tietenkin!).
  // Näemmä edes alustuksia ei tarvinnut tehdä noille argumenteille.
  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
    this.laskeStats(1, 0, 0)
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
    this.laskeStats(0, 1, 0)
  }
  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
    this.laskeStats(0, 0, 1)
  }
  // Tällaista kokeilin ylläoleviin. Mutta samankaltainen toiminta, vanha arvo jää laskuihin:
  //  klikHuono = () => {
  //  this.setState((prevState) => ({
  //    huono: prevState.huono + 1
  //  }))
  //  this.laskeStats()
  // }

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
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <button onClick={this.klikHyva}>Hyvä</button>
          <button onClick={this.klikNeutraali}>Neutraali</button>
          <button onClick={this.klikHuono}>Huono</button>
          <h1>Statistiikka</h1>
          <p>Hyvä: {this.state.hyva}</p>
          <p>Neutraali: {this.state.neutraali}</p>
          <p>Huono: {this.state.huono}</p>
          <p>Keskiarvo: {this.state.keskiarvo}</p>
          <p>Positiivisia: {this.state.positiivisia} %</p>

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

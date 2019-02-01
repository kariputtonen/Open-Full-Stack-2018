import React from 'react'
import ReactDOM from 'react-dom'

// Sovellus: Tekstin tulostus lisää, mikäli ei ole vielä syötteitä

const Button = ({ handleClick, text }) => (
  
  <button onClick={handleClick}>
    {text}
  </button>
)
// (Koetan muuntaa tämän luokaksi, jotta saan sille tarpeellisen tilan
// merkitsemään, jos "Ei yhtään annettua palautetta."-teksti on jo tulostettu
// Yksinkertaisella toiminnolla sai tuon tekstin tulostumaan useasti, mikä ei ole hyvä.)
// Jos nyt kuitenkin pidän asiat yksinkertaisena ja teen tuon tarkastelun
// yksinkertaisesti tuolla App-luokassa.
function Statistics(props)  {
  let tilasto = "" // Taas tällainen omituinen esittely, jolla sain koodin toimimaan
  if (props.yht > 0) {
    // console.log("Yhteensä": props.yht)
    tilasto = <Statistic tila={props.tila} text={props.text} paate={props.paate}/>
  } else {
    // tähän nyt ei mennä koskaan, mutta jääköön tulevaa varten tähän
    tilasto = <p>Ei yhtään annettua palautetta.</p>
  }
  return (
    <tr>
      {tilasto}
    </tr>
  )
}
function Statistic(props) {
  // Ei mitenkään sivistynyt ratkaisu laittaa tyhjää tägiä, mutta return vaatii jonkun paketointitägin
  return (
    <><td>{props.text}</td><td>{props.tila}</td><td>{props.paate}</td></>
  )
}
class App extends React.Component {
 // lisättiin yhteensä - merkitsemään onko vielä tullut palautteista
 // tulostettutyhja - merkitsemään, onko jo tulostettu teksti "Ei yhtään annettua palautetta."
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0,
      yhteensa: 0
    }
  }

  asetaArvoon = (hyva, neutraali, huono) => {
    // debugger
    this.setState({
      hyva: this.state.hyva + hyva,
      neutraali: this.state.neutraali + neutraali,
      huono: this.state.huono + huono,
      yhteensa: this.state.yhteensa + 1
    })
    this.laskeStats(hyva, neutraali, huono)
  }

  laskeStats = (hyva, neutraali, huono) => {
    let ka; 
    ka = this.pyorista(((this.state.hyva+hyva) + (-(this.state.huono+huono)))/((this.state.hyva+hyva) +(this.state.neutraali+neutraali) + (this.state.huono+huono)), 2);
    let pos;
    pos = this.pyorista(100*(((this.state.hyva+hyva)/((this.state.hyva+hyva) + (this.state.neutraali+neutraali) + (this.state.huono+huono)))), 2)
    this.setState( {
      keskiarvo: ka,
      positiivisia: pos
    })
  }
  pyorista = (x, y) => {
    // console.log(Number.parseFloat(x).toFixed(y))
    return Number.parseFloat(x).toFixed(y);
  }
  // Tein tähän siis ehdollisen renderöinnin. Viite materiaaliin hakusanalla.
  render() {
    const historia = () => {
      // console.log(this.state.yhteensa)
      if (this.state.yhteensa === 0) {
        return (
          <div>
            <p>Ei yhtään annettua palautetta.</p>
          </div>
        )
      } else {
        return (
          <div>
            <table>
              <tbody>
                <Statistics tila={this.state.hyva} text="Hyvä" yht={this.state.yhteensa}/>
                <Statistics tila={this.state.neutraali} text="Neutraali" yht={this.state.yhteensa}/>
                <Statistics tila={this.state.huono} text="Huono" yht={this.state.yhteensa}/>
                <Statistics tila={this.state.keskiarvo} text="Keskiarvo" yht={this.state.yhteensa}/>
                <Statistics tila={this.state.positiivisia} text="Positiivisia" paate="%" yht={this.state.yhteensa}/>
              </tbody>
            </table>
          </div>
        )
      }
    }  
  
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button handleClick={() => this.asetaArvoon(1, 0, 0)} text="Hyvä" />
          <Button handleClick={() => this.asetaArvoon(0, 1, 0)} text="Neutraali" />
          <Button handleClick={() => this.asetaArvoon(0, 0, 1)} text="Huono" />
        </div>
        <div>
          <h1>Statistiikka</h1>
          {historia()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

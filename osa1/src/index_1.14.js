import React from 'react'
import ReactDOM from 'react-dom'

// Anekdoottitehtävän laajennos: Lisätään äänestysominaisuus ja lasketaan kunkin anekdootin saamat äänet talteen

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
// Muodostetaan map-funktiolla anekdootteja vastaava taulukko äänille. Äänet aluksi nollaan.
const pisteet = anecdotes.map((anekdootti) => 0)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor(Math.random()*anecdotes.length),
      johdossa: 0 // aluksi saadaan olettaa, että ensimmäinen on äänestyksen johdossa
    }
  }

  satunnainenAnekdootti = () => {
    this.setState({
      selected: Math.floor(Math.random()*anecdotes.length)
    })
  }

  aanestaAnekdoottia = () => {
    pisteet[this.state.selected] += 1 // lisätään ääni kyseiselle anekdootille
  }

  // Mikäli on sama äänimäärä, tämä funktio valitsee eniten ääniä saaneeksi jälkimmäisen
  haeEnitenAaniaSaanut = () => {
    var i = 0
    pisteet.forEach((aanet) => {
      // pistetaulukosta verrataan äänimäärää ja osuessa vaihdetaan johtopaikka
      if (aanet > pisteet[this.state.johdossa]) {
        this.setState({
          johdossa: i
        })
      }
      i++ // seuraava äänimäärä tarkkailuun
    })
    return anecdotes[this.state.johdossa] // palautetaan kulloinkin johdossaoleva
  }

  render() {
    return (
      <div>
        <div>
          {this.props.anecdotes[this.state.selected]}
        </div>
        <div>
          <br></br>
          Tämän saamat äänet: {pisteet[this.state.selected]}
          <br></br>
          <br></br>
        </div>
        <div>
          <Button handleClick={() => this.aanestaAnekdoottia()} text="Äänestä tätä" />
          <Button handleClick={() => this.satunnainenAnekdootti()} text="Seuraava anekdootti" />
        </div>
        <div>
          <br></br>
          <b>Eniten ääniä saanut:</b>
          <br></br>
           {this.haeEnitenAaniaSaanut()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'

// Sovellus: Kolme nappia, jotka lisäävät painettaessa oman lokeronsa määrä
// ja näistä syötteistä lasketaan keskiarvo
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }
  asetaArvoon = (arvo) => {
    return () => {
      this.setState({ counter: arvo })
    }
  }

  render() {
  return (
    <div>
      <Display counter={this.state.counter}/>
      <div>
        <Button
          handleClick={this.asetaArvoon(this.state.counter + 1)}
          text="Plus"
        />
        <Button
          handleClick={this.asetaArvoon(this.state.counter - 1)}
          text="Minus"
        />
        <Button
          handleClick={this.asetaArvoon(0)}
          text="Zero"
        />
      </div>
    </div>
  )
}
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)

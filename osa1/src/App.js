import React from 'react';
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { 
            name: 'Arto Hellas',
            id: 1
        }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    // Tarkastellaan löytyykö kyseinen nimi jo luettelosta:
    var pos = this.state.persons.findIndex(el => el.name === this.state.newName)
    
    if (pos === -1) {
        const personObject = {
            name: this.state.newName,
            id: this.state.persons.length + 1
          }
        const persons = this.state.persons.concat(personObject)
        this.setState({
            persons: persons,
            newName: ''
        })
    } else {
        alert('Nimi on jo luettelossa.' )
    }
  }

  // Tapahtumankäsittelijä
  handlePersonChange = (event) => {
    // console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        
        <form onSubmit={this.addPerson}>
            <div>
                Nimi: <input
                    type="text"
                    value={this.state.newName}
                    onChange={this.handlePersonChange}
                 />
            </div>          
            <div>
                <button type="submit">Lisää henkilö</button>
            </div>
        </form>

        <h2>Numerot</h2>
        <ul>
            {this.state.persons.map(person => <Person key={person.id} person={person} />)}
        </ul>
      </div>
    )
  }
}

export default App
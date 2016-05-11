import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Hey - {this.props.myState}</h2>
        <span>
          <h1>Subreddit</h1>
          <select>
              <option value="1">
                react
              </option>
          </select>
        </span>
        <p>
          <span>
            Ultima Atualizacao em: {" "}
          </span>
          <a href="#">
            Atualizar
          </a>
        </p>

        <div>
          Postagens aqui
        </div>
      </div>
    )
  }
}

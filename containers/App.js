import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectReddit} from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.onSelectChange = this.onSelectChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  onSelectChange(e){
    let select = e.target;
    let selectedReddit = select.options[select.selectedIndex].value;
    this.props.dispatch(selectReddit(selectedReddit));
  }

  renderOptions(){
    return this.props.reddits.map(reddit => {
      return <option key={reddit} value = {reddit}>{reddit}</option>
    })
  }

  render() {
    return (
      <div>
        <span>
          <h1>Subreddit</h1>
          <select onChange={this.onSelectChange} value={this.props.selectedReddit}>
              {this.renderOptions()}
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

function mapStateToProps(state){
  return {
    selectedReddit:state.selectedReddit,
    postsByReddit: state.postsByReddit,
    reddits:["react", "frontend"]
  }
}

export default connect(mapStateToProps)(App)
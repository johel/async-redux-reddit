import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectReddit,refreshReddit, fetchPosts} from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.onSelectChange = this.onSelectChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.refreshClick = this.refreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPosts(selectedReddit))
  }

  onSelectChange(e){
    const { dispatch } = this.props
    let select = e.target;
    let selectedReddit = select.options[select.selectedIndex].value;
    dispatch(selectReddit(selectedReddit));
    dispatch(fetchPosts(selectedReddit)).catch(()=>alert('houve um erro'));
  }

  renderOptions(){
    return this.props.reddits.map(reddit => {
      return <option key={reddit} value = {reddit}>{reddit}</option>
    })
  }

  refreshClick(){
    const {dispatch, selectedReddit} = this.props;
    dispatch(refreshReddit(selectedReddit));
    // setTimeout(()=>console.log('current reddit',selectedReddit), 5000);
    setTimeout(()=>dispatch(fetchPosts(selectedReddit)).catch(()=>alert('houve um erro')), 5000);
    // dispatch(fetchPosts(selectedReddit)).catch(()=>alert('houve um erro'));
  }

  renderPosts(){
    const {selectedReddit, postsByReddit} = this.props;
    if(!postsByReddit[selectedReddit]){
      console.log('chegou no render posts vazio');
      return <h2>Post ainda nao existem</h2>;
    }
    if(postsByReddit[selectedReddit].isLoading){
      return <h2>Loading...</h2>;
    }
    console.log('chegou no render posts preenchido');
    return (
      <ul>
        {postsByReddit[selectedReddit].items.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    )
  }

  render() {
    const {selectedReddit, postsByReddit} = this.props;
    return (
      <div>
        <span>
          <h1>{selectedReddit}</h1>
          <select onChange={this.onSelectChange} value={selectedReddit}>
              {this.renderOptions()}
          </select>
        </span>
        <p>
          <span>
            Atualizado em:{" "} { postsByReddit[selectedReddit] && postsByReddit[selectedReddit].lastUpdated?
               postsByReddit[selectedReddit].lastUpdated.toLocaleString() : '' }{" "}
          </span>
          <a onClick = {this.refreshClick} href="#">
            Atualizar
          </a>
        </p>

        <div>
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedReddit: state.selectedReddit,
    postsByReddit: state.postsByReddit,
    reddits:["reactjs", "frontend", "error-react"]
  }
}

export default connect(mapStateToProps)(App)
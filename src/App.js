import React, { Component } from 'react'
import { toast } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import loadimg from './loadimg.png'

toast.configure()

class App extends Component {
  state = {
    data: {},
    loaded: false
  }

  componentDidMount(){
    const url="https://api.github.com/emojis"
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
          loaded: true,
          selectedCard: null,
          emojiText: null
        })
      })
  }

  onCardSelect(key){
    navigator.clipboard.writeText(":"+key+":");
    this.setState({selectedCard:key});
    toast.success( "Your emoji has been copied 🥳",{autoClose: 3000})
  }

  render() {
    const { data } = this.state
    const { loaded } = this.state
    if(loaded){
    return (
      <>

  <h1 className="has-text-centered" id="headertext">Readmoji</h1>
  <div className="has-text-centered" id="subtext"><span class="tag is-link" id="emojitext">Add emotion to your README's</span>&nbsp;<span class="tag is-danger" id="emojitext">Copy Emoji Codes :smile:</span>&nbsp;<span class="tag is-success" id="emojitext">Sorted by Alphabetical Order</span>&nbsp;<span class="tag is-warning" id="emojitext">Powered by Github API</span></div>

  <div class="columns is-multiline is-centered">
    {
      Object.keys(data).map((key, index) =>(
        <div className="column is-narrow has-text-centered">
          <div className="box">
            <figure className="image container is-64x64 " onClick={()=>this.onCardSelect(key)}>
              <img src={data[key]} alt={key}/>
            </figure>
      <span className="tag is-dark" id="emojitext">:{key}:</span>
          </div>
        </div>
      ))
    }
  </div>

  <footer className="footer">
    <div className="content has-text-centered">
        <p id="footertext">
            &lt;/&gt; with ❤️ by <a href="https://github.com/capturemathan">Mathan</a>
        </p>
    </div>
  </footer>

</>
    )
  }else{
    return( 
        <section id="heroid" class="hero is-fullheight is-hcentered is-vcentered">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src={loadimg} alt="Loading" height="500" width="500"/>
                    <p id="loadtext">Loading your emojis</p>
                </div>
            </div>
        </section>
    )
  }
}
}

export default App
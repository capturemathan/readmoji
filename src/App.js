import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    data: {}
  }

  componentDidMount(){
    const url="https://api.github.com/emojis"
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data:result
        })
      })
  }

  render() {
    const { data } = this.state
    return (
      <>

  <h1 className="has-text-centered" id="headertext">Readmoji</h1>
  <div className="has-text-centered" id="subtext"><span class="tag is-link" id="emojitext">Add emotion to your README's</span>&nbsp;<span class="tag is-success" id="emojitext">Sorted by Alphabetical Order</span>&nbsp;<span class="tag is-danger" id="emojitext">Click to copy Emoji Codes</span>&nbsp;<span class="tag is-warning" id="emojitext">Powered by Github API</span></div>

  <div class="columns is-multiline is-centered">
    {
      Object.keys(data).map((key, index) =>(
        <div className="column is-narrow has-text-centered">
          <div className="box">
            <figure className="image container is-64x64 ">
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
  }
}

export default App
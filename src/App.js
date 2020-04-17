import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <>

  <h1 className="has-text-centered" id="headertext">Readmoji</h1>
  <div className="has-text-centered" id="subtext"><span class="tag is-link" id="emojitext">Emoji Guide for README's</span></div>

  <div class="columns is-multiline is-centered">
    <div class="column is-narrow has-text-centered">
      <div class="box">
        <figure class="image container is-64x64 ">
          <img class="is-rounded" src="https://github.githubassets.com/images/icons/emoji/bowtie.png?v8" alt="emoji"/>
        </figure>
        <span class="tag is-success" id="emojitext">:bowtie:</span>
      </div>
    </div>
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
import React, { Component } from 'react'

import adventureCat from './images/adventure-cat.png'
import classyCat from './images/class-act.png'
import gangnamCat from './images/gangnamtocat.png'
import minerCat from './images/minertocat.png'
import sakeCat from './images/saketocat.png'
import surferCat from './images/surftocat.png'
import userPic from './images/user.png'

import Card from './components/Card'

const App = () => {
  return (
    <>
      <nav>
        <section class="left-nav">
          <i class="fab fa-github"></i>
          <p class="title">
            <a href="#">Octodex </a>
          </p>
          <p class="home">
            <a href="#">Home</a>
          </p>
          <p class="faq">
            <a href="#">FAQ</a>
          </p>
        </section>
        <section class="right-nav">
          <p class="twitter">
            <a href="#">Follow us on Twitter</a>
          </p>
          <p>
            <a href="#">Back to GitHub.com</a>
          </p>
        </section>
      </nav>
      <main>
        <Card
          image={adventureCat}
          number="#1: "
          name="Adventure Cat"
          pfp={userPic}
        />
        <Card image={classyCat} number="#2: " name="Classy Cat" pfp={userPic} />
        <Card
          image={gangnamCat}
          number="#3: "
          name="Gangnam Style Cat"
          pfp={userPic}
        />
        <Card image={minerCat} number="#4: " name="Miner Cat" pfp={userPic} />
        <Card image={sakeCat} number="#5: " name="Sake Cat" pfp={userPic} />
        <Card image={surferCat} number="#6: " name="Surfer Cat" pfp={userPic} />
      </main>
      <footer>
        <p>© 2013 – 2019 GitHub, Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

import React from 'react'

const Card = props => {
  return (
    <section class="card">
      <img class="main-pic" src={props.image} />
      <section class="image-info">
        <p class="octocat-name">
          <span class="number">{props.number}</span>
          {props.name}
        </p>
        <img class="user-pic" src={props.pfp} />
      </section>
    </section>
  )
}

export default Card

import React from 'react'

export default function Index () {
  return (
    <div className='container'>
      <div className='box'>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-128x128'>
              <img
                className='is-rounded'
                src='https://chinuxparibus.github.io/avatar-cat.gif'
                alt='Adam, go fuck yourself with Tailwind'
              />
            </p>
          </figure>
          <div className='media-content ml-4'>
            <h1 className='title'>Jhony Grillet</h1>
            <h2 className='subtitle'>You read it from an avocado 🥑</h2>
          </div>
        </article>
      </div>
    </div>
  )
}

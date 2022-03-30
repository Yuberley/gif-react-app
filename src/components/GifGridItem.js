import React from 'react'

export const GifGridItem = ({ gif }) => {

  return (
    <div>
        <img src={ gif.url } alt={ gif.title } />
        <p> { gif.title } </p>
    </div>
  )
}

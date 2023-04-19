/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React from 'react'

export const Number = ({value = '0'}) => {
  const result = String(value);
  return (
      <div className='digital'>
       
        <p>{result}</p>
      </div>
  )
}

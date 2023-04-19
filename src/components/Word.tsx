/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React from 'react'
export interface WordType{
    value:any;
    hidden?:boolean;
}
export const Word = ({ value, hidden = false }:WordType) => {
  const getStyle = ():any=> {
    return {
      visibility:  hidden ? 'hidden' : 'visible'
    }
  }
  return (
    <div className='digital'>
      <p>{value}</p>
      <p style={getStyle()}>{value}</p>
    </div>
  )
}
import React from 'react'
import Loader from 'react-loader-spinner'


export const Loading = () => {
  return (
    <div className='justify-center items-center'>
        <Loader type='paff' color='#00BFFF' height={550} width={80}/>
    </div>
  )
}

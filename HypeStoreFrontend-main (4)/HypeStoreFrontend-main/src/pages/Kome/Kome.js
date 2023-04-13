import React from 'react'
import { Komentare } from '../../components/Comments/Komentare'
import CurrentUserPage from '../CurrentUserPage'

const Kome= () => {
  return (
    <div>
        <CurrentUserPage/>
        <Komentare/>
    </div>
  )
}

export default Kome;
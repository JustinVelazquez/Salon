import React from 'react'
import Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom'
import {services, stylists } from '../constants/index.js'

const Booking = () => {

const handleSubmit = () => {

}

  return (
    <>
    <h2>Book an Appointment</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor=''></label>
      <input type='text'></input>

    </form>
    </>
  )
}

export default Booking
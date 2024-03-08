import React from 'react'
import './BookingNow.css'

const BookingNow = () => {
  return (
    <section className='g-wrapper'>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Booking Now</span>
          <span className='secondaryText'>Subscribe and find super attractive price
            <br />
            Find your residence soon
          </span>
          <button className='button'>
            <a href="mailto:hmulya05@gmail.com">Booking Now</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookingNow
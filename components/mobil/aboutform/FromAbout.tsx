import React from 'react'

const FormAbout = () => {
  return (
    <div className="px-30">
      <form action="" className="">
        <div className="about_form">
          <input className="about_input" type="text" placeholder="David Carron" />
          <input className="about_input" type="email" placeholder="david.c@mai|" />
          <input className="about_input" type="number" placeholder="Phone" />
          <textarea className="about_input" placeholder="Message" />
        </div>
        <button className="btn_send_message">Send Message</button>
      </form>
    </div>
  )
}

export default FormAbout

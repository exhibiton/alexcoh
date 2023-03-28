import React from 'react'
import Image from 'next/image'

const Address = () => {
  return (
    <div className="address_bg ">
      <div className="address_img">
        <Image width={300} height={84} src="/assets/img/about-address-img.png" alt="about address img " />
      </div>
      <div className="px-30">
        <p className="about_address">Address</p>
        <p className="about_address_details">Kalliomäki 39A, 02490 Pikkala, Finland</p>
        <p className="about_address">Contacts</p>
        <p className="about_address_details pb-40">+358452259190 hello@alexcoh.com</p>
      </div>
      <Image
        width={79}
        height={60}
        className="img_about"
        src="/assets/img/about-address-img-2.png"
        alt="about address img"
      />
    </div>
  )
}

export default Address

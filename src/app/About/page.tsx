import React from 'react'
import Image from "next/image"
import cloudimage from "../../../public/cloud-hosting.png"

const page = () => {
  return (
    <section className='fix-height container m-auto'>
      <h1 className='font-bold text-3xl' > About Page</h1>
      <Image src={cloudimage} alt='cloud'  width={500} height={500}></Image>
    </section>
  )
}

export default page

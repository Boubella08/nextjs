

import Link from 'next/link';
import Hero from "../components/home/hero"
import Webhosting from '../components/home/webhosting';

const home = () => {

  return (
    <section>

      <div className='fix-height'>

        <Hero />
        <h2 className='font-bold text-center text-2xl text-gray-950 my-4' >Choose your Web hosting</h2>

        <div className='container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7'>
          <Webhosting />
          <Webhosting />
          <Webhosting />

        </div>


      </div>

    </section>

  )
}


export default home;
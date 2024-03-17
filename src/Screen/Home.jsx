import React from 'react'
import { Navabar} from '../componets/Navabar'
// @ts-ignore
import Footer from '../componets/Footer'
import { Card } from '../componets/Card'
import { Carousal } from '../componets/Carousal'



export const Home = () => {
  return (
    <div>
        <div>
            <Navabar/>
        </div>
        <div>
          <Carousal/>
        </div>
       <div className='m-3'>
        <Card/>
       </div>
       <div>
          <Footer/>
       </div>

    </div>
  )
}

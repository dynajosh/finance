import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='getInTouch'>
                <a href='#'>contact</a>
                <a href='#'>careers</a>
                <a href='#'>unsubscribe</a>

            </div>
            <div className='smart'>
                <a href='#'>About</a>
                <a href='#'>smartreads</a>
                <a href='#'>captivate</a>
                <a href='#'>smartadvisor</a>
                <a href='#'>press</a>

            </div>
            <div className='social'>
            <a href='#'>facebook</a>
            <a href='#'>twitter</a>
            <a href='#'>google</a>

        </div>
          <div className='legal'>
                <a href='#'>Terms of service</a>
                <a href='#'>privacy policy</a>
                <a href='#'>Adchoices</a>
                


            </div>
        </div>
    )
}

export default Footer

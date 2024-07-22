import React from 'react'
import Header from './Header'
function Home() {
    return (
        <>
            <Header />
            <div className='nav'>
                nav
            </div>
            <div className='row'>

                <div className='article'>
                    post
                </div>
                <div className='aside'>
                    aside
                </div>
            </div>


            <div className='footer'>
                footer
            </div>
        </>

    )
}
export default Home
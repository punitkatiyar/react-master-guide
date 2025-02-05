import React from 'react'
import Gcomp from './Gcomp'

function Fcomp(props) {
    return (
        <>
            <h1>Fcomp</h1>
            <Gcomp title={props.title} />
        </>
    )
}

export default Fcomp
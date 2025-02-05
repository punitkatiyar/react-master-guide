import React from 'react'
import Ecomp from './Ecomp'
import Fcomp from './Fcomp'

function Dcomp(props) {
    return (
        <>
            <h1>Dcomp</h1>
            <Ecomp title={props.title} />
            <Fcomp title={props.title} />
        </>
    )
}

export default Dcomp
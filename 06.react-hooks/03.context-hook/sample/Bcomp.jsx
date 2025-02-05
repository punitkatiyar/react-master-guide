import React from 'react'
import Dcomp from './Dcomp'

function Bcomp(props) {
    return (
        <>
            <h1>Bcomp</h1>
            <Dcomp title={props.title} />
        </>
    )
}

export default Bcomp
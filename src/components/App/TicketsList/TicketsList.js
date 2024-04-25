import React, { useState } from 'react'
import style from './TicketsList.module.scss'

import TicketCard from './TicketCard/TicketCard'

const TicketsList = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)

    const ticketsColl=[1,2,3].map(val=>{
        return(
            <li
                className={style.ticketsList__item}
                key={val}
            >
                <TicketCard/>
            </li>
        )
    })

    return (
        <ul className={style.ticketsList}>
            {ticketsColl}
        </ul>
    )
}

// takeMeName.defaultProps={
//     takeMeName:'',
// }
// takeMeName.propTypes={
//     takeMeName:(props, propName, componentName)=>{
//         if (typeof props[propName]==='string')
//             return null
//         return new TypeError(`${componentName}: ${propName} must be string`)
//     },
// }

export default TicketsList

import React, { useState } from 'react'
import style from './TicketCard.module.scss'

const TicketCard = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)
    return (
        <article className={style.ticketCard}>
            <div className={style.ticketCard__header}>
                <span className={style.ticketCard__cost}>13 400 Р</span>
                <div className={style.ticketCard__logo}></div>
            </div>
            <div className={style.ticketCard__inner}>
                <div className={style.ticketCard__transferRow}>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>MOW – HKT</span>
                        <span className={style.ticketCard__infoContent}>10:45 – 08:00</span>
                    </div>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>В пути</span>
                        <span className={style.ticketCard__infoContent}>21ч 15м</span>
                    </div>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>2 пересадки</span>
                        <span className={style.ticketCard__infoContent}>HKG, JNB</span>
                    </div>
                </div>
                <div className={style.ticketCard__transferRow}>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>MOW – HKT</span>
                        <span className={style.ticketCard__infoContent}>11:20 – 00:50</span>
                    </div>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>В пути</span>
                        <span className={style.ticketCard__infoContent}>13ч 30м</span>
                    </div>
                    <div className={style.ticketCard__infoBlock}>
                        <span className={style.ticketCard__infoAnn}>2 пересадки</span>
                        <span className={style.ticketCard__infoContent}>HKG</span>
                    </div>
                </div>
            </div>
        </article>
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

export default TicketCard

import React, { useState } from 'react'
import style from './App.module.scss'

import TransfersPanel from './TransfersPanel/TransfersPanel'
import OrganizePanel from './OrganizePanel/OrganizePanel'
import TicketsList from './TicketsList/TicketsList'
import ShowMoreBtn from './ShowMoreBtn/ShowMoreBtn'
import {test} from '../../stores/fetch'

const App=()=>{
    // test()
    // const [takeMeName,setTakeMeName]=useState(undefined)

    // ---------------- forTransfersPanel

    // ---------------- forOrganizePanel

    // ---------------- forTicketsList

    // ---------------- forShowMoreBtn

    return (
        <div className={style.app}>
            <header className={style.app__header}></header>
            <div className={style.app__inner}>
                <aside className={style.app__sidebar}>
                    <TransfersPanel/>
                </aside>
                <main className={style.app__main}>
                    <OrganizePanel/>
                    <TicketsList/>
                    <ShowMoreBtn/>
                </main>
            </div>
        </div>
    )
}

export default App

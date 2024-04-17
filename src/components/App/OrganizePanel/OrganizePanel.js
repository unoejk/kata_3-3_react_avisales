import React, { useState } from 'react'
import style from './OrganizePanel.module.scss'

const OrganizePanel = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)
    return (
        <nav className={style.organizePanel}>
            <button className={`${style.organizePanel__btn} ${style['organizePanel__btn--isActive']}`}>
                САМЫЙ ДЕШЕВЫЙ
            </button>
            <button className={style.organizePanel__btn}>
                САМЫЙ БЫСТРЫЙ
            </button>
            <button className={style.organizePanel__btn}>
                ОПТИМАЛЬНЫЙ
            </button>
        </nav>
        // <div className={'testDiv'}>Hello there</div>
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

export default OrganizePanel

import React, { useState } from 'react'
import style from './ShowMoreBtn.module.scss'

const ShowMoreBtn = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)
    return (
        <button className={style.showMoreBtn}>
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
        </button>
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

export default ShowMoreBtn

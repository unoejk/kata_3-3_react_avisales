import React, { useState } from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import style from './OrganizePanel.module.scss'

const OrganizePanel=(props)=>{
    // const [takeMeName,setTakeMeName]=useState(undefined)

    return (
        <nav className={style.organizePanel}>
            <button
                // className={`${style.organizePanel__btn} ${style['organizePanel__btn--isActive']}`}
                className={classNames(
                    style.organizePanel__btn,
                    { [style['organizePanel__btn--isActive']] : props.activeOrganize==='cheap' }
                )}
                onClick={()=>props.changeOrganize('cheap')}
            >
                САМЫЙ ДЕШЕВЫЙ
            </button>
            <button
                className={classNames(
                    style.organizePanel__btn,
                    { [style['organizePanel__btn--isActive']] : props.activeOrganize==='fast' }
                )}
                onClick={()=>props.changeOrganize('fast')}
            >
                САМЫЙ БЫСТРЫЙ
            </button>
            <button
                className={classNames(
                    style.organizePanel__btn,
                    { [style['organizePanel__btn--isActive']] : props.activeOrganize==='optimal' }
                )}
                onClick={()=>props.changeOrganize('optimal')}
            >
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

// const mapStateToProps=(state)=>{
//     return {
//         activeOrganize:state
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         changeOrganize:(newOrganize)=>{
//             return dispatch(
//                 {
//                     type:'changeOrganize',
//                     payload:newOrganize,
//                 }
//             )
//         }
//     }
// }

const mapStateToProps=(state)=>({
    activeOrganize:state.activeOrganize,
})
const mapDispatchToProps=(dispatch)=>({
    changeOrganize:(payload)=>dispatch({
        type:'changeOrganize',
        payload,
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(OrganizePanel)

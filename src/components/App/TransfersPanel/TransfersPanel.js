import React, { useState } from 'react'
import style from './TransfersPanel.module.scss'
import { connect } from 'react-redux'

const TransfersPanel = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)

    const getFilterAllChecked=()=>{
        for (let key in props.activeFilters){
            if (props.activeFilters[key]===false){
                return false
            }
        }
        return true
    }

    return (
        <div className={style.transfersPanel}>
            <h2 className={style.transfersPanel__panelName}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
            <ul className={style.transfersPanel__list}>
                <li className={style.transfersPanel__item}>
                    <label className={style.transfersPanel__label}>
                        <div className={style.transfersPanel__checkbox}>
                            <input
                                className={style.transfersPanel__realCheckbox}
                                type="checkbox"
                                checked={getFilterAllChecked()}
                                onChange={()=>{props.changeFilter('all')}}
                                // onChange={(e)=>props.changeFilter({
                                //     name:'all',
                                //     val:!e.target.defaultChecked,
                                // })}
                            />
                            <span className={style.transfersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.transfersPanel__labelAnn}>Все</span>
                    </label>
                </li>
                <li className={style.transfersPanel__item}>
                    <label className={style.transfersPanel__label}>
                        <div className={style.transfersPanel__checkbox}>
                            <input
                                className={style.transfersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.activeFilters.sans}
                                onChange={()=>{props.changeFilter('sans')}}
                            />
                            <span className={style.transfersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.transfersPanel__labelAnn}>Без пересадок</span>
                    </label>
                </li>
                <li className={style.transfersPanel__item}>
                    <label className={style.transfersPanel__label}>
                        <div className={style.transfersPanel__checkbox}>
                            <input
                                className={style.transfersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.activeFilters.one}
                                onChange={()=>{props.changeFilter('one')}}
                            />
                            <span className={style.transfersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.transfersPanel__labelAnn}>1 пересадка</span>
                    </label>
                </li>
                <li className={style.transfersPanel__item}>
                    <label className={style.transfersPanel__label}>
                        <div className={style.transfersPanel__checkbox}>
                            <input
                                className={style.transfersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.activeFilters.two}
                                onChange={()=>{props.changeFilter('two')}}
                            />
                            <span className={style.transfersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.transfersPanel__labelAnn}>2 пересадки</span>
                    </label>
                </li>
                <li className={style.transfersPanel__item}>
                    <label className={style.transfersPanel__label}>
                        <div className={style.transfersPanel__checkbox}>
                            <input
                                className={style.transfersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.activeFilters.three}
                                onChange={()=>{props.changeFilter('three')}}
                            />
                            <span className={style.transfersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.transfersPanel__labelAnn}>3 пересадки</span>
                    </label>
                </li>
            </ul>
        </div>
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

const mapStateToProps=(state)=>({
    activeFilters:state.activeFilters,
})
const mapDispatchToProps=(dispatch)=>({
    changeFilter:(payload)=>dispatch({
        type:'changeFilters',
        payload,
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(TransfersPanel)
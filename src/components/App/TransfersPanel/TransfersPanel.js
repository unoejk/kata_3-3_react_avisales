import React, { useState } from 'react'
import style from './TransfersPanel.module.scss'

const TransfersPanel = (props) => {
    // const [takeMeName,setTakeMeName]=useState(undefined)
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

export default TransfersPanel

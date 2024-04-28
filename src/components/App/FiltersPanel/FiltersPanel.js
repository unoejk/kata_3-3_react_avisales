import React from 'react'
import { connect } from 'react-redux'
import style from './FiltersPanel.module.scss'

const FiltersPanel = (props) => {

    const getFilterAllChecked=()=>{
        for (let key in props.filters){
            if (props.filters[key]===false){
                return false
            }
        }
        return true
    }

    return (
        <div className={style.filtersPanel}>
            <h2 className={style.filtersPanel__panelName}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
            <ul className={style.filtersPanel__list}>
                <li className={style.filtersPanel__item}>
                    <label className={style.filtersPanel__label}>
                        <div className={style.filtersPanel__checkbox}>
                            <input
                                className={style.filtersPanel__realCheckbox}
                                type="checkbox"
                                checked={getFilterAllChecked()}
                                onChange={()=>{
                                    props.setFilters('all')
                                    props.updateActualTicketsList()
                                }}
                            />
                            <span className={style.filtersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.filtersPanel__labelAnn}>Все</span>
                    </label>
                </li>
                <li className={style.filtersPanel__item}>
                    <label className={style.filtersPanel__label}>
                        <div className={style.filtersPanel__checkbox}>
                            <input
                                className={style.filtersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.filters.sans}
                                onChange={()=>{
                                    props.setFilters('sans')
                                    props.updateActualTicketsList()
                                }}
                            />
                            <span className={style.filtersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.filtersPanel__labelAnn}>Без пересадок</span>
                    </label>
                </li>
                <li className={style.filtersPanel__item}>
                    <label className={style.filtersPanel__label}>
                        <div className={style.filtersPanel__checkbox}>
                            <input
                                className={style.filtersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.filters.one}
                                onChange={()=>{
                                    props.setFilters('one')
                                    props.updateActualTicketsList()
                                }}
                            />
                            <span className={style.filtersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.filtersPanel__labelAnn}>1 пересадка</span>
                    </label>
                </li>
                <li className={style.filtersPanel__item}>
                    <label className={style.filtersPanel__label}>
                        <div className={style.filtersPanel__checkbox}>
                            <input
                                className={style.filtersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.filters.two}
                                onChange={()=>{
                                    props.setFilters('two')
                                    props.updateActualTicketsList()
                                }}
                            />
                            <span className={style.filtersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.filtersPanel__labelAnn}>2 пересадки</span>
                    </label>
                </li>
                <li className={style.filtersPanel__item}>
                    <label className={style.filtersPanel__label}>
                        <div className={style.filtersPanel__checkbox}>
                            <input
                                className={style.filtersPanel__realCheckbox}
                                type="checkbox"
                                checked={props.filters.three}
                                onChange={()=>{
                                    props.setFilters('three')
                                    props.updateActualTicketsList()
                                }}
                            />
                            <span className={style.filtersPanel__fakeCheckbox}></span>
                        </div>
                        <span className={style.filtersPanel__labelAnn}>3 пересадки</span>
                    </label>
                </li>
            </ul>
        </div>
    )
}

FiltersPanel.defaultProps = {
    filters: {},
    setFilters: () => {},
    updateActualTicketsList: () => {},
}
FiltersPanel.propTypes = {
    filters: (props, propName, componentName) => {
        if (typeof props[propName] === 'object') return null
        return new TypeError(`${componentName}: ${propName} must be object`)
    },
    setFilters: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    updateActualTicketsList: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
}

const mapStateToProps=(state)=>({
    filters:state.filters,
})
const mapDispatchToProps=(dispatch)=>({
    setFilters:(payload)=>dispatch({
        type:'setFilters',
        payload,
    }),
    updateActualTicketsList:()=>dispatch({
        type:'updateActualTicketsList',
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(FiltersPanel)
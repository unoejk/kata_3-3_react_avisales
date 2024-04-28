import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import style from './SortPanel.module.scss'

const SortPanel=(props)=>{
    return (
        <nav className={style.sortPanel}>
            <button
                className={classNames(
                    style.sortPanel__btn,
                    { [style['sortPanel__btn--isActive']] : props.sort==='cheap' }
                )}
                onClick={()=> {
                    props.setSort('cheap')
                    props.updateActualTicketsList()
                }}
            >
                САМЫЙ ДЕШЕВЫЙ
            </button>
            <button
                className={classNames(
                    style.sortPanel__btn,
                    { [style['sortPanel__btn--isActive']] : props.sort==='fast' }
                )}
                onClick={()=> {
                    props.setSort('fast')
                    props.updateActualTicketsList()
                }}
            >
                САМЫЙ БЫСТРЫЙ
            </button>
            <button
                className={classNames(
                    style.sortPanel__btn,
                    { [style['sortPanel__btn--isActive']] : props.sort==='optimal' }
                )}
                onClick={()=> {
                    props.setSort('optimal')
                    props.updateActualTicketsList()
                }}
            >
                ОПТИМАЛЬНЫЙ
            </button>
        </nav>
    )
}

SortPanel.defaultProps = {
    sort: '',
    setSort: () => {},
    updateActualTicketsList: () => {},
}
SortPanel.propTypes = {
    sort: (props, propName, componentName) => {
        if (typeof props[propName] === 'string') return null
        return new TypeError(`${componentName}: ${propName} must be string`)
    },
    setSort: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    updateActualTicketsList: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
}

const mapStateToProps=(state)=>({
    sort:state.sort,
})
const mapDispatchToProps=(dispatch)=>({
    setSort:(payload)=>dispatch({
        type:'setSort',
        payload,
    }),
    updateActualTicketsList:()=>dispatch({
        type:'updateActualTicketsList',
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(SortPanel)

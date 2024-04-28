import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import style from './TicketsList.module.scss'

import {Spin} from 'antd'
import TicketCard from './TicketCard/TicketCard'

const TicketsList = (props) => {

    const actualTicketsList=props.actualTicketsList.slice(0,props.ticketsShownQuantity)

    const ticketsColl=actualTicketsList.map(ticket=>{
        return(
            <li
                className={style.ticketsList__item}
                key={Math.random()*10**17}
            >
                <TicketCard
                    {...ticket}
                />
            </li>
        )
    })

    return (
        <ul className={style.ticketsList}>
            <Spin
                size="large"
                className={classNames(
                    style.ticketsList__spin,
                    { 'disabled': props.loading === false },
                )}
            />
            <h1
                className={classNames(
                    style.ticketsList__message,
                    { 'disabled': actualTicketsList.length !== 0 || props.loading === true },
                )}
            >{props.error===false ? 'Ничего не найдено' : props.error}</h1>
            {ticketsColl}
        </ul>
    )
}

TicketsList.defaultProps = {
    loading: false,
    error: false,
    actualTicketsList: [],
    ticketsShownQuantity: 0,
}
TicketsList.propTypes = {
    loading: (props, propName, componentName) => {
        if (typeof props[propName] === 'boolean') return null
        return new TypeError(`${componentName}: ${propName} must be boolean`)
    },
    error: (props, propName, componentName) => {
        if (typeof props[propName] === 'boolean' || typeof props[propName] === 'string') return null
        return new TypeError(`${componentName}: ${propName} must be boolean or string`)
    },
    actualTicketsList: (props, propName, componentName) => {
        if (Array.isArray(props[propName])) return null
        return new TypeError(`${componentName}: ${propName} must be array`)
    },
    ticketsShownQuantity: (props, propName, componentName) => {
        if (typeof props[propName] === 'number') return null
        return new TypeError(`${componentName}: ${propName} must be number`)
    },
}

const mapStateToProps=(state)=>({
    loading:state.loading,
    error:state.error,
    actualTicketsList:state.actualTicketsList,
    ticketsShownQuantity:state.ticketsShownQuantity,
})
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps,mapDispatchToProps)(TicketsList)

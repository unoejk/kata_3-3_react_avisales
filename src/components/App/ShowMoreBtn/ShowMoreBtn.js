import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import style from './ShowMoreBtn.module.scss'

const ShowMoreBtn = (props) => {
    return (
        <button
            className={classNames(
                style.showMoreBtn,
                {'disabled':props.ticketsShownQuantity>=props.actualTicketsListLength}
            )}
            onClick={props.incTicketsShownQuantity}
        >
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
        </button>
    )
}

ShowMoreBtn.defaultProps = {
    actualTicketsListLength: 0,
    ticketsShownQuantity: 0,
    incTicketsShownQuantity: () => {},
}
ShowMoreBtn.propTypes = {
    actualTicketsListLength: (props, propName, componentName) => {
        if (typeof props[propName] === 'number') return null
        return new TypeError(`${componentName}: ${propName} must be number`)
    },
    ticketsShownQuantity: (props, propName, componentName) => {
        if (typeof props[propName] === 'number') return null
        return new TypeError(`${componentName}: ${propName} must be number`)
    },
    incTicketsShownQuantity: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
}

const mapStateToProps=(state)=>({
    actualTicketsListLength:state.actualTicketsList.length,
    ticketsShownQuantity:state.ticketsShownQuantity,

})
const mapDispatchToProps=(dispatch)=>({
    incTicketsShownQuantity:()=>dispatch({
        type:'incTicketsShownQuantity',
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowMoreBtn)

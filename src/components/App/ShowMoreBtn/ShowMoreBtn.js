import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import style from './ShowMoreBtn.module.scss'

const ShowMoreBtn = (props) => {
	return (
		<button
			className={classNames(style.showMoreBtn, {
				disabled: props.ticketsShownQuantity >= props.actualTicketsListLength,
			})}
			onClick={props.incTicketsShownQuantity}
		>
			ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
		</button>
	)
}

const mapStateToProps = (state) => ({
	actualTicketsListLength: state.actualTicketsList.length,
	ticketsShownQuantity: state.ticketsShownQuantity,
})
const mapDispatchToProps = (dispatch) => ({
	incTicketsShownQuantity: () =>
		dispatch({
			type: 'incTicketsShownQuantity',
		}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn)

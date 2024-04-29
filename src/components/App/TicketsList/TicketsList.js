import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import style from './TicketsList.module.scss'
import TicketCard from './TicketCard/TicketCard'

const TicketsList = (props) => {
	const actualTicketsList = props.actualTicketsList.slice(0, props.ticketsShownQuantity)

	const ticketsColl = actualTicketsList.map((ticket) => {
		return (
			<li className={style.ticketsList__item} key={Math.random() * 10 ** 17}>
				<TicketCard {...ticket} />
			</li>
		)
	})

	return (
		<ul className={style.ticketsList}>
			<h1
				className={classNames(style.ticketsList__message, {
					// disabled: props.init === false || (actualTicketsList.length !== 0 && actualTicketsList.error === false),
					// disabled: props.init === false || !(actualTicketsList.length === 0 && actualTicketsList.error === true),
					disabled: !(
						(props.init === true && actualTicketsList.length === 0) ||
						(actualTicketsList.length === 0 && props.loading && actualTicketsList.error === true)
					),
				})}
			>
				{props.error !== false ? props.error : 'Рейсов, подходящих под заданные фильтры, не найдено'}
			</h1>
			{ticketsColl}
		</ul>
	)
}

const mapStateToProps = (state) => ({
	init: state.init,
	loading: state.loading,
	error: state.error,
	actualTicketsList: state.actualTicketsList,
	ticketsShownQuantity: state.ticketsShownQuantity,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)

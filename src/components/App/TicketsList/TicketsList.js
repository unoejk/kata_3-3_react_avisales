import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Spin } from 'antd'
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
			<Spin size="large" className={classNames(style.ticketsList__spin, { disabled: props.loading === false })} />
			<h1
				className={classNames(style.ticketsList__message, {
					disabled: actualTicketsList.length !== 0 || props.loading === true,
				})}
			>
				{props.error === false ? 'Ничего не найдено' : props.error}
			</h1>
			{ticketsColl}
		</ul>
	)
}

const mapStateToProps = (state) => ({
	loading: state.loading,
	error: state.error,
	actualTicketsList: state.actualTicketsList,
	ticketsShownQuantity: state.ticketsShownQuantity,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)

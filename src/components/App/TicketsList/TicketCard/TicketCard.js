import React from 'react'
import style from './TicketCard.module.scss'

const TicketCard = (props) => {
	const getPeriodString = (date, duration) => {
		let startDate = new Date(date).toLocaleString('ru-Ru', {
			hour: 'numeric',
			minute: 'numeric',
		})
		let endDate = new Date(Date.parse(date) + duration * 60 * 1000).toLocaleString('ru-Ru', {
			hour: 'numeric',
			minute: 'numeric',
		})
		return startDate + ' – ' + endDate
	}

	const getDurationString = (minutes) => {
		return new Date(minutes * 60 * 1000).toLocaleString('ru-Ru', {
			timeZone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
		})
	}

	const getTransfersHeaderString = (quantity) => {
		switch (quantity) {
			case 0:
				return 'Без пересадок'
			case 1:
				return '1 пересадка'
			case 2:
				return '2 пересадки'
			case 3:
				return '3 пересадки'
		}
	}

	return (
		<article className={style.ticketCard}>
			<div className={style.ticketCard__header}>
				<span className={style.ticketCard__price}>{props.price.toLocaleString('ru-RU')} Р</span>
				{/*<span className={style.ticketCard__price}>{new Intl.NumberFormat("ru-RU").format(props.price)} Р</span>*/}
				{/*<span className={style.ticketCard__price}>{new Intl.NumberFormat("ru-RU",{style:'currency',currency:'RUB'}).format(props.price)}</span>*/}
				{/*<div className={style.ticketCard__logo}></div>*/}
				<img
					src={'//pics.avs.io/99/36/' + props.carrier + '.png'}
					alt={props.carrier + ' logo'}
					className={style.ticketCard__logo}
				/>
			</div>
			<div className={style.ticketCard__inner}>
				{props.segments.map((segment, segmentNum) => (
					<div className={style.ticketCard__transferRow} key={segmentNum}>
						<div className={style.ticketCard__infoBlock}>
							<span className={style.ticketCard__infoAnn}>
								{segment.origin + ' – ' + segment.destination}
							</span>
							<span className={style.ticketCard__infoContent}>
								{getPeriodString(segment.date, segment.duration)}
							</span>
						</div>
						<div className={style.ticketCard__infoBlock}>
							<span className={style.ticketCard__infoAnn}>В пути</span>
							<span className={style.ticketCard__infoContent}>{getDurationString(segment.duration)}</span>
						</div>
						<div className={style.ticketCard__infoBlock}>
							<span className={style.ticketCard__infoAnn}>
								{getTransfersHeaderString(segment.stops.length)}
							</span>
							<span className={style.ticketCard__infoContent}>{segment.stops.join(', ')}</span>
						</div>
					</div>
				))}
			</div>
		</article>
	)
}

export default TicketCard

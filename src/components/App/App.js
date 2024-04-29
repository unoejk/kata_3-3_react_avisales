import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Spin } from 'antd'
import { getSearchIdFS, getTicketsListsFS } from '../../servises/fetch'
import style from './App.module.scss'
import TransfersPanel from './FiltersPanel/FiltersPanel'
import OrganizePanel from './SortPanel/SortPanel'
import TicketsList from './TicketsList/TicketsList'
import ShowMoreBtn from './ShowMoreBtn/ShowMoreBtn'

const App = (props) => {
	// повторяет cb, когда не получилось сразу
	const tryIt = async (cb, errorMessage, max = 3, step = 1) => {
		return cb().catch(() => {
			if (step === max) {
				throw new Error(errorMessage)
			} else {
				return tryIt(cb, errorMessage, max, step + 1)
			}
		})
	}

	// грузит билеты, пока не придёт stop
	const loadTicketsList = async (id, isFirstLoading = true) => {
		const ticketsListRequestResult = await tryIt(
			() => getTicketsListsFS(id),
			'Не получилось загрузить список билетов'
		)
		props.setTicketsList(ticketsListRequestResult.tickets)
		props.updateActualTicketsList()
		if (isFirstLoading === true) {
			props.setInit(true)
		}
		if (ticketsListRequestResult.stop !== true) {
			await loadTicketsList(id, false)
		}
	}

	useEffect(() => {
		;(async () => {
			const id = await tryIt(getSearchIdFS, 'Не получилось загрузить ID')
			await loadTicketsList(id)
		})()
			.catch((e) => {
				props.setError(e.message)
			})
			.finally(() => {
				props.setInit(true)
				props.setLoading(false)
			})
	}, [])

	return (
		<div className={style.app}>
			<header
				className={classNames(style.app__header, {
					[style['app__header--isLoading']]: props.loading === true,
				})}
			>
				<Spin
					size="large"
					className={classNames(style.app__spin, {
						disabled: props.loading === false,
					})}
				/>
			</header>
			<div className={style.app__inner}>
				<aside className={style.app__sidebar}>
					<TransfersPanel />
				</aside>
				<main className={style.app__main}>
					<OrganizePanel />
					<TicketsList />
					<ShowMoreBtn />
				</main>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	loading: state.loading,
})
const mapDispatchToProps = (dispatch) => ({
	setInit: (payload) =>
		dispatch({
			type: 'setInit',
			payload,
		}),
	setLoading: (payload) =>
		dispatch({
			type: 'setLoading',
			payload,
		}),
	setError: (payload) =>
		dispatch({
			type: 'setError',
			payload,
		}),
	setTicketsList: (payload) =>
		dispatch({
			type: 'setTicketsList',
			payload,
		}),
	updateActualTicketsList: () =>
		dispatch({
			type: 'updateActualTicketsList',
		}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

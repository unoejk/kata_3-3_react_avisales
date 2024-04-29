const initialState = {
	// ---- status
	init: false,
	loading: true,
	error: false,

	// ---- from server
	searchId: '',
	ticketsList: [],

	// ---- options
	filters: {
		sans: true,
		one: true,
		two: true,
		three: true,
	},
	sort: 'cheap',

	// ---- for viewer
	actualTicketsList: [],
	ticketsShownQuantity: 5,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// ---------------- status

		case 'setInit': {
			return {
				...state,
				init: action.payload,
			}
		}

		case 'setLoading': {
			// console.log(action.payload)
			return {
				...state,
				loading: action.payload,
			}
		}

		case 'setError': {
			return {
				...state,
				error: action.payload,
			}
		}

		// ---------------- from server

		case 'setSearchId': {
			return {
				...state,
				searchId: action.payload,
			}
		}
		// case 'setTicketsList': {
		// 	return {
		// 		...state,
		// 		ticketsList: action.payload,
		// 	}
		// }
		case 'setTicketsList': {
			const newTicketsList = state.ticketsList.slice()
			newTicketsList.push(...action.payload)
			return {
				...state,
				ticketsList: newTicketsList,
			}
		}

		// ---------------- options

		case 'setSort': {
			return {
				...state,
				sort: action.payload,
			}
		}

		case 'setFilters': {
			let newFilters = {}

			if (action.payload === 'all') {
				let flag = true
				for (let key in state.filters) {
					if (state.filters[key] === false) {
						flag = false
					}
				}
				for (let key in state.filters) {
					newFilters[key] = !flag
				}
			} else {
				newFilters = {
					...state.filters,
					[action.payload]: !state.filters[action.payload],
				}
			}

			return {
				...state,
				filters: newFilters,
			}
		}

		// ---------------- for viewer

		case 'updateActualTicketsList': {
			let newActualTicketsList = state.ticketsList.slice()

			// ---- filters

			if (state.filters.sans === false) {
				newActualTicketsList = newActualTicketsList.filter(
					(ticket) => ticket.segments[0].stops.length !== 0 && ticket.segments[1].stops.length !== 0
				)
			}
			if (state.filters.one === false) {
				newActualTicketsList = newActualTicketsList.filter(
					(ticket) => ticket.segments[0].stops.length !== 1 && ticket.segments[1].stops.length !== 1
				)
			}
			if (state.filters.two === false) {
				newActualTicketsList = newActualTicketsList.filter(
					(ticket) => ticket.segments[0].stops.length !== 2 && ticket.segments[1].stops.length !== 2
				)
			}
			if (state.filters.three === false) {
				newActualTicketsList = newActualTicketsList.filter(
					(ticket) => ticket.segments[0].stops.length !== 3 && ticket.segments[1].stops.length !== 3
				)
			}

			// ---- sort

			if (state.sort === 'cheap') {
				newActualTicketsList = newActualTicketsList.sort(
					(ticketTarget, ticketPosition) => ticketTarget.price - ticketPosition.price
				)
			}
			if (state.sort === 'fast') {
				newActualTicketsList = newActualTicketsList.sort(
					(ticketTarget, ticketPosition) =>
						ticketTarget.segments[0].duration +
						ticketTarget.segments[1].duration -
						(ticketPosition.segments[0].duration + ticketPosition.segments[1].duration)
				)
			}
			if (state.sort === 'optimal') {
				let totalPrice = 0
				let totalDuration = 0
				let totalStops = 0
				newActualTicketsList.forEach((ticket) => {
					totalPrice += ticket.price
					totalDuration += ticket.segments[0].duration + ticket.segments[1].duration
					totalStops += ticket.segments[0].stops.length + ticket.segments[1].stops.length
				})
				newActualTicketsList = newActualTicketsList.sort(
					(ticketTarget, ticketPosition) =>
						(ticketTarget.price / totalPrice) * 1.5 +
						(ticketTarget.segments[0].duration + ticketTarget.segments[1].duration) / totalDuration +
						(ticketTarget.segments[0].stops.length + ticketTarget.segments[1].stops.length) / totalStops -
						((ticketPosition.price / totalPrice) * 1.5 +
							(ticketPosition.segments[0].duration + ticketPosition.segments[1].duration) /
								totalDuration +
							(ticketPosition.segments[0].stops.length + ticketPosition.segments[1].stops.length) /
								totalStops)
				)
			}

			return {
				...state,
				actualTicketsList: newActualTicketsList,
			}
		}

		case 'incTicketsShownQuantity': {
			let newTicketsShownQuantity = state.ticketsShownQuantity
			if (newTicketsShownQuantity < state.actualTicketsList.length) {
				newTicketsShownQuantity = newTicketsShownQuantity + 5
			}
			return {
				...state,
				ticketsShownQuantity: newTicketsShownQuantity,
			}
		}

		default: {
			return state
		}
	}
}

export default reducer

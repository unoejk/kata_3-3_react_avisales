import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

// const loggerMiddleware = (store) => (next) => (actions) => {
// 	const result = next(actions)
// 	console.log('Middleware: ', store.getState())
// 	return result
// }

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(
			// loggerMiddleware,
			thunk
		)
	)
)

export default store

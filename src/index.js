import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './styles/reset.css'
import './styles/default.css'
import App from './components/App/App'
import store from './stores/store'

// store.subscribe(()=>{
//     console.log(store.getState())
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

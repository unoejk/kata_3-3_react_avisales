import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './styles/reset.css'
import './styles/default.css'

import App from './components/App/App'
import reducer from './stores/reducer'

const store=createStore(reducer)
// store.subscribe(()=>{
//     console.log(store.getState())
// })

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

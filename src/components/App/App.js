import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import style from './App.module.scss'

import TransfersPanel from './FiltersPanel/FiltersPanel'
import OrganizePanel from './SortPanel/SortPanel'
import TicketsList from './TicketsList/TicketsList'
import ShowMoreBtn from './ShowMoreBtn/ShowMoreBtn'
import {getSearchIdFS,getTicketsListsFS} from '../../servises/fetch'

const App=(props)=>{

    // повторяет cb, когда не получилось сразу
    const tryIt=async (cb,errorMessage,max,step=1)=>{
        return cb()
            .catch(e=>{
                if (step===max){
                    throw new Error(errorMessage)
                }else {
                    return tryIt(cb,errorMessage,max,step+1)
                }
            })
    }

    useEffect(()=>{
        ;(async ()=>{

            // получаем id
            const id=await tryIt(getSearchIdFS,'Не получилось загрузить ID',3)
            props.setSearchId(id)

            // получаем билеты и флаг стопа
            const ticketsListRequestResult=await tryIt(()=>getTicketsListsFS(id),'Не получилось загрузить список билетов',3)
            const ticketsList=ticketsListRequestResult.tickets

            // обработка стопа
            if (ticketsListRequestResult.stop===true){
                props.setWeHaveStop(true)
            }

            props.setTicketsList(ticketsList)
            await props.updateActualTicketsList()

        })()
            .catch(e=>{
                // компонент покажет ошибку
                props.setError(e.message)
            })
            .finally(()=>{
                // компонент остановит загрузку
                props.setLoading(false)
            })
            .finally(()=>{
                // пробуем преодолеть стоп, если он есть,
                // пробуем опять трижды: если не получилось, оставляем то, что получили в первый раз
                // три попытки на не получить стоп, и в каждой из них по три попытки не получить ошибку
                if (props.weHaveStop===true){
                    ;(async ()=>{
                        const tryItModeForStop=async (cb,max,step=1)=>{
                            const ticketsListRequestResult=await tryIt(()=>getTicketsListsFS(props.searchId),false,3)
                            if (ticketsListRequestResult.stop===true && step!==max){
                                return tryItModeForStop(cb,max,step=step+1)
                            }
                        }
                        const ticketsListRequestResult=await tryItModeForStop(()=>getTicketsListsFS(props.searchId),3)
                        if (Boolean(ticketsListRequestResult)!==false){
                            props.setWeHaveStop(false)
                            props.setTicketsList(ticketsListRequestResult.tickets)
                            await props.updateActualTicketsList()
                        }
                    })()
                        .catch(()=>{}) // чтобы не выдавало ошибку из за того что опять не получилось и оставить то что есть
                }
            })
    },[])

    return (
        <div className={style.app}>
            <header className={style.app__header}></header>
            <div className={style.app__inner}>
                <aside className={style.app__sidebar}>
                    <TransfersPanel/>
                </aside>
                <main className={style.app__main}>
                    <OrganizePanel />
                    <h1 className={classNames({'disabled':true})}>hi</h1>
                    <TicketsList />
                    <ShowMoreBtn />
                </main>
            </div>
        </div>
    )
}

App.defaultProps = {
    searchId: '',
    weHaveStop: false,
    setLoading: () => {},
    setError: () => {},
    setWeHaveStop: () => {},
    setSearchId: () => {},
    setTicketsList: () => {},
    updateActualTicketsList: () => {},
}
App.propTypes = {
    searchId: (props, propName, componentName) => {
        if (typeof props[propName] === 'string') return null
        return new TypeError(`${componentName}: ${propName} must be string`)
    },
    weHaveStop: (props, propName, componentName) => {
        if (typeof props[propName] === 'boolean') return null
        return new TypeError(`${componentName}: ${propName} must be boolean`)
    },
    setLoading: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    setError: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    setWeHaveStop: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    setSearchId: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    setTicketsList: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
    updateActualTicketsList: (props, propName, componentName) => {
        if (typeof props[propName] === 'function') return null
        return new TypeError(`${componentName}: ${propName} must be function`)
    },
}

const mapStateToProps=(state)=>({
    searchId:state.searchId,
    weHaveStop:state.weHaveStop,
})
const mapDispatchToProps=(dispatch)=>({
    setLoading:(payload)=>dispatch({
        type:'setLoading',
        payload,
    }),
    setError:(payload)=>dispatch({
        type:'setError',
        payload,
    }),
    setWeHaveStop:(payload)=>dispatch({
        type:'setWeHaveStop',
        payload,
    }),
    setSearchId:(payload)=>dispatch({
        type:'setSearchId',
        payload,
    }),
    setTicketsList:(payload)=>dispatch({
        type:'setTicketsList',
        payload,
    }),
    updateActualTicketsList:()=>dispatch({
        type:'updateActualTicketsList',
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

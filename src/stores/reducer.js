
const initialState={
    activeOrganize:'cheap',
    activeFilters:{
        sans:true,
        one:true,
        two:true,
        three:true,
    }
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'changeOrganize':
            return {
                ...state,
                activeOrganize:action.payload
            }

        case 'changeFilters':
            let newFilters={}

            if (action.payload==='all'){
                let flag=true
                for (let key in state.activeFilters){
                    if (state.activeFilters[key]===false){
                        flag=false
                    }
                }
                for (let key in state.activeFilters){
                    newFilters[key]=!flag
                }
            }
            else{
                newFilters={
                    ...state.activeFilters,
                    [action.payload]:!state.activeFilters[action.payload],
                }
            }

            return {
                ...state,
                activeFilters:newFilters
            }

        default:
            return state
    }
}

export default reducer

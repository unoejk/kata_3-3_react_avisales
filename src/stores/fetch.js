const home='https://aviasales-test-api.kata.academy'

const getSearchId=async ()=>{
    return fetch(home+'/search')
        .then(res=>res.json())
        .then(res=>res['searchId'])
}

const getTickets=(searchID)=>{
    return fetch(home+'/tickets?searchId='+searchID)
        .then(res=>res.json())
}

const test=async ()=>{
    console.log(await getSearchId())
    let i=await getSearchId()
    console.log(await getTickets(i))
}

export {test}

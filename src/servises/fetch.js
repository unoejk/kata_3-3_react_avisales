const home = 'https://aviasales-test-api.kata.academy'

const getSearchIdFS = async () => {
	return fetch(home + '/search')
		.then((res) => res.json())
		.then((res) => res['searchId'])
	// .catch(e=>{throw new Error('failed to upload id')})
	// .catch(e=>{console.error('failed to upload id')})
}

const getTicketsListsFS = (searchID) => {
	return fetch(home + '/tickets?searchId=' + searchID).then((res) => res.json())
	// .then(res=>res.tickets)
	// .catch(e=>{throw new Error('failed to upload tickets')})
	// .catch(e=>{console.error('failed to upload tickets')})
}

export { getSearchIdFS, getTicketsListsFS }

const home = 'https://aviasales-test-api.kata.academy'

const getSearchIdFS = async () => {
	return fetch(home + '/search')
		.then((res) => res.json())
		.then((res) => res['searchId'])
}

const getTicketsListsFS = (searchID) => {
	return fetch(home + '/tickets?searchId=' + searchID).then((res) => res.json())
}

export { getSearchIdFS, getTicketsListsFS }

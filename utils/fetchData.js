
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const res = await fetch((url),{
        method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		'X-RapidAPI-Key': "a62dcb45e5msh8a3180f9e8f8905p1ec479jsn0f8b0a19956a"
	}
    })
    const data = await res.json()

    return data

}

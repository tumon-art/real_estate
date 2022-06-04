
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const res = await fetch((url),{
        method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		'X-RapidAPI-Key': 'b61c992c2dmsh0dbb8e92d356ca2p1a0e13jsn73eb4c7d6af4'
	}
    })
    const data = await res.json()

    return data

}

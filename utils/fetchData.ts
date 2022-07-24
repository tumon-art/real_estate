
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url:string)=> {
    const res = await fetch((url),{ 
        method: 'GET',
	headers: <any>{
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		'X-RapidAPI-Key': "cce26f3924msh9364ce126da2f60p1f22c7jsn75f2c3f3e701"
	}
    }) 
    console.log(res)
    const data = await res.json()

    return data

}


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const res = await fetch((url),{
        method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		'X-RapidAPI-Key': 'a62dcb45e5msh8a3180f9e8f8905p1ec479jsn0f8b0a19956a'
	}
    })
    const data = await res.json()

    return data

}

// Example POST method implementation:
// export async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
  
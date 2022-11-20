export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: <any>{
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_Key,
    },
  });

  const data = await res.json();

  return data;
};

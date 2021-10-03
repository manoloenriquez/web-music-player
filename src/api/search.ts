import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface SearchResult {
  name: string,
  artist: string, 
  src: string,
  coverimg?: string
}

export const getResults =  async (query: String) => {
    let results: SearchResult[] = [];

    let options: AxiosRequestConfig = {
      params: {
        s: 'drake',
        t: 'fair trade',
      },
      headers: {
        'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
        'x-rapidapi-key': 'f321217bafmsh8c96ffdc986d888p1313b3jsnae8de89da627'
      }
    }

    let response: AxiosResponse = await axios.get('https://theaudiodb.p.rapidapi.com/searchtrack.php', options)

    console.log(response.data)

    return results;
  }
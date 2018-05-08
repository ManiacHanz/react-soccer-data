import axios from '../utils/http'


export const getLeague = ( league ) => {
  return axios({
    url: '/league', 
    params: {
      league: league
    }
  })
}
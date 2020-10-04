import index from './index';

export default {
  getPokemon: (pokemon) => {
    return new Promise((resolve, reject) => {
      console.log("fffffffff")
      index.get(`https://pokebx.herokuapp.com/api/v1/pokemon/${pokemon}`)
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          // resolve(error)
        })
        .then(() => {

        });
      })
  },
  postEvaluation: (data) => {
    return new Promise((resolve, reject) => {
      index.post('https://pokebx.herokuapp.com/api/v1/evaluation', data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          resolve(error)
        })
      })
  }
}

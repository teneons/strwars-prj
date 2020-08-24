import React from 'react';

function App() {


  class SwapiClss {
    _apiUrl = `https://swapi.dev/api`;

    //method - get data
    async getSwapiData (urlAttributes) {
      const dataS = await fetch(`${this._apiUrl}${urlAttributes}`)
    
      if(!dataS.ok) {
        throw new Error ('Error - ', dataS.status)
      }

      return await dataS.json();
    }

    async getAllPeoples() {
      const resultArr = await this.getSwapiData(`/people/`)
      return resultArr.results
    }

    getPeople(id) {
      return this.getSwapiData(`/people/${id}/`)
    }

    getAllPlanets() {
      return this.getSwapiData(`/planets/`)
    }

    getPlanet(id) {
      return this.getSwapiData(`/planets/${id}/`)
    }

    getAllStarships() {
      return this.getSwapiData(`/starships/`)
    }

    getStarship(id) {
      return this.getSwapiData(`/starships/${id}/`)
    }
  }


  //just request
  const swapiRequest = new SwapiClss();
  swapiRequest.getAllStarships().then((rqData)=>{
    console.log(rqData)
  })


  // const getStWrsData = async(url) => {
  //   let reqst = await fetch(url)
  //   let bodyData = await reqst.json()
  //   await console.log(bodyData)

  //   if(reqst.ok) {
  //     console.log('NOT ok - ', reqst.text)
  //   }
  //   if(reqst.status === 404) {
  //     console.error('[PERSONA not found]')
  //   }
  
  // }

  // getStWrsData('https://swapi.dev/api/people/4242/')
  //   .catch((err)=>{
  //     if(err) console.error(`Have any error ${err}`)
  //   })


  return (
    <div className="App">

    </div>
  );
}

export default App;

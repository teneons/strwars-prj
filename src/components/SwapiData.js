export default class SwapiClss {
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
      return resultArr.results.map(this._tranformPlanets)
    }

    async getPeople(id) {
      const planet = await this.getSwapiData(`/people/${id}/`);
      return this._tranformPlanets(planet)
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

    //get id
    _getIdFromURL (d) {
      const regExpID = /\/([0-9]*)\/$/;
      return d.url.match(regExpID)[1]
    }

    //transforms
    _tranformPlanets (d) {
      return {
            id: this._getIdFromURL(d),
            planetName: d.name,
            diameter: d.diameter,
            population: d.population,
            rotationPeriod: d.rotation_period
        }
    }

    _transformStarships (d) {
      return {
        id: this._getIdFromURL(d),
        shipName: d.name,
        shipModel: d.model,
        shipLength: d.length,
        shipPassengers: d.passengers
      }
    }

    _tranformPeoples (d) {
      return {
        id: this._getIdFromURL(d),
        peopleName: d.name
      }
    }
  }


  //just request
  // const swapiRequest = new SwapiClss();
  // swapiRequest.getAllStarships().then((rqData)=>{
  //   console.log(rqData)
  // })



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
export default class SwapiClss {
    _apiUrl = `https://swapi.dev/api`;

    //method - get data
    getSwapiData = async (urlAttributes) => {
      const dataS = await fetch(`${this._apiUrl}${urlAttributes}`)
    
      if(!dataS.ok) {
        throw new Error ('Error - ', dataS.status)
      }

      return await dataS.json();
    }

    getAllPlanets = async () => {
      const resultArr = await this.getSwapiData(`/planets/`);
      return resultArr.result.map(this._tranformPlanets)
    }

    getPlanet = async (id) => {
      const planet = await this.getSwapiData(`/planets/${id}/`);
      return this._tranformPlanets(planet)
    }

    getAllStarships = async () => {
      const resultArr = await this.getSwapiData(`/starships/`)
      return resultArr.results.map(this._transformStarships)
    }

    getStarship = async (id) => {
      const starShip = await this.getSwapiData(`/starships/${id}/`);
      return this._transformStarships(starShip)
    }

    getAllPeoples = async () => {
      const resultArr = await this.getSwapiData(`/people/`)
      return resultArr.results.map((d)=>{
        return {personName: d.name}
      })    //this._tranformPeoples
    }

    getPeople = async (id) => {
      const people = await this.getSwapiData(`/people/${id}/`);
      return this._tranformPeoples(people)
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
            orbitalPeriod: d.orbital_period
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
        personName: d.name
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
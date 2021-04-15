import {renderErrorMsg} from "./App"; //IMPORTING FROM App.js
export default class Search {
	constructor(query){
	 //SETS THE SEARCHED QUERY
      this.query = query;
	}
	//ASYNCHRONOUSLY FETCHES THE COUNTRIES BY NAME
	async getCountryByName(){
		try {
			let data = await fetch(`https://restcountries.eu/rest/v2/name/${this.query}`);
			let country = await data.json();
			this.country = country;
		}catch(err){
			//DISPLAYS THE ERROR MESSAGE IF ANY
			renderErrorMsg(err);
		}
	}
	//ASYNCHRONOUSLY FETCHES THE COUNTRIES BY REGION
	async getCountryByRegion() {
		try {
			let data = await fetch(`https://restcountries.eu/rest/v2/region/${this.query}`);
			let countries = await data.json();
			this.countries = countries;
		} catch(err){
			//DISPLAYS THE ERROR MESSAGE IF ANY
			renderErrorMsg(err);;
		}
	}
}

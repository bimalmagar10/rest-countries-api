//Class for loading all the countries from rest-countries API
export default class Load {
	constructor(){
	}
	async getAllCountries(){
		let results = await fetch('https://restcountries.eu/rest/v2/all');
		let datas = await results.json();
		this.countries = datas;
	}
	//returns all the countries as array
	getCountries() {
		return this.countries;
	}
}

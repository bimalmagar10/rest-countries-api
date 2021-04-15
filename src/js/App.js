import {cardComponent,errorComponent} from "./components/home"; //Importing from /component/home.js
import {elements} from "./base"; //Importing from /Base.js
import {detailsComponent,borderComponent} from "./components/details"; //Importing from /component/details.js

//Adds the countries in the DOM inside home container
export const addElements = (countries)=> {
	countries.forEach(country => {
		let markup = cardComponent.render(country);
		document.querySelector(".home__bottom").insertAdjacentHTML("beforeend",markup);
	});
};

//Adds particular country inside details.It's used when routing is implemented with window.location.hash
export const addDetails = (countries) => {
	elements.mainApp.innerHTML = "";
	try {
			countries.forEach(country => {
	    	let markup = detailsComponent.render(country);
	    	elements.mainApp.insertAdjacentHTML("beforeend",markup);
    	});
	} catch(error){
		renderErrorMsg(error);
	}
    
};

//Adds languages of a particular country inside details container
export const addLanguages = (countries) => {
	let languages = countries.map(el => el.languages.map(el => el.name)).join("");
	document.querySelector(".details__language").textContent =languages; 
};

//Adds border countries of a particular country
export const addBorders = (countries,borderedCountry) =>{
	//Returns borders of source country in terms of alpha3Code 
	let borders = borderedCountry.map(el => el.borders);
	//Filters the countries with matching borders
	let names = countries.filter(el => borders[0].includes(el.alpha3Code)).map(el =>  el.name);
	if(names.length === 0){
		names = ["No border countries"];
	}
	names.forEach(name => {
		let markup = borderComponent.render(name);
		document.querySelector(".details__info--sub").insertAdjacentHTML("beforeend",markup);
	})
};
//Inserts the error messages markup inside body element
export const renderErrorMsg = (msg) => {
	let error = errorComponent.render(msg);
	elements.body.insertAdjacentHTML("afterbegin",error);
}; 

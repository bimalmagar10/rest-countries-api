import "regenerator-runtime/runtime"; //For async-await to work in parcel
import Load from "./Load"; //Importing form Load.js
import Search from "./Search"; //Importing from Search.js
import {addElements,addDetails,addLanguages,addBorders,clearPreviousCountries,renderErrorMsg} from "./App"; //Importing from App.js
import {homeComponent,detailsComponent} from "./components/home"; //Imporitng from /components/home.js
import {elements,loaderComponent,removeLoader} from "./base"; //Importing from base.js

//STATE FOR DYNAMICALLY ACCESSING Search and Load OBJECT INSTANCES 
let state = {};
//Renders all countries inside the DOM
const loadAllCountries = async () => {
	state.countries = new Load();
	loaderComponent();
	try {
		await state.countries.getAllCountries();
		removeLoader();
		elements.mainApp.innerHTML = homeComponent.render();
    	addElements(state.countries.countries);
	} catch(error){
		renderErrorMsg(error);
	}
   
}
//Renders a particular country inside the DOM
const renderCountry = async (e) => {
	if(e.target.classList.contains("search__input")){
		if(e.keyCode === 13){
			let searchQuery = e.target.value.toLowerCase();
			state.search =  new Search(searchQuery);
			loaderComponent();
			try {
				await state.search.getCountryByName();
				removeLoader();
				document.querySelector(".home__bottom").innerHTML = "";
				addElements(state.search.country);
			}catch(err){
				renderErrorMsg(err);
			}
            
		}
		try {
			if(e.target.value === ""){
				document.querySelector(".home__bottom").innerHTML = "";
				addElements(state.countries.countries);
			}
		} catch (err){
			renderErrorMsg();
		}
	}
};
//Filters the countries as per the region
const filterCountries = async (e) => {
	e.preventDefault();
  if(e.target.classList.contains("filter__select")){
  	state.search = new Search(e.target.value);
  	loaderComponent();
  	try {
  		await state.search.getCountryByRegion();
  		removeLoader();
  		document.querySelector(".home__bottom").innerHTML = "";
  		addElements(state.search.countries);
  	} catch(err){
  		renderErrorMsg(err);
  	}
  }
};
//Renders the country inside the details container in the DOM
const detailsPage = async (e) => {
	loaderComponent();
	try {
		await state.countries.getAllCountries();
		removeLoader();
	} catch(err){
		renderErrorMsg(err);
	}
	let countries = state.countries.getCountries();
	let selectCountry =countries.filter(el => e.target.location.hash.slice(2) === el.alpha3Code);
	if(selectCountry.length === 0){
		elements.mainApp.innerHTML = homeComponent.render();
		addElements(countries);
	    document.querySelector(".filter__select").addEventListener('change',filterCountries);
	} else {
		addDetails(selectCountry);
		addLanguages(selectCountry);
		addBorders(countries,selectCountry);
	}
};

//Toggles Light theme and dark theme
const toggleThemes = (e) => {
	elements.body.classList.toggle("dark");
};

//Clears the error message
const clearErrorMsg = (e) => {
	if(e.target.classList.contains("error__close")){
		let el = e.target.parentNode;
		el.parentNode.removeChild(el);
		document.querySelector(".search__input").value = "";
		init();
	}
}
//Initialization of the app
const init = async () => {
	if(window.location.hash = "#"){
		loaderComponent();
		try {
			await loadAllCountries();
			removeLoader();
		} catch(err) {
			renderErrorMsg(err);
		}
	}
	elements.themeChoose.addEventListener("click",toggleThemes);
	elements.mainApp.addEventListener('keyup',renderCountry);
	document.querySelector(".filter__select").addEventListener('change',filterCountries);
	window.addEventListener("hashchange",detailsPage);
	elements.body.addEventListener("click",clearErrorMsg);

};
//Listens for load event i.e every time the page loads,it is fired
window.addEventListener('load',init);








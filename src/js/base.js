//Object for selecting the elements of a DOM
const elements = {
	mainApp:document.querySelector(".app"),
	searchInput:document.querySelector(".search__input"),
	homeBottom:document.querySelector(".home__bottom"),
	themeChoose:document.querySelector(".theme"),
	body:document.querySelector("body"),
};
//Loaders markup
const loaderComponent = () => {
	const loader = `
		<div class="loader">
		    <div class="loader__wrapper">
			  <span class="loader__dot"></span>
			  <div class="loader__dots">
			    <span></span>
			    <span></span>
			    <span></span>
			  </div>
	     	</div>
	</div>
	`;
	elements.body.insertAdjacentHTML("afterbegin",loader);
}
//Removes the loader from the DOM
const removeLoader = () => {
	const el = document.querySelector(".loader");
	elements.body.removeChild(el);
}
export {elements,loaderComponent,removeLoader};
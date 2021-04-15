//Details component markup with dynamic datas
const detailsComponent = {
	render:(country) => {
		return `
		   	<div class="details">
				<div class="details__top">
				    <a href="/#" class="btn-back"><strong>&larr;</strong> Back</a>
				</div>
				<div class="details__bottom">
					<figure class="details__fig">
					  		<img src=${country.flag} alt="This is image of ${country.name}'s flag" class="details__img">
					</figure>
				  	<div class="details__info">
					  	<h2 class="heading__secondary">${country.name}</h2>
					  	<div class="details__info--main">
					  		<div class="details__info--geo">
					  			<p class="details__native-name"><strong>Native Name &colon;</strong> <span class="details__data">${country.nativeName}</span></p>
					  			<p class="details__population"><strong>Population &colon;</strong> <span class="details__data">${country.population}</span></p>
					  			<p class="details__region"><strong>Region &colon;</strong> <span class="details__data">${country.region}</span></p>
					  			<p class="details__sub-region"><strong>Sub Region &colon;</strong> <span class="details__data">${country.subregion}</span></p>
					  			<p class="details__capital"><strong>Capital &colon;</strong> <span class="details__data">${country.capital}</span></p>
					  		</div>
					  		<div class="details__info--native">
					  			<p class="details__domain"><strong>Top Level Domain &colon;</strong> <span class="details__data">${country.topLevelDomain[0]}</span></p>
					  			<p class="details__curr"><strong>Currencies &colon;</strong> <span class="details__data">${country.currencies[0].name}</span></p>
					  			<p class="details__lang"><strong>Languages &colon;</strong> <span class="details__data details__language">${country.languages[0].name}</span></p>
					  		</div>
					  	</div>
					  	<div class="details__info--sub">
					  		<p class="details__borders"><strong>Border Countries&colon; </strong></p>
					  	</div>
				  	</div>
				</div>
		   	</div>
		`;
	},
};
//Border component's markup with dynamic values
const borderComponent = {
	render:(name) => {
		return `
			<span class="border-country">${name}</span> 
		`;
	}
};
export {detailsComponent,borderComponent};
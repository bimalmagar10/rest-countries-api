//Homecomponent's markup
const  homeComponent = {
	render:() => {
	return `
		<div class="home">
			<div class="home__top">
				<div class="search">
					<i class="ion-ios-search search__icon"></i>
					<input type="search" class="search__input" placeholder="Search for a country...">
				</div>
				<div class="filter">
					<i class="ion-chevron-down filter__icon"></i>
					<select name="filter" id="filter" class="filter__select">
						<option value="" class="filter__option" selected disabled>Filter by Region</option>
						<option value="africa" class="filter__option">Africa</option>
						<option value="americas" class="filter__option" style="background:#fff;">Americas</option>
						<option value="asia" class="filter__option">Asia</option>
						<option value="europe" class="filter__option">Europe</option>
						<option value="oceania" class="filter__option">Oceania</option>
					</select>
				</div>
			</div>
			<div class="home__bottom">
			</div>
		</div>
		`
	},
};
//Card Component's markup with dynamic values
const cardComponent = {
	render:(country) => {
		return `
			<div class="card">
				<a href=#/${country.alpha3Code} class="card__link"><img src=${country.flag} alt="This is image of ${country.name}'s flag" class="card__img"></a>
				<div class="card__details">
					<h3 class="heading__tertiary">${country.name}</h3>
					<p class="card__population"><strong>Population&colon;</strong> <span class="card__data">${country.population}</span></p>
					<p class="card__region"><strong>Region&colon;</strong> <span class="card__data">${country.region}</span></p>
					<p class="card__capital"><strong>Capital&colon;</strong> <span class="card__data">${country.capital}</span></p>
				</div>
			</div>
		`;
	}
};
//Error component's markup
const errorComponent = {
	render:(msg) => {
		return `
			<div class="error">
				<p class="error__msg">Enter the correct name!!</p>
				<a href="/#" class="error__close">Okay</a>
			</div>
		`;
	}
};
export {homeComponent,cardComponent,errorComponent};
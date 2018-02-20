const apiKey = 'CBt2QP8_Gt4ZKFBsjbu1ykpPGq68i9aZT1qExIME7FX52kLkmj57QMaVBU4X_SFhsPxjZZCejn7DlsE1TG0mUuotvUg2cRxpqCSZEPIFSdDER91joDeOSSsqVC2MWnYx';

const yelp = {

	 search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
			{headers: {
				Authorization: `Bearer ${apiKey}`
			}}		
		).then(
			response => {
				return response.json();
			}
		).then(
			jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => ({
							id:	business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count
						})
					) 
				}	
			}
		)
	}
}


export default yelp;
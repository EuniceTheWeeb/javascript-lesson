// separate concerns - model

// maps api key: fsq37qjUeXEMSpIo+Th3YxhJQ2tMFNnPbfqvOJey5Ze3ZRA=
// from foursquare

const API_BASE_URL = "https://api.foursquare.com/v3"
const API_KEY = "fsq37qjUeXEMSpIo+Th3YxhJQ2tMFNnPbfqvOJey5Ze3ZRA="
const headers = {
    Accept: 'application/json',
    // "Authorization" must start w/ caps "A"
    Authorization: API_KEY    
}

async function search(lat, lng, query) {
    // create the coordinate
    let ll = lat + "," + lng;
    let response = await axios.get(API_BASE_URL + "/places/search",{
        headers: {
            ...headers
        },
        params: {
            'll': ll,
            'v': '20210903',  // YYYYMMDD format
            'query': query
        }
    })
    return response.data;
}



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://api.foursquare.com/v3/places/search?radius=500',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'fsq37qjUeXEMSpIo+Th3YxhJQ2tMFNnPbfqvOJey5Ze3ZRA='
//   }
// };

// const fetchData = async () => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();


import { API_KEY } from "$env/static/private";

// Put these paramaters here in constants to keep things tidy
const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    },
  };

  export async function load( {fetch, params} ) {

    const url = 'https://api.spacetraders.io/v2/my/ships/' + params.ship;

    const response = await fetch(url, options);
    const ship_details = await response.json();

    if (ship_details) {
        console.log(ship_details);
        return {
            ship_details
        };
    }
    return {
        status: 404
    }
  }
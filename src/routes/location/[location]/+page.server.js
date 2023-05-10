import { API_KEY } from '$env/static/private';

// Put these paramaters here in constants to keep things tidy
const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': API_KEY
  },
};

// Async load function is needed so that this runs when the corresponding page loads
export async function load( {params} ) {
  // Get the parameters from the link followed in order to get the right location
  console.log(params.location);
  const url = 'https://api.spacetraders.io/v2/systems/X1-DF55/waypoints/' + params.location;

  const response = await fetch(url, options); // Run the fetch and bung the result in a variable
  const location_details = await response.json(); // Turn the response (pnce we have one) into usable json format

  // Check that it worked and return it so the page can use it, or give us a page not found status
  if (location_details) {
    console.log(location_details);
    return {
      location_details,
    };
  }
  return {
    status: 404,
  };
}
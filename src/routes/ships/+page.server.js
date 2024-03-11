// @ts-nocheck
import { API_KEY } from '$env/static/private';

// Put these paramaters here in constants to keep things tidy
const url = 'https://api.spacetraders.io/v2/my/ships';
const options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_KEY
    },
};

// Async load function is needed so that this runs when the corresponding page loads
export async function load({ fetch }) {
    const response = await fetch(url, options); // Run the fetch and bung the result in a variable
    const ships = await response.json(); // Turn the response (once we have one) into usable json format

    // Check that it worked and return it so the page can use it, or give us a page not found status
    if (!ships) return { status: 404, };
    console.log(ships);
    return {
        ships,
        token: API_KEY
    };
}

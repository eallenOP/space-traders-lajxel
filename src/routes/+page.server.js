// @ts-nocheck
/* This file demonstrates one official option for fetching in SvelteKit, including hiding a token from the front end. Quick reference followed from https://svelte.deepwebworks.com/blog/kit2 */

import { API_KEY } from '$env/static/private';

// Put these paramaters here in constants to keep things tidy
const url = 'https://api.spacetraders.io/v2/my/agent';
const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': API_KEY
  },
};

// Async load function is needed so that this runs when the corresponding page loads
export async function load({ fetch }) {
  const response = await fetch(url, options); // Run the fetch and bung the result in a variable
  const agent_details = await response.json(); // Turn the response (pnce we have one) into usable json format

  // Check that it worked and return it so the page can use it, or give us a page not found status
  if (agent_details) {
    console.log(agent_details);
    return {
      agent_details,
    };
  }
  return {
    status: 404,
  };
}
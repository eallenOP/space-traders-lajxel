// @ts-nocheck
import { API_KEY } from '$env/static/private';
const url = 'https://api.spacetraders.io/v2/my/agent';
const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': API_KEY
  },
};
export async function load({ fetch }) {
  const response = await fetch(url, options); // Run the fetch and bung the result in a variable
  const agent_details = await response.json(); // Turn the response (pnce we have one) into usable json format

    return {
        agent_details,
        token: API_KEY
      };
}
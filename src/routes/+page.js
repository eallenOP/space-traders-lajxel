/* This file demonstrates one official option for fetching in SvelteKit, including hiding a token from the front end. Quick reference followed from https://svelte.deepwebworks.com/blog/kit2 */

// Put these paramaters here in constants to keep things tidy
const url = 'https://api.spacetraders.io/v2/my/agent';
const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiTEFKWEVMIiwiaWF0IjoxNjgzNjc5NTM5LCJzdWIiOiJhZ2VudC10b2tlbiJ9.PMtclg0P-o4amSUk--8yE5U0rO_KWaDlGthHlD-ziEHOgHCv8DKp6yT46V3FznLHzp1GSDYdnuPKcyUrUDgSmY23MFqjaKmt3Xw_BEuz_Lz2BAeiYrAb19dqRUAdzV5zxExbi5A07xVmsL37bMLyxFpFHntbecIhRaJb6pVts8Q1x-gRZIJzsd73OaFHSr-_d8ESM4ZGxts9T7XtfyQPn5ZsclfEAEQoWnlN6wgiUdvfv4Fz3cdL5sEJ4Vlzw5WH1D-5euPiZCCvuIGsHI7aZJHOSrMWTFBH8C4lldh67rNFnGTBExtGgC6USxZ6vGG7ijO2lE_v0J5fiQvVmJyqU8B1clEa-KQ20_iZGeGpuW6QlFUwECi24W5NJVjrik2hXiRYCpgePE1v_pHsFtm0Hk4OShCrhkcCU32BTayugMb0CYjUbzZwwpKb94mkdybO8adsR03AOwo9v3fL9qy7lgnyyQmncHUyie_wcmyIyDjkrzmV7MqC4LKMpx-Nu9CG'
  },
};

// Async load function is needed so that this runs when the corresponding page loads
export async function load() {
  const response = await fetch(url, options); // Run the fetch and bung the result in a variable
  const agent_details = await response.json(); // Turn the response (pnce we have one) into usable json format

  // Check that it worked and return it so the page can use it, or give us a page not found status
  if (agent_details) {
    return {
      agent_details,
    };
  }
  return {
    status: 404,
  };
}
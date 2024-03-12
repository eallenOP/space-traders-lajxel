<script>
	// @ts-nocheck
	export let data;

// Grab the home system from the agent data
let hq = data.agent_details.data.headquarters;
let system = hq.split('-', 2).join('-');


	let selectedType;
    let locationData;
	const handleNavigate = async (selectedType) => {
		const res = await fetch(
			`https://api.spacetraders.io/v2/systems/${system}/waypoints?${selectedType}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': data.token
				}
			}
		);

		const locations = await res.json();
		console.log(locations);
        locationData = locations;
	};
</script>

<h1>Navigation</h1>

<select bind:value={selectedType}>
	<option value="type=ENGINEERED_ASTEROID">Engineered Asteroid</option>
	<option value="traits=SHIPYARD">Shipyard</option>
	<option value="traits=MARKETPLACE">Marketplace</option>
</select>
<!-- Get the value from the select box and send it to the handleNavigate funtion when clicking a button -->
<button on:click={() => handleNavigate(selectedType)}>Navigate</button>

{#if locationData}
    {#each locationData.data as location}
        <div class="location-box">
            <h2><a href="location/{location.symbol}">{location.symbol}</a></h2>
            <p>{location.type}</p>
            <ul>
                {#each location.traits as trait}
                    <li>{trait.name}</li>
                {/each}
            </ul>
        </div>
    {/each}
{/if}

<style>
    .location-box {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }
    .location-box h2 {
        font-weight: bold;
    }
</style>
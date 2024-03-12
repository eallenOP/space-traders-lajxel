<script>
	//@ts-nocheck
	// Get the data fetched on the server and store it somewhere tidy
	export let data;
	$: location = data.location_details.data; // Reactive so you can follow links to other locations

	let shipChoice;
	const navigateHere = async (shipChoice) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: data.token
			},
			body: JSON.stringify({
				waypointSymbol: location.symbol
			})
		};

		const navRes = await fetch(
			`https://api.spacetraders.io/v2/my/ships/${shipChoice}/navigate`,
			options
		);
		const navData = await navRes.json();
		console.log(navData);
	};
</script>

<h1>Location: {location.symbol}</h1>
<h2>Type: {location.type}; Faction: {location.faction.symbol}</h2>

<!-- Navigate one of your ships to here -->
<div>
	<h3>Navigate a ship here:</h3>
	<select bind:value={shipChoice}>
		{#each data.shipsList.data as ship}
			<option value={ship.symbol}>{ship.symbol}</option>
		{/each}
	</select>
	<button on:click={() => navigateHere(shipChoice)}>Go</button>
</div>

<!-- Check if there are orbitals and display them as links -->
{#if location.orbitals.length}
	<h3>Orbitals:</h3>
	<ul>
		{#each location.orbitals as orbital}
			<li><a href="/location/{orbital.symbol}">{orbital.symbol}</a></li>
		{/each}
	</ul>
{/if}

<h3>Location traits:</h3>
<ul>
	{#each location.traits as trait}
		<li>{trait.name}</li>
	{/each}
</ul>

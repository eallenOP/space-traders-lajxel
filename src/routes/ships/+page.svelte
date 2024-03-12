<script>
    // @ts-nocheck
	export let data;
	const ships = data.ships.data;

    //Dock or orbit a ship
    const dockOrbit = async (shipSymbol, action) => {
        const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
            }
        });
        const json = await response.json();
        location.reload();
    }
</script>

<h1>Ships</h1>

<!-- Loop over the ships -->
{#each ships as ship}
	<div class="ship-box">
		<section>
			<h2><a href="/ships/{ship.symbol}">{ship.symbol}</a></h2>
			<p>{ship.frame.name}: {ship.frame.description}</p>
			<p>Current location: {ship.nav.waypointSymbol}</p>
			<p>Status: {ship.nav.status}</p>
            <!-- Quick action to doc or orbit a ship -->
			{#if ship.nav.status === 'DOCKED'}
				<button on:click={() => dockOrbit(ship.symbol, "orbit")}>Orbit</button>
			{:else}
				<button on:click={() => dockOrbit(ship.symbol, "dock")}>Dock</button>
			{/if}
		</section>
		<aside>
			<h3>Ship data</h3>
			<p>Fuel: {ship.fuel.current}</p>
			<p>Hold capacity: {ship.cargo.capacity}</p>
			<p>Cargo: {ship.cargo.units}</p>
		</aside>
	</div>
{/each}

<style>
	.ship-box {
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
		display: flex;
		gap: 2em;
	}
	.ship-box h2 {
		font-weight: bold;
	}
	aside {
		flex: 1 1 12em;
	}
</style>

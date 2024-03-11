<script>
    export let data;
    const ships = data.ships.data;
</script>

<h1>Ships</h1>

<!-- Loop over the ships -->
{#each ships as ship}
    <div class="ship-box">
        <section>
            <h2>{ship.symbol}</h2>
            <p>{ship.frame.name}: {ship.frame.description}</p>
            <p>Current location: {ship.nav.waypointSymbol}</p>
            <p>Status: {ship.nav.status}</p>
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
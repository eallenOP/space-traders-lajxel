<script>
    export let data;
    const ship = data.ship_details.data;

    
</script>

<h1>Ship: {ship.symbol}</h1>
<h2>Role: {ship.registration.role}</h2>
<p>Frame: {ship.frame.name}</p>
<p>{ship.frame.description}</p>
<h3>Navigation</h3>
<p>Location: {ship.nav.waypointSymbol}</p>
<p>Status: {ship.nav.status}</p>
<p>Flight mode: {ship.nav.flightMode}</p>
<p>Fuel: {ship.fuel.current}</p>
<h3>Latest Route</h3>
<p>Origin: {ship.nav.route.origin.symbol} ({ship.nav.route.origin.type}) <small>at {ship.nav.route.origin.x}, {ship.nav.route.origin.y}</small></p>
<p>Destination: {ship.nav.route.destination.symbol} ({ship.nav.route.destination.type}) <small>at {ship.nav.route.destination.x}, {ship.nav.route.destination.y}</small></p>
<p>Departure time: {new Date(ship.nav.route.departureTime).toLocaleTimeString()}</p>
<p>Arrival time: {new Date(ship.nav.route.arrival).toLocaleTimeString()}</p>
<h3>Cargo</h3>
<p>Hold capacity: {ship.cargo.capacity}</p>
<p>Cargo: {ship.cargo.units}</p>
<p>Inventory:</p>
<ul>
    {#each ship.cargo.inventory as item}
        <li>{item.name} ({item.units})</li>
    {/each}
</ul>


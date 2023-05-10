<script>
  // Get the data fetched on the server and store it somewhere tidy
  export let data;
  const location = data.location_details.data;
</script>

<a href="/">back</a>

<h1>Location: {location.symbol}</h1>
<h2>Type: {location.type}; Faction: {location.faction.symbol}</h2>

<h3>Orbitals:</h3>
<ul>
  {#each location.orbitals as orbital}
    <li>{orbital.symbol}</li>
  {/each}
</ul>

<h3>Location traits:</h3>
<ul>
  {#each location.traits as trait}
    <li>{trait.name}</li>
  {/each}
</ul>
<script>
  // Get the data fetched on the server and store it somewhere tidy
  export let data;
  $: location = data.location_details.data; // Reactive so you can follow links to other locations
</script>

<a href="/">home</a>

<h1>Location: {location.symbol}</h1>
<h2>Type: {location.type}; Faction: {location.faction.symbol}</h2>

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
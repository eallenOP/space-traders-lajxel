<script>
	// Grab anything fetched by the corresponding +page.js file (as though it's a prop)
	export let data;
	let agent = data.agent_details.data; // Extract the usable data into a tidy variable
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Agent is {agent.symbol}
	</h1>

	<h2>
		of headquarters <a href="/location">{agent.headquarters}</a>
	</h2>
	<p>Credits: {agent.credits}</p>

</section>

<style>
/* Came with the demo app */
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

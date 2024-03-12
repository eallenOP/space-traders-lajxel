<script>
// @ts-nocheck

	export let data;
	const contracts = data.contracts.data;
	const meta = data.contracts.meta;

	// Accept a contract
	const acceptContract = async (id) => {
		const response = await fetch(`https://api.spacetraders.io/v2/my/contracts/${id}/accept`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': data.token
			}
		});
		const json = await response.json();
		console.log(json);
		location.reload();
	}
</script>

<h1>Contracts</h1>

<!-- Loop over the contracts -->
{#each contracts as contract}
	<div class="contract-box">
		<h2>ID: {contract.id}</h2>
		<p>{contract.type}</p>
		<p>Deadline: {contract.deadlineToAccept}</p>
		<h3>Terms:</h3>
		<p>Deliver by: {contract.terms.deadline}</p>
		<!-- Loop over delivery terms -->
		<ul>
			{#each contract.terms.deliver as delivery}
				<li>{delivery.tradeSymbol}: {delivery.unitsRequired}</li>
			{/each}
		</ul>
		<h3>
            Status:  
        </h3>
            {#if contract.accepted}
				<p>Accepted </p>
			{:else if contract.fulfilled}
				<p>and fulfilled</p>
			{:else}
				<p>Not Accepted</p>
				<button on:click={() => acceptContract(contract.id)}>Accept contract</button>
			{/if}
	</div>
{/each}

<style>
	.contract-box {
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
	}
	.contract-box h2 {
		font-weight: bold;
	}
	.contract-box h3 {
		font-size: 1em;
	}
</style>

<script>
    // @ts-nocheck
    export let data;
    const handleNavigate = async (selectedType) => {
        const res = await fetch(`https://api.spacetraders.io/v2/systems/X1-QV57/waypoints?type=${selectedType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
            }
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data);
        }
    };
</script>

<h1>Navigation</h1>

<select on:change={(e) => handleNavigate(e.target.value)}>
    <option value="ENGINEERED_ASTEROID">Engineered Asteroid</option>
    <option value="SHIPYARD">Shipyard</option>
</select>
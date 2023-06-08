<script>
    import { onMount } from "svelte";
    import RankingTable from "$lib/components/RankingTable.svelte";
    import RankingHeader from "../lib/components/RankingHeader.svelte";

    let type = "performance";
    let rankings = [];
    let snapshots = [];
    let maxValue = 0;
    let sliderValue = 0;

    onMount(async () => {
        await updateRankings();
    });

    async function updateRankings() {
        const response = await fetch(`/api/rankings?type=${type}`);
        const data = await response.json();
        snapshots = data.rankings.map((e) => e.snapshotDate);
        rankings = data.rankings;
        maxValue = snapshots.length - 1;
        sliderValue = maxValue;
    }

    async function handleTypeChange(event) {
        if (type === event.detail.type) return;

        type = event.detail.type;
        await updateRankings();
    }
</script>

<main>
    <RankingHeader on:typechange={handleTypeChange} />
    <div class="ranking">
        <h3>{sliderValue}</h3>
        <div class="slider">
            <input type="range" min="0" max={maxValue} bind:value={sliderValue} />
        </div>
        {#if snapshots[sliderValue]}
            <h2>{snapshots[sliderValue]}</h2>
        {/if}
        {#if rankings[sliderValue]}
            <RankingTable users={rankings[sliderValue].entries} {type} />
        {:else}
            loading...
        {/if}
    </div>
</main>

<style>
    main {
        width: calc(100% - 40px);
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .ranking {
        background-color: hsl(var(--base-hue), 15%, 15%);
        padding: 20px 50px;
        margin-bottom: 100px;
    }

    .slider {
        justify-content: center;
        display: flex;
    }

    input {
        width: 50%;
    }

    h3 {
        margin: 0;
        text-align: center;
    }
</style>

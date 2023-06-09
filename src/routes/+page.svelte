<script>
    import RankingTable from "$lib/components/RankingTable.svelte";
    import RankingHeader from "$lib/components/RankingHeader.svelte";

    export let data;
    $: maxValue = data.snapshots.length - 1;
    $: sliderValue = maxValue;
</script>

<main>
    <RankingHeader type={data.type} />
    <div class="ranking">
        <h3>{sliderValue}</h3>
        <div class="slider">
            <input type="range" min="0" max={maxValue} bind:value={sliderValue} />
        </div>
        <h2>{data.snapshots[sliderValue]}</h2>
        <RankingTable users={data.rankings[sliderValue].entries} type={data.type} />
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

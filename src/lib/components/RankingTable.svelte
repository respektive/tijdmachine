<script>
    import RankingRow from "./RankingRow.svelte";
    export let users;
</script>

<table class="ranking-table">
    <thead>
        <tr>
            <th class="ranking-table-head" />
            <th class="ranking-table-head-main" />
            <th class="ranking-table-head dimmed">Accuracy</th>
            <th class="ranking-table-head dimmed">Play Count</th>
            <th class="ranking-table-head">Performance</th>
            <th class="ranking-table-head ranking-table-head-grade dimmed">SS</th>
            <th class="ranking-table-head ranking-table-head-grade dimmed">S</th>
            <th class="ranking-table-head ranking-table-head-grade dimmed">A</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <RankingRow {user} />
        {/each}
    </tbody>
</table>

<style>
    .ranking-table {
        width: 100%;
        min-width: 650px;
        white-space: nowrap;
        text-align: center;
        border-spacing: 0 3px;
        border-collapse: separate;
        font-size: 12px;
    }

    .ranking-table-head {
        font-weight: 400;
        padding: 5px 10px;
        text-align: center;
    }

    .ranking-table-head-main {
        width: 100%;
    }

    .ranking-table-head-grade {
        padding: 5px 20px;
    }

    .dimmed {
        color: hsl(var(--green), 10%, 60%);
    }
</style>

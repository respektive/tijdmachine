<script>
    import RankingRow from "./RankingRow.svelte";
    export let users;
    export let type;

    const headers = {
        accuracy: "Accuracy",
        playcount: "Play Count",
        totalScore: "Total Score",
        rankedScore: "Ranked Score",
        pp: "Performance",
        scoreRank: "Score Rank",
        countSS: "SS",
        countS: "S",
        countA: "A",
    };
</script>

<table class="ranking-table">
    <thead>
        <tr>
            <th class="ranking-table-head" />
            <th class="ranking-table-head-main" />
            {#each Object.keys(headers) as key}
                {@const isGrade = ["countSS", "countS", "countA"].includes(key)}
                {#if key in users[0]}
                    {#if key === "pp" && type === "performance"}
                        <th class="ranking-table-head">Performance</th>
                    {:else if key === "rankedScore" && type === "score"}
                        <th class="ranking-table-head">Ranked Score</th>
                    {:else if key === "totalScore" && type === "score"}
                        <th class="ranking-table-head dimmed">Total Score</th>
                    {:else if key !== "pp" && key !== "rankedScore" && key !== "totalScore"}
                        <th
                            class="ranking-table-head dimmed"
                            class:ranking-table-head-grade={isGrade}
                        >
                            {headers[key]}
                        </th>
                    {/if}
                {:else if isGrade && "grades" in users[0]}
                    <th class="ranking-table-head ranking-table-head-grade dimmed">
                        {headers[key]}
                    </th>
                {/if}
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <RankingRow {user} {type} />
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
        color: hsl(var(--base-hue), 10%, 60%);
    }
</style>

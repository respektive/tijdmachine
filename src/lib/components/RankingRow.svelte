<script>
    export let user;
    export let type;

    function getFlagEmoji(countryCode) {
        const hex = countryCode
            .toUpperCase()
            .split("")
            .map((char) => (127397 + char.charCodeAt()).toString(16).toLowerCase());
        return hex.join("-");
    }

    function getGradeCount(user, grade) {
        if (!user.grades) {
            return formatValue(user[grade]);
        }

        switch (grade) {
            case "countSS":
                return formatValue(user.grades.ss + user.grades.ssh);
            case "countS":
                return formatValue(user.grades.s + user.grades.sh);
            case "countA":
                return formatValue(user.grades.a);
            default:
                return 0;
        }
    }

    function abbreviateNumber(number) {
        if (!number || typeof number === "string") return number;

        return Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 2,
        }).format(number);
    }

    function formatValue(value) {
        if (!value || typeof value === "string") return value;

        return value.toLocaleString("en-US");
    }

    const columns = [
        "accuracy",
        "playcount",
        "totalScore",
        "rankedScore",
        "pp",
        "scoreRank",
        "countSS",
        "countS",
        "countA",
    ];
</script>

<tr>
    <td class="ranking-row-rank">
        #{user.rank}
    </td>
    <td class="ranking-row ranking-row-user">
        {#if user.countryCode}
            <div
                class="flag-country"
                style="background-image: url('https://osu.ppy.sh/assets/images/flags/{getFlagEmoji(
                    user.countryCode
                )}.svg');"
            />
        {/if}
        <a href="https://osu.ppy.sh/users/{user.userId}">{user.username}</a>
    </td>
    {#each columns as key}
        {@const isGrade = ["countSS", "countS", "countA"].includes(key)}
        {#if key in user}
            {#if key === "pp" && type === "performance"}
                <td class="ranking-row">{formatValue(Math.round(user.pp))}</td>
            {:else if key === "rankedScore" && type === "score"}
                <td class="ranking-row">{abbreviateNumber(user.rankedScore)}</td>
            {:else if key === "totalScore" && type === "score"}
                <td class="ranking-row dimmed">{abbreviateNumber(user.totalScore)}</td>
            {:else if key !== "pp" && key !== "rankedScore" && key !== "totalScore"}
                <td class="ranking-row dimmed">
                    {#if key === "accuracy"}
                        {typeof user.accuracy === "string"
                            ? user.accuracy
                            : user.accuracy.toFixed(2) + "%"}
                    {:else}
                        {formatValue(user[key])}
                    {/if}
                </td>
            {/if}
        {:else if isGrade && "grades" in user}
            <td class="ranking-row dimmed">
                {getGradeCount(user, key)}
            </td>
        {/if}
    {/each}
</tr>

<style>
    td:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    td:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    td {
        background-color: hsl(var(--base-hue), 10%, 20%);
    }

    .ranking-row {
        padding: 6px 0;
        line-height: 20px;
    }

    .ranking-row-rank {
        padding: 0 10px;
    }

    .ranking-row-user {
        display: flex;
        align-items: center;
    }

    .ranking-row-user a {
        color: hsl(var(--base-hue), 40%, 80%);
        text-decoration: none;
    }

    .ranking-row-user a:hover {
        text-decoration: underline;
    }

    .dimmed {
        color: hsl(var(--base-hue), 10%, 60%);
    }

    .flag-country {
        margin-right: 10px;
        height: 20px;
        width: 27.7778px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 3px;
        position: relative;
        filter: saturate(1.1);
        transform: translateZ(0);
    }

    .flag-country::after {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: inherit;
        border-radius: inherit;
        filter: contrast(0) brightness(2);
        opacity: 0.1;
        content: "";
    }
</style>

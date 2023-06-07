<script>
    export let user;

    function getFlagEmoji(countryCode) {
        const hex = countryCode
            .toUpperCase()
            .split("")
            .map((char) =>
                (127397 + char.charCodeAt()).toString(16).toLowerCase()
            );
        return hex.join("-");
    }

    function getGradeCount(user, grade) {
        if (!user.grades) {
            return formatValue(user[`count${grade}`]);
        }

        switch (grade) {
            case "SS":
                return formatValue(user.grades.ss + user.grades.ssh);
            case "S":
                return formatValue(user.grades.s + user.grades.sh);
            case "A":
                return formatValue(user.grades.a);
            default:
                return 0;
        }
    }

    function formatValue(value) {
        if (typeof value === "string") return value;

        return value.toLocaleString("en-US");
    }
</script>

<tr>
    <td class="ranking-row-rank">
        #{user.rank}
    </td>
    <td class="ranking-row ranking-row-user">
        <div
            class="flag-country"
            style="background-image: url('https://osu.ppy.sh/assets/images/flags/{getFlagEmoji(
                user.countryCode
            )}.svg');"
        />
        <a href="https://osu.ppy.sh/users/{user.userId}">{user.username}</a>
    </td>
    <td class="ranking-row dimmed">
        {typeof user.accuracy === "string"
            ? user.accuracy
            : user.accuracy.toFixed(2) + "%"}
    </td>
    <td class="ranking-row dimmed">
        {formatValue(user.playcount)}
    </td>
    <td class="ranking-row">
        {formatValue(user.pp)}
    </td>
    <td class="ranking-row dimmed">
        {getGradeCount(user, "SS")}
    </td>
    <td class="ranking-row dimmed">
        {getGradeCount(user, "S")}
    </td>
    <td class="ranking-row dimmed">
        {getGradeCount(user, "A")}
    </td>
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
        background-color: hsl(var(--green), 10%, 20%);
    }

    .ranking-row {
        padding: 6px 0;
    }

    .ranking-row-rank {
        padding: 0 10px;
    }

    .ranking-row-user {
        display: flex;
        align-items: center;
    }

    .ranking-row-user a {
        color: hsl(var(--green), 40%, 80%);
        text-decoration: none;
        margin-left: 10px;
    }

    .ranking-row-user a:hover {
        text-decoration: underline;
    }

    .dimmed {
        color: hsl(var(--green), 10%, 60%);
    }

    .flag-country {
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

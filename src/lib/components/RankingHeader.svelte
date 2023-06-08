<div class="header-bar">
    <ul class="type-switcher">
        <li class="type-switcher-item">
            <a href="/">performance</a>
        </li>
        <li class="type-switcher-item">
            <a href="/">score</a>
        </li>
    </ul>

    <ul class="mode-switcher">
        <li class="mode-switcher-item">osu</li>
        <li class="mode-switcher-item">taiko</li>
        <li class="mode-switcher-item">catch</li>
        <li class="mode-switcher-item">mania</li>
    </ul>
</div>

<style>
    .header-bar {
        background-color: hsl(var(--base-hue), 20%, 20%);
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
    }

    .type-switcher {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        gap: 20px;
        padding: 0;
        margin: 0;
        position: relative;
    }

    .type-switcher-item {
        font-weight: 700;
        padding: 15px 0;
    }

    .type-switcher-item a {
        text-decoration: none;
        color: hsl(var(--base-hue), 40%, 75%);
    }

    .mode-switcher {
        display: flex;
        list-style: none;
        align-items: center;
        margin: 0;
        padding: 0;
        right: 50px;
        gap: 20px;
    }
</style>

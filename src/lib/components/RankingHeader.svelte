<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let activeType = "performance";

    function changeType(type) {
        dispatch("typechange", {
            type,
        });
    }
</script>

<div class="header-bar">
    <ul class="type-switcher">
        <li class="type-switcher-item">
            <a
                href="/"
                on:click={() => {
                    changeType("performance");
                    activeType = "performance";
                }}
                class="type-switcher-item-link"
                class:active={activeType === "performance"}
            >
                performance
            </a>
        </li>
        <li class="type-switcher-item">
            <a
                href="/"
                on:click={() => {
                    changeType("score");
                    activeType = "score";
                }}
                class="type-switcher-item-link"
                class:active={activeType === "score"}
            >
                score
            </a>
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
        padding: 15px 0;
    }

    .type-switcher-item-link {
        text-decoration: none;
        color: hsl(var(--base-hue), 40%, 75%);
    }

    .active {
        font-weight: 700;
        color: white;
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

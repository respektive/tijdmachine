<script>
    import "../app.css";
</script>

<nav>
    <ul>
        <li>
            <a href="/">home</a>
        </li>
    </ul>
</nav>

<slot />

<style>
    nav {
        background-color: hsl(var(--green), 30%, 30%);
        padding: 20px;
    }

    nav ul {
        margin: 0;
        display: flex;
    }

    li {
        list-style: none;
        padding-left: 20px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    :global(body) {
        margin: 0;
        background-color: hsl(var(--green), 10%, 10%);
        color: white;
    }
</style>

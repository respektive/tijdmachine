
<nav>
    <ul>
        <li>
            <a href="/">home</a>
        </li>
    </ul>
</nav>

<slot></slot>

<footer>
    osu
</footer>

<style>
    nav {
        background-color: hsl(125, 30%, 30%);
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
        background-color: hsl(125, 10%, 10%);
        color: white;
    }

    footer {
        background-color: hsl(125, 20%, 20%);
        width: 100%;
        height: 50px;
        text-align: center;
        position: fixed;
        bottom: 0;
    }
</style>
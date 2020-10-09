<script>
    import { onMount } from "svelte";
    export let project;
    export let colors;

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    onMount(async () => {
        if (project.full_name) {
            const storage = sessionStorage.getItem(project.full_name)
            if (!storage) {
                const res = await fetch(`https://api.github.com/repos/${project.full_name}`);
                project = await res.json();
    
                sessionStorage.setItem(project.full_name, JSON.stringify(project))
            } else {
                project = JSON.parse(storage)
            }
        }
    });
</script>

<div class="repo-card">
    <div style="display: flex; align-items: center;">
        {#if project.external}
            <svg style="margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948c.12-.197.237-.381.353-.552a6.506 6.506 0 0 0-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 0 0 4.666 5.5a11.13 11.13 0 0 1-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 0 1-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 0 1-.857-1.215A9.637 9.637 0 0 1 5.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 0 1 1.363-4.177c.306-.51.612-.919.857-1.215c.245.296.55.705.857 1.215A9.638 9.638 0 0 1 10.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948c-.12.197-.237.381-.353.552a6.506 6.506 0 0 0 4.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 0 0-.353-.552a6.506 6.506 0 0 1 4.666 5.5zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" /></svg>
        {:else}
            <svg style="margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        {/if}
        <span style="font-weight: bolder; color: #0366d6;">
            {#if project.full_name}
                <a href={project.html_url} target="_blank">{project.full_name}</a>
            {:else}
                <a href={project.html_url} target="_blank">{project.name}</a>
            {/if}
        </span>
        {#if project.archived}
            <span class="archived">Archived</span>
        {/if}
    </div>
    {#if project.fork}
        <div style="display: 'block'; font-size: 14px; color: #586069;">
            forked from <a href={project.source.html_url} target="_blank">{project.source.full_name}</a>
        </div>
    {/if}
    <div style="font-size: 14px; margin-bottom: 16px; margin-top: 8px; color: #586069;">{project.description}</div>

    {#if !project.external}
        <div style="font-size: 14px; color: #586069; display: flex;">
            {#if project.language}
                <div style="margin-right: 16px;">
                    <span style="width: 12px; height: 12px; border-radius: 100%; background-color: { project.language ? colors[project.language]?.color : 'gray' }; display: inline-block; top: 1px; position: relative;"></span>
                    <span>{project.language}</span>
                </div>
            {/if}
            <div style="display: flex; align-items: center; margin-right: 16px;">
                <svg aria-label="stars" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                    &nbsp; <span>{kFormatter(project.stargazers_count)}</span>
            </div>
            <div style="display: flex; align-items: center;">
                <svg aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    &nbsp; <span>{kFormatter(project.forks)}</span>
            </div>
        </div>
    {/if}
</div>

<style>
    .repo-card {
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        background: white;
        padding: 16px;
        font-size: 16px;
        line-height: 1.5;
        /* color: #2429e2; */
    }

    .archived {
        font-size: 12px;
        padding: 0 4px;
        margin-left: 8px;
        border-radius: 1em;
        border: 1px solid #e1e4e8;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    svg {
        fill: #586069;
    }
</style>
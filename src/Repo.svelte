<script>
    import { onMount } from "svelte";
    export let project;
    export let colors;

    let mounted = false;

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
    }

    async function getProject({ full_name }) {
        const storage = sessionStorage.getItem(full_name);
        if (!storage) {
            const res = await fetch(`https://api.github.com/repos/${full_name}`);
            project = await res.json();

            sessionStorage.setItem(full_name, JSON.stringify(project));
        } else {
            project = JSON.parse(storage);
        }
    }

    $: {
        if (mounted && project.full_name) getProject(project);
    }

    onMount(() => {
        mounted = true
    });
</script>

<div class="repo-card">
    <div style="display: flex; align-items: center;">
        {#if project.external}
            <svg style="margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0a.75.75 0 0 0-1.06 1.06a3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0a.75.75 0 0 0 1.06-1.06a3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z" /></svg>
        {:else if project.fork}
            <svg style="margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
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
        <div style="display: block; font-size: 12px;">
            forked from <a style="color: #0366d6" href={project.source.html_url} target="_blank">{project.source.full_name}</a>
        </div>
    {/if}
    <div style="font-size: 14px; margin-bottom: 16px; margin-top: 8px;">{project.description}</div>

    {#if !project.external}
        <div style="font-size: 14px; display: flex;">
            {#if project.language}
                <div style="margin-right: 16px;">
                    <span style="width: 12px; height: 12px; border-radius: 100%; background-color: { project.language ? colors[project.language] && colors[project.language].color : 'gray' }; display: inline-block; top: 1px; position: relative;"></span>
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
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        padding: 16px;
        font-size: 16px;
        line-height: 1.5;
        text-align: initial;
    }

    .archived {
        font-size: 12px;
        padding: 0 4px;
        margin-left: 8px;
        border-radius: 1em;
        border: 1px solid #e1e4e8;
    }

    svg {
        fill: #586069;
    }

    @media (prefers-color-scheme: dark) {
        svg {
            fill: #b2b9bf;
        }
    }
</style>
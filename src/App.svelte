<script>
	import { onMount } from 'svelte';
	import awesome from './awesome';

	import Repo from './Repo.svelte';
	import ViewOnGithub from './ViewOnGithub.svelte';

	export let name;

	let colors = [];
	let contributors = [];

	onMount(async () => {
		colors = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
			.then(res => res.json());

		contributors = await fetch('https://api.github.com/repos/anhthang/awesome-made-by-vietnameses/contributors')
			.then(res => res.json());
	});

	const categories = Object.keys(awesome)

	let active;
	let filteredCategories = categories;
</script>

<main>
	<ViewOnGithub />

	<h1>{name}</h1>

	<p>
		It's hard to calculate project popularity so we use stars as a measurement. It's not quite fair, but it is what we have here on Github.
	</p>

	<div class="categories">
		<button class:active={!active} on:click={() => { active = undefined; filteredCategories = categories }}>All</button>
		{#each categories as category}
			<button class:active={active === category} on:click="{() => { active = category; filteredCategories = categories.filter(c => c === category); }}" style="color: {colors[category]?.color}">
				{category}
			</button>
		{/each}
	</div>

	{#each filteredCategories as category}
		<h3 style="color: {colors[category]?.color}">{category}</h3>
		<div class="repos">
			{#each awesome[category].projects as project}
				<Repo {project} {colors} />
			{/each}
		</div>
	{/each}

	<h2>Contributors</h2>
	{#each contributors as contributor}
		<a href={contributor.html_url} target="_blank">
			<img width="64" height="64" style="border-radius: 100%" src={contributor.avatar_url || contributor.gravatar_id} alt={contributor.login} />
		</a>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.repos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 8px;

		margin-top: 16px;
		margin-bottom: 16px;
	}

	.categories {
		width: 75%;
		display: inline-block;
	}

	button {
		margin: 8px;
		border: none;
		cursor: pointer;
		background-color: transparent;
	}

	button.active {
		background-color: #f4f4f4;
	}

	@media (prefers-color-scheme: dark) {
		button.active {
			background-color: #141d23;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	@media (min-width: 768px) {
		.repos {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1200px) {
		main {
			width: 80%;
			margin-left: 10%;
		}

		.repos {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
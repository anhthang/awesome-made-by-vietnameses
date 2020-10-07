<script>
	import { onMount } from 'svelte';
	import Repo from './Repo.svelte';
	import awesome from './awesome';

	export let name;

	let colors = [];

	onMount(async () => {
		const res = await fetch(`https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`);
		colors = await res.json();
	});

	const categories = Object.keys(awesome)
</script>

<main>
	<h1>{name}</h1>
	<a href="https://github.com/anhthang/awesome-made-by-vietnameses" target="_blank">
		<svg width="48" height="48" fill="#ff3e00" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fork me on GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
	</a>

	<div class="categories">
		{#each categories as category}
			<span style="color: {colors[category]?.color}">{category}</span>
			<div class="repos">
				{#each awesome[category].projects as project}
					<Repo project={project} colors={colors} />
				{/each}
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.categories {
		width: 70%;
		margin-left: 15%;
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.categories span {
		color: #ff3e00;
		/* font-weight: 300; */
		font-size: 1.5em;
	}

	.repos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 8px;

		margin-top: 16px;
		margin-bottom: 16px;
	}
</style>
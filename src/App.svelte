<script>
	import { onMount } from 'svelte';
	import awesome from './awesome';

	import Repo from './Repo.svelte';
	import ViewOnGithub from './ViewOnGithub.svelte';

	export let name;

	let colors = [];

	onMount(async () => {
		const res = await fetch(`https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`);
		colors = await res.json();
	});

	const categories = Object.keys(awesome)
</script>

<main>
	<ViewOnGithub />

	<h1>{name}</h1>

	<div class="categories">
		<p>
			It's hard to calculate project popularity so we use stars as a measurement. It's not quite fair, but it is what we have here on Github.
		</p>
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
		/* max-width: 240px; */
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 3em;
		font-weight: 100;
	}

	.categories span {
		color: #ff3e00;
		/* font-weight: 300; */
		font-size: 1.5em;
	}

	.repos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 8px;

		margin-top: 16px;
		margin-bottom: 16px;
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
		.categories {
			width: 70%;
			margin-left: 15%;
		}

		.repos {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
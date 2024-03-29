import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/adapter-vercel').Config} */
const config = {
	runtime: 'nodejs20.x',
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ out: 'public' }),
		// specify node version 20
	}
};

export default config;

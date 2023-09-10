import App from './Bolo.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
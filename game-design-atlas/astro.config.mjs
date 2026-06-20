// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Game Design Atlas',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
  						{
    					label: 'Explore',
    					items: [
      						{ label: 'Genres', slug: 'genres/action-rpg' },
    					],
 					 },
				],
		}),
	],
});

import Twitch from '@auth/core/providers/twitch'
import Facebook from '@auth/core/providers/facebook'
import { defineConfig } from 'auth-astro'

export default defineConfig({
	providers: [
		Twitch({
			clientId: import.meta.env.TWITCH_CLIENT_ID,
			clientSecret: import.meta.env.TWITCH_CLIENT_SECRET,
		}),
        Facebook({
			clientId: import.meta.env.FACEBOOK_CLIENT_ID,
			clientSecret: import.meta.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
})
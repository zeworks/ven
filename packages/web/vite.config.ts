import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import "dotenv/config"

export default defineConfig(() => ({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: process.env.BASE_API_URL,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
}))

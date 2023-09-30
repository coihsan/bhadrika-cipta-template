import { defineConfig } = require('vite');
import { vitePluginGhPages } = require('vite-plugin-gh-pages');

module.exports = defineConfig({
  plugins: [react(),
    vitePluginGhPages()],
});

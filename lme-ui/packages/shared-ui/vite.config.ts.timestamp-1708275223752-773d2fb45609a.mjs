// vite.config.ts
import vue from "file:///C:/Users/hoang/source/repo/luminae/lme-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.2_vue@3.4.19/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///C:/Users/hoang/source/repo/luminae/lme-ui/node_modules/.pnpm/vite@4.5.2/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/hoang/source/repo/luminae/lme-ui/node_modules/.pnpm/vite-plugin-dts@2.3.0_vite@4.5.2/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\hoang\\source\\repo\\luminae\\lme-ui\\packages\\shared-ui";
var vite_config_default = defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/main.ts"),
      formats: ["es"],
      name: "UiLib"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue"
        }
      }
    }
  },
  plugins: [vue(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxob2FuZ1xcXFxzb3VyY2VcXFxccmVwb1xcXFxsdW1pbmFlXFxcXGxtZS11aVxcXFxwYWNrYWdlc1xcXFxzaGFyZWQtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGhvYW5nXFxcXHNvdXJjZVxcXFxyZXBvXFxcXGx1bWluYWVcXFxcbG1lLXVpXFxcXHBhY2thZ2VzXFxcXHNoYXJlZC11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaG9hbmcvc291cmNlL3JlcG8vbHVtaW5hZS9sbWUtdWkvcGFja2FnZXMvc2hhcmVkLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi50cycpLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXHJcbiAgICAgICAgICAgIG5hbWU6ICdVaUxpYidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFZ1ZTogJ3Z1ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbdnVlKCksIGR0cygpXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3WCxPQUFPLFNBQVM7QUFDeFksT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsTUFDRCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDNUMsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

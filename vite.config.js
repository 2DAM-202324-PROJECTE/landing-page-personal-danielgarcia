export default {
    // config options
    base: '/landing-page-personal-danielgarcia/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          preus: resolve(__dirname, 'preus/index.html'),
        },
      },
    },
}

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://railwayapp-strapi-production-922e.up.railway.app'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});


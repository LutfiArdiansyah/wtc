module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://wtc.a-aziz.tech:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a277c0a2593ff36435eb068a3e89d66f'),
    },
  },
});

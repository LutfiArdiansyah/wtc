module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://103.174.115.41:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a277c0a2593ff36435eb068a3e89d66f'),
    },
  },
});

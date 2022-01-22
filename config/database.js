module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '10.38.7.163'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi-dev'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'Gbi@2021'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

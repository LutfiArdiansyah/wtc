module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '217.21.72.246'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u1664547_staging_wtc'),
        username: env('DATABASE_USERNAME', 'u1664547_wtc'),
        password: env('DATABASE_PASSWORD', 'Wtc@2022'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

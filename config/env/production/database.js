module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        database: env('DATABASE_NAME', 'strapi'),
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 27017),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_USERNAME', '')
      },
      options: {
        'useNullAsDefault': true
      }
    }
  },
});
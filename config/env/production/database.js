module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        database: env('DATABASE_NAME'),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD')
      },
      options: {
        'useNullAsDefault': true
      }
    }
  },
});
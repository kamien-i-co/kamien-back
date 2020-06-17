module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        database: 'kamien',
        host: '127.0.0.1',
        port: 5432,
        username: 'kamienuser',
        password: 'qazwsx'
      },
      options: {
        'useNullAsDefault': true
      }
    }
  },
});

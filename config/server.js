const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },

  //postgres://gvuhdkohpughcu:14efec71fcd2089e08e1cdfd7a329ae22b46341acfcdcc0eb69abedd774e901a@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/dd53ombp4p64p6

});

require('dotenv').config();


const dbConfig = (env) => {
  if (env === 'production') {
    return {
      database: process.env.DB_PRODUCTION_URL,
      password: process.env.PRODUCTION_DB_PASSWORD,
      username: process.env.PRODUCTION_DB_USERNAME,
      PORT: process.env.PORT,
      dbName: process.env.PRODUCTION_DB_NAME,
      host: process.env.PRODUCTION_DB_HOST,
      dialect: process.env.DB_DIALECT,
      secret: process.env.SECRET,
      email_host: process.env.EMAIL_HOST,
      email_port: 587,
      email_use_authentication: true,
      email_user: process.env.EMAIL_USER,
      email_pass: process.env.EMAIL_PASS
    };
  } else if (env === 'development') {
    return {
      PORT: '8080',
      username: process.env.DEVELOPMENT_DB_USERNAME,
      password: process.env.DEVELOPMENT_DB_PASSWORD,
      dbName: process.env.DEVELOPMENT_DB_NAME,
      host: process.env.IP || process.env.DEVELOPMENT_DB_HOST,
      dialect: process.env.DB_DIALECT,
    };
  }
  throw new Error('specify enviroment, only "test" and "development" is available now');
};
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
  USER_COOKIE: 'user_id',
  secret: process.env.SECRET
};

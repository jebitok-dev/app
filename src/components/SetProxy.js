const { proxy } = require('http-proxy-middleware');
/* eslint-disable */
module.export = function (app) {
  app.use(
    proxy('registrations', {
      target: 'https://thawing-beach-22464.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    proxy('sessions', {
      target: 'https://thawing-beach-22464.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    proxy('logged_in', {
      target: 'https://thawing-beach-22464.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    proxy('appointments', {
      target: 'https://thawing-beach-22464.herokuapp.com',
      changeOrigin: true,
    }),
  );
};

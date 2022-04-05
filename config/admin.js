module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55e12bd3a75627e2f8867633e3619f6e'),
  },
});

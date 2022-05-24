module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "1431d9a0fc3b0f4e99c8eecf91ba827a"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});

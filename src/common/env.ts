const config = window.NERIMITY_CONFIG || {};

export default {
  SERVER_URL: config.SERVER_URL || import.meta.env.VITE_SERVER_URL,
  WS_URL: config.WS_URL || import.meta.env.VITE_WS_URL,
  APP_URL: config.APP_URL || import.meta.env.VITE_APP_URL,
  MOBILE_WIDTH: parseInt(config.MOBILE_WIDTH || import.meta.env.VITE_MOBILE_WIDTH),
  APP_VERSION: (config.APP_VERSION || import.meta.env.VITE_APP_VERSION) as string | undefined,
  DEV_MODE: (config.DEV_MODE || import.meta.env.VITE_DEV_MODE) === "true",
  MESSAGE_LIMIT: parseInt(config.MESSAGE_LIMIT || import.meta.env.VITE_MESSAGE_LIMIT || "50"),
  TURNSTILE_SITEKEY: config.TURNSTILE_SITEKEY || import.meta.env.VITE_TURNSTILE_SITEKEY,
  EMOJI_URL: config.EMOJI_URL || import.meta.env.VITE_EMOJI_URL,
  NERIMITY_CDN: config.NERIMITY_CDN || import.meta.env.VITE_NERIMITY_CDN,
  OFFICIAL_SERVER: config.OFFICIAL_SERVER || import.meta.env.VITE_OFFICIAL_SERVER || "nerimity",
  GOOGLE_CLIENT_ID: (config.GOOGLE_CLIENT_ID || import.meta.env.VITE_GOOGLE_CLIENT_ID) as string | undefined,
  GOOGLE_API_KEY: (config.GOOGLE_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY) as string | undefined,
};

#!/bin/sh

# Recreate config.js
echo "window.NERIMITY_CONFIG = {" > /usr/share/nginx/html/config.js

if [ -n "$SERVER_URL" ]; then
  echo "  SERVER_URL: \"$SERVER_URL\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$WS_URL" ]; then
  echo "  WS_URL: \"$WS_URL\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$APP_URL" ]; then
  echo "  APP_URL: \"$APP_URL\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$MOBILE_WIDTH" ]; then
  echo "  MOBILE_WIDTH: \"$MOBILE_WIDTH\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$APP_VERSION" ]; then
  echo "  APP_VERSION: \"$APP_VERSION\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$DEV_MODE" ]; then
  echo "  DEV_MODE: \"$DEV_MODE\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$MESSAGE_LIMIT" ]; then
  echo "  MESSAGE_LIMIT: \"$MESSAGE_LIMIT\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$TURNSTILE_SITEKEY" ]; then
  echo "  TURNSTILE_SITEKEY: \"$TURNSTILE_SITEKEY\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$EMOJI_URL" ]; then
  echo "  EMOJI_URL: \"$EMOJI_URL\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$NERIMITY_CDN" ]; then
  echo "  NERIMITY_CDN: \"$NERIMITY_CDN\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$OFFICIAL_SERVER" ]; then
  echo "  OFFICIAL_SERVER: \"$OFFICIAL_SERVER\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$GOOGLE_CLIENT_ID" ]; then
  echo "  GOOGLE_CLIENT_ID: \"$GOOGLE_CLIENT_ID\"," >> /usr/share/nginx/html/config.js
fi
if [ -n "$GOOGLE_API_KEY" ]; then
  echo "  GOOGLE_API_KEY: \"$GOOGLE_API_KEY\"," >> /usr/share/nginx/html/config.js
fi

echo "};" >> /usr/share/nginx/html/config.js

# Execute the CMD
exec "$@"

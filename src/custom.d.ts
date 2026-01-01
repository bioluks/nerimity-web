declare module "chroma-js/src/generator/average.js" {
  import { Color, InterpolationMode } from "chroma-js";
  export default function average(
    colors: Array<string | Color>,
    colorSpace?: InterpolationMode,
    weights?: number[]
  ): Color;
}

interface NerimityConfig {
  SERVER_URL?: string;
  WS_URL?: string;
  APP_URL?: string;
  MOBILE_WIDTH?: string;
  APP_VERSION?: string;
  DEV_MODE?: string;
  MESSAGE_LIMIT?: string;
  TURNSTILE_SITEKEY?: string;
  EMOJI_URL?: string;
  NERIMITY_CDN?: string;
  OFFICIAL_SERVER?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_API_KEY?: string;
}

interface Window {
  NERIMITY_CONFIG?: NerimityConfig;
}

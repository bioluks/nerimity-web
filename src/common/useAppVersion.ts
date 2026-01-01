import { getLatestRelease, getLatestSha, Release } from "@/github-api";
import { createSignal } from "solid-js";
import env from "./env";
import {
  getStorageString,
  setStorageString,
  StorageKeys,
} from "./localStorage";

const [updateAvailable, setUpdateAvailable] = createSignal(false);
const [latestRelease, setLatestRelease] = createSignal<Release | null>(null);

const showChangelog = () => {
  if (env.DEV_MODE || !env.APP_VERSION) {
    return false;
  }
  const appVersion = env.APP_VERSION;
  if (!appVersion) return false;
  const seenVersion = getStorageString(StorageKeys.SEEN_APP_VERSION, undefined);

  if (!seenVersion) {
    setStorageString(StorageKeys.SEEN_APP_VERSION, appVersion);
    return false;
  }
  if (seenVersion !== appVersion) {
    setStorageString(StorageKeys.SEEN_APP_VERSION, appVersion);
    return true;
  }
  return false;
};

const checkForUpdate = async () => {
  console.log("[UPDATE] Checks disabled by configuration.");
};

export function useAppVersion() {
  return { latestRelease, updateAvailable, showChangelog, checkForUpdate };
}

const repos = {
  nerimityWeb: {
    owner: "Nerimity",
    repo: "nerimity-web",
  },
  nerimityDesktop: {
    owner: "Nerimity",
    repo: "nerimity-desktop",
  },
  nerimityReactNative: {
    owner: "Nerimity",
    repo: "NerimityReactNative",
  },
};

export interface Release {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  assets: Asset[];
}

export interface Asset {
  name: string;
  browser_download_url: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url + `?rnd=${Math.random()}`);
  const json = await res.json();
  return json;
}

export function getLatestRelease({ owner, repo } = repos.nerimityWeb) {
  // Disabled for privacy/self-hosting
  return Promise.resolve({
    tag_name: "v0.0.0",
    name: "Self-Hosted",
    body: "Self-hosted instance",
    published_at: new Date().toISOString(),
    assets: [],
  } as Release);
}

export function getLatestSha({ owner, repo } = repos.nerimityWeb) {
  return Promise.resolve("0000000");
}

export async function getPlatformDownloadLinks() {
  return [];
}

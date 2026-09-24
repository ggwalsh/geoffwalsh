export const SITE_URL = "https://geoffwalsh.xyz";
export const SITE_NAME = "Geoff Walsh";

export function pageHead(title: string, description: string, path: string) {
  const full = title === SITE_NAME ? SITE_NAME : `${title} · ${SITE_NAME}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
  };
}

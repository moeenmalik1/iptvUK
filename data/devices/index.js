import { androidTvDevice } from './android-tv';
import { macDevice } from './mac';
import { pcDevice } from './pc';
import { smartTvDevice } from './smart-tv';

// Device landing pages built from the shared DevicePage component. Each entry
// needs a matching static route under app/<slug>/page.js — a root-level
// dynamic segment is not possible here because app/[guideSlug] already owns it.
export const devices = [smartTvDevice, pcDevice, macDevice, androidTvDevice];

export function getDevice(slug) {
  return devices.find((device) => device.slug === slug);
}

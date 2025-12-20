import { DeepLinkHandler } from '../types';

export const instagramHandler: DeepLinkHandler = {
  match: (url) =>
    url.match(/instagram\.com\/([^/?]+)/),

  build: (webUrl, match) => {
    const username = match[1];

    return {
      webUrl,
      ios: `instagram://user?username=${username}`,
      android: `intent://user?username=${username}#Intent;scheme=instagram;package=com.instagram.android;end`,
      platform: 'instagram',
    };
  },
};

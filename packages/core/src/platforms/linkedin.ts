import { DeepLinkHandler } from '../types';

export const linkedinHandler: DeepLinkHandler = {
  match: (url) => url.match(/linkedin\.com\/in\/([^/?]+)/),

  build: (webUrl, match) => {
    const profileId = match[1];

    return {
      webUrl,
      ios: `linkedin://in/${profileId}`,
      android: `intent://in/${profileId}#Intent;scheme=linkedin;package=com.linkedin.android;end`,
      platform: 'linkedin',
    };
  },
};

import { DeepLinkResult } from '../types';

export function unknownHandler(webUrl: string): DeepLinkResult {
  return {
    webUrl,
    ios: null,
    android: null,
    platform: 'unknown',
  };
}

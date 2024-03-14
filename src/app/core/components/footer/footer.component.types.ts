import { TCssStyle } from '@app/core/types/css-style.types';

type TSocialMediaId = 'github' | 'linkedin';

interface ISocialData {
  url: string;
  user: string;
  title: string;
  iconStyle: TCssStyle
}

export type TSocialMedia = Record<TSocialMediaId, ISocialData>

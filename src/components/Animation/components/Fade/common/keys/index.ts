import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

import type { FadeProps } from '../types';
import { PolymorphicDefaultElement } from '@common/types';

export const __KEYS_FADE_CLASS__ = `${__DEFAULT_CLASS_PREFIX__}-fade`;

export const __KEYS_FADE__: Array<keyof FadeProps<PolymorphicDefaultElement> = ['transition', 'transitionEnd'];

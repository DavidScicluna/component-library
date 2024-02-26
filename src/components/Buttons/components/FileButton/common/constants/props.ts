import type { ComponentProps } from 'react';

import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import type { FileButtonDefaultElement } from '../types';

export const DEFAULT_FILE_BUTTON_AS: FileButtonDefaultElement = 'input';

export const DEFAULT_FILE_BUTTON_ACCEPT = 'image/*';

export const DEFAULT_FILE_BUTTON_DURATION: ThemeDuration = 'ultra-slow';
export const DEFAULT_FILE_BUTTON_TIMEOUT =
	convertStringToNumber(theme.transitionDuration[DEFAULT_FILE_BUTTON_DURATION], 'ms') * 5;

export const DEFAULT_FILE_BUTTON_IS_MULTIPLE = false;

export const DEFAULT_FILE_BUTTON_TYPE: ComponentProps<'input'>['type'] = 'file';

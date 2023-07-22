import theme from '@common/theme';
import { convertREMToPixels, convertStringToNumber } from '@common/utils';

export const __DEFAULT_PAGE_TRANSITION_BLUR__ = convertREMToPixels(convertStringToNumber(theme.spacing[2], 'rem'));

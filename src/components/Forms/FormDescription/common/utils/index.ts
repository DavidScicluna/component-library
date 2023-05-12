import memoize from 'micro-memoize';

import { convertPixelsToREM, convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { Theme } from '../../../../../theme/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { FormControlProps } from '../../../FormControl/common/types';

type GetFormDescriptionFontSizeProps = Pick<FormControlProps, 'size'> & { theme: Theme };

export const getFormDescriptionFontSize = memoize(
	({ theme, size = defaultSize }: GetFormDescriptionFontSizeProps): string => {
		return `${convertPixelsToREM(convertREMToPixels(convertStringToNumber(theme.fontSizes[size], 'rem')) - 2)}rem`;
	}
);

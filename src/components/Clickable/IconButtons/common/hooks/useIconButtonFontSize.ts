import { useMemo } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getFontSizeHeight } from '../../../../../common/utils';
import { CommonIconButtonProps } from '../types';

type UseIconButtonFontSizeProps = Pick<CommonIconButtonProps, 'size'>;

const useIconButtonFontSize = ({ size }: UseIconButtonFontSizeProps): number => {
	const theme = useTheme();

	const fontSize = useMemo(
		(): number => getFontSizeHeight({ theme, fontSize: size, lineHeight: 'shorter' }),
		[theme, size]
	);

	return fontSize;
};

export default useIconButtonFontSize;

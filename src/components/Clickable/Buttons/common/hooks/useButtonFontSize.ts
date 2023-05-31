import { useMemo } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getFontSizeHeight } from '../../../../../common/utils';
import { CommonButtonProps } from '../types';

type UseButtonFontSizeProps = Pick<CommonButtonProps, 'size'>;

const useButtonFontSize = ({ size }: UseButtonFontSizeProps): number => {
	const theme = useTheme();

	const fontSize = useMemo((): number => {
		return getFontSizeHeight({ theme, fontSize: size, lineHeight: 'shorter' });
	}, [theme, size]);

	return fontSize;
};

export default useButtonFontSize;

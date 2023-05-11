import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import Spinner from '../../../../../Feedback/Spinner';
import { useIconButtonFontSize } from '../../../common/hooks';
import { useIconButtonContext } from '../../common/hooks';

import { IconButtonSpinnerProps } from './common/types';

const IconButtonSpinner: FC<IconButtonSpinnerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, size } = useIconButtonContext();

	const { variant } = props;

	const primaryColor = useMemo((): string => {
		switch (variant) {
			case 'light':
				return getColor({
					theme,
					colorMode,
					color: color === 'black' || color === 'white' ? 'gray' : color,
					type: color === 'black' ? 'light' : color === 'white' ? 'dark' : 'darkest'
				});
			case 'monochrome':
				return getColor({
					theme,
					colorMode,
					color: 'gray',
					type: 'text.primary'
				});
			case 'outlined':
			case 'icon':
				return getColor({
					theme,
					colorMode,
					color: color === 'black' || color === 'white' ? 'gray' : color,
					type: color === 'black' ? 'darker' : color === 'white' ? 'lighter' : 'color'
				});
			default:
				return getColor({
					theme,
					colorMode,
					color: 'gray',
					type: color === 'black' ? 'lightest' : color === 'white' ? 'darkest' : 'background'
				});
		}
	}, [color, colorMode, variant]);
	const fontSize = useIconButtonFontSize({ size });

	return <Spinner color={primaryColor} mode='puff' size={fontSize} />;
};

export default IconButtonSpinner;

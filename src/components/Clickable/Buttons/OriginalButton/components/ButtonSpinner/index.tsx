import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import Spinner from '../../../../../Spinner';

import { ButtonSpinnerProps } from './types';

const ButtonSpinner: FC<ButtonSpinnerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, size, variant } = props;

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
			case 'text':
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

	return <Spinner color={primaryColor} mode='pulse' size={size} />;
};

export default ButtonSpinner;

import { FC } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getColor,GetColorProps } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import { useCardContext } from '../../common/hooks';

import { CardDividerProps } from './types';

const CardDivider: FC<CardDividerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDisabled, isLight } = useCardContext();

	const handleReturnType = (): GetColorProps['type'] => {
		if (isDisabled) {
			return isLight ? 'divider' : 'text.secondary';
		} else {
			switch (color) {
				case 'black':
					return 'darkest';
				case 'white':
					return 'lightest';
				default:
					return isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color';
			}
		}
	};

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color === 'black' || color === 'white' ? 'gray' : color,
				type: handleReturnType()
			})}
		/>
	);
};

export default CardDivider;

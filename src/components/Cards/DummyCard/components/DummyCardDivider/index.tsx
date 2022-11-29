import { FC } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getColor, GetColorProps } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import { useDummyCardContext } from '../../common/hooks';

import { DummyCardDividerProps } from './types';

const DummyCardDivider: FC<DummyCardDividerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isLight } = useDummyCardContext();

	const handleReturnType = (): GetColorProps['type'] => {
		switch (color) {
			case 'black':
				return 'darkest';
			case 'white':
				return 'lightest';
			default:
				return isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color';
		}
	};

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: color === 'black' || color === 'white' ? 'gray' : color,
				type: handleReturnType()
			})}
		/>
	);
};

export default DummyCardDivider;

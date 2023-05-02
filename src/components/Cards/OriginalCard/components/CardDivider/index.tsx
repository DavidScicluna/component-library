import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import { useCardContext } from '../../common/hooks';

import { CardDividerProps } from './common/types';

const CardDivider: FC<CardDividerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, variant } = useCardContext();

	const background = useMemo((): string => {
		switch (variant) {
			case 'transparent':
			case 'monochrome':
				return getColor({ theme, colorMode, color: 'gray', type: 'divider' });
			case 'outlined':
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

	return <Divider {...props} background={background} backgroundColor={background} />;
};

export default CardDivider;

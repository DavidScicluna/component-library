import { FC, useContext, useCallback } from 'react';

import { merge } from 'lodash';

import useStyles from './styles';
import { BadgeIconProps } from './types';

import { BadgeContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import Icon from '../../../../Icon';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { BadgeContext as BadgeContextType } from '../../types';

const BadgeIcon: FC<BadgeIconProps> = ({ sx, ...rest }) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, size = defaultSize } = useContext<BadgeContextType>(BadgeContext);

	const style = useStyles({ theme, size });

	const handleReturnSize = useCallback((): string => {
		return theme.fontSizes[size];
	}, [theme, size]);

	return (
		<Icon
			{...rest}
			colorMode={colorMode}
			width={handleReturnSize()}
			height={handleReturnSize()}
			sx={{ ...merge(style, sx) }}
		/>
	);
};

export default BadgeIcon;

import { FC } from 'react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../common/hooks';
import Icon from '../../../../Icon';
import { useBadgeContext } from '../../common/hooks';

import useStyles from './styles';
import { BadgeIconProps } from './types';

const BadgeIcon: FC<BadgeIconProps> = ({ sx, ...rest }) => {
	const theme = useTheme();

	const { colorMode, size } = useBadgeContext();

	const style = useStyles({ theme, size });

	const handleReturnSize = (): string => {
		return theme.fontSizes[size];
	};

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

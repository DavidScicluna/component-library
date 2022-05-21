import { FC, useContext, useCallback } from 'react';

import { BadgeIconProps } from './types';

import { BadgeContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import Icon from '../../../../Icon';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { BadgeContext as BadgeContextType } from '../../types';

const BadgeIcon: FC<BadgeIconProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, size = defaultSize } = useContext<BadgeContextType>(BadgeContext);

	const handleReturnSize = useCallback((): string => {
		return theme.fontSizes[size];
	}, [theme, size]);

	return <Icon {...props} colorMode={colorMode} width={handleReturnSize()} height={handleReturnSize()} />;
};

export default BadgeIcon;

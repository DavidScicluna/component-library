import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getFontSizeHeight } from '../../../../../common/utils';
import Icon from '../../../Icon';
import { lineHeight as defaultLineHeight } from '../../common/default/sizes';
import { useBadgeContext } from '../../common/hooks';

import { BadgeIconProps } from './common/types';

const BadgeIcon: FC<BadgeIconProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, size } = useBadgeContext();

	const fontSize = useMemo(() => {
		return getFontSizeHeight({ theme, fontSize: size, lineHeight: defaultLineHeight });
	}, [size]);

	return (
		<Icon
			{...props}
			color={color}
			colorMode={colorMode}
			width={`${fontSize}px`}
			height={`${fontSize}px`}
			fontSize={`${fontSize}px`}
			variant='unstyled'
		/>
	);
};

export default BadgeIcon;

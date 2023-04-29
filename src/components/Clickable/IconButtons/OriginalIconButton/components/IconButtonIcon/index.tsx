import { FC } from 'react';

import Icon from '../../../../../Icon';
import { useIconButtonFontSize } from '../../../common/hooks';
import { useIconButtonContext } from '../../common/hooks';

import { IconButtonIconProps } from './common/types';

const IconButtonIcon: FC<IconButtonIconProps> = (props) => {
	const { color, colorMode, size } = useIconButtonContext();

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...props}
			width={`${fontSize}px`}
			height={`${fontSize}px`}
			fontSize={`${fontSize}px`}
			colorMode={colorMode}
			skeletonColor={color}
		/>
	);
};

export default IconButtonIcon;

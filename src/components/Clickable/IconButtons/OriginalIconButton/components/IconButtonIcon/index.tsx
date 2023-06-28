import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../../DataDisplay/Icon';
import { useIconButtonFontSize } from '../../../common/hooks';
import { useIconButtonContext } from '../../common/hooks';

import { IconButtonIconProps, IconButtonIconRef } from './common/types';

const IconButtonIcon = forwardRef<IconButtonIconRef, IconButtonIconProps>(function IconButtonIcon(
	props,
	ref
): ReactElement {
	const { color, colorMode, size } = useIconButtonContext();

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...props}
			ref={ref}
			color={color}
			colorMode={colorMode}
			width={`${fontSize}px`}
			height={`${fontSize}px`}
			fontSize={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

export default IconButtonIcon;

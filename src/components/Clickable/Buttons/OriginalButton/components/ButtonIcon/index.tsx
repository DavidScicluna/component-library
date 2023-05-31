import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../../DataDisplay/Icon';
import { useButtonFontSize } from '../../../common/hooks';
import { useButtonContext } from '../../common/hooks';

import { ButtonIconProps, ButtonIconRef } from './common/types';

const ButtonIcon = forwardRef<ButtonIconRef, ButtonIconProps>(function ButtonIcon(props, ref): ReactElement {
	const { color, colorMode, size } = useButtonContext();

	const fontSize = useButtonFontSize({ size });

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

export default ButtonIcon;

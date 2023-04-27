import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash-es';

import { useProviderContext, useTheme } from '../../../common/hooks';

import {
	borderRadius as defaultBorderRadius,
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { PushableOverlayProps, PushableOverlayRef } from './common/types';

const PushableOverlay = forwardRef<PushableOverlayRef, PushableOverlayProps>(function PushableOverlay(
	props,
	ref
): ReactElement {
	const theme = useTheme();
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		borderRadius = defaultBorderRadius,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, borderRadius, color, colorMode, variant });

	return (
		<Box
			{...rest}
			ref={ref}
			aria-disabled={isDisabled}
			data-active={dataAttr(isActive)}
			sx={merge(style.pushable, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<Box width='100%' height='100%' position='relative' zIndex={1}>
				{children}
			</Box>
		</Box>
	);
});

export default PushableOverlay;

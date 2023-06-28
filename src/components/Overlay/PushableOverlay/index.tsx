import { forwardRef, ReactElement } from 'react';

import { Center, Grid, GridItem } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';

import {
	borderRadius as defaultBorderRadius,
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled,
	isFixed as defaultIsFixed,
	isPushable as defaultIsPushable,
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
		isFixed = defaultIsFixed,
		isPushable = defaultIsPushable,
		variant = defaultVariant,
		sx,
		_active,
		_disabled,
		...rest
	} = props;

	const style = useStyles({
		theme,
		borderRadius,
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isPushable,
		variant
	});

	return (
		<Grid
			{...rest}
			ref={ref}
			aria-disabled={isPushable && isDisabled}
			data-active={dataAttr(isPushable && !isFixed && isActive)}
			templateColumns='1fr'
			templateRows='1fr'
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={0}
			sx={merge(style.pushable, sx)}
			_active={merge(style.active, _active)}
			_disabled={merge(style.disabled, _disabled)}
		>
			<GridItem as={Center} zIndex={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

export default PushableOverlay;

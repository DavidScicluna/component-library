import { forwardRef, ReactElement, useMemo } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { capitalize, merge } from 'lodash-es';

import { useTheme } from '../../../../../common/hooks';
import IconButton from '../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import { useHorizontalScrollContext } from '../../common/hooks';

import { ArrowProps, ArrowRef } from './common/types';

const Arrow = forwardRef<ArrowRef, ArrowProps>(function Arrow(props, ref): ReactElement {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { colorMode, isDisabled: isDisabledHook } = useHorizontalScrollContext();

	const { direction, isDisabled: isDisabledProp, size = isSm ? 'sm' : 'md', sx, ...rest } = props;

	const isDisabled = useMemo<boolean>((): boolean => {
		return isDisabledProp || isDisabledHook;
	}, [isDisabledProp, isDisabledHook]);

	return (
		<IconButton
			{...rest}
			ref={ref}
			aria-label={`${capitalize(direction)} Arrow Button`}
			color='gray'
			colorMode={colorMode}
			isCompact
			isDisabled={isDisabled}
			size={size}
			variant='icon'
			sx={merge({ height: '100%' }, sx)}
		>
			<IconButtonIcon icon={direction === 'left' ? 'chevron_left' : 'chevron_right'} category='outlined' />
		</IconButton>
	);
});

export default Arrow;

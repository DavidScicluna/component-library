import { forwardRef, ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import Skeleton from '../../Skeleton';

import { category as defaultCategory, variant as defaultVariant } from './common/default/props';
import { useCheckIconFontStatus } from './common/hooks';
import useStyles from './common/styles';
import { IconProps, IconRef } from './common/types';

const Icon = forwardRef<IconRef, IconProps>(function Icon(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const hasIconLoaded = useCheckIconFontStatus();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		category = defaultCategory,
		w,
		width,
		h,
		height,
		maxW,
		maxWidth,
		maxH,
		maxHeight,
		icon,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, variant });

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasIconLoaded[category]} variant='circle'>
			<Center
				{...rest}
				ref={ref}
				as='span'
				className={`material-icons${category === 'outlined' ? '-outlined' : ''} ds-cl-icon`}
				w={w || width || '24px'}
				width={w || width || '24px'}
				h={h || height || '24px'}
				height={h || height || '24px'}
				maxWidth={maxW || maxWidth || w || width || '24px'}
				maxHeight={maxH || maxHeight || h || height || '24px'}
				sx={variant !== 'unstyled' ? merge(style.icon, sx) : sx}
			>
				{icon}
			</Center>
		</Skeleton>
	);
});

export default Icon;

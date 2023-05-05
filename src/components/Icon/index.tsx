import { forwardRef, ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../common/hooks';
import { useProviderContext } from '../Provider/common/hooks';
import Skeleton from '../Skeleton';

import { category as defaultCategory, variant as defaultVariant } from './common/default/props';
import useStyles from './common/styles';
import { IconProps, IconRef } from './common/types';

const Icon = forwardRef<IconRef, IconProps>(function Icon(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode, hasIconLoaded } = useProviderContext();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		category = defaultCategory,
		w = '24px',
		width = '24px',
		h = '24px',
		height = '24px',
		maxW = '24px',
		maxWidth = '24px',
		maxH = '24px',
		maxHeight = '24px',
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
				w={w || width}
				width={w || width}
				h={h || height}
				height={h || height}
				maxWidth={maxW || maxWidth || w || width}
				maxHeight={maxH || maxHeight || h || height}
				whiteSpace='nowrap'
				textOverflow='ellipsis'
				sx={merge(style.icon, sx)}
			>
				{icon}
			</Center>
		</Skeleton>
	);
});

export default Icon;

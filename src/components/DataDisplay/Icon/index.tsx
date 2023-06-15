import { forwardRef, ReactElement } from 'react';

import { Center, useConst } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import Skeleton from '../../Feedback/Skeleton';
import { useProviderContext } from '../../Provider/common/hooks';

import { category as defaultCategory, variant as defaultVariant } from './common/default/props';
import { dimensions as defaultDimensions } from './common/default/sizes';
import useStyles from './common/styles';
import { IconProps, IconRef } from './common/types';

const Icon = forwardRef<IconRef, IconProps>(function Icon(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode, iconFontStatus: hasIconLoaded } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		w,
		width,
		h,
		height,
		maxW,
		maxWidth,
		maxH,
		maxHeight,
		icon,
		category = defaultCategory,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, variant });

	const dimensions = useConst<string>(`${defaultDimensions}px`);

	return (
		<Skeleton
			color={color}
			colorMode={colorMode}
			isLoaded={!children && icon ? hasIconLoaded[category] : true}
			variant='circle'
		>
			<Center
				{...rest}
				ref={ref}
				as='span'
				className='ds-cl-icon'
				w={w || width || dimensions}
				width={w || width || dimensions}
				h={h || height || dimensions}
				height={h || height || dimensions}
				maxWidth={maxW || maxWidth || w || width || dimensions}
				maxHeight={maxH || maxHeight || h || height || dimensions}
				fontFamily={`'${compact([
					'Material Icons',
					category === 'outlined' ? 'Outlined' : null,
					category === 'twoTone' ? 'Two Tone' : null
				]).join(' ')}', sans-serif`}
				lineHeight='normal'
				sx={variant !== 'unstyled' ? merge(style.icon, sx) : sx}
			>
				{children || icon || null}
			</Center>
		</Skeleton>
	);
});

export default Icon;

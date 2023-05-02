import { FC } from 'react';

import { Center, useBoolean } from '@chakra-ui/react';

import { useInterval } from 'usehooks-ts';

import { useProviderContext } from '../../common/hooks';
import Skeleton from '../Skeleton';
import { color as defaultSkeletonColor } from '../Skeleton/common/data/defaultPropValues';

import { category as defaultCategory } from './common/default/props';
import { IconProps } from './common/types';
import { checkFontStatus } from './common/utils';

const Icon: FC<IconProps> = (props) => {
	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		colorMode = defaultColorMode,
		category = defaultCategory,
		w,
		width,
		h,
		height,
		icon,
		skeletonColor = defaultSkeletonColor,
		...rest
	} = props;

	const [hasLoaded, setHasLoaded] = useBoolean(checkFontStatus({ category }));

	const handleCheckFontStatus = (): void => {
		if (checkFontStatus({ category })) {
			setHasLoaded.on();
		} else {
			setHasLoaded.off();
		}
	};

	useInterval(() => handleCheckFontStatus(), !hasLoaded ? 250 : null);

	return (
		<Skeleton color={skeletonColor} colorMode={colorMode} isLoaded={hasLoaded} variant='rectangle'>
			<Center
				{...rest}
				as='span'
				className={`material-icons${category === 'outlined' ? '-outlined' : ''} ds-cl-icon`}
				w={w}
				width={width}
				h={h}
				height={height}
				maxWidth={w || width || '24px'}
				maxHeight={h || height || '24px'}
				whiteSpace='nowrap'
			>
				{icon}
			</Center>
		</Skeleton>
	);
};

export default Icon;

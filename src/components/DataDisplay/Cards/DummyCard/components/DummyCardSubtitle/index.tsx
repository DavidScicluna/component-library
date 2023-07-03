import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import Skeleton from '../../../../../Feedback/Skeleton';
import { useDummyCardContext } from '../../common/hooks';

import { DummyCardSubtitleProps } from './common/types';

const DummyCardSubtitle: FC<DummyCardSubtitleProps> = ({ children, ...rest }) => {
	const { color, colorMode, variant } = useDummyCardContext();

	return (
		<Skeleton
			color={
				variant === 'contained' || variant === 'monochrome' || color === 'black' || color === 'white'
					? 'gray'
					: color
			}
			colorMode={colorMode}
			isLoaded={false}
			variant='text'
		>
			<Text align='left' fontSize='sm' lineHeight='normal' noOfLines={1} {...rest}>
				{children}
			</Text>
		</Skeleton>
	);
};

export default DummyCardSubtitle;

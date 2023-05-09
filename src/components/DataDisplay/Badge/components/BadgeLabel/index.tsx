import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { lineHeight as defaultLineHeight } from '../../common/default/sizes';
import { useBadgeContext } from '../../common/hooks';

import { BadgeLabelProps } from './common/types';

const BadgeLabel: FC<BadgeLabelProps> = (props) => {
	const { size } = useBadgeContext();

	const {
		children,
		fontWeight = 'semibold',
		textTransform = 'capitalize',
		lineHeight = defaultLineHeight,
		letterSpacing = '.6px',
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as='span'
			fontSize={size}
			fontWeight={fontWeight}
			textTransform={textTransform}
			whiteSpace='nowrap'
			textOverflow='ellipses'
			lineHeight={lineHeight}
			letterSpacing={letterSpacing}
		>
			{children}
		</Text>
	);
};

export default BadgeLabel;

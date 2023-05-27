import { FC } from 'react';

import { Text, useConst } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import { errorEmojis, errorTitles } from '../../../../../common/data/strings';
import { useGetColor } from '../../../../../common/hooks';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelTitleProps } from './common/types';

const StateLabelTitle: FC<StateLabelTitleProps> = (props) => {
	const { colorMode } = useStateLabelContext();

	const sampledTitle = useConst<string>(sample(errorTitles) || errorTitles[0]);
	const sampledEmoji = useConst<string>(sample(errorEmojis) || errorEmojis[0]);

	const defaultTitle = useConst<string>(`${sampledTitle}, something went wrong! ${sampledEmoji}`);

	const { children = defaultTitle, ...rest } = props;

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

	return (
		<Text
			align='center'
			color={color}
			fontSize={['xl', '2xl']}
			fontWeight='bold'
			lineHeight='base'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default StateLabelTitle;

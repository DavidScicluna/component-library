import { FC } from 'react';

import { useConst, Text } from '@chakra-ui/react';

import { sample } from 'lodash';

import { errorTitles, errorEmojis } from '../../../../../common/data/strings';
import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelTitleProps } from './types';

const StateLabelTitle: FC<StateLabelTitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode } = useStateLabelContext();

	const sampledTitle = useConst<string>(sample(errorTitles) || errorTitles[0]);
	const sampledEmoji = useConst<string>(sample(errorEmojis) || errorEmojis[0]);

	const defaultTitle = useConst<string>(`${sampledTitle}, something went wrong! ${sampledEmoji}`);

	const { children = defaultTitle, ...rest } = props;

	return (
		<Text
			align='center'
			color={getColor({ theme, colorMode, type: 'text.primary' })}
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
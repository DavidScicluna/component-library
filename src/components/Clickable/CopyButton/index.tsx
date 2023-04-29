/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useCopyToClipboard } from 'usehooks-ts';

import { useProviderContext, useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';

import { CopyButtonProps } from './common/types';

const CopyButton: FC<CopyButtonProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { children, color = defaultColor, colorMode = defaultColorMode, timeout = 'ultra-slow', value } = props;

	const [isCopied, setIsCopied] = useBoolean();

	const [_value, copy] = useCopyToClipboard();

	const handleCopy = (): void => {
		setIsCopied.on();

		copy(value);

		setTimeout(
			() => {
				setIsCopied.off();
			},
			typeof timeout === 'number' ? timeout : convertStringToNumber(theme.transition.duration[timeout], 'ms')
		);
	};

	return <>{children({ color, colorMode, isCopied, onCopy: handleCopy })}</>;
};

export default CopyButton;

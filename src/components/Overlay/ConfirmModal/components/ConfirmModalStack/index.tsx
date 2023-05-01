import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { padding as defaultPadding } from '../../common/default/props';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalStackProps } from './common/types';

const ConfirmModalStack: FC<ConfirmModalStackProps> = (props) => {
	const { spacing: defaultSpacing } = useConfirmModalContext();

	const { children, spacing = defaultSpacing, p = defaultPadding, ...rest } = props;

	return (
		<VStack width='100%' spacing={spacing} p={p} {...rest}>
			{children}
		</VStack>
	);
};

export default ConfirmModalStack;

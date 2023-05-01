import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../common/hooks';
import { useConfirmModalContext } from '../../common/hooks';

import { color as defaultColor, variant as defaultVariant } from './common/default/props';
import useStyles from './common/styles';
import { ConfirmModalIconProps } from './common/types';

const ConfirmModalIcon: FC<ConfirmModalIconProps> = (props) => {
	const theme = useTheme();

	const { colorMode } = useConfirmModalContext();

	const { renderIcon, color = defaultColor, variant = defaultVariant, sx, ...rest } = props;

	const style = useStyles({ theme, color, colorMode, variant });

	return (
		<Center {...rest} sx={merge(style.icon, sx)}>
			{renderIcon({ colorMode })}
		</Center>
	);
};

export default ConfirmModalIcon;

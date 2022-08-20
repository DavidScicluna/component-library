import { FC, useContext } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash';

import { ConfirmModalContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

import { color as defaultColor, variant as defaultVariant } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { ConfirmModalIconProps } from './types';

const ConfirmModalIcon: FC<ConfirmModalIconProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const { renderIcon, color = defaultColor, variant = defaultVariant, sx, ...rest } = props;

	const style = useStyles({ theme, color, colorMode, variant });

	return (
		<Center {...rest} sx={merge(style.icon, sx)}>
			{renderIcon({ colorMode })}
		</Center>
	);
};

export default ConfirmModalIcon;

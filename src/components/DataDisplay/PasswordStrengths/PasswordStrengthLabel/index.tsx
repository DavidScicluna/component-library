import { forwardRef, ReactElement, useMemo, useState } from 'react';

import { HStack, Text } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { useGetColor, useTheme } from '../../../../common/hooks';
import { convertPixelsToREM, convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { useProviderContext } from '../../../Provider/common/hooks';
import { getPasswordStrength, getPasswordStrengthColor } from '../common/utils';
import PasswordStrengthProgress from '../PasswordStrengthProgress';

import { PasswordStrengthLabelProps, PasswordStrengthLabelRef } from './common/types';

const PasswordStrengthLabel = forwardRef<PasswordStrengthLabelRef, PasswordStrengthLabelProps>(
	function PasswordStrengthLabel(props, ref): ReactElement {
		const theme = useTheme();

		const { colorMode: defaultColorMode } = useProviderContext();

		const { colorMode = defaultColorMode, password, size = 'md', spacing = 1, ...rest } = props;

		const [strength, setStrength] = useState(getPasswordStrength(password));

		const color = useGetColor({ color: getPasswordStrengthColor(strength), colorMode, type: 'color' });

		const fontSize = useMemo<string>(
			() =>
				`${convertPixelsToREM(convertREMToPixels(convertStringToNumber(theme.fontSizes[size], 'rem')) - 2)}rem`,
			[size]
		);

		useUpdateEffect(() => setStrength(getPasswordStrength(password)), [password]);

		return (
			<HStack {...rest} ref={ref} alignItems='center' justifyContent='center' spacing={spacing}>
				<Text align='center' color={color} fontSize={fontSize} textTransform='capitalize' whiteSpace='nowrap'>
					{strength}
				</Text>
				<PasswordStrengthProgress
					width='100%'
					height={theme.space[1]}
					colorMode={colorMode}
					password={password}
					strength={strength}
				/>
			</HStack>
		);
	}
);

export default PasswordStrengthLabel;

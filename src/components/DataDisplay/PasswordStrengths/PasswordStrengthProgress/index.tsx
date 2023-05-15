import { FC, useState } from 'react';

import { Progress } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import { useProviderContext } from '../../../Provider/common/hooks';
import { getPasswordStrengthColor } from '../common/utils';

import { PasswordStrengthProgressProps } from './common/types';

const PasswordStrengthProgress: FC<PasswordStrengthProgressProps> = (props) => {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		width = '100%',
		height = theme.space['0.5'],
		colorMode = defaultColorMode,
		password,
		strength,
		...rest
	} = props;

	const [color, setColor] = useState(
		getColor({ theme, colorMode, color: getPasswordStrengthColor(strength), type: 'color' })
	);

	useUpdateEffect(() => {
		setColor(getColor({ theme, colorMode, color: getPasswordStrengthColor(strength), type: 'color' }));
	}, [strength]);

	return (
		<Progress
			{...rest}
			width={width}
			height={height}
			borderRadius='full'
			background={getColor({ theme, colorMode, type: 'divider' })}
			value={
				password.length >= 8
					? strength === 'weak'
						? 25
						: strength === 'average'
						? 50
						: strength === 'strong'
						? 75
						: 100
					: 0
			}
			sx={{
				'transition': 'none',
				'& div': { backgroundImage: 'none', backgroundColor: color },
				'*, *::before, *::after': { transition: 'none' }
			}}
		/>
	);
};

export default PasswordStrengthProgress;

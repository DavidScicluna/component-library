import { FC } from 'react';

import { Progress } from '@chakra-ui/react';

import { useGetColor } from '../../../../common/hooks';
import { useProviderContext } from '../../../Provider/common/hooks';
import { getPasswordStrengthColor } from '../common/utils';

import { PasswordStrengthProgressProps } from './common/types';

const PasswordStrengthProgress: FC<PasswordStrengthProgressProps> = (props) => {
	const { colorMode: defaultColorMode } = useProviderContext();

	const { colorMode = defaultColorMode, password, strength, ...rest } = props;

	const color = useGetColor({ color: getPasswordStrengthColor(strength), colorMode, type: 'color' });
	const background = useGetColor({ color: 'gray', colorMode, type: 'divider' });

	return (
		<Progress
			{...rest}
			borderRadius='full'
			background={background}
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
				'& *, *::before, *::after': { transition: 'none' }
			}}
		/>
	);
};

export default PasswordStrengthProgress;

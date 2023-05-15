import { FC, useState } from 'react';

import { HStack, Text, VStack } from '@chakra-ui/react';

import { capitalize } from 'lodash-es';
import { useUpdateEffect } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import Popper from '../../../Overlay/Popper';
import { useProviderContext } from '../../../Provider/common/hooks';
import Icon from '../../Icon';
import types from '../common/data/types';
import { StrengthType } from '../common/types';
import {
	checkPasswordHasLowercase,
	checkPasswordHasNumbers,
	checkPasswordHasSpecial,
	checkPasswordHasUppercase,
	getPasswordStrength
} from '../common/utils';
import PasswordStrengthProgress from '../PasswordStrengthProgress';

import { PasswordStrengthTooltipProps } from './common/types';

const PasswordStrengthTooltip: FC<PasswordStrengthTooltipProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { color = defaultColor, colorMode = defaultColorMode, password, ...rest } = props;

	const [strength, setStrength] = useState(getPasswordStrength(password));

	const handleCheckHasType = (type: StrengthType): boolean => {
		switch (type) {
			case 'lowercase':
				return checkPasswordHasLowercase(password);
			case 'uppercase':
				return checkPasswordHasUppercase(password);
			case 'symbol':
				return checkPasswordHasSpecial(password);
			case 'number':
				return checkPasswordHasNumbers(password);
		}
	};

	useUpdateEffect(() => setStrength(getPasswordStrength(password)), [password]);

	return (
		<Popper {...rest} color={color} colorMode={colorMode}>
			<VStack width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={2} p={2}>
				<Text
					align='left'
					color={getColor({ theme, colorMode, type: 'text.primary' })}
					fontSize='md'
					fontWeight='semibold'
				>
					{password.length >= 8
						? `${capitalize(strength)} Password`
						: 'Password must be have atleast 8 characters'}
				</Text>

				<PasswordStrengthProgress
					width='100%'
					height={theme.space[2]}
					colorMode={colorMode}
					password={password}
					strength={strength}
				/>

				<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={1}>
					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.secondary' })}
						fontSize='sm'
						fontWeight='normal'
					>
						It would be best to have:
					</Text>

					{types.map((type) => {
						const hasType = password.length >= 8 && handleCheckHasType(type);
						return (
							<HStack key={type} width='100%' alignItems='center' justifyContent='flex-start' spacing={1}>
								<Icon
									color={hasType ? color : 'gray'}
									colorMode={colorMode}
									width={theme.fontSizes.xl}
									height={theme.fontSizes.xl}
									fontSize={theme.fontSizes.xl}
									icon={hasType ? 'check_circle' : 'circle'}
									category={hasType ? 'filled' : 'outlined'}
									variant='transparent'
								/>
								<Text
									align='left'
									color={getColor({ theme, colorMode, type: 'text.secondary' })}
									fontSize='sm'
									fontWeight='normal'
									textTransform='capitalize'
									textDecoration={hasType ? 'line-through' : 'none'}
								>
									{`Includes ${
										type === 'lowercase' || type === 'uppercase'
											? `${type} Letter`
											: type === 'symbol'
											? 'Special Symbol'
											: type
									}`}
								</Text>
							</HStack>
						);
					})}
				</VStack>
			</VStack>
		</Popper>
	);
};

export default PasswordStrengthTooltip;

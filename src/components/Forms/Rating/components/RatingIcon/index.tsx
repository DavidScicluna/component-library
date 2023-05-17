import { FC, useMemo } from 'react';

import { Center } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { useTheme } from '../../../../../common/hooks';
import { getFontSizeHeight } from '../../../../../common/utils';
import Icon from '../../../../DataDisplay/Icon';
import { useProviderContext } from '../../../../Provider/common/hooks';
import { useFormControlContext } from '../../../FormControl/common/hooks';

import useStyles from './common/styles';
import { RatingIconProps } from './common/types';

const RatingIcon: FC<RatingIconProps> = (props) => {
	const theme = useTheme();

	const { color: appColor, colorMode: appColorMode } = useProviderContext();

	const {
		color: defaultColor = appColor,
		colorMode: defaultColorMode = appColorMode,
		isDisabled: defaultIsDisabled,
		isError: defaultIsError,
		isReadOnly: defaultIsReadOnly,
		isSuccess: defaultIsSuccess,
		isWarning: defaultIsWarning,
		size: defaultSize
	} = useFormControlContext();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		icons,
		isActive = false,
		isHovering = false,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isReadOnly = defaultIsReadOnly,
		size = defaultSize,
		...rest
	} = props;
	const { default: icon = 'star_outline', active = 'star', hover = 'star' } = icons || {};

	const fontSize = useMemo((): string => {
		return `${getFontSizeHeight({ theme, fontSize: size, lineHeight: 'shorter' })}px`;
	}, [theme, size]);

	const style = useStyles({ theme });

	return (
		<Center
			{...rest}
			data-active={dataAttr(isActive)}
			aria-disabled={isDisabled}
			aria-invalid={isError}
			aria-readonly={isReadOnly}
			sx={style.rating}
			_active={style.active}
			_disabled={style.disabled}
			_readOnly={style.readOnly}
		>
			<Icon
				width={fontSize}
				height={fontSize}
				fontSize={fontSize}
				color={
					isError
						? 'red'
						: isSuccess
						? 'green'
						: isWarning
						? 'yellow'
						: isActive || isHovering
						? color
						: 'gray'
				}
				colorMode={colorMode}
				icon={isActive ? active : isHovering ? hover : icon}
				category='outlined'
				variant='transparent'
			/>
		</Center>
	);
};

export default RatingIcon;

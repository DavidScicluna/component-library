import { FC } from 'react';

import { Link as CUILink } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';

import useStyles from './common/styles';
import { LinkMouseEvent, LinkProps } from './common/types';

const Link: FC<LinkProps> = (props) => {
	const theme = useTheme();

	const { children, isDisabled = false, onClick, sx, ...rest } = props;

	const style = useStyles({ theme });

	const handleClick = (event: LinkMouseEvent): void => {
		if (isDisabled) {
			event.preventDefault();
		}

		if (onClick) {
			onClick;
		}
	};

	return (
		<CUILink
			{...rest}
			aria-disabled={isDisabled}
			onClick={handleClick}
			sx={merge(style.link, sx)}
			_disabled={style.disabled}
		>
			{children}
		</CUILink>
	);
};

export default Link;

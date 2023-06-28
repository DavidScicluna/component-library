import { forwardRef, ReactElement, useMemo } from 'react';

import { Box, Center } from '@chakra-ui/react';

import { useGetColor } from '../../../common/hooks';
import { Style } from '../../../common/types';
import { useProviderContext } from '../../Provider/common/hooks';

import { DividerProps, DividerRef } from './common/types';

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		placement = 'center',
		size = 2,
		spacing = 2,
		orientation = 'horizontal',
		variant = 'solid',
		...rest
	} = props;

	const borderColor = useGetColor({ color, colorMode, type: 'divider' });

	const styles = useMemo<Style>(
		() => ({
			flex: '1 1 0%',

			borderTopWidth: orientation === 'horizontal' ? `${size}px` : '0px',
			borderTopStyle: variant,
			borderTopColor: borderColor
		}),
		[size]
	);

	return (
		<Box
			{...rest}
			ref={ref}
			width={orientation === 'horizontal' ? '100%' : `${size}px`}
			height={orientation === 'vertical' ? '100%' : `${size}px`}
			display='flex'
			alignItems='center'
			justifyContent={placement === 'left' ? 'flex-start' : placement === 'right' ? 'flex-end' : 'center'}
			sx={
				orientation === 'vertical'
					? {
							borderLeftWidth: `${size}px`,
							borderLeftStyle: variant,
							borderLeftColor: borderColor
					  }
					: undefined
			}
			_before={
				orientation === 'horizontal' && (placement === 'right' || placement === 'center')
					? { ...styles, content: '""', mr: spacing }
					: undefined
			}
			_after={
				orientation === 'horizontal' && (placement === 'left' || placement === 'center')
					? { ...styles, content: '""', ml: spacing }
					: undefined
			}
		>
			{orientation === 'horizontal' && children ? <Center>{children}</Center> : null}
		</Box>
	);
});

export default Divider;

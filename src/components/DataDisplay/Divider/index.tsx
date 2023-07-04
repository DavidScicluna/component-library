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
		borderColor,
		placement = 'center',
		size = 2,
		spacing = 2,
		orientation = 'horizontal',
		variant = 'solid',
		...rest
	} = props;

	const defaultBorderColor = useGetColor({ color, colorMode, type: 'divider' });

	const styles = useMemo<Style>(() => {
		return {
			flex: '1 1 0%',

			borderWidth: `${[orientation === 'horizontal' ? size : 0, 0, 0, 0]
				.map((w) => `${w}px`)
				.join(' ')} !important`,
			borderTopStyle: variant,
			borderTopColor: borderColor || defaultBorderColor
		};
	}, [borderColor, defaultBorderColor, size, orientation, variant]);

	return (
		<Box
			{...rest}
			ref={ref}
			width={orientation === 'horizontal' ? '100%' : `${size}px`}
			height={orientation === 'vertical' ? 'auto' : `${size}px`}
			display='flex'
			alignItems='center'
			justifyContent={placement === 'left' ? 'flex-start' : placement === 'right' ? 'flex-end' : 'center'}
			sx={
				orientation === 'vertical'
					? {
							borderWidth: `${[0, 0, 0, size].map((w) => `${w}px`).join(' ')} !important`,
							borderLeftStyle: variant,
							borderLeftColor: borderColor || defaultBorderColor
					  }
					: { border: 'none !important' }
			}
			_before={
				orientation === 'horizontal' && (placement === 'right' || placement === 'center')
					? { ...styles, content: '""', mr: children ? spacing : 0 }
					: undefined
			}
			_after={
				orientation === 'horizontal' && (placement === 'left' || placement === 'center')
					? { ...styles, content: '""', ml: children ? spacing : 0 }
					: undefined
			}
		>
			{orientation === 'horizontal' && children ? <Center>{children}</Center> : null}
		</Box>
	);
});

export default Divider;

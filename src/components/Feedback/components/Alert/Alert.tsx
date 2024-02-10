import { createContext, forwardRef, useCallback, useMemo } from 'react';

import { compact, round } from 'lodash-es';
import { useCountdown, useEffectOnce, useUpdateEffect } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useTheme } from '@common/hooks';
import type { ThemeAppColor, ThemeAppColorMode, ThemeColor } from '@common/types';

import type { GridProps } from '@components/Layout';
import { Grid, GridItem, HStack, VStack } from '@components/Layout';

import { Progress } from '../Progress';

import {
	__DEFAULT_ALERT_AS__,
	__DEFAULT_ALERT_DURATION__,
	__DEFAULT_ALERT_STATUS__,
	__DEFAULT_ALERT_VARIANT__
} from './common/constants';
import { useAlertClasses, useAlertResponsiveValues } from './common/hooks';
import { __KEYS_ALERT_CLASS__ } from './common/keys';
import type {
	AlertContext as AlertContextType,
	AlertDefaultElement,
	AlertElement,
	AlertProps,
	AlertRef
} from './common/types';
import { getStatusColor } from './common/utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AlertContext = createContext<AlertContextType<AlertDefaultElement>>({ status: __DEFAULT_ALERT_STATUS__ });

const Alert = forwardRef(function Alert<Element extends AlertElement>(
	props: AlertProps<Element>,
	ref: AlertRef<Element>
): JSX.Element {
	const theme = useTheme();

	const {
		as = __DEFAULT_ALERT_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		renderActions,
		renderClose,
		renderLabel,
		renderDescription,
		renderIcon,
		onClose,
		duration: durationProp = __DEFAULT_ALERT_DURATION__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		status: statusProp = __DEFAULT_ALERT_STATUS__,
		variant: variantProp = __DEFAULT_ALERT_VARIANT__,
		...rest
	} = props;

	const { duration, spacing, status, variant } = useAlertResponsiveValues<Element>({
		duration: durationProp,
		spacing: spacingProp,
		status: statusProp,
		variant: variantProp
	});

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const [count, { startCountdown, resetCountdown }] = useCountdown({
		countStart: duration ? duration : 0,
		intervalMs: 1000
	});

	const classes = useAlertClasses<Element>({ color, colorMode, status });

	const handleOpen = (): void => {
		resetCountdown();

		if (duration) {
			startCountdown();
		}
	};

	const handleClose = useCallback((): void => {
		resetCountdown();

		if (onClose) {
			onClose();
		}
	}, [resetCountdown, onClose]);

	const handleCount = (): void => {
		if (onClose && count === 0) {
			handleClose();
		}
	};

	useUpdateEffect(() => handleCount(), [count]);

	useEffectOnce(() => {
		handleOpen();

		return () => resetCountdown();
	});

	return (
		<AlertContext.Provider value={{ color, colorMode, status, variant }}>
			<Grid
				{...(rest as GridProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_ALERT_CLASS__, classes, { [className]: !!className })}
				templateColumns={compact(['1fr', renderClose && onClose ? 'auto' : null]).join(' ')}
				templateRows={1}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={spacing}
				p={spacing}
			>
				<GridItem>
					<Grid
						templateColumns={compact(['auto', renderIcon ? 'auto' : null, '1fr']).join(' ')}
						templateRows={1}
						alignItems='stretch'
						alignContent='stretch'
						justifyItems='stretch'
						justifyContent='stretch'
						spacing={spacing}
					>
						<GridItem>
							<Progress
								w={theme.spacing['0.5']}
								h='100%'
								color={
									(statusColor !== 'gray' &&
									statusColor !== 'transparent' &&
									statusColor !== 'black' &&
									statusColor !== 'white'
										? statusColor
										: color) as ThemeAppColor
								}
								colorMode={colorMode as ThemeAppColorMode}
								radius='full'
								value={duration ? round((count / duration) * 100) : 100}
								variant='vertical'
							/>
						</GridItem>

						{renderIcon ? (
							<GridItem
								alignSelf={variant === 'horizontal' ? 'stretch' : 'center'}
								justifySelf={variant === 'horizontal' ? 'stretch' : 'center'}
							>
								{renderIcon()}
							</GridItem>
						) : null}

						<GridItem>
							{variant === 'horizontal' ? (
								<HStack w='100%' h='100%' spacing={spacing}>
									{renderLabel || renderDescription ? (
										<HStack alignItems='center' justifyContent='flex-start' spacing={spacing}>
											{renderLabel ? renderLabel() : null}
											{renderDescription ? renderDescription() : null}
										</HStack>
									) : null}

									{renderActions ? renderActions({ color, colorMode, spacing }) : null}
								</HStack>
							) : (
								<VStack w='100%' h='100%' spacing={spacing}>
									{renderLabel || renderDescription ? (
										<VStack alignItems='flex-start' justifyContent='center' spacing={0}>
											{renderLabel ? renderLabel() : null}
											{renderDescription ? renderDescription() : null}
										</VStack>
									) : null}

									{renderActions ? renderActions({ color, colorMode, spacing }) : null}
								</VStack>
							)}
						</GridItem>
					</Grid>
				</GridItem>

				{renderClose && onClose ? (
					<GridItem
						alignSelf={variant === 'horizontal' ? 'center' : 'stretch'}
						justifySelf={variant === 'horizontal' ? 'center' : 'stretch'}
					>
						{renderClose({
							color:
								statusColor !== 'gray' &&
								statusColor !== 'transparent' &&
								statusColor !== 'black' &&
								statusColor !== 'white'
									? statusColor
									: color,
							colorMode,
							isCompact: true,
							onClick: handleClose,
							size: variant === 'horizontal' ? 'sm' : 'md',
							variant: 'icon'
						})}
					</GridItem>
				) : null}
			</Grid>
		</AlertContext.Provider>
	);
});

// Alert.displayName = 'Alert';

export default Alert;

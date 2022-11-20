import { FC, useContext, useState } from 'react';

import { useMediaQuery, useBoolean, Stack, HStack, Center } from '@chakra-ui/react';

import { useUpdateEffect } from 'usehooks-ts';

import { StepperContext } from '../../.';
import { useDebounce, useTheme } from '../../../../../common/hooks';
import Divider from '../../../../Divider';
import HorizontalScroll from '../../../../HorizontalScroll';
import { activeStep as defaultActiveStep, colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../types';
import { convertStringToNumber } from '../../../../../common/utils';

import { isDisabled as defaultIsDisabled } from './common/data/defaultPropValues';
import Cancel from './components/Cancel';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Next from './components/Next';
import Step from './components/Step';
import { getStatus as getStepStatus } from './components/Step/common/utils';
import { Status } from './components/Step/types';
import { StepListProps, ScrollContext } from './types';

export const width = '112px';
export const height = '112px';

const StepList: FC<StepListProps> = ({ children = [], isDisabled = defaultIsDisabled }) => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	const {
		activeStep = defaultActiveStep,
		colorMode = defaultColorMode,
		onChange,
		onSubmit
	} = useContext<StepperContextType>(StepperContext);

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	const [hasErrors, setHasErrors] = useBoolean();
	const hasErrorsDebounced = useDebounce(hasErrors);

	const [hasWarnings, setHasWarnings] = useBoolean();
	const hasWarningsDebounced = useDebounce(hasWarnings);

	const [hasIdle, setHasIdle] = useBoolean();
	const hasIdleDebounced = useDebounce(hasIdle);

	const handleCheckStatuses = (): void => {
		setHasErrors[children.some((step) => step.status === 'error') ? 'on' : 'off']();
		setHasWarnings[children.some((step) => step.status === 'warning') ? 'on' : 'off']();
		setHasIdle[children.some((step) => step.status === 'idle') ? 'on' : 'off']();
	};

	const handleScrollToStep = (index: number): void => {
		const scrollElement = scrollDebounced?.getItemElementByIndex(index);

		if (scrollElement) {
			scrollDebounced?.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
		}
	};

	const handleNext = (): void => {
		if (activeStep === children.length - 1) {
			if (hasErrorsDebounced || hasWarningsDebounced || hasIdleDebounced) {
				const status: Status = hasErrorsDebounced ? 'error' : hasWarningsDebounced ? 'warning' : 'idle';

				const index: number = children.findIndex((step) => step.status === status);

				onChange({ index });

				handleScrollToStep(index);
			} else {
				onSubmit();
			}
		} else {
			const index = activeStep + 1;

			onChange({ index });

			handleScrollToStep(index);
		}
	};

	const handleStepClick = (index: number): void => {
		if (activeStep !== index) {
			onChange({ index });

			handleScrollToStep(index);
		}
	};

	useUpdateEffect(() => handleCheckStatuses(), [children]);

	return (
		<Stack width='100%' direction={isMd ? 'row' : 'column'} spacing={0}>
			{isMd ? (
				<>
					<Cancel isDisabled={isDisabled} />
					<Center width={`calc(100% - ${convertStringToNumber(width, 'px') * 2}px)`}>
						<HorizontalScroll
							colorMode={colorMode}
							LeftArrow={<HorizontalScrollLeftArrow scroll={scrollDebounced} isDisabled={isDisabled} />}
							RightArrow={<HorizontalScrollRightArrow scroll={scrollDebounced} isDisabled={isDisabled} />}
							renderDivider={() => (
								<Divider colorMode={colorMode} orientation='vertical' height={height} />
							)}
							isDisabled={isDisabled}
							onInit={(scroll) => setScroll(scroll)}
							onUpdate={(scroll) => setScroll(scroll)}
						>
							{children.map((step, index) => (
								<Step
									{...step}
									key={index}
									index={index}
									status={getStepStatus({ activeStep, index, status: step.status })}
									isDisabled={isDisabled || step.isDisabled}
									onClick={() => handleStepClick(index)}
								/>
							))}
						</HorizontalScroll>
					</Center>
					<Next
						isLast={activeStep === children.length - 1}
						hasIdle={hasIdle}
						hasErrors={hasErrors}
						hasWarnings={hasWarnings}
						isDisabled={isDisabled}
						onNext={handleNext}
					/>
				</>
			) : (
				<>
					<HStack
						width='100%'
						alignItems='stretch'
						justifyContent='stretch'
						divider={<Divider colorMode={colorMode} orientation='vertical' />}
						spacing={0}
					>
						<Cancel isDisabled={isDisabled} />
						<Next
							isLast={activeStep === children.length - 1}
							hasErrors={hasErrors}
							hasWarnings={hasWarnings}
							hasIdle={hasIdle}
							isDisabled={isDisabled}
							onNext={handleNext}
						/>
					</HStack>
					<Center width='100%'>
						<HorizontalScroll
							colorMode={colorMode}
							renderDivider={() => (
								<Divider colorMode={colorMode} orientation='vertical' height={height} />
							)}
							LeftArrow={<HorizontalScrollLeftArrow scroll={scrollDebounced} isDisabled={isDisabled} />}
							RightArrow={<HorizontalScrollRightArrow scroll={scrollDebounced} isDisabled={isDisabled} />}
							isDisabled={isDisabled}
							onInit={(scroll) => setScroll(scroll)}
							onUpdate={(scroll) => setScroll(scroll)}
						>
							{children.map((step, index) => (
								<Step
									{...step}
									key={index}
									index={index}
									status={getStepStatus({ activeStep, index, status: step.status })}
									isDisabled={isDisabled || step.isDisabled}
									onClick={() => handleStepClick(index)}
								/>
							))}
						</HorizontalScroll>
					</Center>
				</>
			)}
		</Stack>
	);
};

export default StepList;

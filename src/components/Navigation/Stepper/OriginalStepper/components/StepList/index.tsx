import { FC } from 'react';

import { Center, Grid, GridItem } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { useSetHorizontalScrollAPIContext } from '../../../../../DataDisplay/HorizontalScroll/common/hooks';
import LeftOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/LeftOverlayArrow';
import RightOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/RightOverlayArrow';
import Divider from '../../../../../DataDisplay/Divider';
import { useStepperContext } from '../../common/hooks';

import { StepListProps } from './common/types';
import Step from './components/Step';
import { getStepStatus } from './components/Step/common/utils';

const StepList: FC<StepListProps> = (props) => {
	const { activeStep, color, colorMode, isDivisible, isFitted, onChange } = useStepperContext();

	const { steps = [], renderLeft, renderRight, ...rest } = props;

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

	const handleScrollToStep = (index: number): void => {
		if (scroll) {
			const scrollElement = scroll.getItemByIndex(index);

			if (scrollElement) {
				scroll.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
			}
		}
	};

	const handleStepClick = (index: number): void => {
		if (activeStep !== index) {
			if (onChange && typeof onChange === 'function') {
				onChange({ index });
			}

			handleScrollToStep(index);
		}
	};

	return (
		<Grid
			{...rest}
			width='100%'
			height='100%'
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows='1fr'
			autoFlow='row'
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={0}
			sx={{
				'& .react-horizontal-scrolling-menu--inner-wrapper': { width: '100%' },
				'& .react-horizontal-scrolling-menu--item': isFitted ? { width: '100%' } : {}
			}}
		>
			{renderLeft ? (
				<GridItem>
					<Center width='100%' height='100%'>
						{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
					</Center>
				</GridItem>
			) : null}

			<GridItem ref={childrenRef}>
				<HorizontalScroll
					width='100%'
					height='100%'
					colorMode={colorMode}
					LeftArrow={LeftOverlayArrow}
					RightArrow={RightOverlayArrow}
					onInit={setScroll}
					onUpdate={setScroll}
					renderDivider={
						isDivisible
							? () => (
									<Center height='100%' alignItems='stretch' justifyContent='stretch'>
										<Divider colorMode={colorMode} orientation='vertical' />
									</Center>
							  )
							: undefined
					}
				>
					{steps.map((step, index) => (
						<Step
							{...step}
							key={`ds-cl-stepper-step-${index}`}
							panelId={`ds-cl-stepper-step-${index}`}
							index={index}
							status={getStepStatus({ activeStep, index, status: step.status })}
							isSelected={step.isSelected || index === activeStep}
							onSelect={handleStepClick}
						/>
					))}
				</HorizontalScroll>
			</GridItem>

			{renderRight ? (
				<GridItem>
					<Center width='100%' height='100%'>
						{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
					</Center>
				</GridItem>
			) : null}
		</Grid>
	);
};

export default StepList;

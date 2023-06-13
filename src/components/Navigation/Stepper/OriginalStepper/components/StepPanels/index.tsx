import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import StepPanelFade from '../../../components/StepPanelFade';
import { useStepperContext } from '../../common/hooks';

import { StepPanelsProps } from './common/types';

const StepPanels: FC<StepPanelsProps> = ({ children, ...rest }) => {
	const { activeStep } = useStepperContext();

	return (
		<AnimatePresence>
			<Grid
				{...rest}
				width='100%'
				height='100%'
				templateColumns='1fr'
				templateRows='1fr'
				alignItems='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={0}
			>
				{children && Array.isArray(children)
					? children.map((panel, index) => (
							<GridItem
								as={StepPanelFade}
								key={`ds-cl-stepper-panels-${index}-panel`}
								tabIndex={index}
								rowStart={1}
								colStart={1}
								in={activeStep === index}
								p={0}
							>
								{panel}
							</GridItem>
					  ))
					: null}
			</Grid>
		</AnimatePresence>
	);
};

export default StepPanels;

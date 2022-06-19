import { ReactElement, createContext, forwardRef } from 'react';

import { ColorMode, useColorMode, VStack } from '@chakra-ui/react';

import {
	accordions as defaultAccordions,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType, AccordionsRef, AccordionsProps } from './types';

export const AccordionsContext = createContext<AccordionsContextType>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFullWidth: defaultIsFullWidth
});

const Accordions = forwardRef<AccordionsRef, AccordionsProps>(function Accordions(props, ref): ReactElement {
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode: colorModeProp,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<AccordionsContext.Provider value={{ accordions, color, colorMode, isDisabled, isFullWidth, spacing }}>
			<VStack ref={ref} width='100%' spacing={spacing} {...rest}>
				{children}

				{/* <QuickToggles
				accordions={accordions.map((accordion) => {
					return { id: accordion.id, title: accordion.title };
				})}
				openedPanels={openedAccordions.length}
				color={color}
				colorMode={colorMode}
				isLoading={isLoading}
				isDisabled={isError}
				onToggleAccordion={(id: AccordionType<D>['id']) => setOpenedAccordions(uniq([...openedAccordions, id]))}
				onToggleAllAccordions={handleToggleAllAccordions}
			/>

			<VStack width='100%' spacing={2}>
				{accordions.map((accordion) => (
					<Accordion
						{...accordion}
						key={accordion.id}
						color={color}
						colorMode={colorMode}
						isOpen={openedAccordions.some((openedAccordion) => openedAccordion === accordion.id)}
						isDisabled={isError || accordion.isDisabled}
						isLoading={isLoading}
						onToggle={() => handleToggleAccordion(accordion.id)}
					>
						{renderAccordion({
							...accordion,
							isOpen: openedAccordions.some((openedAccordion) => openedAccordion === accordion.id)
						})}
					</Accordion>
				))}
			</VStack> */}
			</VStack>
		</AccordionsContext.Provider>
	);
});

export default Accordions;

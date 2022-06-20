import { FC, createContext, useContext } from 'react';

import { useConst, Box, VisuallyHidden, Center, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { Transition } from 'framer-motion';
import { merge } from 'lodash';
import { useInView } from 'react-cool-inview';

import {
	isActive as defaultIsActive,
	isDivisible as defaultIsDivisible,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import AccordionDivider from './components/AccordionDivider';
import { AccordionContext as AccordionContextType, AccordionProps } from './types';

import { AccordionsContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import Collapse from '../../../../Transitions/Collapse';
import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	opened as defaultOpened,
	spacing as defaultSpacing,
	setOpened as defaultSetOpened
} from '../../common/data/defaultPropValues';
import { toggleAccordion } from '../../common/utils';
import { AccordionsContext as AccordionsContextType } from '../../types';

export const AccordionContext = createContext<AccordionContextType>({
	isDisabled: defaultIsDisabled,
	isOpen: defaultIsOpen
});

const Accordion: FC<AccordionProps> = (props) => {
	const theme = useTheme();

	const { observe: ref, inView } = useInView<HTMLDivElement>({
		threshold: [0.2, 0.4, 0.6, 0.8, 1],
		unobserveOnEnter: true
	});

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled: isDisabledHook = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		opened = defaultOpened,
		setOpened = defaultSetOpened
	} = useContext<AccordionsContextType>(AccordionsContext);

	const {
		id,
		header,
		body,
		footer,
		isActive = defaultIsActive,
		isDisabled = isDisabledHook,
		isDivisible = defaultIsDivisible,
		isLight = defaultIsLight,
		spacing = defaultSpacing,
		sx,
		...rest
	} = props;

	const isOpen = !isDisabled && opened.some((accordion) => accordion === id);

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLight, isOpen });

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slower' }));
	const easing = useConst<number[]>(getTransitionEasings({ theme }));

	const config = useConst<Transition>({ duration, easing });

	return (
		<AccordionContext.Provider value={{ isDisabled, isLight, isOpen }}>
			<Box
				{...rest}
				ref={ref}
				as='div'
				aria-disabled={isDisabled}
				tabIndex={0}
				data-active={dataAttr(isActive)}
				onClick={() => setOpened(toggleAccordion({ id, opened }))}
				sx={merge(style.accordion, sx)}
				_disabled={style.disabled.accordion}
				_active={style.active}
			>
				<VisuallyHidden sx={{ top: 0 }}>
					<span id={id.toLowerCase()} />
				</VisuallyHidden>

				<VStack width='100%' position='relative' zIndex={1} spacing={spacing}>
					<Center width='100%'>{header}</Center>

					<Collapse
						in={isOpen && inView}
						unmountOnExit
						style={{ width: '100%' }}
						transition={{ enter: { ...config }, exit: { ...config } }}
					>
						<VStack width='100%' spacing={spacing}>
							{isDivisible && <AccordionDivider />}

							<VStack
								width='100%'
								divider={isDivisible && !isDisabled ? <AccordionDivider /> : undefined}
								spacing={spacing}
							>
								{body}
								{footer}
							</VStack>
						</VStack>
					</Collapse>
				</VStack>
			</Box>
		</AccordionContext.Provider>
	);
};

export default Accordion;

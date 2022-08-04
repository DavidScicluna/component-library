import { createContext, useContext, ReactElement } from 'react';

import { useConst, Box, VisuallyHidden, Center, VStack } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { Transition } from 'framer-motion';
import { merge } from 'lodash';
import { useInView } from 'react-cool-inview';

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
	spacing as defaultSpacing,
	isFullWidth as defaultIsFullWidth
} from '../../../common/data/defaultPropValues';
import {
	isDisabled as defaultIsDisabled,
	opened as defaultOpened,
	setOpened as defaultSetOpened
} from '../../common/data/defaultPropValues';
import { toggleAccordion } from '../../common/utils';
import { AccordionsContext as AccordionsContextType } from '../../types';

import { AccordionContext as AccordionContextType, AccordionProps } from './types';
import AccordionDivider from './components/AccordionDivider';
import useStyles from './common/styles';
import {
	isActive as defaultIsActive,
	isDivisible as defaultIsDivisible,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from './common/data/defaultPropValues';

export const AccordionContext = createContext<AccordionContextType<unknown>>({
	isDisabled: defaultIsDisabled,
	isOpen: defaultIsOpen
});

const Accordion = <D,>(props: AccordionProps<D>): ReactElement => {
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
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

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

	const isOpen = !isDisabled && opened.some((accordion: unknown) => accordion === id);

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLight, isOpen });

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
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

				<VStack width='100%' position='relative' zIndex={1} spacing={0}>
					<Center width='100%'>{header}</Center>

					<Collapse
						in={isOpen && inView}
						unmountOnExit
						style={{ width: '100%' }}
						transition={{ enter: { ...config }, exit: { ...config } }}
					>
						<VStack width='100%' divider={isDivisible ? <AccordionDivider /> : undefined} spacing={spacing}>
							<VisuallyHidden>
								<span />
							</VisuallyHidden>

							{body}
							{footer}
						</VStack>
					</Collapse>
				</VStack>
			</Box>
		</AccordionContext.Provider>
	);
};

export default Accordion;

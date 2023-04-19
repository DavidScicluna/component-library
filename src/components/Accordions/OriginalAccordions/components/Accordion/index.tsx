import { createContext, ReactElement } from 'react';
import { useInView } from 'react-cool-inview';

import { Box, Center, useBoolean, useConst, VisuallyHidden, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash';

import { useTheme } from '../../../../../common/hooks';
import Collapse from '../../../../Transitions/Collapse';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration} from '../../../../Transitions/common/utils';
import { spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import { useAccordionsContext } from '../../common/hooks';
import { toggleAccordion } from '../../common/utils';

import {
	isActive as defaultIsActive,
	isDivisible as defaultIsDivisible,
	isFixed as defaultIsFixed,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import AccordionDivider from './components/AccordionDivider';
import { AccordionContext as AccordionContextType, AccordionProps } from './types';

export const AccordionContext = createContext<AccordionContextType<unknown>>({
	isDisabled: defaultIsDisabled,
	isLight: defaultIsLight,
	isOpen: defaultIsOpen
});

const Accordion = <D,>(props: AccordionProps<D>): ReactElement => {
	const theme = useTheme();

	const { observe: ref, inView } = useInView<HTMLDivElement>({
		threshold: [0.2, 0.4, 0.6, 0.8, 1],
		unobserveOnEnter: true
	});

	const {
		color,
		colorMode,
		isDisabled: isDisabledHook,
		isFullWidth,
		opened,
		onSetOpened
	} = useAccordionsContext<D>();

	const {
		id,
		header,
		body,
		footer,
		isActive = defaultIsActive,
		isDisabled = isDisabledHook,
		isDivisible = defaultIsDivisible,
		isFixed = defaultIsFixed,
		isLight = defaultIsLight,
		spacing = defaultSpacing,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const isOpen = !isDisabled && opened.some((accordion: unknown) => accordion === id);

	const style = useStyles({ theme, color, colorMode, isFullWidth, isFixed: isFixed || isHovering, isLight, isOpen });

	const duration = useConst(getTransitionDuration({ theme, duration: 'slower' }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration });

	return (
		<AccordionContext.Provider value={{ isDisabled, isLight, isOpen }}>
			<Box
				{...rest}
				ref={ref}
				as='div'
				aria-disabled={isDisabled}
				tabIndex={0}
				data-active={dataAttr(isActive)}
				onClick={
					!isHovering && typeof onSetOpened === 'function'
						? () => onSetOpened(toggleAccordion({ id, opened }))
						: undefined
				}
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
						style={{ width: '100%' }}
						transition={{ enter: { ...config }, exit: { ...config } }}
					>
						<VStack
							width='100%'
							divider={isDivisible ? <AccordionDivider /> : undefined}
							onMouseEnter={() => setIsHovering.on()}
							onMouseLeave={() => setIsHovering.off()}
							spacing={spacing}
						>
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

import { FC, createContext, useContext } from 'react';

import { useBoolean, Center, VStack, VisuallyHidden, Collapse } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash';
import { useInView } from 'react-cool-inview';

import {
	isOpen as defaultIsOpen,
	isActive as defaultIsActive,
	isDivisible as defaultIsDivisible,
	isDisabled as defaultAccordionIsDisabled
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import AccordionDivider from './components/AccordionDivider';
import { AccordionContext as AccordionContextType, AccordionProps } from './types';

import { AccordionsContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultAccordionsIsDisabled,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

export const AccordionContext = createContext<AccordionContextType>({
	isDisabled: defaultAccordionIsDisabled,
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
		isDisabled: isDisabledHook = defaultAccordionsIsDisabled,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing
	} = useContext<AccordionsContextType>(AccordionsContext);

	const {
		children,
		id,
		// title,
		isActive = defaultIsActive,
		isDisabled: isDisabledProp = defaultAccordionIsDisabled,
		isDivisible = defaultIsDivisible,
		isOpen: isOpenProp = defaultIsOpen,
		onToggle,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const isDisabled = isDisabledHook || isDisabledProp;
	const isOpen = !isDisabled || isOpenProp;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isOpen });

	return (
		<AccordionContext.Provider value={{ isDisabled, isHovering, isOpen }}>
			<Center
				{...rest}
				ref={ref}
				as='div'
				aria-disabled={isDisabled}
				data-active={dataAttr(isActive)}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				sx={merge(style.accordion, sx)}
				_disabled={style.disabled.accordion}
				_active={style.active}
			>
				{id && (
					<VisuallyHidden>
						<span id={id.toLowerCase()} />
					</VisuallyHidden>
				)}

				<VStack
					position='relative'
					zIndex={1}
					flex={1}
					divider={isDivisible && !isOpen ? <AccordionDivider /> : undefined}
					spacing={spacing}
					overflow='hidden'
				>
					<Center
						aria-disabled={isDisabled}
						tabIndex={0}
						onClick={() => onToggle({ id })}
						// sx={merge(style.card, sx)}
						_disabled={style.disabled.header}
					>
						{children.header}
					</Center>

					<Collapse in={isOpen && inView} unmountOnExit style={{ width: '100%' }}>
						<VStack
							divider={isDivisible ? <AccordionDivider /> : undefined}
							spacing={spacing}
							overflow='hidden'
						>
							{children.body}
						</VStack>
					</Collapse>
				</VStack>
			</Center>
		</AccordionContext.Provider>
	);
};

export default Accordion;

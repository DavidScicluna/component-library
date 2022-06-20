import { FC, useContext } from 'react';

import { Box } from '@chakra-ui/react';

import { merge } from 'lodash';

import { DummyAccordionProps } from './types';

import { AccordionsContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';
import { isLight as defaultIsLight } from '../Accordion/common/data/defaultPropValues';
import useAccordionStyles from '../Accordion/common/styles';

const DummyAccordion: FC<DummyAccordionProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth
	} = useContext<AccordionsContextType>(AccordionsContext);

	const { children, isLight = defaultIsLight, sx, ...rest } = props;

	const style = useAccordionStyles({ theme, color, colorMode, isFullWidth, isLight, isOpen: false });

	return (
		<Box {...rest} as='div' aria-disabled sx={merge(style.accordion, sx)} _disabled={style.disabled.accordion}>
			{children}
		</Box>
	);
};

export default DummyAccordion;

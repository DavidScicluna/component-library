import { FC, useContext } from 'react';

import { Box } from '@chakra-ui/react';

import { merge } from 'lodash';

import { DummyAccordionProps } from './types';

import { DummyAccordionsContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../../OriginalAccordions/common/data/defaultPropValues';
import { isLight as defaultIsLight } from '../../../OriginalAccordions/components/Accordion/common/data/defaultPropValues';
import useAccordionStyles from '../../../OriginalAccordions/components/Accordion/common/styles';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../types';

const DummyAccordion: FC<DummyAccordionProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth
	} = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const { children, isLight = defaultIsLight, sx, ...rest } = props;

	const style = useAccordionStyles({ theme, color, colorMode, isFullWidth, isLight, isOpen: false });

	return (
		<Box {...rest} as='div' aria-disabled sx={merge(style.accordion, sx)} _disabled={style.disabled.accordion}>
			{children}
		</Box>
	);
};

export default DummyAccordion;

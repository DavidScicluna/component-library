import { FC, useContext } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash';


import { DummyAccordionsContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../../common/data/defaultPropValues';
import { isLight as defaultIsLight } from '../../../OriginalAccordions/components/Accordion/common/data/defaultPropValues';
import useAccordionStyles from '../../../OriginalAccordions/components/Accordion/common/styles';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../types';

import { DummyAccordionProps } from './types';

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
		<Center {...rest} as='div' aria-disabled sx={merge(style.accordion, sx)} _disabled={style.disabled.accordion}>
			<Center width='100%' position='relative' zIndex={1}>
				{children}
			</Center>
		</Center>
	);
};

export default DummyAccordion;

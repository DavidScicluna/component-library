import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../common/hooks';
import { isLight as defaultIsLight } from '../../../OriginalAccordions/components/Accordion/common/data/defaultPropValues';
import { useDummyAccordionsContext } from '../../common/hooks';

import useStyles from './common/styles';
import { DummyAccordionProps } from './types';

const DummyAccordion: FC<DummyAccordionProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isFullWidth } = useDummyAccordionsContext();

	const { children, isLight = defaultIsLight, sx, ...rest } = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLight });

	return (
		<Center {...rest} as='div' aria-disabled sx={merge(style.accordion, sx)}>
			<Center width='100%' position='relative' zIndex={1}>
				{children}
			</Center>
		</Center>
	);
};

export default DummyAccordion;

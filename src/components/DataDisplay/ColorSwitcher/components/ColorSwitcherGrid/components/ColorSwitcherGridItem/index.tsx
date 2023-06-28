import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { capitalize, startCase } from 'lodash-es';

import { useGetColor, useTheme } from '../../../../../../../common/hooks';
import ScaleFade from '../../../../../../Transitions/ScaleFade';
import CardBody from '../../../../../Cards/components/CardBody';
import CardTitle from '../../../../../Cards/components/CardTitle';
import Card from '../../../../../Cards/OriginalCard';
import CardHeader from '../../../../../Cards/OriginalCard/components/CardHeader';
import Icon from '../../../../../Icon';
import { useColorSwitcherContext } from '../../../../common/hooks';

import { ColorSwitcherGridItemProps, ColorSwitcherGridItemRef } from './common/types';

const ColorSwitcherGridItem = forwardRef<ColorSwitcherGridItemRef, ColorSwitcherGridItemProps>(
	function  ColorSwitcherGridItem(props, ref): ReactElement {
		const theme = useTheme();

		const { color: defaultColor, colorMode: defaultColorMode } = useColorSwitcherContext();

		const { color = defaultColor, colorMode = defaultColorMode, isActive = false, onChange, ...rest } = props;

		const background = useGetColor({ color, colorMode, type: 'color' });

		return (
			<Card
				{...rest}
				ref={ref}
				width='100%'
				color={isActive ? color : 'gray'}
				colorMode={colorMode}
				isClickable
				onClick={() => onChange({ color })}
				variant={isActive ? 'outlined' : 'monochrome'}
				p={2}
			>
				<CardHeader
					renderTitle={() => (
						<CardTitle fontSize='md' fontWeight='medium'>
							{startCase(capitalize(color))}
						</CardTitle>
					)}
					actions={
						<ScaleFade in={isActive} unmountOnExit={false}>
							<Icon
								color={color}
								colorMode={colorMode}
								icon='check'
								category='filled'
								variant='transparent'
							/>
						</ScaleFade>
					}
				/>
				<CardBody>
					<Box width='100%' height={theme.fontSizes['8xl']} background={background} borderRadius='base' />
				</CardBody>
			</Card>
		);
	}
);

export default ColorSwitcherGridItem;

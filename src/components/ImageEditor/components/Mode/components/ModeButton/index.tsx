/* eslint-disable import/namespace */
import { ReactElement } from 'react';

import { Text } from '@chakra-ui/react';

import Card from '../../../../../Cards/OriginalCard';
import CardBody from '../../../../../Cards/components/CardBody';
import CardFooter from '../../../../../Cards/components/CardFooter';
import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import Icon from '../../../../../Icon';
import { useImageEditorContext } from '../../../../common/hooks';

import { ModeButtonProps } from './types';

const ModeButton = <V, I>(props: ModeButtonProps<V, I>): ReactElement => {
	const theme = useTheme();

	const { color, colorMode } = useImageEditorContext();

	const { title, icon, isSelected = false, isDisabled = false, onSelect } = props;

	return (
		<Card
			color={isSelected ? color : 'gray'}
			colorMode={colorMode}
			isLight={!isSelected}
			isDivisible={false}
			isDisabled={isDisabled}
			isClickable
			isFullWidth={false}
			onClick={onSelect ? () => onSelect() : undefined}
			variant='transparent'
			p={2}
			spacing={0.5}
			sx={{ height: '100%' }}
		>
			<CardBody>
				<Icon
					color={getColor({
						theme,
						colorMode,
						color: isSelected ? color : 'gray',
						type: isSelected ? 'color' : 'text.secondary'
					})}
					colorMode={colorMode}
					icon={icon}
				/>
			</CardBody>
			<CardFooter>
				<Text
					align='center'
					color={getColor({
						theme,
						colorMode,
						color: isSelected ? color : 'gray',
						type: isSelected ? 'color' : 'text.primary'
					})}
					fontSize='xs'
					fontWeight='semibold'
					whiteSpace='nowrap'
					noOfLines={0}
				>
					{title}
				</Text>
			</CardFooter>
		</Card>
	);
};

export default ModeButton;

/* eslint-disable import/namespace */
import { ReactElement } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import CardBody from '../../../../../DataDisplay/Cards/components/CardBody';
import CardFooter from '../../../../../DataDisplay/Cards/components/CardFooter';
import Card from '../../../../../DataDisplay/Cards/OriginalCard';
import Icon from '../../../../../Icon';
import { useImageEditorContext } from '../../../../common/hooks';

import { ModeButtonProps } from './common/types';

const ModeButton = <V, I>(props: ModeButtonProps<V, I>): ReactElement => {
	const theme = useTheme();

	const { color, colorMode } = useImageEditorContext();

	const { title, icon, isSelected = false, isDisabled = false, onSelect } = props;

	return (
		<Card
			color={isSelected ? color : 'gray'}
			colorMode={colorMode}
			isDivisible={false}
			isDisabled={isDisabled}
			isClickable
			onClick={onSelect ? () => onSelect() : undefined}
			variant={!isSelected ? 'monochrome' : 'transparent'}
			p={2}
			spacing={0.5}
			sx={{ height: '100%' }}
		>
			<CardBody>
				<Icon color={isSelected ? color : 'gray'} colorMode={colorMode} icon={icon} variant='transparent' />
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

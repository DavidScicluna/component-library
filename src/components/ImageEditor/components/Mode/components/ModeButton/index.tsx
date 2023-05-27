/* eslint-disable import/namespace */
import { ReactElement } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import CardBody from '../../../../../DataDisplay/Cards/components/CardBody';
import CardFooter from '../../../../../DataDisplay/Cards/components/CardFooter';
import Card from '../../../../../DataDisplay/Cards/OriginalCard';
import Icon from '../../../../../DataDisplay/Icon';
import { useImageEditorContext } from '../../../../common/hooks';

import { ModeButtonProps } from './common/types';

const ModeButton = <V, I>(props: ModeButtonProps<V, I>): ReactElement => {
	const { color, colorMode } = useImageEditorContext();

	const { title, icon, isSelected = false, isDisabled = false, onSelect } = props;

	const textColor = useGetColor({
		color: isSelected ? color : 'gray',
		colorMode,
		type: isSelected ? 'color' : 'text.primary'
	});

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
					color={textColor}
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

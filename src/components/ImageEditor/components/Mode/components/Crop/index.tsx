import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { cropID as defaultCropID, cropValue as defaultCropValue } from '../../../../common/default/props';
import { ImageEditorModeCropValue } from '../../../../common/types';
import ModeButton from '../ModeButton';

import crops from './common/data/crops';
import { CropProps } from './common/types';

const Crop: FC<CropProps> = ({ cropID = defaultCropID, cropValue = defaultCropValue, onCrop }) => (
	<HStack width='100%' alignItems='center' justifyContent='center' spacing={2}>
		{crops.map(({ id, value, title, icon }) => (
			<ModeButton
				key={id}
				id={id}
				value={value}
				title={title}
				icon={icon}
				isSelected={id === cropID}
				onSelect={() =>
					onCrop({
						id,
						value: (value && value === cropValue
							? value.split(':').reverse().join(':')
							: value) as ImageEditorModeCropValue
					})
				}
			/>
		))}
	</HStack>
);

export default Crop;

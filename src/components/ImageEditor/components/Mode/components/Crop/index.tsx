import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import ModeButton from '../ModeButton';
import { cropID as defaultCropID, cropValue as defaultCropValue } from '../../../../common/data/defaultPropValues';
import { ImageEditorModeCropValue } from '../../../../types';

import crops from './common/data/crops';
import { CropProps } from './types';

const Crop: FC<CropProps> = ({ cropID = defaultCropID, cropValue = defaultCropValue, onCrop }) => {
	return (
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
};

export default Crop;

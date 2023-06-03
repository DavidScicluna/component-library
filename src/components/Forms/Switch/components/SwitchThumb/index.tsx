import { FC, useMemo } from 'react';

import { Center } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { useElementSize } from 'usehooks-ts';

import { useGetColor } from '../../../../../common/hooks';
import { getSizeConfig, GetSizeConfigReturn } from '../../common/utils';

import { SwitchThumbProps } from './common/types';

const SwitchThumb: FC<SwitchThumbProps> = (props) => {
	const [thumbRef, { width: thumbWidth, height: thumbHeight }] = useElementSize();

	const { color, colorMode, renderThumbIcon, isChecked, isHovered, size } = props;

	const thumbColor = useGetColor({ color: 'gray', colorMode, type: 'background' });

	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<Center
			ref={thumbRef}
			className='ds-cl-switch-thumb'
			data-checked={dataAttr(isChecked)}
			data-hover={dataAttr(isHovered)}
			width={`${config.thumb}px`}
			height={`${config.thumb}px`}
			// position='relative'
			// left={isChecked ? '100%' : 0}
			// transform={`translateX(${isChecked ? '-100%' : 0})`}
			// zIndex={1}
			background={thumbColor}
			borderRadius='full'
		>
			{renderThumbIcon
				? renderThumbIcon({ color, colorMode, width: thumbWidth, height: thumbHeight, isChecked })
				: null}
		</Center>
	);
};

export default SwitchThumb;

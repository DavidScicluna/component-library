import { forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { checkResponsiveValue, getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import { SpaceDimension, SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef<SpaceRef, SpaceProps>(function Space(props, ref): ReactElement {
	const { className = '', width = 0, height = 0, ...rest } = props;

	const widthClassName = useMemo(() => {
		const w =
			checkResponsiveValue<SpaceDimension>(width) !== 'default'
				? getResponsiveValue<SpaceDimension>(width)
				: (width as SpaceDimension);
		return `w-${w}`;
	}, [width]);
	const heightClassName = useMemo(() => {
		const h =
			checkResponsiveValue<SpaceDimension>(height) !== 'default'
				? getResponsiveValue<SpaceDimension>(height)
				: (height as SpaceDimension);
		return `h-${h}`;
	}, [height]);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames({
				[widthClassName]: !!width,
				[heightClassName]: !!height,
				[className]: !!className
			})}
		/>
	);
});

export default Space;

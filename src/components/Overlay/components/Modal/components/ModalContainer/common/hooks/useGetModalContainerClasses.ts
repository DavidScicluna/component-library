import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BoxShadow, MaxHeight, MaxWidth, ZIndex } from '@common/types/classes';
import type { Radius, Space } from '@common/types/theme';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';

type UseGetModalContainerClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useGetModalContainerClasses = (): UseGetModalContainerClassesReturn => {
	const { color, colorMode, size, spacing } = useModalContext();

	const widthClassName = useGetClass('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidth>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass(size === 'full' ? 'full' : 'fit', ['sizing', 'height']);
	const maxHeightClassName = useGetClass<MaxHeight>('full', ['sizing', 'max_height']);

	const zIndexClassName = useGetClass<ZIndex>('modal', ['layout', 'z_index']);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass<BoxShadow>('xl', ['effects', 'shadow']);

	const borderRadiusClassName = useGetClass<Radius>(size === 'full' ? 'none' : 'xl', ['borders', 'border_radius']);
	const paddingClassName = useGetClass<Space>(spacing, ['spacing', 'p']);
	const marginClassName = useGetClass<Space>(spacing, ['spacing', 'm']);

	return {
		container: classNames('fixed', 'top-0', 'left-0', zIndexClassName),
		backdrop: classNames('w-full', 'h-full'),
		content: classNames(
			widthClassName,
			maxWidthClassName,
			heightClassName,
			maxHeightClassName,
			shadowClassName,
			backgroundClassName,
			borderRadiusClassName,
			paddingClassName,
			{ [marginClassName]: size !== 'full' }
		)
	};
};

export default useGetModalContainerClasses;

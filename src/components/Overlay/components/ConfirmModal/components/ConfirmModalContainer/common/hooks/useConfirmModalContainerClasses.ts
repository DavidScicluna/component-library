import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BoxShadow, MaxHeight, MaxWidth, ZIndex } from '@common/types/classes';
import type { Radius, Space } from '@common/types/theme';

import { useConfirmModalContext } from '@components/Overlay/components/ConfirmModal/common/hooks';

type UseGetConfirmModalContainerClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useGetConfirmModalContainerClasses = (): UseGetConfirmModalContainerClassesReturn => {
	const { color, colorMode, size, spacing } = useConfirmModalContext();

	const widthClassName = useGetClass('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidth>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass('fit', ['sizing', 'height']);
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

	const borderRadiusClassName = useGetClass<Radius>('xl', ['borders', 'border_radius']);
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
			marginClassName
		)
	};
};

export default useGetConfirmModalContainerClasses;

import classNames from 'classnames';

import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BoxShadow, MaxHeight, MaxWidth, ZIndex } from '@common/types/classes';
import type { Radius, Space } from '@common/types/theme';

import { useConfirmModalContext } from '@components/Overlay/components/ConfirmModal/common/hooks';

type UseGetConfirmModalContainerClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useGetConfirmModalContainerClasses = (): UseGetConfirmModalContainerClassesReturn => {
	const { color, colorMode, size, spacing } = useConfirmModalContext();

	const widthClassName = useGetClass('full', ['layout', 'width']);
	const maxWidthClassName = useGetClass<MaxWidth>(size, ['layout', 'maxWidth']);
	const heightClassName = useGetClass('fit', ['layout', 'height']);
	const maxHeightClassName = useGetClass<MaxHeight>('full', ['layout', 'maxHeight']);

	const zIndexClassName = useGetClass<ZIndex>('modal', ['layout', 'zIndex']);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass<BoxShadow>('xl', ['effects', 'shadow']);

	const borderRadiusClassName = useGetClass<Radius>('xl', ['borders', 'borderRadius']);
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

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetColor } from '@common/hooks';
import type {
	BoxShadowClass,
	ClassName,
	HeightClass,
	MaxHeightClass,
	MaxWidthClass,
	ThemeRadius,
	ThemeSpacing,
	WidthClass,
	ZIndexClass
} from '@common/types';

import { useConfirmModalContext } from '@components/Overlay/components/ConfirmModal/common/hooks';

type UseGetConfirmModalContainerClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useGetConfirmModalContainerClasses = (): UseGetConfirmModalContainerClassesReturn => {
	const { color, colorMode, size, spacing } = useConfirmModalContext();

	const widthClassName = useGetClass<WidthClass>('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidthClass>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass<HeightClass>('fit', ['sizing', 'height']);
	const maxHeightClassName = useGetClass<MaxHeightClass>('full', ['sizing', 'max_height']);

	const zIndexClassName = useGetClass<ZIndexClass>('modal', ['layout', 'z_index']);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass<BoxShadowClass>('xl', ['effects', 'shadow']);

	const borderRadiusClassName = useGetClass<ThemeRadius>('xl', ['borders', 'border_radius']);
	const paddingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'p']);
	const marginClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'm']);

	return {
		container: classNames(
			classes.layout.position.fixed,
			classes.layout.top[0],
			classes.layout.left[0],
			zIndexClassName
		),
		backdrop: classNames(classes.sizing.width.full, classes.sizing.height.full),
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

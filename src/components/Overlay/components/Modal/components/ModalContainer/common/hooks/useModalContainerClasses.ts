import classNames from 'classnames';

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

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';

type UseModalContainerClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useModalContainerClasses = (): UseModalContainerClassesReturn => {
	const { color, colorMode, size, spacing } = useModalContext();

	const widthClassName = useGetClass<WidthClass>('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidthClass>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass<HeightClass>(size === 'full' ? 'full' : 'fit', ['sizing', 'height']);
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

	const borderRadiusClassName = useGetClass<ThemeRadius>(size === 'full' ? 'none' : 'xl', [
		'borders',
		'border_radius'
	]);
	const paddingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'p']);
	const marginClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'm']);

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

export default useModalContainerClasses;

import type { CollapseProps, CollapseXAxisProps, CollapseYAxisProps } from '../types';

const otherProps: (keyof CollapseProps)[] = ['axis', 'transition', 'transitionEnd', 'isOpacityAnimated'];
const otherXAxisProps: (keyof CollapseXAxisProps)[] = ['startingWidth', 'endingWidth'];
const otherYAxisProps: (keyof CollapseYAxisProps)[] = ['startingHeight', 'endingHeight'];

export default [...otherProps, ...otherXAxisProps, ...otherYAxisProps];

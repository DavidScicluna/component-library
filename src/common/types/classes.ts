import type { PickFrom, ThemeColor, ThemeColorHue, ThemeSpacing } from '.';

export type ColorTypeClass =
	| 'shadow'
	| 'fill'
	| 'bg'
	| 'text'
	| 'caret'
	| 'border'
	| 'outline'
	| 'decoration'
	| 'gradient_from_color'
	| 'gradient_middle_color'
	| 'gradient_to_color';

/**
 * Animation
 */
export type AnimationClass = 'none' | 'spin' | 'ping' | 'pulse' | 'bounce';
export type AnimationClassArr = Array<AnimationClass>;
export type AnimationClassObj = Record<AnimationClass, string>;

/**
 * Backgrounds
 */
export type BackgroundAttachmentClass = 'fixed' | 'local' | 'scroll';
export type BackgroundAttachmentClassArr = Array<BackgroundAttachmentClass>;
export type BackgroundAttachmentClassObj = Record<BackgroundAttachmentClass, string>;

export type BackgroundClipClass = 'border' | 'padding' | 'content' | 'text';
export type BackgroundClipClassArr = Array<BackgroundClipClass>;
export type BackgroundClipClassObj = Record<BackgroundClipClass, string>;

export type BackgroundColorClass =
	| `${PickFrom<ColorTypeClass, 'bg'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'bg'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type BackgroundColorClassArr = Array<BackgroundColorClass>;
export type BackgroundColorClassObj = Record<BackgroundColorClass, string>;

export type BackgroundOriginClass = 'border' | 'padding' | 'content';
export type BackgroundOriginClassArr = Array<BackgroundOriginClass>;
export type BackgroundOriginClassObj = Record<BackgroundOriginClass, string>;

export type BackgroundPositionClass =
	| 'bottom'
	| 'center'
	| 'left'
	| 'left-bottom'
	| 'left-top'
	| 'right'
	| 'right-bottom'
	| 'right-top'
	| 'top';
export type BackgroundPositionClassArr = Array<BackgroundPositionClass>;
export type BackgroundPositionClassObj = Record<BackgroundPositionClass, string>;

export type BackgroundRepeatClass = 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat-round' | 'repeat-space';
export type BackgroundRepeatClassArr = Array<BackgroundRepeatClass>;
export type BackgroundRepeatClassObj = Record<BackgroundRepeatClass, string>;

export type BackgroundSizeClass = 'auto' | 'cover' | 'contain';
export type BackgroundSizeClassArr = Array<BackgroundSizeClass>;
export type BackgroundSizeClassObj = Record<BackgroundSizeClass, string>;

export type GradientFromMiddleToClass =
	| 0
	| 5
	| 10
	| 15
	| 20
	| 25
	| 30
	| 35
	| 40
	| 45
	| 50
	| 55
	| 60
	| 65
	| 70
	| 75
	| 80
	| 85
	| 90
	| 95
	| 100;
export type GradientFromMiddleToClassArr = Array<GradientFromMiddleToClass>;
export type GradientFromMiddleToClassObj = Record<GradientFromMiddleToClass, string>;

export type GradientFromColorClass =
	| `${PickFrom<ColorTypeClass, 'gradient_from_color'>}-${Exclude<
			ThemeColor,
			'transparent' | 'black' | 'white'
	  >}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'gradient_from_color'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type GradientFromColorClassArr = Array<GradientFromColorClass>;
export type GradientFromColorClassObj = Record<GradientFromColorClass, string>;

export type GradientMiddleColorClass =
	| `${PickFrom<ColorTypeClass, 'gradient_middle_color'>}-${Exclude<
			ThemeColor,
			'transparent' | 'black' | 'white'
	  >}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'gradient_middle_color'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type GradientMiddleColorClassArr = Array<GradientMiddleColorClass>;
export type GradientMiddleColorClassObj = Record<GradientMiddleColorClass, string>;

export type GradientToColorClass =
	| `${PickFrom<ColorTypeClass, 'gradient_to_color'>}-${Exclude<
			ThemeColor,
			'transparent' | 'black' | 'white'
	  >}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'gradient_to_color'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type GradientToColorClassArr = Array<GradientToColorClass>;
export type GradientToColorClassObj = Record<GradientToColorClass, string>;

export type GradientClass = 'none' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
export type GradientClassArr = Array<GradientClass>;
export type GradientClassObj = Record<GradientClass, string>;

/**
 * Borders
 */
export type BorderStyleClass = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';
export type BorderStyleClassArr = Array<BorderStyleClass>;
export type BorderStyleClassObj = Record<BorderStyleClass, string>;

export type BorderColorClass =
	| `${PickFrom<ColorTypeClass, 'border'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'border'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type BorderColorClassArr = Array<BorderColorClass>;
export type BorderColorClassObj = Record<BorderColorClass, string>;

export type OutlineWidthClass = 0 | 1 | 2 | 4 | 8;
export type OutlineWidthClassArr = Array<OutlineWidthClass>;
export type OutlineWidthClassObj = Record<OutlineWidthClass, string>;

export type OutlineStyleClass = 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
export type OutlineStyleClassArr = Array<OutlineStyleClass>;
export type OutlineStyleClassObj = Record<OutlineStyleClass, string>;

export type OutlineColorClass =
	| `${PickFrom<ColorTypeClass, 'outline'>}-${Exclude<
			ThemeColor,
			'transparent' | 'black' | 'white'
	  >}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'outline'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type OutlineColorClassArr = Array<OutlineColorClass>;
export type OutlineColorClassObj = Record<OutlineColorClass, string>;

export type OutlineOffsetClass = 0 | 1 | 2 | 4 | 8;
export type OutlineOffsetClassArr = Array<OutlineOffsetClass>;
export type OutlineOffsetClassObj = Record<OutlineOffsetClass, string>;

/**
 * Effects
 */
export type BoxShadowClass = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';
export type BoxShadowClassArr = Array<BoxShadowClass>;
export type BoxShadowClassObj = Record<BoxShadowClass, string>;

export type BoxShadowColorClass =
	| `${PickFrom<ColorTypeClass, 'shadow'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'shadow'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type BoxShadowColorClassArr = Array<BoxShadowColorClass>;
export type BoxShadowColorClassObj = Record<BoxShadowColorClass, string>;

export type OpacityClass = 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
export type OpacityClassArr = Array<OpacityClass>;
export type OpacityClassObj = Record<OpacityClass, string>;

export type MixBlendModeClass =
	| 'normal'
	| 'multiply'
	| 'screen'
	| 'overlay'
	| 'darken'
	| 'lighten'
	| 'color-dodge'
	| 'color-burn'
	| 'hard-light'
	| 'soft-light'
	| 'difference'
	| 'exclusion'
	| 'hue'
	| 'saturation'
	| 'color'
	| 'luminosity'
	| 'plus-lighter';
export type MixBlendModeClassArr = Array<MixBlendModeClass>;
export type MixBlendModeClassObj = Record<MixBlendModeClass, string>;

export type BackgroundBlendModeClass =
	| 'normal'
	| 'multiply'
	| 'screen'
	| 'overlay'
	| 'darken'
	| 'lighten'
	| 'color-dodge'
	| 'color-burn'
	| 'hard-light'
	| 'soft-light'
	| 'difference'
	| 'exclusion'
	| 'hue'
	| 'saturation'
	| 'color'
	| 'luminosity';
export type BackgroundBlendModeClassArr = Array<BackgroundBlendModeClass>;
export type BackgroundBlendModeClassObj = Record<BackgroundBlendModeClass, string>;

/**
 * Filters
 */
export type BrightnessClass = 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150 | 200;
export type BrightnessClassArr = Array<BrightnessClass>;
export type BrightnessClassObj = Record<BrightnessClass, string>;

/*
 * TODO: Maybe create a folder called props in common and create files like classes with props like example:
 * radius?: ThemeRadius
 * Containing documentation
 */
export type ContrastClass = 0 | 50 | 75 | 100 | 125 | 150 | 200;
export type ContrastClassArr = Array<ContrastClass>;
export type ContrastClassObj = Record<ContrastClass, string>;

export type DropShadowClass = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
export type DropShadowClassArr = Array<DropShadowClass>;
export type DropShadowClassObj = Record<DropShadowClass, string>;

export type GrayscaleClass = 0 | 1;
export type GrayscaleClassArr = Array<GrayscaleClass>;
export type GrayscaleClassObj = Record<GrayscaleClass, string>;

export type HueRotateClass = 0 | 15 | 30 | 60 | 90 | 180;
export type HueRotateClassArr = Array<HueRotateClass>;
export type HueRotateClassObj = Record<HueRotateClass, string>;

export type InvertClass = 0 | 1;
export type InvertClassArr = Array<InvertClass>;
export type InvertClassObj = Record<InvertClass, string>;

export type SaturateClass = 0 | 50 | 100 | 150 | 200;
export type SaturateClassArr = Array<SaturateClass>;
export type SaturateClassObj = Record<SaturateClass, string>;

export type SepiaClass = 0 | 1;
export type SepiaClassArr = Array<SepiaClass>;
export type SepiaClassObj = Record<SepiaClass, string>;

/**
 * Flex
 */
export type AlignItemsClass = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type AlignItemsClassArr = Array<AlignItemsClass>;
export type AlignItemsClassObj = Record<AlignItemsClass, string>;

export type JustifyContentClass =
	| 'normal'
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch';
export type JustifyContentClassArr = Array<JustifyContentClass>;
export type JustifyContentClassObj = Record<JustifyContentClass, string>;

export type FlexColumnClass = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FlexColumnClassArr = Array<FlexColumnClass>;
export type FlexColumnClassObj = Record<FlexColumnClass, string>;

export type FlexDirectionClass = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexDirectionClassArr = Array<FlexDirectionClass>;
export type FlexDirectionClassObj = Record<FlexDirectionClass, string>;

export type FlexWrapClass = 'wrap' | 'wrap-reverse' | 'nowrap';
export type FlexWrapClassArr = Array<FlexWrapClass>;
export type FlexWrapClassObj = Record<FlexWrapClass, string>;

/**
 * Grid
 */
export type AlignContentClass =
	| 'normal'
	| 'center'
	| 'start'
	| 'end'
	| 'between'
	| 'around'
	| 'evenly'
	| 'baseline'
	| 'stretch';
export type AlignContentClassArr = Array<AlignContentClass>;
export type AlignContentClassObj = Record<AlignContentClass, string>;

export type AlignSelfClass = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type AlignSelfClassArr = Array<AlignSelfClass>;
export type AlignSelfClassObj = Record<AlignSelfClass, string>;

export type JustifyItemsClass = 'start' | 'end' | 'center' | 'stretch';
export type JustifyItemsClassArr = Array<JustifyItemsClass>;
export type JustifyItemsClassObj = Record<JustifyItemsClass, string>;

export type JustifySelfClass = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type JustifySelfClassArr = Array<JustifySelfClass>;
export type JustifySelfClassObj = Record<JustifySelfClass, string>;

export type PlaceContentClass = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'baseline' | 'stretch';
export type PlaceContentClassArr = Array<PlaceContentClass>;
export type PlaceContentClassObj = Record<PlaceContentClass, string>;

export type PlaceItemsClass = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type PlaceItemsClassArr = Array<PlaceItemsClass>;
export type PlaceItemsClassObj = Record<PlaceItemsClass, string>;

export type PlaceSelfClass = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type PlaceSelfClassArr = Array<PlaceSelfClass>;
export type PlaceSelfClassObj = Record<PlaceSelfClass, string>;

export type GridColumnClass = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridColumnClassArr = Array<GridColumnClass>;
export type GridColumnClassObj = Record<GridColumnClass, string>;

export type GridRowClass = 1 | 2 | 3 | 4 | 5 | 6;
export type GridRowClassArr = Array<GridRowClass>;
export type GridRowClassObj = Record<GridRowClass, string>;

export type GridAutoFlowClass = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
export type GridAutoFlowClassArr = Array<GridAutoFlowClass>;
export type GridAutoFlowClassObj = Record<GridAutoFlowClass, string>;

export type GridAutoClass = 'auto' | 'min' | 'max' | 'fr';
export type GridAutoClassArr = Array<GridAutoClass>;
export type GridAutoClassObj = Record<GridAutoClass, string>;

export type GridColumnSpanClass = GridColumnClass | 'full' | 'auto';
export type GridColumnSpanClassArr = Array<GridColumnSpanClass>;
export type GridColumnSpanClassObj = Record<GridColumnSpanClass, string>;

export type GridColumnStartEndClass = GridColumnClass | 13 | 'auto';
export type GridColumnStartEndClassArr = Array<GridColumnStartEndClass>;
export type GridColumnStartEndClassObj = Record<GridColumnStartEndClass, string>;

export type GridRowSpanClass = GridRowClass | 'full' | 'auto';
export type GridRowSpanClassArr = Array<GridRowSpanClass>;
export type GridRowSpanClassObj = Record<GridRowSpanClass, string>;

export type GridRowStartEndClass = GridRowClass | 7 | 'auto';
export type GridRowStartEndClassArr = Array<GridRowStartEndClass>;
export type GridRowStartEndClassObj = Record<GridRowStartEndClass, string>;

export type GridTemplateColumnsClass = GridColumnClass | 'none';
export type GridTemplateColumnsClassArr = Array<GridTemplateColumnsClass>;
export type GridTemplateColumnsClassObj = Record<GridTemplateColumnsClass, string>;

export type GridTemplateRowsClass = GridRowClass | 'none';
export type GridTemplateRowsClassArr = Array<GridTemplateRowsClass>;
export type GridTemplateRowsClassObj = Record<GridTemplateRowsClass, string>;

/**
 * Interactivity
 */
export type CursorClass =
	| 'auto'
	| 'default'
	| 'pointer'
	| 'wait'
	| 'text'
	| 'move'
	| 'help'
	| 'not-allowed'
	| 'none'
	| 'context-menu'
	| 'progress'
	| 'cell'
	| 'crosshair'
	| 'vertical-text'
	| 'alias'
	| 'copy'
	| 'no-drop'
	| 'grab'
	| 'grabbing'
	| 'all-scroll'
	| 'col-resize'
	| 'row-resize'
	| 'n-resize'
	| 'e-resize'
	| 's-resize'
	| 'w-resize'
	| 'ne-resize'
	| 'nw-resize'
	| 'se-resize'
	| 'sw-resize'
	| 'ew-resize'
	| 'ns-resize'
	| 'nesw-resize'
	| 'nwse-resize'
	| 'zoom-in'
	| 'zoom-out';
export type CursorClassArr = Array<CursorClass>;
export type CursorClassObj = Record<CursorClass, string>;

export type CaretColorClass =
	| `${PickFrom<ColorTypeClass, 'caret'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'caret'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type CaretColorClassArr = Array<CaretColorClass>;
export type CaretColorClassObj = Record<CaretColorClass, string>;

export type PointerEventsClass = 'auto' | 'none';
export type PointerEventsClassArr = Array<PointerEventsClass>;
export type PointerEventsClassObj = Record<PointerEventsClass, string>;

export type ScrollBehaviorClass = 'auto' | 'smooth';
export type ScrollBehaviorClassArr = Array<ScrollBehaviorClass>;
export type ScrollBehaviorClassObj = Record<ScrollBehaviorClass, string>;

export type ScrollSnapAlignClass = 'start' | 'end' | 'center' | 'align-none';
export type ScrollSnapAlignClassArr = Array<ScrollSnapAlignClass>;
export type ScrollSnapAlignClassObj = Record<ScrollSnapAlignClass, string>;

export type ScrollSnapStopClass = 'normal' | 'always';
export type ScrollSnapStopClassArr = Array<ScrollSnapStopClass>;
export type ScrollSnapStopClassObj = Record<ScrollSnapStopClass, string>;

export type ScrollSnapTypeClass = 'none' | 'x' | 'y' | 'both' | 'mandatory' | 'proximity';
export type ScrollSnapTypeClassArr = Array<ScrollSnapTypeClass>;
export type ScrollSnapTypeClassObj = Record<ScrollSnapTypeClass, string>;

export type UserSelectClass = 'none' | 'text' | 'all' | 'auto';
export type UserSelectClassArr = Array<UserSelectClass>;
export type UserSelectClassObj = Record<UserSelectClass, string>;

export type WillChangeClass = 'auto' | 'scroll' | 'contents' | 'transform';
export type WillChangeClassArr = Array<WillChangeClass>;
export type WillChangeClassObj = Record<WillChangeClass, string>;

/**
 * Layout
 */
export type DisplayClass =
	| 'container'
	| 'outline'
	| 'block'
	| 'inline-block'
	| 'inline'
	| 'flex'
	| 'inline-flex'
	| 'table'
	| 'inline-table'
	| 'table-caption'
	| 'table-cell'
	| 'table-column'
	| 'table-column-group'
	| 'table-footer-group'
	| 'table-header-group'
	| 'table-row-group'
	| 'table-row'
	| 'flow-root'
	| 'grid'
	| 'inline-grid'
	| 'contents'
	| 'list-item'
	| 'hidden';
export type DisplayClassArr = Array<DisplayClass>;
export type DisplayClassObj = Record<DisplayClass, string>;

export type WidthClass =
	| 'auto'
	| '1/2'
	| '1/3'
	| '2/3'
	| '1/4'
	| '2/4'
	| '3/4'
	| '1/5'
	| '2/5'
	| '3/5'
	| '4/5'
	| '1/6'
	| '2/6'
	| '3/6'
	| '4/6'
	| '5/6'
	| '1/12'
	| '2/12'
	| '3/12'
	| '4/12'
	| '5/12'
	| '6/12'
	| '7/12'
	| '8/12'
	| '9/12'
	| '10/12'
	| '11/12'
	| 'full'
	| 'screen'
	| 'min'
	| 'max'
	| 'fit'
	| ThemeSpacing;
export type WidthClassArr = Array<WidthClass>;
export type WidthClassObj = Record<WidthClass, string>;

export type MinWidthClass = 0 | 'full' | 'min' | 'max' | 'fit';
export type MinWidthClassArr = Array<MinWidthClass>;
export type MinWidthClassObj = Record<MinWidthClass, string>;

export type MaxWidthClass =
	| 0
	| 'none'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| 'full'
	| 'min'
	| 'max'
	| 'fit'
	| 'prose';
export type MaxWidthClassArr = Array<MaxWidthClass>;
export type MaxWidthClassObj = Record<MaxWidthClass, string>;

export type HeightClass =
	| 'auto'
	| '1/2'
	| '1/3'
	| '2/3'
	| '1/4'
	| '2/4'
	| '3/4'
	| '1/5'
	| '2/5'
	| '3/5'
	| '4/5'
	| '1/6'
	| '2/6'
	| '3/6'
	| '4/6'
	| '5/6'
	| 'full'
	| 'screen'
	| 'min'
	| 'max'
	| 'fit'
	| ThemeSpacing;
export type HeightClassArr = Array<HeightClass>;
export type HeightClassObj = Record<HeightClass, string>;

export type MinHeightClass = 0 | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MinHeightClassArr = Array<MinHeightClass>;
export type MinHeightClassObj = Record<MinHeightClass, string>;

export type MaxHeightClass = 0 | 'none' | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MaxHeightClassArr = Array<MaxHeightClass>;
export type MaxHeightClassObj = Record<MaxHeightClass, string>;

export type ObjectFitClass = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type ObjectFitClassArr = Array<ObjectFitClass>;
export type ObjectFitClassObj = Record<ObjectFitClass, string>;

export type ObjectPositionClass =
	| 'bottom'
	| 'center'
	| 'left'
	| 'left-bottom'
	| 'left-top'
	| 'right'
	| 'right-bottom'
	| 'right-top'
	| 'top';
export type ObjectPositionClassArr = Array<ObjectPositionClass>;
export type ObjectPositionClassObj = Record<ObjectPositionClass, string>;

export type OverflowClass = 'auto' | 'hidden' | 'clip' | 'visible' | 'scroll';
export type OverflowClassArr = Array<OverflowClass>;
export type OverflowClassObj = Record<OverflowClass, string>;

export type PositionClass = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
export type PositionClassArr = Array<PositionClass>;
export type PositionClassObj = Record<PositionClass, string>;

export type ZIndexClass =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 30
	| 40
	| 50
	| 75
	| 100
	| 250
	| 500
	| 1000
	| 'dropdown'
	| 'sticky'
	| 'banner'
	| 'overlay'
	| 'modal'
	| 'popover'
	| 'skipLink'
	| 'toast'
	| 'tooltip'
	| 'auto';
export type ZIndexClassArr = Array<ZIndexClass>;
export type ZIndexClassObj = Record<ZIndexClass, string | number>;

/**
 * Scrollbar
 */
export type ScrollbarClass = 'default' | 'hide';
export type ScrollbarClassArr = Array<ScrollbarClass>;
export type ScrollbarClassObj = Record<ScrollbarClass, string>;

/**
 * Sizing
 */

/**
 * Spacing
 */

/**
 * SVG
 */
export type FillColorClass =
	| `${PickFrom<ColorTypeClass, 'fill'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'fill'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type FillColorClassArr = Array<FillColorClass>;
export type FillColorClassObj = Record<FillColorClass, string | number>;

/**
 * Transforms
 */
export type ScaleClass = 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150;
export type ScaleClassArr = Array<ScaleClass>;
export type ScaleClassObj = Record<ScaleClass, string>;

export type RotateClass = 0 | 1 | 2 | 3 | 6 | 12 | 45 | 90 | 180;
export type RotateClassArr = Array<RotateClass>;
export type RotateClassObj = Record<RotateClass, string>;

export type TransformOriginClass =
	| 'center'
	| 'top'
	| 'top-right'
	| 'right'
	| 'bottom-right'
	| 'bottom'
	| 'bottom-left'
	| 'left'
	| 'top-left';
export type TransformOriginClassArr = Array<TransformOriginClass>;
export type TransformOriginClassObj = Record<TransformOriginClass, string>;

export type SkewClass = 0 | 1 | 2 | 3 | 6 | 12;
export type SkewClassArr = Array<SkewClass>;
export type SkewClassObj = Record<SkewClass, string>;

/**
 * Transitions
 */

/**
 * Typography
 */
export type FontStyleClass = 'italic' | 'not-italic';
export type FontStyleClassArr = Array<FontStyleClass>;
export type FontStyleClassObj = Record<FontStyleClass, string>;

export type TextAlignClass = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
export type TextAlignClassArr = Array<TextAlignClass>;
export type TextAlignClassObj = Record<TextAlignClass, string>;

export type TextColorClass =
	| `${PickFrom<ColorTypeClass, 'text'>}-${Exclude<ThemeColor, 'transparent' | 'black' | 'white'>}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'text'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type TextColorClassArr = Array<TextColorClass>;
export type TextColorClassObj = Record<TextColorClass, string>;

export type TextDecorationClass = 'underline' | 'overline' | 'line-through' | 'no-underline';
export type TextDecorationClassArr = Array<TextDecorationClass>;
export type TextDecorationClassObj = Record<TextDecorationClass, string>;

export type TextDecorationColorClass =
	| `${PickFrom<ColorTypeClass, 'decoration'>}-${Exclude<
			ThemeColor,
			'transparent' | 'black' | 'white'
	  >}-${ThemeColorHue}`
	| `${PickFrom<ColorTypeClass, 'decoration'>}-${PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>}`;
export type TextDecorationColorClassArr = Array<TextDecorationColorClass>;
export type TextDecorationColorClassObj = Record<TextDecorationColorClass, string>;

export type TextDecorationStyleClass = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
export type TextDecorationStyleClassArr = Array<TextDecorationStyleClass>;
export type TextDecorationStyleClassObj = Record<TextDecorationStyleClass, string>;

export type TextDecorationThicknessClass = 'auto' | 'from-font' | 0 | 1 | 2 | 4 | 8;
export type TextDecorationThicknessClassArr = Array<TextDecorationThicknessClass>;
export type TextDecorationThicknessClassObj = Record<TextDecorationThicknessClass, string>;

export type TextUnderlineOffsetClass = 'auto' | 0 | 1 | 2 | 4 | 8;
export type TextUnderlineOffsetClassArr = Array<TextUnderlineOffsetClass>;
export type TextUnderlineOffsetClassObj = Record<TextUnderlineOffsetClass, string>;

export type TextLetterSpacingClass = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export type TextLetterSpacingClassArr = Array<TextLetterSpacingClass>;
export type TextLetterSpacingClassObj = Record<TextLetterSpacingClass, string>;

export type TextLineClampClass = 'none' | 1 | 2 | 3 | 4 | 5 | 6;
export type TextLineClampClassArr = Array<TextLineClampClass>;
export type TextLineClampClassObj = Record<TextLineClampClass, string>;

export type TextTransformClass = 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
export type TextTransformClassArr = Array<TextTransformClass>;
export type TextTransformClassObj = Record<TextTransformClass, string>;

export type TextOverflowClass = 'truncate' | 'ellipsis' | 'clip';
export type TextOverflowClassArr = Array<TextOverflowClass>;
export type TextOverflowClassObj = Record<TextOverflowClass, string>;

export type WhitespaceClass = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'break-spaces';
export type WhitespaceClassArr = Array<WhitespaceClass>;
export type WhitespaceClassObj = Record<WhitespaceClass, string>;

export type WordBreakClass = 'normal' | 'words' | 'all' | 'keep';
export type WordBreakClassArr = Array<WordBreakClass>;
export type WordBreakClassObj = Record<WordBreakClass, string>;

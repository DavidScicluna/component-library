import type { PickFrom } from '.';
import type { Color, ColorHue } from './theme';

export type ClassType = 'bg' | 'text' | 'border' | 'outline';

/**
 * Backgrounds
 */
export type BackgroundColor =
	| `${PickFrom<ClassType, 'bg'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'bg'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

/**
 * Borders
 */

/**
 * Filters
 */

/**
 * Flex
 */

/**
 * Grid
 */

/**
 * Layout
 */
export type MinWidth = 0 | 'full' | 'min' | 'max' | 'fit';
export type MinWidthArr = MinWidth[];
export type MinWidthObj = Record<MinWidth, string>;

export type MaxWidth =
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
export type MaxWidthArr = MaxWidth[];
export type MaxWidthObj = Record<MaxWidth, string>;

export type MinHeight = 0 | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MinHeightArr = MinHeight[];
export type MinHeightObj = Record<MinHeight, string>;

export type MaxHeight = 0 | 'none' | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MaxHeightArr = MaxHeight[];
export type MaxHeightObj = Record<MaxHeight, string>;

/**
 * Sizing
 */

/**
 * Spacing
 */

/**
 * Transitions
 */

/**
 * Typography
 */
export type TextColor =
	| `${PickFrom<ClassType, 'text'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'text'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

export type TextLineClamp = 'none' | 1 | 2 | 3 | 4 | 5 | 6;
export type TextLineClampArr = TextLineClamp[];
export type TextLineClampObj = Record<TextLineClamp, string>;

export type AlignContent =
	| 'normal'
	| 'center'
	| 'start'
	| 'end'
	| 'between'
	| 'around'
	| 'evenly'
	| 'baseline'
	| 'stretch';
export type AlignContentArr = AlignContent[];
export type AlignContentObj = Record<AlignContent, string>;

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type AlignItemsArr = AlignItems[];
export type AlignItemsObj = Record<AlignItems, string>;

export type AlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type AlignSelfArr = AlignSelf[];
export type AlignSelfObj = Record<AlignSelf, string>;

export type Blur =
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
	| '8xl'
	| '9xl';
export type BlurArr = Blur[];
export type BlurObj = Record<Blur, string>;

export type BackdropBlur =
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
	| '8xl'
	| '9xl';
export type BackdropBlurArr = BackdropBlur[];
export type BackdropBlurObj = Record<BackdropBlur, string>;

export type BorderWidth = 0 | 1 | 2 | 4 | 8;
export type BorderWidthArr = BorderWidth[];
export type BorderWidthObj = Record<BorderWidth, string>;

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';
export type BorderStyleArr = BorderStyle[];
export type BorderStyleObj = Record<BorderStyle, string>;

export type JustifyContent =
	| 'normal'
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch';
export type JustifyContentArr = JustifyContent[];
export type JustifyContentObj = Record<JustifyContent, string>;

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
export type JustifyItemsArr = JustifyItems[];
export type JustifyItemsObj = Record<JustifyItems, string>;

export type JustifySelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type JustifySelfArr = JustifySelf[];
export type JustifySelfObj = Record<JustifySelf, string>;

export type PlaceContent = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'baseline' | 'stretch';
export type PlaceContentArr = PlaceContent[];
export type PlaceContentObj = Record<PlaceContent, string>;

export type PlaceItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type PlaceItemsArr = PlaceItems[];
export type PlaceItemsObj = Record<PlaceItems, string>;

export type PlaceSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type PlaceSelfArr = PlaceSelf[];
export type PlaceSelfObj = Record<PlaceSelf, string>;

export type FlexColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FlexColumnArr = FlexColumn[];
export type FlexColumnObj = Record<FlexColumn, string>;

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexDirectionArr = FlexDirection[];
export type FlexDirectionObj = Record<FlexDirection, string>;

export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
export type FlexWrapArr = FlexWrap[];
export type FlexWrapObj = Record<FlexWrap, string>;

export type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridColumnArr = GridColumn[];
export type GridColumnObj = Record<GridColumn, string>;

export type GridRow = 1 | 2 | 3 | 4 | 5 | 6;
export type GridRowArr = GridRow[];
export type GridRowObj = Record<GridRow, string>;

export type GridAutoFlow = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
export type GridAutoFlowArr = GridAutoFlow[];
export type GridAutoFlowObj = Record<GridAutoFlow, string>;

export type GridAuto = 'auto' | 'min' | 'max' | 'fr';
export type GridAutoArr = GridAuto[];
export type GridAutoObj = Record<GridAuto, string>;

export type GridColumnSpan = GridColumn | 'full' | 'auto';
export type GridColumnSpanArr = GridColumnSpan[];
export type GridColumnSpanObj = Record<GridColumnSpan, string>;

export type GridColumnStartEnd = GridColumn | 13 | 'auto';
export type GridColumnStartEndArr = GridColumnStartEnd[];
export type GridColumnStartEndObj = Record<GridColumnStartEnd, string>;

export type GridRowSpan = GridRow | 'full' | 'auto';
export type GridRowSpanArr = GridRowSpan[];
export type GridRowSpanObj = Record<GridRowSpan, string>;

export type GridRowStartEnd = GridRow | 7 | 'auto';
export type GridRowStartEndArr = GridRowStartEnd[];
export type GridRowStartEndObj = Record<GridRowStartEnd, string>;

export type GridTemplateColumns = GridColumn | 'none';
export type GridTemplateColumnsArr = GridTemplateColumns[];
export type GridTemplateColumnsObj = Record<GridTemplateColumns, string>;

export type GridTemplateRows = GridRow | 'none';
export type GridTemplateRowsArr = GridTemplateRows[];
export type GridTemplateRowsObj = Record<GridTemplateRows, string>;

export type OutlineWidth = 0 | 1 | 2 | 4 | 8;
export type OutlineWidthArr = OutlineWidth[];
export type OutlineWidthObj = Record<OutlineWidth, string>;

export type OutlineStyle = 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
export type OutlineStyleArr = OutlineStyle[];
export type OutlineStyleObj = Record<OutlineStyle, string>;

export type OutlineOffset = 0 | 1 | 2 | 4 | 8;
export type OutlineOffsetArr = OutlineOffset[];
export type OutlineOffsetObj = Record<OutlineOffset, string>;

export type Saturate = 0 | 50 | 100 | 150 | 200;
export type SaturateArr = Saturate[];
export type SaturateObj = Record<Saturate, string>;

export type ZIndex =
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
export type ZIndexArr = ZIndex[];
export type ZIndexObj = Record<ZIndex, string | number>;

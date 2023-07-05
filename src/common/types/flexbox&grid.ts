export type AlignItems =
	| 'flex-start' /* Pack flex items from the start */
	| 'flex-end' /* Pack flex items from the end */
	| 'center' /* Pack items around the center */
	| 'baseline' /* Baseline alignment */
	| 'stretch'; /* Distribute items evenly stretch 'auto'-sized items to fit the container */

export type JustifyContent =
	| 'normal' /* Normal alignment */
	| 'flex-start' /* Pack flex items from the start */
	| 'flex-end' /* Pack flex items from the end */
	| 'center' /* Pack items around the center */
	| 'space-between' /* Distribute items evenly the first item is flush with the start, the last is flush with the end */
	| 'space-around' /* Distribute items evenly items have a half-size space on either end */
	| 'space-evenly' /* Distribute items evenly items have equal space around them */
	| 'stretch'; /* Distribute items evenly stretch 'auto'-sized items to fit the container */

export type FlexDirection =
	| 'row' /* The direction text is laid out in a line */
	| 'row-reverse' /* Like <row>, but reversed */
	| 'column' /* The direction in which lines of text are stacked */
	| 'column-reverse'; /* Like <column>, but reversed */

export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';

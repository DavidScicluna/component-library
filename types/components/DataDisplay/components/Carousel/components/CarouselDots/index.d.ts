/// <reference types="react" />
import type { CarouselDot as CarouselDotType, CarouselDots as CarouselDotsType, CarouselDotsProps, CarouselDotsRef } from './common/types';
import CarouselDots from './CarouselDots';
import type { CarouselDotProps, CarouselDotRef } from './components';
import { CarouselDot } from './components';
export * as constants from './common/constants';
export declare const keys: {
    __KEYS_CAROUSEL_DOT_CLASS__: "ds-cl-carousel-dot";
    __KEYS_CAROUSEL_DOTS_CLASS__: "ds-cl-carousel-dots";
};
export declare const hooks: {
    useCarouselDotClasses: <Element_1 extends import("react").ElementType = "div">(props: Pick<CarouselDotProps<Element_1>, "color" | "size" | "colorMode"> & {
        isVisible: boolean;
    }) => {
        item: string;
        scale100: string;
        scale75: string;
        scale50: string;
    };
};
export { CarouselDot, CarouselDots };
export type { CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType };
//# sourceMappingURL=index.d.ts.map
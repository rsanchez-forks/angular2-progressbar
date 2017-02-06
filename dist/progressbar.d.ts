export declare type Easing = string;
export interface ShapeOptions {
    color?: string;
    strokeWidth?: number;
    easing?: Easing;
    duration?: number;
    trailColor?: string;
    trailWidth?: number;
    svgStyle?: {
        width?: string;
        display?: string;
    };
    text?: {
        value?: string;
        className?: string;
        style?: {
            color?: string;
            position?: string;
            right?: string;
            top?: string;
            padding?: number;
            margin?: number;
            transform?: {
                prefix?: boolean;
                value?: string;
            };
        };
        autoStyleContainer?: boolean;
        alignToBottom?: boolean;
    };
    fill?: string;
    from?: any;
    to?: any;
    step?: (state: any, circle: any, attachment: any) => void;
    warnings?: boolean;
}
export interface AnimationOptions {
    duration?: number;
    easing?: Easing;
    from?: any;
    to?: any;
    step?: (state: any, circle: any, attachment: any) => void;
}
export declare namespace ProgressBar {
}

declare module "Drawing/Point" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**.
    * @class Represents a point.
    */
    export class Point {
        /**
        * For internal use only.
        * @private
        */
        private static distance;
        /**
        * For internal use only.
        * @private
        */
        private static angleBetween;
        /**
        * For internal use only.
        * @private
        */
        private static addVector;
        static middle(p1: any, p2: any): Point;
        /**
        * Initializes a new instance of the Point class with the specified X and Y coordinates.
        * @constructor
        * @param {Number} x The X-coordinate of the Point.
        * @param {Number} y The Y-coordinate of the Point.
        */
        constructor(x: number, y: number);
        set x(arg: number);
        /**
        * Gets or sets the x-coordinate of the point.
        * @type {Number}
        * @summary The x-coordinate of the point.
        */
        get x(): number;
        set y(arg: number);
        /**
        * Gets or sets the y-coordinate of the point.
        * @type {Number}
        * @summary The y-coordinate of the point.
        */
        get y(): number;
        type: any;
        _x: number;
        _y: number;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * Gets a value indicating whether this Point is empty.
        * @returns {Boolean} true if both x and y are 0; otherwise, false.
        */
        empty(): boolean;
        /**
        * Calculate the distance from this point to another one.
        * For internal use only.
        * @private
        */
        private distance;
        /**
        * For internal use only.
        * @private
        */
        private angleBetween;
        /**
        * For internal use only.
        * @private
        */
        private addVector;
        /**
        * For internal use only.
        * @private
        */
        private newWithOffset;
        /**
        * Specifies whether this Point contains the same coordinates as the specified point.
        * @param {Point} [point] The Point to test.
        * @returns {Boolean} true if point is a Point and has the same coordinates as this Point.
        */
        equals(point?: Point): boolean;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        toJson(): {
            x: number;
            y: number;
        };
        manhDistance(p: any): number;
    }
}
declare module "Drawing/Matrix" {
    export class Matrix {
        static fromValues(values: any): Matrix;
        elements: number[];
        matrix(): number[];
        isIdentity(): boolean;
        clone(): Matrix;
        translate(x: any, y: any): void;
        scale(sx: any, sy: any): void;
        scaleAtCenter(sx: any, sy: any, rect: any): void;
        rotate(angle: any): void;
        /**
        * Applies a clockwise rotation about the specified pivot point.
        * @param {Number} angle The angle of rotation.
        * @param {Number|Point} x The Y-coordinate of the pivot point.
        * @param {Number} [y] The Y-coordinate of the pivot point.
        */
        rotateAt(angle: number, x: number | Point, y?: number): void;
        invert(): Matrix;
        transformPoint(point: any): void;
        transformPoints(points: any): void;
        transformRect(rect: any): Rect;
        svgMatrix(): string;
    }
    import { Point } from "Drawing/Point";
    import { Rect } from "Drawing/Rect";
}
declare module "Drawing/GraphicsUnit" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
    * @class Specifies the unit of measure for length and size properties.
    */
    export class GraphicsUnit {
        /**
        * Specifies the world coordinate system unit as the unit of measure.
        * @type {Number}
        * @summary For internal use.
        */
        static get World(): number;
        /**
        * Specifies the display unit as the unit of measure.
        * @type {Number}
        * @summary Defines 100 DPI resolution.
        */
        static get Display(): number;
        /**
        * Specifies the pixel unit as the unit of measure.
        * @type {Number}
        * @summary Defines 96 DPI resolution.
        */
        static get Pixel(): number;
        /**
        * Specifies a printer's point as the unit of measure.
        * @type {Number}
        * @summary Defines 72 DPI resolution.
        */
        static get Point(): number;
        /**
        * Specifies the inch as the unit of measure.
        * @type {Number}
        * @summary Defines 1 DPI resolution.
        */
        static get Inch(): number;
        /**
        * Specifies the document unit as the unit of measure.
        * @type {Number}
        * @summary Defines 300 DPI resolution.
        */
        static get Document(): number;
        /**
        * Specifies the millimeter as the unit of measure.
        * @type {Number}
        * @summary Defines 25.4 DPI resolution.
        */
        static get Millimeter(): number;
        /**
        * Specifies the WpfPoint unit as the unit of measure.
        * @type {Number}
        * @summary Defines 96 DPI resolution.
        */
        static get WpfPoint(): number;
        /**
        * Specifies the world coordinate system unit as the unit of measure.
        * @type {Number}
        * @summary For internal use.
        */
        static get Percent(): number;
        /**
        * Specifies the centimeter as the unit of measure.
        * @type {Number}
        * @summary Defines 2.54 DPI resolution.
        */
        static get Centimeter(): number;
        static unitsPerInch(unit: any): 1 | 100 | 300 | 25.4 | 72 | 96 | 2.54;
        static convert(amount: any, sourceUnit: any, targetUnit: any): number;
        static getPixel(unit: any): number;
        static getMillimeter(unit: any): number;
        static getStandardDivisions(unit: any): 8 | 10;
    }
}
declare module "Drawing/DistanceToSegment" {
    /**
    * @namespace MindFusion.Drawing
    */
    export class DistanceToSegment {
        constructor(p: any, a: any, b: any);
        p: any;
        a: any;
        b: any;
        distanceToSegment(): number;
        distanceToSegmentSquared(): number;
        distanceSq(pt1: any, pt2: any): number;
        distanceToLineSquared(p: any, a: any, b: any): number;
    }
}
declare module "Drawing/Geometry" {
    export class Geometry {
        /**
        * Converts cartesian coordinates to the corresponding polar coordinates,
        * using the specified point as a center of the coordinate system.
        * @param {Point} center The center of the coordinate system.
        * @param {Point} point The cartesian coordinate to convert.
        * @returns {PolarCoords} The converted coordinate.
        */
        static cartesianToPolar(center: Point, point: Point): PolarCoords;
        static cartesianToPolarDegrees(center: any, point: any): PolarCoords;
        /**
        * Converts polar coordinates to the corresponding cartesian coordinates,
        * using the specified point as a center of the coordinate system.
        * @param {Point} center The center of the coordinate system.
        * @param {PolarCoords | Number} polar The polar coordinate to convert.
        * @param {Number} [r] The polar coordinate to convert.
        * @returns {Point} The converted coordinate.
        */
        static polarToCartesian(center: Point, polar: PolarCoords | number, r?: number): Point;
        static polarToCartesianDegrees(center: any, polar: any): Point;
        static rotatePoint(point: any, pivot: any, angle: any): Point;
        static distance(p1: any, p2: any): number;
        static radianToDegree(radian: any): number;
        static degreeToRadian(degree: any): number;
        static getBoundingBox(points: any): Rect;
        static polylineIntersectsRect(points: any, rect: any): boolean;
        static polylinesIntersect(points1: any, points2: any): boolean;
        static getEllipseIntr(rcBox: any, pt1: any, pt2: any): any;
        static calcAngle(s1p1: any, s1p2: any, s2p1: any, s2p2: any): number;
    }
    import { Point } from "Drawing/Point";
    class PolarCoords {
        constructor(a: any, r: any);
        _a: any;
        _r: any;
        set a(arg: any);
        get a(): any;
        set r(arg: any);
        get r(): any;
    }
    import { Rect } from "Drawing/Rect";
    export {};
}
declare module "Drawing/Color" {
    /**
    * @class Represents a color.
    */
    export class Color {
        /**
         * Initializes a new instance of the Color class.
         * @param {String} value A string representation of the color.
         */
        constructor(value: string);
        /**
         * Creates a Color instance from alpha, red, green and blue values.
         * @param {Number} alpha The alpha value.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {Color} The new Color instance.
         */
        static fromArgb(a: number, r: number, g: number, b: number): Color;
        /**
         * Creates a Color instance from red, green and blue values.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {Color} The new Color instance.
         */
        static fromArgb(r: number, g: number, b: number): Color;
        private static parse;
        private static checkKnownColor;
        private static hexToRgb;
        private static stringToRgb;
        private static rgbToString;
        private static stringToHex;
        value: string;
        R: number;
        G: number;
        B: number;
        A: number;
        rgbValue: string;
        /**
         * The list of color names as defined by the CSS specification.
         */
        static knownColors: {
            AliceBlue: string;
            AntiqueWhite: string;
            Aqua: string;
            Aquamarine: string;
            Azure: string;
            Beige: string;
            Bisque: string;
            Black: string;
            BlanchedAlmond: string;
            Blue: string;
            BlueViolet: string;
            Brown: string;
            BurlyWood: string;
            CadetBlue: string;
            Chartreuse: string;
            Chocolate: string;
            Coral: string;
            CornflowerBlue: string;
            Cornsilk: string;
            Crimson: string;
            Cyan: string;
            DarkBlue: string;
            DarkCyan: string;
            DarkGoldenRod: string;
            DarkGray: string;
            DarkGrey: string;
            DarkGreen: string;
            DarkKhaki: string;
            DarkMagenta: string;
            DarkOliveGreen: string;
            DarkOrange: string;
            DarkOrchid: string;
            DarkRed: string;
            DarkSalmon: string;
            DarkSeaGreen: string;
            DarkSlateBlue: string;
            DarkSlateGray: string;
            DarkSlateGrey: string;
            DarkTurquoise: string;
            DarkViolet: string;
            DeepPink: string;
            DeepSkyBlue: string;
            DimGray: string;
            DimGrey: string;
            DodgerBlue: string;
            Feldspar: string;
            FireBrick: string;
            FloralWhite: string;
            ForestGreen: string;
            Fuchsia: string;
            Gainsboro: string;
            GhostWhite: string;
            Gold: string;
            GoldenRod: string;
            Gray: string;
            Grey: string;
            Green: string;
            GreenYellow: string;
            HoneyDew: string;
            HotPink: string;
            IndianRed: string;
            Indigo: string;
            Ivory: string;
            Khaki: string;
            Lavender: string;
            LavenderBlush: string;
            LawnGreen: string;
            LemonChiffon: string;
            LightBlue: string;
            LightCoral: string;
            LightCyan: string;
            LightGoldenRodYellow: string;
            LightGray: string;
            LightGrey: string;
            LightGreen: string;
            LightPink: string;
            LightSalmon: string;
            LightSeaGreen: string;
            LightSkyBlue: string;
            LightSlateBlue: string;
            LightSlateGray: string;
            LightSlateGrey: string;
            LightSteelBlue: string;
            lightyellow: string;
            Lime: string;
            LimeGreen: string;
            Linen: string;
            Magenta: string;
            Maroon: string;
            MediumAquaMarine: string;
            MediumBlue: string;
            MediumOrchid: string;
            MediumPurple: string;
            MediumSeaGreen: string;
            MediumSlateBlue: string;
            MediumSpringGreen: string;
            MediumTurquoise: string;
            MediumVioletRed: string;
            MidnightBlue: string;
            MintCream: string;
            MistyRose: string;
            Moccasin: string;
            NavajoWhite: string;
            Navy: string;
            OldLace: string;
            Olive: string;
            OliveDrab: string;
            Orange: string;
            OrangeRed: string;
            Orchid: string;
            PaleGoldenRod: string;
            PaleGreen: string;
            PaleTurquoise: string;
            PaleVioletRed: string;
            PapayaWhip: string;
            PeachPuff: string;
            Peru: string;
            Pink: string;
            Plum: string;
            PowderBlue: string;
            Purple: string;
            Red: string;
            RosyBrown: string;
            RoyalBlue: string;
            SaddleBrown: string;
            Salmon: string;
            SandyBrown: string;
            SeaGreen: string;
            SeaShell: string;
            Sienna: string;
            Silver: string;
            SkyBlue: string;
            SlateBlue: string;
            SlateGray: string;
            SlateGrey: string;
            Snow: string;
            SpringGreen: string;
            SteelBlue: string;
            Tan: string;
            Teal: string;
            Thistle: string;
            Tomato: string;
            Turquoise: string;
            Violet: string;
            VioletRed: string;
            Wheat: string;
            White: string;
            WhiteSmoke: string;
            Yellow: string;
            YellowGreen: string;
            Transparent: string;
        };
    }
}
declare module "Drawing/Brush" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
     * Copyright (c) 2015-2021, MindFusion LLC - Bulgaria.
     *
     * This source code is provided to you as part of the MindFusion software components
     * package you have purchased. You may use the source code to trace and/or fix
     * problems or customize the library as needed for your application. To get permission
     * to use the source code in any other way, please contact us at support@mindfusion.eu.
     */
    import { Rect } from "Drawing/Rect";
    import { Color } from "Drawing/Color";
    /**
    * @class Represents a brush.
    * @property {Color} color Gets or sets the color of this Brush object.
    */
    export class Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} color The color of this brush.
         */
        constructor(color: Color | string);
        /**
         * Creates a copy of this brush.
         * @returns {Brush} The copy of this brush.
         */
        clone(): Brush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a Brush from a JSON object or string describing this brush.
         * @returns {Brush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Brush;
        /**
        * Determines whether the specified object is equal to this Brush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this Brush; otherwise, false.
        */
        equals(obj: any): boolean;
        private m_color;
        /**
         * Gets the color of this brush.
         * @returns {Color} The color of this brush.
         */
        get color(): Color;
        /**
         * Sets the color of this brush.
         * @param {Color} value The color of this brush.
         */
        set color(value: Color);
    }
    /**
    * @class Represents a linear gradient brush.
    * @property {Color} startColor Gets or sets the start color of the gradient.
    * @property {Color} endColor Gets or sets the end color of the gradient.
    * @property {Number} angle Gets or sets angle of gradient rotation.
    */
    export class LinearGradientBrush extends Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} startColor The starting color of the gradient.
             * @param {Color | string} endColor The ending color of the gradient.
         * @param {Number} [angle] The angle of the gradient.
         * @param {Rect} [bounds] The bounds of the gradient.
         */
        constructor(startColor: Color | string, endColor: Color | string, angle?: number, bounds?: Rect);
        /**
         * Creates a copy of this brush.
         * @returns {LinearGradientBrush} The copy of this brush.
         */
        clone(): LinearGradientBrush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         * @param {Rect} bounds The bounds of the gradient.
         */
        apply(context: CanvasRenderingContext2D, bounds: Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a LinearGradientBrush from a JSON object or string describing this brush.
         * @returns {LinearGradientBrush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Brush;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        private m_startColor;
        /**
         * Gets the starting color of the gradient.
         * @returns {Color} The starting color of the gradient.
         */
        get startColor(): Color;
        /**
         * Sets the starting color of the gradient.
         * @param {Color} value The starting color of the gradient.
         */
        set startColor(value: Color);
        private m_endColor;
        /**
         * Gets the ending color of the gradient.
         * @returns {Color} The ending color of the gradient.
         */
        get endColor(): Color;
        /**
         * Sets the ending color of the gradient.
         * @param {Color} value The ending color of the gradient.
         */
        set endColor(value: Color);
        /**
         * Gets the angle of the gradient.
         * @returns {Color} The angle of the gradient.
         */
        get angle(): number;
        /**
         * Sets the angle of the gradient.
         * @param {Color} value The angle of the gradient.
         */
        set angle(value: number);
        private m_bounds;
        private m_angle;
        private m_colorStops;
    }
}
declare module "Drawing/DrawingUtils" {
    /**
     * @class Contains drawing-related helper functions.
     */
    export class DrawingUtils {
        /**
        * For internal use only.
        * @private
        */
        private static getRectPtPercent;
        /**
        * Returns the smallest possible rectangle containing both of the specified rectangles.
        * @param {Rect} rect1 The first rectangle.
        * @param {Rect} rect2 The second rectangle.
        * @returns {Rect} A Rect instance that represents the union of the specified arguments.
        */
        static unionRects(rect1: Rect, rect2: Rect): Rect;
        /**
        * For internal use only.
        * @private
        */
        private static normalizeRect;
        /**
        * Creates and returns an enlarged copy of a Rect instance.
        * @param {Rect} rect The Rect instance to inflate.
        * @param {Number} x The amount to inflate horizontally.
        * @param {Number} y The amount to inflate vertically.
        * @returns {Rect} The inflated Rect.
        */
        static inflate(rect: Rect, x: number, y: number): Rect;
        /**
        * Calculates the shortest distance from the specified point to the specified polyline,
        * also returning the index of the segment the point is closest to.
        */
        static distToPolyline(point: any, ppoints: any, npoints: any, refSegment: any): number;
        /**
        * Determines whether the specified line segments intersect.
        * @param {Point} p1 The start of the first line segment.
        * @param {Point} p2 The end of the first line segment.
        * @param {Point} p3 The start of the second line segment.
        * @param {Point} p4 The end of the second line segment.
        * @returns {Boolean} true if the segments intersect, false if not.
        */
        static intersect(p1: Point, p2: Point, p3: Point, p4: Point): boolean;
        /**
        * For internal use only.
        * @private
        */
        private static ccw;
        /**
        * For internal use only.
        * @private
        */
        private static getIntersectionPoint;
        /**
        * Checks whether the segments defined by the specified point pairs intersect and returns the intersection point.
        * @param {Point} p1 The start of the first segment.
        * @param {Point} p2 The end of the first segment.
        * @param {Point} p3 The start of the second segment.
        * @param {Point} p4 The end of the second segment.
        * @returns {Boolean} true if the segments intersect, false if not.
        */
        static getSegmentIntersection(s1: any, s2: any, l1: any, l2: any): boolean;
        /**
        * Checks whether the specified rectangle contains the specified point.
        * @param {Point} point The point to check.
        * @param {Array} polygon An array with the points that define the polygon.
        * @returns {Boolean} true if the polygon contains the specified point, false if not.
        */
        static pointInPolygon(point: Point, polygon: any[]): boolean;
        /**
        * Checks whether the specified ellipse contains the specified point.
        * @param {Point} point The point to check.
        * @param {Rect} rect The bounds of the ellipse.
        * @returns {Boolean} true if the ellipse contains the specified point, false if not.
        */
        static pointInEllipse(point: Point, rect: Rect): boolean;
        /**
        * Checks whether the specified circle contains the specified point.
        * @param {Point} point The point to check.
        * @param {Point} center The center of the circle.
        * @param {Number} radius The radius of the circle.
        * @returns {Boolean} true if the circle contains the specified point, false if not.
        */
        static pointInCircle(point: Point, center: Point, radius: number): boolean;
        /**
        * Calculates the bounding rect of the specified polyline.
        * @param {Array} points An array of points.
        * @returns {Rect} The bounding rect.
        */
        static getPointsBounds(points: any[]): Rect;
        /**
        * For internal use only.
        * @private
        */
        private static getPolygonIntersection;
        /**
        * For internal use only.
        * @private
        */
        private static getClosestSegmentPoint;
        /**
        * For internal use only.
        * @private
        */
        private static getLeftVector;
        /**
        * For internal use only.
        * @private
        */
        private static symmetricPoint;
        /**
        * Checks if the specified rectangle and circle intersect.
        * @param {Point} point The center of the circle.
        * @param {Rect} rect The rectangle.
        * @param {Number} rad The radius of the circle.
        * @returns {Boolean} true if the rectangle and the circle intersect; otherwise, false.
        */
        static checkIntersect(point: Point, rect: Rect, rad: number): boolean;
        /**
        * Calculates the minimum distance between a given point and a given rectangle.
        * @param {Point} point The point.
        * @param {Rectabgle} rect The rectangle.
        * @returns {Number} The minimum distance.
        */
        static minDistToRect(point: Point, rect: any): number;
        /**
        * Returns the point that lies on the outline of a rectangle and is nearest to the given point.
        * @param {Point} point The point to consider.
        * @param {Rect} rect The rectangle to consider.
        * @returns {Number} The nearest point.
        */
        static distToRectPoint(point: Point, rect: Rect): number;
        /**
        * For internal use only.
        * @private
        */
        private static distToRectSelect;
        /**
        * For internal use only.
        * @private
        */
        private static equalEpsilon;
        /**
        * For internal use only.
        * @private
        */
        private static pointEqualEpsilon;
        /**
        * For internal use only.
        * @private
        */
        private static mid;
        /**
        * For internal use only.
        * @private
        */
        private static closer;
        /**
        * For internal use only.
        * @private
        */
        private static swap;
        /**
        * For internal use only.
        * @private
        */
        private static sort;
        /**
        * For internal use only.
        * @private
        */
        private static betweenOrEqual;
        /**
        * For internal use only.
        * @private
        */
        private static betweenOrEqualSorted;
        /**
        * For internal use only.
        * @private
        */
        private static subtract;
        /**
        * For internal use only.
        * @private
        */
        private static offsetPointCollection;
        /**
        * For internal use only.
        * @private
        */
        private static rectPtFromPercent;
        /**
        * For internal use only.
        * @private
        */
        private static setRect;
        /**
        * For internal use only.
        * @private
        */
        private static getLineHitTest;
        /**
        * For internal use only.
        * @private
        */
        private static DistanceSq;
        static distance(point1: any, point2: any): number;
        /**
        * Converts the specified value from degrees to radians.
        * @param {Number} degrees The degrees to convert.
        * @returns {Number} The converted angle.
        */
        static radians(degrees: number): number;
        /**
        * Converts the specified value from radians to degrees.
        * @param {Number} radians The radians to convert.
        * @returns {Number} The converted angle.
        */
        static degrees(radians: number): number;
        /**
        * For internal use only.
        * @private
        */
        private static rotatePointAt;
        /**
        * For internal use only.
        * @private
        */
        private static rotatePointsAt;
        /**
        * Returns the center of the specified rectangle.
        * @param {Rect} rect The rectangle.
        * @returns {Point} The center.
        */
        static getCenter(rect: Rect): Point;
        static rotatePoint(pointToRotate: any, centerPoint: any, angleInDegrees: any): Point;
        static rotateRect(rect: any, pivot: any, angle: any): any;
        static rotateSize(size: any, angle: any): any;
        /**
        * For internal use only.
        * @private
        */
        private static getBrush;
        /**
        * For internal use only.
        * @private
        */
        private static getBrushColor;
        static opacityBrush(brush: any, opacity: any): any;
        static getBezierPt(points: any, segment: any, t: any): Point;
        /**
        * Approximates a Bezier curve with the given quality and by a series of line segments.
        * @param {Array} points A list of Bezier control points.
        * @param {Number} quality Specifies the approximation quality.
        * @param {Number} start Specifies the start point index.
        * @returns {Array} A list of points that approximate the curve as a series of straight line segments.
        */
        static approximateBezier(points: any[], quality: number, start: number): any[];
        /**
        * For internal use only.
        * @private
        */
        private static addCubicBezierPoints;
        /**
        * For internal use only.
        * @private
        */
        private static addQuadraticBezierPoints;
        /**
        * For internal use only.
        * @private
        */
        private static addArcPoints;
        /**
        * For internal use only.
        * @private
        */
        private static getApproximatingContext;
        static arcToBezierCurves(x: any, y: any, w: any, h: any, a: any, sw: any): Point[];
        static arcSegmentToBezier(x: any, y: any, w: any, h: any, s: any, e: any): Point[];
        static newRect(center: any, size: any): Rect;
        /**
        * For internal use only.
        * @private
        */
        private static offset1;
        /**
        * For internal use only.
        * @private
        */
        private static offset;
        /**
        * For internal use only.
        * @private
        */
        private static isNumber;
        static isFloat(number: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private static sign;
        static getFitTextStep(currUnit: any): number;
        static formatString(...args: any[]): any;
        static colorStringToHex(string: any): string;
        static parseColor(value: any): {
            red: number;
            green: number;
            blue: number;
        };
        static hexToRgb(value: any): {
            red: number;
            green: number;
            blue: number;
        };
        static stringToRgb(string: any): {
            red: number;
            green: number;
            blue: number;
            alpha: number;
        };
        static rgbToString(r: any, g: any, b: any, a: any): any;
        static checkKnownColor(value: any): any;
        static get knownColors(): {
            aliceblue: string;
            antiquewhite: string;
            aqua: string;
            aquamarine: string;
            azure: string;
            beige: string;
            bisque: string;
            black: string;
            blanchedalmond: string;
            blue: string;
            blueviolet: string;
            brown: string;
            burlywood: string;
            cadetblue: string;
            chartreuse: string;
            chocolate: string;
            coral: string;
            cornflowerblue: string;
            cornsilk: string;
            crimson: string;
            cyan: string;
            darkblue: string;
            darkcyan: string;
            darkgoldenrod: string;
            darkgray: string;
            darkgreen: string;
            darkkhaki: string;
            darkmagenta: string;
            darkolivegreen: string;
            darkorange: string;
            darkorchid: string;
            darkred: string;
            darksalmon: string;
            darkseagreen: string;
            darkslateblue: string;
            darkslategray: string;
            darkslategrey: string;
            darkturquoise: string;
            darkviolet: string;
            deeppink: string;
            deepskyblue: string;
            dimgray: string;
            dodgerblue: string;
            feldspar: string;
            firebrick: string;
            floralwhite: string;
            forestgreen: string;
            fuchsia: string;
            gainsboro: string;
            ghostwhite: string;
            gold: string;
            goldenrod: string;
            gray: string;
            grey: string;
            green: string;
            greenyellow: string;
            honeydew: string;
            hotpink: string;
            indianred: string;
            indigo: string;
            ivory: string;
            khaki: string;
            lavender: string;
            lavenderblush: string;
            lawngreen: string;
            lemonchiffon: string;
            lightblue: string;
            lightcoral: string;
            lightcyan: string;
            lightgoldenrodyellow: string;
            lightgray: string;
            lightgrey: string;
            lightgreen: string;
            lightpink: string;
            lightsalmon: string;
            lightseagreen: string;
            lightskyblue: string;
            lightslateblue: string;
            lightslategray: string;
            lightslategrey: string;
            lightsteelblue: string;
            lightyellow: string;
            lime: string;
            limegreen: string;
            linen: string;
            magenta: string;
            maroon: string;
            mediumaquamarine: string;
            mediumblue: string;
            mediumorchid: string;
            mediumpurple: string;
            mediumseagreen: string;
            mediumslateblue: string;
            mediumspringgreen: string;
            mediumturquoise: string;
            mediumvioletred: string;
            midnightblue: string;
            mintcream: string;
            mistyrose: string;
            moccasin: string;
            navajowhite: string;
            navy: string;
            oldlace: string;
            olive: string;
            olivedrab: string;
            orange: string;
            orangered: string;
            orchid: string;
            palegoldenrod: string;
            palegreen: string;
            paleturquoise: string;
            palevioletred: string;
            papayawhip: string;
            peachpuff: string;
            peru: string;
            pink: string;
            plum: string;
            powderblue: string;
            purple: string;
            red: string;
            rosybrown: string;
            royalblue: string;
            saddlebrown: string;
            salmon: string;
            sandybrown: string;
            seagreen: string;
            seashell: string;
            sienna: string;
            silver: string;
            skyblue: string;
            slateblue: string;
            slategray: string;
            snow: string;
            springgreen: string;
            steelblue: string;
            tan: string;
            teal: string;
            thistle: string;
            tomato: string;
            turquoise: string;
            violet: string;
            violetred: string;
            wheat: string;
            white: string;
            whitesmoke: string;
            yellow: string;
            yellowgreen: string;
        };
    }
    import { Rect } from "Drawing/Rect";
    import { Point } from "Drawing/Point";
}
declare module "Drawing/Size" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
    * @class Represents the size of 2D object.
    */
    export class Size {
        static copy(size: any): Size;
        /**
        * Initializes a new instance of the Size class with the specified width and height.
        * @constructor
        * @param {Number} width Specifies width.
        * @param {Number} height Specifies height.
        */
        constructor(width: number, height: number);
        _width: number;
        _height: number;
        set width(arg: number);
        /**
        * Gets or sets the size width.
        * @type {Number}
        * @summary The size width.
        */
        get width(): number;
        set height(arg: number);
        /**
        * Gets or sets the size height.
        * @type {Number}
        * @summary The size height.
        */
        get height(): number;
        /**
        * Gets a value indicating whether this Size is empty.
        * @returns {Boolean} true if both width and height are 0; otherwise, false.
        */
        empty(): boolean;
        toJson(): {
            width: number;
            height: number;
        };
    }
}
declare module "Drawing/Enum" {
    /**
     * Specifies visibility for components.
     */
    export type Visibility = number;
    export namespace Visibility {
        const Hidden: number;
        const Collapsed: number;
        const Visible: number;
    }
    /**
     * Specifies alignment of components.
     */
    export type LayoutAlignment = number;
    export namespace LayoutAlignment {
        const Near: number;
        const Center: number;
        const Far: number;
        const Stretch: number;
    }
    /**
     * Specifies the dash pattern of lines.
     */
    export type DashStyle = number;
    export namespace DashStyle {
        const Solid: number;
        const Dash: number;
        const Dot: number;
        const DashDot: number;
        const DashDotDot: number;
        const Custom: number;
        function apply(context: any, dashStyle: any): void;
    }
    /**
     * Specifies the position and alignment of a picture in a node, or that of the background image.
     */
    export type ImageAlign = number;
    export namespace ImageAlign {
        const Center_1: number;
        export { Center_1 as Center };
        export const Fit: number;
        const Stretch_1: number;
        export { Stretch_1 as Stretch };
        export const Tile: number;
        export const TopLeft: number;
        export const BottomLeft: number;
        export const TopRight: number;
        export const BottomRight: number;
        export const TopCenter: number;
        export const BottomCenter: number;
        export const MiddleLeft: number;
        export const MiddleRight: number;
        export const FitLeft: number;
        export const FitTop: number;
        export const FitRight: number;
        export const FitBottom: number;
    }
    /**
     * Specifies font style attributes.
     */
    export type FontStyle = number;
    export namespace FontStyle {
        const Regular: number;
        const Bold: number;
        const Italic: number;
        const Underline: number;
        const Strikeout: number;
    }
    /**
     * Specifies how to join consecutive line or curve segments in a figure.
     */
    export type LineJoin = number;
    export namespace LineJoin {
        const Miter: number;
        const Bevel: number;
        const Round: number;
    }
    /**
     * Specifies the alignment of a text string relative to its layout rectangle.
     */
    export type StringAlignment = number;
    export namespace StringAlignment {
        const Near_1: number;
        export { Near_1 as Near };
        const Center_2: number;
        export { Center_2 as Center };
        const Far_1: number;
        export { Far_1 as Far };
    }
    /**
    * @class Encapsulates text layout information.
    * @property {StringAlignment} alignment Gets or sets the horizontal alignment of the text.
    * @property {StringAlignment} lineAlignment Gets or sets the vertical alignment of the text.
    */
    export class StringFormat {
        set alignment(arg: any);
        get alignment(): any;
        _alignment: any;
        set lineAlignment(arg: any);
        get lineAlignment(): any;
        _lineAlignment: any;
    }
}
declare module "Drawing/Rect" {
    /**
    * @class  Represents a rectangle.
    */
    export class Rect {
        /**
        * Creates a Rect object with the specified edge locations.
        * @param {Number} l The x-coordinate of the upper-left corner of this Rect.
        * @param {Number} t The y-coordinate of the upper-left corner of this Rect.
        * @param {Number} r The x-coordinate of the lower-right corner of this Rect.
        * @param {Number} b The y-coordinate of the lower-right corner of this Rect.
        * @returns {Rect} A rectangle with the specified coordinates.
        */
        static fromLTRB(l: number, t: number, r: number, b: number): Rect;
        /**
        * For internal use only.
        * @private
        */
        private static fromArgs;
        /**
        * For internal use only.
        * @private
        */
        private static fromPoints;
        /**
        * For internal use only.
        * @private
        */
        private static fromCenterAndSize;
        /**
        * For internal use only.
        * @private
        */
        private static fromPositionAndSize;
        /**
        * For internal use only.
        * @private
        */
        private static fromVertex;
        /**
        * For internal use only.
        * @private
        */
        private static boundingRect;
        /**
        * Initializes a new instance of the Rect class.
        * @constructor
        * @param {Number|Point} x The X-coordinate of the top left corner of the rectangle.
        * @param {Number|Size} y The Y-coordinate of the top left corner of the rectangle.
        * @param {Number} [width] The width of the rectangle.
        * @param {Number} [height] The height of the rectangle.
        */
        constructor(x: number | Point, y: number | Size, width?: number, height?: number);
        _x: number;
        _y: number | Size;
        _width: number;
        _height: number;
        transform: Matrix;
        type: any;
        pen: string;
        strokeThickness: number;
        brush: string;
        set x(arg: number);
        /**
        * Gets or sets the x-coordinate of the upper-left corner of the rectangle.
        * @type {Number}
        * @summary The x-coordinate of the upper-left corner of the rectangle.
        */
        get x(): number;
        set y(arg: number);
        /**
        * Gets or sets the y-coordinate of the upper-left corner of the rectangle.
        * @type {Number}
        * @summary The y-coordinate of the upper-left corner of the rectangle.
        */
        get y(): number;
        set width(arg: number);
        /**
        * Gets or sets the width of the rectangle.
        * @type {Number}
        * @summary The width of the rectangle.
        */
        get width(): number;
        set height(arg: number);
        /**
        * Gets or sets the height of the rectangle.
        * @type {Number}
        * @summary The height of the rectangle.
        */
        get height(): number;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * Gets a value indicating whether this Rect is empty.
        * @returns {Boolean} true if both width and height are 0; otherwise, false.
        */
        isEmpty(): boolean;
        /**
        * Gets the x-coordinate that is the sum of x and width values of this Rect.
        * @returns {Number} The x-coordinate that is the sum of x and width of this rectangle.
        */
        right(): number;
        /**
        * Gets the x-coordinate of the left edge of this Rect object.
        * @returns {Number} The x-coordinate of the left edge of this Rect object.
        */
        left(): number;
        /**
        * Gets the y-coordinate that is the sum of the y and height property values of this Rect object.
        * @returns {Number} The y-coordinate that is the sum of y and height of this Rect.
        */
        bottom(): number;
        /**
        * Gets the y-coordinate of the top edge of this Rect object.
        * @return {Number} The y-coordinate of the top edge of this Rect object.
        */
        top(): number;
        /**
        * Gets the center of this Rect object.
        * @returns {Point} The center, which is a Point with x that is the sum of x
        * and half of width and with y that is the sum of y and half of height.
        */
        center(): Point;
        centerX(): number;
        centerY(): number;
        /**
        * Gets the top-left edge of this Rect.
        * @returns {Point} The top-left edge of this Rect.
        */
        topLeft(): Point;
        /**
        * Gets the top-right edge of this Rect object.
        * @returns {Point} The top-right edge, which is a Point
        * with x that is the sum of x and width and with y equal to y.
        */
        topRight(): Point;
        /**
        * Gets the top-middle of this Rect object.
        * @returns {Point} The top-middle coordinate, which is a Point
        * with x that is the sum of x and half of width and with y equal to y.
        */
        topMiddle(): Point;
        /**
        * Gets the bottom-left edge of this Rect object.
        * @returns {Point} The bottom-left edge, which is a Point
        * with x that is equal to x and with y that is the sum of y and height.
        */
        bottomLeft(): Point;
        /**
        * Gets the bottom-right edge of this Rect object.
        * @returns {Point} The bottom-right edge, which is a Point
        * with x that is the sum of x and width and with y that is the sum of y and height.
        */
        bottomRight(): Point;
        adjusted(l: any, t: any, r: any, b: any): Rect;
        /**
        * Checks if this Rect intersects with the specified rect.
        * @param {Rect} rect The other Rect.
        * @returns {Boolean} true if this Rect and the specified Rect intersect; otherwise, false.
        */
        intersectsWith(rect: Rect): boolean;
        intersectsInc(rect: any): boolean;
        /**
        * Determines if the rectangular region represented by rect is entirely contained within this Rect object.
        * @param {Rect} rect The Rect to test.
        * @returns {Boolean} true if the rectangular region represented by rect is entirely contained within this Rect;
        * otherwise, false.
        */
        contains(rect: Rect): boolean;
        /**
        * Determines if the specified point is contained within this Rect object.
        * @param {Point} point The point to check.
        * @returns {Boolean} true if point is contained within the Rect; otherwise, false.
        */
        containsPoint(point: Point): boolean;
        /**
        * Returns a Rect object representing the union of the current rectangle with
        * the specified rectangle.
        * @param {Rect} rect The rectangle to union.
        * @returns {Rect} A Rect object that bounds the union of the two rectangles.
        */
        union(rect: Rect): Rect;
        /**
        * Returns a Rect object representing the intersection of the current rectangle
        * with the specified rectangle.
        * @param {Rect} rect The rectangle to intersect.
        * @returns {Rect} A Rect object representing the intersection of the two rectangles.
        */
        intersect(rect: Rect): Rect;
        /**
        * Creates a Rect object identical to the current object.
        * @returns {Rect} The newly created Rect object.
        */
        clone(): Rect;
        toJson(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        /**
        * For internal use only.
        * @private
        */
        private draw;
        drawShadow(context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private drawPath;
        setClip(context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private getBounds;
        /**
        * For internal use only.
        * @private
        */
        private setBounds;
        /**
        * Sets the top-left edge of this Rect object.
        * @param {Point} point The top-left edge of the Rect.
        */
        setLocation(point: Point): void;
        /**
        * Sets the center of this Rect object.
        * @param {Point} point The center of this Rect.
        */
        setCenter(point: Point): void;
        inflate(halfIncrement: any): Rect;
        offset(x: any, y: any): void;
        /**
        * For internal use only.
        * @private
        */
        private getCornerPoints;
        /**
        * For internal use only.
        * @private
        */
        private getSizeRect;
        /**
        * Specifies whether this Rect contains the same coordinates as the specified rectangle.
        * @param {Rect} rect The Rect to test.
        * @returns {Boolean} true if rect has the same coordinates as this Rect.
        */
        equals(rect: Rect): boolean;
        sameSize(rect: any): boolean;
        toString(): string;
        getSize(): Size;
        createSvgElement(svgdoc: any): any;
        expandToInt(): void;
    }
    export namespace Rect {
        const empty: Rect;
    }
    import { Size } from "Drawing/Size";
    import { Matrix } from "Drawing/Matrix";
    import { Point } from "Drawing/Point";
}
declare module "Drawing/Arc" {
    export class Arc {
        constructor(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any);
        x: any;
        y: any;
        radius: any;
        startAngle: any;
        endAngle: any;
        anticlockwise: any;
        center: Point;
        pen: string;
        getType(): any;
        draw(context: any): void;
        containsPoint(point: any): boolean;
        inflate(halfIncrement: any): Arc;
        createSvgElement(svgdoc: any): any;
        getRepaintBounds(rect: any): Rect;
    }
    import { Point } from "Drawing/Point";
    import { Rect } from "Drawing/Rect";
}
declare module "Drawing/Bezier" {
    export class Bezier {
        static fromPoints(points: any, start: any): Bezier;
        constructor(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any, x4: any, y4: any);
        x1: any;
        y1: any;
        x2: any;
        y2: any;
        x3: any;
        y3: any;
        x4: any;
        y4: any;
        pen: string;
        strokeThickness: number;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        drawShadow(context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private addToContext;
        createSvgElement(svgdoc: any): any;
    }
}
declare module "Drawing/Border3D" {
    /**
    * @class  Represents a 3D border.
    */
    export class Border3D {
        /**
        * Initializes a new instance of the Border3D class.
        * @constructor
        * @param {Rect} rect A Rect instance containing the border coordinates.
        */
        constructor(rect: any);
        rect: any;
        transform: Matrix;
        type: any;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "Drawing/Matrix";
}
declare module "Drawing/Vector" {
    /**
    * @class Represents displacement in 2D space.
    */
    export class Vector {
        static fromPoints(point1: any, point2: any): Vector;
        static dot(vector1: any, vector2: any): number;
        static multiplyScalar(vector: any, value: any): Vector;
        static divideScalar(vector: any, value: any): Vector;
        static add(vector1: any, vector2: any): Vector;
        static sub(vector1: any, vector2: any): Vector;
        /**
        * Initializes a new instance of the Vector class with the specified X and Y coordinates.
        * @constructor
        * @param {Number} x The X-coordinate of the Vector.
        * @param {Number} y The Y-coordinate of the Vector.
        */
        constructor(x: number, y: number);
        /**
        * The x-coordinate of the vector.
        */
        x: number;
        /**
        * The y-coordinate of the vector.
        */
        y: number;
        type: any;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        length(): number;
        lengthSquared(): number;
        negate(): Vector;
        normalize(): Vector;
        toPoint(): Point;
    }
    import { Point } from "Drawing/Point";
}
declare module "Drawing/CardinalSpline" {
    export class CardinalSpline {
        constructor(points: any, from: any, to: any);
        splinePoints: any[];
        /**
        * A pen defining the stroke of the curve.
        */
        pen: string;
        strokeThickness: number;
        symmetricPoint(point: any, center: any): Point;
        CatmullRomToBezier(p: any, alpha: any): any[];
        /**
        * For internal use only.
        * @private
        */
        private draw;
        drawShadow(context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private addToContext;
        createSvgElement(svgdoc: any): any;
    }
    import { Point } from "Drawing/Point";
}
declare module "Drawing/Circle" {
    export class Circle {
        static fromPoints(points: any): Circle;
        static fromThreePoints(p1: any, p2: any, p3: any): Circle;
        static fromTwoPoints(p1: any, p2: any): Circle;
        constructor(x: any, y: any, r: any);
        x: any;
        y: any;
        r: any;
    }
}
declare module "Drawing/ComponentBase" {
    /**
    * @class A base class for components in CompositeNode visual tree.
    */
    export class ComponentBase {
        _visibility: number;
        set visibility(arg: number);
        /**
        * Gets or sets the visibility of this component.
        * @type {Visibility}
        * @summary A member of the Visibility enumeration.
        */
        get visibility(): number;
    }
}
declare module "Drawing/Component" {
    /**
    * @class Represents components in CompositeNode visual tree.
    * @augments ComponentBase
    */
    export class Component extends ComponentBase {
        arrange(x: any, y: any, w: any, h: any): void;
        x: any;
        y: any;
        actualWidth: any;
        actualHeight: any;
        effectiveMeasuredWidth(): any;
        effectiveMeasuredHeight(): any;
        add(value1: any, value2: any): any;
        max(value1: any, value2: any): any;
        hitTest(point: any): Component;
        createSvgElement(svgdoc: any): any;
    }
    import { ComponentBase } from "Drawing/ComponentBase";
}
declare module "Drawing/PathParser" {
    export class PathParser {
        static parse(commands: any, renderer: any): void;
    }
}
declare module "Drawing/Path" {
    /**
    * @class  Represents a path.
    */
    export class Path {
        static fromPoints(points: any): Path;
        /**
        * Initializes a new instance of the Path class.
        * @constructor
        * @param {String} [pathString] A string representing the path figures.
        */
        constructor(pathString?: string);
        shapeImpl: any;
        builder: any[];
        path: string;
        _brush: any;
        _pen: any;
        _text: string;
        positionX: number;
        positionY: number;
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        strokeThickness: number;
        lineJoin: string;
        transform: Matrix;
        svgPath: string;
        commands: string[];
        /**
        * For internal use only.
        * @private
        */
        private setBounds;
        bounds: any;
        /**
        * Begins a path or resets the current path.
        */
        init(): void;
        /**
        * Creates a Path object identical to the current object.
        * @returns {Path} The newly created Path object.
        */
        clone(): Path;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * Gets a value indicating whether this Path is empty.
        * @returns {Boolean} true if the path does not contain any figures; otherwise, false.
        */
        empty(): boolean;
        /**
        * For internal use only.
        * @private
        */
        private parse;
        /**
        * For internal use only.
        * @private
        */
        private addToContext;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        drawShadow(context: any): void;
        /**
        * Ends the path definition.
        */
        done(): void;
        /**
        * Moves the path to the specified location.
        * @param {Number} x The x-coordinate of the point.
        * @param {Number} y The y-coordinate of the point.
        */
        moveTo(x: number, y: number): void;
        /**
        * Draws a line from the current point to the specified location.
        * @param {Number} x The x-coordinate of the point.
        * @param {Number} y The y-coordinate of the point.
        */
        lineTo(x: number, y: number): void;
        /**
        * Draws a cubic bezier curve.
        * @param {Number} x1 The x-coordinate of the first bezier control point.
        * @param {Number} y1 The y-coordinate of the first bezier control point.
        * @param {Number} x2 The x-coordinate of the second bezier control point.
        * @param {Number} y2 The y-coordinate of the second bezier control point.
        * @param {Number} x3 The x-coordinate of the ending point.
        * @param {Number} y3 The y-coordinate of the ending point.
        */
        bezierTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        /**
        * Draws an arc.
        * @param {Number} x The x-coordinate of the center of the circle.
        * @param {Number} y The y-coordinate of the center of the circle.
        * @param {Number} radius The radius of the circle
        * @param {Number} startAngle The starting angle in radians.
        * @param {Number} endAngle The ending angle in radians.
        * @param {Boolean} anticlockwise Specifies whether the drawing should be counterclockwise or clockwise.
        */
        arcTo(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;
        /**
        * Draws a quadratic bezier curve.
        * @param {Number} x1 The x-coordinate of the bezier control point.
        * @param {Number} y1 The y-coordinate of the bezier control point.
        * @param {Number} x The x-coordinate of the ending point.
        * @param {Number} y The y-coordinate of the ending point.
        */
        quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
        addLine(p1: any, p2: any): void;
        /**
        * Adds a rectangle figure to the path.
        * @param {Number} x The x-coordinate of the rectangle.
        * @param {Number} y The y-coordinate of the rectangle.
        * @param {Number} width The width of the rectangle.
        * @param {Number} height The height of the rectangle.
        */
        addRect(x: number, y: number, width: number, height: number): void;
        /**
        * Adds a round rectangle figure to the path.
        * For internal use only.
        * @private
        */
        private addRoundRect;
        roundRect(x1: any, y1: any, x2: any, y2: any, radius: any): void;
        /**
        * Adds an ellipse figure to the path.
        * @param {Number} x The x-coordinate of the center of the ellipse.
        * @param {Number} y The y-coordinate of the center of the ellipse.
        * @param {Number} width The width of the ellipse.
        * @param {Number} height The height of the ellipse.
        */
        addEllipse(x: number, y: number, width: number, height: number): void;
        /**
        * Closes the path.
        */
        close(): void;
        set brush(arg: any);
        /**
        * Gets or sets the brush used to fill a closed path.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        set pen(arg: any);
        /**
        * Gets or sets the pen used to draw the path.
        * @type {Object}
        * @summary A color string.
        */
        get pen(): any;
        set text(arg: string);
        /**
        * Gets or sets the text displayed inside this path.
        * @type {String}
        * @summary A string containing path's text.
        */
        get text(): string;
        /**
        * For internal use only.
        * @private
        */
        private create;
        /**
        * Gets the bounding rect of the path.
        * @returns {Rect} The bounding rect.
        */
        getBounds(): Rect;
        /**
        * For internal use only.
        * @private
        */
        private expandRect;
        updatePosition(): void;
        updatePathDefinition(): void;
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "Drawing/Matrix";
    import { Rect } from "Drawing/Rect";
}
declare module "Drawing/Container" {
    /**
    * @class Represents container components in drawing tree.
    * @augments Component
    */
    export class Container extends Component {
        constructor(x: any, y: any);
        content: any[];
        draw(context: any, drawShadows: any, shadowsOnly: any): void;
        invalidParent: any;
        drawChildren(context: any, drawShadows: any, shadowsOnly: any): void;
        removedFromDiagram(): void;
        setParentComponent(value: any): void;
        parentComponent: any;
        invalidate(force: any): void;
    }
    import { Component } from "Drawing/Component";
}
declare module "Drawing/Ellipse" {
    /**
    * @class  Represents an Ellipse.
    */
    export class Ellipse {
        /**
        * Initializes a new instance of the Ellipse class.
        * @constructor
        * @param {Number} x The X-coordinate of the top left corner of the Ellipse.
        * @param {Number} y The Y-coordinate of the top left corner of the Ellipse.
        * @param {Number} width The width of the Ellipse.
        * @param {Number} height The height of the Ellipse.
        */
        constructor(x: number, y: number, width: number, height: number, ...args: any[]);
        _x: number;
        _y: number;
        _width: number;
        _height: number;
        transform: Matrix;
        pen: string;
        brush: string;
        set x(arg: number);
        /**
        * Gets or sets the x-coordinate of the upper-left corner of the ellipse.
        * @type {Number}
        * @summary The x-coordinate of the upper-left corner of the ellipse.
        */
        get x(): number;
        set y(arg: number);
        /**
        * Gets or sets the y-coordinate of the upper-left corner of the ellipse.
        * @type {Number}
        * @summary The x-coordinate of the upper-left corner of the ellipse.
        */
        get y(): number;
        set width(arg: number);
        /**
        * Gets or sets the width of the ellipse.
        * @type {Number}
        * @summary The width of the ellipse.
        */
        get width(): number;
        set height(arg: number);
        /**
        * Gets or sets the height of the ellipse.
        * @type {Number}
        * @summary The height of the ellipse.
        */
        get height(): number;
        /**
        * Creates a Ellipse object identical to the current object.
        * @returns {Ellipse} The newly created Ellipse object.
        */
        clone(): Ellipse;
        toJson(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        /**
        * For internal use only.
        * @private
        */
        private draw;
        /**
        * For internal use only.
        * @private
        */
        private getBounds;
        toString(): string;
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "Drawing/Matrix";
}
declare module "Drawing/Font" {
    /**
    * @class Represents a font.
    */
    export class Font {
        /**
         * Returns a Font from a JSON object or string describing this font.
         * @returns {Font} The font object.
         */
        static fromObject(obj: any): Font;
        /**
        * @private
        */
        private static copy;
        /**
        * @private
        */
        private static get defaultFont();
        /**
        * Initializes a new instance of the Font class with the specified attributes.
        * @constructor
        * @param {String} name The font name.
        * @param {Number} [size] The font size.
        * @param {Boolean | FontStyle} [bold] true if this font is bold, or false otherwise.
        * @param {Boolean} [italic] true if this font is italic, or false otherwise.
        * @param {Boolean} [underline] true if this font is underlined, or false otherwise.
        */
        constructor(name: string, size?: number, bold?: boolean | FontStyle, italic?: boolean, underline?: boolean);
        _name: string;
        _size: number;
        _fontStyle: number | boolean;
        set fontStyle(arg: number);
        /**
         * Gets or sets the style of this font.
         * @type {FontStyle}
         * @summary A member of the FontStyle enumeration.
         */
        get fontStyle(): number;
        set name(arg: string);
        /**
         * Gets or sets the name of this font.
         * @type {String}
         * @summary A string containing font name.
         */
        get name(): string;
        set size(arg: number);
        /**
         * Gets or sets the size of this font.
         * @type {Number}
         * @summary The font size.
         */
        get size(): number;
        /**
        * Gets whether the font is bold.
        * @type {Boolean}
        * @summary true if Bold flag is set in fontStyle, ot false otherwise.
        */
        get bold(): boolean;
        /**
        * Gets whether the font is italic.
        * @type {Boolean}
        * @summary true if Italic flag is set in fontStyle, ot false otherwise.
        */
        get italic(): boolean;
        /**
        * Gets whether the font is underlined.
        * @type {Boolean}
        * @summary true if Underline flag is set in fontStyle, ot false otherwise.
        */
        get underline(): boolean;
        toJson(): {
            name: string;
            size: number;
            bold: boolean;
            italic: boolean;
            underline: boolean;
        };
        toString(scale: any): string;
        /**
         * Returns a JSON object describing this font.
         * @returns {Object} The object describing this font.
         */
        toObject(): any;
        /**
         * Applies the font properties to a CanvasRenderingContext2D drawing object.
          * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
          */
        apply(context: CanvasRenderingContext2D): void;
    }
    import { FontStyle } from "Drawing/Enum";
}
declare module "Drawing/Gradient" {
    /**
    * @namespace MindFusion.Drawing
    */
    export class Gradient {
        constructor(col1: any, col2: any, ang: any);
        color1: any;
        color2: any;
        angle: any;
    }
}
declare module "Drawing/Image" {
    /**
    * @class  Represents an image.
    */
    export class Image extends ComponentBase {
        /**
        * Initializes a new instance of the Image class.
        * @constructor
        * @param {Rect} bounds The bounds of the image.
        */
        constructor(bounds: Rect);
        loaded: boolean;
        /**
        * The image to be displayed.
        */
        image: any;
        /**
        * The object's bounds.
        */
        bounds: Rect;
        transform: Matrix;
        clipPath: Path;
        type: any;
        svg: boolean;
        imageAlign: number;
        horizontalAlignment: number;
        verticalAlignment: number;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * For internal use only.
        * @private
        */
        private setBounds;
        rotationAngle: any;
        getBounds(): Rect;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        applyDiagramTransform(context: any, imgDocRect: any): any;
        measure(maxWidth: any, maxHeight: any): void;
        desiredWidth: number;
        desiredHeight: number;
        effectiveMeasuredWidth(): number;
        effectiveMeasuredHeight(): number;
        getImageRect(parentRect: any, imgSize: any): Rect;
        set defaultProperty(arg: any);
        get defaultProperty(): any;
        get defaultValue(): string;
        createSvgElement(svgdoc: any): any;
    }
    import { ComponentBase } from "Drawing/ComponentBase";
    import { Rect } from "Drawing/Rect";
    import { Matrix } from "Drawing/Matrix";
    import { Path } from "Drawing/Path";
}
declare module "Drawing/Line" {
    export class Line {
        constructor(x1: any, y1: any, x2: any, y2: any);
        x1: any;
        y1: any;
        x2: any;
        y2: any;
        transform: Matrix;
        _pen: string;
        strokeThickness: number;
        draw(context: any, drawShadow: any): void;
        drawShadow(context: any): void;
        setBounds(point1: any, point2: any): void;
        set pen(arg: any);
        /**
        * Gets or sets the stroke color used to draw this line.
        * @type {Object}
        * @summary A color string.
        */
        get pen(): any;
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "Drawing/Matrix";
}
declare module "Drawing/Shadow" {
    /**
    * @namespace MindFusion.Drawing
    */
    export class Shadow {
        constructor(color: any, offsetX: any, offsetY: any);
        color: any;
        offsetX: any;
        offsetY: any;
        apply(context: any): void;
        createSvgElement(svgdoc: any): any;
    }
}
declare module "Drawing/Thickness" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
    * @class Describes the thickness of a rectangular frame.
    */
    export class Thickness {
        static copy(size: any): Thickness;
        /**
        * Initializes a new instance of the Thickness class with the specified widths.
        * @constructor
        * @param {Number} left Specifies the width of the left side of the frame.
        * @param {Number} [top] Specifies the width of the top side of the frame.
        * @param {Number} [right] Specifies the width of the right side of the frame.
        * @param {Number} [bottom] Specifies the width of the bottom side of the frame.
        * @param {Boolean} [isRelative] A flag indicating whether the thickness properties are expressed as relative or absolute quantities.
        */
        constructor(left: number, top?: number, right?: number, bottom?: number, isRelative?: boolean);
        set left(arg: number);
        /**
        * Gets or sets the width of the left side of the frame.
        * @type {Number}
        * @summary The width of the left side of the frame.
        */
        get left(): number;
        set top(arg: number);
        /**
        * Gets or sets the width of the top side of the frame.
        * @type {Number}
        * @summary The width of the top side of the frame.
        */
        get top(): number;
        set right(arg: number);
        /**
        * Gets or sets the width of the right side of the frame.
        * @type {Number}
        * @summary The width of the right side of the frame.
        */
        get right(): number;
        set bottom(arg: number);
        /**
        * Gets or sets the width of the bottom side of the frame.
        * @type {Number}
        * @summary The width of the bottom side of the frame.
        */
        get bottom(): number;
        set isRelative(arg: boolean);
        /**
        * Gets or sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.
        * @type {Boolean}
        * @summary true if the thickness is relative, or false otherwise.
        */
        get isRelative(): boolean;
        /**
        * Applies the current thickness to the specified rectangle by deflating the rectangle.
        * @param {Rect} rect The rectangle to deflate.
        */
        applyTo(rect: any): void;
        /**
        * Applies the current thickness to the specified rectangle by inflating the rectangle.
        * @param {Rect} rect The rectangle to inflate.
        */
        addToRect(rect: any): void;
        add(thickness: any): Thickness;
        /**
        * Converts the current thickness to absolute value relative to the specified size.
        */
        toAbsolute(size: any): Thickness;
        toJson(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            isRelative: boolean;
        };
        empty(): boolean;
        _left: number;
        _right: number;
        _top: number;
        _bottom: number;
        /**
        * @private
        */
        private width;
        /**
        * @private
        */
        private height;
        _isRelative: boolean;
    }
}
declare module "Drawing/Text" {
    /**
    * @class  Represents a text container.
    */
    export class Text extends ComponentBase {
        /**
        * For internal use only.
        * @private
        */
        private static wrapText;
        /**
        * For internal use only.
        * @private
        */
        private static wrapLine;
        /**
        * For internal use only.
        * @private
        */
        private static getMinWidth;
        /**
        * Initializes a new instance of the Text class.
        * @constructor
        * @param {String} text The text to be displayed in the container.
        * @param {Rect} bounds The bounds of the container.
        */
        constructor(text: string, bounds: Rect);
        set text(arg: string);
        /**
        * Gets or sets the text to render.
        * @type {String}
        * @summary The text.
        */
        get text(): string;
        bounds: Rect;
        x: number;
        y: number;
        width: number;
        height: number;
        clipPath: Path;
        textAlignment: number;
        lineAlignment: number;
        baseline: string;
        padding: Thickness;
        type: any;
        pen: string;
        lines: any;
        set font(arg: Font);
        /**
        * Gets or sets the font used to render text.
        * @type {Font}
        * @summary The font of the text.
        */
        get font(): Font;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * Creates a Text object identical to the current object.
        * @returns {Text} The newly created Text object.
        */
        clone(): Text;
        /**
        * For internal use only.
        * @private
        */
        private getLines;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        scale: any;
        lineHeight: number;
        layoutRect: Rect;
        /**
        * For internal use only.
        * @private
        */
        private drawLines;
        /**
        * For internal use only.
        * @private
        */
        private getRotatedBounds;
        /**
        * Sets a value indicating the bounding rectangle of the text container.
        * @param {Rect} bounds The bounding rectangle.
        * @param {Number} [angle] The rotation angle to be applied to the bounding rectangle.
        */
        setBounds(bounds: Rect, angle?: number): void;
        _rotationAngle: number;
        /**
        * Gets a value indicating the bounding rectangle of the text container.
        * @returns {Rect} The bounding rectangle.
        */
        getBounds(): Rect;
        /**
        * Gets a value indicating the rotation of the text container.
        * @type {Number}
        * @summary The angle.
        */
        get rotationAngle(): number;
        _font: any;
        _text: any;
        rotationTransform(rect: any): Matrix;
        drawStyledText(context: any, sequences: any, layoutRect: any, halign: any, valign: any): void;
        parseStyledText(text: any): any[];
        cachedText: any;
        cachedSequences: any[];
        collectSequences(node: any, sequences: any, currentFormat: any): void;
        createSequence(text: any, format: any): {
            text: any;
            italic: boolean;
            bold: boolean;
            underline: any;
            scriptOffset: any;
            link: any;
            color: any;
        };
        addToFormat(specifier: any, format: any): void;
        removeFromFormat(specifier: any, format: any): void;
        drawUnderline(context: any, x: any, y: any, length: any): void;
        getStyledLines(context: any, sequences: any, width: any): ({
            remaining: any;
            advance: number;
            text: any;
            dx: any;
            dy: any;
        } | {
            remaining: string;
            advance: any;
            text: any;
            dx: any;
            dy: any;
        })[][];
        findWhitespace(text: any, start: any): any;
        fitInLine(context: any, text: any, x: any, y: any, maxX: any, lineStart: any): {
            remaining: any;
            advance: number;
            text: any;
            dx: any;
            dy: any;
        } | {
            remaining: string;
            advance: any;
            text: any;
            dx: any;
            dy: any;
        };
        fitInLineWrapByChar(context: any, text: any, x: any, y: any, maxX: any, lineStart: any): {
            remaining: any;
            advance: number;
            text: any;
            dx: any;
            dy: any;
        } | {
            remaining: string;
            advance: any;
            text: any;
            dx: any;
            dy: any;
        };
        applyFormat(context: any, sequence: any): void;
        measurePlainText(context: any, maxWidth: any): Size;
        measureStyledText(context: any, maxWidth: any): Size;
        set defaultProperty(arg: string);
        get defaultProperty(): string;
        get defaultValue(): string;
        measure(maxWidth: any, maxHeight: any): Size;
        desiredWidth: any;
        desiredHeight: any;
        effectiveMeasuredWidth(): any;
        effectiveMeasuredHeight(): any;
        createSvgElement(svgdoc: any): any;
    }
    export namespace Text {
        const LineBreak: {};
    }
    import { ComponentBase } from "Drawing/ComponentBase";
    import { Rect } from "Drawing/Rect";
    import { Path } from "Drawing/Path";
    import { Thickness } from "Drawing/Thickness";
    import { Font } from "Drawing/Font";
    import { Matrix } from "Drawing/Matrix";
    import { Size } from "Drawing/Size";
}
declare module "Drawing/Video" {
    /**
    * @class A component that displays video stream.
    */
    export class Video {
        /**
        * Initializes a new instance of the Video class.
        * @constructor
        * @param {Rect} bounds The bounds of the Video.
        */
        constructor(bounds: Rect);
        loaded: boolean;
        video: HTMLVideoElement;
        /**
        * The object's bounds.
        */
        bounds: Rect;
        transform: Matrix;
        type: any;
        _mediaLocation: string;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        /**
        * Creates a Video object identical to the current object.
        * @returns {Video}
        */
        clone(): Video;
        /**
        * For internal use only.
        * @private
        */
        private setBounds;
        getBounds(): Rect;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        set mediaLocation(arg: string);
        /**
        * Gets or sets URL of the video stream displayed in this component.
        * @type {String}
        * @summary A URL string that identifies the video to play.
        */
        get mediaLocation(): string;
        /**
         * Starts playing the video stream.
         */
        play(): boolean;
        /**
         * Detects if video is playing.
         */
        isPlaying(): boolean;
        /**
         * Pauses the video.
         */
        pause(): void;
        set defaultProperty(arg: string);
        get defaultProperty(): string;
        get defaultValue(): string;
        setParentComponent(value: any): void;
        parentComponent: any;
        invalidate(force: any): void;
        removedFromDiagram(): void;
    }
    import { Rect } from "Drawing/Rect";
    import { Matrix } from "Drawing/Matrix";
}
declare module "Drawing/Pen" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
     * Copyright (c) 2015-2021, MindFusion LLC - Bulgaria.
     *
     * This source code is provided to you as part of the MindFusion software components
     * package you have purchased. You may use the source code to trace and/or fix
     * problems or customize the library as needed for your application. To get permission
     * to use the source code in any other way, please contact us at support@mindfusion.eu.
     */
    import { Color } from "Drawing/Color";
    import { Brush } from "Drawing/Brush";
    import { DashStyle, LineJoin } from "Drawing/Enum";
    /**
    * @class Represents a pen.
    * @property {Color} color Gets or sets the color of this Pen.
    * @property {Number} width Gets or sets the width of this Pen.
    * @property {DashStyle} dashStyle Gets or sets the dash style of this Pen.
    */
    export class Pen {
        /**
         * Initializes a new instance of the Pen class.
         * @param {Brush | Color | string} brush The color of this pen.
         * @param {Number} [width] The width of this pen.
         */
        constructor(brush: Brush | Color | string, width?: number);
        /**
         * Applies the pen properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D): void;
        /**
         * Returns a string representation of this pen.
         * @returns {String} The string representation of this pen.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toString(): string;
        /**
         * Returns a Pen from a string describing this pen.
         * @returns {Pen} The pen object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Pen;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        private m_color;
        /**
         * Gets the color of this pen.
         * @returns {Color} The color of this pen.
         */
        get color(): Color;
        /**
         * Sets the  color of this pen.
         * @param {Color} value The color of this pen.
         */
        set color(value: Color);
        private m_width;
        /**
         * Gets the width of this pen.
         * @returns {Number} The width of this pen.
         */
        get width(): number;
        /**
         * Sets the width of this pen.
         * @param {Number} value The width of this pen.
         */
        set width(value: number);
        private m_dashStyle;
        /**
         * Gets the dash style of this pen.
         * @returns {DashStyle} The dash style of this pen.
         */
        get dashStyle(): DashStyle;
        /**
         * Sets the line join of this pen.
         * @param {DashStyle} value The line join of this pen.
         */
        set dashStyle(value: DashStyle);
        private m_lineJoin;
        /**
         * Gets the line join of this pen.
         * @returns {LineJoin} The line join of this pen.
         */
        get lineJoin(): LineJoin;
        /**
         * Sets the line join of this pen.
         * @param {LineJoin} value The line join of this pen.
         */
        set lineJoin(value: LineJoin);
    }
}
declare module "Drawing/Graphics" {
    /**
    * @namespace MindFusion.Drawing
    */
    /**
     * Copyright (c) 2015-2021, MindFusion LLC - Bulgaria.
     *
     * This source code is provided to you as part of the MindFusion software components
     * package you have purchased. You may use the source code to trace and/or fix
     * problems or customize the library as needed for your application. To get permission
     * to use the source code in any other way, please contact us at support@mindfusion.eu.
     */
    import { Rect } from "Drawing/Rect";
    import { Point } from "Drawing/Point";
    import { Matrix } from "Drawing/Matrix";
    import { Size } from "Drawing/Size";
    import { Pen } from "Drawing/Pen";
    import { Brush } from "Drawing/Brush";
    import { Font } from "Drawing/Font";
    import { ImageAlign, StringFormat } from "Drawing/Enum";
    /**
    * @class Contains helper functions for drawing on a Canvas element.
    * @property {CanvasRenderingContext2D} context Gets or sets the underlying CanvasRenderingContext2D drawing object.
    */
    export class Graphics {
        /**
         * Initializes a new instance of the Graphics class.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        constructor(context: CanvasRenderingContext2D);
        /**
         * Clears the canvas.
         */
        clear(): void;
        /**
         * Starts a new figure.
         * @param {Pen} [pen] The pen to stroke the figure with.
         * @param {Brush} [brush] The brush to fill the figure with.
         * @param {Rect} [bounds] The bounds to which the brush should be applied.
         */
        beginFigure(pen?: Pen, brush?: Brush, bounds?: Rect): void;
        /**
         * Closes the current figure.
         * @param {Pen} [pen] The pen to stroke the figure with.
         * @param {Brush} [brush] The brush to fill the figure with.
         * @param {Rect} [bounds] The bounds to which the brush should be applied.
         */
        closeFigure(pen?: Pen, brush?: Brush, bounds?: Rect): void;
        /**
         * Draws a straight line.
         * @param {Pen} pen The pen to draw the line with.
         * @param {Point} point1 The starting point of the line.
         * @param {Point} point2 The ending point of the line.
         */
        drawLine(pen: Pen, point1: Point, point2: Point): any;
        /**
        * Draws a straight line.
        * @param {Pen} pen The pen to draw the line with.
        * @param {Number} x1 The X coordinate of the starting point of the line.
        * @param {Number} y1 The Y coordinate of the starting point of the line.
        * @param {Number} x2 The X coordinate of the ending point of the line.
        * @param {Number} y2 The Y coordinate of the ending point of the line.
        */
        drawLine(pen: Pen, x1: number, y1: number, x2: number, y2: number): any;
        /**
         * Draws a series of straight lines.
         * @param {Pen} pen The pen to draw the lines with.
         * @param {Point[]} points The points of the lines to draw.
         */
        drawLines(pen: Pen, points: Point[]): void;
        /**
         * Draws a polygon.
         * @param {Pen} pen The pen to draw the polygon with.
         * @param {Point[]} points The points describing the polygon.
         */
        drawPolygon(pen: Pen, points: Point[]): void;
        /**
         * Fills a polygon.
         * @param {Brush} brush The brush to fill the polygon with.
         * @param {Point[]} points The points describing the polygon.
         */
        fillPolygon(brush: Brush, points: Point[]): void;
        /**
         * Draws a string.
         * @param {String} text The string to draw.
         * @param {Font} font The font to use.
         * @param {Brush} brush The brush to use.
         * @param {Point|Rect} location The position at which to draw.
         * @param {StringFormat} [format] The format to use.
         */
        drawString(text: string, font: Font, brush: Brush, location: Point | Rect, format?: StringFormat): void;
        private drawUnderline;
        /**
        * Draws a spline curve.
         * @param {Pen} pen The pen to stroke the curve with.
         * @param {Point[]} points The points describing the curve.
        */
        drawCurve(pen: Pen, points: Point[]): void;
        /**
         * Draws a rectangle.
         * @param {Pen} pen The pen to stroke the rectangle with.
         * @param {Rect} rect The rectangle to draw.
         */
        drawRectangle(pen: Pen, rect: Rect): void;
        /**
         * Fills a rectangle.
         * @param {Brush} brush The pen to fill the rectangle with.
         * @param {Rect} rect The rectangle to fill.
         */
        fillRectangle(brush: Brush, rect: Rect): void;
        /**
         * Draws an ellipse.
         * @param {Pen} pen The pen to stroke the ellipse with.
         * @param {Rect} rect The rectangle describing the ellipse.
         */
        drawEllipse(pen: Pen, rect: Rect): void;
        /**
         * Fills an ellipse.
         * @param {Brush} brush The brush to fill the ellipse with.
         * @param {Rect} rect The rectangle describing the ellipse.
         */
        fillEllipse(brush: Brush, rect: Rect): void;
        /**
         * Draws a pie.
         * @param {Pen} pen The pen to stroke the pie with.
         * @param {Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        drawPie(pen: Pen, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Fills a pie.
         * @param {Brush} brush The brush to fill the pie with.
         * @param {Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        fillPie(brush: Brush, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Draws an image.
         * @param {HTMLImageElement} image The image to draw.
         * @param {Rect} rect The bounds of the image.
         * @param {ImageAlign} align The align to use.
         */
        drawImage(image: HTMLImageElement, rect: Rect, align: ImageAlign): void;
        /**
         * Checks if the given point is within the bounds of the given polygon.
         * @param {Point} point The point to check.
         * @param {Point[]} poly The points describing the polygon.
         * @returns {boolean] True if the point lies within polygon bounds, otherwise false.
         */
        pointInPoly(point: Point, poly: Point[]): boolean;
        /**
         * Checks if the given point is within the bounds of the given pie.
         * @param {Point} point The point to check.
         * @param {Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie is a doughnut, otherwise false.
         * @returns {Boolean} True if the point lies within pie bounds, otherwise false.
         */
        pointInPie(point: Point, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): boolean;
        /**
         * Saves the current graphics state.
         */
        save(): void;
        /**
         * Restores to a previously saved graphics state.
         */
        restore(): void;
        /**
         * Sets the clip rectangle.
         * @param {Rect} rect The clip rectangle
         */
        clip(rect: Rect): void;
        /**
         * Sets a translate transform.
         * @param {Number} x The distance to translate along the x-axis.
         * @param {Number} y The distance to translate along the y-axis.
         */
        translate(x: number, y: number): void;
        /**
         * Sets a transform.
         * @param {Matrix} transform The transform matrix.
         */
        setTransform(transform: Matrix): void;
        /**
         * Gets the size of the specified string.
         * @param {String} text The string to measure.
         * @param {Font} font The font to use.
         * @param {Number} [width] The maximum width.
         * @returns {Size} The size of the given string when drawn with the given font.
         */
        measureString(text: string, font: Font, width?: number): Size;
        private m_context;
        /**
         * Gets the underlying CanvasRenderingContext2D object.
         * @returns {CanvasRenderingContext2D} The underlying CanvasRenderingContext2D object.
         */
        get context(): CanvasRenderingContext2D;
        /**
         * Sets the underlying CanvasRenderingContext2D object.
         * @param {CanvasRenderingContext2D} value The underlying CanvasRenderingContext2D object.
         */
        set context(value: CanvasRenderingContext2D);
    }
}
declare module "@mindfusion/drawing" {
    export { Arc } from "Drawing/Arc";
    export { Bezier } from "Drawing/Bezier";
    export { Border3D } from "Drawing/Border3D";
    export { CardinalSpline } from "Drawing/CardinalSpline";
    export { Circle } from "Drawing/Circle";
    export { Component } from "Drawing/Component";
    export { ComponentBase } from "Drawing/ComponentBase";
    export { Container } from "Drawing/Container";
    export { DistanceToSegment } from "Drawing/DistanceToSegment";
    export { DrawingUtils } from "Drawing/DrawingUtils";
    export { Ellipse } from "Drawing/Ellipse";
    export { Visibility, LayoutAlignment, DashStyle, ImageAlign, FontStyle, LineJoin, StringAlignment, StringFormat } from "Drawing/Enum";
    export { Font } from "Drawing/Font";
    export { Geometry } from "Drawing/Geometry";
    export { Gradient } from "Drawing/Gradient";
    export { GraphicsUnit } from "Drawing/GraphicsUnit";
    export { Image } from "Drawing/Image";
    export { Line } from "Drawing/Line";
    export { Matrix } from "Drawing/Matrix";
    export { Path } from "Drawing/Path";
    export { PathParser } from "Drawing/PathParser";
    export { Point } from "Drawing/Point";
    export { Rect } from "Drawing/Rect";
    export { Shadow } from "Drawing/Shadow";
    export { Size } from "Drawing/Size";
    export { Text } from "Drawing/Text";
    export { Thickness } from "Drawing/Thickness";
    export { Vector } from "Drawing/Vector";
    export { Video } from "Drawing/Video";
    export { Brush } from "Drawing/Brush";
    export { Pen } from "Drawing/Pen";
    export { Color } from "Drawing/Color";
    export { Graphics } from "Drawing/Graphics";
    export { LinearGradientBrush } from "Drawing/Brush";
}

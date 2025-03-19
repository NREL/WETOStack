/// <reference types="../../@mindfusion/drawing" />
/// <reference types="../../@mindfusion/controls" />
/// <reference types="../../@mindfusion/graphs" />
/// <reference types="../../@mindfusion/collections" />
declare module "Diagramming/Command" {
    /**
    * @namespace MindFusion.Diagramming
    */
    /**
    * @class Represents an action that changes the diagram and whose effects can be undone.
    */
    export class Command {
        /**
        * Initializes a new instance of the Command class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        */
        constructor(diagram: any);
        diagram: any;
        /**
        * Carries out an action that changes the diagram or a diagram item.
        */
        execute(): void;
        /**
        * Undoes an action, restoring the diagram to the state it was in before carrying out the action.
        */
        undo(): void;
        /**
        * Repeats an action that has been undone.
        */
        redo(): void;
    }
}
declare module "Diagramming/AddItemCommand" {
    /**
    * @class Implements creation of new diagram items.
    * @augments Command
    */
    export class AddItemCommand extends Command {
        /**
        * Initializes a new instance of the AddItemCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {DiagramItem} item A new DiagramItem that should be added to the Diagram..
        */
        constructor(diagram: any, item: any);
        item: any;
        name: string;
    }
    export default AddItemCommand;
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/Enum" {
    /**
     * Indicates how GridPanel determines dimensions of its rows and columns.
     */
    export type LengthType = number;
    export namespace LengthType {
        const Auto: number;
        const Relative: number;
    }
    /**
     * *
     */
    export type Cursors = number;
    export namespace Cursors {
        const TopLeft: number;
        const TopCenter: number;
        const TopRight: number;
        const MiddleLeft: number;
        const MiddleCenter: number;
        const MiddleRight: number;
        const BottomLeft: number;
        const BottomCenter: number;
        const BottomRight: number;
        const Rotate: number;
        const Pointer: number;
        const Default: number;
    }
    export const ImageAlign: typeof d_ImageAlign;
    /**
     * Specifies the alignment of text relative to its layout rectangle.
     */
    export type Alignment = number;
    export namespace Alignment {
        const Near: number;
        const Center: number;
        const Far: number;
    }
    /**
     * Specifies the style of the cells' frame lines.
     */
    export type CellFrameStyle = number;
    export namespace CellFrameStyle {
        const None: number;
        const Simple: number;
        const System3D: number;
    }
    /**
     * Identifies the distinct selection handles of a node.
     */
    export type AdjustmentHandles = number;
    export namespace AdjustmentHandles {
        const None_1: number;
        export { None_1 as None };
        export const ResizeTopLeft: number;
        export const ResizeTopRight: number;
        export const ResizeBottomRight: number;
        export const ResizeBottomLeft: number;
        export const ResizeTopCenter: number;
        export const ResizeMiddleRight: number;
        export const ResizeBottomCenter: number;
        export const ResizeMiddleLeft: number;
        export const Move: number;
        const Rotate_1: number;
        export { Rotate_1 as Rotate };
        export const All: number;
    }
    /**
     * Defines values that specify how the component responds to actions performed by the user.
     */
    export type Behavior = number;
    export namespace Behavior {
        const Modify: number;
        const DrawShapes: number;
        const DrawLinks: number;
        const LinkShapes: number;
        const LinkTables: number;
        const DrawTables: number;
        const DrawControls: number;
        const LinkControls: number;
        const DoNothing: number;
        const Custom: number;
        const DrawContainers: number;
        const LinkContainers: number;
        const Pan: number;
        const DrawTreeViews: number;
        const LinkTreeViews: number;
        const DrawSvgNodes: number;
        const LinkSvgNodes: number;
        const SelectOnly: number;
        const Magnify: number;
        const DrawFreeForms: number;
        const LinkFreeForms: number;
        const DrawFreeShapes: number;
        const LinkFreeShapes: number;
        const MoveNodes: number;
    }
    /**
     * Specifies the possible actions a user can carry out on diagram items.
     */
    export type Action = number;
    export namespace Action {
        const None_2: number;
        export { None_2 as None };
        export const Create: number;
        const Modify_1: number;
        export { Modify_1 as Modify };
        export const Split: number;
    }
    /**
     * Specifies whether links should connect to a node or its rows.
     */
    export type ConnectionStyle = number;
    export namespace ConnectionStyle {
        const Node: number;
        const Rows: number;
    }
    /**
     * Specifies the type of action performed when the user presses the DEL key.
     */
    export type DelKeyAction = number;
    export namespace DelKeyAction {
        const None_3: number;
        export { None_3 as None };
        export const DeleteActiveItem: number;
        export const DeleteSelectedItems: number;
    }
    /**
     * Specifies the visual style of anchor point marks.
     */
    export type MarkStyle = number;
    export namespace MarkStyle {
        const None_4: number;
        export { None_4 as None };
        export const Cross: number;
        export const X: number;
        export const Circle: number;
        export const Rectangle: number;
    }
    /**
     * Specifies when anchors points should be displayed.
     */
    export type ShowAnchors = number;
    export namespace ShowAnchors {
        export const Always: number;
        export const Never: number;
        const Auto_1: number;
        export { Auto_1 as Auto };
        export const Selected: number;
    }
    /**
     * Defines values that specify the visual style of the alignment grid.
     */
    export type GridStyle = number;
    export namespace GridStyle {
        const Points: number;
        const Lines: number;
        const Crosses: number;
    }
    /**
     * Specifies how table columns' width is set.
     */
    export type ColumnStyle = number;
    export namespace ColumnStyle {
        const FixedWidth: number;
        const AutoWidth: number;
    }
    /**
     * Specifies available styles for the segments of links.
     */
    export type LinkShape = number;
    export namespace LinkShape {
        const Bezier: number;
        const Polyline: number;
        const Cascading: number;
        const Spline: number;
    }
    /**
     * Specifies how the link labels are positioned.
     */
    export type RelativeToLink = number;
    export namespace RelativeToLink {
        const Segment: number;
        const ControlPoint: number;
        const LinkLength: number;
    }
    /**
     * Specifies how the ResizeToFitText method should resize a node.
     */
    export type FitSize = number;
    export namespace FitSize {
        const KeepWidth: number;
        const KeepHeight: number;
        const KeepRatio: number;
    }
    /**
     * Specifies the rendering phase during which an effect application is requested.
     */
    export type EffectPhase = number;
    export namespace EffectPhase {
        const BeforeFill: number;
        const AfterFill: number;
        const AfterOutline: number;
    }
    /**
     * Specifies the type of a GlassEffect node effect.
     */
    export type GlassEffectType = number;
    export namespace GlassEffectType {
        const Type1: number;
        const Type2: number;
        const Type3: number;
        const Type4: number;
    }
    /**
     * Enumerates possible visual styles for frames and handles drawn around selected nodes.
     */
    export type HandlesStyle = number;
    export namespace HandlesStyle {
        export const Invisible: number;
        export const SquareHandles: number;
        export const DashFrame: number;
        export const HatchFrame: number;
        export const HatchHandles: number;
        export const HatchHandles2: number;
        export const HatchHandles3: number;
        export const MoveOnly: number;
        export const EasyMove: number;
        export const SquareHandles2: number;
        const Custom_1: number;
        export { Custom_1 as Custom };
        export const InvisibleMove: number;
        export const RoundAndSquare: number;
        export const RoundAndSquare2: number;
    }
    /**
     * Defines values that indicate how to render link intersection points.
     */
    export type LinkCrossings = number;
    export namespace LinkCrossings {
        const Straight: number;
        const Arcs: number;
        const Cut: number;
    }
    /**
     * Specifies how the user can start modifying an item.
     */
    export type ModificationStart = number;
    export namespace ModificationStart {
        const SelectedOnly: number;
        const AutoHandles: number;
    }
    /**
     * Defines in which directions automatic resizing can enlarge the diagram scrollable area.
     */
    export type AutoResize = number;
    export namespace AutoResize {
        const None_5: number;
        export { None_5 as None };
        export const RightAndDown: number;
        export const AllDirections: number;
    }
    /**
     * Defines the actions that can be assigned to a modifier key such as CTRL or ALT.
     */
    export type ModifierKeyAction = number;
    export namespace ModifierKeyAction {
        const None_6: number;
        export { None_6 as None };
        const Pan_1: number;
        export { Pan_1 as Pan };
        export const Select: number;
        export const OverrideBehavior: number;
        const Magnify_1: number;
        export { Magnify_1 as Magnify };
    }
    /**
     * Specifies what actions can be associated with the middle and right mouse buttons.
     */
    export type MouseButtonActions = number;
    export namespace MouseButtonActions {
        const None_7: number;
        export { None_7 as None };
        const Pan_2: number;
        export { Pan_2 as Pan };
        export const Cancel: number;
        const Select_1: number;
        export { Select_1 as Select };
        export const Draw: number;
        const Magnify_2: number;
        export { Magnify_2 as Magnify };
    }
    /**
     * Specifies the position and alignment of links' labels.
     */
    export type LinkTextStyle = number;
    export namespace LinkTextStyle {
        const Center_1: number;
        export { Center_1 as Center };
        const Rotate_2: number;
        export { Rotate_2 as Rotate };
        export const OverLongestSegment: number;
        export const Follow: number;
        export const MiddleSegment: number;
        export const MiddleSegmentRotated: number;
    }
    /**
     * Enumerates possible shadows-drawing styles.
     */
    export type ShadowsStyle = number;
    export namespace ShadowsStyle {
        const None_8: number;
        export { None_8 as None };
        export const OneLevel: number;
        export const ZOrder: number;
    }
    /**
     * Defines the possible values for Shape property of tables and containers.
     */
    export type SimpleShape = number;
    export namespace SimpleShape {
        const Rectangle_1: number;
        export { Rectangle_1 as Rectangle };
        export const RoundedRectangle: number;
    }
    /**
     * Specifies the orientation of user interface elements.
     */
    export type Orientation = number;
    export namespace Orientation {
        const Auto_2: number;
        export { Auto_2 as Auto };
        export const Horizontal: number;
        export const Vertical: number;
    }
    /**
     * Specifies in what format to save the diagram when generating a string using the saveToString method.
     */
    export type SaveToStringFormat = number;
    export namespace SaveToStringFormat {
        const Json: number;
        const Xml: number;
    }
    /**
     * Defines Overview scaling modes.
     */
    export type ScaleMode = number;
    export namespace ScaleMode {
        const FitAll: number;
        const CombinedScales: number;
        const FixedScale: number;
    }
    /**
     * Specifies what action is triggered by the +/- buttons that are
     * displayed near expandable nodes.
     */
    export type ExpandButtonAction = number;
    export namespace ExpandButtonAction {
        const ExpandTreeBranch: number;
        const RaiseEvents: number;
    }
    /**
     * Specifies the type of action performed when the user rotates the mouse wheel.
     */
    export type MouseWheelAction = number;
    export namespace MouseWheelAction {
        const None_9: number;
        export { None_9 as None };
        export const Scroll: number;
        export const Zoom: number;
    }
    import { ImageAlign as d_ImageAlign } from "@mindfusion/drawing";
}
declare module "Diagramming/CompatConfig" {
    /**
    * @class Contains API compatibility settings.
    */
    export class CompatConfig {
        static generatePropFunctions(proto: any, uninitialized: any): void;
        static set propFunctions(arg: boolean);
        /**
         * Gets or sets whether the control should generate get/set functions
         * for properties to keep compatibility with older versions of the diagramming API.
         * @type {Boolean}
         * @summary true to generate get/set function pairs, or false otherwise.
         */
        static get propFunctions(): boolean;
    }
    export namespace CompatConfig {
        const pixelThickness: boolean;
        const gridLayout: boolean;
    }
}
declare module "Diagramming/AnchorPoint" {
    /**
    * @class The AnchorPoint class represents a location in a node, to which links are allowed to connect.
    */
    export class AnchorPoint {
        /**
        * Initializes a new instance of the AnchorPoint class.
        * @constructor
        * @param {Number} x The horizontal position of the anchor expressed as percent of the width of a node.
        * @param {Number} y The vertical position of the anchor expressed as percent of the height of a node.
        * @param {Boolean} [allowIncoming] Specifies whether incoming links can connect to this anchor.
        * @param {Boolean} [allowOutgoing] Specifies whether outgoing links can connect to this anchor.
        * @param {MarkStyle} [style] Defines how the anchor point is marked visually.
        * @param {String} [color] Defines the color with which the anchor mark is painted.
        * @param {Number} [size] Defines the size of the anchor mark.
        */
        constructor(x: number, y: number, allowIncoming?: boolean, allowOutgoing?: boolean, style?: MarkStyle, color?: string, size?: number);
        set x(arg: number);
        /**
        * Gets or sets the horizontal position of the anchor point
        * expressed as percentage of a node's width.
        * @type {Number}
        * @summary The horizontal position of the anchor point expressed as percentage of a node's width.
        * @remarks Keep the property value within 0-100 range, or otherwise
        * it will lead to unexpected behavior.
        */
        get x(): number;
        set y(arg: number);
        /**
        * Gets or sets the vertical position of the anchor point
        * expressed as percentage of a node's height.
        * @type {Number}
        * @summary The vertical position of the anchor point expressed as percentage of a node's height.
        * @remarks Keep the property value within 0-100 range, or otherwise
        * it will lead to unexpected behavior.
        */
        get y(): number;
        set allowIncoming(arg: boolean);
        /**
        * Gets or sets a value indicating whether the anchor point accepts incoming connections.
        * @type {Boolean}
        * @summary true to accept incoming connections, or false otherwise.
        * @remarks If no incoming anchor points are defined for a node, link end points
        * can be placed anywhere inside that node.
        */
        get allowIncoming(): boolean;
        set allowOutgoing(arg: boolean);
        /**
        * Gets or sets a value indicating whether the anchor point accepts outgoing connections.
        * @type {Boolean}
        * @summary true to accept outgoing connections, or false otherwise.
        * @remarks If no outgoing anchor points are defined for a node, link start points
        * can be placed anywhere inside that node.
        */
        get allowOutgoing(): boolean;
        set markStyle(arg: number);
        /**
        * Gets or sets the appearance of the anchor point mark.
        * @type {MarkStyle}
        * @summary A member of the MarkStyle enumeration.
        * @remarks Specifies how anchor points are marked visually on the screen.
        */
        get markStyle(): number;
        set color(arg: string);
        /**
        * Gets or sets the color of the anchor point mark.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        * @remarks The anchor mark shape specified via MarkStyle is painted with this color.
        */
        get color(): string;
        col: number;
        set tag(arg: any);
        /**
        * Gets or sets custom data tag associated with this anchor point.
        * @type {Object}
        * @summary An Object containing custom data.
        */
        get tag(): any;
        set size(arg: number);
        /**
        * Gets or sets the size of the anchor point mark.
        * @type {Number}
        * @summary A number specifying the size.
        */
        get size(): number;
        /**
        * For internal use only
        * @private
        */
        private toJson;
        /**
        * For internal use only
        * @private
        */
        private fromJson;
        set column(arg: number);
        /**
        * Gets or sets the column index of a cell with which the anchor point is associated.
        * @type {Number}
        * @summary The column index of a cell with which the anchor point is associated.
        * @remarks If Column is set to -1, the point relative coordinates specify
        * percentage of row's extents. Otherwise the point coordinates
        * specify percentage of cell's extents.
        */
        get column(): number;
        set toolTip(arg: string);
        /**
        * Gets or sets tooltip text that should be displayed
        * when the mouse hovers over an anchor point mark.
        * @type {String}
        * @summary A string containing the tooltip text.
        */
        get toolTip(): string;
        saveToXml(xmlElement: any, context: any): void;
        /**
        * For internal use only
        * @private
        */
        private getPosition;
        _x: number;
        _y: number;
        _allowIncoming: boolean;
        _allowOutgoing: boolean;
        _markStyle: number;
        _color: string;
        _tag: any;
        _toolTip: any;
        _size: number;
        /**
        * For internal use only
        * @private
        */
        private updatePointData;
    }
    import { MarkStyle } from "Diagramming/Enum";
}
declare module "Diagramming/AnchorPattern" {
    /**
    * @class The AnchorPattern class represents a set of anchor points, which specify the
    * exact locations where links are allowed to connect to nodes.
    */
    export class AnchorPattern {
        /**
        * Returns a reference to the anchor pattern with the specified string identifier.
        * @param {String} id A string identifying an AnchorPattern instance.
        * @returns {AnchorPattern} The AnchorPattern object whose Id is equal to the id parameter.
        * @remarks The id argument should match an identifier passed to the constructor
        * of an existing AnchorPattern object.
        */
        static fromId(id: string): AnchorPattern;
        /**
        * Initializes a new instance of the AnchorPattern class.
        * @constructor
        * @param {Array} points Contains the initial set of AnchorPoint instances for the new pattern.
        * @param {String} [patternId] An unique identifier for this anchor pattern.
        */
        constructor(points: any[], patternId?: string);
        set points(arg: any[]);
        /**
        * Gets or sets the anchor points in this pattern.
        * @type {Array}
        * @summary An array of AnchorPoint objects.
        */
        get points(): any[];
        _regIndex: number;
        serverRegistered: boolean;
        /**
        * For internal use only
        * @private
        */
        private toJson;
        /**
        * For internal use only.
        * @private
        */
        private serializePoints;
        /**
        * For internal use only
        * @private
        */
        private fromJson;
        setPatternId(id: any): void;
        patternId: any;
        allowLinkDirection(outgoing: any, node: any, rowIndex: any): boolean;
        assignId(id: any): void;
        apply(pattern: any): void;
        get regIndex(): number;
        _points: any[];
        /**
        * Gets the AnchorPattern unique identifier.
        * @type {String}
        * @summary A string containing the AnchorPattern id.
        */
        get id(): string;
        isRegistered(): boolean;
    }
    export namespace AnchorPattern {
        const idMap: Map<any, any>;
        const decision2In2Out: AnchorPattern;
        const decision1In3Out: AnchorPattern;
        const leftInRightOut: AnchorPattern;
        const topInBottomOut: AnchorPattern;
    }
}
declare module "Diagramming/Lanes/ResizeType" {
    /**
     * Specifies how to resize child columns and rows in the lanes grid when their parent column or row is resized.
     */
    export type ResizeType = number;
    export namespace ResizeType {
        const Fixed: number;
        const Proportional: number;
    }
}
declare module "Diagramming/Lanes/Style" {
    export default Style;
    /**
    * @class Encapsulates the appearance properties of an element in a lane grid.
    */
    class Style {
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        set backgroundBrush(arg: any);
        /**
        * Gets or sets the background brush of this style.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get backgroundBrush(): any;
        set leftBorderPen(arg: string);
        /**
        * Gets or sets the color used to stoke the left border of elements with this style.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get leftBorderPen(): string;
        set leftBorderThickness(arg: number);
        /**
        * Gets or sets the width of the left border of elements with this style.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get leftBorderThickness(): number;
        set topBorderPen(arg: string);
        /**
        * Gets or sets the color used to stoke the top border of elements with this style.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get topBorderPen(): string;
        set topBorderThickness(arg: number);
        /**
        * Gets or sets the width of the top border of elements with this style.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get topBorderThickness(): number;
        set rightBorderPen(arg: string);
        /**
        * Gets or sets the color used to stoke the right border of elements with this style.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get rightBorderPen(): string;
        set rightBorderThickness(arg: number);
        /**
        * Gets or sets the width of the right border of elements with this style.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get rightBorderThickness(): number;
        set bottomBorderPen(arg: string);
        /**
        * Gets or sets the color used to stoke the bottom border of elements with this style.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get bottomBorderPen(): string;
        set bottomBorderThickness(arg: number);
        /**
        * Gets or sets the width of the bottom border of elements with this style.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get bottomBorderThickness(): number;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to draw texts with this style.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get textColor(): string;
        set fontName(arg: string);
        /**
        * Gets or sets the name of the font used to draw texts with this style.
        * @type {String}
        * @summary A string specifying font name.
        */
        get fontName(): string;
        set fontSize(arg: number);
        /**
        * Gets or sets the size of the font used to draw texts with this style.
        * @type {Number}
        * @summary A number specifying font size in current measure unit.
        */
        get fontSize(): number;
        set textAlignment(arg: any);
        /**
        * Gets or sets a value indicating how to horizontally align texts drawn with this style.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get textAlignment(): any;
        set lineAlignment(arg: any);
        /**
        * Gets or sets a value indicating how to vertically align texts drawn with this style.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get lineAlignment(): any;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Serializes the lane style to the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        /**
        * Loads the style from the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        _backgroundBrush: any;
        _leftBorderPen: string;
        _leftBorderThickness: number;
        _topBorderPen: string;
        _topBorderThickness: number;
        _rightBorderPen: string;
        _rightBorderThickness: number;
        _bottomBorderPen: string;
        _bottomBorderThickness: number;
        _textColor: string;
        _fontName: string;
        _fontSize: number;
        _textAlignment: any;
        _lineAlignment: any;
    }
}
declare module "Diagramming/Lanes/Header" {
    export default Header;
    /**
    * @class Represents a header in a lane grid.
    */
    class Header {
        _subHeaders: any[];
        _width: number;
        _height: number;
        set resizeType(arg: number);
        /**
        * Gets or sets how a row or a column is resized relatively to its parent.
        * @type {ResizeType}
        * @summary A member of the ResizeType enumeration.
        */
        get resizeType(): number;
        set title(arg: string);
        /**
        * Gets or sets the header caption.
        * @type {String}
        * @summary A string containing the caption text.
        */
        get title(): string;
        set rotateTitle(arg: boolean);
        /**
        * Gets or sets a value indicating whether to rotate the header caption at 90 degree.
        * @type {Boolean}
        * @summary true if the title should be rotated, or false otherwise.
        */
        get rotateTitle(): boolean;
        titleColor: string;
        set style(arg: Style);
        /**
        * Gets or sets the style of this header.
        * @type {Style}
        * @summary A Style object that specifies the appearance of the header.
        */
        get style(): Style;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Serializes the lane header to the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        /**
        * Loads the lane header from the specified XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        /**
        * @private
        */
        private serializeSubHeaders;
        /**
        * Checks whether this header is a descendant (either direct or indirect) of the specified header.
        * For internal use only.
        * @private
        */
        private isDescendantOf;
        /**
        * Sets the widths of the children of this header recursively.
        * For internal use only.
        * @private
        */
        private setChildrenWidths;
        /**
        * Sets the heights of the children of this header recursively.
        * For internal use only.
        * @private
        */
        private setChildrenHeights;
        /**
        * Ensures that this header and its children have at least the specified width.
        * For internal use only.
        * @private
        */
        private ensureWidth;
        set width(arg: number);
        /**
        * Gets or sets the width of this header.
        * @type {Number}
        * @summary A number specifying the header width.
        * @remarks If this is a column header, the property specifies the width of the whole column.
        */
        get width(): number;
        /**
        * Ensures that this header and its children have at least the specified height.
        * For internal use only.
        * @private
        */
        private ensureHeight;
        set height(arg: number);
        /**
        * Gets or sets the height of this header.
        * @type {Number}
        * @summary A number specifying the header height.
        * @remarks If this is a row header, the property specifies the height of the whole row.
        */
        get height(): number;
        /**
        * Sets the width of this header and all its children to 0.
        * For internal use only.
        * @private
        */
        private zeroWidth;
        /**
        * Sets the height of this header and all its children to 0.
        * For internal use only.
        * @private
        */
        private zeroHeight;
        /**
        * Called when a header's visual appearance has changed.
        * For internal use only.
        * @private
        */
        private notifyHeaderChanged;
        /**
        * Sets the width of this header without raising notifications about it.
        * For internal use only.
        * @private
        */
        private setWidthNoNotify;
        /**
        * Sets the width of this header without raising notifications about it.
        * For internal use only.
        * @private
        */
        private setHeightNoNotify;
        onColumnHeaderHeightChanged(header: any, height: any): void;
        onRowHeaderWidthChanged(header: any, width: any): void;
        /**
        * Invoked when the header is added to the child collection of another header in order to set its parent.
        * For internal use only.
        * @private
        */
        private set parent(arg);
        /**
        * Gets the parent header.
        * @private
        */
        private get parent();
        _parent: any;
        /**
        * Gets a collection of the subheaders of this header.
        * @type {Array}
        * @summary An array containing the subheaders.
        * @remarks The returned array should not be modified directly. To add and remove
        * subheaders, use the addColumnHeader, addRowHeader, removeColumnHeader and
        * removeRowHeader methods of the Grid respectively.
        */
        get subHeaders(): any[];
        /**
        * Gets the number of subheaders this header has, counting
        * only the children at the bottommost level.
        * @private
        */
        private getDeepChildCount;
        _resizeType: number;
        _title: any;
        _rotateTitle: any;
        _style: any;
        /**
        * Gets a value indicating whether this header is a column header.
        * @type {Boolean}
        * @summary true if the header is a column header, or false otherwise.
        * @remarks Both isColumnHeader and isRowHeader return false if the
        * header is not attached to a lane grid.
        */
        get isColumnHeader(): boolean;
        /**
        * Gets a value indicating whether this header is a row header.
        * @type {Boolean}
        * @summary true if the header is a row header, or false otherwise.
        * @remarks Both isColumnHeader and isRowHeader return false if the
        * header is not attached to a lane grid.
        */
        get isRowHeader(): boolean;
        /**
        * Gets the minimum size for this header.
        * @private
        */
        private get minSize();
    }
    import Style from "Diagramming/Lanes/Style";
}
declare module "Diagramming/Lanes/MasterHeader" {
    export default MasterHeader;
    /**
    * @class Represents a root header in a lane grid.
    * @private
    */
    class MasterHeader extends Header {
        /**
        * Initializes a new instance of the MasterHeader class. For internal use only.
        * @private
        * @constructor
        */
        private constructor();
        grid: any;
        rowHeader: any;
    }
    import Header from "Diagramming/Lanes/Header";
}
declare module "Diagramming/Lanes/Cell" {
    export default Cell;
    /**
    * @class Represents a single cell in a lane grid.
    */
    class Cell {
        /**
        * Initializes a new instance of the Cell class. For internal use only.
        * @constructor
        */
        constructor(parent: any);
        parent: any;
        set style(arg: any);
        /**
        * Gets or sets the style of the cell.
        * @type {Lanes.Style}
        * @summary A Style object that specifies the style of this cell.
        */
        get style(): any;
        set text(arg: string);
        /**
        * Gets or sets the text of the cell.
        * @type {String}
        * @summary A string specifying the text of the cell.
        */
        get text(): string;
        setIndex(column: any, row: any): void;
        column: any;
        row: any;
        getObjectToEdit(): Cell;
        getTextToEdit(): any;
        getEditRect(point: any): any;
        createEditArgs(oldText: any, newText: any): any;
        setEditedText(newText: any): void;
        getDiagramItem(): any;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Serializes the cell matrix to the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        /**
        * Deserializes the cell from the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        _style: any;
        _text: any;
        set inplaceEditBounds(arg: any);
        get inplaceEditBounds(): any;
        _inplaceEditBounds: any;
    }
}
declare module "Diagramming/Lanes/CellMatrix" {
    export default CellMatrix;
    /**
    * @class A 2-dimensional matrix of cells.
    * @private
    */
    class CellMatrix {
        /**
        * Initializes a new instance of the CellMatrix class. For internal use only.
        * @private
        * @constructor
        */
        private constructor();
        grid: any;
        data: any[][];
        _rowCount: number;
        _columnCount: number;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Serializes the cell matrix to the specified XML element
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        /**
        * Loads the cell matrix from the specified XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        /**
        * @private
        */
        private serializeData;
        /**
        * Inserts new empty columns at the specified position.
        * @private
        */
        private insertColumns;
        /**
        * Inserts new empty rows at the specified position.
        * @private
        */
        private insertRows;
        /**
        * Removes the specified number of column starting with the column at the specified position.
        */
        removeColumns(index: any, count: any): void;
        /**
        * Removes the specified number of rows starting with the row at the specified position.
        * @private
        */
        private removeRows;
        /**
        * Gets the cell at the specified position.
        * @private
        */
        private get;
        /**
        * Gets the number of columns in the matrix.
        * @private
        */
        private get columnCount();
        /**
        * Gets the number of rows in the matrix.
        * @private
        */
        private get rowCount();
    }
}
declare module "Diagramming/Lanes/Events" {
    export namespace Events {
        const invalidated: string;
    }
}
declare module "Diagramming/Lanes/CellClusterStyle" {
    export default CellClusterStyle;
    /**
    * @class Represents a cell or a cluster of cells in a lane grid.
    * @private
    */
    class CellClusterStyle {
        /**
        * Initializes a new instance of the CellClusterStyle class. For internal use only.
        * @private
        * @constructor
        */
        private constructor();
        cellCluster: any;
        grid: any;
        columnStart: any;
        columnEnd: any;
        rowStart: any;
        rowEnd: any;
        getPropertyValue(getter: any): any;
        setPropertyValue(setter: any, value: any): void;
        set backgroundBrush(arg: any);
        /**
        * Gets or sets the background brush of all cells in the cluster.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get backgroundBrush(): any;
        set leftBorderPen(arg: string);
        /**
        * Gets or sets the left border pen of all cells in the cluster.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get leftBorderPen(): string;
        set leftBorderThickness(arg: number);
        /**
        * Gets or sets the left border thickness of all cells in the cluster.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get leftBorderThickness(): number;
        set topBorderPen(arg: string);
        /**
        * Gets or sets the top border pen of all cells in the cluster.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get topBorderPen(): string;
        set topBorderThickness(arg: number);
        /**
        * Gets or sets the top border thickness of all cells in the cluster.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get topBorderThickness(): number;
        set rightBorderPen(arg: string);
        /**
        * Gets or sets the right border pen of all cells in the cluster.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get rightBorderPen(): string;
        set rightBorderThickness(arg: number);
        /**
        * Gets or sets the right border thickness of all cells in the cluster.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get rightBorderThickness(): number;
        set bottomBorderPen(arg: string);
        /**
        * Gets or sets the bottom border pen of all cells in the cluster.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get bottomBorderPen(): string;
        set bottomBorderThickness(arg: number);
        /**
        * Gets or sets the bottom border thickness of all cells in the cluster.
        * @type {Number}
        * @summary A number specifying the border width.
        */
        get bottomBorderThickness(): number;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to draw the text of all cells in the cluster.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get textColor(): string;
        set fontName(arg: string);
        /**
        * Gets or sets the name of the font used to draw the text of all cells in the cluster.
        * @type {String}
        * @summary A string specifying font name.
        */
        get fontName(): string;
        set fontSize(arg: number);
        /**
        * Gets or sets the size of the font used to draw the text of all cells in the cluster.
        * @type {Number}
        * @summary A number specifying font size in current measure unit.
        */
        get fontSize(): number;
        set textAlignment(arg: number);
        /**
        * Gets or sets a value indicating how to horizontally align the text of all cells in the cluster.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get textAlignment(): number;
        set lineAlignment(arg: number);
        /**
        * Gets or sets a value indicating how to vertically align the text of all cells in the cluster.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get lineAlignment(): number;
    }
}
declare module "Diagramming/Lanes/CellCluster" {
    export default CellCluster;
    /**
    * @class Represents a cell or a cluster of cells in a lane grid.
    * @private
    */
    class CellCluster {
        /**
        * Initializes a new instance of the CellCluster class. For internal use only.
        * @private
        * @constructor
        */
        private constructor();
        grid: any;
        _columnStart: any;
        _columnEnd: any;
        _rowStart: any;
        _rowEnd: any;
        valid: boolean;
        set style(arg: Style);
        /**
        * Gets or sets the style of each cell in the cell cluster.
        * @type {Style}
        * @summary A Style object that specifies the style of all cells in the cluster.
        */
        get style(): Style;
        set text(arg: string);
        /**
        * Gets or sets the text of each cell in the cell cluster.
        * @type {String}
        * @summary A string specifying the text of all cells in the cluster.
        */
        get text(): string;
        /**
        * Gets the start column of this cell cluster.
        * @type {Number}
        * @summary An integer indicating the start column.
        */
        get columnStart(): number;
        /**
        * Gets the end column of this cell cluster.
        * @type {Number}
        * @summary An integer indicating the end column.
        */
        get columnEnd(): number;
        /**
        * Gets the start row of this cell cluster.
        * @type {Number}
        * @summary An integer indicating the start row.
        */
        get rowStart(): number;
        /**
        * Gets the end row of this cell cluster.
        * @type {Number}
        * @summary An integer indicating the end row.
        */
        get rowEnd(): number;
    }
    import Style from "Diagramming/Lanes/Style";
}
declare module "Diagramming/Lanes/Grid" {
    export default Grid;
    /**
    * @class Represents a lane grid.
    */
    class Grid {
        /**
        * Initializes a new instance of the Grid class. For internal use only.
        * @constructor
        */
        constructor(parent: any);
        parent: any;
        columnHeader: any;
        rowHeader: any;
        set leftMargin(arg: number);
        /**
        * Gets or sets the offset of the lane grid from left side of diagram's bounds.
        * @type {Number}
        * @summary A number representing the left margin.
        */
        get leftMargin(): number;
        set topMargin(arg: number);
        /**
        * Gets or sets the offset of the lane grid from top side of diagram's bounds.
        * @type {Number}
        * @summary A number representing the top margin.
        */
        get topMargin(): number;
        set minHeaderSize(arg: number);
        /**
        * Gets or sets the minimum size of a header.
        * @type {Number}
        * @summary A number representing the minimum size for headers in the grid.
        */
        get minHeaderSize(): number;
        set topLeftAreaText(arg: string);
        /**
        * Gets or sets the text displayed in the top left area.
        * @type {String}
        * @summary A string containing the text.
        */
        get topLeftAreaText(): string;
        set allowInplaceEdit(arg: boolean);
        /**
        * Gets or sets a value indicating whether grid cells' text can be edited interactively.
        * @type {Boolean}
        * @summary true if grid cells' text can be in-place edited, or false otherwise.
        */
        get allowInplaceEdit(): boolean;
        set allowResizeHeaders(arg: boolean);
        /**
        * Gets or sets a value indicating whether users can resize the headers of the grid interactively.
        * @type {Boolean}
        * @summary true if grid headers can resized interactively, or false otherwise.
        */
        get allowResizeHeaders(): boolean;
        set hookHeaders(arg: boolean);
        /**
        * Gets or sets a value indicating whether headers will be anchored
        * to the corresponding side (that is, the column header anchored
        * to the top side and the row header anchored to the left side).
        * @type {Boolean}
        * @summary true to anchor the headers, or false otherwise.
        */
        get hookHeaders(): boolean;
        set headersOnTop(arg: boolean);
        /**
        * Gets or sets a value indicating whether lane headers
        * appear at the top of the z-order above all diagram items.
        * @type {Boolean}
        * @summary true to display headers on top of items, or false otherwise.
        */
        get headersOnTop(): boolean;
        rowWidths: any[];
        columnHeights: any[];
        cells: any;
        _style: Style;
        _topLeftAreaStyle: Style;
        eventHandlers: Map<any, any>;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Serializes the lane grid to the specified XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        /**
        * Deserializes the lane grid from the specified XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the deserialization process and some helper deserialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        /**
        * Registers a single event listener on the Animation.
        * @private
        * @param {String} eventName The name of the event.
        * @param {Method} handler Represents the method that will handle the event specified with eventName.
        */
        private addEventListener;
        /**
        * Removes a single event listener attached to the Animation.
        * @private
        * @param {String} eventName The name of the event.
        * @param {Method} handler Represents the method that handles the event specified with eventName.
        */
        private removeEventListener;
        /**
        * Raises an event.
        * @private
        * @param {String} eventName The name of the event to raise.
        * @param {EventArgs} args An instance of type EventArgs that holds data for the event specified with eventName.
        */
        private raiseEvent;
        /**
        * Adds the specified header to the grid as a new column header.
        * @param {Lanes.Header} header The Header object to add.
        * @param {Lanes.Header} [parent] The parent header to add to, or null,
        * to add the new header as a root column.
        * @param {Number} [i] The index at which the header was added in the collection.
        */
        addColumnHeader(header: any, parent?: any, i?: number): void;
        /**
        * @private
        */
        private onColumnHeaderAdded;
        /**
        * Removes the specified column header and all of its associated cells from the grid.
        * @param {Lanes.Header} header The Header object to remove.
        */
        removeColumnHeader(header: any): void;
        /**
        * @private
        */
        private onColumnHeaderRemoved;
        /**
        * Adds the specified header to the grid as a new row header.
        * @param {Lanes.Header} header The Header object to add.
        * @param {Lanes.Header} [parent] The parent header to add to, or null,
        * to add the new header as a root row.
        * @param {Number} [i] The index at which the header was added in the collection.
        */
        addRowHeader(header: any, parent?: any, i?: number): void;
        /**
        * @private
        */
        private onRowHeaderAdded;
        /**
        * Removes the specified row header and all of its associated cells from the grid.
        * @param {Lanes.Header} header The Header object to remove.
        */
        removeRowHeader(header: any): void;
        /**
        * @private
        */
        private onRowHeaderRemoved;
        /**
        * Finds the first column whose header caption matches the specified string.
        * @param {String} title A string containing the header title to look for.
        * @returns {Lanes.Header} Returns the first column Header that has the specified caption.
        */
        findColumn(title: string): any;
        /**
        * Finds the first row whose header caption matches the specified string.
        * @param {String} title A string containing the header title to look for.
        * @returns {Lanes.Header} Returns the first row Header that has the specified caption.
        */
        findRow(title: string): any;
        /**
        * Finds the header with the specified title within the
        * specified collection by performing deep search.
        * @private
        */
        private findHeader;
        /**
        * Gets the global index of the specified header.
        * @private
        */
        private getIndex;
        /**
        * Returns the index of the specified header within its parent.
        * @private
        */
        private getLocalIndex;
        /**
        * Returns the number of row headers in the specified level.
        * @private
        */
        private getRowLevelCount;
        /**
        * Returns the number of row headers in the specified level.
        * @private
        */
        private getColumnLevelCount;
        /**
        * Returns the number of headers at the specified level.
        * @private
        */
        private getLevelCount;
        /**
        * Gets the number of levels of the row headers.
        * @returns {Number} A number representing the row depth.
        */
        getRowDepth(exclude: any): number;
        /**
        * Gets the number of levels of the column headers.
        * @returns {Number} A number representing the column depth.
        */
        getColumnDepth(exclude: any): number;
        /**
        * Returns the depth of the specified tree, optionally excluding
        * the sub-tree, defined by the specified header.
        * @private
        */
        private getDepth;
        /**
        * Collects the max heights of the headers in the specified collection for each level.
        * @private
        */
        private collectHeights;
        /**
        * Returns the total height of all column headers, substituting
        * the height of the specified header with the specified value.
        * @private
        */
        private getTotalColumnHeightIf;
        /**
        * Collects the max heights of the headers in the specified collection
        * for each level, substituting the height of the specified header with
        * the specified value.
        * @private
        */
        private collectHeightsIf;
        /**
        * Collects the max widths of the headers in the specified collection for each level.
        * @private
        */
        private collectWidths;
        /**
        * Returns the total width of all row headers, substituting
        * the width of the specified header with the specified value.
        * @private
        */
        private getTotalRowWidthIf;
        /**
        * Collects the max widths of the headers in the specified collection
        * for each level, substituting the width of the specified header with
        * the specified value.
        * @private
        */
        private collectWidthsIf;
        /**
        * Recursively traverses the specified collection to find
        * the maximum header height from the columns in the specified level.
        * @private
        */
        private getColumnLevelHeight;
        /**
        * Recursively traverses the specified collection to find
        * the maximum header width from the rows in the specified level.
        * @private
        */
        private getRowLevelWidth;
        /**
        * A callback invoked during header hit-testing to
        * carry out the testing of an individual header.
        * @private
        */
        private collectHeaderBounds;
        /**
        * Removes the last leaf-child of the specified header.
        * @remarks The function performs a deep search until a child with no children is found.
        * @private
        */
        private removeLastChildDeep;
        /**
        * Ensures that the specified header has children.
        * @remarks Removes the header from its parent if it is a leaf, then checks the parent.
        * @private
        */
        private ensureNonEmpty;
        /**
        * Returns the bounding rectangle of the specified header.
        * @param {Lanes.Header} header The Header object whose coordinates to return.
        * @param {Boolean} includeSubHeaders true to include the coordinates of
        * the child headers in the returned rectangle; otherwise, false.
        * @returns {Rect} A Rect that bounds the specified header, and optionally its child headers.
        */
        getHeaderBounds(header: any, includeSubHeaders: boolean): Rect;
        /**
        * Returns the bounding rectangle of all column headers.
        * @type {Rect}
        * @summary A Rect that bounds all column headers.
        */
        get columnHeaderBounds(): Rect;
        /**
        * Returns the bounding rectangle of all row headers.
        * @type {Rect}
        * @summary A Rect that bounds all row headers.
        */
        get rowHeaderBounds(): Rect;
        /**
        * Returns the bounding rectangle of the specified cell.
        * @param {Lanes.Cell} cell An Cell object representing a cell or a group of cells in the grid.
        * @returns {Rect} A Rect instance representing the rectangle that bounds the specified cell or group of cells.
        */
        getCellBounds(cell: any): Rect;
        /**
        * Gets the collection of topmost column headers.
        * @type {Array}
        * @summary An array containing the topmost column headers.
        * @remarks The returned array should not be modified directly. To add and remove
        * column headers to the grid, use the addColumnHeader and removeColumnHeader
        * methods respectively.
        */
        get columnHeaders(): any[];
        /**
        * Gets the collection of topmost row headers.
        * @type {Array}
        * @summary An array containing the topmost row headers.
        * @remarks The returned array should not be modified directly. To add and remove
        * row headers to the grid, use the addRowHeader and removeRowHeader
        * methods respectively.
        */
        get rowHeaders(): any[];
        set columnCount(arg: number);
        /**
        * Gets or sets the number of columns in the grid.
        * @type {Number}
        * @summary The number of columns.
        */
        get columnCount(): number;
        set rowCount(arg: number);
        /**
        * Gets or sets the number of rows in the grid.
        * @type {Number}
        * @summary The number of rows.
        */
        get rowCount(): number;
        /**
        * Gets the cell or the cluster of cells corresponding to the specified row and column.
        * @param {Number | Lanes.Header} column A Header object or a cell index.
        * @param {Number | Lanes.Header} row A Header object or a cell index.
        * @return {Lanes.Cell} A Cell object representing the cell or cluster
        * of cells with the specified coordinates.
        */
        get(column: number | any, row: number | any): any;
        _leftMargin: any;
        _topMargin: any;
        _minHeaderSize: any;
        /**
        * Gets the total height of all column headers.
        * @type {Number}
        * @summary A number representing the height.
        */
        get totalColumnHeight(): number;
        /**
        * Gets the total width of all row headers.
        * @type {Number}
        * @summary A number representing the width.
        */
        get totalRowWidth(): number;
        set topLeftAreaStyle(arg: any);
        /**
        * Gets or sets the style of the area above all row headers and to the left of all column headers.
        * @type {Lanes.Style}
        * @summary A Style object that specifies the appearance of the top-left area.
        */
        get topLeftAreaStyle(): any;
        _topLeftAreaText: any;
        _hookHeaders: any;
        _headersOnTop: any;
        set rowHeadersWidths(arg: any[]);
        /**
        * Gets or sets an array of float values specifying the widths of individual row levels.
        * @type {Array}
        * @summary An array of numbers representing the widths of the various header levels.
        * @remarks If a value is non-positive or does not exist because the array has less arguments
        * than the number of rows, then the width is calculated as the maximum width of
        * the rows in that level.
        */
        get rowHeadersWidths(): any[];
        set columnHeadersHeights(arg: any[]);
        /**
        * Gets or sets an array of float values specifying the heights of individual column levels.
        * @type {Array}
        * @summary An array of numbers representing the heights of the various header levels.
        * @remarks If a value is non-positive or does not exist because the array has less arguments
        * than the number of columns, then the height is calculated as the maximum height of
        * the columns in that level.
        */
        get columnHeadersHeights(): any[];
        /**
        * Processes all column headers and invokes the specified delegate for each one.
        * @private
        */
        private processColumnHeaders;
        /**
        * Processes all row headers and invokes the specified delegate for each one.
        * @private
        */
        private processRowHeaders;
        /**
        * @private
        */
        private drawFirst;
        /**
        * @private
        */
        private drawLast;
        /**
        * @private
        */
        private drawHeaders;
        /**
        * Renders the top-left area of the lane grid.
        * @private
        */
        private drawTopLeftArea;
        /**
        * Renders the specified rectangle to the specified target
        * using the brush and pens from the specified style.
        * @private
        */
        private drawRectangle;
        /**
        * Renders the specified text using the specified settings.
        * @private
        */
        private drawText;
        /**
        * @private
        */
        private wrapText;
        /**
        * A callback invoked during header rendering to carry out the rendering of an individual header.
        * @private
        */
        private drawHeader;
        /**
        * Renders all cells to the specified target.
        * @private
        */
        private drawCells;
        collectLeaves(headers: any, leaves: any): void;
        onColumnHeaderHeightChanged(header: any, oldValue: any): void;
        onRowHeaderWidthChanged(header: any, oldValue: any): void;
        /**
        * @private
        */
        private resolveEffectiveStyle;
        /**
        * @private
        */
        private resolveInheritedStyle;
        /**
        * Returns the effective value of the specified property from the specified style.
        * @private
        */
        private getEffectivePropertyValue;
        /**
        * @private
        */
        private getEffectiveBackground;
        /**
        * @private
        */
        private getEffectiveLeftBorderPen;
        /**
        * @private
        */
        private getEffectiveLeftBorderThickness;
        /**
        * @private
        */
        private getEffectiveTopBorderPen;
        /**
        * @private
        */
        private getEffectiveTopBorderThickness;
        /**
        * @private
        */
        private getEffectiveRightBorderPen;
        /**
        * @private
        */
        private getEffectiveRightBorderThickness;
        /**
        * @private
        */
        private getEffectiveBottomBorderPen;
        /**
        * @private
        */
        private getEffectiveBottomBorderThickness;
        /**
        * @private
        */
        private getEffectiveFontName;
        /**
        * @private
        */
        private getEffectiveFontSize;
        /**
        * @private
        */
        private getEffectiveTextColor;
        /**
        * @private
        */
        private getEffectiveTextAlignment;
        /**
        * @private
        */
        private getEffectiveLineAlignment;
        /**
        * Returns the column header with the specified index from the bottommost column header level.
        * @param {Number} index A number specifying the column index.
        * @returns {Lanes.Header} A Header object representing the column at the specified index.
        */
        getColumn(index: number): any;
        /**
        * Returns the row header with the specified index from the bottommost row header level.
        * @param {Number} index A number specifying the row index.
        * @returns {Lanes.Header} A Header object representing the row at the specified index.
        */
        getRow(index: number): any;
        /**
        * A callback invoked during header hit-testing to carry out the testing of an individual header.
        * @private
        */
        private hitTestHeader;
        /**
        * Gets the Header that is located at the specified point.
        * @param {Point} point A Point instance specifying a point within the grid.
        * @param {Object} headerBounds An object that receives the coordinates of
        * the found header in its headerBounds field.
        * @param {Point} scrollPosition When the headers are hooked this parameter
        * should provide information about the current scroll position in the view.
        * @returns {Lanes.Header} The found Header object, or null if there is no header located
        * at the specified point.
        */
        getHeaderFromPoint(point: Point, headerBounds: any, scrollPosition: Point): any;
        /**
        * Gets the cell located at the specified point.
        * @param {Point} point A Point instance specifying a point within the grid.
        * @param {Object} cellBounds An object that receives the coordinates of
        * the found cell in its cellBounds field.
        * @returns {Lanes.Cell} A Cell object identifying the found cell, or null
        * if there is no cell located at the specified point.
        */
        getCellFromPoint(point: Point, cellBounds: any): any;
        /**
        * Returns the column index of the specified cell.
        * @param {Lanes.Cell} cell A Cell object representing a single cell in the grid.
        * @returns {Number} The index of the column that contains cell; -1 if cell
        * is not found or refers to a group of cells.
        */
        getCellColumn(cell: any): number;
        /**
        * Returns the row index of the specified cell.
        * @param {Lanes.Cell} cell A Cell object representing a single cell in the grid.
        * @returns {Number} The index of the row that contains cell; -1 if cell is not
        * found or refers to a group of cells.
        */
        getCellRow(cell: any): number;
        /**
        * Returns the 0-based index of the specified column. Only works for bottommost headers.
        * If the specified column is a group header, returns -1.
        * @param {Lanes.Header} column A Header instance that represents a grid column.
        * @returns {Number} The index of column, or -1 if the specified header
        * represents a row or a group of child columns.
        */
        getColumnIndex(column: any): number;
        /**
        * Returns the 0-based index of the specified row. Only works for bottommost headers.
        * If the specified row is a group header, returns -1;
        * @param {Lanes.Header} row A Header instance that represents a grid row.
        * @returns {Number} The index of row, or -1 if the specified header represents
        * a column or a group of child rows.
        */
        getRowIndex(row: any): number;
        /**
        * Finds the header with the specified index within the bottommost
        * level of headers in the specified collection.
        * @private
        */
        private getHeader;
        /**
        * @private
        */
        private invalidate;
        /**
        * Gets the default style of the grid.
        * @type {Lanes.Style}
        * @summary A Style object representing the style
        * of all grid elements, which do not have an explicitly assigned style.
        */
        get style(): any;
        _allowInplaceEdit: boolean;
        _allowResizeHeaders: boolean;
    }
    import Style from "Diagramming/Lanes/Style";
    import { Rect } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/Lanes" {
    export namespace Lanes {
        export { Grid };
        export { Header };
        export { Cell };
        export { CellCluster };
        export { CellClusterStyle };
        export { Style };
    }
    import Grid from "Diagramming/Lanes/Grid";
    import Header from "Diagramming/Lanes/Header";
    import Cell from "Diagramming/Lanes/Cell";
    import CellCluster from "Diagramming/Lanes/CellCluster";
    import CellClusterStyle from "Diagramming/Lanes/CellClusterStyle";
    import Style from "Diagramming/Lanes/Style";
}
declare module "Diagramming/ShapeRenderer" {
    export default ShapeRenderer;
    class ShapeRenderer {
        constructor(shape: any);
        set shape(arg: any);
        get shape(): any;
        flipX: boolean;
        flipY: boolean;
        transform: Matrix;
        outlinePen: string;
        outlineBrush: string;
        decorationPen: string;
        decorationBrush: string;
        shapeDecorationPen: string;
        shapeDecorationBrush: string;
        strokeDashStyle: any;
        strokeThickness: number;
        lineJoin: string;
        currentPhase: number;
        targetBounds: Rect;
        setShapeTransform: boolean;
        pathCopy: any;
        build(): void;
        outlineBounds: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        };
        outlineBuilder: any[];
        decorationBounds: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        };
        decorationBuilder: any[];
        shapeDecorationBounds: any[];
        shapeDecorationBuilder: any[];
        rebuild(): void;
        draw(context: any, drawShadow: any): void;
        addShapeDecoration(shapeDecoration: any, context: any, index: any): void;
        drawShadow(context: any): void;
        drawOutline(context: any): void;
        addToContext(context: any, addTransform: any): void;
        drawRoundRect(context: any, builder: any): void;
        updateArrowHeadData(bounds: any, pos: any, dir: any): void;
        updateData(bounds: any, rotationAngle: any): void;
        cacheBounds: any;
        cacheRotationAngle: any;
        shapeTransform: Matrix;
        shadow: any;
        prepareCommands(pathString: any): any;
        getOutline(): Path;
        updateOutline(): void;
        outlinePath: Path;
        getBounds(renderPhase: any): Rect;
        getEmptyBounds(): {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        };
        expandBounds(x: any, y: any): void;
        getBuilder(): any;
        getOutlineBrush(context: any): any;
        getOutlinePen(context: any): any;
        getDecorationBrush(context: any): any;
        getDecorationPen(context: any): any;
        getShapeDecorationBrush(context: any, index: any): any;
        getShapeDecorationPen(context: any, index: any): any;
        parseAll(): void;
        _shape: any;
        setFlip(flipX: any, flipY: any): void;
        /**
        * For internal use only.
        * @private
        */
        private parse;
        moveTo(x: any, y: any): void;
        lineTo(x: any, y: any): void;
        bezierTo(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): void;
        arcTo(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): void;
        quadraticCurveTo(x1: any, y1: any, x: any, y: any): void;
        roundRect(x1: any, y1: any, x2: any, y2: any, cornerRadius: any): void;
        close(): void;
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "@mindfusion/drawing";
    import { Rect } from "@mindfusion/drawing";
    import { Path } from "@mindfusion/drawing";
}
declare module "Diagramming/Shape" {
    /**
        * @class An instance of this class represents a shape defined through a series of arc, line
        * and Bezier segments. The segments can be a part of the shape outline, in which
        * case they define the part of the shape is filled, used for hit-testing and for
        * aligning links to the node edges. Segments can also be added as decoration elements,
        * in which case they only affect the appearance of a ShapeNode
        * @augments ComponentBase
    */
    export class Shape extends ComponentBase {
        /**
        * Returns a reference to the shape with the specified string identifier.
        * @param {String} id The identifier of the shape of interest.
        * @returns {Shape} A reference to the Shape with the specified identifier or a null if there is no such shape.
        */
        static fromId(id: string): Shape;
        /**
        * Creates a shape component.
        * @param {String} id The identifier of the shape.
        * @param {Boolean} [isOutline] A value indicating whether this shape defines the outline of its host node.
        * @param {CompositeNode} [node] The host node of this component.
        * @returns {Shape} A reference to a Shape component with the specified identifier.
        */
        static component(id: string, isOutline?: boolean, node?: any): Shape;
        static createDummyShape(id: any): Shape;
        /**
        * For internal use only.
        * @private
        */
        private static registerDefaultShape;
        /**
        * For internal use only.
        * @private
        */
        private static initializeDefault;
        /**
        * Initializes a new instance of the Shape class.
        * @constructor.
        * @param {String} [params.outline] A string defining the shape's outline.
        * @param {String} [params.decoration] A string defining the shape's decoration.
        * @param {Array} [params.shapeDecorations] An array containing shapeDecoration objects defining additional shape decoration.
        * @param {String} [params.id] The string identifier of the shape.
        * @param {String} [params.fillMode] A string specifying the fill mode;
        * @param {String} [params.outlinePen] A string specifying the stroke of the shape's outline.
        * @param {String} [params.outlineBrush] A string specifying the fill of the shape's outline.
        * @param {String} [params.decorationPen] A string specifying the stroke of the shape's decoration.
        * @param {String} [params.decorationBrush] A string specifying the fill of the shape's decoration.
        * @remarks The shapeDecoration object members:
        * path - a string specifying the shape decoration path;
        * pen - a MindFusion.Drawing.Pen object specifying the shape decoration's stroke;
        * brush - a Brush object specifying the shape decoration's fill;
        * fillMode - a string specifying the fill mode.
        */
        constructor(params: any, dummy: any);
        params: any;
        id: string;
        dummy: boolean;
        shapeOrientation: number;
        defaultBounds: Rect;
        shapeRenderer: any;
        isOutline: boolean;
        bounds: any;
        rotationAngle: number;
        /**
        * Loads the shape content from an XML element.
        * @param {Element} xmlElement An XML DOM element that contains the the shape's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private xmlCollectionToPath;
        pt: {
            x: any;
            y: any;
        };
        /**
        * For internal use only.
        * @private
        */
        private processPathString;
        /**
        * For internal use only.
        * @private
        */
        private xmlElementToPath;
        /**
        * For internal use only.
        * @private
        */
        private addArc;
        /**
        * For internal use only.
        * @private
        */
        private getArcPoint;
        /**
        * For internal use only.
        * @private
        */
        private apply;
        /**
        * For internal use only.
        * @private
        */
        private updateData;
        /**
        * For internal use only.
        * @private
        */
        private addCanvasElements;
        /**
        * For internal use only.
        * @private
        */
        private removeCanvasElements;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        /**
        * For internal use only.
        * @private
        * @remarks Handles shape components arrangement.
        */
        private setBounds;
        /**
        * For internal use only.
        * @private
        * @remarks Handles shape components arrangement.
        */
        private getBounds;
        /**
        * For internal use only.
        * @private
        * @remarks Handles shape components drawing.
        */
        private draw;
        /**
        * Gets the id of this Shape.
        * @returns {String} The id.
        */
        getId(): string;
        set brush(arg: any);
        /**
        * Gets or sets the brush used to paint the interior of this shape.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        * @remarks Used to paint Shape components of CompositeNode.
        */
        get brush(): any;
        set pen(arg: string);
        /**
        * Gets or sets the pen used to stroke the frame of this shape.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        * @remarks Used to paint Shape components of CompositeNode.
        */
        get pen(): string;
        set strokeThickness(arg: number);
        /**
        * Gets or sets the thickness of the shape's frame.
        * @type {Number}
        * @summary A number specifying stroke thickness.
        * @remarks Used to paint Shape components of CompositeNode.
        */
        get strokeThickness(): number;
        set defaultProperty(arg: string);
        get defaultProperty(): string;
        get defaultValue(): string;
        /**
        * Gets a value indicating whether this shape is elliptic.
        * @returns {Boolean} True if the shape is elliptic, or false otherwise.
        */
        isElliptic(): boolean;
        isDummy(): boolean;
    }
    export namespace Shape {
        const defaultShapes: any[];
        const shapes: any[];
        const defaultShapesDefined: boolean;
        const loadFromLibPending: boolean;
    }
    import { ComponentBase } from "@mindfusion/drawing";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/Events" {
    /**
    * @namespace MindFusion.Diagramming
    */
    /**
    * @class Defines all events raised by the controls in the MindFusion.Diagrammming namespace.
    */
    export class Events {
        /**
        * Raised when the user starts drawing a new link} just after the DiagramLink instance is created.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get initializeLink(): string;
        /**
        * Raised when the user starts drawing a new node} just after the DiagramNode instance is created.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get initializeNode(): string;
        /**
        * Raised when the user clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkClicked(): string;
        /**
        * Raised when the user draws a new link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkCreated(): string;
        /**
        * Raised when a link is deleted} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkDeleted(): string;
        /**
        * Raised when the user double-clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkDoubleClicked(): string;
        /**
        * Raised when the user moves any control point of a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkModified(): string;
        /**
        * Raised when the mouse pointer hovers over a link. Event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkPointed(): string;
        /**
        * Raised when the user edits the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkTextEdited(): string;
        /**
        * Raised when the user clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeClicked(): string;
        /**
        * Raised when the user draws a new node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeCreated(): string;
        /**
        * Raised when a node is deleted} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeDeleted(): string;
        /**
        * Raised when the user double-clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeDoubleClicked(): string;
        /**
        * Raised when the user moves or resizes a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeModified(): string;
        /**
        * Raised when the mouse pointer hovers over a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodePointed(): string;
        /**
        * Raised when the user edits the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeTextEdited(): string;
        /**
        * A validation event raised while the user is drawing a new link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkCreating(): string;
        /**
        * Raised when the user tries to delete a link. This event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkDeleting(): string;
        /**
        * A validation event raised while the user is modifying a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkModifying(): string;
        /**
        * A validation event raised while the user is drawing a new node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeCreating(): string;
        /**
        * Raised when the user tries to delete a node. This event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeDeleting(): string;
        /**
        * A validation event raised while the user is moving or resizing a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeModifying(): string;
        /**
        * Raised when the user adds a node to a ContainerNode.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerChildAdded(): string;
        /**
        * A validation event raised to let you prevent users from adding child nodes to a container.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerChildAdding(): string;
        /**
        * A validation event raised to let you prevent users from removing child nodes from a container.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerChildRemoving(): string;
        /**
        * Raised when the user removes a node from a ContainerNode.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerChildRemoved(): string;
        /**
        * Raised when the user folds a container by clicking the arrow-up button in the container's caption area.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerFolded(): string;
        /**
        * Raised when the user unfolds a container by clicking the arrow-down button in the container's caption area.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get containerUnfolded(): string;
        /**
        * Raised when a user expands a tree branch by clicking the [+] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get treeExpanded(): string;
        /**
        * Raised when a user collapses a tree branch by clicking the [-] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get treeCollapsed(): string;
        /**
        * Raised if ExpandButtonAction is set to RaiseEvents and the [+/-]
        * button of an Expandable node is clicked.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get expandButtonClicked(): string;
        /**
        * A validation event raised while the user is moving or resizing multiple items. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get selectionModifying(): string;
        /**
        * Raised when the diagram has been repainted.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get repaint(): string;
        /**
        * Raised when the size of the diagram canvas has changed.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get sizeChanged(): string;
        /**
        * Raised when a node is selected} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeSelected(): string;
        /**
        * Raised when a node is deselected} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeDeselected(): string;
        /**
        * Raised when a link is selected} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkSelected(): string;
        /**
        * Raised when a link is deselected} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkDeselected(): string;
        /**
        * Raised when the control is loaded.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get controlLoaded(): string;
        /**
        * Raised to hit-test custom adjustment handles.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get hitTestAdjustmentHandles(): string;
        /**
        * Raised to draw custom adjustment handles.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get drawAdjustmentHandles(): string;
        /**
        * Raised when the user clicks the diagram at a point where no items are located. Event handlers get a DiagramEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get clicked(): string;
        /**
        * Raised when entering inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get enterInplaceEditMode(): string;
        /**
        * Raised when leaving inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get leaveInplaceEditMode(): string;
        /**
        * Raised to let you create a custom inplace editor control. Event handlers get an InplaceEditEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get createEditControl(): string;
        /**
        * Raised when the user edits the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get cellTextEdited(): string;
        /**
        * Raised when the user edits the text of a grid cell. The event handlers get a CellEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get laneGridCellTextEdited(): string;
        /**
        * Raised when the Tag or Id of a diagram item must be serialized in XML format.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get serializeTag(): string;
        /**
        * Raised when the Tag or Id of a diagram item must be deserialized from XML format.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get deserializeTag(): string;
        /**
        * Raised when the user resizes a column in a table interactively.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get tableColumnResizing(): string;
        /**
        * Raised when the user finishes resizing a column in a table.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get tableColumnResized(): string;
        /**
        * Raised when the user resizes a row in a table interactively.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get tableRowResizing(): string;
        /**
        * Raised when the user finishes resizing a row in a table.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get tableRowResized(): string;
        /**
        * Raised when a node has been pasted from the clipboard.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodePasted(): string;
        /**
        * Raised when a link has been pasted from the clipboard.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkPasted(): string;
        /**
        * Raised when the user starts resizing a header.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get headerStartResizing(): string;
        /**
        * Raised when the user finished resizing a header.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get headerResized(): string;
        /**
        * Raised when an item is added to the diagram.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get itemAdded(): string;
        /**
        * Raised when an item is removed from the diagram.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get itemRemoved(): string;
        /**
        * Raised when an animated layout completes.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get animatedLayoutCompleted(): string;
        /**
        * Raised when the user clicks a hyperlink inside a node. Event handlers
        * receive a NodeEventArgs instance containing data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get hyperlinkClicked(): string;
        /**
        * Raised when the content of a ControlNode is added to the page DOM. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeDomCreated(): string;
        /**
        * Raised when the user starts to edit the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeTextEditing(): string;
        /**
        * Raised when the user starts to edit the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkTextEditing(): string;
        /**
        * Raised when the user starts to edit the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get cellTextEditing(): string;
        /**
        * Raised when the user starts to edit the text of a tree view item. The event handlers get a TreeItemEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get treeItemTextEditing(): string;
        /**
        * Raised when the user edits the text of a tree view item. The event handlers get a TreeItemEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get treeItemTextEdited(): string;
        /**
        * Raised when the user tries to select a node. This event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get nodeSelecting(): string;
        /**
        * Raised when the user tries to select a link. This event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get linkSelecting(): string;
        /**
        * Raised when the diagram selection has changed. The event handlers get a SelectionChangedEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get selectionChanged(): string;
        /**
        * Raised when the diagram data is loaded.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get dataLoaded(): string;
        /**
        * Raised when the user rotates the mouse wheel while the cursor is positioned over the diagram surface. The event handlers get a DiagramEventArgs instance that contains data about this event.
        * @type {String}
        * @summary A string containing the event name.
        */
        static get mouseWheel(): string;
    }
}
declare module "Diagramming/HandlesVisualStyle" {
    /**
    * @class Defines the Pen and Brush objects used to draw items' adjustment handles.
    */
    export class HandlesVisualStyle {
        /**
        * Initializes a new instance of the HandlesVisualStyle class.
        * @constructor
        */
        constructor(diagram: any);
        diagram: any;
        set handleStroke(arg: string);
        /**
        * Gets or sets the color used to stroke borders of adjustment handles.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get handleStroke(): string;
        set dashStroke(arg: string);
        /**
        * Gets or sets the color used to stroke dashed selection frames.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get dashStroke(): string;
        set handleStrokeThickness(arg: number);
        /**
        * Gets or sets the line width applied when stroking borders of adjustment handles.
        * @type {Number}
        * @summary A number specifying stroke thickness.
        */
        get handleStrokeThickness(): number;
        set dashStrokeThickness(arg: number);
        /**
        * Gets or sets the line width applied when stroking dashed selection frames.
        * @type {Number}
        * @summary A number specifying stroke thickness.
        */
        get dashStrokeThickness(): number;
        set handleBrush(arg: any);
        /**
        * Gets or sets the brush used to fill the interior of selection handles.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get handleBrush(): any;
        set hatchBrush(arg: any);
        /**
        * Gets or sets the brush used to draw hatch frames.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get hatchBrush(): any;
        set patternBrush(arg: any);
        /**
        * Gets or sets the brush used to draw selection frames for the MoveOnly style.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get patternBrush(): any;
        set controlPointBrush(arg: any);
        /**
        * Gets or sets the brush used to fill the interior of shape control points.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get controlPointBrush(): any;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        set rotationHandleBrush(arg: any);
        /**
        * Gets or sets the brush used to fill the interior of the rotation handle.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get rotationHandleBrush(): any;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        saveToXml(elementName: any, parentElement: any, context: any): void;
        loadFromXml(elementName: any, parentElement: any, context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        _handleBrush: any;
        _rotationHandleBrush: any;
        _controlPointBrush: any;
        _hatchBrush: any;
        _patternBrush: any;
        _handleStroke: string;
        _handleStrokeThickness: number;
        _dashStroke: string;
        _dashStrokeThickness: number;
        get effectiveHandleStrokeThickness(): number;
        get effectiveDashStrokeThickness(): number;
    }
}
declare module "Diagramming/NodeEffects" {
    /**
    * @class Represents the base class of all visual effects that can be applied to the nodes in a Diagram.
    */
    export class NodeEffect {
    }
    /**
    * @class Represents a glass-like visual effect.
    * @augments NodeEffect
    */
    export class GlassEffect extends NodeEffect {
        set type(arg: number);
        /**
        * Gets or sets the type of the glass effect.
        * @type {GlassEffectType}
        * @summary A member of the GlassEffectType enumeration. The default is Type1.
        */
        get type(): number;
        set glowColor(arg: string);
        /**
        * Gets or sets the color of the glow region of the effect.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value. The default value is "white".
        */
        get glowColor(): string;
        set reflectionColor(arg: string);
        /**
        * Gets or sets the color of the reflection region of the effect.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value. The default value is "white".
        */
        get reflectionColor(): string;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        set usePenAsGlow(arg: boolean);
        /**
        * Gets or sets whether the glow area of the effect should be painted using the stroke color of target node.
        * @type {Boolean}
        * @summary true to ignore glowColor and use node's stroke color for the glow, or false otherwise.
        */
        get usePenAsGlow(): boolean;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        saveToXml(xmlElement: any, context: any): void;
        loadFromXml(xmlElement: any, context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        /**
        * For internal use only.
        * @private
        */
        private getTransform;
        /**
        * For internal use only.
        * @private
        */
        private getClip;
        /**
        * For internal use only.
        * @private
        */
        private apply;
        _type: number;
        _glowColor: string;
        _usePenAsGlow: boolean;
        _reflectionColor: string;
    }
    /**
    * @class Represents a visual effect, that adds semitransparency to the node and emphasizes its outline by adding a shade and an inner stroke.
    * @augments NodeEffect
    */
    export class AeroEffect extends NodeEffect {
        set opacity(arg: number);
        /**
        * Gets or sets the opacity to apply to node's background.
        * @type {Number}
        * @summary A floating point value between 0 and 1.
        */
        get opacity(): number;
        set shadeColor(arg: string);
        /**
        * Gets or sets the color of the shade.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value. The default value is "black".
        */
        get shadeColor(): string;
        set innerOutlineColor(arg: string);
        /**
        * Gets or sets the color of the inner outline.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value. The default value is "white".
        */
        get innerOutlineColor(): string;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        saveToXml(xmlElement: any, context: any): void;
        loadFromXml(xmlElement: any, context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        /**
        * For internal use only.
        * @private
        */
        private getTransform;
        /**
        * For internal use only.
        * @private
        */
        private apply;
        _opacity: number;
        _shadeColor: string;
        _innerOutlineColor: string;
    }
}
declare module "Diagramming/Router" {
    /**
    * @class Implements a simple link routing algorithm that pulls link segments out of nodes they would overlap.
    */
    export class Router {
        static get extendedSearch(): boolean;
        static get cm(): number;
        static get createPath(): {
            rl(or: any, op: any, dr: any, dp: any): any[];
            rt(or: any, op: any, dr: any, dp: any): any[];
            rb(or: any, op: any, dr: any, dp: any): any[];
            rr(or: any, op: any, dr: any, dp: any): any[];
            bl(or: any, op: any, dr: any, dp: any): any[];
            bt(or: any, op: any, dr: any, dp: any): any[];
            bb(or: any, op: any, dr: any, dp: any): any[];
            br(or: any, op: any, dr: any, dp: any): any[];
            tl(or: any, op: any, dr: any, dp: any): any[];
            tt(or: any, op: any, dr: any, dp: any): any[];
            tb(or: any, op: any, dr: any, dp: any): any[];
            tr(or: any, op: any, dr: any, dp: any): any[];
            ll(or: any, op: any, dr: any, dp: any): any[];
            lt(or: any, op: any, dr: any, dp: any): any[];
            lb(or: any, op: any, dr: any, dp: any): any[];
            lr(or: any, op: any, dr: any, dp: any): any[];
        };
        static getNodeIntersections(p1: any, p2: any, node: any, segment: any): {
            x: any;
            y: any;
        }[];
        static getNearbyNodes(diagram: any, link: any, points: any): any[];
        static addLinkNodes(link: any, nodes: any): void;
        static mergeOverlappingNodes(nodes: any): any;
        static addBorderSegments(points: any, node: any, enter: any, exit: any): void;
        static pathLength(points: any): number;
        static intersectsNode(p1: any, p2: any, nodes: any): boolean;
        static cleanup(points: any): void;
        static removeUturns(points: any, nodes: any): void;
        static getSplitGroups(segments: any, horizontal: any): any[][];
        /**
        * Initializes a new instance of the Router class.
        * @constructor
        * @param {Diagram} [diagram] The diagram this router is associated with.
        */
        constructor(diagram?: any);
        diagram: any;
        preferredOrientation: number;
        cm: any;
        route(link: any): void;
        routeLinks(links: any): void;
        routeInternal(link: any): any;
        segmentsFromPoints(points: any): {
            index: number;
            points: any;
            horizontal(): boolean;
            xint(): any[];
            yint(): any[];
        }[];
        pullLinksApart(links: any): void;
        splitPaths(links: any, horizontal: any): void;
        markObstacles(): void;
        getNearestSide(rect: any, point: any, orient: any): string;
        getSector(pivot: any, point: any): 1 | 0 | 2 | 3;
    }
}
declare module "Diagramming/LinkLabel" {
    /**
    * @class Represents a label displayed by a DiagramLink. New labels can be added to a link by calling its addLabel method.
    */
    export class LinkLabel {
        /**
        * Initializes a new instance of the LinkLabel class.
        * @constructor
        * @param {DiagramLink} link The DiagramLink that displays the label.
        * @param {String} text The label's text.
        */
        constructor(link: any, text: string);
        link: any;
        _text: Text;
        set horizontalAlign(arg: number);
        /**
        * Gets or sets the label's horizontal alignment.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get horizontalAlign(): number;
        set verticalAlign(arg: number);
        /**
        * Gets or sets the label's vertical alignment.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get verticalAlign(): number;
        relativeTo: number;
        index: number;
        horizontalOffset: number;
        verticalOffset: number;
        set margin(arg: Thickness);
        /**
        * Gets or sets the label's margin.
        * @type {Thickness}
        * @summary A Thickness instance specifying the margin space on all sides of label.
        */
        get margin(): Thickness;
        enableWrap: boolean;
        maxWidth: number;
        cachedLayoutRect: Rect;
        set autoArrange(arg: boolean);
        /**
        * Gets or sets whether to automatically arrange the label to avoid overlapping nodes.
        * @type {Boolean}
        * @summary true if the label should be auto-arranged, or false otherwise.
        */
        get autoArrange(): boolean;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        _relativeTo: any;
        _index: any;
        _horizontalOffset: any;
        _verticalOffset: any;
        _margin: any;
        _horizontalAlign: any;
        _verticalAlign: any;
        _enableWrap: any;
        _maxWidth: any;
        set font(arg: Font);
        /**
        * Gets or sets the font used to render label's text.
        * @type {Font}
        * @summary An instance of the Font class.
        */
        get font(): Font;
        set textColor(arg: string);
        /**
        * Gets or sets the text color.
        * @type {String}
        * @summary A string value identifying the text color.
        */
        get textColor(): string;
        set brush(arg: any);
        /**
        * Gets or sets the brush used to draw the label's background.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        saveToXml(xmlElement: any, context: any): void;
        loadFromXml(xmlElement: any, context: any): void;
        set text(arg: string);
        /**
        * Gets or sets the label's text.
        * @type {String}
        * @summary A string containing the label's text.
        */
        get text(): string;
        _textColor: any;
        _brush: any;
        _font: any;
        _autoArrange: any;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        /**
        * Positions this label relatively to the specified link segment.
        * @param {Number} segment The segment index.
        * @param {Number} dx Horizontal offset from the segment center.
        * @param {Number} dy Vertical offset from the segment center.
        */
        setSegmentPosition(segment: number, dx: number, dy: number): void;
        /**
        * Positions this label relatively to the specified control point.
        * @param {Number} controlPoint The control point index.
        * @param {Number} dx Horizontal offset from the control point.
        * @param {Number} dy Vertical offset from the control point.
        */
        setControlPointPosition(controlPoint: number, dx: number, dy: number): void;
        /**
        * Positions this label relatively to the link length.
        * @param {Number} lengthFactor A value between 0 and 1 specifying the position of the label relatively to the link's length.
        */
        setLinkLengthPosition(lengthFactor: number): void;
        /**
        * For internal use only.
        * @private
        */
        private getLayoutRect;
        cachedLayoutSize: import("Drawing/Size").Size;
        /**
        * For internal use only.
        * @private
        */
        private get pivotPoint();
        /**
        * For internal use only.
        * @private
        */
        private pointAlongLength;
        /**
        * For internal use only.
        * @private
        */
        private getLength;
        /**
        * For internal use only.
        * @private
        */
        private invalidateLayout;
        /**
        * For internal use only.
        * @private
        */
        private invalidate;
        /**
        * For internal use only.
        * @private
        */
        private updateRect;
        /**
        * For internal use only.
        * @private
        */
        private getTextToEdit;
        /**
        * For internal use only.
        * @private
        */
        private getEditRect;
        /**
        * For internal use only.
        * @private
        */
        private setEditedText;
        createEditArgs(oldText: any, newText: any): LinkEventArgs;
        getDiagramItem(): any;
    }
    import { Text } from "@mindfusion/drawing";
    import { Thickness } from "@mindfusion/drawing";
    import { Rect } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
    import { LinkEventArgs } from "Diagramming/EventArgs";
}
declare module "Diagramming/Cell" {
    /**
    * @class Represents a cell of a TableNode.
    */
    export class Cell {
        _text: Text;
        set tooltip(arg: string);
        /**
        * Gets or sets the tooltip text that should be displayed when the mouse hovers over this cell.
        * @type {String}
        * @summary A string containing the tooltip text.
        */
        get tooltip(): string;
        clone(): any;
        toJson(): {
            text: string;
            textAlignment: number;
            lineAlignment: number;
            imageLocation: string;
            imageAlign: number;
            brush: any;
            textColor: string;
            rowSpan: number;
            columnSpan: number;
            tooltip: string;
            tag: any;
        };
        fromJson(json: any): void;
        set text(arg: string);
        /**
        * Gets or sets the text label displayed by this cell.
        * @type {String}
        * @summary A string containing the cell's text. The default value is empty string "".
        */
        get text(): string;
        set textAlignment(arg: number);
        /**
        * Gets or sets the horizontal alignment of cell's text.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get textAlignment(): number;
        set lineAlignment(arg: number);
        /**
        * Gets or sets the vertical alignment of cell's text.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get lineAlignment(): number;
        set textPadding(arg: Thickness);
        /**
        * Gets or sets the padding distance between cell's borders and its text.
        * @type {Thickness}
        * @summary A Thickness instance specifying text padding.
        */
        get textPadding(): Thickness;
        set imageLocation(arg: string);
        /**
        * Gets or sets URL of the image to display inside this cell.
        * @type {String}
        * @summary A URL string that identifies the image to be loaded.
        */
        get imageLocation(): string;
        set imageAlign(arg: number);
        /**
        * Gets or sets the alignment of cell's image.
        * @type {ImageAlign}
        * @summary A member of the ImageAlign enumeration.
        */
        get imageAlign(): number;
        set imagePadding(arg: Thickness);
        /**
        * Gets or sets the padding distance between cell's borders and image.
        * @type {Thickness}
        * @summary A Thickness instance specifying image padding.
        */
        get imagePadding(): Thickness;
        _brush: any;
        _textColor: any;
        _rowSpan: any;
        _columnSpan: any;
        _tooltip: any;
        _font: any;
        set imageContent(arg: string);
        /**
        * Gets or sets a Base64-encoded image to display inside this cell.
        * @type {String}
        * @summary A Base64-encoded representation of an image.
        */
        get imageContent(): string;
        set tag(arg: any);
        /**
        * Gets or sets custom data tag associated with this cell.
        * @type {Object}
        * @summary An Object containing custom data.
        */
        get tag(): any;
        /**
        * Loads the cell's content from an XML element.
        * @param {Element} xmlElement An XML DOM element containing the cell's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        _imageAlign: any;
        _imagePadding: any;
        /**
        * Saves the cell's content into an XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the cell's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        set font(arg: Font);
        /**
        * Gets or sets the font used to render cell's text.
        * @type {Font}
        * @summary An instance of the Font class.
        */
        get font(): Font;
        set brush(arg: any);
        /**
        * Gets or sets the brush used to paint the cell's background.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        set textColor(arg: string);
        /**
        * Gets or sets the cell's text color.
        * @type {String}
        * @summary A string value identifying the text color.
        */
        get textColor(): string;
        set columnSpan(arg: number);
        /**
        * Gets or sets the number of columns spanned by this cell.
        * @type {Number}
        * @summary An integer value specifying the number of spanned columns.
        */
        get columnSpan(): number;
        set rowSpan(arg: number);
        /**
        * Gets or sets the number of rows spanned by this cell.
        * @type {Number}
        * @summary An integer value specifying the number of spanned rows.
        */
        get rowSpan(): number;
        _tag: any;
        _textCacheInvalid: boolean;
        set image(arg: HTMLImageElement);
        /**
        * Gets or sets the image displayed by this cell.
        * @type {HTMLImageElement}
        * @summary An image object to render as cell's content.
        */
        get image(): HTMLImageElement;
        _image: Image;
        _imageLocation: any;
        _imageContent: any;
        /**
        * For internal use only.
        * @private
        */
        private loadImage;
        invalidate(): void;
        setDiagramDirty(): void;
    }
    import { Text } from "@mindfusion/drawing";
    import { Thickness } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
    import { Image } from "@mindfusion/drawing";
}
declare module "Diagramming/TreeViewItem" {
    export class TreeViewItem {
        static getIconRect(bounds: any): Rect;
        _text: Text;
        set tooltip(arg: string);
        /**
        * Gets or sets the tooltip text that should be displayed when the mouse hovers over this item.
        * @type {String}
        * @summary A string containing the tooltip text.
        */
        get tooltip(): string;
        _height: number;
        _children: any[];
        incomingLinks: any[];
        outgoingLinks: any[];
        _expanded: boolean;
        clone(): any;
        toJson(): {
            label: string;
            height: number;
            imageLocation: string;
            brush: any;
            labelBrush: string;
            tooltip: string;
            tag: any;
            expanded: boolean;
        };
        fromJson(json: any): void;
        set text(arg: string);
        /**
        * Gets or sets the text label displayed by this item.
        * @type {String}
        * @summary A string containing the item's text. The default value is empty string "".
        */
        get text(): string;
        set imageLocation(arg: string);
        /**
        * Gets or sets URL of the image to display inside this item.
        * @type {String}
        * @summary A URL string that identifies the image to be loaded.
        */
        get imageLocation(): string;
        set imagePadding(arg: Thickness);
        /**
        * Gets or sets the padding distance between item's borders and image.
        * @type {Thickness}
        * @summary A Thickness instance specifying image padding.
        */
        get imagePadding(): Thickness;
        _brush: any;
        _textColor: any;
        _tooltip: any;
        _font: any;
        set imageContent(arg: string);
        /**
        * Gets or sets a Base64-encoded image to display inside this item.
        * @type {String}
        * @summary A Base64-encoded representation of an image.
        */
        get imageContent(): string;
        _tag: any;
        /**
        * Loads the item's content from an XML element.
        * @param {Element} xmlElement An XML DOM element containing the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        set font(arg: Font);
        /**
        * Gets or sets the font used to render item's text.
        * @type {Font}
        * @summary An instance of the Font class.
        */
        get font(): Font;
        set textColor(arg: string);
        /**
        * Gets or sets the item's text color.
        * @type {String}
        * @summary A string value identifying the text color.
        */
        get textColor(): string;
        set height(arg: number);
        /**
        * Gets or sets the height of this item.
        * @type {Number}
        * @summary A number specifying item's height.
        */
        get height(): number;
        set brush(arg: any);
        /**
        * Gets or sets the brush used to paint item's background.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        set expanded(arg: boolean);
        /**
        * Gets or sets a value indicating whether this item is expanded to show its children.
        * @type {Boolean}
        * @summary true if the item is expanded, or false otherwise.
        */
        get expanded(): boolean;
        /**
        * Saves the item's content into an XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        get flatItems(): TreeViewItem[];
        get rows(): {
            height: number;
            incomingLinks: any[];
            outgoingLinks: any[];
            item: TreeViewItem;
        }[];
        /**
        * For internal use only.
        * @private
        */
        private getIncomingLinks;
        /**
        * For internal use only.
        * @private
        */
        private getOutgoingLinks;
        updateCanvasElements(rect: any, body: any, pathOnly: any, x: any, y: any, offset: any): number;
        bounds: Rect;
        itemFromPoint(point: any, y: any): {
            result: any;
            h: number;
        };
        getItemRect(treeItem: any, y: any, nodeBounds: any, parentBounds: any, collapsed: any): {
            result: any;
            h: number;
        };
        getItemsArea(defaultFont: any, styled: any, ignoreTransform: any, offset: any, offsetChildItem: any): Size;
        hitTestExpander(mousePosition: any): boolean;
        /**
        * Gets the parent item of this item.
        * @type {TreeViewItem}
        * @summary The parent item.
        */
        get parent(): TreeViewItem;
        /**
        * Gets a list of this item's children.
        * @type {Array}
        * @summary An array of TreeViewItem objects.
        */
        get children(): any[];
        set tag(arg: any);
        /**
        * Gets or sets custom data tag associated with this item.
        * @type {Object}
        * @summary An Object containing custom data.
        */
        get tag(): any;
        _textCacheInvalid: boolean;
        set image(arg: HTMLImageElement);
        /**
        * Gets or sets the image displayed by this item.
        * @type {HTMLImageElement}
        * @summary An image object to render as item's content.
        */
        get image(): HTMLImageElement;
        _image: Image;
        _imagePadding: any;
        _imageLocation: any;
        _imageContent: any;
        /**
        * For internal use only.
        * @private
        */
        private loadImage;
        invalidate(boundsChanged: any): void;
        setDiagramDirty(): void;
    }
    import { Text } from "@mindfusion/drawing";
    import { Thickness } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
    import { Rect } from "@mindfusion/drawing";
    import { Size } from "@mindfusion/drawing";
    import { Image } from "@mindfusion/drawing";
}
declare module "Diagramming/EventArgs" {
    /**
    * @class Contains the arguments passed to handlers of item-related events.
    * @augments CancelEventArgs
    */
    export class ItemEventArgs extends CancelEventArgs {
        /**
        * Initializes a new instance of the ItemEventArgs class.
        * @constructor
        * @param {Object} args
        */
        constructor(args: any);
        sender: any;
        _bounds: any;
        _mousePosition: any;
        _mouseButton: any;
        _adjustmentHandle: any;
        _newText: any;
        _oldText: any;
        _context: any;
        _item: any;
        /**
        * Gets the current mouse pointer position.
        * @type {Point}
        * @summary A Point instance containing mouse pointer coordinates.
        */
        get mousePosition(): Point;
        /**
        * Gets which mouse button has been pressed.
        * @type {MouseButton}
        * @summary A member of the MouseButton enumeration.
        */
        get mouseButton(): number;
        set adjustmentHandle(arg: number);
        /**
        * Gets the adjustment handle being moved by the user.
        * @type {AdjustmentHandles}
        * @summary A member of the AdjustmentHandles enumeration.
        */
        get adjustmentHandle(): number;
        /**
        * Gets the text that has just been entered by the user.
        * @type {String}
        * @summary A string containing newly entered text.
        */
        get newText(): string;
        /**
        * Gets the text that had been displayed in the node before the user edited it.
        * @type {String}
        * @summary A string containing item's original text.
        */
        get oldText(): string;
        /**
        * Gets the canvas rendering context.
        * @type {CanvasRenderingContext2D}
        * @summary A rendering context used to draw on the Canvas element.
        */
        get context(): CanvasRenderingContext2D;
        /**
        * Immediately cancels the creation or modification of the node.
        */
        cancelDrag(): void;
        shouldCancel: boolean;
        shouldCancelDrag(): boolean;
        /**
        * Gets the diagram item for which the event is raised.
        * @type {DiagramItem}
        * @summary An instance of the DiagramItem class.
        */
        get item(): DiagramItem;
    }
    /**
    * @class Contains the arguments passed to handlers of node-related events.
    * @augments ItemEventArgs
    */
    export class NodeEventArgs extends ItemEventArgs {
        _node: any;
        _container: any;
        _hyperlink: any;
        /**
        * Gets the node for which the event is raised.
        * @type {DiagramNode}
        * @summary An instance of the DiagramNode class.
        */
        get node(): DiagramNode;
        /**
        * Gets the container a node has been added to or removed from.
        * @type {ContainerNode}
        * @summary A ContainerNode instance.
        */
        get container(): ContainerNode;
        /**
        * Gets the hyperlink that was clicked inside a node.
        * @type {String}
        * @summary A string containing clicked hyperlink.
        */
        get hyperlink(): string;
    }
    /**
    * @class Contains the arguments passed to handlers of link-related events.
    * @augments ItemEventArgs
    */
    export class LinkEventArgs extends ItemEventArgs {
        _link: any;
        _label: any;
        /**
        * Gets the link for which the event is raised.
        * @type {DiagramLink}
        * @summary A DiagramLink instance.
        */
        get link(): DiagramLink;
        /**
        * Gets the link label for which the event is raised.
        * @type {LinkLabel}
        * @summary A LinkLabel instance.
        */
        get label(): LinkLabel;
    }
    /**
    * @class Contains the arguments passed to handlers of component-related events.
    * @augments NodeEventArgs
    */
    export class ComponentEventArgs extends NodeEventArgs {
        _component: any;
        /**
        * Gets the component for which the event was raised.
        * @type {Component}
        * @summary An instance of the Component class.
        */
        get component(): Component;
    }
    /**
    * @class Contains the arguments passed to handlers of selection-related events.
    * @augments CancelEventArgs
    */
    export class SelectionEventArgs extends CancelEventArgs {
        /**
        * Initializes a new instance of the SelectionEventArgs class.
        * @constructor
        * @param {Object} args
        */
        constructor(args: any);
        sender: any;
        _mousePosition: any;
        _adjustmentHandle: any;
        /**
        * Gets the current mouse pointer position.
        * @type {Point}
        * @summary A Point instance containing mouse pointer coordinates.
        */
        get mousePosition(): Point;
        /**
        * Gets the adjustment handle being moved by the user.
        * @type {AdjustmentHandles}
        * @summary A member of the AdjustmentHandles enumeration.
        */
        get adjustmentHandle(): number;
        /**
        * Immediately cancels the current selection modification.
        */
        cancelDrag(): void;
        shouldCancel: boolean;
        shouldCancelDrag(): boolean;
    }
    /**
    * @class Contains the arguments passed to handlers of global diagram events such as clicked.
    * @augments EventArgs
    */
    export class DiagramEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the DiagramEventArgs class.
        * @constructor
        */
        constructor(args: any);
        sender: any;
        _mousePosition: any;
        _mouseButton: any;
        _delta: any;
        /**
        * Gets the current mouse pointer position.
        * @type {Point}
        * @summary A Point instance containing mouse pointer coordinates.
        */
        get mousePosition(): Point;
        /**
        * Gets which mouse button has been pressed.
        * @type {MouseButton}
        * @summary A member of the MouseButton enumeration.
        */
        get mouseButton(): number;
        /**
        * Gets the vertical scroll amount of a wheel event.
        * @type {Number}
        * @summary The vertical scroll amount.
        */
        get delta(): number;
    }
    /**
    * @class Contains the arguments passed to handlers of inplace edit related events.
    * @augments EventArgs
    */
    export class InplaceEditEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the InplaceEditEventArgs class.
        * @constructor
        */
        constructor(args: any);
        _item: any;
        _control: any;
        _bounds: any;
        /**
        * Gets a reference to the item being edited.
        * @type {DiagramItem}
        * @summary A DiagramItem instance.
        */
        get item(): DiagramItem;
        set control(arg: Element);
        /**
        * Gets or sets the control used to edit the item's text.
        * @type {Element}
        * @summary An HTML DOM element to use as editor.
        */
        get control(): Element;
        /**
        * Gets the bounds of the item being edited.
        * @type {Rect}
        * @summary A Rect instance containing item's coordinates.
        */
        get bounds(): Rect;
    }
    /**
    * @class Contains the arguments passed to handlers of table cell -related events.
    * @augments CancelEventArgs
    */
    export class CellEventArgs extends CancelEventArgs {
        /**
        * Initializes a new instance of the CellEventArgs class.
        * @constructor
        */
        constructor(args: any);
        sender: any;
        _node: any;
        _cell: any;
        _column: any;
        _row: any;
        _newText: any;
        _oldText: any;
        _context: any;
        _mouseButton: any;
        _mousePosition: any;
        /**
        * Gets the cell related to the event.
        * @type {Cell}
        * @summary A Cell instance.
        */
        get cell(): Cell;
        /**
        * Gets which mouse button has been pressed.
        * @type {MouseButton}
        * @summary A member of the MouseButton enumeration.
        */
        get mouseButton(): number;
        /**
        * Gets the text that has just been entered by the user.
        * @type {String}
        * @summary A string containing newly entered text.
        */
        get newText(): string;
        /**
        * Gets the text that had been displayed in the node before the user edited it.
        * @type {String}
        * @summary A string containing item's original text.
        */
        get oldText(): string;
        /**
        * Gets the canvas rendering context.
        * @type {CanvasRenderingContext2D}
        * @summary A rendering context used to draw on the Canvas element.
        */
        get context(): CanvasRenderingContext2D;
    }
    /**
    * @class Contains the arguments passed to handlers of table row and column resizing related events.
    * @augments CellEventArgs
    */
    export class CellValidationEventArgs extends CellEventArgs {
        /**
        * Cancels the resize of the node's row or column.
        * @remarks Calling this method immediately stops the operation.
        */
        cancelDrag(): void;
        shouldCancelDrag(): () => void;
    }
    /**
    * @class Contains the arguments passed to the serializeTag and deserializeTag event handlers.
    * @augments EventArgs
    */
    export class SerializeTagEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the SerializeTagEventArgs class.
        * @constructor
        */
        constructor(args: any);
        _item: any;
        _tag: any;
        _element: any;
        _context: any;
        _propertyName: any;
        /**
        * Gets the object whose property is being serialized or deserialized.
        * @type {Object}
        * @summary An object whose custom data is being serialized.
        */
        get object(): any;
        set tag(arg: any);
        /**
        * Gets or sets the tag value being serialized or deserialized.
        * @type {Object}
        * @summary An object containing custom data.
        */
        get tag(): any;
        /**
        * Gets the XML element where the tag value should be serialized to or deserialized from.
        * @type {Element}
        * @summary The XML element.
        */
        get element(): Element;
        /**
        * Gets an XmlPersistContext object providing helper read and write methods for various value types.
        * @type {XmlPersistContext}
        * @summary An instance of the XmlPersistContext class.
        */
        get context(): any;
        /**
        * Gets the name of the property being serialized.
        * @type {String}
        * @summary A string containing property name.
        */
        get propertyName(): string;
    }
    /**
    * @class Contains the arguments passed to handlers of header-related events.
    * @augments EventArgs
    */
    export class HeaderEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the HeaderEventArgs class.
        * @constructor
        */
        constructor(header: any);
        _header: any;
        /**
        * Gets the header related to the event.
        * @type {Header}
        * @summary The grid header.
        */
        get header(): any;
    }
    /**
    * @class Contains the arguments passed to handlers of header resize events.
    * @augments HeaderEventArgs
    */
    export class HeaderResizeEventArgs extends HeaderEventArgs {
        /**
        * Initializes a new instance of the HeaderEventArgs class.
        * @constructor
        */
        constructor(header: any, horizontal: any);
        _horizontal: any;
        /**
        * Gets a value indicating whether the user resizes the header horizontally.
        * @type {Boolean}
        * @summary true if resizing horizontally, or false otherwise.
        */
        get horizontal(): boolean;
        set cancel(arg: boolean);
        /**
        * Gets or sets a value indicating whether to allow the current operation.
        * @type {Boolean}
        * @summary true to cancel the operation, or false otherwise.
        */
        get cancel(): boolean;
        _cancel: boolean;
        /**
        * Immediately cancels the resize.
        */
        cancelDrag(): void;
        shouldCancel: boolean;
        shouldCancelDrag(): boolean;
    }
    /**
    * @class Contains the arguments passed to handlers of tree view items -related events.
    * @augments CancelEventArgs
    */
    export class TreeItemEventArgs extends CancelEventArgs {
        /**
        * Initializes a new instance of the TreeItemEventArgs class.
        * @constructor
        */
        constructor(args: any);
        sender: any;
        _node: any;
        _item: any;
        _newText: any;
        _oldText: any;
        _context: any;
        _mouseButton: any;
        _mousePosition: any;
        /**
        * Gets the node related to the event.
        * @type {TreeViewNode}
        * @summary A TreeViewNode instance.
        */
        get node(): TreeViewNode;
        /**
        * Gets the item related to the event.
        * @type {TreeViewItem}
        * @summary A TreeViewItem instance.
        */
        get item(): TreeViewItem;
        /**
        * Gets which mouse button has been pressed.
        * @type {MouseButton}
        * @summary A member of the MouseButton enumeration.
        */
        get mouseButton(): number;
        /**
        * Gets the text that has just been entered by the user.
        * @type {String}
        * @summary A string containing newly entered text.
        */
        get newText(): string;
        /**
        * Gets the text that had been displayed in the node before the user edited it.
        * @type {String}
        * @summary A string containing item's original text.
        */
        get oldText(): string;
        /**
        * Gets the canvas rendering context.
        * @type {CanvasRenderingContext2D}
        * @summary A rendering context used to draw on the Canvas element.
        */
        get context(): CanvasRenderingContext2D;
    }
    /**
    * @class Contains the arguments passed to handlers of the selectionChanged event.
    * @augments EventArgs
    */
    export class SelectionChangedEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the SelectionChangedEventArgs class.
        * @constructor
        * @param {Object} args
        */
        constructor(args: any);
        sender: any;
        _oldItems: any;
        _newItems: any;
        /**
        * Gets the selected items before the change.
        * @type {Array}
        * @summary An array of items.
        */
        get oldItems(): any[];
        /**
        * Gets the selected items after the change.
        * @type {Array}
        * @summary An array of items.
        */
        get newItems(): any[];
    }
    import { CancelEventArgs } from "@mindfusion/controls";
    import { Point } from "@mindfusion/drawing";
    import { DiagramItem } from "Diagramming/LoadOrder";
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { ContainerNode } from "Diagramming/LoadOrder";
    import { DiagramLink } from "Diagramming/LoadOrder";
    import { LinkLabel } from "Diagramming/LinkLabel";
    import { Component } from "@mindfusion/drawing";
    import { EventArgs } from "@mindfusion/controls";
    import { Rect } from "@mindfusion/drawing";
    import { Cell } from "Diagramming/Cell";
    import { TreeViewNode } from "Diagramming/LoadOrder";
    import { TreeViewItem } from "Diagramming/TreeViewItem";
}
declare module "Diagramming/LayoutUtils" {
    export default LayoutUtils;
    class LayoutUtils {
        static arrange(layout: any, layoutCtr: any, animation: any): void;
        static completeLayout(graph: any, layout: any): void;
        static prepareLayout(graph: any): {
            anchoring: Map<any, any>;
        };
        static applyAnimatedLayout(graph: any, layout: any, dx: any, dy: any, info: any, layoutCtr: any, animationOptions: any, completeGraph: any): any;
        static shouldMoveWithMaster(vertices: any, master: any, oldPos: any): boolean;
        static applyLayout(graph: any, layout: any, dx: any, dy: any, info: any, layoutCtr: any): any;
        static toGraph(simple: any, keepGroups: any, hierarchy: any, nodes: any, links: any, container: any): Graph;
        static getAbsoluteNodeMaster(node: any, includeGroups: any, container: any): any;
        static collectGroup(node: any, group: any, visited: any, includeGroups: any): void;
        static buildNodeMap(nodes: any, topNodes: any, nodeMap: any, keepGroups: any, container: any): void;
        static getUnionBounds(nodes: any): Rect;
        static resetLinks(links: any): void;
        static getGraphBounds(graph: any, defaultBounds: any): any;
        static collectHierarchyInfo(graph: any): void;
    }
    import { Graph } from "@mindfusion/graphs";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/CompositeCommand" {
    /**
    * @class Represents a set of Command instances as a single operation. Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time.
    * @augments Command
    */
    export class CompositeCommand extends Command {
        commands: any[];
        name: string;
        /**
        * Gets a list containing the child Command objects.
        * @returns {Array} The list of child Command objects.
        */
        getCommands(): any[];
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/UndoManager" {
    export default UndoManager;
    class UndoManager {
        constructor(diagram: any);
        diagram: any;
        undoHistory: any[];
        undoIndex: number;
        currentComposite: CompositeCommand;
        startCompositeCounter: number;
        executeCommand(command: any): void;
        addToHistory(command: any): void;
        startComposite(): CompositeCommand;
        endComposite(addToHistory: any): void;
        undo(): void;
        redo(): void;
        canUndo(): boolean;
        canRedo(): boolean;
    }
    import { CompositeCommand } from "Diagramming/CompositeCommand";
}
declare module "Diagramming/ManipulatorHelper" {
    export default ManipulatorHelper;
    /**
    * @namespace MindFusion.Diagramming
    */
    class ManipulatorHelper {
    }
    namespace ManipulatorHelper {
        const tm: number[];
        const tm2: number[];
        const tm3: number[];
        const tm4: number[];
        const tm5: number[];
        const tm6: number[];
        const tm10: number[];
        const tm11: number[];
    }
}
declare module "Diagramming/ChangeItemCommand" {
    /**
    * @class Handles undo / redo of property changes.
    * @augments Command
    */
    export class ChangeItemCommand extends Command {
        /**
        * Initializes a new instance of the ChangeItemCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {DiagramItem} item The DiagramItem that will be modified..
        */
        constructor(diagram: any, item: any);
        state: any;
        item: any;
        exchangeStates(): void;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/RemoveItemCommand" {
    /**
    * @class Implements deletion of diagram items.
    * @augments Command
    */
    export class RemoveItemCommand extends Command {
        /**
        * Initializes a new instance of the RemoveItemCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {DiagramItem} item A DiagramItem that should be removed from the Diagram.
        */
        constructor(diagram: any, item: any);
        item: any;
        name: string;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/Factory" {
    /**
    * @class Provides shortcut methods for creating and adding instances of the standard item types.
    * Obtain an instance of this class through the factory property of the Diagram class.
    */
    export class Factory {
        /**
        * Initializes a new instance of the Factory class over the specified Diagram.
        * @constructor
        * @param {Diagram} diagram The Diagram object for which to create the new factory.
        */
        constructor(diagram: any);
        diagram: any;
        /**
        * Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Sets the bounds of the shape to create.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {ShapeNode} The newly created ShapeNode instance.
        */
        createShapeNode(...args: any[]): ShapeNode;
        /**
        * Creates a new TableNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Specifies the bounding rectangle of the new node.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {TableNode} The newly created TableNode instance.
        */
        createTableNode(...args: any[]): TableNode;
        /**
        * Creates a new ContainerNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Specifies the bounding rectangle of the new node.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {ContainerNode} The newly created ContainerNode instance.
        */
        createContainerNode(...args: any[]): ContainerNode;
        /**
        * Creates a new SvgNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Sets the bounds of the shape to create.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {SvgNode} The newly created SvgNode instance.
        */
        createSvgNode(...args: any[]): SvgNode;
        /**
        * Creates a new VideoNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Specifies the bounding rectangle of the new node.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {VideoNode} The newly created VideoNode instance.
        */
        createVideoNode(...args: any[]): VideoNode;
        /**
        * Creates a new ControlNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Specifies the bounding rectangle of the new node.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {ControlNode} The newly created ControlNode instance.
        */
        createControlNode(...args: any[]): ControlNode;
        /**
        * Creates a new TreeViewNode instance and adds it to the nodes collection of the underlying diagram.
        * @param {Rect} [bounds] Specifies the bounding rectangle of the new node.
        * @param {Number} [x]  The x-coordinate of the upper-left corner of the new node.
        * @param {Number} [y] The y-coordinate of the upper-left corner of the new node.
        * @param {Number} [width] The width of the new node.
        * @param {Number} [height] The height of the new node.
        * @returns {TreeViewNode} The newly created TreeViewNode instance.
        */
        createTreeViewNode(...args: any[]): TreeViewNode;
        /**
        * Creates a new DiagramLink instance between the specified nodes
        * and adds it to the links collection of the underlying diagram.
        * @param {DiagramNode} [origin] The origin node.
        * @param {DiagramNode} [destination] The destination node.
        * @returns {DiagramLink} The newly created DiagramLink instance.
        */
        createDiagramLink(origin?: DiagramNode, destination?: DiagramNode): DiagramLink;
    }
    import { ShapeNode } from "Diagramming/LoadOrder";
    import { TableNode } from "Diagramming/LoadOrder";
    import { ContainerNode } from "Diagramming/LoadOrder";
    import { SvgNode } from "Diagramming/LoadOrder";
    import { VideoNode } from "Diagramming/LoadOrder";
    import { ControlNode } from "Diagramming/LoadOrder";
    import { TreeViewNode } from "Diagramming/LoadOrder";
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { DiagramLink } from "Diagramming/LoadOrder";
}
declare module "Diagramming/XmlPersistContext" {
    /**
    * @class Contains helper methods for serialization of diagram contents to and from XML documents.
    */
    export class XmlPersistContext {
        /**
        * Initializes a new instance of the XmlPersistContext class.
        * @constructor
        * @param {Diagram} diagram The Diagram that will be serialized or deserialized.
        */
        constructor(diagram: Diagram, document: any);
        diagram: Diagram;
        document: any;
        items: any[];
        brushes: any[];
        images: any[];
        styles: any[];
        svgs: any[];
        effects: any[];
        brushesMap: Map<any, any>;
        imagesMap: Map<any, any>;
        stylesMap: Map<any, any>;
        svgsMap: Map<any, any>;
        effectsMap: Map<any, any>;
        saveItemToXml(item: any, collectionElement: any, elementName: any): void;
        saveHeaderToXml(header: any, collectionElement: any, elementName: any): void;
        /**
        * Adds a new child node with the specified name and value to the specified parent node.
        * @param {String} elementName A string containing the name of new child element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {String} [innerText] Optional value to be added as child text node of the new element.
        * @returns {Element} The newly created DOM Element object.
        */
        addChildElement(elementName: string, parentElement: Element, innerText?: string): Element;
        instantiateItem(classId: any, element: any): any;
        instantiateObject(classId: any): import("Diagramming/Lanes/Header").default;
        instantiateEffect(classId: any): GlassEffect;
        loadItemFromXml(itemElement: any): any;
        classVersion: number;
        loadHeaderFromXml(headerElement: any): import("Diagramming/Lanes/Header").default;
        writeItemReference(item: any, elementName: any, parentElement: any): Element;
        readItemReference(itemElement: any): any;
        writeResources(parentElement: any): void;
        readResources(parentElement: any): void;
        writeResource(resObject: any, elementName: any, parentElement: any, contentWriter: any, resMap: any): Element;
        writeBrushes(parentElement: any): void;
        readBrushes(parentElement: any): void;
        /**
        * Writes a reference to the specified brush. The brush is registered within the internal hashtable for subsequent serialization.
        * @param {Object} brush The Brush object that should be saved in current XML document.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeBrush(brush: any, elementName: string, parentElement: Element): Element;
        /**
        * Reads a Brush object with the specified name.
        * @param {String} elementName A string specifying the name of the brush XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {Object} [defaultValue] The default brush to return if specified child XML element does not exist.
        * @returns {Object} The brush object loaded from XML.
        */
        readBrush(elementName: string, parentElement: Element, defaultValue?: any): any;
        writeBrushContent(brushElement: any, brush: any): void;
        readBrushContent(brushElement: any): string;
        writeImages(parentElement: any): void;
        readImages(parentElement: any): void;
        /**
        * Writes a reference to the specified image. The image is registered within the internal hashtable for subsequent serialization.
        * @param {String} image Base64-encoded image data that should be saved in XML.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeImage(image: string, elementName: string, parentElement: Element): Element;
        /**
        * Reads an image object with the specified name.
        * @param {String} elementName A string specifying the name of the image XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {String} Base64-encoded image data loaded from XML.
        */
        readImage(elementName: string, parentElement: Element): string;
        writeStyles(parentElement: any): void;
        readStyles(parentElement: any): void;
        writeStyle(style: any, elementName: any, parentElement: any, classId: any): Element;
        readStyle(elementName: any, parentElement: any): any;
        writeStyleContent(styleElement: any, style: any, classId: any): void;
        readStyleContent(styleElement: any): Style;
        writeEffects(parentElement: any): void;
        readEffects(parentElement: any): void;
        writeEffect(effect: any, elementName: any, parentElement: any): Element;
        readEffect(element: any): any;
        writeEffectContent(effectElement: any, effect: any): void;
        readEffectContent(effectElement: any): GlassEffect;
        readPen(elementName: any, parentElement: any): {
            brush: any;
            dashStyle: number;
            width: number;
        };
        writePen(pen: any, elementName: any, parentElement: any): Element;
        writeSvgs(parentElement: any): void;
        readSvgs(parentElement: any): void;
        writeSvgContent(svgElement: any, svg: any): void;
        readSvgContent(element: any): any;
        readStringFormat(elementName: any, parentElement: any): {
            alignment: number;
            lineAlignment: number;
        };
        writeStringFormat(stringFormat: any, elementName: any, parentElement: any): Element;
        /**
        * Writes a string value with the specified name.
        * @param {String} stringValue The string that should be saved in current XML document.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeString(stringValue: string, elementName: string, parentElement: Element): Element;
        /**
        * Reads a string value with the specified name.
        * @param {String} elementName The name of the string's XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {Object} [defaultValue] The default string to return if specified child XML element does not exist.
        * @returns {String} The string loaded from XML.
        */
        readString(elementName: string, parentElement: Element, defaultValue?: any): string;
        /**
        * Writes a floating-point number with the specified name.
        * @param {Number} floatValue The number that should be saved in current XML document.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeFloat(floatValue: number, elementName: string, parentElement: Element): Element;
        /**
        * Reads a floating-point number with the specified name.
        * @param {String} elementName A string specifying the name of the number XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {Number} [defaultValue] The default number to return if specified child XML element does not exist.
        * @returns {Number} The number loaded from XML.
        */
        readFloat(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
        * Writes an integer number with the specified name.
        * @param {Number} intValue The number that should be saved in current XML document.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeInt(intValue: number, elementName: string, parentElement: Element): Element;
        /**
        * Reads an integer number with the specified name.
        * @param {String} elementName A string specifying the name of the number XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {Number} [defaultValue] The default number to return if specified child XML element does not exist.
        * @returns {Number} The number loaded from XML.
        */
        readInt(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
        * Writes a Boolean value with the specified name.
        * @param {Boolean} boolValue The Boolean value that should be saved in current XML document.
        * @param {String} elementName A string specifying the name of the new element.
        * @param {Element} parentElement The parent DOM Element object.
        * @returns {Element} The newly created DOM Element object.
        */
        writeBool(boolValue: boolean, elementName: string, parentElement: Element): Element;
        /**
        * Reads a Boolean value with the specified name.
        * @param {String} elementName A string specifying the name of the Boolean XML element.
        * @param {Element} parentElement The parent DOM Element object.
        * @param {Boolean} defaultValue The default value to return if specified child XML element does not exist.
        * @returns {Boolean} The value loaded from XML.
        */
        readBool(elementName: string, parentElement: Element, defaultValue: boolean): boolean;
        writeFloatArray(floatArray: any, elementName: any, subElementName: any, parentElement: any): Element;
        readFloatArray(elementName: any, subElementName: any, parentElement: any): number[];
        writeColorArray(colorArray: any, elementName: any, subElementName: any, parentElement: any): Element;
        readColorArray(elementName: any, subElementName: any, parentElement: any): any[];
        writeColor(colorValue: any, elementName: any, parentElement: any): Element;
        readColor(elementName: any, parentElement: any, defaultValue: any): any;
        readColorValue(element: any, defaultValue: any): any;
        writeFont(font: any, elementName: any, parentElement: any): Element;
        readFont(elementName: any, parentElement: any): Font;
        writeAnchorPattern(anchorPattern: any, elementName: any, parentElement: any): any;
        readAnchorPattern(elementName: any, parentElement: any, standalone: any): AnchorPattern;
        writeShape(shape: any, elementName: any, parentElement: any): Element;
        readShape(elementName: any, parentElement: any): any;
        readArrowheadV13(elementName: any, parentElement: any): string;
        innerText(element: any): any;
        writeSizeF(size: any, elementName: any, parentElement: any): Element;
        readSizeF(elementName: any, parentElement: any): Size;
        writeRectangleF(rectangle: any, elementName: any, parentElement: any): Element;
        readRectangleF(elementName: any, parentElement: any): any;
        writeThickness(thickness: any, elementName: any, parentElement: any): Element;
        readThickness(elementName: any, parentElement: any): Thickness;
        writePointF(point: any, elementName: any, parentElement: any): Element;
        readPointValue(element: any): Point;
        writePointCollection(points: any, elementName: any, parentElement: any): Element;
        readPoints(elementName: any, parentElement: any): Point[];
        writeTheme(theme: any, elementName: any, parentElement: any): Element;
        writeThemeContent(themeElement: any, theme: any): void;
        readTheme(elementName: any, parentElement: any): Theme;
        readThemeContent(element: any): Theme;
        selectNode(parentElement: any, name: any): any;
        selectNodes(path: any, parentElement: any): any[];
        writeGroup(group: any, elementName: any, parentElement: any): Element;
        readGroup(elementName: any, parentElement: any): {
            children: any[];
            attachedNodes: any[];
        };
        writeObject(object: any, elementName: any, parentElement: any, raiseIfNotSerializable: any): Element;
        readObject(elementName: any, parentElement: any): string | number | boolean;
        writeTag(item: any, tagValue: any, elementName: any, parentElement: any): Element;
        readTag(item: any, elementName: any, parentElement: any): any;
        readSvg(elementName: any, parentElement: any): any;
        selectSingleNode(elementName: any, parentElement: any): any;
    }
    import { Diagram } from "Diagramming/Diagram";
    import { GlassEffect } from "Diagramming/NodeEffects";
    import { Style } from "Diagramming/Style";
    import { Font } from "@mindfusion/drawing";
    import { AnchorPattern } from "Diagramming/AnchorPattern";
    import { Size } from "@mindfusion/drawing";
    import { Thickness } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
    import { Theme } from "Diagramming/Theme";
}
declare module "Diagramming/GridRouter" {
    /**
    * @class Implements a link routing algorithm that uses a grid to represent the free and occupied regions in the diagram.
    * @augments Router
    */
    export class GridRouter extends Router {
        grid: Grid;
        set gridSize(arg: number);
        /**
        * Gets or sets the size of the pieces of the routing grid.
        * @type {Number}
        * @summary A number specifying the size of the pieces of the routing grid. The default is 4.
        */
        get gridSize(): number;
        set nodeVicinitySize(arg: number);
        /**
        * Gets or sets the size of buffer zone around nodes for which routes get a penalty cost if they pass through it.
        * @type {Number}
        * @summary A number specifying the size of the buffer area in which passing routes receive a penalty cost. The default is 12.
        */
        get nodeVicinitySize(): number;
        set crossingCost(arg: number);
        /**
        * Gets or sets a value added to the total cost of a route which causes a link to cross another link.
        * @type {Number}
        * @summary A number specifying the crossing cost. The default is 4.
        */
        get crossingCost(): number;
        set lengthCost(arg: number);
        /**
        * Gets or sets a value added to the total cost of a route for each piece of the routing grid occupied by the route.
        * @type {Number}
        * @summary A number specifying the length cost. The default is 2.
        */
        get lengthCost(): number;
        set nodeVicinityCost(arg: number);
        /**
        * Gets or sets a value added to the total cost of a route if the route passes too close to a node.
        * @type {Number}
        * @summary A number specifying the node vicinity cost. The default is 2.
        */
        get nodeVicinityCost(): number;
        set turnCost(arg: number);
        /**
        * Gets or sets a value added to the total cost of a route if the route passes too close to a node.
        * @type {Number}
        * @summary A number specifying the node vicinity cost. The default is 2.
        */
        get turnCost(): number;
        nearestFree(gridPoint: any): Point;
        freeInDir(gridPoint: any, dx: any, dy: any): {
            x: any;
            y: any;
            d: number;
        };
        aStar(start: any, end: any): Point;
        routeHeuristics(start: any, end: any): any;
        cost(c: any, r: any): any;
        gridOffsetLeft: any;
        gridOffsetTop: any;
        diagramToGrid(point: any): Point;
        gridToDiagram(point: any): Point;
        _gridSize: number;
        _nodeVicinitySize: number;
        _crossingCost: number;
        _lengthCost: number;
        _nodeVicinityCost: number;
        _turnCost: number;
    }
    import { Router } from "Diagramming/Router";
    import { Grid } from "@mindfusion/collections";
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/ShapeLibrary" {
    /**
    * @class The ShapeLibrary class represents a collection of shape definitions stored together.
    */
    export class ShapeLibrary {
        static onShapeLibraryLoaded(): void;
        /**
        * Initializes a new instance of the ShapeLibrary class.
        * @constructor.
        * @param {Array} shapes A list of MindFusion.Diagramming.Shape objects to initialize the library with.
        */
        constructor(shapes: any[]);
        /**
        * A list containing all the shapes.
        * @type {Shape}
        */
        shapes: Shape;
        /**
        * Loads the library from the specified XML document.
        * @param {String} fileUrl The URL of an XML file where the data should be read from.
        * @param {Function} [onLoad] A callback that should be invoked if the file is loaded successfully.
        * @param {Function} [onError] A callback that should be invoked if the file could not be downloaded.
        */
        loadFromXml(fileUrl: string, onLoad?: Function, onError?: Function): void;
        /**
        * Gets the list with all shapes contained in the library.
        * @return {Array} A list with all the MindFusion.Diagramming.Shape objects contained in the library.
        */
        getShapes(): any[];
    }
    import { Shape } from "Diagramming/Shape";
}
declare module "Diagramming/Diagram" {
    /**
    * @class The Diagram class represents a flow diagram.
    * @augments Canvas
    */
    export class Diagram extends Canvas {
        /**
        * Registers a diagram item class for XML erialization support.
        * @param {Object} itemClass An object identifying the item class.
        * @param {String} classId A class identifier to use when saving and loading items of the specified type.
        * @param {Number} classVersion A revision number of the item's class serialization format.
        */
        static registerItemClass(itemClass: any, classId: string, classVersion: number): void;
        /**
        * Registers a diagram item class.
        * @param {Object} itemClass An object identifying the item class.
        * @param {String} className A class identifier to use when saving and loading items of the specified type to/from JSON.
        * @param {String} [classId] A class identifier to use when saving and loading items of the specified type to/from XML.
        * @param {Number} [classVersion] A revision number of the item's class serialization format.
        * @param {Object} [baseType] The base class of the item class.
        */
        static registerClass(itemClass: any, className: string, classId?: string, classVersion?: number, baseType?: any): void;
        static parseType(typeName: any): any;
        /**
        * Gets a string identifying current version of the library.
        * @type {String}
        * @summary A string in "major.minor.revision" format.
        */
        static get version(): string;
        _factory: Factory;
        dummy: DummyNode;
        _laneGrid: import("Diagramming/Lanes/Grid").default;
        _items: any[];
        _nodes: any[];
        _links: any[];
        autoSnapDistance: number;
        _selection: Selection;
        _activeItem: any;
        /**
        * For internal use only.
        * @private
        */
        private set autoHandlesItem(arg);
        /**
        * For internal use only.
        * @private
        */
        private get autoHandlesItem();
        set allowMultipleResize(arg: boolean);
        /**
        * Gets or sets a value indicating whether multiple selected nodes can be resized simultaneously.
        * @type {Boolean}
        * @summary true to let the user resize multiple selected nodes, or false otherwise.
        */
        get allowMultipleResize(): boolean;
        set shapeLibraryLocation(arg: string);
        /**
        * Gets or sets the location of a shape library file containing custom shape definitions.
        * It can be set to a full URL of the file, or a relative file path.
        * @type {String}
        * @summary The location of a shape library file containing custom shape definitions.
        */
        get shapeLibraryLocation(): string;
        set backBrush(arg: any);
        /**
        * Gets or sets an object specifying how to fill the diagram background.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get backBrush(): any;
        set shapeBrush(arg: any);
        /**
        * Gets or sets the default fill of ShapeNode objects.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get shapeBrush(): any;
        set shapePen(arg: string);
        /**
        * Gets or sets the default stroke of ShapeNode objects.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get shapePen(): string;
        set linkBrush(arg: any);
        /**
        * Gets or sets the default fill of link arrowheads.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get linkBrush(): any;
        set linkPen(arg: string);
        /**
        * Gets or sets the default stroke of links.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get linkPen(): string;
        set linkShape(arg: number);
        /**
        * Gets or sets the initial shape assigned to new links.
        * @type {LinkShape}
        * @summary A member of the LinkShape enumeration.
        */
        get linkShape(): number;
        set linkSegments(arg: number);
        /**
        * Gets or sets the default number of link segments.
        * @type {Number}
        * @summary The default number of link segments.
        */
        get linkSegments(): number;
        set allowSelfLoops(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to draw reflexive links.
        * @type {Boolean}
        * @summary true to allow reflexive links, or false otherwise.
        */
        get allowSelfLoops(): boolean;
        handleBrush: string;
        set adjustmentHandlesSize(arg: number);
        /**
        * Gets or sets the size of adjustment handles that appear around selected items.
        * @type {Number}
        * @summary A number specifying the size of selection handles. The default value is 2.
        */
        get adjustmentHandlesSize(): number;
        set showDisabledHandles(arg: boolean);
        /**
        * Gets or sets a value indicating whether adjustment handles are painted when they are disabled.
        * @type {Boolean}
        * @summary true to display disabled handles, or false otherwise. The default value is true.
        */
        get showDisabledHandles(): boolean;
        set activeItemHandlesStyle(arg: HandlesVisualStyle);
        /**
        * Gets or sets the visual style of adjustment handles of the active item.
        * @type {HandlesVisualStyle}
        * @summary A HandlesVisualStyle instance describing handles' appearance.
        */
        get activeItemHandlesStyle(): HandlesVisualStyle;
        set selectedItemHandlesStyle(arg: HandlesVisualStyle);
        /**
        * Gets or sets the visual style of adjustment handles of selected items.
        * @type {HandlesVisualStyle}
        * @summary A HandlesVisualStyle instance describing handles' appearance.
        */
        get selectedItemHandlesStyle(): HandlesVisualStyle;
        set disabledHandlesStyle(arg: HandlesVisualStyle);
        /**
        * Gets or sets the visual style of disabled adjustment handles.
        * @type {HandlesVisualStyle}
        * @summary A HandlesVisualStyle instance describing handles' appearance.
        */
        get disabledHandlesStyle(): HandlesVisualStyle;
        set defaultShape(arg: string | Shape);
        /**
        * Gets or sets the default shape assigned to new ShapeNode objects.
        * @type {Shape | String}
        * @summary A Shape object or identifier.
        */
        get defaultShape(): string | Shape;
        set linkHeadShape(arg: string | Shape);
        /**
        * Gets or sets the shape displayed as head of new links.
        * @type {Shape | String}
        * @summary A Shape instance or identifier that represents an arrowhead shape. The default is Arrow.
        */
        get linkHeadShape(): string | Shape;
        set linkBaseShape(arg: string | Shape);
        /**
        * Gets or sets the shape displayed at the base of new links.
        * @type {Shape | String}
        * @summary A Shape instance or identifier that represents an arrowhead shape.
        */
        get linkBaseShape(): string | Shape;
        set linkHeadShapeSize(arg: number);
        /**
        * Gets or sets the default size of arrowheads.
        * @type {Number}
        * @summary A number specifying arrowhead size. The default value is 5.
        */
        get linkHeadShapeSize(): number;
        set linkBaseShapeSize(arg: number);
        /**
        * Gets or sets the default size of arrowheads at base of new links.
        * @type {Number}
        * @summary A number specifying arrowhead size. The default value is 5.
        */
        get linkBaseShapeSize(): number;
        set linkTextStyle(arg: number);
        /**
        * Gets or sets the default text placement and orientation of new links.
        * @type {LinkTextStyle}
        * @summary A member of the LinkTextStyle enumeration.
        */
        get linkTextStyle(): number;
        set linkRouter(arg: Router);
        /**
        * Gets or sets the object used to find paths for auto-routed links when diagram nodes are added or their positions change.
        * @type {Router}
        * @summary An instance of Router-derived class.
        */
        get linkRouter(): Router;
        set routeLinks(arg: boolean);
        /**
        * Gets or sets initial value of the autoRoute property of new links.
        * @type {Boolean}
        * @summary true to route links, or false otherwise. The default value is false.
        */
        get routeLinks(): boolean;
        set routeMargin(arg: number);
        /**
        * Gets or sets the minimal distance between nodes and auto-routed links.
        * @type {Number}
        * @summary A value specifying distance in the current measureUnit. The default value is 8.
        */
        get routeMargin(): number;
        set showAnchors(arg: number);
        /**
        * Gets or sets a value indicating when to display anchor point marks.
        * @type {ShowAnchors}
        * @summary A member of the ShowAnchors enumeration.
        */
        get showAnchors(): number;
        /**
        * For internal use only.
        * @private
        */
        private set autoAnchorsNode(arg);
        /**
        * For internal use only.
        * @private
        */
        private get autoAnchorsNode();
        set autoResize(arg: number);
        /**
        * Gets or sets a value indicating whether the document area should
        * be resized automatically so it fits the diagram contents.
        * @type {AutoResize}
        * @summary A member of the AutoResize enumeration indicating the auto resize method.
        */
        get autoResize(): number;
        set showGrid(arg: boolean);
        /**
        * Gets or sets a value indicating whether the alignment grid is visible.
        * @type {Boolean}
        * @summary true if the alignment grid is visible, or false otherwise.
        * @remarks If it is visible, the grid is painted as either a matrix of points or
        * crossing horizontal and vertical lines. That depends on the value of GridStyle.
        */
        get showGrid(): boolean;
        set alignToGrid(arg: boolean);
        /**
        * Gets or sets a value indicating whether the diagram items should be aligned to a grid.
        * @type {Boolean}
        * @summary true if the diagram items should be aligned to a grid, or false otherwise.
        * @remarks When the property is set to true, the sides of every newly created diagram item are aligned to the nearest grid points.
        */
        get alignToGrid(): boolean;
        set gridColor(arg: string);
        /**
        * Gets or sets the color of grid points.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get gridColor(): string;
        set gridSizeX(arg: number);
        /**
        * Gets or sets the horizontal distance between adjacent grid points.
        * @type {Number}
        * @summary The horizontal distance between adjacent grid points.
        */
        get gridSizeX(): number;
        set gridSizeY(arg: number);
        /**
        * Gets or sets the vertical distance between adjacent grid points.
        * @type {Number}
        * @summary The vertical distance between adjacent grid points.
        */
        get gridSizeY(): number;
        set gridStyle(arg: number);
        /**
        * Gets or sets the visual style of the alignment grid.
        * @type {GridStyle}
        * @summary A member of the GridStyle enumeration.
        */
        get gridStyle(): number;
        set gridOffsetX(arg: number);
        /**
        * Gets or sets the horizontal offset of the first point of the alignment grid.
        * @type {Number}
        * @summary The horizontal offset of the first point of the alignment grid.
        */
        get gridOffsetX(): number;
        set gridOffsetY(arg: number);
        /**
        * Gets or sets the vertical offset of the first point of the alignment grid.
        * @type {Number}
        * @summary The vertical offset of the first point of the alignment grid.
        */
        get gridOffsetY(): number;
        set gridPointSize(arg: number);
        /**
        * Gets or sets the size of shapes used to represent grid points.
        * @type {Number}
        * @summary The size of shapes used to represent grid points.
        */
        get gridPointSize(): number;
        set expandOnIncoming(arg: boolean);
        /**
        * Gets or sets a value indicating the link direction in which tree branches are expanded.
        * @type {Boolean}
        * @summary true if trees are expanded in the direction of incoming links, or false otherwise.
        */
        get expandOnIncoming(): boolean;
        set expandButtonAction(arg: number);
        /**
        * Gets or sets how the control responds to users clicking
        * the +/- button displayed by expandable nodes.
        * @type {ExpandButtonAction}
        * @summary A member of the ExpandButtonAction enumeration.
        */
        get expandButtonAction(): number;
        _nodeEffects: any[];
        set linkCrossings(arg: number);
        /**
        * Gets or sets a value indicating how to render the intersection points of links.
        * @type {LinkCrossings}
        * @summary A member of the LinkCrossings enumeration. The default value is Straight.
        */
        get linkCrossings(): number;
        set crossingRadius(arg: number);
        /**
        * Gets or sets the radius length of decorations displayed at link intersection points.
        * @type {Number}
        * @summary A number specifying the radius of the arcs drawn at link intersection points. The default value is 1.5.
        */
        get crossingRadius(): number;
        set linkHitDistance(arg: number);
        /**
        * Gets or sets a value specifying how far from a link a click is still considered a hit.
        * @type {Number}
        * @summary A value specifying link hit distance.
        */
        get linkHitDistance(): number;
        set roundedLinksRadius(arg: number);
        /**
        * Gets or sets the radius of joint arcs of rounded links' segments.
        * @type {Number}
        * @summary A number specifying the radius length. The default value is 2.
        */
        get roundedLinksRadius(): number;
        set freeFormAttractDistance(arg: number);
        /**
        * Gets or sets the radius around dragged free-form adjustment handle
        * in which other points of FreeFormNode are modified too.
        * @type {Number}
        * @summary A number specifying point attraction radius.
        */
        get freeFormAttractDistance(): number;
        set autoCloseDistance(arg: number);
        /**
        * Gets or sets the maximum distance between first and last points of a FreeFormNode
        * for which the node's outline is closed automatically.
        * @type {Number}
        * @summary A number specifying auto-close distance.
        */
        get autoCloseDistance(): number;
        set freeFormTargets(arg: any[]);
        /**
        * Gets or sets an array of Shape objects used to replace FreeFormNode instances with
        * ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes.
        * @type {Array}
        * @summary An array of shape identifiers or Shape instances.
        */
        get freeFormTargets(): any[];
        set shadowsStyle(arg: number);
        /**
        * Gets or sets the style of shadows.
        * @type {ShadowsStyle}
        * @summary A member of the ShadowsStyle enumeration.
        */
        get shadowsStyle(): number;
        _undoManager: any;
        images: any[];
        svgs: any[];
        collectHyperlinks: boolean;
        set autoArrangeAvoidSegments(arg: boolean);
        /**
        * Gets or sets a value indicating whether auto-arranged link labels should avoid link segments.
        * @type {Boolean}
        * @summary true to avoid link segments, or false otherwise. The default value is true.
        */
        get autoArrangeAvoidSegments(): boolean;
        set autoArrangeAvoidContainers(arg: boolean);
        /**
        * Gets or sets a value indicating whether auto-arranged link labels should avoid containers.
        * @type {Boolean}
        * @summary true to avoid containers, or false otherwise. The default value is true.
        */
        get autoArrangeAvoidContainers(): boolean;
        licenseLocation: string;
        registerXmlTypes(): void;
        /**
        * Gets a Factory object that lets you programmatically add new items to the diagram.
        * @type {Factory}
        * @summary An instance of the Factory class.
        */
        get factory(): Factory;
        onLoad(): void;
        set licenseKey(arg: any);
        drawForeground(): void;
        drawGrid(clipRect: any): void;
        cachedGridPixelCanvas: HTMLCanvasElement;
        _backBrush: any;
        /**
        * @private
        */
        private get effectiveBackBrush();
        resolveEffectiveStyle(check: any): any;
        /**
        * Gets the global effects applied to nodes in this diagram.
        * @type {Array}
        * @summary An array of NodeEffect objects.
        */
        get nodeEffects(): any[];
        get effectiveNodeEffects(): any;
        _defaultShape: any;
        _freeFormTargets: any[];
        _autoCloseDistance: number;
        _freeFormAttractDistance: number;
        _shapeBrush: any;
        _shapePen: any;
        _linkBrush: any;
        _linkPen: any;
        _linkShape: any;
        _linkSegments: any;
        _linkHeadShape: any;
        _linkBaseShape: any;
        _linkHeadShapeSize: any;
        _linkBaseShapeSize: any;
        _allowSelfLoops: any;
        _backgroundImageAlign: any;
        set backgroundImageUrl(arg: string);
        /**
        * Gets or sets URL of the image to paint as diagram's background.
        * @type {String}
        * @summary A string containing image URL.
        */
        get backgroundImageUrl(): string;
        _backgroundImageUrl: any;
        _backgroundImage: HTMLImageElement;
        set backgroundImageContent(arg: string);
        /**
        * Gets or sets a Base64-encoded image to display as diagram background.
        * @type {String}
        * @summary A Base64-encoded representation of an image.
        */
        get backgroundImageContent(): string;
        _backgroundImageContent: any;
        loadImage(): void;
        saveImage(image: any): number;
        saveSVG(svgString: any): number;
        raiseInitialize(item: any): void;
        /**
        * Raises an event which notifies that a Diagram item has been created.
        * @param {DiagramNode | DiagramLink} item The diagram item that has been created.
        */
        raiseCreated(item: DiagramNode | DiagramLink, point: any): void;
        raiseCreating(item: any, ist: any): boolean;
        raiseModifying(item: any, ist: any): boolean;
        raiseDeleting(item: any): boolean;
        /**
        * Raises an event which notifies that a Diagram item has been modified.
        * @param {DiagramItem} item The DiagramItem that has been modified.
        * @param {Point} mousePosition The current mouse pointer position.
        * @param {Number} adjustmentHandle Identifies the handle used to modify the item.
        */
        raiseModified(item: DiagramItem, mousePosition: Point, adjustmentHandle: number): void;
        raiseTreeExpanded(root: any): void;
        raiseTreeCollapsed(root: any): void;
        raiseExpandButtonClicked(root: any, position: any, button: any): void;
        /**
        * For internal use only.
        * @private
        */
        private raiseSelectionMoved;
        /**
        * Raises an event which notifies that a Diagram item has been deleted.
        * @param {DiagramItem} item The DiagramItem that has been deleted.
        */
        raiseDeleted(item: DiagramItem): void;
        /**
        * Raises an event which notifies that a Diagram item has been clicked.
        * @param {DiagramItem} item The Diagram item.
        * @param {Point} mousePosition The position of the mouse.
        * @param {MouseButton} mouseButton The mouse button, with which the item has been clicked.
        */
        raiseClicked(item: DiagramItem, mousePosition: Point, mouseButton: MouseButton): any;
        /**
        * Raises an event which notifies that a Diagram item has been double-clicked.
        * @param {DiagramItem} item The Diagram item.
        * @param {Point} mousePosition The position of the mouse.
        * @param {MouseButton} mouseButton The mouse button, with which the item has been clicked.
        */
        raiseDoubleClicked(item: DiagramItem, mousePosition: Point, mouseButton: MouseButton): any;
        /**
        * Raises an event which notifies that a Diagram item will be selected.
        * @param {DiagramItem} item The Diagram item.
        */
        raiseSelecting(item: DiagramItem): boolean;
        /**
        * Raises an event which notifies that a Diagram item has been selected.
        * @param {DiagramItem} item The Diagram item.
        */
        raiseSelected(item: DiagramItem): void;
        /**
        * Raises an event which notifies that a Diagram item has been deselected.
        * @param {DiagramItem} item The Diagram item.
        */
        raiseDeselected(item: DiagramItem): void;
        /**
        * Raises an event which notifies that the selection has changed.
        * @param {Array} oldItems The selected items before the change.
        * @param {Array} newItems The selected items after the change.
        */
        raiseSelectionChanged(oldItems: any[], newItems: any[]): void;
        raiseHitTestAdjustmentHandles(item: any, mousePosition: any): any;
        raiseDrawAdjustmentHandles(item: any, context: any): void;
        raiseMouseHover(item: any, mousePosition: any): void;
        raiseSerializeTag(params: any): boolean;
        raiseDeserializeTag(params: any): boolean;
        raiseTableColumnResizing(table: any, column: any, mousePosition: any, mouseButton: any, shouldCancel: any): boolean;
        raiseTableColumnResized(table: any, column: any, mousePosition: any, mouseButton: any): void;
        raiseTableRowResizing(table: any, row: any, mousePosition: any, mouseButton: any, shouldCancel: any): boolean;
        raiseTableRowResized(table: any, row: any, mousePosition: any, mouseButton: any): void;
        raiseHeaderResizing(header: any, horizontal: any): boolean;
        raiseHeaderResized(header: any, horizontal: any): void;
        /**
        * Raises an event which notifies that a Diagram item has been pasted from clipboard.
        * @param {DiagramItem} item The DiagramItem that has been pasted.
        */
        raisePasted(item: DiagramItem): void;
        raiseAnimatedLayoutCompleted(item: any): void;
        /**
        * For internal use only.
        * @private
        */
        private setAutoHandles;
        canResizeLaneHeader(point: any): false | {
            header: any;
            resizingHeaderWidth: boolean;
            headerBounds: any;
        };
        /**
        * Returns an array of all items in this diagram.
        * @type {Array}
        * @summary Array of DiagramItem objects.
        */
        get items(): any[];
        /**
        * Returns an array of all nodes in this diagram.
        * @type {Array}
        * @summary Array of DiagramNode objects.
        */
        get nodes(): any[];
        /**
        * Returns an array of all links in this diagram.
        * @type {Array}
        * @summary Array of DiagramLink objects.
        */
        get links(): any[];
        /**
        * Removes all items from the diagram.
        */
        clearAll(): void;
        undoManager: UndoManager;
        /**
        * Adds an item to the Diagram.
        * @param {DiagramItem} item The item to add.
        */
        addItem(item: DiagramItem): void;
        doAddItem(item: any): void;
        /**
        * Removes the specified item from the Diagram.
        * @param {DiagramItem} item The Diagram item to be removed.
        */
        removeItem(item: DiagramItem): void;
        doRemoveItem(item: any): void;
        /**
        * For internal use only.
        * @private
        */
        private removeFromCollection;
        /**
        * For internal use only.
        * @private
        */
        private removeFromZOrder;
        getLinksFromZ(lessThan: any, z: any): any[];
        /**
        * For internal use only.
        * @private
        */
        private deleteItem;
        /**
        * For internal use only.
        * @private
        */
        private deleteSelection;
        /**
        * Finds and returns an array of the diagram items found at the specified location.
        * @param {Point} point instance identifying a location in the diagram.
        * @returns {Array} Array of the DiagramItem-s found at the given location or null if no
        * items have been found. The items are arranged according to their Z-index.
        */
        getItemsAt(point: Point): any[];
        /**
        * Finds and returns an array of all DiagramNodes found at the specified location.
        * @param {Point} point instance identifying a diagram location.
        * @returns {Array} Array of the DiagramNodes found at the given location, or null if
        * no nodes have been found. The returned nodes are sorted according to their Z-index.
        */
        getNodesAt(point: Point): any[];
        /**
        * Finds and returns an array of all DiagramLinks found at the specified location.
        * @param {Point} point instance identifying a diagram location.
        * @returns {Array} Array of the DiagramLinks found at the given location, or null if
        * no links have been found. The returned links are sorted according to their Z-index.
        */
        getLinksAt(point: Point): any[];
        /**
        * Finds and returns the topmost DiagramItem found at the specified location.
        * @param {Point} point A Point instance identifying a diagram location.
        * @param {Boolean} [onlyInteractive] true to return only items that can be interacted with; otherwise, false.
        * @returns {DiagramItem} The topmost DiagramItem found at the given location or null if no DiagramItem has been found.
        */
        getItemAt(point: Point, skipInvisible: any, skipLocked: any): DiagramItem;
        /**
        * Finds and returns the topmost DiagramNode found at the specified location.
        * @param {Point} point A Point instance identifying a diagram location.
        * @param {Boolean} [onlyInteractive] true to return only items that can be interacted with; otherwise, false.
        * @returns {DiagramNode} The topmost DiagramNode found at the given location or null if no DiagramNode has been found.
        */
        getNodeAt(point: Point, skipInvisible: any, skipLocked: any): DiagramNode;
        /**
        * Finds and returns the topmost DiagramLink found at the specified location.
        * @param {Point} point A Point instance identifying a diagram location.
        * @returns {DiagramLink} The topmost DiagramLink found at the given location or null if no DiagramLink has been found.
        */
        getLinkAt(point: Point, skipInvisible: any, skipLocked: any): DiagramLink;
        /**
        * For internal use only.
        * @private
        */
        private getHandleAt;
        /**
        * Returns the node nearest to the specified point.
        * @param {Point} point A point in the diagram.
        * @param {Number} maxDistance The maximum distance from the point at which to look for nodes.
        * @param {DiagramNode} ignored A node that should be ignored.
        * @returns {DiagramNode} The DiagramNode nearest to the specified point.
        */
        getNearestNode(point: Point, maxDistance: number, ignored: DiagramNode, onlyInteractive: any): DiagramNode;
        /**
        * For internal use only.
        * @private
        */
        private getIntersectingItems;
        /**
        * For internal use only.
        * @private
        */
        private countIntersectingItems;
        updateContainersZOrder(): void;
        /**
        * Checks if the specified item is currently visible.
        * @param {DiagramItem} item The DiagramItem to check.
        * @returns {Boolean} true if the item's Visible property is set to true and the item is not associated with a hidden layer; otherwise, false.
        */
        isItemVisible(item: DiagramItem): boolean;
        /**
        * Checks if the specified item can be modified interactively.
        * @param {DiagramItem} item The DiagramItem to check.
        * @returns {Boolean} true, if the item is currently visible and unlocked and it is not associated with a hidden or locked layer; otherwise, false.
        */
        isItemInteractive(item: DiagramItem): boolean;
        /**
        * @private
        * Creates an object, containing the Diagram properties.
        * @returns {Object} An object, containing the Diagram properties.
        */
        private toJsonObject;
        /**
        * Serializes the diagram into a JSON string.
        * @returns {String} A string containing the diagram's JSON representation.
        */
        toJson(): string;
        /**
        * For internal use only.
        * @private
        */
        private serializeItems;
        assignInstanceIds(): void;
        convertStrokeThickness(obj: any): void;
        fromJsonObject(obj: any): void;
        set undoEnabled(arg: boolean);
        /**
        * Gets or sets a value indicating whether saving action records for later undo is enabled.
        * @type {Boolean}
        * @summary true if undo is enabled, or false otherwise.
        */
        get undoEnabled(): boolean;
        set customNodeType(arg: any);
        /**
        * Gets or sets the type of DiagramNode objects to create when users starts drawing.
        * @type {Object}
        * @summary An object identifying a constructor function or a class.
        */
        get customNodeType(): any;
        set customLinkType(arg: any);
        /**
        * Gets or sets the type of DiagramLink objects to create when users starts drawing.
        * @type {Object}
        * @summary An object identifying a constructor function or a class.
        */
        get customLinkType(): any;
        set dynamicLinks(arg: boolean);
        /**
        * Gets or sets initial value of the dynamic property of new links.
        * @type {Boolean}
        * @summary true if dynamic links are enabled, or false otherwise. The default value is false.
        */
        get dynamicLinks(): boolean;
        set roundedLinks(arg: boolean);
        /**
        * Gets or sets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded.
        * @type {Boolean}
        * @summary true to draw rounded segment joints, or false otherwise. The default value is false.
        */
        get roundedLinks(): boolean;
        set allowUnconnectedLinks(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to draw links that are not connected to any node.
        * @type {Boolean}
        * @summary true to let users draw unconnected links, or false otherwise.
        */
        get allowUnconnectedLinks(): boolean;
        set tag(arg: any);
        /**
        * Gets or sets custom data associated with this diagram.
        * @type {Object}
        * @summary An object containing custom data.
        */
        get tag(): any;
        set style(arg: Style);
        /**
        * Gets or sets the style associated with this diagram.
        * @type {Style}
        * @summary An instance of the Style class.
        */
        get style(): Style;
        set theme(arg: Theme);
        /**
        * Gets or sets the theme associated with this diagram.
        * @type {Theme}
        * @summary An instance of the Theme class.
        */
        get theme(): Theme;
        set shadowOffsetX(arg: number);
        /**
        * Gets or sets the horizontal offset of items' shadows.
        * @type {Number}
        * @summary A number specifying shadows' horizontal offset.
        */
        get shadowOffsetX(): number;
        set shadowOffsetY(arg: number);
        /**
        * Gets or sets the vertical offset of items' shadows.
        * @type {Number}
        * @summary A number specifying shadows' vertical offset.
        */
        get shadowOffsetY(): number;
        set showLaneGrid(arg: boolean);
        /**
        * Gets or sets a value indicating whether the lane grid is visible.
        * @type {Boolean}
        * @summary true if the lane grid is visible, or false otherwise.
        */
        get showLaneGrid(): boolean;
        /**
        * Deserializes the diagram from a JSON string.
        * @param {String} json A string created by the toJson method.
        */
        fromJson(json: string): void;
        isNodeType(jsonObj: any): boolean;
        isLinkType(jsonObj: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private loadItem;
        /**
        * Loads the diagram from an XML file.
        * @param {String} fileUrl The URL of an XML file where the data should be read from.
        * @param {Function} [onLoad] A callback that should be invoked if the file is loaded successfully.
        * @param {Function} [onError] A callback that should be invoked if the file could not be downloaded.
        */
        loadFromXml(fileUrl: string, onLoad?: Function, onError?: Function): void;
        /**
        * Saves the diagram to an XML file.
        * @param {String} url A URL specifying where the diagram's XML should be posted to.
        */
        saveToXml(url: string): void;
        /**
        * Loads diagram contents from specified XML or JSON string.
        * @param {String} str A string containing the serialized diagram contents.
        */
        loadFromString(str: string): void;
        /**
        * Encodes the diagram contents into an XML or JSON string.
        * @param {SaveToStringFormat} format A member of the SaveToStringFormat enumeration.
        * @returns {String} A string containing the diagram's serialized representation.
        */
        saveToString(format: SaveToStringFormat): string;
        /**
        * Loads diagram contents from specified XML Document.
        * @param {Document} document A DOM Document object containing XML-serialized diagram contents.
        */
        fromXmlDocument(document: Document): void;
        _style: any;
        /**
        * Saves the diagram into an XML Document.
        * @returns {Document} A DOM Document object containing XML-serialized diagram contents.
        */
        toXmlDocument(): Document;
        loadProperties(elementName: any, parentElement: any, context: any): void;
        set nodesExpandable(arg: boolean);
        /**
        * Gets or sets a value indicating whether newly created nodes are expandable.
        * @type {Boolean}
        * @summary A boolean value assigned to the expandable property of new nodes.
        */
        get nodesExpandable(): boolean;
        tablesScrollable: any;
        toolTip: any;
        linkText: any;
        shapeText: any;
        saveProperties(elementName: any, parentElement: any, context: any): void;
        loadEffects(elementName: any, parentElement: any, context: any): void;
        saveEffects(elementName: any, parentElement: any, context: any): void;
        /**
        * CollectionChanged event handler.
        * For internal use only.
        * @private
        */
        private onItemAdded;
        /**
        * CollectionChanged event handler.
        * For internal use only.
        * @private
        */
        private onItemRemoved;
        onItemDropped(item: any, point: any): void;
        onItemDragging(item: any, point: any): boolean;
        onDragOverNode(node: any, relatedItem: any): any;
        onDropOverNode(node: any, relatedItem: any): any;
        visitNodes(point: any, nodeOp: any, relatedItem: any): boolean;
        set dirty(arg: boolean);
        /**
        * Gets or sets a value indicating whether the diagram has changed since loading it.
        * @type {Boolean}
        * @summary true if the diagram has changed, or false otherwise.
        */
        get dirty(): boolean;
        _dirty: boolean;
        setDirty(value: any): void;
        clearRuntimeData(fieldName: any): void;
        _font: any;
        /**
        * Arranges the diagram with the given layout.
        * @param {Object} layout The layout algorithm to apply.
        */
        arrange(layout: any): void;
        /**
        * Arranges the diagram using the given layout, and animates items moving to their new positions.
        * @param {Object} layout The layout algorithm to apply.
        * @param {Number} [duration] An integer, specifying the duration of the animation in milliseconds.
        * @param {AnimationType} [animationType] A member of the AnimationType enumeration, specifying the animation type to use.
        * @param {EasingType} [easingType] A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.
        */
        arrangeAnimated(layout: any, duration?: number, animationType?: any, easingType?: any): void;
        /**
        * For internal use only.
        * @private
        */
        private toGraph;
        /**
        * Resizes the document scrollable area so that it fits all diagram items.
        * @param {Number} [margin]
        * @param {Boolean} [onlyVisible] Specifies whether only visible items should be considered.
        * @param {Boolean} [repaintBounds] Specifies whether to consider the items' repaint bounds.
        */
        resizeToFitItems(margin?: number, onlyVisible?: boolean, repaintBounds?: boolean): void;
        /**
        * Resize the document extents so that the specified
        * item is contained within.
        * @param {DiagramItem} item The item to be contained.
        */
        resizeToFitItem(item: DiagramItem): void;
        sizeDocForItems(): void;
        /**
        * Returns the smallest rectangle that bounds all diagram items.
        * @param {Boolean} [onlyVisible] Specifies whether only visible items should be considered.
        * @param {Boolean} [repaintBounds] Specifies whether to consider the items' repaint bounds.
        * @returns {Rect} A Rect instance specifying the smallest rectangle that bounds all diagram items.
        */
        getContentBounds(onlyVisible?: boolean, repaintBounds?: boolean): Rect;
        _dynamicLinks: boolean;
        _routeLinks: boolean;
        /**
        * For internal use only.
        * @private
        */
        private routeLinksAt;
        /**
        * Gets the active diagram item.
        * @type {DiagramItem}
        * @summary The active item, or null if no item is active.
        */
        get activeItem(): DiagramItem;
        _autoHandlesItem: any;
        _autoResize: number;
        _linkRouter: Router;
        _routeMargin: number;
        /**
        * Routes all links in the diagram in such a way they do not cross nodes.
        */
        routeAllLinks(): void;
        /**
        * Gets a Selection instance that represents the selection of items in this diagram.
        * @type {Selection}
        * @summary An instance of the Selection class representing the current selection.
        */
        get selection(): Selection;
        _allowMultipleResize: boolean;
        _allowUnconnectedLinks: boolean;
        _linkTextStyle: any;
        _adjustmentHandlesSize: any;
        invalidateIfSelection(): void;
        _showDisabledHandles: any;
        _activeItemHandlesStyle: any;
        _selectedItemHandlesStyle: any;
        _disabledHandlesStyle: any;
        _showAnchors: any;
        /**
        * For internal use only.
        * @private
        */
        private updateAnchorVisibility;
        _autoAnchorsNode: any;
        _showGrid: any;
        _alignToGrid: any;
        _gridColor: any;
        _gridSizeX: any;
        _gridSizeY: any;
        _gridOffsetX: any;
        _gridOffsetY: any;
        _gridStyle: any;
        _gridPointSize: any;
        /**
        * For internal use only.
        * @private
        */
        private alignMove;
        /**
        * Returns a point of the alignment grid nearest to the one passed as an argument.
        * @param {Point} point A point specified in diagram coordinates.
        * @returns {Point} A point from the alignment grid.
        */
        alignPointToGrid(point: Point): Point;
        /**
        * For internal use only.
        * @private
        */
        private alignResize;
        _showLaneGrid: any;
        hitTestManipulators(mousePosition: any): any;
        _expandOnIncoming: any;
        _nodesExpandable: any;
        _expandButtonAction: any;
        _theme: any;
        _tag: any;
        _customNodeType: any;
        _customLinkType: any;
        _linkHitDistance: any;
        _linkCrossings: any;
        _crossingRadius: any;
        _roundedLinks: any;
        _roundedLinksRadius: any;
        _shadowOffsetX: any;
        _shadowOffsetY: any;
        _shadowsStyle: any;
        _shapeLibraryLocation: any;
        onShapeLibraryLoad(): void;
        onShapeLibraryLoaded(success: any): void;
        onShapeLibraryError(): void;
        invalidateDefaultShapes(): void;
        magnifierShape: any;
        invalidateLabelLayout(repaintRect: any): void;
        labelLayoutInvalid: boolean;
        updateLabelLayout(rect: any): any;
        /**
        * Rearranges link labels whose AutoArrange property is enabled.
        */
        arrangeLinkLabels(): void;
        doArrangeLinkLabels(rect: any): any;
        arrangeLinkLabel(label: any, obstacles: any): Point;
        _autoArrangeAvoidSegments: any;
        _autoArrangeAvoidContainers: any;
        pointsAlongVector(start: any, vector: any, end: any, points: any): any[];
        evalPos(label: any, obstacles: any, point: any, segmentPenalty: any): any;
        maxDiagonalDistance(rect: any, vector: any): number;
        updateCanUndo(): void;
        canUndo: boolean;
        canRedo: boolean;
        /**
        * Undoes an action saved in the command history.
        */
        undo(): void;
        /**
        * Executes again an action saved in the command history.
        */
        redo(): void;
        /**
        * Starts recording undo/redo commands into a CompositeCommand.
        */
        startCompositeOperation(): void;
        /**
        * Stops recording undo/redo commands into a CompositeCommand and saves the composite in the history queue.
        */
        commitCompositeOperation(): void;
        /**
        * Stops recording undo/redo commands into a CompositeCommand and discards the records created so far.
        */
        cancelCompositeOperation(): void;
        onStartInteraction(affectedItems: any): void;
        /**
        * Executes the specified command on this diagram.
        * @param {Command} command The Command to execute.
        */
        executeCommand(command: any): void;
        startItemChange(item: any): ChangeItemCommand;
        endItemChange(command: any): void;
        startTotalChange(): void;
        /**
        * Gets the lane grid.
        * @type {Lanes.Grid}
        * @summary An instance of the Lanes.Grid class.
        */
        get laneGrid(): any;
        millimeter(): number;
    }
    export namespace Diagram {
        const classMap: Map<any, any>;
        const xmlClassMap: Map<any, any>;
        const ns: string;
    }
    import { Canvas } from "@mindfusion/controls";
    import { Factory } from "Diagramming/Factory";
    import { DummyNode } from "Diagramming/LoadOrder";
    import { Selection } from "Diagramming/LoadOrder";
    import { HandlesVisualStyle } from "Diagramming/HandlesVisualStyle";
    import { Shape } from "Diagramming/Shape";
    import { Router } from "Diagramming/Router";
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { DiagramLink } from "Diagramming/LoadOrder";
    import { DiagramItem } from "Diagramming/LoadOrder";
    import { Point } from "@mindfusion/drawing";
    import { MouseButton } from "@mindfusion/controls";
    import UndoManager from "Diagramming/UndoManager";
    import { Style } from "Diagramming/Style";
    import { Theme } from "Diagramming/Theme";
    import { SaveToStringFormat } from "Diagramming/Enum";
    import { Rect } from "@mindfusion/drawing";
    import { ChangeItemCommand } from "Diagramming/ChangeItemCommand";
}
declare module "Diagramming/Style" {
    /**
    * @class Represents a set of appearance properties whose values can be inherited
    * from parent objects if not set locally for an item.
    */
    export class Style {
        /**
        * Initializes a new instance of the Style class.
        * @constructor
        * @param {Style} [prototype]
        */
        constructor(prototype?: Style);
        set brush(arg: any);
        /**
        * Gets or sets the brush used to fill the interior of diagram items.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        set backBrush(arg: any);
        /**
        * Gets or sets the brush used to paint diagram background.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get backBrush(): any;
        set stroke(arg: string);
        /**
        * Gets or sets the color used to stroke outlines of diagram items.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get stroke(): string;
        set strokeThickness(arg: number);
        /**
        * Gets or sets the line width applied when stroking outlines of diagram items.
        * @type {Number}
        * @summary A number specifying stroke thickness.
        */
        get strokeThickness(): number;
        set strokeDashStyle(arg: any);
        /**
        * Gets or sets the line dash pattern applied when stroking outlines of diagram items.
        * @type {DashStyle}
        * @summary A member of the DashStyle enumeration.
        */
        get strokeDashStyle(): any;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to draw text of diagram items.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get textColor(): string;
        set fontName(arg: string);
        /**
        * Gets or sets the font name used to draw text of diagram items.
        * @type {String}
        * @summary A string containing font name.
        */
        get fontName(): string;
        set fontSize(arg: number);
        /**
        * Gets or sets the font size used to draw text of diagram items.
        * @type {Number}
        * @summary A number specifying font size.
        */
        get fontSize(): number;
        set fontStyle(arg: any);
        /**
        * Gets or sets the font style used to draw text of diagram items.
        * @type {FontStyle}
        * @summary A combination of FontStyle enumeration members.
        */
        get fontStyle(): any;
        set shadowColor(arg: string);
        /**
        * Gets or sets the color used to draw shadows of diagram items.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get shadowColor(): string;
        set verticalBorderStroke(arg: any);
        get verticalBorderStroke(): any;
        set horizontalBorderStroke(arg: any);
        get horizontalBorderStroke(): any;
        set selectedBrush(arg: any);
        /**
        * Gets or sets the brush used to paint the background of selected items.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get selectedBrush(): any;
        set selectedStroke(arg: string);
        /**
        * Gets or sets the color used to stroke outlines of selected items.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get selectedStroke(): string;
        set captionBackBrush(arg: any);
        /**
        * Gets or sets the brush used to fill nodes' caption bars.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get captionBackBrush(): any;
        set nodeEffects(arg: any[]);
        /**
        * Gets or sets a list of effects applied to diagram nodes.
        * @type {Array}
        * @summary An array of NodeEffect objects.
        */
        get nodeEffects(): any[];
        getType(): any;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        saveToXml(xmlElement: any, context: any): void;
        loadFromXml(xmlElement: any, context: any): void;
        writeBrush(brush: any, xmlElement: any, context: any): any;
        readBrush(xmlElement: any, context: any): any;
        writeEffects(xmlElement: any, context: any): void;
        readEffects(xmlElement: any, context: any): void;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        _brush: any;
        hasBrush(): boolean;
        _backBrush: any;
        hasBackBrush(): boolean;
        _stroke: string;
        hasStroke(): boolean;
        _strokeThickness: number;
        hasStrokeThickness(): boolean;
        _strokeDashStyle: any;
        hasStrokeDashStyle(): boolean;
        _textColor: string;
        hasTextColor(): boolean;
        _fontName: string;
        hasFontName(): boolean;
        _fontSize: number;
        hasFontSize(): boolean;
        _fontStyle: any;
        hasFontStyle(): boolean;
        _shadowColor: string;
        hasShadowColor(): boolean;
        _nodeEffects: any[];
        hasNodeEffects(): boolean;
        _verticalBorderStroke: any;
        hasVerticalBorderStroke(): boolean;
        _horizontalBorderStroke: any;
        hasHorizontalBorderStroke(): boolean;
        _selectedBrush: any;
        hasSelectedBrush(): boolean;
        _selectedStroke: string;
        hasSelectedStroke(): boolean;
        _captionBackBrush: any;
        hasCaptionBackBrush(): boolean;
        isEmpty(): boolean;
    }
}
declare module "Diagramming/Theme" {
    /**
    * @class Represents a set of Style objects whose properties are used to render items of a specific type in the current diagram.
    */
    export class Theme {
        static initDefault(): void;
        _styles: Map<any, any>;
        /**
        * A dictionary object that maps item type identifiers to Style objects.
        * @type {Map}
        * @summary Maps item types to Style objects.
        */
        get styles(): Map<any, any>;
        fromJson(json: any): void;
        toJson(): {
            linkStyle: any;
            nodeStyle: any;
            containerStyle: any;
            shapeStyle: any;
            tableStyle: any;
            freeformStyle: any;
            diagramStyle: any;
        };
        saveToXml(element: any, context: any): void;
        loadFromXml(element: any, context: any): void;
    }
    export namespace Theme {
        /**
        * Gets the built-in Gray theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getGray(): Theme;
        /**
        * Gets the built-in Earth theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getEarth(): Theme;
        /**
        * Gets the built-in Business theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getBusiness(): Theme;
        /**
        * Gets the built-in Blue theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getBlue(): Theme;
        /**
        * Gets the built-in Peach theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getPeach(): Theme;
        /**
        * Gets the built-in Pastel theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getPastel(): Theme;
        /**
        * Gets the built-in Green theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getGreen(): Theme;
        /**
        * Gets the built-in Standard theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getStandard(): Theme;
        /**
        * Gets the built-in Light theme.
        * @returns {Theme} An instance of the Theme class.
        */
        function getLight(): Theme;
    }
}
declare module "Diagramming/DiagramItem" {
    export default DiagramItem;
    /**
    * @class Represents an item in the diagram document. All classes representing diagram elements derive from DiagramItem.
    */
    class DiagramItem {
        static get useStyles(): boolean;
        /**
        * Initializes a new instance of the DiagramItem class.
        * @constructor
        * @param {Diagram} [parent] The Diagram from which to obtain default values for the item properties.
        */
        constructor(parent?: any);
        _parent: any;
        _bounds: Rect;
        _text: Text;
        set brush(arg: any);
        /**
        * Gets or sets an object specifying how to fill the interior of this item.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get brush(): any;
        set pen(arg: string);
        /**
        * Gets or sets the color used to stroke item's borders.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get pen(): string;
        set strokeThickness(arg: number);
        /**
        * Gets or sets the line width applied when stroking item's frame.
        * @type {Number}
        * @summary A number specifying the stroke thickness.
        */
        get strokeThickness(): number;
        _selected: boolean;
        _locked: boolean;
        set ignoreLayout(arg: boolean);
        /**
        * Gets or sets a value indicating whether the position of this
        * item should not be changed by automatic layout methods.
        * @type {Boolean}
        * @summary true to ignore this item when arranging the diagram, or false otherwise.
        */
        get ignoreLayout(): boolean;
        set tooltip(arg: string);
        /**
        * Gets or sets tooltip text that should be displayed when the mouse hovers over this item.
        * @type {String}
        * @summary A string containing the tooltip text.
        */
        get tooltip(): string;
        set hyperLink(arg: string);
        /**
        * Gets or sets the hyperlink associated with this diagram item.
        * @type {String}
        * @summary A string containing hyperlink URL.
        */
        get hyperLink(): string;
        _textPadding: Thickness;
        _topLevel: boolean;
        graphicsContainer: Container;
        getType(): any;
        /**
        * Creates a copy of this item.
        * @returns {Object} The copied item.
        */
        clone(): any;
        /**
        * Serializes this item into a JSON object.
        * @returns {Object} An object, containing the data for this item.
        */
        toJson(): any;
        /**
        * Deserializes this item from a JSON object.
        * @param {Object} json An object, containing the data for this item.
        */
        fromJson(json: any): void;
        set tag(arg: any);
        /**
        * Gets or sets custom data tag associated with this item.
        * @type {Object}
        * @summary An Object containing custom data.
        */
        get tag(): any;
        set id(arg: any);
        /**
        * Gets or sets a custom identifier associated with this item.
        * @type {Object}
        * @summary An Object containing custom identifier.
        */
        get id(): any;
        set text(arg: string);
        /**
        * Gets or sets the text label displayed by this item.
        * @type {String}
        * @summary A string containing the item's text. The default value is empty string "".
        */
        get text(): string;
        _strokeThickness: any;
        _strokeDashStyle: any;
        _layoutTraits: any;
        _textColor: any;
        _textStroke: any;
        _textStrokeThickness: any;
        set textPadding(arg: Thickness);
        /**
        * Gets or sets the padding distance between item's boundaries and text label.
        * @type {Thickness}
        * @summary An instance of the Thickness class.
        */
        get textPadding(): Thickness;
        set visible(arg: boolean);
        /**
        * Gets or sets a value indicating whether this item is visible.
        * @type {Boolean}
        * @summary true if this item should be displayed, or false otherwise.
        */
        get visible(): boolean;
        _ignoreLayout: any;
        _font: any;
        _style: any;
        _tooltip: any;
        _hyperLink: any;
        _shadowColor: any;
        _shadowOffsetX: any;
        _shadowOffsetY: any;
        set textAlignment(arg: any);
        /**
        * Gets or sets the horizontal alignment of item's text.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get textAlignment(): any;
        set lineAlignment(arg: any);
        /**
        * Gets or sets the vertical alignment of item's text.
        * @type {Alignment}
        * @summary A member of the Alignment enumeration.
        */
        get lineAlignment(): any;
        /**
        * Loads the item content from an XML element.
        * @param {Element} xmlElement An XML DOM element that contains the item's serialized content.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        loadFromXml(xmlElement: Element, context: any): void;
        _brush: any;
        _pen: any;
        _tag: any;
        _id: any;
        /**
        * Saves the item content into an XML element.
        * @param {Element} xmlElement An XML DOM element that will contain the item's data.
        * @param {XmlPersistContext} context An object providing contextual information about the serialization process and some helper serialization methods.
        */
        saveToXml(xmlElement: Element, context: any): void;
        onLoad(items: any): void;
        /** @private */
        set parent(arg: any);
        /**
        * Gets the Diagram to which this item belongs.
        * @type {Diagram}
        * @summary An instance of the Diagram class.
        */
        get parent(): any;
        setDiagramDirty(): void;
        _textCacheInvalid: boolean;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to fill item's text.
        * @type {String}
        * @summary A string value identifying the text fill color.
        */
        get textColor(): string;
        set textStroke(arg: string);
        /**
        * Gets or sets the color used to stroke item's text.
        * @type {String}
        * @summary A string value identifying the text stroke color.
        */
        get textStroke(): string;
        set textStrokeThickness(arg: number);
        /**
        * Gets or sets the outline width of item's text.
        * @type {Number}
        * @summary A number specifying the thickness of text outline.
        */
        get textStrokeThickness(): number;
        set font(arg: Font);
        /**
        * Gets or sets the font used to render item's text.
        * @type {Font}
        * @summary An instance of the Font class.
        */
        get font(): Font;
        textCacheInvalid: boolean;
        set stroke(arg: string);
        /**
        * Gets or sets the color used to stroke item's frame.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get stroke(): string;
        set strokeDashStyle(arg: number);
        /**
        * Gets or sets the line dash pattern applied when stroking item's frame.
        * @type {DashStyle}
        * @summary A member of the DashStyle enumeration.
        */
        get strokeDashStyle(): number;
        set weight(arg: number);
        /**
        * Gets or sets a weight value used by layout and path-finding algorithms.
        * @type {Number}
        * @summary A number specifying the weight of this item. The default value is 1.
        */
        get weight(): number;
        _weight: any;
        getTooltip(): string;
        /**
        * Gets an object containing properties specific to individual layout algorithms.
        * @type {Object}
        * @summary An object containing layout properties.
        */
        get layoutTraits(): any;
        isFrozen(): boolean;
        set zIndex(arg: number);
        /**
        * Gets the z-order position of this item.
        * @type {Number}
        * @summary A number specifying the position of this item within diagram's z-order.
        */
        get zIndex(): number;
        setZIndex(value: any): void;
        get runtimeIndex(): any;
        set selectedState(arg: any);
        set selected(arg: boolean);
        /**
        * Gets or sets a value indicating whether a diagram item is selected.
        * @type {Boolean}
        * @summary true if the item is selected, or false otherwise.
        */
        get selected(): boolean;
        /**
        * Gets the parent ContainerNode containing this node.
        * @type {ContainerNode}
        * @summary The parent ContainerNode of this node.
        */
        get container(): any;
        /**
        * Invoked when the user starts dragging this item.
        * @param {InteractionState} ist An InteractionState object that encapsulates
        * the current state of user interaction with the control.
        */
        startDrag(ist: any): void;
        _mf_render: boolean;
        /**
        * Invoked while the user drags this item.
        * @param {InteractionState} ist An InteractionState object that encapsulates
        * the current state of user interaction with the control.
        */
        updateDrag(ist: any): void;
        /**
        * Invoked when the user stops dragging this item.
        * @param {InteractionState} ist An InteractionState object that encapsulates
        * the current state of user interaction with the control.
        */
        endDrag(ist: any): void;
        /**
        * Invoked to validate the drag operation.
        * @param {InteractionState} ist An InteractionState object that encapsulates
        * the current state of user interaction with the control.
        */
        allowDrag(ist: any): boolean;
        /**
        * Saves the state of this diagram item.
        * @returns {DiagramLinkState} A DiagramLinkState instance.
        * @virtual
        */
        saveLocationState(): any;
        restoreLocationState(ist: any): void;
        /**
        * Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo.
        */
        onRemove(): void;
        /**
        * Determines whether this item contains the specified point.
        * @param {Point} point The point to check.
        * @returns {Boolean} true if this item contains the specified point; otherwise, false.
        * @virtual
        */
        containsPoint(point: any): boolean;
        /**
        * Returns the diagram item that contains the specified point.
        * @param {Point} point A Point value specifying the logical coordinates of a diagram point.
        * @param {Number} [threshold] Specifies the size of the area around the item outlines where the point is still considered inside the item.
        * @param {Boolean} [onlyNodes] true to exclude child links from the search.
        * @param {Boolean} [onlyInteractive] true to exclude locked items from the search.
        * @returns {DiagramItem} The item that contains the specified point.
        */
        hitTest(point: any, threshold?: number, onlyNodes?: boolean, onlyInteractive?: boolean): DiagramItem;
        /**
        * For internal use only.
        * @private
        */
        private notInteractive;
        /**
        * Derived classes must implement this method by adding their graphics primitives
        * to the canvas.elements collection.
        * @virtual
        */
        addCanvasElements(): void;
        /**
        * Derived classes must implement this method by removing their graphics primitives
        * from the canvas.elements collection.
        * @virtual
        */
        removeCanvasElements(): void;
        onShapeLoaded(): void;
        /**
        * Derived classes must implement this method to update the item's visual elements.
        * @virtual
        */
        updateCanvasElements(): void;
        /**
        * For internal use only.
        * @private
        */
        private getRotatedBounds;
        /**
        * Gets the repaint region for this item, taking into account factors such as
        * pen width, selection handles and shadow.
        * @returns {Rect} A rectangular region that should be repainted when this item is modified.
        */
        getRepaintBounds(): Rect;
        adjustRepaintBounds(rect: any): any;
        /**
        * Invalidates the region of the canvas, that matches the item's repaint bounds.
        * @param {Boolean} [dirty] Optional.
        * @param {Boolean} [force] Optional.
        */
        invalidate(dirty?: boolean, force?: boolean): void;
        requestRepaint(rect: any, force: any): void;
        set locked(arg: boolean);
        /**
        * Gets or sets whether users are allowed to interact with this item.
        * @type {Boolean}
        * @summary true to prevent interaction, or false otherwise. Default value is false.
        */
        get locked(): boolean;
        /** @private */
        set topLevel(arg: boolean);
        /**
         * Gets if this is a top-level item in the diagram.
         * @type {Boolean}
         * @summary true if this is a top-level item in the diagram, or false if inside a container.
         */
        get topLevel(): boolean;
        hitTestManipulators(mousePosition: any): any;
        getObjectToEdit(point: any, element: any): DiagramItem;
        getDiagramItem(): DiagramItem;
        /**
        * For internal use only.
        * @private
        */
        private getTextToEdit;
        /**
        * For internal use only.
        * @private
        */
        private setEditedText;
        set shadowColor(arg: string);
        /**
        * Gets or sets the color used to draw item's shadow.
        * @type {String}
        * @summary A string specifying the shadow color.
        */
        get shadowColor(): string;
        set shadowOffsetX(arg: number);
        /**
        * Gets or sets the horizontal offset of item's shadow.
        * @type {Number}
        * @summary A number specifying the shadow's horizontal offset.
        */
        get shadowOffsetX(): number;
        set shadowOffsetY(arg: number);
        /**
        * Gets or sets the vertical offset of item's shadow.
        * @type {Number}
        * @summary A number specifying the shadow's vertical offset.
        */
        get shadowOffsetY(): number;
        createShadow(): Shadow;
        set style(arg: Style);
        /**
        * Gets or sets the style associated with this item.
        * @type {Style}
        * @summary An instance of the Style class.
        */
        get style(): Style;
        /**
        * Gets an array of visual elements used to render this item on the canvas.
        * @type {Array}
        * @summary An array containing objects from MindFusion.Drawing namespace.
        */
        get graphicsContent(): any[];
        /**
        * @private
        */
        private resolveEffectiveStyle;
        resolveInheritedStyle(check: any, theme: any): any;
        /**
        * Gets the effective brush that should be used to paint this item.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get effectiveBrush(): any;
        /**
        * Gets the effective brush that should be used to paint node's caption bar.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get effectiveCaptionBackBrush(): any;
        /**
        * Gets the effective color that should be used to stroke this item.
        * @type {String}
        * @summary A string specifying the item's stroke color.
        */
        get effectiveStroke(): string;
        /**
        * Gets the effective line thickness that should be applied when stroking this item.
        * @type {Number}
        * @summary A number specifying the item's stroke thickness.
        */
        get effectiveStrokeThickness(): number;
        /**
        * Gets the effective line dash pattern that should be applied when stroking this item.
        * @type {DashStyle}
        * @summary A member of the DashStyle enumeration.
        */
        get effectiveStrokeDashStyle(): number;
        /**
        * Gets the effective text color that should be used to render this item's text.
        * @type {String}
        * @summary A string specifying the item's text color.
        */
        get effectiveTextColor(): string;
        /**
        * Gets the effective text color that should be used to render this item's text outline.
        * @type {String}
        * @summary A string specifying the item's text outline color.
        */
        get effectiveTextStroke(): string;
        /**
        * Gets the effective width of the text outline of this item.
        * @type {Number}
        * @summary The width of the text outline of this item.
        */
        get effectiveTextStrokeThickness(): number;
        /**
        * Gets the effective font that should be used to render this item's text.
        * @type {Font}
        * @summary An instance of the Font class.
        */
        get effectiveFont(): Font;
        /**
        * Gets the name of the effective font that should be used to render this item's text.
        * @type {String}
        * @summary A string specifying the font name.
        */
        get effectiveFontName(): string;
        /**
        * Gets the size of the effective font that should be used to render this item's text.
        * @type {Number}
        * @summary A number specifying the font size.
        */
        get effectiveFontSize(): number;
        /**
        * Gets the style of the effective font that should be used to render this item's text.
        * @type {FontStyle}
        * @summary A combination of FontStyle enumeration members.
        */
        get effectiveFontStyle(): number;
        /**
        * Gets the effective color that should be used to render this item's shadow.
        * @type {String}
        * @summary A string specifying the item's shadow color.
        */
        get effectiveShadowColor(): string;
        get effectiveHandlesSize(): any;
        /**
        * Gets the Text object instance used to render item's text.
        * @type {Text}
        * @summary The Text component.
        */
        get textComponent(): Text;
        /**
        * Saves the properties of this diagram item.
        * @returns {Object} An object, containing the properties of this DiagramItem.
        * @remarks This method is used by the undo/redo subsystem.
        */
        saveState(): any;
        /**
        * Loads the properties of this diagram item.
        * @param {Object} state An object, containing the properties of this DiagramItem.
        * @remarks This method is used by the undo/redo subsystem.
        */
        restoreState(state: any): void;
        millimeter(): number;
    }
    import { Rect } from "@mindfusion/drawing";
    import { Text } from "@mindfusion/drawing";
    import { Thickness } from "@mindfusion/drawing";
    import { Container } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
    import { Shadow } from "@mindfusion/drawing";
    import { Style } from "Diagramming/Style";
}
declare module "Diagramming/ConnectionPoint" {
    /**
    * @class A class that represents a connection between an edge and a node in a graph.
    */
    export class ConnectionPoint {
        /**
        * @constructor
        * @param {DiagramNode} [node] The node whose connection to a link is managed by this ConnectionPoint.
        * @param {DiagramLink} [link] The link whose connection to a node is managed by this ConnectionPoint.
        * @param {Boolean} [incoming] Specifies which end of the link is represented by this ConnectionPoint.
        */
        constructor(node?: DiagramNode, link?: any, incoming?: boolean);
        node: DiagramNode;
        link: any;
        incoming: boolean;
        anchorPointDetails: {
            index: number;
            point: Point;
        };
        /**
        * Adds the link associated with this connection point to the associated node.
        * @virtual
        */
        addLinkToNode(): void;
        /**
        * Removes the link associated with this connection point from the associated node.
        * @virtual
        */
        removeLinkFromNode(): void;
        /**
        * For internal use only.
        * @private
        */
        private sameNode;
        /**
        * Updates the coordinates of the connection point represented by this link,
        * relative to the bounding rectangle of the associated node.
        * @param {Boolean} [ctrRelative]
        * @virtual
        */
        saveEndRelative(ctrRelative?: boolean): void;
        relativePosition: any;
        /**
        * For internal use only.
        * @private
        */
        private chooseBestAnchorPoint;
        /**
        * Returns the nearest anchor point pertinent to this connection.
        * @param {Point} point A Point instance specifying location in the diagram.
        * @returns {AnchorPointDetails} An AnchorPointDetails specifying the anchor point properties.
        * @virtual
        */
        getNearestAnchorPoint(point: Point): any;
        /**
        * Returns the nearest point lying on the node border.
        * @param {Point} point A Point instance specifying location in the diagram.
        * @returns {AnchorPointDetails} An AnchorPointDetails specifying the anchor point properties.
        * @virtual
        */
        getNearestBorderPoint(point: Point): any;
        alignEndPointToBorder(point: any): void;
        /**
        * Checks whether the link would change if attached to the specified node at the specified point.
        * @param {DiagramItem} item A DiagramItem under the mouse cursor.
        * @param {Point} point A point where the link will be connected.
        * @returns {Boolean} true if the link would connect to a different entity if dropped at the specified location; otherwise, false.
        * @virtual
        */
        linkChanges(item: any, point: Point): boolean;
        /**
        * Returns a point (usually the center of the bounding rectangle) contained within the associated node.
        * @returns {Point} A Point contained within the node.
        */
        getInitialPoint(): Point;
        /**
        * Checks whether the node associated with the current connection point and the node associated with the specified connection point intersect.
        * @param {ConnectionPoint} connectionPoint A ConnectionPoint instance.
        * @returns {Boolean} true if the node associated with the current connection point and the node associated with the specified connection point intersect; otherwise, false.
        * @virtual
        */
        nodesIntersect(connectionPoint: ConnectionPoint): boolean;
        /**
        * Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.
        * @param {Point} point1 The first point of the segment.
        * @param {Point} point2 The second point of the segment.
        * @returns {Point} A Point object representing the intersection point.
        * @virtual
        */
        getIntersection(point1: Point, point2: Point): Point;
        /**
        * Returns the bounding rectangle of the node associated with this connection point.
        * @returns {Rect} rect The bounding rectangle of the node.
        * @virtual
        */
        getNodeRect(): any;
        /**
        * For internal use only.
        * @private
        */
        private getLocation;
        /**
        * Calculates the coordinates of this connection point expressed in document coordinates.
        * @type {Point}
        * @summary A Point that represents the coordinate.
        * @virtual
        */
        get endPoint(): Point;
        /**
        * For internal use only.
        * @private
        */
        private canMoveLink;
        /**
        * For internal use only.
        * @private
        */
        private getType;
        getNearestAnchor(point: any, link: any, incoming: any): {
            index: number;
            point: any;
            location: any;
        };
        clone(link: any, node: any): any;
    }
    export class DummyConnectionPoint extends ConnectionPoint {
        /**
        * For internal use only.
        * @private
        */
        private constructor();
        point: any;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/HandleUtils" {
    export class HandleUtils {
        static pointInHandle(point: any, item: any): {
            item: any;
            index: number;
        };
        static drawAdjustmentHandles(context: any, item: any, handlesVisualStyle: any): void;
        static drawSquareHandles(context: any, item: any, handlesVisualStyle: any): void;
        static drawRoundAndSquareHandles(context: any, item: any, handlesVisualStyle: any): void;
        static drawDashFrame(context: any, bounds: any, mm: any, handlesVisualStyle: any): void;
        static drawDashedLine(context: any, p1: any, p2: any, dashLen: any): void;
        static drawHatchFrame(context: any, bounds: any, hatchBrush: any, size: any): void;
        static drawRotationHandle(context: any, item: any, handlesVisualStyle: any): void;
        static getHandlePositions(bounds: any, mm: any): any[];
        static drawCircle(context: any, center: any, radius: any): void;
        static getHatchFill(brush: any): HTMLCanvasElement;
        static getPatternFill(brush: any): HTMLCanvasElement;
        static createPattern(pixels: any, brush: any): HTMLCanvasElement;
    }
}
declare module "Diagramming/Manipulator" {
    /**
    * @class Manipulator is an abstract base class which defines the behavior of
    * miscellaneous UI widgets attached to nodes.
    * @augments Container
    */
    export class Manipulator extends Container {
        /**
        * Initializes a new instance of the Manipulator class.
        * @constructor
        * @param {DiagramNode} [node] The DiagramNode containing this manipulator.
        */
        constructor(node?: any);
        node: any;
        updateLocation(): void;
        onClick(mousePosition: any): void;
        needsMouseMessages(mousePosition: any): boolean;
        onMouseDown(mousePosition: any): void;
        onMouseMove(mousePosition: any): void;
        onMouseUp(mousePosition: any): void;
        cancel(): void;
        setMouseCursor(mousePosition: any): void;
    }
    import { Container } from "@mindfusion/drawing";
}
declare module "Diagramming/ExpandButton" {
    export default ExpandButton;
    /**
    * For internal use only.
    * @private
    */
    class ExpandButton extends Manipulator {
        constructor(node: any);
        getRect(): Rect;
        getRotatedRect(): Rect;
        drawMinus(rect: any, mm: any): void;
        drawPlus(rect: any, mm: any): void;
        updateContent(): void;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/Selection" {
    export default Selection;
    /**
    * @class Represents a set of items selected in the diagram document.
    * @augments DiagramItem
    */
    class Selection extends DiagramItem {
        /**
        * Initializes a new instance of the Selection class.
        * @constructor
        * @param {Diagram} parent The diagram where the items are selected.
        */
        constructor(parent: any);
        _items: any[];
        _nodes: any[];
        _links: any[];
        _allowMultipleSelection: boolean;
        bounds: Rect;
        savedBounds: Rect;
        /**
        * Adds an item to this Selection.
        * @param {DiagramItem} item The item to add.
        */
        addItem(item: DiagramItem): void;
        /**
        * For internal use only.
        * @private
        */
        private addItemInternal;
        /**
        * Removes an item from this Selection.
        * @param {DiagramItem} item The item to remove.
        */
        removeItem(item: DiagramItem): boolean;
        /**
        * For internal use only.
        * @private
        */
        private removeItemInternal;
        /**
        * Gets a rectangle that defines the position of the selection frame.
        * @returns {Rect} The frame's bounding rectangle.
        */
        getBounds(): Rect;
        recalcRect(): void;
        /**
        * Removes all items from the selection.
        */
        clear(): void;
        /**
        * For internal use only.
        * @private
        */
        private clearInternal;
        /**
        * For internal use only.
        * @private
        */
        private selectSingle;
        /**
        * For internal use only.
        * @private
        */
        private itemInSelection;
        /**
        * For internal use only.
        * @private
        */
        private selectItemsInRect;
        cloneNodes(idmap: any): any[];
        cloneLinks(idmap: any): any[];
        /**
        * Returns an array of all items in this selection.
        * @type {Array<DiagramItem>}
        * @summary Array of DiagramItem objects.
        */
        get items(): DiagramItem[];
        /**
        * Returns an array of all nodes in this selection.
        * @type {Array<DiagramNode>}
        * @summary Array of DiagramNode objects.
        */
        get nodes(): DiagramNode[];
        /**
        * Returns an array of all links in this selection.
        * @type {Array<DiagramLink>}
        * @summary Array of DiagramLink objects.
        */
        get links(): DiagramLink[];
        set allowMultipleSelection(arg: boolean);
        /**
        * Gets or sets a value indicating whether more than one items can be selected simultaneously.
        * @type {Boolean}
        * @summary true to let the user select multiple items, or false otherwise. The default value is true.
        */
        get allowMultipleSelection(): boolean;
        /**
        * For internal use only.
        * @private
        */
        private getHandlePosition;
        /**
        * For internal use only.
        * @private
        */
        private handleAtPoint;
    }
    import { DiagramItem } from "Diagramming/LoadOrder";
    import { Rect } from "@mindfusion/drawing";
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { DiagramLink } from "Diagramming/LoadOrder";
}
declare module "Diagramming/Interaction/DiagramMediator" {
    export default DiagramMediator;
    class DiagramMediator {
        static get AllRules(): (typeof ItemFollowsContainerRule | typeof NodeFollowsSelectionRule)[];
        static get LinkRules(): (typeof LinkFollowsNodesRule)[];
        static get GroupRules(): (typeof ItemFollowsContainerRule)[];
        constructor(masterItem: any);
        masterItem: any;
        items: any[];
        originalStates: Map<any, any>;
        set rules(arg: any);
        get rules(): any;
        _rules: any;
        updateDependencies(): void;
        canApplyRule(rule: any, item: any, unprocessed: any): boolean;
        collectDependencies(): void;
        translateLinkPoints(): void;
        sameOffset(node1: any, node2: any): false | Vector;
    }
    import { Vector } from "@mindfusion/drawing";
    class ItemFollowsContainerRule {
        static dependencies(master: any): any[];
        static dependentUpon(dependency: any): any[];
        static recognize(dependency: any): boolean;
        static updateFromMasters(dependency: any, originalStates: any): void;
    }
    class NodeFollowsSelectionRule {
        static dependencies(master: any): DiagramNode[];
        static dependentUpon(dependency: any): any[];
        static recognize(dependency: any): boolean;
        static updateFromMasters(dependency: any, originalStates: any, ist: any): void;
    }
    class LinkFollowsNodesRule {
        static dependencies(master: any): any[];
        static dependentUpon(dependency: any): any[];
        static recognize(dependency: any): boolean;
        static updateFromMasters(dependency: any, originalStates: any): void;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
}
declare module "Diagramming/DeleteButton" {
    export default DeleteButton;
    /**
    * For internal use only.
    * @private
    */
    class DeleteButton extends Manipulator {
        constructor(node: any);
        getRect(): Rect;
        getRotatedRect(): Rect;
        updateContent(): void;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/DiagramNode" {
    export default DiagramNode;
    /**
    * @class DiagramNode is an abstract base class from which the ShapeNode, TableNode and ControlNode classes derive.
    * DiagramNode instances can represent graph vertices, nodes in organizational or flow diagrams, entities in ER diagrams,
    * and so on.
    * @augments DiagramItem
    */
    class DiagramNode extends DiagramItem {
        /**
        * For internal use only.
        * @private
        */
        private static nodesIntersect;
        /**
        * Initializes a new instance of the DiagramNode class.
        * @constructor
        * @param {Diagram} [parent] A Diagram instance whose default node attributes are copied to this node.
        */
        constructor(parent?: Diagram);
        _rotationAngle: number;
        _enabledHandles: number;
        _handlesStyle: number;
        _incomingLinks: any[];
        _outgoingLinks: any[];
        _allowIncomingLinks: boolean;
        _allowOutgoingLinks: boolean;
        _obstacle: boolean;
        set anchorPattern(arg: AnchorPattern);
        /**
        * Gets or sets the anchor points to which links attach when connected to this node.
        * @type {AnchorPattern}
        * @summary An AnchorPattern object that defines a set of anchor points.
        */
        get anchorPattern(): AnchorPattern;
        anchorPointVisuals: any[];
        isAnchorPatternVisible: boolean;
        _expandable: boolean;
        _expanded: boolean;
        _showDeleteButton: boolean;
        _nodeEffects: any[];
        set expandable(arg: boolean);
        /**
        * Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node.
        * @type {Boolean}
        * @summary true if users are allowed to expand/collapse the subtree, or false otherwise.
        */
        get expandable(): boolean;
        searchId: number;
        set bounds(arg: Rect);
        /**
        * Gets or sets a rectangle that defines the position of this node.
        * @type {Rect}
        * @summary The node's bounding rectangle.
        */
        get bounds(): Rect;
        set rotationAngle(arg: number);
        /**
        * Gets or sets the angle at which this node is rotated.
        * @type {Number}
        * @summary A number specifying the rotation angle. The default is 0.
        */
        get rotationAngle(): number;
        set enabledHandles(arg: number);
        /**
        * Gets or sets a value indicating which adjustment handles are enabled for this node.
        * @type {AdjustmentHandles}
        * @summary A combination of the AdjustmentHandles enumeration members.
        */
        get enabledHandles(): number;
        set showDeleteButton(arg: boolean);
        /**
        * Gets or sets whether this node displays a delete button.
        * @type {Boolean}
        * @summary true to display delete button for the node, or false otherwise.
        */
        get showDeleteButton(): boolean;
        set allowIncomingLinks(arg: boolean);
        /**
        * Gets or sets whether users are allowed to draw incoming links to this node.
        * @type {Boolean}
        * @summary true if users are allowed to draw incoming links, or false otherwise.
        */
        get allowIncomingLinks(): boolean;
        set allowOutgoingLinks(arg: boolean);
        /**
        * Gets or sets whether users are allowed to draw outgoing links from this node.
        * @type {Boolean}
        * @summary true if users are allowed to draw outgoing links, or false otherwise.
        */
        get allowOutgoingLinks(): boolean;
        set obstacle(arg: boolean);
        /**
        * Gets or sets whether this node is considered an obstacle by link routing algorithms.
        * @type {Boolean}
        * @summary true to route links around this node, or false to lets links cross the node. The default value is true.
        */
        get obstacle(): boolean;
        masterId: any;
        containerId: any;
        _anchorPattern: any;
        loadEffects(elementName: any, parentElement: any, context: any): void;
        saveEffects(elementName: any, parentElement: any, context: any): void;
        _container: any;
        /**
        * Gets the incoming links to this node.
        * @type {Array}
        * @summary An array of DiagramLink objects.
        */
        get incomingLinks(): any[];
        /**
        * Gets the outgoing links from this node.
        * @type {Array}
        * @summary An array of DiagramLink objects.
        */
        get outgoingLinks(): any[];
        /**
        * Determines whether the node can be connected with links of the specified type.
        * @param {Boolean} outgoing true to check for outgoing links; otherwise, false.
        * @returns {Boolean} true if the node accepts connections of the specified type; otherwise, false.
        */
        acceptLinks(outgoing: boolean): boolean;
        setRotationAngle(value: any, updateDependencies: any): void;
        /**
        * Raises an event which notifies that a node has been clicked.
        * @param {Point} mousePosition The position of the mouse.
        * @param {MouseButton} mouseButton A value identifying the clicked mouse button.
        */
        raiseClicked(mousePosition: Point, mouseButton: MouseButton): boolean;
        /**
        * Raises an event which notifies that a node has been double-clicked.
        * @param {Point} mousePosition The position of the mouse.
        * @param {MouseButton} mouseButton A value identifying the clicked mouse button.
        */
        raiseDoubleClicked(mousePosition: Point, mouseButton: MouseButton): boolean;
        /**
        * Creates a connection point between this node and the specified link at the specified point.
        * @param {DiagramLink} link A DiagramLink that should be connected to this node.
        * @param {Point} point The point at which the link should be connected.
        * @param {Boolean} incoming true if link is an incoming link, otherwise, false.
        * @returns {ConnectionPoint}
        */
        createConnectionPoint(link: any, point: Point, incoming: boolean): ConnectionPoint;
        /**
        * For internal use only.
        * @private
        */
        private addIncomingLink;
        /**
        * For internal use only.
        * @private
        */
        private addOutgoingLink;
        /**
        * For internal use only.
        * @private
        */
        private removeIncomingLink;
        /**
        * For internal use only.
        * @private
        */
        private removeOutgoingLink;
        /**
        * For internal use only.
        * @private
        */
        private getAllIncomingLinks;
        /**
        * For internal use only.
        * @private
        */
        private getAllOutgoingLinks;
        /**
        * Returns all links connected to this node.
        * @return {Array} An array of DiagramLink objects.
        */
        getAllLinks(): any[];
        /**
        * For internal use only.
        * @private
        */
        private deleteLinks;
        onDragOver(item: any): boolean;
        onDragOut(item: any): void;
        /**
        * For internal use only.
        * @private
        */
        private updateLinks;
        /**
        * Sets the rectangle that defines the position of the diagram node.
        * @param {Rect} bounds The node's bounding rectangle.
        * @param {Boolean} [updateDependencies] true if links and attachments must be updated too, or false otherwise.
        */
        setBounds(bounds: Rect, updateDependencies?: boolean): void;
        setBoundsWithRules(bounds: any, rules: any): void;
        setBoundsWithRules2(bounds: any, updateLinks: any, updateChildren: any): void;
        setBoundsImpl(bounds: any): void;
        onUpdateBounds(): void;
        /**
        * For internal use only.
        * @private
        */
        private setCenterAndSize;
        /**
        * For internal use only.
        * @private
        */
        private move;
        /**
        * For internal use only.
        * @private
        */
        private updateRect;
        /**
        * For internal use only.
        * @private
        */
        private updateRectMove;
        /**
        * For internal use only.
        * @private
        */
        private checkKeepInsideParent;
        /**
        * For internal use only.
        * @private
        */
        private getHandlePosition;
        /**
        * For internal use only.
        * @private
        */
        private handleAtPoint;
        /**
        * For internal use only.
        * @private
        */
        private nonRotatedHandlePosition;
        /**
        * Gets the center of this node's bounding rectangle.
        * @type {Point}
        * @summary A Point representing the center point of this node.
        */
        get center(): Point;
        /**
        * For internal use only.
        * @private
        */
        private getRotatedBounds1;
        /**
        * Calculates the intersection point between the segment defined by the specified
        * point pair and the node's outline.
        * @param {Point} point1 The first point of the segment.
        * @param {Point} point2 The second point of the segment.
        * @returns {Point} A Point object representing the intersection point.
        */
        getIntersection(point1: Point, point2: Point): Point;
        getTopIntr(xfactor: any): Point;
        /**
        * For internal use only.
        * @private
        */
        private intersects;
        /**
        * For internal use only.
        * @private
        */
        private makeRect;
        /**
        * For internal use only.
        * @private
        */
        private considerBounds;
        /**
        * For internal use only.
        * @private
        */
        private sortHandles;
        /**
        * For internal use only.
        * @private
        */
        private getAnchor;
        /**
        * For internal use only.
        * @private
        */
        private getAnchorFromIndex;
        /**
        * For internal use only.
        * @private
        */
        private getNearestAnchor;
        get handlePositions(): Point[];
        /**
        * For internal use only.
        * @private
        */
        private rotateRect;
        removeRotation(point: any): any;
        _mf_lineWidth: any;
        drawHandles(context: any, handlesStyle: any): void;
        set handlesStyle(arg: number);
        /**
        * Gets or sets a value specifying appearance and behavior of node's adjustment handles.
        * @type {HandlesStyle}
        * @summary A member of the HandlesStyle enumeration. The default value is SquareHandles.
        */
        get handlesStyle(): number;
        expandButton: ExpandButton;
        set expanded(arg: boolean);
        /**
        * Gets or sets whether the subtree rooted at this node is expanded.
        * @type {Boolean}
        * @summary true if the subtree is expanded, or false otherwise.
        */
        get expanded(): boolean;
        setExpandedFlag(value: any): void;
        deleteButton: DeleteButton;
        addManipulator(manipulator: any): void;
        manipulators: any[];
        removeManipulator(manipulator: any): void;
        updateManipulators(): void;
        addManipulatorVisuals(content: any): void;
        collapse(collapsedSet: any): void;
        collapsedSet: Set<any>;
        expand(): void;
        /**
        * For internal use only.
        * @private
        */
        private setProperty;
        /**
        * Gets the bounding rectangle of this node.
        * @returns {Rect} A rectangle.
        */
        getOutline(): Rect;
        /**
        * For internal use only.
        * @private
        */
        private getNearestBorderPoint;
        addAnchorPointVisuals(anchorPattern: any, pointVisuals: any, updatePositions: any): void;
        removeAnchorPointVisuals(anchorPoints: any): void;
        createAnchorPointVisual(point: any): Rect | Arc | Path;
        updateAnchorVisibility4(): void;
        updateAnchorVisibility2(isVisible: any): void;
        updateAnchorVisibility3(pat: any, visuals: any, isVisible: any): void;
        updateAnchorVisibility(newAutoAnchorsNode: any): void;
        calcAnchorVisibility(newAutoAnchorsNode: any): boolean;
        updateAnchorPositions2(): void;
        get anchorRect(): any;
        /**
        * Attaches this node to the specified master node so that when the master is moved, the attached node follows it.
        * @param {DiagramNode} node A DiagramNode instance specifying the master node.
        */
        attachTo(node: DiagramNode): void;
        /**
        * Detaches this node from its current master node.
        */
        detach(): void;
        /**
        * Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it.
        * @param {DiagramNode} subordinate A DiagramNode instance specifying the node that should be attached.
        */
        attach(subordinate: DiagramNode): void;
        /**
        * Returns the nodes attached to this node.
        * @type {Array}
        * @summary An array of nodes attached to this node via the attach or attachTo methods.
        */
        get attachedNodes(): any[];
        detachSub(subordinate: any): void;
        /**
        * Returns the node to which this node is attached.
        * @type {DiagramNode}
        * @summary A DiagramNode reference specifying the node to which
        * this node has been previously attached via the attach or attachTo method.
        */
        get masterNode(): DiagramNode;
        get absoluteMaster(): DiagramNode;
        getEditRect(point: any): Rect;
        createEditArgs(oldText: any, newText: any): NodeEventArgs;
        onDropOver(item: any): boolean;
        onHide(): void;
        onShow(): void;
        getLayoutMaster(includeGroups: any): any;
        /**
        * Gets the effects applied to this node.
        * @type {Array}
        * @summary An array of NodeEffect objects.
        */
        get effects(): any[];
        /**
        * Gets the effects applied to this node.
        * @type {Array}
        * @summary An array of NodeEffect objects.
        */
        get effectiveEffects(): any[];
        applyEffects(context: any, params: any): void;
        updateAnimation(animation: any, animationDelta: any): void;
    }
    import { DiagramItem } from "Diagramming/LoadOrder";
    import { AnchorPattern } from "Diagramming/AnchorPattern";
    import { Rect } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
    import { MouseButton } from "@mindfusion/controls";
    import { ConnectionPoint } from "Diagramming/ConnectionPoint";
    import ExpandButton from "Diagramming/ExpandButton";
    import DeleteButton from "Diagramming/DeleteButton";
    import { Arc } from "@mindfusion/drawing";
    import { Path } from "@mindfusion/drawing";
    import { NodeEventArgs } from "Diagramming/EventArgs";
    import { Diagram } from "Diagramming/Diagram";
}
declare module "Diagramming/FoldContainerCommand" {
    /**
    * @class Handles undo / redo of container folding.
    * @augments Command
    */
    export class FoldContainerCommand extends Command {
        /**
        * Initializes a new instance of the FoldContainerCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {ContainerNode} container The ContainerNode instance that will be modified.
        */
        constructor(diagram: any, container: any);
        container: any;
        folded: any;
        name: string;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/Folder" {
    export default Folder;
    /**
    * For internal use only.
    * @private
    */
    class Folder extends Manipulator {
        constructor(node: any);
        getRect(): any;
        getRotatedRect(): any;
        getOutline(): any[];
        updateContent(): void;
    }
    import { Manipulator } from "Diagramming/Manipulator";
}
declare module "Diagramming/ContainerNode" {
    export default ContainerNode;
    /**
    * @class ContainerNode instances are diagram nodes that can contain other nodes.
    * @augments DiagramNode
    */
    class ContainerNode extends DiagramNode {
        static getLinksToContainedNodes(externalLinks: any, node: any): void;
        static getFoldedContainer(node: any): any;
        set captionHeight(arg: number);
        /**
        * Gets or sets the height of the node's caption area.
        * @type {Number}
        * @summary A number specifying the height of the caption bar. The default value is 6.
        */
        get captionHeight(): number;
        _children: any[];
        margin: number;
        set allowAddChildren(arg: boolean);
        /**
        * Gets or sets whether users are allowed to add child nodes to the container.
        * @type {Boolean}
        * @summary true if child nodes can be added interactively, or false otherwise.
        */
        get allowAddChildren(): boolean;
        set allowRemoveChildren(arg: boolean);
        /**
        * Gets or sets whether users are allowed to remove child nodes from the container.
        * @type {Boolean}
        * @summary true if child nodes can be removed interactively, or false otherwise.
        */
        get allowRemoveChildren(): boolean;
        zOrder: any[];
        set clipChildren(arg: boolean);
        /**
        * Gets or sets whether child items should be clipped by container boundaries.
        * @type {Boolean}
        * @summary true if child items are clipped, or false otherwise.
        */
        get clipChildren(): boolean;
        _captionHeight: any;
        _captionBackBrush: any;
        _allowAddChildren: any;
        _allowRemoveChildren: any;
        _margin: any;
        _clipChildren: any;
        _foldIconSize: any;
        set foldable(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to fold the container.
        * @type {Boolean}
        * @summary true if the container can be folded, or false otherwise.
        */
        get foldable(): boolean;
        set folded(arg: boolean);
        /**
        * Gets or sets a value indicating whether the container is folded.
        * @type {Boolean}
        * @summary true if the container is folded, or false otherwise.
        */
        get folded(): boolean;
        set enableStyledText(arg: boolean);
        /**
        * Gets or sets a value indicating whether styled caption text rendering is enabled.
        * @type {Boolean}
        * @summary true to parse the node's caption text in order to find formatting tags, or false otherwise.
        */
        get enableStyledText(): boolean;
        _unfoldedSize: any;
        _shape: any;
        _folded: any;
        /**
        * Adds a node to this container.
        * @param {DiagramNode} node The node that should be added to the container.
        */
        add(node: DiagramNode): void;
        /**
        * Removes a node from this container.
        * @param {DiagramNode} node The node that should be removed from the container.
        */
        remove(node: DiagramNode, raiseEvent: any): void;
        drawChildren(context: any, drawShadows: any, shadowsOnly: any, node: any): void;
        /**
        * Creates a path corresponding to the content area rectangle, excluding caption bar.
        * @type {Path}
        * @summary A Path instance.
        */
        get contentPath(): Path;
        /**
        * Gets the child nodes of this container.
        * @type {Array}
        * @summary An array containing the child nodes of this container.
        */
        get children(): any[];
        addToZOrder(item: any): void;
        updateZOrder(): void;
        sortByIndex(a: any, b: any): number;
        visitChildren(): void;
        /**
        * Look for links for which this it the innermost container
        * containing both of their nodes. Such links will be considered
        * children of the container and drawn only if it's not folded.
        * @private
        */
        private getLinksInScope;
        /**
        * For internal use only.
        * @private
        */
        private getIntersectingItems;
        /**
        * For internal use only.
        * @private
        */
        private countIntersectingItems;
        set shape(arg: number);
        /**
        * Gets or sets the shape of the node's outline.
        * @type {SimpleShape}
        * @summary A member of the SimpleShape enumeration.
        */
        get shape(): number;
        set captionBackBrush(arg: any);
        /**
        * Gets or sets an object specifying how to fill the caption bar.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get captionBackBrush(): any;
        addNodes(nodes: any): boolean;
        /**
        * Determines whether the specified node is contained within this container,
        * either directly or inside child containers.
        * @param {DiagramNode} node
        * @returns {Boolean} true if the specified node is inside the container, or false otherwise.
        */
        containsRecursively(node: DiagramNode): boolean;
        /**
        * Visits the diagram nodes in reverse Z order.
        * @param {Point} point
        * @param {Function} visitNode
        * @param {DiagramItem} relatedItem
        */
        visitNodes(point: any, visitNode: Function, relatedItem: any): any;
        getContentBounds(includeLinks: any): any;
        get foldedBounds(): any;
        /**
        * Resizes the container making it big enough to contain its child nodes.
        * @param {Boolean} allowShrink
        * @param {Number} margin
        */
        resizeToFitChildren(allowShrink: boolean, margin: number): void;
        /**
        * Makes the container node caption big enough to display its text without clipping.
        * @param {FitSize} fit A member of the FitSize enumeration.
        * @param {Boolean} [fixPosition] Fix the position of the container to the original location. The default is false.
        * @param {Number} [foldBtnWidth] The width of the folder button, if it's not provided,
        * the value from FoldIconSize is used.
        * @returns {Boolean} true if the caption is resized successfully; otherwise, false.
        */
        resizeToFitText(fit: FitSize, fixPosition?: boolean, foldBtnWidth?: number): boolean;
        onChildModified(node: any, handle: any): void;
        folder: Folder;
        set foldIconSize(arg: number);
        /**
        * Gets or sets a value indicating the size of the fold/unfold icon.
        * @type {Number}
        * @summary A number specifying icon size.
        */
        get foldIconSize(): number;
        doFold(): void;
        doUnfold(): void;
        deselectContainedItems(): void;
        getDescendantNodes(): any;
        getDescendantLinks(): any[];
        updateAllLinks(): void;
        updateExternalLinks(): void;
        /**
        * Gets the size of the container in unfolded state.
        * @type {Size}
        * @summary The size of the container in unfolded state.
        */
        get unfoldedSize(): Size;
        raiseChildAdded(child: any): boolean;
        raiseChildRemoved(child: any): boolean;
        raiseFolded(): boolean;
        raiseUnfolded(): boolean;
        getChildLinks(): any[];
        toGraph(simple: any, keepGroups: any, hierarchy: any): import("Graphs/Graph").Graph;
        /**
        * Arranges the container's children with the given layout.
        * @param {Object} layout The layout algorithm to apply.
        */
        arrange(layout: any): void;
        links: any[];
        /**
        * Arranges the container's children with the given layout, and animates items moving to their new positions.
        * @param {Object} layout The layout algorithm to apply.
        * @param {Number} [duration] An integer, specifying the duration of the animation in milliseconds.
        * @param {AnimationType} [animationType] A member of the AnimationType enumeration, specifying the animation type to use.
        * @param {EasingType} [easingType] A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.
        */
        arrangeAnimated(layout: any, duration?: number, animationType?: any, easingType?: any): void;
        arrangeAnimatedComplete(layout: any): void;
    }
    namespace ContainerNode {
        const usingContainerNodes: boolean;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Path } from "@mindfusion/drawing";
    import { FitSize } from "Diagramming/Enum";
    import Folder from "Diagramming/Folder";
    import { Size } from "@mindfusion/drawing";
}
declare module "Diagramming/ShapeNode" {
    export default ShapeNode;
    /**
    * @class ShapeNode instances are diagram nodes that represent geometric shapes.
    * @augments DiagramNode
    */
    class ShapeNode extends DiagramNode {
        set imageLocation(arg: string);
        /**
        * Gets or sets URL of the image to display inside this node.
        * @type {String}
        * @summary A URL string that identifies the image to be loaded.
        */
        get imageLocation(): string;
        set image(arg: HTMLImageElement);
        /**
        * Gets or sets the image displayed by this node.
        * @type {HTMLImageElement}
        * @summary An image object to render as node's content.
        */
        get image(): HTMLImageElement;
        set imageAlign(arg: number);
        /**
        * Gets or sets the alignment of node's image.
        * @type {ImageAlign}
        * @summary A member of the {ImageAlign} enumeration.
        */
        get imageAlign(): number;
        set rotateText(arg: boolean);
        /**
        * Gets or sets a value indicating whether text gets rotated along with the node.
        * @type {Boolean}
        * @summary true to rotate the text, or false to keep it horizontal.
        */
        get rotateText(): boolean;
        set rotateImage(arg: boolean);
        /**
        * Gets or sets a value indicating whether image gets rotated along with the node.
        * @type {Boolean}
        * @summary true to rotate the image, or false otherwise.
        */
        get rotateImage(): boolean;
        set allowFlip(arg: boolean);
        /**
        * Gets or sets whether the node's shape flips when users drag an edge over its opposite edge.
        * @type {Boolean}
        * @summary true to flip the shape, or false otherwise.
        */
        get allowFlip(): boolean;
        set flipX(arg: boolean);
        /**
        * Gets or sets a value indicating whether the node's shape is fliped horizontally.
        * @type {Boolean}
        * @summary true if the shape is flipped horizontally, or false otherwise.
        */
        get flipX(): boolean;
        set flipY(arg: boolean);
        /**
        * Gets or sets a value indicating whether the node's shape is fliped vertically.
        * @type {Boolean}
        * @summary true if the shape is flipped vertically, or false otherwise.
        */
        get flipY(): boolean;
        set shape(arg: string | Shape);
        /**
        * Gets or sets the geometric shape displayed by this node.
        * @type {Shape | String}
        * @summary The Shape of this node.
        */
        get shape(): string | Shape;
        set transparent(arg: boolean);
        /**
        * Gets or sets a value indicating whether the node's geometry is visible.
        * @type {Boolean}
        * @summary true if node's geometry is hidden, or false otherwise.
        */
        get transparent(): boolean;
        set imageContent(arg: string);
        /**
        * Gets or sets a Base64-encoded image to display inside this node.
        * @type {String}
        * @summary A Base64-encoded representation of an image.
        */
        get imageContent(): string;
        set imagePadding(arg: Thickness);
        /**
        * Gets or sets the padding distance between node borders and image.
        * @type {Thickness}
        * @summary A Thickness instance specifying image padding.
        */
        get imagePadding(): Thickness;
        set enableStyledText(arg: boolean);
        /**
        * Gets or sets a value indicating whether styled text rendering is enabled.
        * @type {Boolean}
        * @summary true to parse the node's text in order to find formatting tags; or false otherwise.
        */
        get enableStyledText(): boolean;
        _imageAlign: any;
        _rotateImage: any;
        _imagePadding: any;
        _transparent: any;
        _flipX: any;
        _flipY: any;
        _allowFlip: any;
        _rotateText: any;
        _image: Image;
        /**
        * For internal use only.
        * @private
        */
        private validateParams;
        shapeRenderer: ShapeRenderer;
        _shape: any;
        _imageLocation: any;
        _imageContent: any;
        /**
        * For internal use only.
        * @private
        */
        private loadImage;
        textOverflows(): boolean;
        /**
        * Makes the shape node big enough to display its text without clipping.
        * @param {FitSize} fit A member of the FitSize enumeration.
        * @returns {Boolean} true if the node is resized successfully; otherwise, false.
        */
        resizeToFitText(fit: FitSize): boolean;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Shape } from "Diagramming/Shape";
    import { Thickness } from "@mindfusion/drawing";
    import { Image } from "@mindfusion/drawing";
    import ShapeRenderer from "Diagramming/ShapeRenderer";
    import { FitSize } from "Diagramming/Enum";
}
declare module "Diagramming/ScrollTableCommand" {
    /**
    * @class Handles undo / redo of table scrolling.
    * @augments Command
    */
    export class ScrollTableCommand extends Command {
        /**
        * Initializes a new instance of the ScrollTableCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {TableNode} table The TableNode instance that will be modified.
        */
        constructor(diagram: any, table: any);
        table: any;
        oldRow: any;
        name: string;
        newRow: any;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/Scroller" {
    /**
    * For internal use only.
    * @private
    */
    export class Scroller extends Manipulator {
        constructor(node: any);
        getRect(): Rect;
        getRotatedRect(): Rect;
        updateContent(): void;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/TableConnectionPoint" {
    /**
    * @class A class that represents a connection between an edge and a node in a graph.
    * @augments ConnectionPoint
    */
    export class TableConnectionPoint extends ConnectionPoint {
        /**
        * @constructor
        * @param {DiagramNode} [node] The node whose connection to a link is managed by this TableConnectionPoint.
        * @param {DiagramLink} [link] The link whose connection to a node is managed by this TableConnectionPoint.
        * @param {Boolean} [incoming] Specifies which end of the link is represented by this TableConnectionPoint.
        * @param {Number} [row]
        */
        constructor(node?: any, link?: any, incoming?: boolean, row?: number);
        row: number;
        rowObject(): any;
        setRow(value: any, updateObjects: any): void;
    }
    import { ConnectionPoint } from "Diagramming/ConnectionPoint";
}
declare module "Diagramming/CellEditor" {
    export default CellEditor;
    class CellEditor {
        constructor(table: any, cellInfo: any);
        table: any;
        cell: any;
        rect: any;
        column: any;
        row: any;
        getTextToEdit(): any;
        getEditRect(point: any): any;
        createEditArgs(oldText: any, newText: any): CellEventArgs;
        setEditedText(newText: any): void;
        getDiagramItem(): any;
    }
    import { CellEventArgs } from "Diagramming/EventArgs";
}
declare module "Diagramming/ResizeTableColumnCommand" {
    /**
    * @class Implements resizing of table's columns.
    * @augments Command
    */
    export class ResizeTableColumnCommand extends Command {
        /**
        * Initializes a new instance of the ResizeTableColumnCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {TableNode} table The TableNode instance that will be modified.
        * @param {Object} column The column object that will be resized.
        */
        constructor(diagram: any, table: any, column: any);
        table: any;
        column: any;
        oldWidth: any;
        oldStyle: any;
        name: string;
        newWidth: any;
        newStyle: any;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/ColumnResizer" {
    export default ColumnResizer;
    /**
    * For internal use only.
    * @private
    */
    class ColumnResizer extends Manipulator {
        constructor(node: any, columnIndex: any);
        columnIndex: any;
        column: any;
        startWidth: any;
        autoWidth: boolean;
        localPoint(point: any): any;
        mouseDown: boolean;
        current: any;
        last: any;
        resizing: boolean;
        cmd: ResizeTableColumnCommand;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { ResizeTableColumnCommand } from "Diagramming/ResizeTableColumnCommand";
}
declare module "Diagramming/ResizeTableRowCommand" {
    /**
    * @class Implements resizing of table's rows.
    * @augments Command
    */
    export class ResizeTableRowCommand extends Command {
        /**
        * Initializes a new instance of the ResizeTableRowCommand class.
        * @constructor
        * @param {Diagram} diagram The Diagram modified by this command.
        * @param {TableNode} table The TableNode instance that will be modified.
        * @param {Object} row The row object that will be resized.
    
        */
        constructor(diagram: any, table: any, row: any);
        table: any;
        row: any;
        oldHeight: any;
        name: string;
        newHeight: any;
    }
    import { Command } from "Diagramming/Command";
}
declare module "Diagramming/RowResizer" {
    export default RowResizer;
    /**
    * For internal use only.
    * @private
    */
    class RowResizer extends Manipulator {
        constructor(node: any, rowIndex: any);
        rowIndex: any;
        row: any;
        startHeight: any;
        localPoint(point: any): any;
        mouseDown: boolean;
        current: any;
        last: any;
        resizing: boolean;
        cmd: ResizeTableRowCommand;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { ResizeTableRowCommand } from "Diagramming/ResizeTableRowCommand";
}
declare module "Diagramming/ScrollBar" {
    /**
    * For internal use only.
    * @private
    */
    export class ScrollBar extends Manipulator {
        constructor(node: any);
        thumbMouseDelta: number;
        mouseDown: boolean;
        getRect(): Rect;
        getRotatedRect(): Rect;
        updateContent(): void;
        getThumbRect(node: any, rect: any): any;
        calcScrollPos(thumbPos: any): any;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/TableNode" {
    export default TableNode;
    /**
    * @class TableNode instances are diagram nodes that can be used to display tabular or list data.
    * @augments DiagramNode
    */
    class TableNode extends DiagramNode {
        set captionHeight(arg: number);
        /**
        * Gets or sets the height of the node's caption area.
        * @type {Number}
        * @summary A number specifying the height of the caption bar. The default value is 6.
        */
        get captionHeight(): number;
        cells: Grid;
        rows: {
            height: number;
            incomingLinks: any[];
            outgoingLinks: any[];
        }[];
        columns: {
            width: number;
            columnStyle: number;
        }[];
        _currentScrollRow: number;
        set connectionStyle(arg: number);
        /**
        * Gets or sets whether drawing a link from/to this node should connect
        * an individual table row, or the whole table as an integral entity.
        * @type {ConnectionStyle}
        * @summary A member of the ConnectionStyle enumeration.
        */
        get connectionStyle(): number;
        set cellFrameStyle(arg: number);
        /**
        * Gets or sets the style of cells' frame lines.
        * @type {CellFrameStyle}
        * @summary A member of the CellFrameStyle enumeration.
        */
        get cellFrameStyle(): number;
        set allowResizeColumns(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to resize table columns.
        * @type {Boolean}
        * @summary true if users are allowed to resize table columns, or false otherwise.
        */
        get allowResizeColumns(): boolean;
        set allowResizeRows(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to resize table rows.
        * @type {Boolean}
        * @summary true if users are allowed to resize table rows, or false otherwise.
        */
        get allowResizeRows(): boolean;
        _captionHeight: any;
        _connectionStyle: any;
        _captionBackBrush: any;
        _captionFont: any;
        set scrollable(arg: boolean);
        /**
         * Gets or sets whether the user is allowed to scroll the table rows.
         * @type {Boolean}
         * @summary true to allow scrolling, or false otherwise.
         */
        get scrollable(): boolean;
        _cellFrameStyle: any;
        set enableStyledText(arg: boolean);
        /**
        * Gets or sets a value indicating whether styled text rendering is enabled.
        * @type {Boolean}
        * @summary true to parse the node's text in order to find formatting tags, or false otherwise.
        */
        get enableStyledText(): boolean;
        set shape(arg: number);
        /**
        * Gets or sets the shape of the node's outline.
        * @type {SimpleShape}
        * @summary A member of the SimpleShape enumeration.
        */
        get shape(): number;
        _shape: any;
        /**
        * Returns a reference to the cell located at the specified column and row of this table.
        * @param {Number} col An integer value specifying the index of a table's column.
        * @param {Number} row An integer value specifying the index of a table's row.
        * @returns {Cell} A Cell instance representing the specified cell.
        */
        getCell(col: number, row: number): Cell;
        createCell(): Cell;
        /**
        * Returns a reference to the row at the specified position within the table's list of rows.
        * @param {Number} row An integer value specifying the index of a table's row.
        * @returns {Object} A JavaScript object representing the specified row.
        */
        getRow(row: number): any;
        setRowHeight(row: any, value: any): void;
        createRow(): {
            height: number;
            incomingLinks: any[];
            outgoingLinks: any[];
        };
        copyRow(row: any): {
            height: any;
            incomingLinks: any[];
            outgoingLinks: any[];
        };
        /**
        * Returns a reference to the column at the specified position within the table's list of columns.
        * @param {Number} col An integer value specifying the index of a table's column.
        * @returns {Object} A JavaScript object representing the specified column.
        */
        getColumn(col: number): any;
        setColumnWidth(col: any, value: any): void;
        setColumnStyle(col: any, value: any): void;
        createColumn(): {
            width: number;
            columnStyle: number;
        };
        copyColumn(column: any): {
            width: any;
            columnStyle: any;
        };
        updateScrollerContent: boolean;
        getEffectiveBorderColor(vertical: any, defaultValue: any): any;
        set cellStyle(arg: Style);
        /**
        * Gets or sets the style used to draw table's cells.
        * @type {Style}
        * @summary An instance of the Style class.
        */
        get cellStyle(): Style;
        _cellStyle: any;
        resolveCellStyle(check: any): any;
        /**
        * Changes the number of columns and rows in this table.
        * @param {Number} columns An integer value specifying the new number of columns.
        * @param {Number} rows An integer value specifying the new number of rows.
        */
        redimTable(columns: number, rows: number): void;
        set rowCount(arg: number);
        /**
        * Gets or sets the number of rows in the table.
        * @type {Number}
        * @summary The number of rows in the table.
        * @remarks If you increase the number of rows the content of the initial
        * rows will remain intact. If you decrease the number, the last
        * rows are removed and the other remain unchanged.
        */
        get rowCount(): number;
        set columnCount(arg: number);
        /**
        * Gets or sets the number of columns in the table.
        * @type {Number}
        * @summary The number of columns in the table.
        * @remarks If you increase the number of columns the content of the initial
        * columns will remain intact. If you decrease the number, the last
        * columns are removed and the other remain unchanged.
        */
        get columnCount(): number;
        /**
        * Deletes the specified column.
        * @param {Number} col An integer value specifying which column to delete.
        */
        deleteColumn(col: number): void;
        /**
        * Inserts a new column at the specified position.
        * @param {Number} col An integer value specifying the position within
        * the table's list of columns where the new column should be inserted.
        */
        insertColumn(col: number): {
            width: number;
            columnStyle: number;
        };
        /**
        * Deletes the specified row.
        * @param {Number} row An integer value specifying which row to delete.
        */
        deleteRow(row: number): void;
        /**
        * Inserts a new row at the specified position.
        * @param {Number} row An integer value specifying the position within
        * the table's list of rows where the new row should be inserted.
        */
        insertRow(row: number): {
            height: number;
            incomingLinks: any[];
            outgoingLinks: any[];
        };
        /**
        * Adds a new column to the table.
        * @returns {Object} The newly created column object.
        */
        addColumn(): any;
        /**
        * Adds a new row to the table.
        * @returns {Object} The newly created row object.
        */
        addRow(): any;
        deleteRowLinks(from: any, to: any): void;
        scroller: Scroller | ScrollBar;
        canScrollUp(): boolean;
        canScrollDown(): boolean;
        addRowIncomingLink(row: any, link: any): void;
        addRowOutgoingLink(row: any, link: any): void;
        removeRowIncomingLink(row: any, link: any): void;
        removeRowOutgoingLink(row: any, link: any): void;
        copyLinks(src: any, dest: any): void;
        /**
        * Returns the bounding rectangle of the specified row.
        * @param {Number} row An integer value specifying the index of a table's row.
        * @returns {Rect} A Rect object representing the row's bounding rectangle.
        */
        getRowRect(row: number): Rect;
        /**
        * Returns the index of the table's row that contains the specified point.
        * @param {Point} point A Point instance.
        * @returns {Number} An integer value specifying the row's index.
        */
        rowFromPoint(point: Point): number;
        getRowIntersection(nRow: any, org: any, end: any): Point;
        updateLinksPos(firstRow: any): void;
        updateLinksIndices(start: any): void;
        set currentScrollRow(arg: number);
        /**
        * Gets or sets the table's current scroll position.
        * @type {Number}
        * @summary The index of the first row that should be visible in the table.
        */
        get currentScrollRow(): number;
        /**
        * For internal use and backwards compatibility.
        * @private
        */
        private setCurrScrollRow;
        /**
        * Scrolls the table's rows down.
        */
        scrollDown(): void;
        /**
        * Scrolls the table's rows up.
        */
        scrollUp(): void;
        calcAutoWidths(): void;
        markCoveredCells(): void;
        getSpanningCellSize(col: any, row: any): {
            width: number;
            height: number;
        };
        /**
        * Returns the cell that contains the specified point.
        * @param {Point} point A Point instance.
        * @returns {Object} A JavaScript object representing the specified cell.
        */
        cellFromPoint(point: Point): any;
        cellFromElement(element: any): {
            cell: Cell;
            cellRect: Rect;
            column: number;
            row: number;
        };
        set captionBackBrush(arg: any);
        /**
        * Gets or sets an object specifying how to fill the caption bar.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get captionBackBrush(): any;
        set captionFont(arg: Font);
        /**
        * Gets or sets the font used to render the node's caption text.
        * @type {Font}
        * @summary An object specifying the font of the caption bar.
        */
        get captionFont(): Font;
        getColumnRect(col: any): Rect;
        _allowResizeColumns: any;
        _allowResizeRows: any;
        /**
        * Resizes the columns and rows so that the cells are large enough to fit their text.
        * @param {Boolean} ignoreCaption true to ignore caption text and consider only cells for table size, or false otherwise.
        * @param {Boolean} keepCellWidth true to preserve column widths and resize only row heights, or false otherwise.
        */
        resizeToFitText(ignoreCaption: boolean, keepCellWidth: boolean): void;
        /**
        * Set this flag to show full scrollbars for scrollable tables instead of up/down buttons in captions.
        */
        useScrollBars: boolean;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Grid } from "@mindfusion/collections";
    import { Cell } from "Diagramming/Cell";
    import { Style } from "Diagramming/Style";
    import { Scroller } from "Diagramming/Scroller";
    import { ScrollBar } from "Diagramming/ScrollBar";
    import { Rect } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
}
declare module "Diagramming/Components/Panel" {
    /**
    * @class Represents layout containers in CompositeNode visual tree.
    * @augments Container
    */
    export class Panel extends Container {
        /**
        * Initializes a new instance of the Panel class.
        * @constructor
        */
        constructor();
        children: any[];
        /**
        * Gets the child components of this panel.
        * @returns {Array} An array containing the child components of this panel.
        */
        getComponents(): any[];
        measure(maxWidth: any, maxHeight: any): void;
        measureMax: any;
        measureChild(child: any, maxWidth: any, maxHeight: any): Size;
        arrangeChild(child: any, x: any, y: any, w: any, h: any): void;
        childMeasuredWidth(child: any): any;
        childMeasuredHeight(child: any): any;
        desiredWidthMargins(child: any): any;
        desiredHeightMargins(child: any): any;
        canWrap(child: any): boolean;
        arrangeInRect(child: any, x: any, y: any, w: any, h: any): void;
    }
    import { Container } from "@mindfusion/drawing";
    import { Size } from "@mindfusion/drawing";
}
declare module "Diagramming/Components/SimplePanel" {
    /**
    * @class A layout container that arranges its child components on top of each other.
    * @augments Panel
    */
    export class SimplePanel extends Panel {
        desiredWidth: number;
        desiredHeight: number;
    }
    import { Panel } from "Diagramming/Components/Panel";
}
declare module "Diagramming/Components/GridRow" {
    /**
    * @class Represents a row in a GridPanel.
    */
    export class GridRow {
        y: number;
        set height(arg: number);
        /**
        * Gets or sets fixed height for this row.
        * @type {Number}
        * @summary A number specifying the rows's height.
        */
        get height(): number;
        measuredHeight: any;
        set lengthType(arg: number);
        /**
        * Gets or sets how GridPanel determines the height of this row.
        * @type {LengthType}
        * @summary A member of the LengthType enumeration.
        */
        get lengthType(): number;
        _lengthType: number;
        _height: number;
        fixedSize(): number;
        measuredSize(): any;
        setPos(pos: any, size: any): void;
        layoutHeight: any;
        relativeSize(): boolean;
    }
}
declare module "Diagramming/Components/GridColumn" {
    /**
    * @class Represents a column in a GridPanel.
    */
    export class GridColumn {
        x: number;
        set width(arg: number);
        /**
        * Gets or sets fixed width for this column.
        * @type {Number}
        * @summary A number specifying the column's width.
        */
        get width(): number;
        measuredWidth: any;
        set lengthType(arg: number);
        /**
        * Gets or sets how GridPanel determines the width of this column.
        * @type {LengthType}
        * @summary A member of the LengthType enumeration.
        */
        get lengthType(): number;
        _lengthType: number;
        _width: number;
        fixedSize(): number;
        measuredSize(): any;
        setPos(pos: any, size: any): void;
        layoutWidth: any;
        relativeSize(): boolean;
    }
}
declare module "Diagramming/Components/GridPanel" {
    /**
    * @class A layout container that arranges its child components in a grid.
    * @augments Panel
    */
    export class GridPanel extends Panel {
        _rows: GridRow[];
        _columns: GridColumn[];
        /**
        * Gets a list of GridRow objects specifying row attributes.
        * @type {Array}
        * @summary An array containing the grid rows.
        */
        get rows(): any[];
        /**
        * Gets a list of GridColumn objects specifying column attributes.
        * @type {Array}
        * @summary An array containing the grid columns.
        */
        get columns(): any[];
        desiredHeight: any;
        desiredWidth: any;
        assignCoords(elements: any, availableSize: any): number;
    }
    import { Panel } from "Diagramming/Components/Panel";
    import { GridRow } from "Diagramming/Components/GridRow";
    import { GridColumn } from "Diagramming/Components/GridColumn";
}
declare module "Diagramming/Components/StackPanel" {
    /**
    * @class A layout container that arranges its child components stacked horizontally or vertically.
    * @augments Panel
    */
    export class StackPanel extends Panel {
        set orientation(arg: number);
        /**
        * Gets or sets the stack orientation.
        * @type {Orientation}
        * @summary A member of the Orientation enumeration.
        */
        get orientation(): number;
        _orientation: any;
        primaryMeasure(component: any): any;
        secondaryMeasure(component: any): any;
        primarySize(component: any): any;
        secondarySize(component: any): any;
        arrangeChildOrient(child: any, posPrim: any, sizePrim: any, posSec: any, sizeSec: any): void;
        setMeasures(primary: any, secondary: any): void;
        desiredWidth: any;
        desiredHeight: any;
    }
    import { Panel } from "Diagramming/Components/Panel";
}
declare module "Diagramming/Components/Border" {
    /**
    * @class Represents a panel that draws a border around its child components.
    * @augments SimplePanel
    */
    export class Border extends SimplePanel {
        /**
        * The border color.
        */
        pen: string;
        /**
        * The border thickness.
        */
        strokeThickness: number;
        /**
        * The panel background color.
        */
        brush: string;
        getBounds(): Rect;
    }
    import { SimplePanel } from "Diagramming/Components/SimplePanel";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/Components/Button" {
    /**
    * @class Represents a button-like component, which can respond to user clicks.
    * @augments Component
    */
    export class Button extends Component {
        textContent: Text;
        imageContent: Image;
        /**
        * The border color.
        */
        pen: string;
        /**
        * The border thickness.
        */
        strokeThickness: number;
        /**
        * The button background color.
        */
        brush: string;
        /**
        * The font.
        */
        font: any;
        /**
        * The text color.
        */
        textColor: string;
        shadowColor: any;
        imageAlign: number;
        cornerRadius: number;
        interactive: boolean;
        /**
        * The desired width of the button.
        */
        width: any;
        /**
        * The desired height of the button.
        */
        height: any;
        measure(maxWidth: any, maxHeight: any): void;
        desiredWidth: any;
        desiredHeight: any;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        createShadow(): Shadow;
        setBounds(bounds: any, angle: any): void;
        bounds: any;
        shape: Path;
        getBounds(): any;
        set text(arg: string);
        /**
        * Gets or sets the text caption displayed in this button.
        * @type {String}
        * @summary A string containing button's caption.
        */
        get text(): string;
        onClick(mousePosition: any, mouseButton: any, clickedItem: any): void;
    }
    import { Component } from "@mindfusion/drawing";
    import { Text } from "@mindfusion/drawing";
    import { Image } from "@mindfusion/drawing";
    import { Shadow } from "@mindfusion/drawing";
    import { Path } from "@mindfusion/drawing";
}
declare module "Diagramming/Components/ComponentLoader" {
    export default ComponentLoader;
    class ComponentLoader {
        constructor(imageLoadHandler: any);
        nameMap: {};
        propertyMap: {};
        imageLoadHandler: any;
        availableComponents: Map<any, any>;
        get processedProps(): string[];
        componentFromJson(jsonTemplate: any, node: any): any;
        setDefaults(component: any): void;
        createComponent(name: any): any;
        ctorFromName(name: any): never;
    }
}
declare module "Diagramming/CompositeNode" {
    export default CompositeNode;
    /**
    * @class CompositeNode implements nodes whose appearance can be defined via composition of components and layout containers.
    * @augments DiagramNode
    */
    class CompositeNode extends DiagramNode {
        /**
        * Generates a node class whose appearance and properties are defined using JSON template.
        * @param {String} className Fully qualified name of the class to generate.
        * @param {Object} jsonTemplate A JavaScript object literal containing template of node's component hierarchy.
        * @param {Function} [init] Optional.
        * @returns {typeof CompositeNode} A constructor function that creates instances of the new class.
        */
        static classFromTemplate(className: string, jsonTemplate: any, init?: Function): typeof CompositeNode;
        root: SimplePanel;
        set clipToOutline(arg: boolean);
        /**
         * Gets or sets whether contents should clip to node's outline, when outline component is set.
         * @type {Boolean}
         * @summary true to clip contents, or false otherwise.
         */
        get clipToOutline(): boolean;
        outlineRenderer: any;
        firstCharLower(string: any): any;
        /**
        * Load a JSON template defining node's appearance.
        * @param {Object} jsonTemplate A JavaScript object literal containing template of node's component hierarchy.
        */
        loadTemplate(jsonTemplate: any): void;
        namedComponents: {};
        propertyMap: {};
        /**
        * Returns the component created for the template element with specified name.
        * @param {String} name A string specifying the value of the name attribute in node's template.
        * @returns {Component} The component created for specified element in the template.
        */
        getComponent(name: string): Component;
        hitTestComponents(mousePosition: any): any;
        diagramCoords(component: any): any;
        _clipToOutline: any;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { SimplePanel } from "Diagramming/Components/SimplePanel";
    import { Component } from "@mindfusion/drawing";
}
declare module "Diagramming/FreeFormNode" {
    export class FreeFormHandle {
        constructor(node: any, pointIndex: any);
        item: any;
        index: any;
    }
    export default FreeFormNode;
    /**
    * @class A FreeFormNode collects all points from users' mouse or touch input and displays
    * them as node's outline. To let users draw free-form nodes interactively, set
    * Behavior to DrawFreeForms or LinkFreeForms. Use the Points property of FreeFormNode
    * to get or set outline points programmatically. If the Closed property is set,
    * the node is drawn as a closed shape and its interior filled, or otherwise the node
    * is drawn as a polyline. If the distance between first and last points drawn by
    * user is shorter than AutoCloseDistance, the node's Closed property is automatically
    * set to true. AutoCloseDistance default value is null, so free-form nodes
    * are always closed.
    * @augments DiagramNode
    */
    class FreeFormNode extends DiagramNode {
        /**
        * Initializes a new instance of the FreeFormNode class.
        * @constructor
        * @param {Diagram} [parent] A Diagram instance whose default node attributes are copied to this node.
        */
        constructor(parent?: any);
        set points(arg: any[]);
        /**
        * Gets or sets the node's outline points.
        * @type {Array}
        * @summary An array of Point objects.
        */
        get points(): any[];
        path: Path;
        shapeRenderer: {
            node: FreeFormNode;
            getOutline(): Path;
        };
        set closed(arg: boolean);
        /**
        * Gets or sets whether the node's shape is closed.
        * @type {Boolean}
        * @summary true it this node has a closed shape, or false otherwise.
        */
        get closed(): boolean;
        _closed: any;
        _points: any;
        attractedPoints: any[];
        unrotated(point: any): any;
        outlineBounds(points: any): any;
        /**
        * Updates the node's internal state after its points have changed.
        */
        updateFromPoints(relations: any, path: any): void;
        updateFlag: boolean;
        updatePathFromPoints(): void;
        nearestPointIndex(point: any, maxDist: any): number;
        standardShapeReplacement(shapes: any, defaultShape: any): ShapeNode;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Path } from "@mindfusion/drawing";
    import { ShapeNode } from "Diagramming/LoadOrder";
}
declare module "Diagramming/SvgNode" {
    /**
    * Initializes a new instance of the SvgContent class.
    * @class SvgContent represents the markup code of an SVG drawing.
    */
    export class SvgContent {
        fileName: string;
        svgString: string;
        /**
        * Loads SVG code from the specified file.
        * @param {String} value A string specifying the SVG file location.
        */
        parse(value: string): void;
        /**
        * Loads SVG code from the specified string.
        * @param {String} value A string containing the SVG markup code.
        */
        parseSvg(value: string): void;
    }
    export default SvgNode;
    /**
    * @class SvgNode instances are diagram nodes that can render SVG drawings.
    * @augments ShapeNode
    */
    class SvgNode extends ShapeNode {
        set content(arg: SvgContent);
        /**
        * Gets or sets an SvgContent instance representing the SVG drawing rendered in this node.
        * @type {SvgContent}
        * @summary An instance of the SvgContent class.
        */
        get content(): SvgContent;
        _content: any;
    }
    import { ShapeNode } from "Diagramming/LoadOrder";
}
declare module "Diagramming/ButtonControl" {
    export default ButtonControl;
    /**
    * For internal use only.
    * @private
    */
    class ButtonControl extends Manipulator {
        constructor(node: any, clickHandler: any, drawHandler: any);
        clickHandler: any;
        rect: Rect;
        drawHandler: any;
        getRect(): Rect;
        setRect(x: any, y: any, width: any, height: any): void;
        getRotatedRect(): Rect;
        getOutline(): import("Drawing/Point").Point[];
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/Slider" {
    export default Slider;
    /**
    * For internal use only.
    * @private
    */
    class Slider extends Manipulator {
        constructor(node: any, positionUpdated: any);
        rect: Rect;
        positionUpdated: any;
        minValue: number;
        maxValue: number;
        value: number;
        logicalToCoord(value: any): number;
        coordToLogical(coord: any): number;
        mouseDown: boolean;
        setRect(rect: any): void;
        updateValue(mousePosition: any): void;
        getRect(): Rect;
        getRotatedRect(): Rect;
    }
    import { Manipulator } from "Diagramming/Manipulator";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/VideoNode" {
    export default VideoNode;
    /**
    * @class A VideoNode instance renders video stream assigned to the VideoLocation property.
    * @augments DiagramNode
    */
    class VideoNode extends DiagramNode {
        set videoLocation(arg: string);
        /**
        * Gets or sets the URL of the video stream displayed in this VideoNode.
        * @type {String}
        * @summary A string containing video stream URL.
        */
        get videoLocation(): string;
        /** @private */
        set video(arg: Video);
        get video(): Video;
        button: ButtonControl;
        slider: Slider;
        volumeSlider: Slider;
        volumeSliderUpdated(value: any): void;
        positionSliderUpdated(value: any): void;
        onPlayClick(): void;
        drawPlayButton(context: any, rect: any): void;
        _video: Video;
        /**
        * For internal use only.
        * @private
        */
        private validateParams;
        diagramCoords(component: any): any;
        _videoLocation: any;
        videoDataLoaded(): void;
        updateTimeSlider(): void;
        videoEnded(): void;
        /**
        * For internal use only.
        * @private
        */
        private loadVideo;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Video } from "@mindfusion/drawing";
    import ButtonControl from "Diagramming/ButtonControl";
    import Slider from "Diagramming/Slider";
}
declare module "Diagramming/ControlNode" {
    export default ControlNode;
    /**
    * @class ControlNode instances are diagram nodes that can render HTML content.
    * @augments DiagramNode
    */
    class ControlNode extends DiagramNode {
        /**
        * Initializes a new instance of the ControlNode class with default values supplied from the specified DiagramView.
        * @constructor
        * @param {DiagramView} [diagramView] The DiagramView from which to obtain default values for the node properties.
        */
        constructor(diagramView?: any);
        /** @private */
        private set diagramView(arg);
        /** @private */
        private get diagramView();
        _diagramView: any;
        set template(arg: string);
        /**
        * Gets or sets HTML string representing the DOM content rendered by this node.
        * @type {String}
        * @summary A string containing HTML markup.
        */
        get template(): string;
        /**
        * For internal use only.
        * @private
        */
        private loadImage;
        /**
        * Creates the background svg image.
        */
        createImage(): void;
        image: Image;
        content: any[];
        /**
        * Attaches event handlers to content element and its interactive children.
        * For internal use only.
        * @private
        */
        private attachHandlers;
        /**
        * Sets the display of the content node.
        * @private
        */
        private setContentDisplay;
        _template: any;
        /**
        * Gets the content element of this node.
        * @returns {HTMLDivElement} The content element.
        */
        getContent(): HTMLDivElement;
    }
    namespace ControlNode {
        const createBackgroundImage: boolean;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Image } from "@mindfusion/drawing";
}
declare module "Diagramming/TreeViewConnectionPoint" {
    /**
    * @class A class that represents a connection between an edge and a node in a graph.
    * @augments ConnectionPoint
    */
    export class TreeViewConnectionPoint extends ConnectionPoint {
        /**
        * @constructor
        * @param {DiagramNode} [node] The node whose connection to a link is managed by this TreeViewConnectionPoint.
        * @param {DiagramLink} [link] The link whose connection to a node is managed by this TreeViewConnectionPoint.
        * @param {Boolean} [incoming] Specifies which end of the link is represented by this TreeViewConnectionPoint.
        * @param {TreeViewItem} [item]
        */
        constructor(node?: any, link?: any, incoming?: boolean, item?: any);
        item: any;
        itemObject(): any;
        setItem(value: any, updateObjects: any): void;
        getRow(): any;
        setRow(value: any, updateObjects: any): void;
        get row(): any;
    }
    import { ConnectionPoint } from "Diagramming/ConnectionPoint";
}
declare module "Diagramming/ItemEditor" {
    export default ItemEditor;
    class ItemEditor {
        constructor(node: any, item: any);
        node: any;
        item: any;
        rect: any;
        getTextToEdit(): any;
        getEditRect(point: any): any;
        createEditArgs(oldText: any, newText: any): TreeItemEventArgs;
        setEditedText(newText: any): void;
        getDiagramItem(): any;
    }
    import { TreeItemEventArgs } from "Diagramming/EventArgs";
}
declare module "Diagramming/TreeViewNode" {
    export default TreeViewNode;
    /**
    * @class TreeViewNode instances are diagram nodes that can draw hierarchical data.
    * @augments DiagramNode
    */
    class TreeViewNode extends DiagramNode {
        set captionHeight(arg: number);
        /**
        * Gets or sets the height of the node's caption area.
        * @type {Number}
        * @summary A number specifying the height of the caption bar. The default value is 6.
        */
        get captionHeight(): number;
        _rootItems: any[];
        set connectionStyle(arg: number);
        /**
        * Gets or sets whether drawing a link from/to this node should connect
        * an individual TreeViewItem, or the whole node as an integral entity.
        * @type {ConnectionStyle}
        * @summary A member of the ConnectionStyle enumeration.
        */
        get connectionStyle(): number;
        _offsetChildItem: number;
        _showLines: boolean;
        set scrollable(arg: boolean);
        /**
         * Gets or sets whether the node's items can be scrolled vertically.
         * @type {Boolean}
         * @summary true to allow scrolling, or false otherwise.
         */
        get scrollable(): boolean;
        _currentScrollRow: number;
        writeTreeViewItemsToJson(items: any, itemsList: any): void;
        _captionHeight: any;
        _connectionStyle: any;
        _captionBackBrush: any;
        _captionFont: any;
        set enableStyledText(arg: boolean);
        /**
        * Gets or sets a value indicating whether styled text rendering is enabled.
        * @type {Boolean}
        * @summary true to parse the node's text in order to find formatting tags, or false otherwise.
        */
        get enableStyledText(): boolean;
        _shape: any;
        set scrollPosition(arg: number);
        /**
        * Gets or sets the node's current scroll position.
        * @type {Number}
        * @summary A number specifying the scroll position.
        */
        get scrollPosition(): number;
        readTreeViewItemsFromJson(itemsList: any): void;
        readTreeViewItemsFromXml(itemsList: any, context: any): void;
        writeTreeViewItemsToXml(items: any, parentElement: any, context: any): void;
        /**
         * Loads the tree view items from a data object.
         * @param {Object} data The object containing the tree view data.
         */
        fromObject(data: any): void;
        /**
        * Creates tree nodes from data object.
        * @private
        */
        private fromObj;
        /**
        * Gets a list of root items displayed in this node.
        * @type {Array}
        * @summary An array of root TreeViewItem objects.
        */
        get rootItems(): any[];
        /**
        * Gets a list of all items in this node.
        * @type {Array}
        * @summary An array containing all TreeViewItem objects in the node.
        */
        get flatItems(): any[];
        get rows(): any[];
        updateScrollerContent: boolean;
        /**
        * Adds a new child item to the specified parent item or to the root items list, if a parent is not specified.
        * @param {TreeViewItem} item The item to add.
        * @param {TreeViewItem} [parentItem] The parent item.
        */
        addItem(item: TreeViewItem, parentItem?: TreeViewItem): void;
        /**
        * Removes the specified item from the node.
        * @param {TreeViewItem} item The item to remove.
        */
        removeItem(item: TreeViewItem): void;
        deleteItem(items: any, item: any): boolean;
        set shape(arg: number);
        /**
        * Gets or sets the shape of the node's outline.
        * @type {SimpleShape}
        * @summary A member of the SimpleShape enumeration.
        */
        get shape(): number;
        set currentScrollRow(arg: number);
        get currentScrollRow(): number;
        scroller: ScrollBar;
        set showLines(arg: boolean);
        /**
        * Gets or sets whether to display lines connecting child items to parent items.
        * @type {Boolean}
        * @summary true to display connecting lines, or false otherwise.
        */
        get showLines(): boolean;
        /**
        * Returns the bounding rectangle of the specified item.
        * @param {TreeViewItem} item The item.
        * @returns {Rect} A Rect object representing the item's bounding rectangle.
        */
        getItemRect(item: TreeViewItem): Rect;
        /**
        * Returns the item that contains the specified point.
        * @param {Point} point A Point instance.
        * @returns {TreeViewItem} The item containing the point, or null.
        */
        itemFromPoint(point: Point): TreeViewItem;
        addItemIncomingLink(item: any, link: any): void;
        addItemOutgoingLink(item: any, link: any): void;
        removeItemIncomingLink(item: any, link: any): void;
        removeItemOutgoingLink(item: any, link: any): void;
        getItemIntersection(item: any, org: any, end: any): Point;
        updateLinksPos(): void;
        /**
        * Scrolls the node down.
        */
        scrollDown(): void;
        /**
        * Scrolls the table's rows up.
        */
        scrollUp(): void;
        set captionBackBrush(arg: any);
        /**
        * Gets or sets an object specifying how to fill the caption bar.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get captionBackBrush(): any;
        set captionFont(arg: Font);
        /**
        * Gets or sets the font used to render the node's caption text.
        * @type {Font}
        * @summary An object specifying the font of the caption bar.
        */
        get captionFont(): Font;
        hitTestExpander(mousePosition: any): boolean;
        /**
        * Resizes the tree view so that it is large enough to fit the text of its items.
        */
        resizeToFitText(): void;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { TreeViewItem } from "Diagramming/TreeViewItem";
    import { ScrollBar } from "Diagramming/ScrollBar";
    import { Rect } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
}
declare module "Diagramming/DummyNode" {
    export default DummyNode;
    /**
    * @class DummyNode represents virtual nodes set as targets of disconnected links.
    * @augments DiagramNode
    */
    class DummyNode extends DiagramNode {
        /**
        * Initializes a new instance of the DummyNode class.
        * @constructor
        * @param {Diagram} [parent] A Diagram instance whose default node attributes are copied to this node.
        */
        constructor(parent?: any);
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
}
declare module "Diagramming/Shapes" {
    /**
    * @class Provides alternative methods of access to the predefined shapes.
    */
    export class Shapes {
        /**
        * Gets the Actor predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Actor(): Shape;
        /**
        * Gets the Alternative predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Alternative(): Shape;
        /**
        * Gets the Arrow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow(): Shape;
        /**
        * Gets the Arrow1 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow1(): Shape;
        /**
        * Gets the Arrow2 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow2(): Shape;
        /**
        * Gets the Arrow3 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow3(): Shape;
        /**
        * Gets the Arrow4 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow4(): Shape;
        /**
        * Gets the Arrow5 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow5(): Shape;
        /**
        * Gets the Arrow6 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow6(): Shape;
        /**
        * Gets the Arrow7 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow7(): Shape;
        /**
        * Gets the Arrow8 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow8(): Shape;
        /**
        * Gets the Arrow9 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Arrow9(): Shape;
        /**
        * Gets the BackSlash predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BackSlash(): Shape;
        /**
        * Gets the BeginLoop predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BeginLoop(): Shape;
        /**
        * Gets the BowArrow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BowArrow(): Shape;
        /**
        * Gets the BpmnComplex predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnComplex(): Shape;
        /**
        * Gets the BpmnDataBasedXor predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnDataBasedXor(): Shape;
        /**
        * Gets the BpmnEndCancel predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndCancel(): Shape;
        /**
        * Gets the BpmnEndCompensation predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndCompensation(): Shape;
        /**
        * Gets the BpmnEndError predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndError(): Shape;
        /**
        * Gets the BpmnEndLink predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndLink(): Shape;
        /**
        * Gets the BpmnEndMessage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndMessage(): Shape;
        /**
        * Gets the BpmnEndMultiple predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndMultiple(): Shape;
        /**
        * Gets the BpmnEndTerminate predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEndTerminate(): Shape;
        /**
        * Gets the BpmnEventBasedXor predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnEventBasedXor(): Shape;
        /**
        * Gets the BpmnInclusive predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnInclusive(): Shape;
        /**
        * Gets the BpmnIntermediateCancel predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateCancel(): Shape;
        /**
        * Gets the BpmnIntermediateCompensation predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateCompensation(): Shape;
        /**
        * Gets the BpmnIntermediateError predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateError(): Shape;
        /**
        * Gets the BpmnIntermediateLink predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateLink(): Shape;
        /**
        * Gets the BpmnIntermediateMessage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateMessage(): Shape;
        /**
        * Gets the BpmnIntermediateMultiple predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateMultiple(): Shape;
        /**
        * Gets the BpmnIntermediateRule predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateRule(): Shape;
        /**
        * Gets the BpmnIntermediateTimer predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnIntermediateTimer(): Shape;
        /**
        * Gets the BpmnParallelFork predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnParallelFork(): Shape;
        /**
        * Gets the BpmnStartLink predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnStartLink(): Shape;
        /**
        * Gets the BpmnStartMessage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnStartMessage(): Shape;
        /**
        * Gets the BpmnStartMultiple predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnStartMultiple(): Shape;
        /**
        * Gets the BpmnStartRule predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnStartRule(): Shape;
        /**
        * Gets the BpmnStartTimer predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static BpmnStartTimer(): Shape;
        /**
        * Gets the Circle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Circle(): Shape;
        /**
        * Gets the Cloud predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Cloud(): Shape;
        /**
        * Gets the Collate predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Collate(): Shape;
        /**
        * Gets the ConeDown predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ConeDown(): Shape;
        /**
        * Gets the ConeUp predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ConeUp(): Shape;
        /**
        * Gets the ConnectedIssues predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ConnectedIssues(): Shape;
        /**
        * Gets the CreateRequest predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static CreateRequest(): Shape;
        /**
        * Gets the Cross predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Cross(): Shape;
        /**
        * Gets the Cube predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Cube(): Shape;
        /**
        * Gets the Cylinder predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Cylinder(): Shape;
        /**
        * Gets the Database predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Database(): Shape;
        /**
        * Gets the DataTransmition predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DataTransmition(): Shape;
        /**
        * Gets the DDelay predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DDelay(): Shape;
        /**
        * Gets the Decision predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Decision(): Shape;
        /**
        * Gets the Decision2 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Decision2(): Shape;
        /**
        * Gets the DefaultFlow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DefaultFlow(): Shape;
        /**
        * Gets the Delay predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Delay(): Shape;
        /**
        * Gets the DInDelay predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DInDelay(): Shape;
        /**
        * Gets the DirectAccessStorage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DirectAccessStorage(): Shape;
        /**
        * Gets the DiskStorage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DiskStorage(): Shape;
        /**
        * Gets the Display predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Display(): Shape;
        /**
        * Gets the DividedEvent predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DividedEvent(): Shape;
        /**
        * Gets the DividedProcess predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DividedProcess(): Shape;
        /**
        * Gets the Document predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Document(): Shape;
        /**
        * Gets the DoubleArrow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DoubleArrow(): Shape;
        /**
        * Gets the DOutDelay predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static DOutDelay(): Shape;
        /**
        * Gets the Ellipse predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Ellipse(): Shape;
        /**
        * Gets the EndLoop predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static EndLoop(): Shape;
        /**
        * Gets the ExternalOrganization predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ExternalOrganization(): Shape;
        /**
        * Gets the ExternalProcess predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ExternalProcess(): Shape;
        /**
        * Gets the File predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static File(): Shape;
        /**
        * Gets the FramedRectangle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static FramedRectangle(): Shape;
        /**
        * Gets the Gate predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Gate(): Shape;
        /**
        * Gets the Heart predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Heart(): Shape;
        /**
        * Gets the Heptagon predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Heptagon(): Shape;
        /**
        * Gets the Hourglass predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Hourglass(): Shape;
        /**
        * Gets the Input predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Input(): Shape;
        /**
        * Gets the InternalStorage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static InternalStorage(): Shape;
        /**
        * Gets the Interrupt predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Interrupt(): Shape;
        /**
        * Gets the Interrupt2 predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Interrupt2(): Shape;
        /**
        * Gets the IsoProcess predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static IsoProcess(): Shape;
        /**
        * Gets the Junction predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Junction(): Shape;
        /**
        * Gets the Lightning predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Lightning(): Shape;
        /**
        * Gets the LinedDocument predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static LinedDocument(): Shape;
        /**
        * Gets the ManualOperation predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static ManualOperation(): Shape;
        /**
        * Gets the Merge predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Merge(): Shape;
        /**
        * Gets the MessageFromUser predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MessageFromUser(): Shape;
        /**
        * Gets the MessageToUser predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MessageToUser(): Shape;
        /**
        * Gets the Microform predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Microform(): Shape;
        /**
        * Gets the MicroformProcessing predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MicroformProcessing(): Shape;
        /**
        * Gets the MicroformRecording predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MicroformRecording(): Shape;
        /**
        * Gets the MultiDocument predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MultiDocument(): Shape;
        /**
        * Gets the MultiProc predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static MultiProc(): Shape;
        /**
        * Gets the Octagon predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Octagon(): Shape;
        /**
        * Gets the OfflineStorage predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static OfflineStorage(): Shape;
        /**
        * Gets the OffpageConnection predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static OffpageConnection(): Shape;
        /**
        * Gets the OffpageReference predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static OffpageReference(): Shape;
        /**
        * Gets the Or predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Or(): Shape;
        /**
        * Gets the Pentagon predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Pentagon(): Shape;
        /**
        * Gets the PentagonArrow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PentagonArrow(): Shape;
        /**
        * Gets the PointerArrow predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PointerArrow(): Shape;
        /**
        * Gets the PrimitiveFromCall predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PrimitiveFromCall(): Shape;
        /**
        * Gets the PrimitiveToCall predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PrimitiveToCall(): Shape;
        /**
        * Gets the Procedure predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Procedure(): Shape;
        /**
        * Gets the Process predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Process(): Shape;
        /**
        * Gets the Prysm predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Prysm(): Shape;
        /**
        * Gets the PunchedCard predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PunchedCard(): Shape;
        /**
        * Gets the PyramidDown predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PyramidDown(): Shape;
        /**
        * Gets the PyramidUp predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static PyramidUp(): Shape;
        /**
        * Gets the Quill predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Quill(): Shape;
        /**
        * Gets the Rectangle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Rectangle(): Shape;
        /**
        * Gets the Reversed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Reversed(): Shape;
        /**
        * Gets the RevTriangle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RevTriangle(): Shape;
        /**
        * Gets the RevWithCirc predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RevWithCirc(): Shape;
        /**
        * Gets the RevWithLine predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RevWithLine(): Shape;
        /**
        * Gets the Rhombus predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Rhombus(): Shape;
        /**
        * Gets the RoundRect predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RoundRect(): Shape;
        /**
        * Gets the RSave predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RSave(): Shape;
        /**
        * Gets the Save predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Save(): Shape;
        /**
        * Gets the Slash predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Slash(): Shape;
        /**
        * Gets the Sort predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Sort(): Shape;
        /**
        * Gets the Sphere predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Sphere(): Shape;
        /**
        * Gets the Star predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star(): Shape;
        /**
        * Gets the Start predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Start(): Shape;
        /**
        * Gets the Tape predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Tape(): Shape;
        /**
        * Gets the Terminator predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Terminator(): Shape;
        /**
        * Gets the Tetragon predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Tetragon(): Shape;
        /**
        * Gets the TransmittalTape predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static TransmittalTape(): Shape;
        /**
        * Gets the Triangle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Triangle(): Shape;
        /**
        * Gets the RightTriangle predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static RightTriangle(): Shape;
        /**
        * Gets the Decagon predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Decagon(): Shape;
        /**
        * Gets the Trapezoid predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Trapezoid(): Shape;
        /**
        * Gets the Star4Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star4Pointed(): Shape;
        /**
        * Gets the Star5Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star5Pointed(): Shape;
        /**
        * Gets the Star6Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star6Pointed(): Shape;
        /**
        * Gets the Star7Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star7Pointed(): Shape;
        /**
        * Gets the Star16Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star16Pointed(): Shape;
        /**
        * Gets the Star24Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star24Pointed(): Shape;
        /**
        * Gets the Star32Pointed predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Star32Pointed(): Shape;
        /**
        * Gets the Donut predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Donut(): Shape;
        /**
        * Gets the Plaque predefined shape.
        * @returns {Shape} An instance of the Shape class representing the predefined shape.
        */
        static Plaque(): Shape;
    }
    import { Shape } from "Diagramming/Shape";
}
declare module "Diagramming/LinkTextRenderer" {
    export default LinkTextRenderer;
    class LinkTextRenderer {
        constructor(link: any);
        link: any;
        transform: Matrix;
        textAlignment: number;
        lineAlignment: number;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        processText(context: any, stringCallback: any): void;
        /**
        * For internal use only.
        * @private
        */
        private draw;
        drawText(text: any, x: any, y: any, context: any, scale: any): void;
        clearLayout(): void;
        rectangles: any[];
        angles: any[];
        strings: any[];
        createSvgElement(svgdoc: any): any;
    }
    import { Matrix } from "@mindfusion/drawing";
}
declare module "Diagramming/DiagramLink" {
    export default DiagramLink;
    /**
    * @class Represents a link between two diagram nodes.
    * @augments DiagramItem
    */
    class DiagramLink extends DiagramItem {
        static get defaultPoint(): Point;
        static get Shapes(): (typeof BezierShape | typeof PolylineShape | typeof CascadingShape | typeof SplineShape)[];
        /**
        * Initializes a new instance of the DiagramLink class between the specified nodes using the specified diagram link as a prototype.
        * @constructor
        * @param {Diagram} [parent] The Diagram from which to obtain default values for the link properties.
        * @param {DiagramNode | Point} [origin] The origin node of the new link.
        * @param {DiagramNode | Point} [destination] The destination node of the new link.
        */
        constructor(parent?: Diagram, origin?: DiagramNode | Point, destination?: DiagramNode | Point, ...args: any[]);
        _shape: number;
        points: Point[];
        angles: any[];
        set baseShapeSize(arg: number);
        /**
        * Gets or sets the size of the arrowhead displayed at the link's start point.
        * @type {Number}
        * @summary A number that represents the size of the arrowhead shape.
        */
        get baseShapeSize(): number;
        set headShapeSize(arg: number);
        /**
        * Gets or sets the size of the arrowhead displayed at the link's end point.
        * @type {Number}
        * @summary A number that represents the size of the arrowhead shape.
        */
        get headShapeSize(): number;
        headShapeObj: {};
        baseShapeObj: {};
        set headShape(arg: string | Shape);
        /**
        * Gets or sets the arrowhead shape displayed at the link' end point.
        * @type {Shape | String}
        * @summary A Shape instance that represents an arrowhead shape.
        */
        get headShape(): string | Shape;
        _textAlignment: number;
        _textStyle: number;
        _textSize: Size;
        set shape(arg: number);
        /**
        * Gets or sets the type of link segments and how they are oriented relatively to each other.
        * @type {LinkShape}
        * @summary A member of the LinkShape enumeration.
        */
        get shape(): number;
        set segmentCount(arg: number);
        /**
        * Gets or sets the number of segments that form the link's geometry.
        * @type {Number}
        * @summary An integer value specifying the number of segments of this link.
        */
        get segmentCount(): number;
        set baseShape(arg: string | Shape);
        /**
        * Gets or sets the arrowhead shape displayed at the link' start point.
        * @type {Shape | String}
        * @summary A Shape instance that represents an arrowhead shape.
        */
        get baseShape(): string | Shape;
        set dynamic(arg: boolean);
        /**
        * Gets or sets whether link's end segments are automatically adjusted
        * in order to keep pointing to the centers of the nodes it connects.
        * @type {Boolean}
        * @summary true if the link automatically adjusts its end points, or false otherwise.
        */
        get dynamic(): boolean;
        set textStyle(arg: number);
        /**
        * Gets or sets the placement and orientation of link's text.
        * @type {LinkTextStyle}
        * @summary A member of the LinkTextStyle enumeration.
        */
        get textStyle(): number;
        baseShapeBounds: Rect;
        headShapeBounds: Rect;
        set baseBrush(arg: any);
        /**
        * Gets or sets an object that specifies how to fill link's baseShape.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get baseBrush(): any;
        set headBrush(arg: any);
        /**
        * Gets or sets an object that specifies how to fill link's headShape.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get headBrush(): any;
        textRenderer: LinkTextRenderer;
        set autoRoute(arg: boolean);
        /**
        * Gets or sets whether this link should be automatically routed to avoid crossing nodes.
        * @type {Boolean}
        * @summary true to automatically route this link, or false otherwise.
        */
        get autoRoute(): boolean;
        baseshape: any;
        set headStroke(arg: any);
        /**
        * Gets or sets the brush used to stroke the outline of link's arrowheads.
        * @type {Object}
        * @summary A color string or an object literal specifying gradient.
        */
        get headStroke(): any;
        set headStrokeThickness(arg: number);
        /**
        * Gets or sets the thickness of arrowhead outlines.
        * @type {Number}
        * @summary A number specifying the line thickness.
        */
        get headStrokeThickness(): number;
        set headStrokeDashStyle(arg: number);
        /**
        * Gets or sets the dash pattern of arrowhead outlines.
        * @type {DashStyle}
        * @summary A member of the DashStyle enumeration.
        */
        get headStrokeDashStyle(): number;
        labels: any;
        _dynamic: any;
        _cascadeStartHorizontal: any;
        _autoRoute: any;
        set controlPoints(arg: any[]);
        /**
        * Gets or sets the control points of this link.
        * @type {Array}
        * @summary An array of Point objects containing coordinates of link segments.
        */
        get controlPoints(): any[];
        baseshapeSize: any;
        _headBrush: any;
        _baseBrush: any;
        _headStroke: any;
        _headStrokeThickness: any;
        _headStrokeDashStyle: any;
        shapeImpl(): typeof BezierShape | typeof PolylineShape | typeof CascadingShape | typeof SplineShape;
        /**
        * For internal use only.
        * @private
        */
        private raiseClicked;
        /**
        * For internal use only.
        * @private
        */
        private raiseDoubleClicked;
        /**
        * For internal use only.
        * @private
        */
        private updateIntersections;
        updateOriginIntersection(): void;
        updateDestinationIntersection(): void;
        /**
        * For internal use only.
        * @private
        */
        private doRoute;
        _origin: any;
        _destination: any;
        /**
        * For internal use only.
        * @private
        */
        private updateTargetConnection;
        targetConnection: any;
        /**
        * For internal use only.
        * @private
        */
        private getEditRect;
        setOrigin(origin: any, details: any): void;
        originConnection: any;
        set origin(arg: DiagramNode);
        /**
        * Gets or sets the origin node of this link.
        * @type {DiagramNode}
        * @summary A reference to the origin node.
        */
        get origin(): DiagramNode;
        set originAnchor(arg: number);
        /**
        * Gets or sets the anchor point to which the link connects at its origin.
        * @type {Number}
        * @summary An integer value specifying the index of the origin anchor point.
        */
        get originAnchor(): number;
        /**
        * Sets the destination node of this link.
        * @param {DiagramNode} destination The node that will be destination for the link.
        */
        setDestination(destination: DiagramNode, details: any): void;
        destinationConnection: any;
        set destination(arg: DiagramNode);
        /**
        * Gets or sets the destination node of this link.
        * @type {DiagramNode}
        * @summary A reference to the destination node.
        */
        get destination(): DiagramNode;
        set destinationAnchor(arg: number);
        /**
        * Gets or sets the anchor point to which the link connects at its destination.
        * @type {Number}
        * @summary An integer value specifying the index of the destination anchor point.
        */
        get destinationAnchor(): number;
        /**
        * For internal use only.
        * @private
        */
        private isConnected;
        isReflexive(): any;
        /**
        * For internal use only.
        * @private
        */
        private resetLink;
        /**
        * For internal use only.
        * @private
        */
        private copyPoints;
        /**
        * For internal use only.
        * @private
        */
        private updatePosFromOrgAndDest;
        /**
        * Updates the link's internal state after the link's control points have been changed.
        */
        updateFromPoints(...args: any[]): void;
        baseShapeRenderer: ShapeRenderer;
        headShapeRenderer: ShapeRenderer;
        /**
        * For internal use only.
        * @private
        */
        private updateNodeCollections;
        /**
        * For internal use only.
        * @private
        */
        private setupOriginConnection;
        /**
        * For internal use only.
        * @private
        */
        private setupDestConnection;
        /**
        * For internal use only.
        * @private
        */
        private handleAtPoint;
        /**
        * For internal use only.
        * @private
        */
        private validateParams;
        set startPoint(arg: Point);
        /**
        * Gets or sets the first control point of this link.
        * @type {Point}
        * @summary A Point instance containing the control point coordinates.
        */
        get startPoint(): Point;
        set endPoint(arg: Point);
        /**
        * Gets or sets the last control point of this link.
        * @type {Point}
        * @summary A Point instance containing the control point coordinates.
        */
        get endPoint(): Point;
        /**
        * For internal use only.
        * @private
        */
        private getHandlePosition;
        /**
        * For internal use only.
        * @private
        */
        private getDummyNode;
        get bounds(): Rect;
        getPointsBounds(points: any): Rect;
        /**
        * For internal use only.
        * @private
        */
        private updateText;
        textSize: any;
        /**
        * Checks whether the link contour intersects with the outline of the specified node.
        * @param {Rect} rect The bounding rectangle of the specified node.
        * @returns {Boolean}
        */
        intersects(rect: Rect): boolean;
        drawHandles(context: any, handlesStyle: any): void;
        _baseShape: any;
        _baseShapeSize: any;
        _headShape: any;
        _headShapeSize: any;
        get effectiveBaseBrush(): any;
        get effectiveHeadBrush(): any;
        get effectiveHeadStroke(): any;
        get effectiveHeadStrokeThickness(): number;
        get effectiveHeadStrokeDashStyle(): number;
        /**
        * For internal use only.
        * @private
        */
        private setPoints;
        /**
        * For internal use only.
        * @private
        */
        private setLoopShape;
        /**
        * Routes this link, regardless of whether the link's AutoRoute flag is enabled.
        * @param {Object} [args]
        */
        route(args?: any): void;
        finalizeRoute(args: any): void;
        /**
        * Places the link's end points on the outline of its origin and destination nodes.
        * @param {Action} action
        * @param {Boolean} routing
        */
        putEndPointsAtNodeBorders(action: Action, routing: boolean): void;
        nextToLastDifferent(pts: any): any;
        nextToFirstDifferent(pts: any): any;
        collapse(collapsedSet: any): void;
        set originIndex(arg: number);
        /**
        * Gets or sets the index of link's origin row when origin is TableNode.
        * @type {Number}
        * @summary An integer value specifying the index of origin row.
        */
        get originIndex(): number;
        set destinationIndex(arg: number);
        /**
        * Gets or sets the index of link's destination row when destination is TableNode.
        * @type {Number}
        * @summary An integer value specifying the index of destination row.
        */
        get destinationIndex(): number;
        fixRowConnections(): void;
        cascadeStartHorizontal: boolean;
        arrangePoints(): void;
        getPolyLine(quality: any): any[];
        segmentToPolyline(segmNum: any): any[];
        /**
        * Gets the length of the links
        * @param {Array} [segments] A list of points specifying the polyline segments.
        * @returns {Number} The sum of the lengths of the line's segments.
        * @remarks If the link's Shape is set to Bezier, an approximate length is calculated.
        */
        getLength(segments?: any[]): number;
        /**
        * Returns a point lying on a polyline that is positioned at a relative position along the polyline's length.
        * @param {Number} lengthFactor A value from 0 to 1 specifying a portion of link's length.
        * @param {Array} [segments] A list of points specifying the polyline segments.
        * @returns {Point} A Point instance.
        */
        pointAlongLength(lengthFactor: number, segments?: any[]): Point;
        /**
        * Adds a new label to this link.
        * @param {String} text The label's text.
        * @returns {LinkLabel} A LinkLabel instance.
        */
        addLabel(text: string): LinkLabel;
        /**
        * Removes the specified label from this link.
        * @param {LinkLabel} label A LinkLabel instance.
        */
        removeLabel(label: LinkLabel): void;
        labelFromPoint(point: any): any;
        createEditArgs(oldText: any, newText: any): LinkEventArgs;
        crossedLinksToInvalidate(down: any): any;
        resetCrossings(invalidRect: any): void;
        _mf_linkCrossings: any;
        get crossings(): any;
        get longestSegment(): number;
        getSegmentLength(index: any): number;
        getSegmentCenter(index: any): Point;
        getNearPoint(index: any): Point;
        getFarPoint(index: any): Point;
        fit(text: any, width: any, font: any): number;
        updateAnimation(animation: any, animationDelta: any): void;
    }
    import { DiagramItem } from "Diagramming/LoadOrder";
    import { Point } from "@mindfusion/drawing";
    import { Shape } from "Diagramming/Shape";
    import { Size } from "@mindfusion/drawing";
    import { Rect } from "@mindfusion/drawing";
    import LinkTextRenderer from "Diagramming/LinkTextRenderer";
    class BezierShape {
        /**
        * For internal use only.
        * @private
        */
        private static initialize;
        /**
        * For internal use only.
        * @private
        */
        private static createElements;
        /**
        * For internal use only.
        * @private
        */
        private static containsPoint;
        /**
        * For internal use only.
        * @private
        */
        private static updateRelatedPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromEndPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromRoute;
        /**
        * For internal use only.
        * @private
        */
        private static pointsValid;
        static resetSelfLoopPoints(link: any, allowChangeSegments: any): void;
    }
    class PolylineShape {
        /**
        * For internal use only.
        * @private
        */
        private static initialize;
        /**
        * For internal use only.
        * @private
        */
        private static createElements;
        /**
        * Determines whether this link contains the specified point.
        * @param {Point} point The point to check.
        * @returns {Boolean} true if this link contains the specified point; otherwise, false.
        */
        static containsPoint(link: any, point: Point, maxDist: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private static updateRelatedPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromEndPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromRoute;
        /**
        * For internal use only.
        * @private
        */
        private static pointsValid;
        static resetSelfLoopPoints(link: any, allowChangeSegments: any): void;
    }
    class CascadingShape {
        /**
        * For internal use only.
        * @private
        */
        private static initialize;
        /**
        * For internal use only.
        * @private
        */
        private static createElements;
        /**
        * For internal use only.
        * @private
        */
        private static containsPoint;
        /**
        * For internal use only.
        * @private
        */
        private static updateRelatedPoints;
        /**
        * For internal use only.
        * @private
        */
        private static arrangeCascadingSegments;
        /**
        * For internal use only.
        * @private
        */
        private static alignCascadingSegments;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromEndPoints;
        /**
        * For internal use only.
        * @private
        */
        private static alignFirstCascadingSegment;
        /**
        * For internal use only.
        * @private
        */
        private static alignLastCascadingSegment;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromRoute;
        /**
        * For internal use only.
        * @private
        */
        private static pointsValid;
        static resetSelfLoopPoints(link: any, allowChangeSegments: any): void;
    }
    class SplineShape {
        /**
        * For internal use only.
        * @private
        */
        private static initialize;
        /**
        * For internal use only.
        * @private
        */
        private static createElements;
        static getCurvePoints(pts: any): number[];
        /**
        * Determines whether this link contains the specified point.
        * @param {Point} point The point to check.
        * @returns {Boolean} true if this link contains the specified point; otherwise, false.
        */
        static containsPoint(link: any, point: Point, maxDist: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private static updateRelatedPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromEndPoints;
        /**
        * For internal use only.
        * @private
        */
        private static updateFromRoute;
        /**
        * For internal use only.
        * @private
        */
        private static pointsValid;
        static resetSelfLoopPoints(link: any, allowChangeSegments: any): void;
    }
    import { DiagramNode } from "Diagramming/LoadOrder";
    import ShapeRenderer from "Diagramming/ShapeRenderer";
    import { Action } from "Diagramming/Enum";
    import { LinkLabel } from "Diagramming/LinkLabel";
    import { LinkEventArgs } from "Diagramming/EventArgs";
    import { Diagram } from "Diagramming/Diagram";
}
declare module "Diagramming/LoadOrder" {
    import DiagramItem from "Diagramming/DiagramItem";
    import DiagramNode from "Diagramming/DiagramNode";
    import ContainerNode from "Diagramming/ContainerNode";
    import ShapeNode from "Diagramming/ShapeNode";
    import TableNode from "Diagramming/TableNode";
    import FreeFormNode from "Diagramming/FreeFormNode";
    import SvgNode from "Diagramming/SvgNode";
    import CompositeNode from "Diagramming/CompositeNode";
    import VideoNode from "Diagramming/VideoNode";
    import ControlNode from "Diagramming/ControlNode";
    import TreeViewNode from "Diagramming/TreeViewNode";
    import DummyNode from "Diagramming/DummyNode";
    import DiagramLink from "Diagramming/DiagramLink";
    import Selection from "Diagramming/Selection";
    export { DiagramItem, DiagramNode, ContainerNode, ShapeNode, TableNode, FreeFormNode, SvgNode, CompositeNode, VideoNode, ControlNode, TreeViewNode, DummyNode, DiagramLink, Selection };
}
declare module "Diagramming/Interaction/SinglePointerController" {
    export default SinglePointerController;
    /**
    * @class Processes mouse or single-touch events targeting a diagram element.
    */
    class SinglePointerController {
        /**
        * Initializes a new instance of the SinglePointerController class.
        * @constructor
        * @param {DiagramItem} modifiedItem The item that will be modified by this controller.
        * @param {Object} adjustmentHandle An object representing the adjustment handle used to modify the item.
        */
        constructor(modifiedItem: any, adjustmentHandle: any);
        modifiedItem: any;
        adjustmentHandle: any;
        controlPointStart: any;
        action: number;
        originalStates: Map<any, any>;
        /**
        * Called when the user starts drawing or modifying a diagram element.
        * @param {Point} position A point specified in diagram coordinates.
        */
        start(position: Point): void;
        startPoint: any;
        modifiedDiagram: any;
        /**
        * Called continuously while the user draws with the mouse or touch.
        * @param {Point} position A point specified in diagram coordinates.
        */
        move(position: Point): void;
        currentPoint: any;
        /**
        * Called to validate the operation at current pointer position.
        * @param {Point} position A point specified in diagram coordinates.
        * @returns {Boolean} true to accept the operation, or false otherwise.
        */
        validate(position: Point): boolean;
        /**
        * Called when the user stops drawing or modifying a diagram element, accepting the operation.
        * @param {Point} position A point specified in diagram coordinates.
        */
        commit(position: Point): void;
        /**
        * Called when the user stops drawing or modifying a diagram element, rejecting the operation.
        * @param {Point} position A point specified in diagram coordinates.
        */
        cancel(position: Point): void;
        cancelNow(): void;
        cancelDrag: boolean;
        shouldCancelDrag(): boolean;
        /**
        * Called to draw current state of user interaction.
        * @param {DrawingContext2D} context The drawing context for diagram's underlying canvas.
        */
        drawInteraction(context: any): void;
        delta(): any;
        supportsAutoScroll(): boolean;
        supportsCursors(): boolean;
    }
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/Interaction/ManipulatorController" {
    export default ManipulatorController;
    class ManipulatorController extends SinglePointerController {
        constructor(diagram: any, manipulator: any);
        diagram: any;
        manipulator: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
}
declare module "Diagramming/Interaction/PanController" {
    /**
    * @class A controller used to pan the diagramView.
    * @augments SinglePointerController
    */
    export class PanController extends SinglePointerController {
        /**
        * Initializes a new instance of the PanController class.
        * @constructor
        * @param {DiagramView} diagramView The diagramView that will get scrolled by this controller.
        */
        constructor(diagramView: any);
        diagramView: any;
        startScroll: any;
        panPoint: any;
        mouseMoved: boolean;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
}
declare module "Diagramming/Interaction/MagnifyController" {
    export default MagnifyController;
    class MagnifyController extends SinglePointerController {
        constructor(diagramView: any);
        diagramView: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
}
declare module "Diagramming/Interaction/LaneGridController" {
    export default LaneGridController;
    class LaneGridController extends SinglePointerController {
        constructor(diagram: any, header: any, resizingHeaderWidth: any, headerBounds: any);
        diagram: any;
        header: any;
        resizingHeaderWidth: any;
        dragOffset: Size;
        dragInitialPos: Point;
        headerBounds: any;
        current: any;
        last: any;
        resizing: boolean;
        getHeadersOnLevel(header: any): any[];
        setHeight(height: any): void;
        setWidth(width: any): void;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
    import { Size } from "@mindfusion/drawing";
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/Interaction/CreateSelectionController" {
    /**
    * @class A controller used to draw selection rectangle in the diagram.
    * @augments SinglePointerController
    */
    export class CreateSelectionController extends SinglePointerController {
        /**
        * Initializes a new instance of the CreateSelectionController class.
        * @constructor
        * @param {Selection} selection The selection that will be drawn by this controller.
        */
        constructor(selection: Selection);
        selection: Selection;
        selectionRect: Rect;
        lastPosition: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Diagramming/Interaction/ModifySelectionController" {
    /**
    * @class A controller used to modify multiple selected items in the diagram.
    * @augments SinglePointerController
    */
    export class ModifySelectionController extends SinglePointerController {
        /**
        * Initializes a new instance of the ModifySelectionController class.
        * @constructor
        * @param {Selection} selection The selection that will be modified by this controller.
        * @param {Object} adjustmentHandle An object representing the adjustment handle used to modify the selection.
        */
        constructor(selection: Selection, adjustmentHandle: any);
        selection: Selection;
        mediator: DiagramMediator;
        angleDelta: number;
        lastPosition: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
    import DiagramMediator from "Diagramming/Interaction/DiagramMediator";
}
declare module "Diagramming/Interaction/Devices" {
    export namespace Keyboard {
        const state: {};
    }
    export namespace Touch {
        const lastTouch: any;
    }
    export namespace Mouse {
        const LeftButton: number;
        const RightButton: number;
        const NoButton: number;
    }
}
declare module "Diagramming/Interaction/ModifyNodeController" {
    /**
    * @class A controller used to modify existing nodes in the diagram.
    * @augments SinglePointerController
    */
    export class ModifyNodeController extends SinglePointerController {
        node: any;
        startBounds: any;
        mediator: DiagramMediator;
        lastPosition: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
    import DiagramMediator from "Diagramming/Interaction/DiagramMediator";
}
declare module "Diagramming/Interaction/ModifyLinkController" {
    /**
    * @namespace MindFusion.Diagramming
    */
    /**
    * @class A controller used to modify existing links in the diagram.
    * @augments SinglePointerController
    */
    export class ModifyLinkController extends SinglePointerController {
        link: any;
        mediator: DiagramMediator;
        lastPosition: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
    import DiagramMediator from "Diagramming/Interaction/DiagramMediator";
}
declare module "Diagramming/BehaviorBase" {
    /**
    * @class An abstract base class for types that define how the control reacts to users' actions with a mouse or other pointing devices.
    */
    export class BehaviorBase {
        /**
        * Initializes a new instance of the BehaviorBase class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any);
        diagramView: any;
        currentCursor: string;
        /**
         * Gets the target diagram of this behavior object.
         * @type {Diagram}
         * @summary An instance of the Diagram class.
         */
        get diagram(): any;
        /**
        * Creates a controller appropriate for current context and pointer position.
        * @param {Object} state An object representing current context and input event.
        * @returns {SinglePointerController} An instance of SinglePointerController -derived class.
        */
        createController(state: any): any;
        /**
        * For internal use only.
        * @private
        */
        private createLink;
        setModfCursor(point: any, adjustmentHandle: any): any;
        /**
        * For internal use only.
        * @private
        */
        private getResizeCursor;
        /**
        * For internal use only.
        * @private
        */
        private setMouseCursor;
        setCurrentCursor(value: any): any;
    }
}
declare module "Diagramming/ModifierKeyActions" {
    /**
    * @class Maps keyboard modifier keys to special actions in MindFusion.Diagramming such as panning and drawing selection rectangle.
    */
    export class ModifierKeyActions {
        set control(arg: number);
        /**
        * Gets or sets the action triggered by the CTRL key.
        * @type {ModifierKeyAction}
        * @summary A member of the ModifierKeyAction enumeration.
        */
        get control(): number;
        set shift(arg: number);
        /**
        * Gets or sets the action triggered by the SHIFT key.
        * @type {ModifierKeyAction}
        * @summary A member of the ModifierKeyAction enumeration.
        */
        get shift(): number;
        set alt(arg: number);
        /**
        * Gets or sets the action triggered by the ALT key.
        * @type {ModifierKeyAction}
        * @summary A member of the ModifierKeyAction enumeration.
        */
        get alt(): number;
        _control: number;
        _shift: number;
        _alt: number;
        getKeys(action: any, e: any): boolean;
    }
}
declare module "Diagramming/Interaction/CreateNodeController" {
    /**
    * @class A controller used to draw new nodes in the diagram.
    * @augments SinglePointerController
    */
    export class CreateNodeController extends SinglePointerController {
        /**
        * Initializes a new instance of the CreateNodeController class.
        * @constructor
        * @param {Diagram} diagram The parent diagram of the new node.
        * @param {DiagramNode} node The node that will be drawn by this controller.
        */
        constructor(diagram: any, node: any);
        diagram: any;
        node: any;
        lastPosition: any;
        rectFromPoints(point1: any, point2: any, minSize: any): any;
        replaceNewItem(item: any): any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
}
declare module "Diagramming/Interaction/CreateLinkController" {
    /**
    * @class A controller used to draw new links in the diagram.
    * @augments SinglePointerController
    */
    export class CreateLinkController extends SinglePointerController {
        /**
        * Initializes a new instance of the CreateLinkController class.
        * @constructor
        * @param {Diagram} diagram The parent diagram of the new link.
        * @param {DiagramLink} link The link that will be drawn by this controller.
        */
        constructor(diagram: any, link: any);
        diagram: any;
        link: any;
        lastPosition: any;
    }
    import SinglePointerController from "Diagramming/Interaction/SinglePointerController";
}
declare module "Diagramming/LinkNodesBehavior" {
    /**
    * @class The base class for behavior types that allow drawing both nodes and links.
    * @augments BehaviorBase
    */
    export class LinkNodesBehavior extends BehaviorBase {
        /**
        * Initializes a new instance of the LinkNodesBehavior class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any, nodeConstructor: any, linkConstructor: any);
        nodeConstructor: any;
        linkConstructor: any;
        createNode(): any;
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/Interaction/MouseEventHandler" {
    export default MouseEventHandler;
    class MouseEventHandler {
        constructor(view: any);
        view: any;
        canvasElement: any;
        inputDispatcher: any;
        attachHandlers(): void;
        onMouseDown(e: any): void;
        onMouseMove(e: any): void;
        onMouseUp(e: any): void;
        onMouseWheel(e: any): void;
    }
}
declare module "Diagramming/Interaction/TouchEventHandler" {
    export default TouchEventHandler;
    class TouchEventHandler {
        constructor(view: any);
        view: any;
        canvasElement: any;
        inputDispatcher: any;
        attachHandlers(): void;
        emulateMouse(e: any): {
            button: number;
            clientX: any;
            clientY: any;
            preventDefault(): void;
        };
        onTouchStart(e: any): void;
        lastTouch: {
            button: number;
            clientX: any;
            clientY: any;
            preventDefault(): void;
        };
        onTouchMove(e: any): void;
        onTouchEnd(e: any): void;
    }
}
declare module "Diagramming/Interaction/KeyboardEventHandler" {
    export default KeyboardEventHandler;
    class KeyboardEventHandler {
        constructor(view: any);
        view: any;
        canvasElement: any;
        targetElement: any;
        inputDispatcher: any;
        keyUpDelegate: (e: any) => void;
        attachHandlers(): void;
        setTargetElement(element: any): void;
        onKeyUp(e: any): void;
    }
}
declare module "Diagramming/Interaction/InplaceEditController" {
    export default InplaceEditController;
    class InplaceEditController {
        constructor(diagramView: any, modifiedItem: any);
        modifiedItem: any;
        diagramView: any;
        get diagram(): any;
        start(point: any, target: any): void;
        inplaceObject: any;
        inplaceTextBox: Element;
        focusInput(): void;
        /**
        * For internal use only.
        * @private
        */
        private setInplaceEditBounds;
        validate(position: any): boolean;
        commit(): void;
        cancel(): void;
        inplaceKeyUp(e: any): void;
        drawInteraction(context: any): void;
        move(position: any): void;
        shouldCancelDrag(): boolean;
        supportsAutoScroll(): boolean;
        supportsCursors(): boolean;
    }
}
declare module "Diagramming/Interaction/MouseInputDispatcher" {
    /**
    * @class Processes mouse events and dispatches them to controller objects appropriate for current context.
    */
    export class MouseInputDispatcher {
        /**
        * Initializes a new instance of the MouseInputDispatcher class.
        * @constructor
        * @param {DiagramView} diagramView The DiagramView instance that should receive mouse input.
        */
        constructor(diagramView: any);
        diagramView: any;
        buttonDown: number;
        inputState: {};
        get diagram(): any;
        /**
        * Called when the user presses down a mouse button.
        * @param {Point} position A point specified in diagram coordinates.
        * @param {Number} button 0 for left button, 1 for middle button, 2 for right button.
        */
        onMouseDown(position: any, button: number): void;
        pointerPosition: any;
        doubleClickCheck: {
            position: any;
            button: number;
            time: Date;
        };
        buttonDownPosition: any;
        buttonDownItem: any;
        /**
        * Called when the user moves the mouse.
        * @param {Point} position A point specified in diagram coordinates.
        */
        onMouseMove(position: any): void;
        pointedItem: any;
        currentController: any;
        /**
        * Called when the user releases a mouse button.
        * @param {Point} position A point specified in diagram coordinates.
        * @param {Number} button 0 for left button, 1 for middle button, 2 for right button.
        */
        onMouseUp(position: any, button: number): void;
        onDoubleClick(position: any, button: any): void;
        selectController(): any;
        getPointedItem(): any;
    }
}
declare module "Diagramming/Interaction/KeyboardInputDispatcher" {
    export default KeyboardInputDispatcher;
    class KeyboardInputDispatcher {
        constructor(diagramView: any);
        diagramView: any;
        inputState: {};
        get diagram(): any;
        onKeyUp(target: any, keyCode: any, recorded: any, value: any): void;
    }
}
declare module "Diagramming/Interaction/RecordingMouseDispatcher" {
    export default RecordingMouseDispatcher;
    class RecordingMouseDispatcher extends MouseInputDispatcher {
        constructor(diagram: any, startTime: any);
        data: any[];
        startTimeStamp: any;
        eventDispatcher: any;
        addDataId: number;
        addData(func: any, position: any, button: any): void;
        ellapsedTime: number;
    }
    import { MouseInputDispatcher } from "Diagramming/Interaction/MouseInputDispatcher";
}
declare module "Diagramming/Interaction/RecordingKeyboardDispatcher" {
    export default RecordingKeyboardDispatcher;
    class RecordingKeyboardDispatcher extends KeyboardInputDispatcher {
        constructor(diagram: any, startTime: any);
        data: any[];
        startTimeStamp: any;
        eventDispatcher: any;
        addData(func: any, target: any, key: any): void;
        ellapsedTime: number;
        addDataId: any;
    }
    import KeyboardInputDispatcher from "Diagramming/Interaction/KeyboardInputDispatcher";
}
declare module "Diagramming/DoNothingBehavior" {
    /**
    * @class Implements the DoNothing behavior.
    * @augments BehaviorBase
    */
    export class DoNothingBehavior extends BehaviorBase {
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/DrawNodesBehavior" {
    /**
    * @class The base class for behavior types that allow drawing of nodes, but not links.
    * @augments BehaviorBase
    */
    export class DrawNodesBehavior extends BehaviorBase {
        /**
        * Initializes a new instance of the DrawNodesBehavior class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any, nodeConstructor: any);
        nodeConstructor: any;
        createNode(): any;
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/DrawLinksBehavior" {
    /**
    * @class This class is used when the diagram behavior is set to Behavior.DrawLinks.
    * @augments BehaviorBase
    */
    export class DrawLinksBehavior extends BehaviorBase {
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/ModifyBehavior" {
    /**
    * @class This class is used when the diagram behavior is set to Behavior.Modify.
    * @augments BehaviorBase
    */
    export class ModifyBehavior extends BehaviorBase {
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/SelectOnlyBehavior" {
    /**
    * @class Allows only selection of existing items. Modifying them or drawing new ones is disabled.
    * @augments BehaviorBase
    */
    export class SelectOnlyBehavior extends BehaviorBase {
        /**
        * Initializes a new instance of the SelectOnlyBehavior class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any, nodeConstructor: any);
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/MagnifyBehavior" {
    /**
    * @class This class is used when the diagram behavior is set to Behavior.Magnify.
    * @augments BehaviorBase
    */
    export class MagnifyBehavior extends BehaviorBase {
        /**
        * Initializes a new instance of the MagnifyBehavior class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any, nodeConstructor: any);
        /**
        * BehaviorBase.onMouseDown override.
        * @param {MouseButtonEventArgs} e A MouseButtonEventArgs that contains the event data.
        * @return {Boolean} true if interaction starts.
        */
        onMouseDown(e: any): boolean;
        /**
        * BehaviorBase.onMouseMove override.
        * @param {MouseEventArgs} e A MouseEventArgs that contains the event data.
        */
        onMouseMove(e: any): void;
        /**
        * BehaviorBase.onMouseUp override.
        * @param {MouseButtonEventArgs} e A MouseButtonEventArgs that contains the event data.
        */
        onMouseUp(e: any): void;
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/PanBehavior" {
    /**
    * @class Pans the diagram when the users drags the mouse.
    * @augments BehaviorBase
    */
    export class PanBehavior extends BehaviorBase {
        /**
        * Initializes a new instance of the PanBehavior class.
        * @constructor
        * @param {DiagramView} parent The DiagramView this behavior will be associated with.
        */
        constructor(parent: any, nodeConstructor: any);
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/MoveNodesBehavior" {
    /**
    * @class This class is used when the diagram behavior is set to Behavior.MoveNodes.
    * @augments BehaviorBase
    */
    export class MoveNodesBehavior extends BehaviorBase {
    }
    import { BehaviorBase } from "Diagramming/BehaviorBase";
}
declare module "Diagramming/DiagramView" {
    /**
    * @class Represents a control that displays the content of a Diagram object.
    * @augments CanvasControl
    */
    export class DiagramView extends CanvasControl {
        /**
        * Creates and initializes a new DiagramView from the specified element.
        * This method is static and can be called without creating an instance of the class.
        * @param {HTMLCanvasElement} element The DOM element that the DiagramView should be attached to.
        * @param {Diagram} [diagram] The Diagram instance this control is associated with.
        * @returns {DiagramView} The newly created DiagramView object.
        */
        static create(element: HTMLCanvasElement, diagram?: Diagram): DiagramView;
        /**
        * Returns the specified DiagramView object. This member is static and can be
        * invoked without creating an instance of the class.
        * @param {String} id The id of the DiagramView's element.
        * @returns {DiagramView} A DiagramView object with the specified id, if found; otherwise, null.
        */
        static find(id: string): DiagramView;
        /**
        * Initializes a new instance of the DiagramView class.
        * @constructor
        * @param {HTMLCanvasElement} element The Canvas DOM Element this DiagramView is associated with.
        * @param {Diagram} [diagram] The Diagram instance this control is associated with.
        */
        constructor(element: HTMLCanvasElement, diagram?: Diagram);
        mouseInputDispatcher: MouseInputDispatcher;
        keyboardInputDispatcher: KeyboardInputDispatcher;
        itemAddedDelegate: (sender: any, args: any) => void;
        dataLoadedDelegate: (sender: any, args: any) => void;
        lastMouseUp: Date;
        doubleClick: boolean;
        leftButtonDownPos: Point;
        leftButtonDownPosDev: Point;
        rightButtonDownPos: Point;
        rightButtonDownPosDev: Point;
        itemTestForDoubleClick: any;
        lastCursorPos: Point;
        lastClick: Date;
        set modificationStart(arg: number);
        /**
        * Gets or sets how users can start modifying diagram items.
        * @type {ModificationStart}
        * @summary A member of the ModificationStart enumeration.
        */
        get modificationStart(): number;
        set delKeyAction(arg: number);
        /**
        * Gets or sets what action to perform when users hit the Del key.
        * @type {DelKeyAction}
        * @summary A member of the DelKeyAction enumeration.
        */
        get delKeyAction(): number;
        set mouseWheelAction(arg: number);
        /**
        * Gets or sets what action to perform when users rotate the mouse wheel.
        * @type {MouseWheelAction}
        * @summary A member of the MouseWheelAction enumeration. The default value is Scroll.
        */
        get mouseWheelAction(): number;
        set behavior(arg: number);
        /**
        * Gets or sets a value indicating how the control responds to user actions.
        * @type {Behavior}
        * @summary A member of the Behavior enumeration. The default value is LinkShapes.
        */
        get behavior(): number;
        /**
        * Indicates whether to stop default touch behavior of browsers in order
        * to allow interactive drawing and modification of diagram items.
        */
        preventDefaultTouch: boolean;
        _modifierKeyActions: ModifierKeyActions;
        scrollbarSize: number;
        calculatedScrollSize: number;
        set scrollZoneSize(arg: number);
        /**
        * Gets or sets the size of the auto scroll zone near the edges of the control.
        * @type {Number}
        * @summary A number specifying the size of the auto scroll zone. The default value is 8.
        */
        get scrollZoneSize(): number;
        set autoScrollAmount(arg: number);
        /**
        * Gets or sets the amount by which to auto-scroll the view
        * when the mouse leaves the view boundaries while drawing.
        * @type {Number}
        * @summary A number specifying the amount by which to auto-scroll.
        */
        get autoScrollAmount(): number;
        set autoScroll(arg: boolean);
        /**
        * Gets or sets a value indicating whether automatic scrolling is enabled.
        * @type {Boolean}
        * @summary true to enable auto scrolling, or false otherwise. The default value is true.
        */
        get autoScroll(): boolean;
        autoScrDX: number;
        autoScrDY: number;
        set magnifierShape(arg: string | Shape);
        /**
        * Gets or sets a reference to the geometric shape definition of the magnifier tool.
        * @type {Shape | String}
        * @summary The Shape or shape identifier of the magnifier tool.
        */
        get magnifierShape(): string | Shape;
        set magnifierEnabled(arg: boolean);
        /**
        * Gets or sets a value indicating whether the magnifier tool is currently enabled.
        * @type {Boolean}
        * @summary true if the magnifier is enabled, or false otherwise. The default value is false.
        */
        get magnifierEnabled(): boolean;
        set magnifierFactor(arg: number);
        /**
        * Gets or sets the zoom factor of the magnifier tool.
        * @type {Number}
        * @summary The zoom factor of the magnifier tool as percentage.
        */
        get magnifierFactor(): number;
        set magnifierWidth(arg: number);
        /**
        * Gets or sets the width of the magnifier tool.
        * @type {Number}
        * @summary A number specifying the width of the magnifier tool.
        */
        get magnifierWidth(): number;
        set magnifierHeight(arg: number);
        /**
        * Gets or sets the height of the magnifier tool.
        * @type {Number}
        * @summary A number specifying the height of the magnifier tool.
        */
        get magnifierHeight(): number;
        set magnifierFrameThickness(arg: number);
        /**
        * Gets or sets the thickness of the magnifier frame.
        * @type {Number}
        * @summary A number specifying the thickness of the magnifier frame.
        */
        get magnifierFrameThickness(): number;
        set magnifierShading(arg: boolean);
        /**
        * Gets or sets whether to enhance the effect of a magnifier lense by using a gradient shading.
        * @type {Boolean}
        * @summary true to enable shading, or false otherwise.
        */
        get magnifierShading(): boolean;
        set magnifierFrameColor(arg: string);
        /**
        * Gets or sets the color of the magnifier tool's frame.
        * @type {String}
        * @summary The color of the magnifier tool's frame.
        */
        get magnifierFrameColor(): string;
        set magnifierSecondaryFrameColor(arg: string);
        /**
        * Gets or sets the color of the magnifier tool's secondary frame.
        * @type {String}
        * @summary The color of the magnifier tool's secondary frame.
        */
        get magnifierSecondaryFrameColor(): string;
        contextMenuDelegate: (e: any) => void;
        set leftButtonActions(arg: number);
        /**
        * Gets or sets a combination of flags that specify what actions can be performed via the left mouse button.
        * @type {MouseButtonActions}
        * @summary A combination of MouseButtonActions members.
        */
        get leftButtonActions(): number;
        set middleButtonActions(arg: number);
        /**
        * Gets or sets a combination of flags that specify what actions can be performed via the middle mouse button.
        * @type {MouseButtonActions}
        * @summary A combination of MouseButtonActions members.
        */
        get middleButtonActions(): number;
        set rightButtonActions(arg: number);
        /**
        * Gets or sets a combination of flags that specify what actions can be performed via the right mouse button.
        * @type {MouseButtonActions}
        * @summary A combination of MouseButtonActions members.
        */
        get rightButtonActions(): number;
        scrollDelegate: () => void;
        resizeDelegate: () => void;
        set virtualScroll(arg: boolean);
        /**
        * Gets or sets a value indicating whether virtual scroll mode is enabled.
        * @type {Boolean}
        * @summary true if virtual scroll is enabled, or false otherwise. The default value is true.
        */
        get virtualScroll(): boolean;
        mouseHandler: MouseEventHandler;
        touchHandler: TouchEventHandler;
        keyboardHandler: KeyboardEventHandler;
        set diagram(arg: Diagram);
        /**
        * Gets or sets the diagram displayed by this view.
        * @type {Diagram}
        * @summary The Diagram instance displayed by this view.
        */
        get diagram(): Diagram;
        setDiagram(value: any): void;
        onItemAdded(sender: any, args: any): void;
        onDataLoaded(sender: any, args: any): void;
        /**
        * Saves the diagram to a JSON string.
        * @returns {String} A string containing the diagram's JSON representation.
        */
        toJson(): string;
        /**
        * Loads the diagram from a JSON string.
        */
        fromJson(json: any): void;
        set allowInplaceEdit(arg: boolean);
        /**
        * Gets or sets whether users are allowed to edit the text of diagram items.
        * @type {Boolean}
        * @summary true to allow in-place editing, or false otherwise. The default value is false.
        */
        get allowInplaceEdit(): boolean;
        set zoomFactor(arg: number);
        /**
        * Gets or sets the zoom factor.
        * @type {Number}
        * @summary The current zoom factor as percentage.
        */
        get zoomFactor(): number;
        set tooltipDelay(arg: number);
        /**
        * Gets or sets the delay before a tooltip is shown.
        * @type {Number}
        * @summary The tooltip delay in milliseconds.
        */
        get tooltipDelay(): number;
        set defaultControlTemplate(arg: string);
        /**
        * Gets or sets HTML string representing the DOM content rendered by default by newly created ControlNode objects.
        * @type {String}
        * @summary An HTML string.
        */
        get defaultControlTemplate(): string;
        get focusElement(): HTMLElement;
        onContextMenu(e: any): void;
        createFocusable(): void;
        focusDiv: HTMLElement;
        updateFocusable(e: any): void;
        scrollElementH(): Node & ParentNode;
        scrollElementV(): Node & ParentNode;
        getScrollbarSize(type: any): number;
        _autoScroll: any;
        _scrollZoneSize: any;
        _autoScrollAmount: any;
        /**
        * For internal use only.
        * @private
        */
        private resetVirtualScroll;
        /**
        * For internal use only.
        * @private
        */
        private resetVirtualScrollGrid;
        parentSize: {
            width: number;
            height: number;
        };
        scrollerH: HTMLDivElement;
        scrollerV: HTMLDivElement;
        resizeTimeoutId: number;
        /**
        * For internal use only.
        * @private
        */
        private resetVirtualScrollAbs;
        scroller: HTMLDivElement;
        innerScroller: HTMLDivElement;
        /**
        * For internal use only.
        * @private
        * used in Overview instead of Utils.getBounds(this.diagram.sizeElement());
        */
        private get diagramBounds();
        /**
        * For internal use only.
        * @private
        */
        private stopResizeTimer;
        /**
        * For internal use only.
        * @private
        */
        private recalcVirtualScroll;
        /**
        * For internal use only.
        * @private
        */
        private onVirtualResize;
        _allowInplaceEdit: boolean;
        _delKeyAction: number;
        _mouseWheelAction: number;
        /**
        * Forces the removal of any created tooltips from the diagram canvas.
        */
        clearTooltip(): void;
        tooltipDiv: HTMLDivElement;
        trackMouseMovement(point: any): void;
        tooltipX: number;
        tooltipY: number;
        tooltipPoint: any;
        tooltipTimeoutId: number;
        magnifyTimeoutId: number;
        handleMouseMove(pt: any): any;
        buttonMappedTo(button: any, action: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private trackMouseHover;
        startHoverTimer(mousePosition: any): void;
        hoverTimeoutId: number;
        onHover(mousePosition: any): void;
        onClick(position: any, button: any): void;
        onTooltip(): void;
        onMagnify(): void;
        drawMagnifier(pointerPosition: any): void;
        magnifierRenderer: ShapeRenderer;
        /**
        * Begins in-place editing of the specified object.
        * @param {InplaceEditable} item The Diagram item whose text should be edited.
        * @param {Point} [point] A Point specifying where the in-place edit box should appear.
        * @param {Cell | LinkLabel} [editTarget] The element to use as a target for the inplace edit.
        */
        beginEdit(item: any, point?: Point, editTarget?: any | LinkLabel): void;
        /**
        * Raises validation events before an inplace edit.
        * @private
        */
        private validateInplaceEdit;
        /**
        * For internal use only.
        * @private
        */
        private getInplaceEditBounds;
        inplaceEditBounds: Rect;
        /**
        * For internal use only.
        * @private
        */
        private setInplaceEditBounds;
        /**
        * For internal use only.
        * @private
        */
        private focusInput;
        /**
        * Exits the in-place editing mode and either accepts or rejects the changes made to the item's text.
        * @param {Boolean} [accept] true to accept changes made to text; false to reject them.
        */
        endEdit(accept?: boolean): void;
        /**
        * For internal use only.
        * @private
        */
        private onResize;
        /**
        * Copies the current selection of items to the clipboard.
        * @param {Boolean} [systemClipboard] true to copy to the system clipboard, or false otherwise. The default value is false.
        */
        copyToClipboard(systemClipboard?: boolean): void;
        /**
        * Pastes diagram items from the clipboard.
        * @param {Number} offsetX Horizontal offset of pasted items from their original positions.
        * @param {Number} offsetY Vertical offset of pasted items from their original positions.
        * @param {Boolean} [systemClipboard] true to paste from the system clipboard, or false otherwise. The default value is false.
        * @param {Boolean} [unconnectedLinks] true to allow pasting arrows whose origin or destination node has not been copied; otherwise, false. The default value is false.
        */
        pasteFromClipboard(offsetX: number, offsetY: number, systemClipboard?: boolean, unconnectedLinks?: boolean): void;
        doPaste(json: any, offsetX: any, offsetY: any, unconnectedLinks: any): void;
        /**
        * Cuts the currently selected items to the clipboard.
        * @param {Boolean} [systemClipboard] true to copy to the system clipboard, or false otherwise. The default value is false.
        */
        cutToClipboard(systemClipboard?: boolean): void;
        /**
        * Scrolls the diagram to the specified point.
        * @param {Number} x A number specifying the new horizontal scroll position in the current unit of measure.
        * @param {Number} y A number specifying the new vertical scroll position in the current unit of measure.
        */
        scrollTo(x: number, y: number): void;
        pendingScrollTo: {
            x: number;
            y: number;
        };
        scrollStayInDoc(scrX: any, scrY: any, rcPage: any, diagBounds: any): void;
        set scrollX(arg: number);
        /**
        * Gets or sets the diagram's horizontal scroll position.
        * @type {Number}
        * @summary A number specifying the horizontal scroll position in the current unit of measure.
        */
        get scrollX(): number;
        set scrollY(arg: number);
        /**
        * Gets or sets the diagram's vertical scroll position.
        * @type {Number}
        * @summary A number specifying the vertical scroll position in the current unit of measure.
        */
        get scrollY(): number;
        get scrollPosition(): Point;
        /**
        * Zooms and scrolls the view to fit the specified Diagram region in component's area.
        * @param {Rect} rect A Rect instance specifying desired viewport position and size.
        */
        zoomToRect(rect: Rect): void;
        /**
        * Zooms the view to fit the Diagram contents in component's area.
        */
        zoomToFit(): void;
        /**
        * IZoomTarget implementation.
        */
        set zoomLevel(arg: any);
        /**
        * IZoomTarget implementation
        */
        setScroll(x: any, y: any): void;
        _behavior: any;
        currentBehavior: LinkNodesBehavior | DoNothingBehavior | DrawNodesBehavior | DrawLinksBehavior | ModifyBehavior | SelectOnlyBehavior | MagnifyBehavior | PanBehavior | MoveNodesBehavior;
        /**
        * Starts recording mouse and keyboard events for subsequent replay.
        */
        record(): void;
        /**
        * Stops recording mouse and keyboard events.
        * @returns {Array} An array of event records representing user's input.
        */
        stopRecording(): any[];
        /**
        * Replays a sequence of recorded mouse and keyboard events created by record and stopRecording methods.
        * @param {Array} recording An array of event records returned by stopRecording.
        * @param {Boolean} timer true to replay records using a timer, preserving their original relative timing, or false to replay them immediately.
        * @param {String} [savedState] A diagram JSON string that should be loaded before replaying recorded events.
        * @param {Number} [timerInterval] A number of milliseconds to use as a constant interval instead of relative timing.
        */
        replay(recording: any[], timer: boolean, savedState?: string, timerInterval?: number): void;
        onReplayTimeout(thisObj: any, recordings: any, index: any): void;
        onReplay(recording: any): void;
        /**
        * Exports the diagram as an image to a new HTML document and opens the browser's print dialog.
        * @param {Object} [options] An object, containing customization properties,
        * including printArea (defaults to diagram.getContentBounds()) and pageSize (defaults to diagramView.viewport).
        */
        print(options?: any): void;
        /**
        * Exports the diagram as an image to a new HTML document.
        * @param {Object} [options] An object, containing customization properties,
        * including printArea (defaults to diagram.getContentBounds()) and pageSize (defaults to diagramView.viewport).
        */
        printPreview(options?: any): void;
        printToDocument(document: any, options: any): void;
        setZoomFactorAndScroll(value: any, sx: any, sy: any): void;
        /**
    * For internal use only.
    * @private
    */
        private onScroll;
        checkAutoScroll(point: any): boolean;
        scrollTimeoutId: number;
        stopAutoScroll(): void;
        onAutoScroll(): void;
        /**
        * Returns the visible portion of the diagram area.
        * @type {Rect}
        * @summary A Rect instance specifying the viewport coordinates.
        */
        get viewport(): Rect;
        /**
        * Sets the zoom factor, preserving the on-screen position of the specified diagram point.
        * @param {Number} zoomFactor The new zoom factor.
        * @param {Point} pivotPoint A Point instance specifying the zoom center.
        */
        setZoomFactorPivot(zoomFactor: number, pivotPoint: Point): void;
        _virtualScroll: any;
        _tooltipDelay: any;
        _modificationStart: any;
        autoHandlesItem: any;
        _magnifierEnabled: any;
        _magnifierFactor: any;
        _magnifierWidth: any;
        _magnifierHeight: any;
        _magnifierFrameThickness: any;
        _magnifierShading: boolean;
        _magnifierShape: any;
        _magnifierFrameColor: any;
        _magnifierSecondaryFrameColor: any;
        /**
        * Gets an object that allows changing the function of keyboard modifier keys such as Ctrl and Alt.
        * @type {ModifierKeyActions}
        * @summary An instance of the ModifierKeyActions class.
        */
        get modifierKeyActions(): ModifierKeyActions;
        _leftButtonActions: any;
        _middleButtonActions: any;
        _rightButtonActions: any;
        _defaultControlTemplate: any;
        /**
        * Loads the diagram from an XML file.
        * @param {String} fileUrl The URL of an XML file where the data should be read from.
        * @param {Function} [onLoad] A callback that should be invoked if the file is loaded successfully.
        * @param {Function} [onError] A callback that should be invoked if the file could not be downloaded.
        */
        loadFromXml(fileUrl: string, onLoad?: Function, onError?: Function): void;
        loadView(elementName: any, parentElement: any, context: any): void;
        /**
        * Saves the diagram to an XML file.
        * @param {String} url A URL specifying where the diagram's XML should be posted to.
        */
        saveToXml(url: string): void;
        saveView(element: any, context: any): void;
        set licenseLocation(arg: string);
        /**
        * Gets or sets URL of the control's license file.
        * @type {String}
        * @summary A URL string that specifies the location of the license key.
        */
        get licenseLocation(): string;
        set licenseKey(arg: any);
    }
    import { CanvasControl } from "@mindfusion/controls";
    import { MouseInputDispatcher } from "Diagramming/Interaction/MouseInputDispatcher";
    import KeyboardInputDispatcher from "Diagramming/Interaction/KeyboardInputDispatcher";
    import { Point } from "@mindfusion/drawing";
    import { ModifierKeyActions } from "Diagramming/ModifierKeyActions";
    import { Shape } from "Diagramming/Shape";
    import MouseEventHandler from "Diagramming/Interaction/MouseEventHandler";
    import TouchEventHandler from "Diagramming/Interaction/TouchEventHandler";
    import KeyboardEventHandler from "Diagramming/Interaction/KeyboardEventHandler";
    import { Diagram } from "Diagramming/Diagram";
    import ShapeRenderer from "Diagramming/ShapeRenderer";
    import { LinkLabel } from "Diagramming/LinkLabel";
    import { Rect } from "@mindfusion/drawing";
    import { LinkNodesBehavior } from "Diagramming/LinkNodesBehavior";
    import { DoNothingBehavior } from "Diagramming/DoNothingBehavior";
    import { DrawNodesBehavior } from "Diagramming/DrawNodesBehavior";
    import { DrawLinksBehavior } from "Diagramming/DrawLinksBehavior";
    import { ModifyBehavior } from "Diagramming/ModifyBehavior";
    import { SelectOnlyBehavior } from "Diagramming/SelectOnlyBehavior";
    import { MagnifyBehavior } from "Diagramming/MagnifyBehavior";
    import { PanBehavior } from "Diagramming/PanBehavior";
    import { MoveNodesBehavior } from "Diagramming/MoveNodesBehavior";
}
declare module "Diagramming/NodeListView" {
    /**
    * @class A list view control that hosts DiagramNodes and supports drag-and-drop to DiagramView.
    * @augments CanvasControl
    */
    export class NodeListView extends CanvasControl {
        /**
        * Creates and initializes a new NodeListView from the specified element.
        * This method is static and can be called without creating an instance of the class.
        * @param {HTMLCanvasElement} element The DOM element that the NodeListView should be attached to.
        * @returns {NodeListView} A NodeListView object that represents
        * the newly created nodeListView.
        */
        static create(element: HTMLCanvasElement): NodeListView;
        /**
        * Returns the specified NodeListView object. This member is static and can be
        * invoked without creating an instance of the class.
        * @param {String} id The id of the NodeListView's element.
        * @returns {NodeListView} A NodeListView object with the specified id, if found; otherwise, null.
        */
        static find(id: string): NodeListView;
        /**
        * Creates an instance of NodeListView
        * @constructor
        * @param {HTMLCanvasElement} element The Canvas DOM Element this NodeListView is associated with.
        */
        constructor(element: HTMLCanvasElement);
        items: any[];
        boxes: any[];
        captions: any[];
        _padding: number;
        _iconSize: Size;
        _defaultNodeSize: Size;
        captionFont: Font;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to paint text in the NodeListView control.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get textColor(): string;
        defaultShape: string;
        preventDefaultTouch: boolean;
        _orientation: number;
        _shapeLibraryLocation: string;
        updateLayoutDelegate: () => void;
        beforeRepaintDragShapeDelegate: (sender: any, args: any) => void;
        mouseMoveDelegate: (e: any) => void;
        viewMouseMoveDelegate: (e: any) => void;
        viewMouseOutDelegate: (e: any) => void;
        mouseUpDelegate: (e: any) => void;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        /**
        * Sets the location of a shape library file containing custom shape definitions.
        * It can be set to a full URL of the file, or a relative file path.
        * @param {String} value The location of a shape library file containing custom shape definitions.
        */
        set shapeLibraryLocation(arg: string);
        /**
        * Gets the location of a shape library file containing custom shape definitions.
        * It can be set to a full URL of the file, or a relative file path.
        * @type {String}
        * @summary URL of a shape library file containing custom shape definitions.
        */
        get shapeLibraryLocation(): string;
        json: any;
        set iconSize(arg: Size);
        /**
        * Gets or sets the size of nodes displayed in this list view.
        * @type {Size}
        * @summary An instance of the Size class specifying node size.
        */
        get iconSize(): Size;
        set defaultNodeSize(arg: Size);
        /**
        * Gets or sets the default size of nodes created after dragging from this list view.
        * @type {Size}
        * @summary An instance of the Size class specifying node size.
        */
        get defaultNodeSize(): Size;
        set padding(arg: number);
        /**
        * Gets or sets the padding space between the NodeListView control and its contents.
        * @type {Number}
        * @summary A number that specifies the padding space size.
        */
        get padding(): number;
        set backColor(arg: string);
        /**
        * Gets or sets the background color of the control.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get backColor(): string;
        set orientation(arg: number);
        /**
        * Gets or sets the orientation of the view layout.
        * @type {Orientation}
        * @summary A member of the Orientation enumeration.
        */
        get orientation(): number;
        minVisibleFontSize: any;
        /**
        * For internal use only.
        * @private
        */
        private loadItem;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * For internal use only.
        * @private
        */
        private serializeItems;
        /**
        * For internal use only.
        * @private
        */
        private serializeCaptions;
        /**
        * Removes all items from the NodeListView.
        */
        clearAll(): void;
        elements: any[];
        onBeforeRepaintDragShape(sender: any, args: any): void;
        /**
        * For internal use only.
        * @private
        */
        private doRepaint;
        repainting: boolean;
        /**
        * For internal use only.
        * @private
        */
        private invalidateLayout;
        updateLayoutId: number;
        /**
        * For internal use only.
        * @private
        */
        private updateLayout;
        /**
        * For internal use only.
        * @private
        */
        private updateSize;
        /**
        * For internal use only.
        * @private
        */
        private get itemsSize();
        /**
        * Adds a node to the NodeListView.
        * @param {DiagramNode} node The node to add.
        * @param {String} [caption] The caption to display for the node.
        */
        addNode(node: DiagramNode, caption?: string): void;
        listCoords(length: any, breadth: any): {
            x: any;
            y: any;
        };
        listSize(length: any, breadth: any): {
            width: any;
            height: any;
        };
        len(size: any, newValue: any): any;
        brth(size: any, newValue: any): any;
        /**
        * For internal use only.
        * @private
        */
        private getBoxAt;
        /**
        * Gets the item at the specified location.
        * @param {Point} point The location where to look.
        * @returns {DiagramNode} The item found.
        */
        getNodeAt(point: Point): DiagramNode;
        /**
        * For internal use only.
        * @private
        */
        private selectBox;
        _draggedNode: any;
        /**
        * Selects the specified item.
        * @param {DiagramNode} item The item to select.
        */
        selectItem(item: DiagramNode): void;
        /**
        * Gets the nodes contained in this NodeListView.
        * @type {Array}
        * @summary An array of DiagramNode objects to show in the list view.
        */
        get nodes(): any[];
        get effectiveBackBrush(): any;
        _backColor: string;
        _textColor: any;
        onShapeLibraryLoad(): void;
        onShapeLibraryLoaded(success: any): void;
        onShapeLibraryError(): void;
        /**
        * Gets the currently dragged from the node list diagram node.
        * @type {DiagramNode}
        * @summary The dragged diagram node.
        */
        get draggedNode(): DiagramNode;
        set tooltipDelay(arg: number);
        /**
        * Gets or sets the delay before a tooltip is shown.
        * @type {Number}
        * @summary The tooltip delay in milliseconds.
        */
        get tooltipDelay(): number;
        _tooltipDelay: any;
        /**
        * For internal use only.
        * @private
        */
        private onMouseDown;
        /**
        * For internal use only.
        * @private
        */
        private onMouseLeftButtonDown;
        /**
        * For internal use only.
        * @private
        */
        private targetAsDiagramView;
        /**
        * For internal use only.
        * @private
        */
        private onMouseMove;
        /**
        * For internal use only.
        * @private
        */
        private onViewMouseMove;
        tooltipX: number;
        tooltipY: number;
        tooltipPoint: Point;
        tooltipTimeoutId: number;
        /**
        * For internal use only.
        * @private
        */
        private onViewMouseOut;
        onTooltip(): void;
        tooltipDiv: HTMLDivElement;
        clearTooltip(): void;
        /**
        * For internal use only.
        * @private
        */
        private removeDragShape;
        /**
        * For internal use only.
        * @private
        */
        private addDragShape;
        /**
        * For internal use only.
        * @private
        */
        private onMouseUp;
        /**
        * For internal use only.
        * @private
        */
        private onMouseLeftButtonUp;
        /**
        * For internal use only.
        * @private
        */
        private scaleFont;
        /**
        * For internal use only.
        * @private
        */
        private scaleStrokeThickness;
        /**
        * For internal use only.
        * @private
        */
        private emulateMouse;
        /**
        * For internal use only.
        * @private
        */
        private onTouchStart;
        lastTouch: Date | {
            button: number;
            clientX: number;
            clientY: number;
        };
        /**
        * For internal use only.
        * @private
        */
        private onTouchMove;
        /**
        * For internal use only.
        * @private
        */
        private onTouchEnd;
        /**
        * For internal use only.
        * @private
        */
        private setTargetView;
        targetView: any;
    }
    import { CanvasControl } from "@mindfusion/controls";
    import { Size } from "@mindfusion/drawing";
    import { Font } from "@mindfusion/drawing";
    import { DiagramNode } from "Diagramming/LoadOrder";
    import { Point } from "@mindfusion/drawing";
}
declare module "Diagramming/Overview" {
    /**
    * @class Provides a scaled-down view of a DiagramView contents and
    * allows scrolling and zooming with the mouse.
    * @augments CanvasControl
    */
    export class Overview extends CanvasControl {
        /**
        * Creates and initializes a new Overview from the specified element.
        * This method is static and can be called without creating an instance of the class.
        * @param {HTMLCanvasElement} element The DOM element that the overview should be attached to.
        * @returns {Overview} An Overview object that represents the newly created overview.
        */
        static create(element: HTMLCanvasElement): Overview;
        /**
        * Returns the specified Overview object. This member is static and can be
        * invoked without creating an instance of the class.
        * @param {String} id The id of the Overview's element.
        * @returns {Overview} An Overview object with the specified id, if found; otherwise, null.
        */
        static find(id: string): Overview;
        /**
        * Initializes a new instance of the Overview class.
        * @constructor
        * @param {HTMLCanvasElement} element The Canvas DOM Element this Overview is associated with.
        */
        constructor(element: HTMLCanvasElement);
        _diagramId: string;
        _backColor: string;
        _scaleFactor: number;
        set scaleMode(arg: number);
        /**
        * Gets or sets a value indicating whether to fit the whole diagram inside the overview control.
        * @type {ScaleMode}
        * @summary A member of the ScaleMode enumeration. The default value is FitAll.
        */
        get scaleMode(): number;
        _allowZoom: boolean;
        zooming: boolean;
        nofitScaleFactor: number;
        scrollZoneSize: number;
        set autoScrollAmount(arg: number);
        /**
        * Gets or sets the amount by which to auto-scroll the view
        * when the mouse leaves the view boundaries while drawing.
        * @type {Number}
        * @summary A number specifying the amount by which to auto-scroll.
        */
        get autoScrollAmount(): number;
        /**
        * @private
        */
        private _diagramView;
        diagramRepaintDelegate: (sender: any, args: any) => void;
        resizeDelegate: (e: any) => void;
        mouseMoveDelegate: (e: any) => boolean;
        mouseUpDelegate: (e: any) => void;
        get diagram(): import("Diagramming/Diagram").Diagram;
        get bounds(): Rect;
        set diagramView(arg: DiagramView);
        /**
        * Gets or sets the DiagramView shown by this Overview.
        * @type {DiagramView}
        * @summary The DiagramView shown by the overview.
        */
        get diagramView(): DiagramView;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        set dimColor(arg: string);
        /**
        * Gets or sets a color used to blend with the part of the diagram
        * that is not visible in target DiagramView.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get dimColor(): string;
        set backColor(arg: string);
        /**
        * Gets or sets the background color of the overview control.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get backColor(): string;
        set allowZoom(arg: boolean);
        /**
        * Gets or sets a value indicating whether users are allowed to zoom the diagram
        * by resizing the overview's viewport tracker rectangle.
        * @type {Boolean}
        * @summary true to let users zoom by resizing the tracker rectangle, or false otherwise.
        */
        get allowZoom(): boolean;
        minVisibleFontSize: any;
        prepare(): void;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        /**
        * Returns the visible portion of the diagram area.
        * @type {Rect}
        * @summary A Rect instance containing the viewport coordinates.
        */
        get viewport(): Rect;
        /**
        * For internal use only.
        * @private
        */
        private fit;
        /**
        * For internal use only.
        * @private
        */
        private init;
        scrollbarWidth: number;
        scrollbarHeight: number;
        trackerRect: Rect;
        resizerWidth: number;
        resizerHeight: number;
        /**
        * For internal use only.
        * @private
        */
        private recalculateCanvas;
        /**
        * For internal use only.
        * @private
        */
        private onDiagramRepaint;
        strokeScale: number;
        /**
        * For internal use only.
        * @private
        */
        private get trackerResizer();
        onMouseDown(e: any): void;
        currentMousePoint: Point;
        scrollTimeoutId: number;
        resizeEnabled: boolean;
        trackerW: number;
        trackerH: number;
        initialZoomFactor: number;
        startX: number;
        startY: number;
        savedScrollX: number;
        savedScrollY: number;
        startDrag: boolean;
        /**
        * For internal use only.
        * @private
        */
        private onMouseMove;
        /**
    
        * For internal use only.
        * @private
        */
        private moveTrackerRectIfExists;
        /**
        * For internal use only.
        * @private
        */
        private onMouseLeave;
        /**
        * For internal use only.
        * @private
        */
        private autoScrollIfNeeded;
        autoScrDX: number;
        autoScrDY: number;
        /**
        * For internal use only.
        * @private
        */
        private onScroll;
        checkAutoScroll(point: any): boolean;
        stopAutoScroll(): void;
        onAutoScroll(): void;
        scrollStayInDoc(scrX: any, scrY: any, rcPage: any, diagBounds: any): void;
        /**
        * For internal use only.
        * @private
        */
        private onMouseUp;
        /**
        * For internal use only.
        * @private
        */
        private changeCursor;
        /**
        * For internal use only.
        * @private
        */
        private onResize;
        /**
        * For internal use only.
        * @private
        */
        private shrinkToFit;
        /**
        * For internal use only.
        * @private
        */
        private setTrackerPosition;
        /**
        * For internal use only.
        * @private
        */
        private tryMoveTracker;
        /**
        * For internal use only.
        * @private
        */
        private tryMoveTrackerResizer;
        /**
        * For internal use only.
        * @private
        */
        private scrollPosFromTracker;
        get effectiveBackBrush(): any;
        get backgroundImage(): HTMLImageElement;
        get backgroundImageSize(): Size;
        get backgroundImageAlign(): number;
        _dimColor: string;
        set scaleFactor(arg: number);
        /**
        * Gets or sets a fixed scale factor to apply when FitAll is disabled.
        * @type {Number}
        * @summary A number specifying the scale as percentage.
        */
        get scaleFactor(): number;
        _scaleMode: any;
        _autoScrollAmount: any;
        /**
        * Gets the overview's horizontal scroll position.
        * @type {Number}
        * @summary A number specifying the horizontal scroll position in current unit of measure.
        */
        get scrollX(): number;
        /**
        * Gets the overview's vertical scroll position.
        * @type {Number}
        * @summary A number specifying the vertical scroll position in current unit of measure.
        */
        get scrollY(): number;
    }
    import { CanvasControl } from "@mindfusion/controls";
    import { Rect } from "@mindfusion/drawing";
    import { DiagramView } from "Diagramming/DiagramView";
    import { Point } from "@mindfusion/drawing";
    import { Size } from "@mindfusion/drawing";
}
declare module "Diagramming/PathFinder" {
    /**
    * @class Provides methods that help you find paths and cycles in a graph.
    */
    export class PathFinder {
        static convertPath(path: any): Path;
        static convertPaths(paths: any): any[];
        /**
        * Initializes a new instance of the PathFinder class.
        * @constructor
        * @param {Diagram} diagram An instance of the Diagram class in which to look for paths or cycles.
        */
        constructor(diagram: any);
        diagram: any;
        graph: any;
        /**
        * Finds and returns all paths that exist between two DiagramNode objects.
        * @param {DiagramNode} from The first DiagramNode in the Path.
        * @param {DiagramNode} to The last DiagramNode in the Path.
        * @param {Number} [maxPaths] The maximum number of paths to find.
        * @returns {Array} An array of Path objects; if no paths are found, the array is empty.
        * @remarks The returned Path instances include the from an to nodes.
        */
        findAllPaths(from: any, to: any, maxPaths?: number): any[];
        /**
        * Finds and returns the shortest path between two DiagramNode elements,
        * considering the Weight of the nodes, the Weight of the links or both.
        * @param {DiagramNode} from The first DiagramNode in the Path.
        * @param {DiagramNode} to The last DiagramNode in the Path.
        * @param {Boolean} [useNodeWeights] If true, the Path with minimal total weight is found, summing the Weight of nodes in the Path.
        * @param {Boolean} [useLinkWeights] If true, the Path with minimal total weight is found, summing the Weight of links in the Path.
        * @returns {Path} A Path instance that represents the shortest Path found or null if there is no Path connecting from and to.
        */
        findShortestPath(from: any, to: any, useNodeWeights?: boolean, useLinkWeights?: boolean): Path;
        /**
        * Finds the longest path between the specified DiagramNode objects.
        * @param {DiagramNode} [from] The first DiagramNode element in the Path.
        * @param {DiagramNode} [to] The last DiagramNode element in the Path.
        * @returns {Path} A Path instance that represents the longest path found; null if there is no Path connecting from and to.
        */
        findLongestPath(from?: any, to?: any): Path;
        /**
        * Detects whether the specified DiagramNode participates in a cycle.
        * @param {DiagramNode} participant A DiagramNode element which should participate in the found cycle.
        * @returns {Path} A Path instance that represents the found cycle; null if no cycle is detected.
        */
        findCycle(participant: any): Path;
        /**
        * Finds all cycles in the underlying diagram.
        * @returns {Array} An array of Path objects; if no cycles are detected, the array is empty.
        */
        findAllCycles(): any[];
    }
    class Path {
        /**
        * Initializes a new instance of the Path class.
        * @constructor
        * @class Represents a sequence of connected DiagramNode and DiagramLink elements.
        */
        constructor(path: any);
        /**
        * A collection of all DiagramNode elements participating in the path.
        * @type {DiagramNode}
        */
        nodes: any;
        /**
        * A collection of all DiagramLink elements participating in the path.
        * @type {DiagramLink}
        */
        links: any;
        /**
        * A collection of all DiagramItem elements participating in the path.
        * @type {DiagramItem}
        * @remarks The collection contains consecutive DiagramNode and DiagramLink objects.
        */
        items: any;
        /**
        * Calculates the weight of this Path by accumulating the
        * Weight of all participating Diagram elements.
        * @param {Boolean} [incNodes] A boolean value, which specifies whether the Weight of
        * DiagramNode elements should be considered.
        * @param {Boolean} [incLinks] A boolean value, which specifies whether the Weight of
        * DiagramLink elements should be considered.
        * @returns {Number} A double value that represents the total weight of the elements
        * in this Path according to the incNodes and incLinks parameters.
        */
        getWeight(incNodes?: boolean, incLinks?: boolean): number;
        /**
        * Gets the length of the Path expressed as the number of Links
        * participating in it.
        * @returns {Number} An integer value that represents the number of edges (links) in the path.
        */
        getLength(): number;
    }
    export {};
}
declare module "Diagramming/Ruler" {
    /**
    * @class Provides horizontal and vertical scales that help users measure and align diagram items.
    * @augments Control
    */
    export class Ruler extends Control {
        /**
        * Creates and initializes a new Ruler from the specified element.
        * This method is static and can be called without creating an instance of the class.
        * @param {HTMLDivElement} element The DOM element that the ruler should be attached to.
        * @returns {Ruler} A Ruler object that represents
        * the newly created ruler.
        */
        static create(element: HTMLDivElement): Ruler;
        /**
        * Returns the specified Ruler object. This member is static and can be
        * invoked without creating an instance of the class.
        * @param {String} id The id of the Ruler's element.
        * @returns {Ruler} A Ruler object with the specified id, if found; otherwise, null.
        */
        static find(id: string): Ruler;
        /**
        * Initializes a new instance of the Ruler class.
        * @constructor
        * @param {HTMLDivElement} element The Canvas DOM Element this Ruler is associated with.
        */
        constructor(element: HTMLDivElement);
        _horizontalScaleVisible: boolean;
        _verticalScaleVisible: boolean;
        _diagramId: string;
        scaleSize: number;
        _unit: number;
        _backColor: string;
        _foreColor: string;
        _projectionColor: string;
        _enableGuides: boolean;
        _guideColor: string;
        _textColor: string;
        _pointerColor: string;
        repaintDelegate: () => void;
        mouseMoveDelegate: (e: any) => void;
        resizeDelegate: () => void;
        get diagram(): import("Diagramming/Diagram").Diagram;
        set diagramView(arg: DiagramView);
        /**
        * Gets or sets the DiagramView shown by this Ruler.
        * @type {DiagramView}
        * @summary The DiagramView attached to the ruler.
        */
        get diagramView(): DiagramView;
        _diagramView: DiagramView;
        /**
        * For internal use only.
        * @private
        */
        private fromJson;
        set unit(arg: GraphicsUnit);
        /**
        * Gets the measure units displayed in the ruler scales.
        * @type {GraphicsUnit}
        * @summary A member of the GraphicsUnit enumeration.
        */
        get unit(): GraphicsUnit;
        set backColor(arg: string);
        /**
        * Gets or sets the background color of the control.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get backColor(): string;
        set foreColor(arg: string);
        /**
        * Gets or sets the foreground color of the control.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get foreColor(): string;
        set projectionColor(arg: string);
        /**
        * Gets or sets the color used to paint the projection of the active node.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get projectionColor(): string;
        set guideColor(arg: string);
        /**
        * Gets or sets the color of the alignment guide lines.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get guideColor(): string;
        set textColor(arg: string);
        /**
        * Gets or sets the color used to paint text in the ruler.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get textColor(): string;
        set pointerColor(arg: string);
        /**
        * Gets or sets the color of the mouse pointer's projections.
        * @type {String}
        * @summary A string specifying the color name or hexadecimal value.
        */
        get pointerColor(): string;
        set enableGuides(arg: boolean);
        /**
        * Gets or sets a value indicating whether the alignment guides are enabled.
        * @type {Boolean}
        * @summary true to allow aligning diagram items using ruler guides, or false otherwise. The default is true.
        */
        get enableGuides(): boolean;
        set negatedX(arg: boolean);
        /**
        * Gets or sets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left.
        * @type {Boolean}
        * @summary true if the horizontal scale should show negated values, or false otherwise. The default value is false.
        */
        get negatedX(): boolean;
        set negatedY(arg: boolean);
        /**
        * Gets or sets whether the vertical scale should show negated values, simulating that the coordinate system's Y axis grows to the top.
        * @type {Boolean}
        * @summary true if the vertical scale should show negated values, or false otherwise. The default value is false.
        */
        get negatedY(): boolean;
        set projectRotatedBounds(arg: boolean);
        /**
        * Gets or sets whether projections of nodes on ruler's scales reflect their rotated boundaries.
        * @type {Boolean}
        * @summary true if node's projection should match the boundaries of rotated node shape, or false to ignore rotation and project only the coordinates of node's Bounds. The default value is true.
        */
        get projectRotatedBounds(): boolean;
        set horizontalScaleVisible(arg: boolean);
        /**
        * Gets or sets a value indicating whether the horizontal ruler scale is visible.
        * @type {Boolean}
        * @summary true to display the horizontal scale, or false otherwise. The default is true.
        */
        get horizontalScaleVisible(): boolean;
        set verticalScaleVisible(arg: boolean);
        /**
        * Gets or sets a value indicating whether the vertical ruler scale is visible.
        * @type {Boolean}
        * @summary true to display the vertical scale, or false otherwise. The default is true.
        */
        get verticalScaleVisible(): boolean;
        prepare(): void;
        /**
        * For internal use only.
        * @private
        */
        private toJson;
        init(): void;
        horizontalScale: Scale;
        verticalScale: Scale;
        updateScales(): void;
        bounds: import("Drawing/Rect").Rect;
        refreshScales(): void;
        removeScales(): void;
        /**
        * For internal use only.
        * @private
        */
        private onDiagramMouseMove;
        /**
        * For internal use only.
        * @private
        */
        private onDiagramPaint;
        /**
        * For internal use only.
        * @private
        */
        private onResize;
        _negatedX: any;
        _negatedY: any;
        _projectRotatedBounds: any;
    }
    import { Control } from "@mindfusion/controls";
    import { DiagramView } from "Diagramming/DiagramView";
    import { GraphicsUnit } from "@mindfusion/drawing";
    class Scale extends Canvas {
        constructor(element: any, parent: any, orientation: any);
        element: any;
        parent: any;
        orientation: any;
        unit: any;
        foreColor: any;
        backColor: any;
        projectionColor: any;
        enableGuides: any;
        guideColor: any;
        textColor: any;
        pointerColor: any;
        aligning: boolean;
        alignedNodes: Map<any, any>;
        mouseUpDelegate: (e: any) => void;
        onMouseDown(e: any): void;
        ptInitial: any;
        ptCurrent: any;
        align: number;
        onMouseMove(e: any): void;
        e: any;
        onMouseUp(e: any): void;
        onDiagramMouseMove(e: any): void;
        onDiagramPaint(): void;
        drawProjection(context: any): void;
        drawMarks(context: any): void;
        drawCursorProjection(e: any, context: any): void;
        calcPixelsPerUnit(): number;
        calcUnitInterval(pixelsPerUnit: any): number;
        getThresh(): number;
    }
    import { Canvas } from "@mindfusion/controls";
    export {};
}
declare module "Diagramming/SvgExporter" {
    /**
    * @namespace MindFusion.Diagramming
    */
    /**
    * @class Creates SVG (Scalable Vector Graphics) drawings from the content of Diagram objects.
    */
    export class SvgExporter {
        /**
        * Creates an SVG element representing the specified diagram.
        * @param {Diagram} diagram A reference to the diagram to be exported.
        * @param {Document} [parentDoc] The document to export to.
        * @returns {Object} A DOM SVG element.
        */
        exportElement(diagram: any, parentDoc?: Document): any;
        /**
        * Creates an SVG document representing the specified diagram.
        * @param {Diagram} diagram A reference to the diagram to be exported.
        * @returns {Object} A string containing the SVG document's content.
        */
        exportString(diagram: any): any;
    }
}
declare module "@mindfusion/diagramming" {
    export { AddItemCommand } from "Diagramming/AddItemCommand";
    export { AnchorPattern } from "Diagramming/AnchorPattern";
    export { AnchorPoint } from "Diagramming/AnchorPoint";
    export { BehaviorBase } from "Diagramming/BehaviorBase";
    export { Cell } from "Diagramming/Cell";
    export { ChangeItemCommand } from "Diagramming/ChangeItemCommand";
    export { Command } from "Diagramming/Command";
    export { CompatConfig } from "Diagramming/CompatConfig";
    export { CompositeCommand } from "Diagramming/CompositeCommand";
    export { ConnectionPoint } from "Diagramming/ConnectionPoint";
    export { Diagram } from "Diagramming/Diagram";
    export { DiagramView } from "Diagramming/DiagramView";
    export { DoNothingBehavior } from "Diagramming/DoNothingBehavior";
    export { DrawLinksBehavior } from "Diagramming/DrawLinksBehavior";
    export { DrawNodesBehavior } from "Diagramming/DrawNodesBehavior";
    export { LengthType, Cursors, ImageAlign, Alignment, CellFrameStyle, AdjustmentHandles, Behavior, Action, ConnectionStyle, MarkStyle, ShadowsStyle, ShowAnchors, GridStyle, ColumnStyle, LinkShape, RelativeToLink, FitSize, EffectPhase, GlassEffectType, HandlesStyle, LinkCrossings, ModificationStart, AutoResize, ModifierKeyAction, MouseButtonActions, LinkTextStyle, SimpleShape, Orientation, SaveToStringFormat, ScaleMode, ExpandButtonAction, DelKeyAction } from "Diagramming/Enum";
    export { ItemEventArgs, LinkEventArgs, NodeEventArgs, CellEventArgs, CellValidationEventArgs, ComponentEventArgs, SelectionEventArgs, SerializeTagEventArgs, DiagramEventArgs, InplaceEditEventArgs, HeaderEventArgs, HeaderResizeEventArgs, TreeItemEventArgs, SelectionChangedEventArgs } from "Diagramming/EventArgs";
    export { Events } from "Diagramming/Events";
    export { Factory } from "Diagramming/Factory";
    export { FoldContainerCommand } from "Diagramming/FoldContainerCommand";
    export { GridRouter } from "Diagramming/GridRouter";
    export { HandlesVisualStyle } from "Diagramming/HandlesVisualStyle";
    export { LinkLabel } from "Diagramming/LinkLabel";
    export { LinkNodesBehavior } from "Diagramming/LinkNodesBehavior";
    export { DiagramItem, DiagramNode, DiagramLink, CompositeNode, ContainerNode, ControlNode, TableNode, ShapeNode, SvgNode, VideoNode, FreeFormNode, TreeViewNode, Selection, DummyNode } from "Diagramming/LoadOrder";
    export { MagnifyBehavior } from "Diagramming/MagnifyBehavior";
    export { Manipulator } from "Diagramming/Manipulator";
    export { ModifierKeyActions } from "Diagramming/ModifierKeyActions";
    export { ModifyBehavior } from "Diagramming/ModifyBehavior";
    export { MoveNodesBehavior } from "Diagramming/MoveNodesBehavior";
    export { NodeEffect, GlassEffect, AeroEffect } from "Diagramming/NodeEffects";
    export { NodeListView } from "Diagramming/NodeListView";
    export { Overview } from "Diagramming/Overview";
    export { PanBehavior } from "Diagramming/PanBehavior";
    export { PathFinder } from "Diagramming/PathFinder";
    export { RemoveItemCommand } from "Diagramming/RemoveItemCommand";
    export { ResizeTableColumnCommand } from "Diagramming/ResizeTableColumnCommand";
    export { ResizeTableRowCommand } from "Diagramming/ResizeTableRowCommand";
    export { Router } from "Diagramming/Router";
    export { Ruler } from "Diagramming/Ruler";
    export { ScrollBar } from "Diagramming/ScrollBar";
    export { Scroller } from "Diagramming/Scroller";
    export { ScrollTableCommand } from "Diagramming/ScrollTableCommand";
    export { SelectOnlyBehavior } from "Diagramming/SelectOnlyBehavior";
    export { Shape } from "Diagramming/Shape";
    export { ShapeLibrary } from "Diagramming/ShapeLibrary";
    export { Shapes } from "Diagramming/Shapes";
    export { Style } from "Diagramming/Style";
    export { SvgExporter } from "Diagramming/SvgExporter";
    export { SvgContent } from "Diagramming/SvgNode";
    export { Theme } from "Diagramming/Theme";
    export { TreeViewItem } from "Diagramming/TreeViewItem";
    export { XmlPersistContext } from "Diagramming/XmlPersistContext";
    export { Border } from "Diagramming/Components/Border";
    export { Button } from "Diagramming/Components/Button";
    export { GridColumn } from "Diagramming/Components/GridColumn";
    export { GridPanel } from "Diagramming/Components/GridPanel";
    export { GridRow } from "Diagramming/Components/GridRow";
    export { Panel } from "Diagramming/Components/Panel";
    export { SimplePanel } from "Diagramming/Components/SimplePanel";
    export { StackPanel } from "Diagramming/Components/StackPanel";
    export { CreateLinkController } from "Diagramming/Interaction/CreateLinkController";
    export { CreateNodeController } from "Diagramming/Interaction/CreateNodeController";
    export { CreateSelectionController } from "Diagramming/Interaction/CreateSelectionController";
    export { ModifyLinkController } from "Diagramming/Interaction/ModifyLinkController";
    export { ModifyNodeController } from "Diagramming/Interaction/ModifyNodeController";
    export { ModifySelectionController } from "Diagramming/Interaction/ModifySelectionController";
    export { MouseInputDispatcher } from "Diagramming/Interaction/MouseInputDispatcher";
    export { PanController } from "Diagramming/Interaction/PanController";
    export { Lanes } from "Diagramming/Lanes";
}

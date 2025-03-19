MindFusion = {
	Animations: {
		Animation: function (item, options, onUpdateCallback, onCustomFunctionCallback) {
			/// <summary>Represents an object that is used to animate diagram items on the canvas.</summary>
			/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The diagram item to animate.</param>
			/// <param name="options" type="Object" optional="true">Optional. An object used to specify various property values for the animation.</param>
			/// <param name="onUpdateCallback" type="Function" optional="true">Optional. A callback function called on every animation tick.</param>
			/// <param name="onCustomFunctionCallback" type="Function" optional="true">Optional. A callback function called when the animation type is set to Custom.</param>
			/// <field name="animationType" type="MindFusion.Animations.AnimationType">Gets or sets the type of the animation.</field>
			/// <field name="duration" type="Number">Gets or sets the duration of the animation function in milliseconds.</field>
			/// <field name="easingType" type="MindFusion.Animations.EasingType">Gets or sets the easing type of the animation.</field>
			/// <field name="fromValue" type="Object">Gets or sets the initial value of the property that will be animated.</field>
			/// <field name="isRunning" type="Boolean">Indicates whether the animation is currently running.</field>
			/// <field name="param" type="Object">Gets or sets an optional value passed to the animation function.</field>
			/// <field name="progress" type="Number">Gets the progress of the current animation iteration.</field>
			/// <field name="repeat" type="Boolean">Gets or sets a value indicating whether to restart the animation after it completes.</field>
			/// <field name="reverse" type="Boolean">Gets or sets a value indicating whether to swap the from and to values after an animation loop completes.</field>
			/// <field name="toValue" type="Object">Gets or sets the target value of the property that will be animated.</field>
		},
		Events: function () {
			/// <summary>Defines all events raised in the Animations namespace.</summary>
			/// <field name="animationComplete" type="String">Raised when an Animation is complete.</field>
		},
		__namespace: true
	},
	Collections: {
		Grid: function () {
			/// <summary>Represents a collection of tabular data.</summary>
		},
		ItemEventArgs: function (item) {
			/// <summary>Contains the arguments passed to event handlers of the ObservableCollection class.</summary>
			/// <param name="item" type="Object">The item related to the event.</param>
		},
		ObservableCollection: function () {
			/// <summary>Represents a collection that provides notifications when items get added or removed.</summary>
		},
		Queue: function () {
			/// <summary>Represents a first-in, first-out collection of objects.</summary>
		},
		__namespace: true
	},
	Controls: {
		CancelEventArgs: function () {
			/// <summary>Provides a value to use with cancellable events.</summary>
			/// <field name="cancel" type="Boolean">Gets or sets a value indicating whether to allow the current operation.</field>
			/// <field name="handled" type="Boolean">Gets or sets a value indicating whether the event has been handled. Inherited from EventArgs.</field>
		},
		Canvas: function () {
			/// <summary>Handles drawing on a CanvasRenderingContext2D.</summary>
			/// <field name="bounds" type="MindFusion.Controls.Rect">Gets the underlying Canvas element's logical bounds.</field>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets or sets the unit of measure used for logical coordinates.</field>
			/// <field name="minVisibleFontSize" type="Number">Gets or sets a threshold value that hides text if scaled font sizes become smaller.</field>
			/// <field name="scale" type="Number">Gets the current scale of this Canvas.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled. Inherited from Disposable.</field>
		},
		CanvasControl: function (element, canvas) {
			/// <summary>The CanvasControl class represents a wrapper class for the HTML5 Canvas element.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this CanvasControl is associated with.</param>
			/// <param name="canvas" type="Canvas" optional="true">Optional. Canvas. The Canvas instance this CanvasControl is associated with.</param>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets the unit of measure used for logical coordinates.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled. Inherited from Disposable.</field>
		},
		Control: function (element) {
			/// <summary>A base class for MindFusion controls.</summary>
			/// <param name="element" type="HTMLElement">HTMLElement. The DOM Element this Control is associated with.</param>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
		},
		Disposable: function () {
			/// <summary>Disposable abstract class.</summary>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
		},
		DomUtils: function () {
			/// <summary>Contains DOM-related helper functions.</summary>
		},
		EventArgs: function () {
			/// <summary>The base type of classes that define arguments passed to event handler functions.</summary>
			/// <field name="handled" type="Boolean">Gets or sets a value indicating whether the event has been handled.</field>
		},
		Events: function () {
			/// <summary>Defines all events raised in the Controls namespace.</summary>
			/// <field name="controlLoaded" type="String">Raised when the control is loaded.</field>
		},
		ZoomControl: function (element) {
			/// <summary>The ZoomControl lets users zoom and pan a target view control interactively.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this ZoomControl is associated with.</param>
			/// <field name="activeColor" type="String">Gets or sets the color used to render depressed buttons.</field>
			/// <field name="autoPostBack" type="Boolean">Gets or sets a value indicating whether the control will post back to the server when the control's value has changed.</field>
			/// <field name="backColor" type="String">Gets or sets the background color of the control.</field>
			/// <field name="borderColor" type="String">Gets or sets the color of ZoomControl elements' borders.</field>
			/// <field name="cornerRadius" type="Number">Gets or sets the corner radius of rounded child elements.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
			/// <field name="fill" type="String">Gets or sets the color used to fill the ZoomControl elements.</field>
			/// <field name="innerColor" type="String">Gets or sets the color of plus, minus and arrow icons.</field>
			/// <field name="maxZoomFactor" type="Number">Gets or sets the maximum zoom level allowed to set through this control.</field>
			/// <field name="minZoomFactor" type="Number">Gets or sets the minimum zoom level allowed to set through this control.</field>
			/// <field name="padding" type="Number">Gets or sets the padding of the control's contents.</field>
			/// <field name="scrollStep" type="Number">Gets or sets the scroll offset added when users click the pan arrows.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color of the control elements' shadow.</field>
			/// <field name="showLabel" type="Boolean">Gets or sets a value indicating whether the label that shows the current zoom level should be visible.</field>
			/// <field name="snapToZoomStep" type="Boolean">Gets or sets a value indicating whether the trackbar should snap to zoomStep values when dragged.</field>
			/// <field name="target" type="MindFusion.Controls.Control">Gets or sets the control modified by this ZoomControl.</field>
			/// <field name="textColor" type="String">Gets or sets the color of the the label that shows the current zoom level.</field>
			/// <field name="tickPosition" type="MindFusion.Controls.TickPosition">Gets or sets the current tick position of the trackbar.</field>
			/// <field name="zoomFactor" type="Number">Gets or sets the zoom factor.</field>
			/// <field name="zoomStep" type="Number">Gets or sets the amount by which to change zoom level when + and - buttons are clicked.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets the unit of measure used for logical coordinates. Inherited from CanvasControl.</field>
		},
		__namespace: true
	},
	Diagramming: {
		Lanes: {
			Cell: function () {
				/// <summary>Represents a single cell in a lane grid.</summary>
				/// <field name="style" type="Lanes.Style">Gets or sets the style of the cell.</field>
				/// <field name="text" type="String">Gets or sets the text of the cell.</field>
			},
			Grid: function () {
				/// <summary>Represents a lane grid.</summary>
				/// <field name="allowInplaceEdit" type="Boolean">Gets or sets a value indicating whether grid cells' text can be edited interactively.</field>
				/// <field name="allowResizeHeaders" type="Boolean">Gets or sets a value indicating whether users can resize the headers of the grid interactively.</field>
				/// <field name="columnCount" type="Number">Gets or sets the number of columns in the grid.</field>
				/// <field name="columnHeaderBounds" type="MindFusion.Diagramming.Lanes.Rect">Returns the bounding rectangle of all column headers.</field>
				/// <field name="columnHeaders" type="Array">Gets the collection of topmost column headers.</field>
				/// <field name="columnHeadersHeights" type="Array">Gets or sets an array of&#160;numbers specifying the heights of individual column levels.</field>
				/// <field name="headersOnTop" type="Boolean">Gets or sets a value indicating whether lane headers appear at the top of the z-order above all diagram items.</field>
				/// <field name="hookHeaders" type="Boolean">Gets or sets a value indicating whether headers will be anchored to their corresponding side.</field>
				/// <field name="leftMargin" type="Number">Gets or sets the offset of the lane grid from left side of diagram's bounds.</field>
				/// <field name="minHeaderSize" type="Number">Gets or sets the minimum size of a header.</field>
				/// <field name="rowCount" type="Number">Gets or sets the number of rows in the grid.</field>
				/// <field name="rowHeaderBounds" type="MindFusion.Diagramming.Lanes.Rect">Returns the bounding rectangle of all row headers.</field>
				/// <field name="rowHeaders" type="Array">Gets the collection of topmost row headers.</field>
				/// <field name="rowHeadersWidths" type="Array">Gets or sets an array of numbers specifying the widths of individual row levels.</field>
				/// <field name="style" type="Lanes.Style">Gets the default style of the grid.</field>
				/// <field name="topLeftAreaStyle" type="Lanes.Style">Gets or sets the style of the area above all row headers and to the left of all column headers.</field>
				/// <field name="topLeftAreaText" type="String">Gets or sets the text displayed in the top left area.</field>
				/// <field name="topMargin" type="Number">Gets or sets the offset of the lane grid from top side of diagram's bounds.</field>
				/// <field name="totalColumnHeight" type="Number">Gets the total height of all column headers.</field>
				/// <field name="totalRowWidth" type="Number">Gets the total width of all row headers.</field>
			},
			Header: function () {
				/// <summary>Represents a header in a lane grid.</summary>
				/// <field name="height" type="Number">Gets or sets the height of this header.</field>
				/// <field name="isColumnHeader" type="Boolean">Gets a value indicating whether this header is a column header.</field>
				/// <field name="isRowHeader" type="Boolean">Gets a value indicating whether this header is a row header.</field>
				/// <field name="resizeType" type="MindFusion.Diagramming.Lanes.ResizeType">Gets or sets how a row or a column is resized relatively to its parent.</field>
				/// <field name="rotateTitle" type="Boolean">Gets or sets a value indicating whether to rotate the header caption at 90 degrees.</field>
				/// <field name="style" type="MindFusion.Diagramming.Lanes.Style">Gets or sets the style of this header.</field>
				/// <field name="subHeaders" type="Array">Gets a collection of the subheaders of this header.</field>
				/// <field name="title" type="String">Gets or sets the header caption.</field>
				/// <field name="width" type="Number">Gets or sets the width of this header.</field>
			},
			Style: function () {
				/// <summary>Encapsulates the appearance properties of an element in a lane grid.</summary>
				/// <field name="backgroundBrush" type="Object">Gets or sets the background brush of this style.</field>
				/// <field name="bottomBorderPen" type="String">Gets or sets the color used to stoke the bottom border of elements with this style.</field>
				/// <field name="bottomBorderThickness" type="Number">Gets or sets the width of the bottom border of elements with this style.</field>
				/// <field name="fontName" type="String">Gets or sets the name of the font used to draw texts with this style.</field>
				/// <field name="fontSize" type="Number">Gets or sets the size of the font used to draw texts with this style.</field>
				/// <field name="leftBorderPen" type="String">Gets or sets the color used to stoke the left border of elements with this style.</field>
				/// <field name="leftBorderThickness" type="Number">Gets or sets the width of the left border of elements with this style.</field>
				/// <field name="lineAlignment" type="MindFusion.Diagramming.Lanes.Alignment">Gets or sets a value indicating how to vertically align texts drawn with this style.</field>
				/// <field name="rightBorderPen" type="String">Gets or sets the color used to stoke the right border of elements with this style.</field>
				/// <field name="rightBorderThickness" type="Number">Gets or sets the width of the right border of elements with this style.</field>
				/// <field name="textAlignment" type="MindFusion.Diagramming.Lanes.Alignment">Gets or sets a value indicating how to horizontally align texts drawn with this style.</field>
				/// <field name="textColor" type="String">Gets or sets the color used to draw texts with this style.</field>
				/// <field name="topBorderPen" type="String">Gets or sets the color used to stoke the top border of elements with this style.</field>
				/// <field name="topBorderThickness" type="Number">Gets or sets the width of the top border of elements with this style.</field>
			},
			__namespace: true
		},
		AddItemCommand: function (diagram, item) {
			/// <summary>Implements creation of new diagram items.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="DiagramItem">A new DiagramItem that should be added to the Diagram.</param>
		},
		AeroEffect: function () {
			/// <summary>Represents an effect that adds semitransparency to the node and emphasizes its outline by adding a shade and an inner stroke.</summary>
			/// <field name="innerOutlineColor" type="String">Gets or sets the color of the inner outline.</field>
			/// <field name="opacity" type="Number">Gets or sets the opacity to apply to node's background.</field>
			/// <field name="shadeColor" type="String">Gets or sets the color of the shade.</field>
		},
		AnchorPattern: function (points, patternId) {
			/// <summary>The AnchorPattern class represents a set of anchor points, which specify the exact locations where links are allowed to connect to nodes.</summary>
			/// <param name="points" type="Array">Contains the initial set of AnchorPoint instances for the new pattern.</param>
			/// <param name="patternId" type="String" optional="true">Optional. String. An unique identifier for this anchor pattern.</param>
			/// <field name="id" type="String">Gets the unique identifier of this AnchorPattern.</field>
			/// <field name="points" type="Array">Gets or sets the anchor points in this pattern.</field>
		},
		AnchorPoint: function (x, y, allowIncoming, allowOutgoing, style, color, size) {
			/// <summary>The AnchorPoint class represents a location in a node to which links are allowed to connect.</summary>
			/// <param name="x" type="Number">Number. The horizontal position of the anchor expressed as percent of the width of a node.</param>
			/// <param name="y" type="Number">Number. The vertical position of the anchor expressed as percent of the height of a node.</param>
			/// <param name="allowIncoming" type="Boolean" optional="true">Optional. Boolean. Specifies whether incoming links can connect to this anchor.</param>
			/// <param name="allowOutgoing" type="Boolean" optional="true">Optional. Boolean. Specifies whether outgoing links can connect to this anchor.</param>
			/// <param name="style" type="MarkStyle" optional="true">Optional. MarkStyle. Defines how the anchor point is marked visually.</param>
			/// <param name="color" type="String" optional="true">Optional. String. Defines the color with which the anchor mark is painted.</param>
			/// <param name="size" type="Number" optional="true">Optional. Number. Defines the size of the anchor mark.</param>
			/// <field name="allowIncoming" type="Boolean">Gets or sets a value indicating whether the anchor point accepts incoming connections.</field>
			/// <field name="allowOutgoing" type="Boolean">Gets or sets a value indicating whether the anchor point accepts outgoing connections.</field>
			/// <field name="color" type="String">Gets or sets the color of the anchor point mark.</field>
			/// <field name="column" type="Number">Gets or sets the column index of a cell with which the anchor point is associated.</field>
			/// <field name="markStyle" type="MindFusion.Diagramming.MarkStyle">Gets or sets the appearance of the anchor point mark.</field>
			/// <field name="size" type="Number">Gets or sets the size of the anchor point mark.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this anchor point.</field>
			/// <field name="toolTip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over an anchor point mark.</field>
			/// <field name="x" type="Number">Gets or sets the horizontal position of the anchor point expressed as percentage of a node's width.</field>
			/// <field name="y" type="Number">Gets or sets the vertical position of the anchor point expressed as percentage of a node's height.</field>
		},
		BehaviorBase: function () {
			/// <summary>An abstract base class for types that define how the control reacts to users' actions with a mouse or other pointing devices.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object.</field>
		},
		Border: function () {
			/// <summary>Represents a panel that draws a border around its child components.</summary>
		},
		Builder: function () {
			/// <summary>Provides support for fluent API.</summary>
		},
		Button: function () {
			/// <summary>Represents a button component for CompositeNodes.</summary>
			/// <field name="text" type="String">Gets or sets the text caption displayed in this button.</field>
		},
		Cell: function () {
			/// <summary>Represents a cell of a TableNode.</summary>
			/// <field name="brush" type="Object">Gets or sets the brush used to paint the cell's background.</field>
			/// <field name="columnSpan" type="Number">Gets or sets the number of columns spanned by this cell.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render cell's text.</field>
			/// <field name="image" type="MindFusion.Diagramming.HTMLImageElement">Gets or sets the image displayed by this cell.</field>
			/// <field name="imageAlign" type="MindFusion.Diagramming.ImageAlign">Gets or sets the alignment of cell's image.</field>
			/// <field name="imageContent" type="String">Gets or sets a Base64-encoded image to display inside this cell.</field>
			/// <field name="imageLocation" type="String">Gets or sets URL of the image to display inside this cell.</field>
			/// <field name="imagePadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between cell's borders and image.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of cell's text.</field>
			/// <field name="rowSpan" type="Number">Gets or sets the number of rows spanned by this cell.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this cell.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this cell.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of cell's text.</field>
			/// <field name="textColor" type="String">Gets or sets the cell's text color.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between cell's borders and its text.</field>
			/// <field name="tooltip" type="String">Gets or sets the tooltip text that should be displayed when the mouse hovers over this cell.</field>
		},
		CellEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of table cell -related events.</summary>
			/// <field name="cell" type="MindFusion.Diagramming.Cell">Gets the cell related to the event.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it.</field>
		},
		CellValidationEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of table row and column resizing related events.</summary>
			/// <field name="cell" type="MindFusion.Diagramming.Cell">Gets the cell related to the event. Inherited from CellEventArgs.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context. Inherited from CellEventArgs.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed. Inherited from CellEventArgs.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user. Inherited from CellEventArgs.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it. Inherited from CellEventArgs.</field>
		},
		ChangeItemCommand: function (diagram, item) {
			/// <summary>Handles undo / redo of property changes.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="DiagramItem">The DiagramItem that will be modified.</param>
		},
		Command: function (diagram) {
			/// <summary>Represents an action that changes the diagram and whose effects can be undone.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
		},
		CompatConfig: function () {
			/// <summary>Contains API compatibility settings.</summary>
			/// <field name="propFunctions" type="Boolean">Gets or sets whether the control should generate get/set functionsfor properties to keep compatibility with older versions of the diagramming API.</field>
		},
		ComponentEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of component-related events.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="component" type="MindFusion.Diagramming.Component">Gets the component for which the event was raised.</field>
			/// <field name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">Gets the adjustment handle being moved by the user. Inherited from ItemEventArgs.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context. Inherited from ItemEventArgs.</field>
			/// <field name="item" type="MindFusion.Diagramming.DiagramItem">Gets the diagram item for which the event is raised. Inherited from ItemEventArgs.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed. Inherited from ItemEventArgs.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position. Inherited from ItemEventArgs.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user. Inherited from ItemEventArgs.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it. Inherited from ItemEventArgs.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the container a node has been added to or removed from. Inherited from NodeEventArgs.</field>
			/// <field name="hyperlink" type="String">Gets the hyperlink that was clicked inside a node. Inherited from NodeEventArgs.</field>
			/// <field name="node" type="MindFusion.Diagramming.DiagramNode">Gets the node for which the event is raised. Inherited from NodeEventArgs.</field>
		},
		CompositeCommand: function (diagram) {
			/// <summary>Represents a set of Command instances as a single operation. Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
		},
		CompositeNode: function (parent) {
			/// <summary>CompositeNode implements nodes whose appearance can be defined via composition of components and layout containers.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="clipToOutline" type="Boolean">Gets or sets whether contents should clip to node's outline, when outline component is set.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		ConnectionPoint: function (node, link, incoming) {
			/// <summary>A class that represents a connection between an edge and a node in a graph. It decouples the DiagramLink class from the DiagramNode class, allowing edges to connect different types of nodes without knowing anything of their implementation details. Each DiagramLink object contains two ConnectionPoint instances describing the connections at both ends of the link.&#10;</summary>
			/// <param name="node" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The node whose connection to a link is managed by this ConnectionPoint.</param>
			/// <param name="link" type="MindFusion.Diagramming.DiagramLink" optional="true">Optional. The link whose connection to a node is managed by this ConnectionPoint.</param>
			/// <param name="incoming" type="Boolean" optional="true">Optional. Specifies which end of the link is represented by this ConnectionPoint.</param>
			/// <field name="endPoint" type="MindFusion.Diagramming.Point">Calculates the coordinates of this connection point expressed in document coordinates.</field>
		},
		ContainerNode: function (parent) {
			/// <summary>ContainerNode instances are diagram nodes that can contain other nodes.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="allowAddChildren" type="Boolean">Gets or sets whether users are allowed to add child nodes to the container.</field>
			/// <field name="allowRemoveChildren" type="Boolean">Gets or sets whether users are allowed to remove child nodes from the container.</field>
			/// <field name="captionBackBrush" type="Object">Gets or sets an object specifying how to fill the caption bar.</field>
			/// <field name="captionHeight" type="Number">Gets or sets the height of the node's caption area.</field>
			/// <field name="children" type="Array">Gets the child nodes of this container.</field>
			/// <field name="clipChildren" type="Boolean">Gets or sets whether child items should be clipped by container boundaries.</field>
			/// <field name="contentPath" type="MindFusion.Diagramming.Path">Creates a path corresponding to the content area rectangle, excluding caption bar.</field>
			/// <field name="enableStyledText" type="Boolean">Gets or sets a value indicating whether styled caption text rendering is enabled.</field>
			/// <field name="foldable" type="Boolean">Gets or sets a value indicating whether users are allowed to fold the container.</field>
			/// <field name="folded" type="Boolean">Gets or sets a value indicating whether the container is folded.</field>
			/// <field name="foldIconSize" type="Number">Gets or sets a value indicating the size of the fold/unfold icon.</field>
			/// <field name="shape" type="MindFusion.Diagramming.SimpleShape">Gets or sets the shape of the node's outline.</field>
			/// <field name="unfoldedSize" type="MindFusion.Diagramming.Size">Gets the size of the container in unfolded state.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		ControlNode: function (diagramView) {
			/// <summary>ControlNode instances are diagram nodes that render HTML content.</summary>
			/// <param name="diagramView" type="DiagramView" optional="true">Optional. DiagramView. The DiagramView from which to obtain default values for the node properties.</param>
			/// <field name="template" type="String">Gets or sets HTML string representing the DOM content rendered by this node.</field>
			/// <field name="visible" type="Boolean">DiagramItem.visible override. Gets or sets whether this node is visible.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		CreateLinkController: function (diagram, link) {
			/// <summary>A controller used to draw new links in the diagram.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The parent diagram of the new link.</param>
			/// <param name="link" type="DiagramLink">DiagramLink. The link that will be drawn by this controller.</param>
		},
		CreateNodeController: function (diagram, node) {
			/// <summary>A controller used to draw new nodes in the diagram.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The parent diagram of the new node.</param>
			/// <param name="node" type="DiagramNode">DiagramNode. The node that will be drawn by this controller.</param>
		},
		CreateSelectionController: function (selection) {
			/// <summary>A controller used to draw selection rectangle in the diagram.</summary>
			/// <param name="selection" type="Selection">Selection. The selection that will be drawn by this controller.</param>
		},
		Diagram: function () {
			/// <summary>The Diagram class represents a flow diagram.</summary>
			/// <field name="activeItem" type="MindFusion.Diagramming.DiagramItem">Gets the active diagram item.</field>
			/// <field name="activeItemHandlesStyle" type="MindFusion.Diagramming.HandlesVisualStyle">Gets or sets the visual style of adjustment handles of the active item.</field>
			/// <field name="adjustmentHandlesSize" type="Number">Gets or sets the size of adjustment handles that appear around selected items.</field>
			/// <field name="alignToGrid" type="Boolean">Gets or sets a value indicating whether the diagram items should be aligned to a grid.</field>
			/// <field name="allowMultipleResize" type="Boolean">Gets or sets a value indicating whether multiple selected nodes can be resized simultaneously.</field>
			/// <field name="allowSelfLoops" type="Boolean">Gets or sets a value indicating whether users are allowed to draw reflexive links.</field>
			/// <field name="allowUnconnectedLinks" type="Boolean">Gets or sets a value indicating whether users are allowed to draw links that are not connected to any node.</field>
			/// <field name="autoArrangeAvoidContainers" type="Boolean">Gets or sets a value indicating whether auto-arranged link labels should avoid containers.</field>
			/// <field name="autoArrangeAvoidSegments" type="Boolean">Gets or sets a value indicating whether auto-arranged link labels should avoid link segments.</field>
			/// <field name="autoCloseDistance" type="Number">Gets or sets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically.</field>
			/// <field name="autoResize" type="MindFusion.Diagramming.AutoResize">Gets or sets a value indicating whether the document area should be resized automatically so it fits the diagram contents.</field>
			/// <field name="backBrush" type="Object">Gets or sets an object specifying how to fill the diagram background.</field>
			/// <field name="backgroundImageAlign" type="MindFusion.Diagramming.ImageAlign">Gets or sets a value indicating how to align the background image.</field>
			/// <field name="backgroundImageContent" type="String">Gets or sets a Base64-encoded image to display as diagram background.</field>
			/// <field name="backgroundImageUrl" type="String">Gets or sets URL of the image to paint as diagram's background.</field>
			/// <field name="crossingRadius" type="Number">Gets or sets the radius length of decorations displayed at link intersection points.</field>
			/// <field name="customLinkType" type="Object">Gets or sets the type of DiagramLink objects to create when users starts drawing.</field>
			/// <field name="customNodeType" type="Object">Gets or sets the type of DiagramNode objects to create when users starts drawing.</field>
			/// <field name="defaultShape" type="MindFusion.Diagramming.Shape | String">Gets or sets the default shape assigned to new ShapeNode objects.</field>
			/// <field name="dirty" type="Boolean">Gets or sets a value indicating whether the diagram has changed since loading it.</field>
			/// <field name="disabledHandlesStyle" type="MindFusion.Diagramming.HandlesVisualStyle">Gets or sets the visual style of disabled adjustment handles.</field>
			/// <field name="dynamicLinks" type="Boolean">Gets or sets initial value of the dynamic property of new links.</field>
			/// <field name="expandButtonAction" type="MindFusion.Diagramming.ExpandButtonAction">Gets or sets how the control responds to users clickingthe +/- button displayed by expandable nodes.</field>
			/// <field name="expandOnIncoming" type="Boolean">Gets or sets a value indicating the link direction in which tree branches are expanded.</field>
			/// <field name="factory" type="MindFusion.Diagramming.Factory">Gets a Factory object that lets you programmatically add new items to the diagram.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the default font of text displayed by diagram items.</field>
			/// <field name="freeFormAttractDistance" type="Number">Gets or sets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too.</field>
			/// <field name="freeFormTargets" type="Array">Gets or sets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when behavior is set to LinkFreeShapes or DrawFreeShapes.</field>
			/// <field name="gridColor" type="String">Gets or sets the color of grid points.</field>
			/// <field name="gridOffsetX" type="Number">Gets or sets the horizontal offset of the first point of the alignment grid.</field>
			/// <field name="gridOffsetY" type="Number">Gets or sets the vertical offset of the first point of the alignment grid.</field>
			/// <field name="gridPointSize" type="Number">Gets or sets the size of shapes used to represent grid points.</field>
			/// <field name="gridSizeX" type="Number">Gets or sets the horizontal distance between adjacent grid points.</field>
			/// <field name="gridSizeY" type="Number">Gets or sets the vertical distance between adjacent grid points.</field>
			/// <field name="gridStyle" type="MindFusion.Diagramming.GridStyle">Gets or sets the visual style of the alignment grid.</field>
			/// <field name="items" type="Array">Returns an array of all items in this diagram.</field>
			/// <field name="laneGrid" type="Lanes.Grid">Gets the lane grid.</field>
			/// <field name="linkBaseShape" type="MindFusion.Diagramming.Shape | String">Gets or sets the shape displayed at the base of new links.</field>
			/// <field name="linkBaseShapeSize" type="Number">Gets or sets the default size of arrowheads at base of new links.</field>
			/// <field name="linkBrush" type="Object">Gets or sets the default fill of link arrowheads.</field>
			/// <field name="linkCrossings" type="MindFusion.Diagramming.LinkCrossings">Gets or sets a value indicating how to render the intersection points of links.</field>
			/// <field name="linkHeadShape" type="MindFusion.Diagramming.Shape | String">Gets or sets the shape displayed as head of new links.</field>
			/// <field name="linkHeadShapeSize" type="Number">Gets or sets the default size of arrowheads.</field>
			/// <field name="linkHitDistance" type="Number">Gets or sets a value specifying how far from a link a click is still considered a hit.</field>
			/// <field name="linkPen" type="String">Gets or sets the default stroke of links.</field>
			/// <field name="linkRouter" type="MindFusion.Diagramming.Router">Gets or sets the object used to find paths for auto-routed links when diagram nodes are added or their positions change.</field>
			/// <field name="links" type="Array">Returns an array of all links in this diagram.</field>
			/// <field name="linkSegments" type="Number">Gets or sets the default number of link segments.</field>
			/// <field name="linkShape" type="MindFusion.Diagramming.LinkShape">Gets or sets the initial shape assigned to new links.</field>
			/// <field name="linkTextStyle" type="MindFusion.Diagramming.LinkTextStyle">Gets or sets the default text placement and orientation of new links.</field>
			/// <field name="nodeEffects" type="Array">Gets the global effects applied to nodes in this diagram.</field>
			/// <field name="nodes" type="Array">Returns an array of all nodes in this diagram.</field>
			/// <field name="nodesExpandable" type="Boolean">Gets or sets a value indicating whether newly created nodes are expandable.</field>
			/// <field name="roundedLinks" type="Boolean">Gets or sets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded.</field>
			/// <field name="roundedLinksRadius" type="Number">Gets or sets the radius of joint arcs of rounded links' segments.</field>
			/// <field name="routeLinks" type="Boolean">Gets or sets initial value of the autoRoute property of new links.</field>
			/// <field name="routeMargin" type="Number">Gets or sets the minimal distance between nodes and auto-routed links.</field>
			/// <field name="selectedItemHandlesStyle" type="MindFusion.Diagramming.HandlesVisualStyle">Gets or sets the visual style of adjustment handles of selected items.</field>
			/// <field name="selection" type="MindFusion.Diagramming.Selection">Gets a Selection instance that represents the selection of items in this diagram.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of items' shadows.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of items' shadows.</field>
			/// <field name="shadowsStyle" type="MindFusion.Diagramming.ShadowsStyle">Gets or sets the style of shadows.</field>
			/// <field name="shapeBrush" type="Object">Gets or sets the default fill of ShapeNode objects.</field>
			/// <field name="shapeLibraryLocation" type="String">Gets or sets the location of a shape library file containing custom shape definitions. It can be set to a full URL of the file, or a relative file path.</field>
			/// <field name="shapePen" type="String">Gets or sets the default stroke of ShapeNode objects.</field>
			/// <field name="showAnchors" type="MindFusion.Diagramming.ShowAnchors">Gets or sets a value indicating when to display anchor point marks.</field>
			/// <field name="showDisabledHandles" type="Boolean">Gets or sets a value indicating whether adjustment handles are painted when they are disabled.</field>
			/// <field name="showGrid" type="Boolean">Gets or sets a value indicating whether the alignment grid is visible.</field>
			/// <field name="showLaneGrid" type="Boolean">Gets or sets a value indicating whether the lane grid is visible.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this diagram.</field>
			/// <field name="tag" type="Object">Gets or sets custom data associated with this diagram.</field>
			/// <field name="theme" type="MindFusion.Diagramming.Theme">Gets or sets the theme associated with this diagram.</field>
			/// <field name="undoEnabled" type="Boolean">Gets or sets a value indicating whether saving action records for later undo is enabled.</field>
			/// <field name="version" type="String">Gets a string identifying current version of the library.</field>
		},
		DiagramEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of global diagram events such as clicked.</summary>
			/// <field name="delta" type="Number">Gets the vertical scroll amount of a wheel event.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position.</field>
		},
		DiagramItem: function (parent) {
			/// <summary>Represents an item in the diagram model. All classes representing diagram elements derive from DiagramItem.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the item properties.</param>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item.</field>
		},
		DiagramLink: function (parent, origin, destination) {
			/// <summary>Represents a link between two diagram nodes.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the link properties.</param>
			/// <param name="origin" type="DiagramNode | Point" optional="true">Optional. DiagramNode | Point. The origin node of the new link.</param>
			/// <param name="destination" type="DiagramNode | Point" optional="true">Optional. DiagramNode | Point. The destination node of the new link.</param>
			/// <field name="autoRoute" type="Boolean">Gets or sets whether this link should be automatically routed to avoid crossing nodes.</field>
			/// <field name="baseBrush" type="Object">Gets or sets an object that specifies how to fill link's baseShape.</field>
			/// <field name="baseShape" type="MindFusion.Diagramming.Shape | String">Gets or sets the arrowhead shape displayed at the link' start point.</field>
			/// <field name="baseShapeSize" type="Number">Gets or sets the size of the arrowhead displayed at the link's start point.</field>
			/// <field name="controlPoints" type="Array">Gets or sets the control points of this link.</field>
			/// <field name="destination" type="MindFusion.Diagramming.DiagramNode">Gets or sets the destination node of this link.</field>
			/// <field name="destinationAnchor" type="Number">Gets or sets the anchor point to which the link connects at its destination.</field>
			/// <field name="destinationIndex" type="Number">Gets or sets the index of link's destination row when destination is a&#160;TableNode.</field>
			/// <field name="dynamic" type="Boolean">Gets or sets whether link's end segments are automatically adjustedin order to keep pointing to the centers of the nodes it connects.</field>
			/// <field name="endPoint" type="MindFusion.Diagramming.Point">Gets or sets the last control point of this link.</field>
			/// <field name="headBrush" type="Object">Gets or sets an object that specifies how to fill link's headShape.</field>
			/// <field name="headShape" type="MindFusion.Diagramming.Shape | String">Gets or sets the arrowhead shape displayed at the link' end point.</field>
			/// <field name="headShapeSize" type="Number">Gets or sets the size of the arrowhead displayed at the link's end point.</field>
			/// <field name="headStroke" type="Object">Gets or sets the brush used to stroke the outline of link's arrowheads.</field>
			/// <field name="headStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the dash pattern of arrowhead outlines.</field>
			/// <field name="headStrokeThickness" type="Number">Gets or sets the thickness of arrowhead outlines.</field>
			/// <field name="origin" type="MindFusion.Diagramming.DiagramNode">Gets or sets the origin node of this link.</field>
			/// <field name="originAnchor" type="Number">Gets or sets the anchor point to which the link connects at its origin.</field>
			/// <field name="originIndex" type="Number">Gets or sets the index of link's origin row when origin is a TableNode.</field>
			/// <field name="segmentCount" type="Number">Gets or sets the number of segments that form the link's geometry.</field>
			/// <field name="shape" type="MindFusion.Diagramming.LinkShape">Gets or sets the type of link segments and how they are oriented relatively to each other.</field>
			/// <field name="startPoint" type="MindFusion.Diagramming.Point">Gets or sets the first control point of this link.</field>
			/// <field name="text" type="String">Gets or sets the text displayed by this link.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the alignment of link's text.</field>
			/// <field name="textStyle" type="MindFusion.Diagramming.LinkTextStyle">Gets or sets the placement and orientation of link's text.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
		},
		DiagramNode: function (parent) {
			/// <summary>DiagramNode is an abstract base class from which&#160;specific types such as&#160;ShapeNode&#160;and TableNode&#160;derive. DiagramNode instances can represent graph vertices, nodes in organizational or flow diagrams, entities in ER diagrams, and so on.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. A Diagram instance whose default node attributes are copied to this node.</param>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
		},
		DiagramView: function (element, diagram) {
			/// <summary>Represents a control that displays the content of a Diagram object.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this DiagramView is associated with.</param>
			/// <param name="diagram" type="Diagram" optional="true">Optional. Diagram. The Diagram instance this control is associated with.</param>
			/// <field name="allowInplaceEdit" type="Boolean">Gets or sets whether users are allowed to edit the text of diagram items.</field>
			/// <field name="autoScroll" type="Boolean">Gets or sets a value indicating whether automatic scrolling is enabled.</field>
			/// <field name="autoScrollAmount" type="Number">Gets or sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</field>
			/// <field name="behavior" type="MindFusion.Diagramming.Behavior">Gets or sets a value indicating how the control responds to user actions.</field>
			/// <field name="defaultControlTemplate" type="String">Gets or sets HTML string representing the DOM content rendered by default by newly created ControlNode objects.</field>
			/// <field name="delKeyAction" type="MindFusion.Diagramming.DelKeyAction">Gets or sets what action to perform when users hit the Del key.</field>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets or sets the diagram displayed by this view.</field>
			/// <field name="leftButtonActions" type="MindFusion.Diagramming.MouseButtonActions">Gets or sets a combination of flags that specify what actions can be performed via the left mouse button.</field>
			/// <field name="licenseLocation" type="String">Gets or sets URL of the control's license file.</field>
			/// <field name="magnifierEnabled" type="Boolean">Gets or sets a value indicating whether the magnifier tool is currently enabled.</field>
			/// <field name="magnifierFactor" type="Number">Gets or sets the zoom factor of the magnifier tool.</field>
			/// <field name="magnifierFrameColor" type="String">Gets or sets the color of the magnifier tool's frame.</field>
			/// <field name="magnifierFrameThickness" type="Number">Gets or sets the thickness of the magnifier frame.</field>
			/// <field name="magnifierHeight" type="Number">Gets or sets the height of the magnifier tool.</field>
			/// <field name="magnifierSecondaryFrameColor" type="String">Gets or sets the color of the magnifier tool's secondary frame.</field>
			/// <field name="magnifierShading" type="Boolean">Gets or sets whether to enhance the effect of a magnifier lense by using a gradient shading.</field>
			/// <field name="magnifierShape" type="MindFusion.Diagramming.Shape | String">Gets or sets a reference to the geometric shape definition of the magnifier tool.</field>
			/// <field name="magnifierWidth" type="Number">Gets or sets the width of the magnifier tool.</field>
			/// <field name="middleButtonActions" type="MindFusion.Diagramming.MouseButtonActions">Gets or sets a combination of flags that specify what actions can be performed via the middle mouse button.</field>
			/// <field name="modificationStart" type="MindFusion.Diagramming.ModificationStart">Gets or sets how users can start modifying diagram items.</field>
			/// <field name="modifierKeyActions" type="MindFusion.Diagramming.ModifierKeyActions">Gets an object that allows changing the function of keyboard modifier keys such as Ctrl and Alt.</field>
			/// <field name="mouseWheelAction" type="MindFusion.Diagramming.MouseWheelAction">Gets or sets what action to perform when users rotate the mouse wheel.</field>
			/// <field name="rightButtonActions" type="MindFusion.Diagramming.MouseButtonActions">Gets or sets a combination of flags that specify what actions can be performed via the right mouse button.</field>
			/// <field name="scrollX" type="Number">Gets or sets the diagram's horizontal scroll position.</field>
			/// <field name="scrollY" type="Number">Gets or sets the diagram's vertical scroll position.</field>
			/// <field name="scrollZoneSize" type="Number">Gets or sets the size of the auto scroll zone near the edges of the control.</field>
			/// <field name="tooltipDelay" type="Number">Gets or sets the delay before a tooltip is shown.</field>
			/// <field name="viewport" type="MindFusion.Diagramming.Rect">Returns the visible portion of the diagram area.</field>
			/// <field name="virtualScroll" type="Boolean">Gets or sets a value indicating whether virtual scroll mode is enabled.</field>
			/// <field name="zoomFactor" type="Number">Gets or sets the zoom factor.</field>
		},
		DoNothingBehavior: function () {
			/// <summary>Implements the DoNothing behavior.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		DrawLinksBehavior: function () {
			/// <summary>This class is used when the diagram behavior is set to Behavior.DrawLinks.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		DrawNodesBehavior: function () {
			/// <summary>The base class for behavior types that allow drawing of nodes, but not links.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		DrawShapesBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.DrawShapes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		DummyNode: function (parent) {
			/// <summary>DummyNode represents virtual nodes set as targets of disconnected links.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. A Diagram instance whose default node attributes are copied to this node.</param>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Diagram component.</summary>
			/// <field name="animatedLayoutCompleted" type="String">Raised when an animated layout completes.</field>
			/// <field name="cellTextEdited" type="String">Raised when the user edits the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event.</field>
			/// <field name="cellTextEditing" type="String">Raised when the user starts to edit the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event.</field>
			/// <field name="clicked" type="String">Raised when the user clicks the diagram at a point where no items are located. Event handlers get a DiagramEventArgs instance that contains data about this event.</field>
			/// <field name="containerChildAdded" type="String">Raised when the user adds a node to a ContainerNode.</field>
			/// <field name="containerChildAdding" type="String">A validation event raised to let you prevent users from adding child nodes to a container.</field>
			/// <field name="containerChildRemoved" type="String">Raised when the user removes a node from a ContainerNode.</field>
			/// <field name="containerChildRemoving" type="String">A validation event raised to let you prevent users from removing child nodes from a container.</field>
			/// <field name="containerFolded" type="String">Raised when the user folds a container by clicking the arrow-up button in the container's caption area.</field>
			/// <field name="containerUnfolded" type="String">Raised when the user unfolds a container by clicking the arrow-down button in the container's caption area.</field>
			/// <field name="controlLoaded" type="String">Raised when the control is loaded.</field>
			/// <field name="createEditControl" type="String">Raised to let you create a custom inplace editor control. Event handlers get an InplaceEditEventArgs instance that contains data about this event.</field>
			/// <field name="dataLoaded" type="String">Raised when the diagram data is loaded.</field>
			/// <field name="deserializeTag" type="String">Raised when the Tag or Id of a diagram item must be deserialized from XML format.</field>
			/// <field name="drawAdjustmentHandles" type="String">Raised to draw custom adjustment handles.</field>
			/// <field name="enterInplaceEditMode" type="String">Raised when entering inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event.</field>
			/// <field name="expandButtonClicked" type="String">Raised if ExpandButtonAction is set to RaiseEvents and the [+/-]button of an Expandable node is clicked.</field>
			/// <field name="headerResized" type="String">Raised when the user finished resizing a header.</field>
			/// <field name="headerStartResizing" type="String">Raised when the user starts resizing a header.</field>
			/// <field name="hitTestAdjustmentHandles" type="String">Raised to hit-test custom adjustment handles.</field>
			/// <field name="hyperlinkClicked" type="String">Raised when the user clicks a hyperlink inside a node. Event handlers receive a NodeEventArgs instance containing data about this event.</field>
			/// <field name="initializeLink" type="String">Raised when the user starts drawing a new link} just after the DiagramLink instance is created.</field>
			/// <field name="initializeNode" type="String">Raised when the user starts drawing a new node} just after the DiagramNode instance is created.</field>
			/// <field name="itemAdded" type="String">Raised when an item is added to the diagram.</field>
			/// <field name="itemRemoved" type="String">Raised when an item is removed from the diagram.</field>
			/// <field name="laneGridCellTextEdited" type="String">Raised when the user edits the text of a grid cell. The event handlers get a CellEventArgs instance that contains data about this event.</field>
			/// <field name="leaveInplaceEditMode" type="String">Raised when leaving inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event.</field>
			/// <field name="linkClicked" type="String">Raised when the user clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkCreated" type="String">Raised when the user draws a new link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkCreating" type="String">A validation event raised while the user is drawing a new link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkDeleted" type="String">Raised when a link is deleted} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkDeleting" type="String">Raised when the user tries to delete a link. This event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkDeselected" type="String">Raised when a link is deselected} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkDoubleClicked" type="String">Raised when the user double-clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkModified" type="String">Raised when the user moves any control point of a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkModifying" type="String">A validation event raised while the user is modifying a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkPasted" type="String">Raised when a link has been pasted from the clipboard.</field>
			/// <field name="linkPointed" type="String">Raised when the mouse pointer hovers over a link. Event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkSelected" type="String">Raised when a link is selected} either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkSelecting" type="String">Raised when the user tries to select a link. This event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkTextEdited" type="String">Raised when the user edits the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="linkTextEditing" type="String">Raised when the user starts to edit the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event.</field>
			/// <field name="mouseWheel" type="String">Raised when the user rotates the mouse wheel while the cursor is positioned over the diagram surface. The event handlers get a DiagramEventArgs instance that contains data about this event.</field>
			/// <field name="nodeClicked" type="String">Raised when the user clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeCreated" type="String">Raised when the user draws a new node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeCreating" type="String">A validation event raised while the user is drawing a new node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeDeleted" type="String">Raised when a node is deleted} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeDeleting" type="String">Raised when the user tries to delete a node. This event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeDeselected" type="String">Raised when a node is deselected} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeDomCreated" type="String">Raised when the content of a ControlNode is added to the page DOM. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeDoubleClicked" type="String">Raised when the user double-clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeModified" type="String">Raised when the user moves or resizes a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeModifying" type="String">A validation event raised while the user is moving or resizing a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodePasted" type="String">Raised when a node has been pasted from the clipboard.</field>
			/// <field name="nodePointed" type="String">Raised when the mouse pointer hovers over a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeSelected" type="String">Raised when a node is selected} either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeSelecting" type="String">Raised when the user tries to select a node. This event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeTextEdited" type="String">Raised when the user edits the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="nodeTextEditing" type="String">Raised when the user starts to edit the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="repaint" type="String">Raised when the diagram has been repainted.</field>
			/// <field name="selectionChanged" type="String">Raised when the diagram selection has changed. The event handlers get a SelectionChangedEventArgs instance that contains data about this event.</field>
			/// <field name="selectionModifying" type="String">A validation event raised while the user is moving or resizing multiple items. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="serializeTag" type="String">Raised when the Tag or Id of a diagram item must be serialized in XML format.</field>
			/// <field name="sizeChanged" type="String">Raised when the size of the diagram canvas has changed.</field>
			/// <field name="tableColumnResized" type="String">Raised when the user finishes resizing a column in a table.</field>
			/// <field name="tableColumnResizing" type="String">Raised when the user resizes a column in a table interactively.</field>
			/// <field name="tableRowResized" type="String">Raised when the user finishes resizing a row in a table.</field>
			/// <field name="tableRowResizing" type="String">Raised when the user resizes a row in a table interactively.</field>
			/// <field name="treeCollapsed" type="String">Raised when a user collapses a tree branch by clicking the [-] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="treeExpanded" type="String">Raised when a user expands a tree branch by clicking the [+] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event.</field>
			/// <field name="treeItemTextEdited" type="String">Raised when the user edits the text of a tree view item. The event handlers get a TreeItemEventArgs instance that contains data about this event.</field>
			/// <field name="treeItemTextEditing" type="String">Raised when the user starts to edit the text of a tree view item. The event handlers get a TreeItemEventArgs instance that contains data about this event.</field>
		},
		Factory: function (diagram) {
			/// <summary>Provides shortcut methods for creating and adding instances of the standard item types.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The Diagram object for which to create the new factory.</param>
		},
		FoldContainerCommand: function (diagram, container) {
			/// <summary>Handles undo / redo of container folding.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
			/// <param name="container" type="ContainerNode">The ContainerNode instance that will be modified.</param>
		},
		FreeFormNode: function (parent) {
			/// <summary>A FreeFormNode collects all points from users' mouse or touch input and displays them as node's outline.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. A Diagram instance whose default node attributes are copied to this node.</param>
			/// <field name="closed" type="Boolean">Gets or sets whether the node's shape is closed.</field>
			/// <field name="points" type="Array">Gets or sets the node's outline points.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		GlassEffect: function () {
			/// <summary>Represents a glass-like visual effect.</summary>
			/// <field name="glowColor" type="String">Gets or sets the color of the glow region of the effect.</field>
			/// <field name="reflectionColor" type="String">Gets or sets the color of the reflection region of the effect.</field>
			/// <field name="type" type="MindFusion.Diagramming.GlassEffectType">Gets or sets the type of the glass effect.</field>
			/// <field name="usePenAsGlow" type="Boolean">Gets or sets whether the glow area of the effect should be painted using the stroke color of target node.</field>
		},
		GridColumn: function () {
			/// <summary>Represents a column in a GridPanel.</summary>
			/// <field name="lengthType" type="MindFusion.Diagramming.LengthType">Gets or sets how GridPanel determines the width of this column.</field>
			/// <field name="width" type="Number">Gets or sets fixed width for this column.</field>
		},
		GridPanel: function () {
			/// <summary>A layout container that arranges its child components in a grid.</summary>
			/// <field name="columns" type="Array">Gets a list of GridColumn objects specifying column attributes.</field>
			/// <field name="rows" type="Array">Gets a list of GridRow objects specifying row attributes.</field>
		},
		GridRouter: function (diagram) {
			/// <summary>Implements a link routing algorithm that uses a grid to represent the free and occupied regions in the diagram.</summary>
			/// <param name="diagram" type="Diagram" optional="true">Optional. Diagram. Gets or sets the diagram this router is associated with.</param>
			/// <field name="crossingCost" type="Number">Gets or sets a value added to the total cost of a route which causes a link to cross another link.</field>
			/// <field name="gridSize" type="Number">Gets or sets the size of the pieces of the routing grid.</field>
			/// <field name="lengthCost" type="Number">Gets or sets a value added to the total cost of a route for each piece of the routing grid occupied by the route.</field>
			/// <field name="nodeVicinityCost" type="Number">Gets or sets a value added to the total cost of a route if the route passes too close to a node.</field>
			/// <field name="nodeVicinitySize" type="Number">Gets or sets the size of buffer zone around nodes for which routes get a penalty cost if they pass through it.</field>
			/// <field name="turnCost" type="Number">Gets or sets a value added to the total cost of a route if the route passes too close to a node.</field>
		},
		GridRow: function () {
			/// <summary>Represents a row in a GridPanel.</summary>
			/// <field name="height" type="Number">Gets or sets fixed height for this row.</field>
			/// <field name="lengthType" type="MindFusion.Diagramming.LengthType">Gets or sets how GridPanel determines the height of this row.</field>
		},
		HandlesVisualStyle: function () {
			/// <summary>Defines the pen and brush objects used to draw items' adjustment handles.</summary>
			/// <field name="controlPointBrush" type="Object">Gets or sets the brush used to fill the interior of shape control points.</field>
			/// <field name="dashStroke" type="String">Gets or sets the color used to stroke dashed selection frames.</field>
			/// <field name="dashStrokeThickness" type="Number">Gets or sets the line width applied when stroking dashed selection frames.</field>
			/// <field name="handleBrush" type="Object">Gets or sets the brush used to fill the interior of selection handles.</field>
			/// <field name="handleStroke" type="String">Gets or sets the color used to stroke borders of adjustment handles.</field>
			/// <field name="handleStrokeThickness" type="Number">Gets or sets the line width applied when stroking borders of adjustment handles.</field>
			/// <field name="hatchBrush" type="Object">Gets or sets the brush used to draw hatch frames.</field>
			/// <field name="patternBrush" type="Object">Gets or sets the brush used to draw selection frames for the MoveOnly style.</field>
			/// <field name="rotationHandleBrush" type="Object">Gets or sets the brush used to fill the interior of the rotation handle.</field>
		},
		HeaderEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of header-related events.</summary>
			/// <field name="header" type="MindFusion.Diagramming.Header">Gets the header related to the event.</field>
		},
		HeaderResizeEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of header resize events.</summary>
			/// <field name="cancel" type="Boolean">Gets or sets a value indicating whether to allow the current operation.</field>
			/// <field name="horizontal" type="Boolean">Gets a value indicating whether the user resizes the header horizontally.</field>
			/// <field name="header" type="MindFusion.Diagramming.Header">Gets the header related to the event. Inherited from HeaderEventArgs.</field>
		},
		InplaceEditEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of inplace edit related events.</summary>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets the bounds of the item being edited.</field>
			/// <field name="control" type="MindFusion.Diagramming.Element">Gets or sets the control used to edit the item's text.</field>
			/// <field name="item" type="MindFusion.Diagramming.DiagramItem">Gets a reference to the item being edited.</field>
		},
		Interaction: function (diagram) {
			/// <summary>Encapsulates the current state of user interaction with the control.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram" optional="true">Optional. </param>
		},
		InteractionState: function (modifiedItem, action, adjustmentHandle, point) {
			/// <summary>Encapsulates the current state of user interaction with the control.</summary>
			/// <param name="modifiedItem" type="MindFusion.Diagramming.DiagramItem">The DiagramItem to be created or modified.</param>
			/// <param name="action" type="MindFusion.Diagramming.Action">One of the Action enumeration values, specifying what kind of action to perform.</param>
			/// <param name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">The index of the selection handle to be dragged with the mouse, defines what kind of modification to perform.</param>
			/// <param name="point" type="MindFusion.Drawing.Point">A Point specifying the mouse position where the user starts to draw or modify an item.</param>
		},
		ItemEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of item-related events.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">Gets the adjustment handle being moved by the user.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context.</field>
			/// <field name="item" type="MindFusion.Diagramming.DiagramItem">Gets the diagram item for which the event is raised.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it.</field>
		},
		LinkEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of link-related events.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="label" type="MindFusion.Diagramming.LinkLabel">Gets the link label for which the event is raised.</field>
			/// <field name="link" type="MindFusion.Diagramming.DiagramLink">Gets the link for which the event is raised.</field>
			/// <field name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">Gets the adjustment handle being moved by the user. Inherited from ItemEventArgs.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context. Inherited from ItemEventArgs.</field>
			/// <field name="item" type="MindFusion.Diagramming.DiagramItem">Gets the diagram item for which the event is raised. Inherited from ItemEventArgs.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed. Inherited from ItemEventArgs.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position. Inherited from ItemEventArgs.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user. Inherited from ItemEventArgs.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it. Inherited from ItemEventArgs.</field>
		},
		LinkLabel: function (link, text) {
			/// <summary>Represents a label displayed by a DiagramLink. New labels can be added to a link by calling its addLabel method.</summary>
			/// <param name="link" type="DiagramLink">DiagramLink. The DiagramLink that displays the label.</param>
			/// <param name="text" type="String">String. The label's text.</param>
			/// <field name="autoArrange" type="Boolean">Gets or sets whether to automatically arrange the label to avoid overlapping nodes.</field>
			/// <field name="brush" type="Object">Gets or sets the brush used to draw the label's background.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render label's text.</field>
			/// <field name="horizontalAlign" type="MindFusion.Diagramming.Alignment">Gets or sets the label's horizontal alignment.</field>
			/// <field name="margin" type="MindFusion.Diagramming.Thickness">Gets or sets the label's margin.</field>
			/// <field name="text" type="String">Gets or sets the label's text.</field>
			/// <field name="textColor" type="String">Gets or sets the text color.</field>
			/// <field name="verticalAlign" type="MindFusion.Diagramming.Alignment">Gets or sets the label's vertical alignment.</field>
		},
		LinkNodesBehavior: function () {
			/// <summary>The base class for behavior types that allow drawing both nodes and links.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		LinkShapesBehavior: function (parent) {
			/// <summary>This class is used when&#160;view's behavior is set to Behavior.LinkShapes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		MagnifyBehavior: function () {
			/// <summary>This class is used when&#160;view's behavior is set to Behavior.Magnify.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		Manipulator: function (node) {
			/// <summary>Manipulator is an abstract base class which defines the behavior of miscellaneous UI widgets attached to nodes.</summary>
			/// <param name="node" type="DiagramNode" optional="true">Optional. DiagramNode. The DiagramNode containing this manipulator.</param>
		},
		ModifierKeyActions: function () {
			/// <summary>Maps keyboard modifier keys to special actions in MindFusion.Diagramming such as panning and drawing selection rectangle.</summary>
			/// <field name="alt" type="MindFusion.Diagramming.ModifierKeyAction">Gets or sets the action triggered by the ALT key.</field>
			/// <field name="control" type="MindFusion.Diagramming.ModifierKeyAction">Gets or sets the action triggered by the CTRL key.</field>
			/// <field name="shift" type="MindFusion.Diagramming.ModifierKeyAction">Gets or sets the action triggered by the SHIFT key.</field>
		},
		ModifyBehavior: function () {
			/// <summary>This class is used when&#160;view's behavior is set to Behavior.Modify.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		ModifyLinkController: function (link, adjustmentHandle) {
			/// <summary>A controller used to modify existing links in the diagram.</summary>
			/// <param name="link" type="DiagramLink">DiagramLink. The link that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">Object. An object representing the adjustment handle used to modify the link.</param>
		},
		ModifyNodeController: function (node, adjustmentHandle) {
			/// <summary>A controller used to modify existing nodes in the diagram.</summary>
			/// <param name="node" type="DiagramNode">DiagramNode. The node that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">Object. An object representing the adjustment handle used to modify the node.</param>
		},
		ModifySelectionController: function (selection, adjustmentHandle) {
			/// <summary>A controller used to modify multiple selected items in the diagram.</summary>
			/// <param name="selection" type="Selection">Selection. The selection that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">Object. An object representing the adjustment handle used to modify the selection.</param>
		},
		MouseInputDispatcher: function () {
			/// <summary>Processes mouse events and dispatches them to controller objects appropriate for current context.</summary>
		},
		MoveNodesBehavior: function (parent) {
			/// <summary>This class is used when&#160;view's behavior is set to Behavior.MoveNodes.</summary>
			/// <param name="parent" type="DiagramView">DiagramView. The DiagramView this behavior will be associated with.</param>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		NodeEffect: function () {
			/// <summary>Represents the base class of all visual effects that can be applied to the nodes in a Diagram.</summary>
		},
		NodeEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of node-related events.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the container a node has been added to or removed from.</field>
			/// <field name="hyperlink" type="String">Gets the hyperlink that was clicked inside a node.</field>
			/// <field name="node" type="MindFusion.Diagramming.DiagramNode">Gets the node for which the event is raised.</field>
			/// <field name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">Gets the adjustment handle being moved by the user. Inherited from ItemEventArgs.</field>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context. Inherited from ItemEventArgs.</field>
			/// <field name="item" type="MindFusion.Diagramming.DiagramItem">Gets the diagram item for which the event is raised. Inherited from ItemEventArgs.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed. Inherited from ItemEventArgs.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position. Inherited from ItemEventArgs.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user. Inherited from ItemEventArgs.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it. Inherited from ItemEventArgs.</field>
		},
		NodeListView: function (element) {
			/// <summary>A list view&#160;control&#160;that hosts&#160;DiagramNodes and&#160;supports drag-and-drop&#160;to DiagramView.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this NodeListView is associated with.</param>
			/// <field name="backColor" type="String">Gets or sets the background color of the control.</field>
			/// <field name="defaultNodeSize" type="MindFusion.Diagramming.Size">Gets or sets the default size of nodes created after dragging from this list view.</field>
			/// <field name="draggedNode" type="MindFusion.Diagramming.DiagramNode">Gets the currently dragged node from this list view.</field>
			/// <field name="iconSize" type="MindFusion.Diagramming.Size">Gets or sets the size of nodes displayed in this list view.</field>
			/// <field name="nodes" type="Array">Gets the nodes contained in this NodeListView.</field>
			/// <field name="orientation" type="MindFusion.Diagramming.Orientation">Gets or sets the orientation of the view layout.</field>
			/// <field name="padding" type="Number">Gets or sets the padding space between the NodeListView control and its contents.</field>
			/// <field name="shapeLibraryLocation" type="String">Gets the location of a shape library file containing custom shape definitions.It can be set to a full URL of the file, or a relative file path.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to paint text in the NodeListView control.</field>
			/// <field name="tooltipDelay" type="Number">Gets or sets the delay before a tooltip is shown.</field>
		},
		Overview: function (element) {
			/// <summary>The Overview control provides a scaled-down view of Diagram contents and allows scrolling and zooming&#160;a DiagramView.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this Overview is associated with.</param>
			/// <field name="allowZoom" type="Boolean">Gets or sets a value indicating whether users are allowed to zoom the diagramby resizing the overview's viewport tracker rectangle.</field>
			/// <field name="autoScrollAmount" type="Number">Gets or sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</field>
			/// <field name="backColor" type="String">Gets or sets the background color of the overview control.</field>
			/// <field name="diagramView" type="MindFusion.Diagramming.DiagramView">Gets or sets the DiagramView shown by this Overview.</field>
			/// <field name="dimColor" type="String">Gets or sets a color used to blend with the part of the diagram that is not visible in target DiagramView.</field>
			/// <field name="scaleFactor" type="Number">Gets or sets a fixed scale factor to apply when FitAll is disabled.</field>
			/// <field name="scaleMode" type="MindFusion.Diagramming.ScaleMode">Gets or sets a value indicating whether to fit the whole diagram inside the overview control.</field>
			/// <field name="scrollX" type="Number">Gets the overview's horizontal scroll position.</field>
			/// <field name="scrollY" type="Number">Gets the overview's vertical scroll position.</field>
			/// <field name="viewport" type="MindFusion.Diagramming.Rect">Returns the visible portion of the diagram area.</field>
		},
		PanBehavior: function () {
			/// <summary>Pans the diagram when the users drags the mouse.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		PanController: function () {
			/// <summary>A controller used to pan the DiagramView.</summary>
		},
		Panel: function () {
			/// <summary>Represents layout containers in CompositeNode visual tree.</summary>
		},
		Path: function () {
			/// <summary>Represents a sequence of connected DiagramNode and DiagramLink elements.</summary>
		},
		PathFinder: function (diagram) {
			/// <summary>Provides methods that help you find paths and cycles in a graph.</summary>
			/// <param name="diagram" type="Diagram">An instance of the Diagram class in which to look for paths or cycles.</param>
		},
		RemoveItemCommand: function (diagram, item) {
			/// <summary>Implements deletion of diagram items.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="DiagramItem">A DiagramItem that should be removed from the Diagram.</param>
		},
		ResizeTableColumnCommand: function (diagram, table, column) {
			/// <summary>Implements resizing of table's columns.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The Diagram modified by this command.</param>
			/// <param name="table" type="TableNode">TableNode. The TableNode instance that will be modified.</param>
			/// <param name="column" type="Object">Object. The column object that will be resized.</param>
		},
		ResizeTableRowCommand: function (diagram, table, row) {
			/// <summary>Implements resizing of table's rows.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The Diagram modified by this command.</param>
			/// <param name="table" type="TableNode">TableNode. The TableNode instance that will be modified.</param>
			/// <param name="row" type="Object">Object. The row object that will be resized.</param>
		},
		Router: function (diagram) {
			/// <summary>Implements a simple link routing algorithm that pulls link segments out of nodes they would overlap.</summary>
			/// <param name="diagram" type="Diagram" optional="true">Optional. Diagram. The diagram this router is associated with.</param>
		},
		Ruler: function (element) {
			/// <summary>The Ruler control provides horizontal and vertical scales that help users measure and align diagram items.</summary>
			/// <param name="element" type="HTMLDivElement">HTMLDivElement. The Canvas DOM Element this Ruler is associated with.</param>
			/// <field name="backColor" type="String">Gets or sets the background color of the control.</field>
			/// <field name="diagramView" type="MindFusion.Diagramming.DiagramView">Gets or sets the DiagramView shown by this Ruler.</field>
			/// <field name="enableGuides" type="Boolean">Gets or sets a value indicating whether the alignment guides are enabled.</field>
			/// <field name="foreColor" type="String">Gets or sets the foreground color of the control.</field>
			/// <field name="guideColor" type="String">Gets or sets the color of the alignment guide lines.</field>
			/// <field name="horizontalScaleVisible" type="Boolean">Gets or sets a value indicating whether the horizontal ruler scale is visible.</field>
			/// <field name="negatedX" type="Boolean">Gets or sets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left.</field>
			/// <field name="negatedY" type="Boolean">Gets or sets whether the vertical scale should show negated values, simulating that the coordinate system's Y axis grows to the top.</field>
			/// <field name="pointerColor" type="String">Gets or sets the color of the mouse pointer's projections.</field>
			/// <field name="projectionColor" type="String">Gets or sets the color used to paint the projection of the active node.</field>
			/// <field name="projectRotatedBounds" type="Boolean">Gets or sets whether projections of nodes on ruler's scales reflect their rotated boundaries.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to paint text in the ruler.</field>
			/// <field name="unit" type="MindFusion.Diagramming.GraphicsUnit">Gets the measure units displayed in the ruler scales.</field>
			/// <field name="verticalScaleVisible" type="Boolean">Gets or sets a value indicating whether the vertical ruler scale is visible.</field>
		},
		ScrollTableCommand: function (diagram, table) {
			/// <summary>Handles undo / redo of table scrolling.</summary>
			/// <param name="diagram" type="Diagram">The Diagram modified by this command.</param>
			/// <param name="table" type="TableNode">The TableNode instance that will be modified.</param>
		},
		Selection: function (parent) {
			/// <summary>Represents a set of items selected in the Diagram document.</summary>
			/// <param name="parent" type="Diagram">The diagram where the items are selected.</param>
			/// <field name="allowMultipleSelection" type="Boolean">Gets or sets a value indicating whether more than one items can be selected simultaneously.</field>
			/// <field name="items" type="Array">Returns an array of all items in this selection.</field>
			/// <field name="links" type="MindFusion.Diagramming.DiagramLink">Returns an array of all links in this selection.</field>
			/// <field name="nodes" type="MindFusion.Diagramming.DiagramNode">Returns an array of all nodes in this selection.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
		},
		SelectionChangedEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of the selectionChanged event.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="newItems" type="Array">Gets the selected items after the change.</field>
			/// <field name="oldItems" type="Array">Gets the selected items before the change.</field>
		},
		SelectionEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of selection-related events.</summary>
			/// <param name="args" type="Object"></param>
			/// <field name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">Gets the adjustment handle being moved by the user.</field>
			/// <field name="mousePosition" type="MindFusion.Diagramming.Point">Gets the current mouse pointer position.</field>
		},
		SelectOnlyBehavior: function () {
			/// <summary>Allows only selection of existing items. Modifying them or drawing new ones is disabled.</summary>
			/// <field name="diagram" type="MindFusion.Diagramming.Diagram">Gets the target diagram of this behavior object. Inherited from BehaviorBase.</field>
		},
		SerializeTagEventArgs: function () {
			/// <summary>Contains the arguments passed to the serializeTag and deserializeTag event handlers.</summary>
			/// <field name="context" type="MindFusion.Diagramming.XmlPersistContext">Gets an XmlPersistContext object providing helper read and write methods for various value types.</field>
			/// <field name="element" type="MindFusion.Diagramming.Element">Gets the XML element where the tag value should be serialized to or deserialized from.</field>
			/// <field name="object" type="Object">Gets the object whose property is being serialized or deserialized.</field>
			/// <field name="propertyName" type="String">Gets the name of the property being serialized.</field>
			/// <field name="tag" type="Object">Gets or sets the tag value being serialized or deserialized.</field>
		},
		Shape: function (params, ) {
			/// <summary>An instance of this class represents a shape defined through a series of arc, line and Bezier segments. The segments can be a part of the shape outline, in which case they define the part of the shape is filled, used for hit-testing and for aligning links to the node edges. Segments can also be added as decoration elements, in which case they only affect the appearance of a ShapeNode.</summary>
			/// <param name="params.outline" type="String" optional="true">Optional. String. A string defining the shape's outline.</param>
			/// <param name="params.decoration" type="String" optional="true">Optional. String. A string defining the shape's decoration.</param>
			/// <param name="params.shapeDecorations" type="Array" optional="true">Optional. Array. An array containing shapeDecoration objects defining additional shape decoration.</param>
			/// <param name="params.id" type="String" optional="true">Optional. String. The string identifier of the shape.</param>
			/// <param name="params.fillMode" type="String" optional="true">Optional. String. A string specifying the fill mode;</param>
			/// <param name="params.outlinePen" type="String" optional="true">Optional. String. A string specifying the stroke of the shape's outline.</param>
			/// <param name="params.outlineBrush" type="String" optional="true">Optional. String. A string specifying the fill of the shape's outline.</param>
			/// <param name="params.decorationPen" type="String" optional="true">Optional. String. A string specifying the stroke of the shape's decoration.</param>
			/// <param name="params.decorationBrush" type="String" optional="true">Optional. String. A string specifying the fill of the shape's decoration.</param>
			/// <field name="brush" type="Object">Gets or sets the brush used to paint the interior of this shape.</field>
			/// <field name="pen" type="String">Gets or sets the pen used to stroke the frame of this shape.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the thickness of the shape's frame.</field>
		},
		ShapeLibrary: function (shapes) {
			/// <summary>The ShapeLibrary class represents a collection of shape definitions stored together.</summary>
			/// <param name="shapes" type="Array">Array. A list of MindFusion.Diagramming.Shape objects to initialize the library with.</param>
		},
		ShapeNode: function (parent) {
			/// <summary>ShapeNode instances are diagram nodes that represent geometric shapes.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="allowFlip" type="Boolean">Gets or sets whether the node's shape flips when users drag an edge over its opposite edge.</field>
			/// <field name="enableStyledText" type="Boolean">Gets or sets a value indicating whether styled text rendering is enabled.</field>
			/// <field name="flipX" type="Boolean">Gets or sets a value indicating whether the node's shape is fliped horizontally.</field>
			/// <field name="flipY" type="Boolean">Gets or sets a value indicating whether the node's shape is fliped vertically.</field>
			/// <field name="image" type="MindFusion.Diagramming.HTMLImageElement">Gets or sets the image displayed by this node.</field>
			/// <field name="imageAlign" type="MindFusion.Diagramming.ImageAlign">Gets or sets the alignment of node's image.</field>
			/// <field name="imageContent" type="String">Gets or sets a Base64-encoded image to display inside this node.</field>
			/// <field name="imageLocation" type="String">Gets or sets URL of the image to display inside this node.</field>
			/// <field name="imagePadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between node borders and image.</field>
			/// <field name="rotateImage" type="Boolean">Gets or sets a value indicating whether image gets rotated along with the node.</field>
			/// <field name="rotateText" type="Boolean">Gets or sets a value indicating whether text gets rotated along with the node.</field>
			/// <field name="shape" type="MindFusion.Diagramming.Shape | String">Gets or sets the geometric shape displayed by this node.</field>
			/// <field name="transparent" type="Boolean">Gets or sets a value indicating whether the node's geometry is visible.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		Shapes: function () {
			/// <summary>Provides alternative methods of access to the predefined shapes.</summary>
		},
		SimplePanel: function () {
			/// <summary>A layout container that arranges its child components on top of each other.</summary>
		},
		SinglePointerController: function (modifiedItem, adjustmentHandle) {
			/// <summary>Processes mouse or single-touch events targeting a diagram element.</summary>
			/// <param name="modifiedItem" type="DiagramItem">DiagramItem. The item that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">Object. An object representing the adjustment handle used to modify the item.</param>
		},
		StackPanel: function () {
			/// <summary>A layout container that arranges its child components stacked horizontally or vertically.</summary>
			/// <field name="orientation" type="MindFusion.Diagramming.Orientation">Gets or sets the stack orientation.</field>
		},
		Style: function (prototype) {
			/// <summary>Represents a set of appearance properties whose values can be inherited from parent objects if not set locally for an item.</summary>
			/// <param name="prototype" type="Style" optional="true">Optional. </param>
			/// <field name="backBrush" type="Object">Gets or sets the brush used to paint diagram background.</field>
			/// <field name="brush" type="Object">Gets or sets the brush used to fill the interior of diagram items.</field>
			/// <field name="captionBackBrush" type="Object">Gets or sets the brush used to fill nodes' caption bars.</field>
			/// <field name="fontName" type="String">Gets or sets the font name used to draw text of diagram items.</field>
			/// <field name="fontSize" type="Number">Gets or sets the font size used to draw text of diagram items.</field>
			/// <field name="fontStyle" type="MindFusion.Diagramming.FontStyle">Gets or sets the font style used to draw text of diagram items.</field>
			/// <field name="nodeEffects" type="Array">Gets or sets a list of effects applied to diagram nodes.</field>
			/// <field name="selectedBrush" type="Object">Gets or sets the brush used to paint the background of selected items.</field>
			/// <field name="selectedStroke" type="String">Gets or sets the color used to stroke outlines of selected items.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw shadows of diagram items.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke outlines of diagram items.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking outlines of diagram items.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking outlines of diagram items.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to draw text of diagram items.</field>
		},
		SvgContent: function () {
			/// <summary>SvgContent represents the markup code of an SVG drawing.</summary>
		},
		SvgExporter: function () {
			/// <summary>Creates SVG (Scalable Vector Graphics) drawings from the content of Diagram objects.</summary>
		},
		SvgNode: function (parent) {
			/// <summary>SvgNode instances are diagram nodes that can render SVG drawings.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="content" type="MindFusion.Diagramming.SvgContent">Gets or sets an SvgContent instance representing the SVG drawing rendered in this node.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
			/// <field name="allowFlip" type="Boolean">Gets or sets whether the node's shape flips when users drag an edge over its opposite edge. Inherited from ShapeNode.</field>
			/// <field name="enableStyledText" type="Boolean">Gets or sets a value indicating whether styled text rendering is enabled. Inherited from ShapeNode.</field>
			/// <field name="flipX" type="Boolean">Gets or sets a value indicating whether the node's shape is fliped horizontally. Inherited from ShapeNode.</field>
			/// <field name="flipY" type="Boolean">Gets or sets a value indicating whether the node's shape is fliped vertically. Inherited from ShapeNode.</field>
			/// <field name="image" type="MindFusion.Diagramming.HTMLImageElement">Gets or sets the image displayed by this node. Inherited from ShapeNode.</field>
			/// <field name="imageAlign" type="MindFusion.Diagramming.ImageAlign">Gets or sets the alignment of node's image. Inherited from ShapeNode.</field>
			/// <field name="imageContent" type="String">Gets or sets a Base64-encoded image to display inside this node. Inherited from ShapeNode.</field>
			/// <field name="imageLocation" type="String">Gets or sets URL of the image to display inside this node. Inherited from ShapeNode.</field>
			/// <field name="imagePadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between node borders and image. Inherited from ShapeNode.</field>
			/// <field name="rotateImage" type="Boolean">Gets or sets a value indicating whether image gets rotated along with the node. Inherited from ShapeNode.</field>
			/// <field name="rotateText" type="Boolean">Gets or sets a value indicating whether text gets rotated along with the node. Inherited from ShapeNode.</field>
			/// <field name="shape" type="MindFusion.Diagramming.Shape | String">Gets or sets the geometric shape displayed by this node. Inherited from ShapeNode.</field>
			/// <field name="transparent" type="Boolean">Gets or sets a value indicating whether the node's geometry is visible. Inherited from ShapeNode.</field>
		},
		TableConnectionPoint: function () {
			/// <summary>A class that represents a connection between an edge and a node in a graph.</summary>
			/// <field name="endPoint" type="MindFusion.Diagramming.Point">Calculates the coordinates of this connection point expressed in document coordinates.</field>
		},
		TableNode: function (parent) {
			/// <summary>TableNode instances are diagram nodes that can be used to display tabular or list data.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="allowResizeColumns" type="Boolean">Gets or sets a value indicating whether users are allowed to resize table columns.</field>
			/// <field name="allowResizeRows" type="Boolean">Gets or sets a value indicating whether users are allowed to resize table rows.</field>
			/// <field name="captionBackBrush" type="Object">Gets or sets an object specifying how to fill the caption bar.</field>
			/// <field name="captionFont" type="MindFusion.Diagramming.Font">Gets or sets the font used to render the node's caption text.</field>
			/// <field name="captionHeight" type="Number">Gets or sets the height of the node's caption area.</field>
			/// <field name="cellFrameStyle" type="MindFusion.Diagramming.CellFrameStyle">Gets or sets the style of cells' frame lines.</field>
			/// <field name="cellStyle" type="MindFusion.Diagramming.Style">Gets or sets the style used to draw table's cells.</field>
			/// <field name="columnCount" type="Number">Gets or sets the number of columns in the table.</field>
			/// <field name="connectionStyle" type="MindFusion.Diagramming.ConnectionStyle">Gets or sets whether drawing a link from/to this node should connectan individual table row, or the whole table as an integral entity.</field>
			/// <field name="currentScrollRow" type="Number">Gets or sets the table's current scroll position.</field>
			/// <field name="enableStyledText" type="Boolean">Gets or sets a value indicating whether styled text rendering is enabled.</field>
			/// <field name="rowCount" type="Number">Gets or sets the number of rows in the table.</field>
			/// <field name="scrollable" type="Boolean">Gets or sets whether the user is allowed to scroll the table rows.</field>
			/// <field name="shape" type="MindFusion.Diagramming.SimpleShape">Gets or sets the shape of the node's outline.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		Theme: function () {
			/// <summary>Represents a set of Style objects whose properties are used to render items of a specific type in the current diagram.</summary>
			/// <field name="styles" type="MindFusion.Diagramming.Map">A dictionary object that maps item type identifiers to Style objects.</field>
		},
		TreeItemEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of tree view items -related events.</summary>
			/// <field name="context" type="MindFusion.Diagramming.CanvasRenderingContext2D">Gets the canvas rendering context.</field>
			/// <field name="item" type="MindFusion.Diagramming.TreeViewItem">Gets the item related to the event.</field>
			/// <field name="mouseButton" type="MindFusion.Diagramming.MouseButton">Gets which mouse button has been pressed.</field>
			/// <field name="newText" type="String">Gets the text that has just been entered by the user.</field>
			/// <field name="node" type="MindFusion.Diagramming.TreeViewNode">Gets the node related to the event.</field>
			/// <field name="oldText" type="String">Gets the text that had been displayed in the node before the user edited it.</field>
		},
		TreeViewConnectionPoint: function () {
			/// <summary>A class that represents a connection between an edge and a node in a graph.</summary>
			/// <field name="endPoint" type="MindFusion.Diagramming.Point">Calculates the coordinates of this connection point expressed in document coordinates.</field>
		},
		TreeViewItem: function () {
			/// <summary>Represents a constituent item of the hierarchy displayed inside a TreeViewNode.</summary>
			/// <field name="brush" type="Object">Gets or sets the brush used to paint item's background.</field>
			/// <field name="children" type="Array">Gets a list of this item's children.</field>
			/// <field name="expanded" type="Boolean">Gets or sets a value indicating whether this item is expanded to show its children.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text.</field>
			/// <field name="height" type="Number">Gets or sets the height of this item.</field>
			/// <field name="image" type="MindFusion.Diagramming.HTMLImageElement">Gets or sets the image displayed by this item.</field>
			/// <field name="imageContent" type="String">Gets or sets a Base64-encoded image to display inside this item.</field>
			/// <field name="imageLocation" type="String">Gets or sets URL of the image to display inside this item.</field>
			/// <field name="imagePadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's borders and image.</field>
			/// <field name="parent" type="MindFusion.Diagramming.TreeViewItem">Gets the parent item of this item.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item.</field>
			/// <field name="textColor" type="String">Gets or sets the item's text color.</field>
			/// <field name="tooltip" type="String">Gets or sets the tooltip text that should be displayed when the mouse hovers over this item.</field>
		},
		TreeViewNode: function (parent) {
			/// <summary>TreeViewNode instances are diagram nodes that can draw hierarchical data.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. Diagram. The Diagram from which to obtain default values for the node properties.</param>
			/// <field name="captionBackBrush" type="Object">Gets or sets an object specifying how to fill the caption bar.</field>
			/// <field name="captionFont" type="MindFusion.Diagramming.Font">Gets or sets the font used to render the node's caption text.</field>
			/// <field name="captionHeight" type="Number">Gets or sets the height of the node's caption area.</field>
			/// <field name="connectionStyle" type="MindFusion.Diagramming.ConnectionStyle">Gets or sets whether drawing a link from/to this node should connectan individual TreeViewItem, or the whole node as an integral entity.</field>
			/// <field name="enableStyledText" type="Boolean">Gets or sets a value indicating whether styled text rendering is enabled.</field>
			/// <field name="flatItems" type="Array">Gets a list of all items in this node.</field>
			/// <field name="rootItems" type="Array">Gets a list of root items displayed in this node.</field>
			/// <field name="scrollable" type="Boolean">Gets or sets whether the node's items can be scrolled vertically.</field>
			/// <field name="scrollPosition" type="Number">Gets or sets the node's current scroll position.</field>
			/// <field name="shape" type="MindFusion.Diagramming.SimpleShape">Gets or sets the shape of the node's outline.</field>
			/// <field name="showLines" type="Boolean">Gets or sets whether to display lines connecting child items to parent items.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		VideoNode: function (parent) {
			/// <summary>A VideoNode instance renders video stream assigned to the videoLocation property.</summary>
			/// <param name="parent" type="Diagram" optional="true">Optional. A Diagram instance whose default node attributes are copied to this node.</param>
			/// <field name="videoLocation" type="String">Gets or sets the URL of the video stream displayed in this VideoNode.</field>
			/// <field name="brush" type="Object">Gets or sets an object specifying how to fill the interior of this item. Inherited from DiagramItem.</field>
			/// <field name="container" type="MindFusion.Diagramming.ContainerNode">Gets the parent ContainerNode containing this node. Inherited from DiagramItem.</field>
			/// <field name="effectiveBrush" type="Object">Gets the effective brush that should be used to paint this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveCaptionBackBrush" type="Object">Gets the effective brush that should be used to paint node's caption bar. Inherited from DiagramItem.</field>
			/// <field name="effectiveFont" type="MindFusion.Diagramming.Font">Gets the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontName" type="String">Gets the name of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontSize" type="Number">Gets the size of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveFontStyle" type="MindFusion.Diagramming.FontStyle">Gets the style of the effective font that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveShadowColor" type="String">Gets the effective color that should be used to render this item's shadow. Inherited from DiagramItem.</field>
			/// <field name="effectiveStroke" type="String">Gets the effective color that should be used to stroke this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets the effective line dash pattern that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveStrokeThickness" type="Number">Gets the effective line thickness that should be applied when stroking this item. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextColor" type="String">Gets the effective text color that should be used to render this item's text. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStroke" type="String">Gets the effective text color that should be used to render this item's text outline. Inherited from DiagramItem.</field>
			/// <field name="effectiveTextStrokeThickness" type="Number">Gets the effective width of the text outline of this item. Inherited from DiagramItem.</field>
			/// <field name="font" type="MindFusion.Diagramming.Font">Gets or sets the font used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="graphicsContent" type="Array">Gets an array of visual elements used to render this item on the canvas. Inherited from DiagramItem.</field>
			/// <field name="hyperLink" type="String">Gets or sets the hyperlink associated with this diagram item. Inherited from DiagramItem.</field>
			/// <field name="id" type="Object">Gets or sets a custom identifier associated with this item. Inherited from DiagramItem.</field>
			/// <field name="ignoreLayout" type="Boolean">Gets or sets a value indicating whether the position of this item should not be changed by automatic layout methods. Inherited from DiagramItem.</field>
			/// <field name="layoutTraits" type="Object">Gets an object containing properties specific to individual layout algorithms. Inherited from DiagramItem.</field>
			/// <field name="lineAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the vertical alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="locked" type="Boolean">Gets or sets whether users are allowed to interact with this item. Inherited from DiagramItem.</field>
			/// <field name="parent" type="MindFusion.Diagramming.Diagram">Gets the Diagram to which this item belongs. Inherited from DiagramItem.</field>
			/// <field name="pen" type="String">Gets or sets the color used to stroke item's borders. Inherited from DiagramItem.</field>
			/// <field name="selected" type="Boolean">Gets or sets a value indicating whether a diagram item is selected. Inherited from DiagramItem.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color used to draw item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetX" type="Number">Gets or sets the horizontal offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="shadowOffsetY" type="Number">Gets or sets the vertical offset of item's shadow. Inherited from DiagramItem.</field>
			/// <field name="stroke" type="String">Gets or sets the color used to stroke item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeDashStyle" type="MindFusion.Diagramming.DashStyle">Gets or sets the line dash pattern applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="strokeThickness" type="Number">Gets or sets the line width applied when stroking item's frame. Inherited from DiagramItem.</field>
			/// <field name="style" type="MindFusion.Diagramming.Style">Gets or sets the style associated with this item. Inherited from DiagramItem.</field>
			/// <field name="tag" type="Object">Gets or sets custom data tag associated with this item. Inherited from DiagramItem.</field>
			/// <field name="text" type="String">Gets or sets the text label displayed by this item. Inherited from DiagramItem.</field>
			/// <field name="textAlignment" type="MindFusion.Diagramming.Alignment">Gets or sets the horizontal alignment of item's text. Inherited from DiagramItem.</field>
			/// <field name="textColor" type="String">Gets or sets the color used to fill item's text. Inherited from DiagramItem.</field>
			/// <field name="textComponent" type="MindFusion.Diagramming.Text">Gets the Text object instance used to render item's text. Inherited from DiagramItem.</field>
			/// <field name="textPadding" type="MindFusion.Diagramming.Thickness">Gets or sets the padding distance between item's boundaries and text label. Inherited from DiagramItem.</field>
			/// <field name="textStroke" type="String">Gets or sets the color used to stroke item's text. Inherited from DiagramItem.</field>
			/// <field name="textStrokeThickness" type="Number">Gets or sets the outline width of item's text. Inherited from DiagramItem.</field>
			/// <field name="tooltip" type="String">Gets or sets tooltip text that should be displayed when the mouse hovers over this item. Inherited from DiagramItem.</field>
			/// <field name="topLevel" type="Boolean">Gets if this is a top-level item in the diagram. Inherited from DiagramItem.</field>
			/// <field name="visible" type="Boolean">Gets or sets a value indicating whether this item is visible. Inherited from DiagramItem.</field>
			/// <field name="weight" type="Number">Gets or sets a weight value used by layout and path-finding algorithms. Inherited from DiagramItem.</field>
			/// <field name="zIndex" type="Number">Gets the z-order position of this item. Inherited from DiagramItem.</field>
			/// <field name="allowIncomingLinks" type="Boolean">Gets or sets whether users are allowed to draw incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="allowOutgoingLinks" type="Boolean">Gets or sets whether users are allowed to draw outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="anchorPattern" type="MindFusion.Diagramming.AnchorPattern">Gets or sets the anchor points to which links attach when connected to this node. Inherited from DiagramNode.</field>
			/// <field name="attachedNodes" type="Array">Returns the nodes attached to this node. Inherited from DiagramNode.</field>
			/// <field name="bounds" type="MindFusion.Diagramming.Rect">Gets or sets a rectangle that defines the position of this node. Inherited from DiagramNode.</field>
			/// <field name="center" type="MindFusion.Diagramming.Point">Gets the center of this node's bounding rectangle. Inherited from DiagramNode.</field>
			/// <field name="effectiveEffects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="effects" type="Array">Gets the effects applied to this node. Inherited from DiagramNode.</field>
			/// <field name="enabledHandles" type="MindFusion.Diagramming.AdjustmentHandles">Gets or sets a value indicating which adjustment handles are enabled for this node. Inherited from DiagramNode.</field>
			/// <field name="expandable" type="Boolean">Gets or sets whether users are allowed to expand or collapse the subtree rooted at this node. Inherited from DiagramNode.</field>
			/// <field name="expanded" type="Boolean">Gets or sets whether the subtree rooted at this node is expanded. Inherited from DiagramNode.</field>
			/// <field name="handlesStyle" type="MindFusion.Diagramming.HandlesStyle">Gets or sets a value specifying appearance and behavior of node's adjustment handles. Inherited from DiagramNode.</field>
			/// <field name="incomingLinks" type="Array">Gets the incoming links to this node. Inherited from DiagramNode.</field>
			/// <field name="masterNode" type="MindFusion.Diagramming.DiagramNode">Returns the node to which this node is attached. Inherited from DiagramNode.</field>
			/// <field name="obstacle" type="Boolean">Gets or sets whether this node is considered an obstacle by link routing algorithms. Inherited from DiagramNode.</field>
			/// <field name="outgoingLinks" type="Array">Gets the outgoing links from this node. Inherited from DiagramNode.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the angle at which this node is rotated. Inherited from DiagramNode.</field>
			/// <field name="showDeleteButton" type="Boolean">Gets or sets whether this node displays a delete button. Inherited from DiagramNode.</field>
		},
		XmlPersistContext: function (diagram) {
			/// <summary>Contains helper methods for serialization of diagram contents to and from XML documents.</summary>
			/// <param name="diagram" type="Diagram">Diagram. The Diagram that will be serialized or deserialized.</param>
		},
		__namespace: true
	},
	Drawing: {
		Border3D: function (rect) {
			/// <summary>Represents a 3D border.</summary>
			/// <param name="rect" type="Rect">Rect. A Rect instance containing the border coordinates.</param>
		},
		Component: function () {
			/// <summary>Represents components in CompositeNode visual tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component. Inherited from ComponentBase.</field>
		},
		ComponentBase: function () {
			/// <summary>A base class for components in CompositeNode visual tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component.</field>
		},
		Container: function () {
			/// <summary>Represents container components in drawing tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component. Inherited from ComponentBase.</field>
		},
		DrawingUtils: function () {
			/// <summary>Contains drawing-related helper functions.</summary>
		},
		Ellipse: function (x, y, width, height) {
			/// <summary>Represents an Ellipse.</summary>
			/// <param name="x" type="Number">Number. The X-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="y" type="Number">Number. The Y-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="width" type="Number">Number. The width of the Ellipse.</param>
			/// <param name="height" type="Number">Number. The height of the Ellipse.</param>
			/// <field name="height" type="Number">Gets or sets the height of the ellipse.</field>
			/// <field name="width" type="Number">Gets or sets the width of the ellipse.</field>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the upper-left corner of the ellipse.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the upper-left corner of the ellipse.</field>
		},
		Font: function (name, size, bold, italic, underline) {
			/// <summary>Represents a font.</summary>
			/// <param name="name" type="String">String. The font name.</param>
			/// <param name="size" type="Number" optional="true">Optional. Number. The font size.</param>
			/// <param name="bold" type="Boolean | FontStyle" optional="true">Optional. Boolean | FontStyle. true if this font is bold, or false otherwise.</param>
			/// <param name="italic" type="Boolean" optional="true">Optional. Boolean. true if this font is italic, or false otherwise.</param>
			/// <param name="underline" type="Boolean" optional="true">Optional. Boolean. true if this font is underlined, or false otherwise.</param>
			/// <field name="bold" type="Boolean">Gets whether the font is bold.</field>
			/// <field name="fontStyle" type="MindFusion.Drawing.FontStyle">Gets or sets the style of this font.</field>
			/// <field name="italic" type="Boolean">Gets whether the font is italic.</field>
			/// <field name="name" type="String">Gets or sets the name of this font.</field>
			/// <field name="size" type="Number">Gets or sets the size of this font.</field>
			/// <field name="underline" type="Boolean">Gets whether the font is underlined.</field>
		},
		GraphicsUnit: function () {
			/// <summary>Specifies the unit of measure for length and size properties.</summary>
			/// <field name="Centimeter" type="Number">Specifies the centimeter as the unit of measure.</field>
			/// <field name="Display" type="Number">Specifies the display unit as the unit of measure.</field>
			/// <field name="Document" type="Number">Specifies the document unit as the unit of measure.</field>
			/// <field name="Inch" type="Number">Specifies the inch as the unit of measure.</field>
			/// <field name="Millimeter" type="Number">Specifies the millimeter as the unit of measure.</field>
			/// <field name="Percent" type="Number">Specifies the world coordinate system unit as the unit of measure.</field>
			/// <field name="Pixel" type="Number">Specifies the pixel unit as the unit of measure.</field>
			/// <field name="Point" type="Number">Specifies a printer's point as the unit of measure.</field>
			/// <field name="World" type="Number">Specifies the world coordinate system unit as the unit of measure.</field>
			/// <field name="WpfPoint" type="Number">Specifies the WpfPoint unit as the unit of measure.</field>
		},
		Image: function (bounds) {
			/// <summary>Represents an image.</summary>
			/// <param name="bounds" type="Rect">Rect. The bounds of the image.</param>
		},
		Path: function (pathString) {
			/// <summary>Represents a path.</summary>
			/// <param name="pathString" type="String" optional="true">Optional. String. A string representing the path figures.</param>
			/// <field name="brush" type="Object">Gets or sets the brush used to fill a closed path.</field>
			/// <field name="pen" type="Object">Gets or sets the pen used to draw the path.</field>
			/// <field name="text" type="String">Gets or sets the text displayed inside this path.</field>
		},
		Point: function (x, y) {
			/// <summary>Represents a point.</summary>
			/// <param name="x" type="Number">The X-coordinate of the Point.</param>
			/// <param name="y" type="Number">The Y-coordinate of the Point.</param>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the point.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the point.</field>
		},
		Rect: function () {
			/// <summary>Represents a rectangle.</summary>
			/// <field name="height" type="Number">Gets or sets the height of the rectangle.</field>
			/// <field name="width" type="Number">Gets or sets the width of the rectangle.</field>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the upper-left corner of the rectangle.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the upper-left corner of the rectangle.</field>
		},
		Size: function (width, height) {
			/// <summary>Represents the size of 2D object.</summary>
			/// <param name="width" type="Number">Number. Specifies width.</param>
			/// <param name="height" type="Number">Number. Specifies height.</param>
			/// <field name="height" type="Number">Gets or sets the size height.</field>
			/// <field name="width" type="Number">Gets or sets the size width.</field>
		},
		StringFormat: function () {
			/// <summary>Encapsulates text layout information.</summary>
			/// <field name="alignment" type="MindFusion.Drawing.StringAlignment">Gets or sets the horizontal alignment of the text.</field>
			/// <field name="lineAlignment" type="MindFusion.Drawing.StringAlignment">Gets or sets the vertical alignment of the text.</field>
		},
		Text: function (text, bounds) {
			/// <summary>Represents a text container.</summary>
			/// <param name="text" type="String">String. The text to be displayed in the container.</param>
			/// <param name="bounds" type="Rect">Rect. The bounds of the container.</param>
			/// <field name="font" type="MindFusion.Drawing.Font">Gets or sets the font used to render text.</field>
			/// <field name="rotationAngle" type="Number">Gets a value indicating the rotation of the text container.</field>
			/// <field name="text" type="String">Gets or sets the text to render.</field>
		},
		Thickness: function () {
			/// <summary>Describes the thickness of a rectangular frame.</summary>
			/// <field name="bottom" type="Number">Gets or sets the width of the bottom side of the frame.</field>
			/// <field name="isRelative" type="Boolean">Gets or sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</field>
			/// <field name="left" type="Number">Gets or sets the width of the left side of the frame.</field>
			/// <field name="right" type="Number">Gets or sets the width of the right side of the frame.</field>
			/// <field name="top" type="Number">Gets or sets the width of the top side of the frame.</field>
		},
		Vector: function (x, y) {
			/// <summary>Represents displacement in 2D space.</summary>
			/// <param name="x" type="Number">Number. The X-coordinate of the Vector.</param>
			/// <param name="y" type="Number">Number. The Y-coordinate of the Vector.</param>
		},
		Video: function (bounds) {
			/// <summary>A component that displays video stream.</summary>
			/// <param name="bounds" type="Rect">Rect. The bounds of the Video.</param>
			/// <field name="mediaLocation" type="String">Gets or sets URL of the video stream displayed in this component.</field>
		},
		__namespace: true
	},
	Gauges: {
		ArcArea: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		ArcSegment: function () {
			/// <summary>Represents an elliptical arc between two points.</summary>
		},
		BaseGauge: function (element) {
			/// <summary>Represents the base class of linear and oval gauges.</summary>
			/// <param name="element" type="Object">The Div DOM element this gauge is associated with.</param>
		},
		BaseScale: function (parent) {
			/// <summary>Represents a scale within a gauge control.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		CenterPanel: function () {
			/// <summary>Represents a container which centers its children and makes them with square size.</summary>
		},
		CustomInterval: function () {
			/// <summary>Represents an interval with associated custom values for fill and stroke.</summary>
		},
		Ellipse: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Gauge component.</summary>
		},
		GeometryFactory: function () {
			/// <summary>A factory class for various geometry objects.</summary>
		},
		Length: function (value, type) {
			/// <summary>Specifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size.</summary>
			/// <param name="value" type="Number">A number specifying the initial length value.</param>
			/// <param name="type" type="LengthType">A member of the LengthType enumeration specifying the length type.</param>
		},
		LinearGauge: function (element) {
			/// <summary>Represents a linear gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this LinearGauge is associated with.</param>
		},
		LinearScale: function (parent) {
			/// <summary>Represents a linear scale.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		LineSegment: function () {
			/// <summary>Represents a line between two points.</summary>
		},
		MajorTickSettings: function (parent) {
			/// <summary>Provides settings for the major ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MiddleTickSettings: function (parent) {
			/// <summary>Provides settings for the middle ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MinorTickSettings: function (parent) {
			/// <summary>Provides settings for the minor ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MouseInfo: function () {
			/// <summary>Provides mouse information when processing mouse events in the visual element hierarchy.</summary>
		},
		OvalGauge: function (element) {
			/// <summary>Represents a circular gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this OvalGauge is associated with.</param>
		},
		OvalScale: function (parent) {
			/// <summary>Represents a radial scale.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		PaintEventArgs: function () {
			/// <summary>Provides data for the various custom painting event.</summary>
		},
		PathFigure: function (data) {
			/// <summary>Represents a connected series of geometric segments.</summary>
			/// <param name="data" type="String">The path data string.</param>
		},
		Pointer: function () {
			/// <summary>Represents a needle (or arrow) within a gauge scale.</summary>
		},
		PrepaintEventArgs: function () {
			/// <summary>Provides data for various pre-paint events.</summary>
		},
		Range: function () {
			/// <summary>Represents a range within a gauge scale.</summary>
		},
		RoundRectangle: function () {
			/// <summary>Represents a rounded rectangle.</summary>
		},
		Segment: function () {
			/// <summary>Represents a segment of a PathFigure object.</summary>
		},
		Thickness: function (left, top, right, bottom, isRelative) {
			/// <summary>Describes the thickness on all four sides of a rectangular frame.</summary>
			/// <param name="left" type="Number">The width of the left side of the frame.</param>
			/// <param name="top" type="Number">The width of the top side of the frame.</param>
			/// <param name="right" type="Number">The width of the right side of the frame.</param>
			/// <param name="bottom" type="Number">The width of the bottom side of the frame.</param>
			/// <param name="isRelative" type="Number">A flag indicating whether the thickness properties are expressed as relative or absolute quantities.</param>
		},
		Tick: function (settings) {
			/// <summary>Represents a tick mark within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this tick.</param>
		},
		TickLabel: function (settings) {
			/// <summary>Represents a tick label within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this label.</param>
		},
		TickSettings: function (parent) {
			/// <summary>Provides settings for the ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		ValueChangedEventArgs: function () {
			/// <summary>Contains the arguments passed to value changed notification handlers.</summary>
		},
		ValueChangingEventArgs: function () {
			/// <summary>Contains the arguments passed to value changing notification handlers.</summary>
		},
		VisualElement: function () {
			/// <summary>Represents an object with outline and fill, which can render itself to a canvas.</summary>
		},
		VisualElementContainer: function () {
			/// <summary>Represents a visual element which contains other visual elements.</summary>
		},
		__namespace: true
	},
	Graphs: {
		BorderedTreeLayout: function () {
			/// <summary>Implements algorithms for arranging tree structures.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="direction" type="MindFusion.Graphs.LayoutDirection">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="keepRootPosition" type="Boolean">Gets or sets a value indicating whether to keep the root node at its original position.</field>
			/// <field name="levelDistance" type="Number">Gets or sets the space to leave between adjacent levels of the tree.</field>
			/// <field name="linkType" type="MindFusion.Graphs.TreeLayoutLinkType">Gets or sets the type of links in the arranged tree.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the space to leave between adjacent nodes on the same level.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		Edge: function (origin, destination) {
			/// <summary>Represents an edge connecting two vertices in a graph.</summary>
			/// <param name="origin" type="Vertex">Vertex. The origin vertex.</param>
			/// <param name="destination" type="Vertex">Vertex. The destination vertex.</param>
		},
		FlowchartLayout: function () {
			/// <summary>FlowchartLayout can be used to arrange flowcharts representing program source code.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="branchPadding" type="Number">Gets or sets how much space to leave between adjacent decision branches in the flowchart.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="linkPadding" type="Number">Gets or sets how much space to leave between adjacent back links designating nested loops.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the distance between consecutive nodes in the flowchart.</field>
			/// <field name="orientation" type="MindFusion.Graphs.Orientation">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		FractalLayout: function () {
			/// <summary>The FractalLayout tree layout algorithm places child nodes symmetrically around their parent node. Nodes at the lowest level are arranged directly in a circle around their parent. At the upper level, the already arranged nodes form branches that are arranged in a circle around the new parent node. The algorithm is recursively repeated till the highest level is reached.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="root" type="MindFusion.Graphs.DiagramNode">Gets or sets the node that should be placed at the center of the tree.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		Graph: function () {
			/// <summary>Represents a graph.</summary>
		},
		LayeredLayout: function () {
			/// <summary>Implements a layered graph layout algorithm.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="direction" type="MindFusion.Graphs.LayoutDirection">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="layerDistance" type="Number">Gets or sets the desired distance between layer axis lines.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the space to leave between adjacent nodes on the same level.</field>
			/// <field name="siftingRounds" type="Number">Gets or sets the number of iterations to perform when untwining the layout.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		Layout: function () {
			/// <summary>Superclass of graph layout algorithms that defines their common properties.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets how to align links to the anchor points of nodes.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets whether to treat each group of attached nodes as a single vertex in the arranged graph.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
		},
		OrthogonalLayout: function () {
			/// <summary>Implements orthogonal graph layout algorithm.Each link is drawn as a chain of alternating horizontal and vertical segments.Nodes are placed in a way that facilitates few links bends and crossings.</summary>
			/// <field name="minLaneSize" type="Number">Gets or sets a value indicating the minimum size of a lane.</field>
			/// <field name="padding" type="Number">Gets or sets a value indicating how much space to leave between nodes in adjacent lanes.</field>
			/// <field name="refine" type="Boolean">Gets or sets a value indicating whether to refine the layout.</field>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets how to align links to the anchor points of nodes. Inherited from Layout.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets whether to treat each group of attached nodes as a single vertex in the arranged graph. Inherited from Layout.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets how multiple independent graphs in the diagram should be positioned relatively to each other. Inherited from Layout.</field>
		},
		Path: function () {
			/// <summary>Initializes a new instance of the Path class.</summary>
		},
		PathFinder: function () {
			/// <summary>Initializes a new instance of the PathFinder class.</summary>
		},
		SpringLayout: function () {
			/// <summary>Implements the Spring-Embedder graph layout algorithm.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="iterations" type="Number">Gets or sets the number of iterations to run the layout routine.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the desired distance between nodes.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		TopologicalLayout: function () {
			/// <summary>Applies&#160;topological ordering&#160;to&#160;the graph. This layout makes it easy to discern graph features such as overall flow direction, cycles and nested cycles.</summary>
			/// <field name="bendAdjacentLinks" type="Boolean">Gets or sets a value indicating whether to bend links connecting adjacent nodes or draw them as straight lines.</field>
			/// <field name="direction" type="MindFusion.Graphs.LayoutDirection">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the desired distance between adjacent nodes.</field>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets how to align links to the anchor points of nodes. Inherited from Layout.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets whether to treat each group of attached nodes as a single vertex in the arranged graph. Inherited from Layout.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets how multiple independent graphs in the diagram should be positioned relatively to each other. Inherited from Layout.</field>
		},
		TreeLayout: function () {
			/// <summary>Implements algorithms for arranging tree structures.</summary>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets a value indicating how to align links to the anchor points of nodes.</field>
			/// <field name="compactAssistants" type="Boolean">Gets or sets a value indicating whether the "assistant" nodes on the same side of a single parentare arranged as close to each other as possible.</field>
			/// <field name="direction" type="MindFusion.Graphs.LayoutDirection">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="enableAssistants" type="Boolean">Gets or sets a value Indicating whether the "assistant" trait is regarded when performing the layout.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets a value indicating whether to treat each group of nodes as a single vertex in the arranged graph.</field>
			/// <field name="keepRootPosition" type="Boolean">Gets or sets a value indicating whether to keep the root node at its original position.</field>
			/// <field name="levelDistance" type="Number">Gets or sets the space to leave between adjacent levels of the tree.</field>
			/// <field name="linkType" type="MindFusion.Graphs.TreeLayoutLinkType">Gets or sets the type of the links in the arranged tree.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</field>
			/// <field name="nodeDistance" type="Number">Gets or sets the space to leave between adjacent nodes on the same level.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
		},
		TreeMapLayout: function () {
			/// <summary>Performs tree-map layout on a graph.</summary>
			/// <field name="containerPadding" type="Number">Gets or sets the padding inside containers.</field>
			/// <field name="layoutArea" type="MindFusion.Graphs.Rect">Gets or sets the rectangle in which the layout will try to arrange nodes.</field>
			/// <field name="orientation" type="MindFusion.Graphs.Orientation">Gets or sets the orientation of the arranged graph.</field>
			/// <field name="padding" type="Number">Gets or sets the distance between adjacent nodes.</field>
			/// <field name="squarify" type="Boolean">Gets or sets a value indicating whether the layout should attempt to keep the dimension ratio of nodes closer to 1.</field>
			/// <field name="anchoring" type="MindFusion.Graphs.Anchoring">Gets or sets how to align links to the anchor points of nodes. Inherited from Layout.</field>
			/// <field name="keepGroupLayout" type="Boolean">Gets or sets whether to treat each group of attached nodes as a single vertex in the arranged graph. Inherited from Layout.</field>
			/// <field name="margins" type="Number">Gets or sets the margins' size around individual subgraphs processed by this layout object. Inherited from Layout.</field>
			/// <field name="multipleGraphsPlacement" type="MindFusion.Graphs.MultipleGraphsPlacement">Gets or sets how multiple independent graphs in the diagram should be positioned relatively to each other. Inherited from Layout.</field>
		},
		Vertex: function () {
			/// <summary>Represents a vertex in a graph.</summary>
		},
		__namespace: true
	},
	Mapping: {
		Events: function () {
			/// <summary>Defines all events raised by the MapView component.</summary>
		},
		MapEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of global map events such as clicked.</summary>
		},
		MapView: function (element) {
			/// <summary>The MapView renders the contents of a map on a web page.</summary>
			/// <param name="element" type="Object">Type: Object&#10;The Div DOM Element this MapView is associated with.</param>
		},
		__namespace: true
	},
	__namespace: true
};

MindFusion.Animations.Animation.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the Animation.</summary>
		/// <param name="eventName" type="String">The name of the event.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	dispose: function() {
		/// <summary>Sys.IDisposable implementation.</summary>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the Animation.</summary>
		/// <param name="eventName" type="String">The name of the event.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	start: function() {
		/// <summary>Starts or resumes the animation.</summary>
	},
	stop: function() {
		/// <summary>Stops the animation.</summary>
	}
};
MindFusion.Animations.Animation.__class = true;

MindFusion.Animations.AnimationType = {
		/// <summary>Specifies the animation function used by an Animation object.</summary>
		/// <field name="BackBow">Represents an effect that simulates a retraction in the motion of the animation. The amplitude of the retraction can be controlled through the Animation's param property. The default param value is 1.5;</field>
		/// <field name="Bounce">Represents a bouncing effect animation.</field>
		/// <field name="Circular">Represents an animation that accelerates/deccelerates using a circular function.</field>
		/// <field name="Custom">Specifies a user-set function. When this value is used the actual animation function must be set through the Animation's custom function callback.</field>
		/// <field name="Elastic">Represents an oscillating effect animation. The oscillation frequency can be controlled through the Animation's param property. The default param value is 0.5;</field>
		/// <field name="Exponential">Represents an animation that accelerates/deccelerates using an exponential function. The exponent can be set through the Animation's param property. The default exponent equals 10.</field>
		/// <field name="Linear">Represents an animation that accelerates/deccelerates using a linear function.</field>
		/// <field name="Power">Represents an animation that accelerates/deccelerates through exponentiation formula - x^n where n can be set through the Animation's param property. The default exponent equals 2.</field>
	BackBow: 4,
	Bounce: 5,
	Circular: 3,
	Custom: 7,
	Elastic: 6,
	Exponential: 2,
	Linear: 0,
	Power: 1
}
MindFusion.Animations.AnimationType.__enum = true;

MindFusion.Animations.EasingType = {
		/// <summary>Specifies the easing applied to an animation.</summary>
		/// <field name="EaseIn">Follows the animation function associated with the Animation.</field>
		/// <field name="EaseInOut">Uses EaseIn for the first half the the Animation's duration and EaseOut for the second half.</field>
		/// <field name="EaseOut">Inverses the animation function associated with the Animation.</field>
		/// <field name="EaseOutIn">Uses EaseOut for the first half the the Animation's duration and EaseIn for the second half.</field>
	EaseIn: 0,
	EaseInOut: 2,
	EaseOut: 1,
	EaseOutIn: 3
}
MindFusion.Animations.EasingType.__enum = true;

MindFusion.Animations.Events.prototype = {
};
MindFusion.Animations.Events.__class = true;

MindFusion.Collections.Grid.prototype = {
};
MindFusion.Collections.Grid.__class = true;

MindFusion.Collections.ItemEventArgs.prototype = {
	get_item: function() {
		/// <summary>Gets the item related to the event.</summary>
		/// <returns type="Object"></returns>
	}
};
MindFusion.Collections.ItemEventArgs.__class = true;

MindFusion.Collections.ObservableCollection.prototype = {
	add: function(item) {
		/// <summary>Adds the specified element to the collection.</summary>
		/// <param name="item" type="Object">The element to add.</param>
	},
	add_itemAdded: function(handler) {
		/// <summary>Registers the specified function as a handler for the itemAdded event.</summary>
		/// <param name="handler" type="Function">The function to be invoked when items are added to the collection.</param>
	},
	remove_itemAdded: function(handler) {
		/// <summary>Unregisters the specified function as a handler for the itemAdded event.</summary>
		/// <param name="handler" type="Function">The function to unregister.</param>
	}
};
MindFusion.Collections.ObservableCollection.__class = true;

MindFusion.Collections.Queue.prototype = {
	dequeue: function() {
		/// <summary>Removes and returns the object at the beginning of the queue.</summary>
		/// <returns type="Object">The object that is removed from the beginning of the queue.</returns>
	},
	enqueue: function(value) {
		/// <summary>Adds an object to the end of the queue.</summary>
		/// <param name="value" type="Object">The object to add.</param>
	},
	getSize: function() {
		/// <summary>Gets the number of elements in the queue.</summary>
		/// <returns type="Number"></returns>
	}
};
MindFusion.Collections.Queue.__class = true;

MindFusion.Controls.Alignment = {
		/// <summary>Specifies the alignment of text relative to its layout rectangle.</summary>
		/// <field name="Center">The text is drawn in the center of the layout rectangle.</field>
		/// <field name="Far">The text is drawn in the far corner of the layout rectangle.</field>
		/// <field name="Near">The text is drawn in the near corner of the layout rectangle.</field>
	Center: 1,
	Far: 2,
	Near: 0
}
MindFusion.Controls.Alignment.__enum = true;

MindFusion.Controls.CancelEventArgs.prototype = {
};
MindFusion.Controls.CancelEventArgs.__class = true;

MindFusion.Controls.Canvas.prototype = {
	dispose: function() {
		/// <summary>Overrides Disposable.dispose</summary>
	},
	invalidate: function(rect, force) {
		/// <summary>Invalidates the canvas or a region of the canvas, causing it to be repainted.</summary>
		/// <param name="rect" type="Rect" optional="true">Optional. Rect. A Rect instance specifying the region that should be repainted. If not specified, the whole diagram will be repainted.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. true to force redraw even if currently painting, or false otherwise.</param>
	},
	repaint: function(printOptions) {
		/// <summary>Repaints the canvas.</summary>
		/// <param name="printOptions" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	}
};
MindFusion.Controls.Canvas.__class = true;

MindFusion.Controls.CanvasControl.prototype = {
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
};
MindFusion.Controls.CanvasControl.__class = true;

MindFusion.Controls.CanvasControl.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.CanvasControl.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.CanvasControl.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.CanvasControl.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Controls.Control.prototype = {
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	}
};
MindFusion.Controls.Control.__class = true;

MindFusion.Controls.Control.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element.</summary>
};
MindFusion.Controls.Control.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element.</summary>
};
MindFusion.Controls.Control.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.Control.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Controls.Disposable.prototype = {
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	}
};
MindFusion.Controls.Disposable.__class = true;

MindFusion.Controls.DomUtils.prototype = {
};
MindFusion.Controls.DomUtils.__class = true;

MindFusion.Controls.DomUtils.formatString = function() {
	/// <summary>Formats the specified string according to the specified parameters.</summary>
};
MindFusion.Controls.DomUtils.getBounds = function(element, parent, includeScroll) {
	/// <summary>Gets the bounds of the specified element.</summary>
	/// <param name="element" type="HTMLElement">HTMLElement. The element to check.</param>
	/// <param name="parent" type="HTMLElement" optional="true">Optional. HTMLElement. The parent of the element. If supplied, the returned bounds will be relative to the parent element bounds.</param>
	/// <param name="includeScroll" type="Boolean" optional="true">Optional. Boolean. For internal use.</param>
	/// <returns type="Rect">Rect. The bounding rectangle.</returns>
};
MindFusion.Controls.DomUtils.getElementAttributes = function() {
	/// <summary>Gets an object containing element attributes that have values.</summary>
};
MindFusion.Controls.DomUtils.HTMLtoXHTML = function(html) {
	/// <summary>Converts HTML to XHMTL.</summary>
	/// <param name="html" type="String">String. The HTML to convert.</param>
	/// <returns type="String">String. The resulting XHTML.</returns>
};
MindFusion.Controls.DomUtils.loadImageList = function(images) {
	/// <summary>Loads the images from the specified list of image url-s.</summary>
	/// <param name="images" type="Array">Array. An array of image url-s.</param>
	/// <returns type="Promise">Promise. Promise object contaning an array of images in base64 format.</returns>
};
MindFusion.Controls.DomUtils.setBounds = function(element, bounds) {
	/// <summary>Sets the bounds of the specified element.</summary>
	/// <param name="element" type="HTMLElement">HTMLElement. The element.</param>
	/// <param name="bounds" type="Rect">Rect. The bounding rectangle.</param>
};
MindFusion.Controls.DomUtils.setSize = function(element, size) {
	/// <summary>Sets the size of the specified element.</summary>
	/// <param name="element" type="HTMLElement">HTMLElement. The element.</param>
	/// <param name="size" type="Size">Size. The new size.</param>
};
MindFusion.Controls.DomUtils.toDataUrl = function(url, callback) {
	/// <summary>Converts an image to base64 string.</summary>
	/// <param name="url" type="String">String. The url of the image.</param>
	/// <param name="callback" type="function">function. The callback function.</param>
	/// <returns type="String">String. The base64-encoded string, representing the image.</returns>
};

MindFusion.Controls.EventArgs.prototype = {
};
MindFusion.Controls.EventArgs.__class = true;

MindFusion.Controls.Events.prototype = {
};
MindFusion.Controls.Events.__class = true;

MindFusion.Controls.MouseButton = {
		/// <summary>Specifies which button was pressed to trigger the event.</summary>
		/// <field name="Auxiliary">Auxiliary button pressed, usually the wheel button or the middle button.</field>
		/// <field name="Fifth">Fifth button, typically the Browser Forward button.</field>
		/// <field name="Fourth">Fourth button, typically the Browser Back button.</field>
		/// <field name="Main">Main button pressed, usually the left button or the un-initialized state.</field>
		/// <field name="Secondary">Secondary button pressed, usually the right button.</field>
	Auxiliary: 1,
	Fifth: 4,
	Fourth: 3,
	Main: 0,
	Secondary: 2
}
MindFusion.Controls.MouseButton.__enum = true;

MindFusion.Controls.MouseCursors = {
		/// <summary>Specifies the type of the mouse cursor.</summary>
}
MindFusion.Controls.MouseCursors.__enum = true;

MindFusion.Controls.TickPosition = {
		/// <summary>Specifies the position of trackbar ticks.</summary>
		/// <field name="Both">Ticks are rendered on both sides of the trackbar.</field>
		/// <field name="Left">Ticks are rendered on the left side of the trackbar.</field>
		/// <field name="None">There are no ticks rendered.</field>
		/// <field name="Right">Ticks are rendered on the right side of the trackbar.</field>
	Both: 3,
	Left: 1,
	None: 0,
	Right: 2
}
MindFusion.Controls.TickPosition.__enum = true;

MindFusion.Controls.ZoomControl.prototype = {
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	}
};
MindFusion.Controls.ZoomControl.__class = true;

MindFusion.Controls.ZoomControl.create = function(element) {
	/// <summary>Creates and initializes a new ZoomControl from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The DOM element that the zoomControl should be attached to.</param>
	/// <returns type="ZoomControl">A ZoomControl object that represents the newly created zoom control.</returns>
};
MindFusion.Controls.ZoomControl.find = function(id) {
	/// <summary>Returns the specified ZoomControl object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the ZoomControl's DOM element.</param>
	/// <returns type="ZoomControl">A ZoomControl object with the specified id, if found, or&#160;null otherwise.</returns>
};
MindFusion.Controls.ZoomControl.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.ZoomControl.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.ZoomControl.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.ZoomControl.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Diagramming.Lanes.Cell.prototype = {
	loadFromXml: function(xmlElement, context) {
		/// <summary>Deserializes the cell from the specified XML element</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Serializes the cell matrix to the specified XML element</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Lanes.Cell.__class = true;

MindFusion.Diagramming.Lanes.Grid.prototype = {
	addColumnHeader: function(header, parent, i) {
		/// <summary>Adds the specified header to the grid as a new column header.</summary>
		/// <param name="header" type="Lanes.Header">Lanes.Header. The Header object to add.</param>
		/// <param name="parent" type="Lanes.Header" optional="true">Optional. Lanes.Header. The parent header to add to, or null to add the new header as a root column.</param>
		/// <param name="i" type="Number" optional="true">Optional. Number. The index at which the header was added in the collection.</param>
	},
	addRowHeader: function(header, parent, i) {
		/// <summary>Adds the specified header to the grid as a new row header.</summary>
		/// <param name="header" type="Lanes.Header">Lanes.Header. The Header object to add.</param>
		/// <param name="parent" type="Lanes.Header" optional="true">Optional. Lanes.Header. The parent header to add to, or null to add the new header as a root row.</param>
		/// <param name="i" type="Number" optional="true">Optional. Number. The index at which the header was added in the collection.</param>
	},
	findColumn: function(title) {
		/// <summary>Finds the first column whose header caption matches the specified string.</summary>
		/// <param name="title" type="String">String. A string containing the header title to look for.</param>
		/// <returns type="Lanes.Header">Returns the first column Header that has the specified caption.</returns>
	},
	findRow: function(title) {
		/// <summary>Finds the first row whose header caption matches the specified string.</summary>
		/// <param name="title" type="String">String. A string containing the header title to look for.</param>
		/// <returns type="Lanes.Header">Returns the first row Header that has the specified caption.</returns>
	},
	get: function(column, row) {
		/// <summary>Gets the cell or the cluster of cells corresponding to the specified row and column.</summary>
		/// <param name="column" type="Number | Lanes.Header">Number | Lanes.Header. A Header object or a cell index.</param>
		/// <param name="row" type="Number | Lanes.Header">Number | Lanes.Header. A Header object or a cell index.</param>
		/// <returns type="Lanes.Cell">Lanes.Cell. A Cell object representing the cell or cluster of cells with the specified coordinates.</returns>
	},
	getCellBounds: function(cell) {
		/// <summary>Returns the bounding rectangle of the specified cell.</summary>
		/// <param name="cell" type="Lanes.Cell">Lanes.Cell. A Cell object representing a cell or a group of cells in the grid.</param>
		/// <returns type="Rect">Rect. A Rect instance representing the rectangle that bounds the specified cell or group of cells.</returns>
	},
	getCellColumn: function(cell) {
		/// <summary>Returns the column index of the specified cell.</summary>
		/// <param name="cell" type="Lanes.Cell">Lanes.Cell. A Cell object representing a single cell in the grid.</param>
		/// <returns type="Number">Number. The index of the column that contains cell; -1 if cell is not found or refers to a group of cells.</returns>
	},
	getCellFromPoint: function(point, cellBounds) {
		/// <summary>Gets the cell located at the specified point.</summary>
		/// <param name="point" type="Point">A Point instance specifying a point within the grid.</param>
		/// <param name="cellBounds" type="Object">An object that receives the coordinates of the found cell in its cellBounds field.</param>
		/// <returns type="Lanes.Cell">A Cell object identifying the found cell, or null if there is no cell located at the specified point.</returns>
	},
	getCellRow: function(cell) {
		/// <summary>Returns the row index of the specified cell.</summary>
		/// <param name="cell" type="Lanes.Cell">Lanes.Cell. A Cell object representing a single cell in the grid.</param>
		/// <returns type="Number">Number. The index of the row that contains cell; -1 if cell is not found or refers to a group of cells.</returns>
	},
	getColumn: function(index) {
		/// <summary>Returns the column header with the specified index from the bottommost column header level.</summary>
		/// <param name="index" type="Number">Number. A number specifying the column index.</param>
		/// <returns type="Lanes.Header">A Header object representing the column at the specified index.</returns>
	},
	getColumnDepth: function() {
		/// <summary>Gets the number of levels of the column headers.</summary>
		/// <returns type="Number">Number. A number representing the column depth.</returns>
	},
	getColumnIndex: function(column) {
		/// <summary>Returns the 0-based index of the specified column. Only works for bottommost headers. If the specified column is a group header, returns -1.</summary>
		/// <param name="column" type="Lanes.Header">Lanes.Header. A Header instance that represents a grid column.</param>
		/// <returns type="Number">Number. The index of column, or -1 if the specified header represents a row or a group of child columns.</returns>
	},
	getHeaderBounds: function(header, includeSubHeaders) {
		/// <summary>Returns the bounding rectangle of the specified header.</summary>
		/// <param name="header" type="Lanes.Header">Lanes.Header. The Header object whose coordinates to return.</param>
		/// <param name="includeSubHeaders" type="Boolean">Boolean. true to include the coordinates of the child headers in the returned rectangle, or&#160;false otherwise.</param>
		/// <returns type="Rect">Rect. A Rect that bounds the specified header, and optionally its child headers.</returns>
	},
	getHeaderFromPoint: function(point, headerBounds, scrollPosition) {
		/// <summary>Gets the Header that is located at the specified point.</summary>
		/// <param name="point" type="Point">A Point instance specifying a point within the grid.</param>
		/// <param name="headerBounds" type="Object">An object that receives the coordinates of the found header in its headerBounds field.</param>
		/// <param name="scrollPosition" type="Point">Point. When the headers are hooked this parameter should provide information about the current scroll position in the view.</param>
		/// <returns type="Lanes.Header">The found Header object, or null if there is no header located at the specified point.</returns>
	},
	getRow: function(index) {
		/// <summary>Returns the row header with the specified index from the bottommost row header level.</summary>
		/// <param name="index" type="Number">Number. A number specifying the row index.</param>
		/// <returns type="Lanes.Header">A Header object representing the row at the specified index.</returns>
	},
	getRowDepth: function() {
		/// <summary>Gets the number of levels of the row headers.</summary>
		/// <returns type="Number">Number. A number representing the row depth.</returns>
	},
	getRowIndex: function(row) {
		/// <summary>Returns the 0-based index of the specified row. Only works for bottommost headers. If the specified row is a group header, returns -1;</summary>
		/// <param name="row" type="Lanes.Header">Lanes.Header. A Header instance that represents a grid row.</param>
		/// <returns type="Number">Number. The index of row, or -1 if the specified header represents a column or a group of child rows.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Deserializes the lane grid from the specified XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the deserialization process and some helper deserialization methods.</param>
	},
	removeColumnHeader: function(header) {
		/// <summary>Removes the specified column header and all of its associated cells from the grid.</summary>
		/// <param name="header" type="Lanes.Header">Lanes.Header. The Header object to remove.</param>
	},
	removeRowHeader: function(header) {
		/// <summary>Removes the specified row header and all of its associated cells from the grid.</summary>
		/// <param name="header" type="Lanes.Header">Lanes.Header. The Header object to remove.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Serializes the lane grid to the specified XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Lanes.Grid.__class = true;

MindFusion.Diagramming.Lanes.Header.prototype = {
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the lane header from the specified XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Serializes the lane header to the specified XML element</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Lanes.Header.__class = true;

MindFusion.Diagramming.Lanes.ResizeType = {
		/// <summary>Specifies how to resize child columns and rows in the lanes grid when their parent column or row is resized.</summary>
		/// <field name="Fixed">The header's size (width or height) is fixed and does not change when its parent header is being resized unless all its siblings have fixed size too.</field>
		/// <field name="Proportional">The header resizes in proportion to its parent header.</field>
	Fixed: 0,
	Proportional: 1
}
MindFusion.Diagramming.Lanes.ResizeType.__enum = true;

MindFusion.Diagramming.Lanes.Style.prototype = {
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the style from the specified XML element</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Serializes the lane style to the specified XML element</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Lanes.Style.__class = true;

MindFusion.Diagramming.Action = {
		/// <summary>Specifies the possible actions a user can carry out on diagram items.</summary>
		/// <field name="Create">Draw a new item.</field>
		/// <field name="Modify">Modify an existing item.</field>
		/// <field name="None">Do not perform any action.</field>
		/// <field name="Split">Split a link's segment.</field>
	Create: 1,
	Modify: 2,
	None: 0,
	Split: 3
}
MindFusion.Diagramming.Action.__enum = true;

MindFusion.Diagramming.AddItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.AddItemCommand.__class = true;

MindFusion.Diagramming.AdjustmentHandles = {
		/// <summary>Identifies the distinct selection handles of a node.</summary>
		/// <field name="All">All selection handles are enabled and can be used to modify the node.</field>
		/// <field name="Move">The center selection handle is enabled and can be used to move the node.</field>
		/// <field name="None">Specifies that none of the selection handles can be used to modify the node.</field>
		/// <field name="ResizeBottomCenter">The bottom-center handle is enabled and can be used to resize the node vertically.</field>
		/// <field name="ResizeBottomLeft">The bottom-left handle is enabled and can be used to resize the node.</field>
		/// <field name="ResizeBottomRight">The bottom-right handle is enabled and can be used to resize the node.</field>
		/// <field name="ResizeMiddleLeft">The middle-left handle is enabled and can be used to resize the node horizontally.</field>
		/// <field name="ResizeMiddleRight">The middle-right handle is enabled and can be used to resize the node horizontally.</field>
		/// <field name="ResizeTopCenter">The top-center handle is enabled and can be used to resize the node vertically.</field>
		/// <field name="ResizeTopLeft">The top-left handle is enabled and can be used to resize the node.</field>
		/// <field name="ResizeTopRight">The top-right handle is enabled and can be used to resize the node.</field>
		/// <field name="Rotate">The rotation handle is enabled and can be used to rotate the node.</field>
	All: 1023,
	Move: 256,
	None: 0,
	ResizeBottomCenter: 64,
	ResizeBottomLeft: 8,
	ResizeBottomRight: 4,
	ResizeMiddleLeft: 128,
	ResizeMiddleRight: 32,
	ResizeTopCenter: 16,
	ResizeTopLeft: 1,
	ResizeTopRight: 2,
	Rotate: 512
}
MindFusion.Diagramming.AdjustmentHandles.__enum = true;

MindFusion.Diagramming.AeroEffect.prototype = {
};
MindFusion.Diagramming.AeroEffect.__class = true;

MindFusion.Diagramming.Alignment = {
		/// <summary>Specifies the alignment of text relative to its layout rectangle.</summary>
		/// <field name="Center">The text is drawn in the center of the layout rectangle.</field>
		/// <field name="Far">The text is drawn in the far corner of the layout rectangle.</field>
		/// <field name="Near">The text is drawn in the near corner of the layout rectangle.</field>
	Center: 1,
	Far: 2,
	Near: 0
}
MindFusion.Diagramming.Alignment.__enum = true;

MindFusion.Diagramming.AnchorPattern.prototype = {
};
MindFusion.Diagramming.AnchorPattern.__class = true;

MindFusion.Diagramming.AnchorPattern.fromId = function(id) {
	/// <summary>Returns a reference to the anchor pattern with the specified string identifier.</summary>
	/// <param name="id" type="String">A string identifying an AnchorPattern instance.</param>
	/// <returns type="AnchorPattern">AnchorPattern. The AnchorPattern object whose Id is equal to the id parameter.</returns>
};

MindFusion.Diagramming.AnchorPoint.prototype = {
};
MindFusion.Diagramming.AnchorPoint.__class = true;

MindFusion.Diagramming.AutoResize = {
		/// <summary>Defines in which directions automatic resizing can enlarge the diagram scrollable area.</summary>
		/// <field name="AllDirections">Enlarge the diagram area in any direction if an item is moved outside the boundaries.</field>
		/// <field name="None">Do not enlarge the diagram area automatically.</field>
		/// <field name="RightAndDown">Enlarge the diagram area to the right and down if an item is moved outside the boundaries in these directions.</field>
	AllDirections: 2,
	None: 0,
	RightAndDown: 1
}
MindFusion.Diagramming.AutoResize.__enum = true;

MindFusion.Diagramming.Behavior = {
		/// <summary>Defines values that specify how the component responds to actions performed by the user.</summary>
		/// <field name="Custom">Drawing with the mouse creates instances of the type assigned to CustomNodeType.</field>
		/// <field name="DoNothing">The control ignores users actions with the mouse, but raises the appropriate mouse events. This mode allows applications to implement their own mouse-drawing behavior, disabling the default response to users actions.</field>
		/// <field name="DrawContainers">Drawing with the mouse creates ContainerNode instances.</field>
		/// <field name="DrawControls">Drawing with the mouse creates ControlNode instances.</field>
		/// <field name="DrawFreeForms">Drawing with the mouse creates FreeFormNode instances.</field>
		/// <field name="DrawFreeShapes">Points from user input are shown using a FreeFormNode instance. Once the user finishes drawing, the FreeFormNode is replaced by a ShapeNode with a matching shape from Diagram.FreeFormTargets list.</field>
		/// <field name="DrawLinks">Drawing started over a node creates a DiagramLink. Otherwise a lasso rectangle is displayed allowing the selection of items.</field>
		/// <field name="DrawShapes">Drawing with the mouse creates ShapeNode instances.</field>
		/// <field name="DrawSvgNodes">Drawing with the mouse creates SvgNode instances.</field>
		/// <field name="DrawTables">Drawing with the mouse creates TableNode instances.</field>
		/// <field name="DrawTreeViews">Drawing with the mouse creates TreeViewNode instances.</field>
		/// <field name="LinkContainers">Drawing over empty document area creates a ContainerNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkControls">Drawing over empty document area creates a ControlNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkFreeForms">Drawing over empty document area creates a FreeFormNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkFreeShapes">Points from user input are shown using a FreeFormNode instance. Once the user finishes drawing, the FreeFormNode is replaced by a ShapeNode with a matching shape from Diagram.FreeFormTargets list. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkShapes">A mode that is suitable for creating flowcharts and process diagrams. Drawing over empty document area creates a ShapeNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkSvgNodes">Drawing over empty document area creates an SvgNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkTables">A mode that is suitable for creating entity-relationship diagrams. Drawing over empty document area creates a TableNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="LinkTreeViews">Drawing over empty document area creates a TreeViewNode instance. Drawing started over a node creates a DiagramLink.</field>
		/// <field name="Magnify">Dragging the mouse magnifies the view. Modifying them or drawing new ones is disabled.</field>
		/// <field name="Modify">Objects can be selected and modified. New objects cannot be created.</field>
		/// <field name="MoveNodes">Dragging with the mouse moves the node under mouse pointer.</field>
		/// <field name="Pan">Dragging with depressed mouse button pans the view.</field>
		/// <field name="SelectOnly">Allow only selection of existing items. Modifying them or drawing new ones is disabled.</field>
	Custom: 9,
	DoNothing: 8,
	DrawContainers: 10,
	DrawControls: 6,
	DrawFreeForms: 23,
	DrawFreeShapes: 25,
	DrawLinks: 2,
	DrawShapes: 1,
	DrawSvgNodes: 15,
	DrawTables: 5,
	DrawTreeViews: 13,
	LinkContainers: 11,
	LinkControls: 7,
	LinkFreeForms: 24,
	LinkFreeShapes: 26,
	LinkShapes: 3,
	LinkSvgNodes: 16,
	LinkTables: 4,
	LinkTreeViews: 14,
	Magnify: 18,
	Modify: 0,
	MoveNodes: 28,
	Pan: 12,
	SelectOnly: 17
}
MindFusion.Diagramming.Behavior.__enum = true;

MindFusion.Diagramming.BehaviorBase.prototype = {
	createController: function(state) {
		/// <summary>Creates a controller appropriate for current context and pointer position.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.BehaviorBase.__class = true;

MindFusion.Diagramming.Border.prototype = {
	getComponents: function() {
		/// <summary>Gets the child components of this panel. Inherited from Panel.</summary>
		/// <returns type="Array">Array. An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.Border.__class = true;

MindFusion.Diagramming.Builder.prototype = {
};
MindFusion.Diagramming.Builder.__class = true;

MindFusion.Diagramming.Button.prototype = {
};
MindFusion.Diagramming.Button.__class = true;

MindFusion.Diagramming.Cell.prototype = {
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the cell's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the cell's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the cell's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the cell's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Cell.__class = true;

MindFusion.Diagramming.CellEventArgs.prototype = {
};
MindFusion.Diagramming.CellEventArgs.__class = true;

MindFusion.Diagramming.CellFrameStyle = {
		/// <summary>Specifies the style of the cells' frame lines.</summary>
		/// <field name="None">Table cells have no border.</field>
		/// <field name="Simple">The border of table cells is simple line.</field>
		/// <field name="System3D">The border has 3D look.</field>
	None: 0,
	Simple: 1,
	System3D: 2
}
MindFusion.Diagramming.CellFrameStyle.__enum = true;

MindFusion.Diagramming.CellValidationEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Cancels the resize of the node's row or column.</summary>
	}
};
MindFusion.Diagramming.CellValidationEventArgs.__class = true;

MindFusion.Diagramming.ChangeItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ChangeItemCommand.__class = true;

MindFusion.Diagramming.ColumnStyle = {
		/// <summary>Specifies how table columns' width is set.</summary>
		/// <field name="AutoWidth">The columns' width changes when the table is resized.</field>
		/// <field name="FixedWidth">The columns has fixed, unchangeable width.</field>
	AutoWidth: 1,
	FixedWidth: 0
}
MindFusion.Diagramming.ColumnStyle.__enum = true;

MindFusion.Diagramming.Command.prototype = {
	execute: function() {
		/// <summary>Carries out an action that changes the diagram or a diagram item.</summary>
	},
	redo: function() {
		/// <summary>Repeats an action that has been undone.</summary>
	},
	undo: function() {
		/// <summary>Undoes an action, restoring the diagram to the state it was in before carrying out the action.</summary>
	}
};
MindFusion.Diagramming.Command.__class = true;

MindFusion.Diagramming.CompatConfig.prototype = {
};
MindFusion.Diagramming.CompatConfig.__class = true;

MindFusion.Diagramming.ComponentEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node. Inherited from ItemEventArgs.</summary>
	},
	get_item: function() {
		/// <summary>Gets the item related to the event. Inherited from ItemEventArgs.</summary>
		/// <returns type="Object"></returns>
	}
};
MindFusion.Diagramming.ComponentEventArgs.__class = true;

MindFusion.Diagramming.CompositeCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	getCommands: function() {
		/// <summary>Gets a list containing the child Command objects.</summary>
		/// <returns type="Array">The list of child Command objects.</returns>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.CompositeCommand.__class = true;

MindFusion.Diagramming.CompositeNode.prototype = {
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getComponent: function(name) {
		/// <summary>Returns the component created for the template element with specified name.</summary>
		/// <param name="name" type="String">String. A string specifying the value of the name attribute in node's template.</param>
		/// <returns type="Component">Component. The component created for specified element in the template.</returns>
	},
	loadTemplate: function(jsonTemplate) {
		/// <summary>Load a JSON template defining node's appearance.</summary>
		/// <param name="jsonTemplate" type="Object">Object. A JavaScript object literal containing template of node's component hierarchy.</param>
	},
	restoreState: function() {
		/// <summary>DiagramNode.restoreState override.</summary>
	},
	saveState: function() {
		/// <summary>DiagramNode.saveState override.</summary>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item content from an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">An XmlPersistContext&#160;object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.CompositeNode.__class = true;

MindFusion.Diagramming.CompositeNode.classFromTemplate = function(className, jsonTemplate, init) {
	/// <summary>Generates a node class whose appearance and properties are defined using JSON template.</summary>
	/// <param name="className" type="String">String. Fully qualified name of the class to generate.</param>
	/// <param name="jsonTemplate" type="Object">Object. A JavaScript object literal containing template of node's component hierarchy.</param>
	/// <param name="init" type="function" optional="true">Optional. function. Optional.</param>
	/// <returns type="CompositeNode">CompositeNode. A constructor function that creates instances of the new class.</returns>
};

MindFusion.Diagramming.ConnectionPoint.prototype = {
	addLinkToNode: function() {
		/// <summary>Adds the DiagramLink associated with this connection point to the associated DiagramNode.</summary>
	},
	getInitialPoint: function() {
		/// <summary>Returns a Point (usually the center of the bounding rectangle) contained within the associated node.</summary>
		/// <returns type="Point">A Point contained within the node.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getNearestAnchorPoint: function(point) {
		/// <summary>Returns the nearest anchor Point pertinent to this connection.</summary>
		/// <param name="point" type="Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNearestBorderPoint: function(point) {
		/// <summary>Returns the nearest point lying on the DiagramNode border.</summary>
		/// <param name="point" type="Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNodeRect: function() {
		/// <summary>Returns the bounding rectangle of the node associated with this connection point.</summary>
		/// <returns type="Rect">The bounding rectangle of the node.</returns>
	},
	linkChanges: function(item, point) {
		/// <summary>Checks whether the link would change if attached to the specified node at the specified point.</summary>
		/// <param name="item" type="DiagramItem">A DiagramItem under the mouse cursor.</param>
		/// <param name="point" type="Point">A point where the link will be connected.</param>
		/// <returns type="Boolean">Boolean. true if the link would connect to a different entity if dropped at the specified location; otherwise, false.</returns>
	},
	nodesIntersect: function(connectionPoint) {
		/// <summary>Checks whether the node associated with the current connection point and the node associated with the specified connection point intersect.</summary>
		/// <param name="connectionPoint" type="ConnectionPoint">A ConnectionPoint instance.</param>
		/// <returns type="Boolean">Boolean. true if the node associated with the current connection point and the node associated with the specified connection point intersect; otherwise, false.</returns>
	},
	removeLinkFromNode: function() {
		/// <summary>Removes the link associated with this connection point from the associated node.</summary>
	},
	saveEndRelative: function(ctrRelative) {
		/// <summary>Updates the coordinates of the connection point represented by this link, relative to the bounding rectangle of the associated node.</summary>
		/// <param name="ctrRelative" type="Boolean" optional="true">Optional. </param>
	}
};
MindFusion.Diagramming.ConnectionPoint.__class = true;

MindFusion.Diagramming.ConnectionStyle = {
		/// <summary>Specifies whether links should connect to a node or its rows.</summary>
		/// <field name="Node">Links should connect to the table node when drawn interactively.</field>
		/// <field name="Rows">Links should connect to one of the table's rows when drawn interactively.</field>
	Node: 0,
	Rows: 1
}
MindFusion.Diagramming.ConnectionStyle.__enum = true;

MindFusion.Diagramming.ContainerNode.prototype = {
	add: function(node) {
		/// <summary>Adds a node to this container.</summary>
		/// <param name="node" type="DiagramNode">DiagramNode. The node that should be added to the container.</param>
	},
	arrange: function(layout) {
		/// <summary>Arranges the container's children with the given layout.</summary>
		/// <param name="layout" type="Object">Object. The Layout algorithm to apply.</param>
	},
	arrangeAnimated: function(layout, duration, animationType, easingType) {
		/// <summary>Arranges the container's children with the given layout, and animates items moving to their new positions.</summary>
		/// <param name="layout" type="Object">Object. The Layout algorithm to apply.</param>
		/// <param name="duration" type="Number" optional="true">Optional. Number. An integer, specifying the duration of the animation in milliseconds.</param>
		/// <param name="animationType" type="AnimationType" optional="true">Optional. A member of the AnimationType enumeration, specifying the animation type to use.</param>
		/// <param name="easingType" type="EasingType" optional="true">Optional. A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.</param>
	},
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the&#160;ContainerNode contains the specified point.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">true if the point is within the bounds of this node; otherwise, false.</returns>
	},
	containsRecursively: function(node) {
		/// <summary>Determines whether the specified node is contained within this container, either directly or inside child containers.</summary>
		/// <param name="node" type="DiagramNode"></param>
		/// <returns type="Boolean">Boolean. true if the specified node is inside the container, or false otherwise.</returns>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">An array&#160;containing the outline points.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean">Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean">Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>DiagramItem.onRemove override.</summary>
	},
	remove: function(node) {
		/// <summary>Removes a node from this container.</summary>
		/// <param name="node" type="DiagramNode">DiagramNode. The node that should be removed from the container.</param>
	},
	resizeToFitChildren: function(allowShrink, margin) {
		/// <summary>Resizes the container making it big enough to contain its child nodes.</summary>
		/// <param name="allowShrink" type="Boolean">true to allow setting smaller size than current size of the container, or false otherwise.</param>
		/// <param name="margin" type="Number">Specifies the margin space to leave between container's borders and child nodes.</param>
	},
	resizeToFitText: function(fit, fixPosition, foldBtnWidth) {
		/// <summary>Makes the container node caption big enough to display its text without clipping.</summary>
		/// <param name="fit" type="FitSize">FitSize. A member of the FitSize enumeration.</param>
		/// <param name="fixPosition" type="Boolean" optional="true">Optional. Boolean. Fix the position of the container to the original location. The default is false.</param>
		/// <param name="foldBtnWidth" type="Number" optional="true">Optional. Number. The width of the folder button, if it's not provided, the value from foldIconSize is used.</param>
		/// <returns type="Boolean">Boolean. true if the caption is resized successfully, or&#160;false otherwise.</returns>
	},
	restoreState: function() {
		/// <summary>DiagramNode.restoreState override.</summary>
	},
	saveState: function() {
		/// <summary>DiagramNode.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	visitNodes: function(point, visitNode, relatedItem) {
		/// <summary>Visits the diagram nodes in reverse Z order.</summary>
		/// <param name="point" type="Point"></param>
		/// <param name="visitNode" type="function"></param>
		/// <param name="relatedItem" type="DiagramItem"></param>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.ContainerNode.__class = true;

MindFusion.Diagramming.ControlNode.prototype = {
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	createImage: function() {
		/// <summary>Creates the background svg image.</summary>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getContent: function() {
		/// <summary>Gets the content element of this node.</summary>
		/// <returns type="HTMLDivElement">The div element hosting HTML content generated from template.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this ControlNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onUpdateBounds: function() {
		/// <summary>DiagramNode.onUpdateBounds override.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>DiagramNode.removeCanvasElements override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.ControlNode.__class = true;

MindFusion.Diagramming.ControlNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new ControlNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.CreateLinkController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	}
};
MindFusion.Diagramming.CreateLinkController.__class = true;

MindFusion.Diagramming.CreateNodeController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	}
};
MindFusion.Diagramming.CreateNodeController.__class = true;

MindFusion.Diagramming.CreateSelectionController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>Called to validate the operation at current pointer position. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.CreateSelectionController.__class = true;

MindFusion.Diagramming.DelKeyAction = {
		/// <summary>Specifies the type of action performed when the user presses the DEL key.</summary>
		/// <field name="DeleteActiveItem">Indicates that only the activeItem is deleted.</field>
		/// <field name="DeleteSelectedItems">Indicates that all selected items are deleted.</field>
		/// <field name="None">Indicates that nothing happens.</field>
	DeleteActiveItem: 1,
	DeleteSelectedItems: 2,
	None: 0
}
MindFusion.Diagramming.DelKeyAction.__enum = true;

MindFusion.Diagramming.Diagram.prototype = {
	addItem: function(item) {
		/// <summary>Adds an item to the Diagram.</summary>
		/// <param name="item" type="DiagramItem">The DiagramItem to add.</param>
	},
	alignPointToGrid: function(point) {
		/// <summary>Returns a point of the alignment grid nearest to the one passed as an argument.</summary>
		/// <param name="point" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Point">Point. A point from the alignment grid.</returns>
	},
	arrange: function(layout) {
		/// <summary>Arranges the diagram with the given layout.</summary>
		/// <param name="layout" type="Object">Object. The Layout algorithm to apply.</param>
	},
	arrangeAnimated: function(layout, duration, animationType, easingType) {
		/// <summary>Arranges the diagram using the given layout, and animates items moving to their new positions.</summary>
		/// <param name="layout" type="Object">Object. The Layout algorithm to apply.</param>
		/// <param name="duration" type="Number" optional="true">Optional. Number. An integer, specifying the duration of the animation in milliseconds.</param>
		/// <param name="animationType" type="AnimationType" optional="true">Optional. A member of the AnimationType enumeration, specifying the animation type to use.</param>
		/// <param name="easingType" type="EasingType" optional="true">Optional. A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.</param>
	},
	arrangeLinkLabels: function() {
		/// <summary>Rearranges link labels whose autoArrange property is enabled.</summary>
	},
	cancelCompositeOperation: function() {
		/// <summary>Stops recording undo/redo commands into a CompositeCommand and discards the records created so far.</summary>
	},
	clearAll: function() {
		/// <summary>Removes all items from the diagram.</summary>
	},
	commitCompositeOperation: function() {
		/// <summary>Stops recording undo/redo commands into a CompositeCommand and saves the composite in the history queue.</summary>
	},
	executeCommand: function(command) {
		/// <summary>Executes the specified command on this diagram.</summary>
		/// <param name="command" type="Command">The Command to execute.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the diagram from a JSON string.</summary>
		/// <param name="json" type="String">A string created by the toJson method.</param>
	},
	fromXmlDocument: function(document) {
		/// <summary>Loads diagram contents from specified XML Document.</summary>
		/// <param name="document" type="Document">Document. A DOM Document object containing XML-serialized diagram contents.</param>
	},
	getContentBounds: function(onlyVisible, repaintBounds) {
		/// <summary>Returns the smallest rectangle that bounds all diagram items.</summary>
		/// <param name="onlyVisible" type="Boolean" optional="true">Optional. Boolean. Specifies whether only visible items should be considered.</param>
		/// <param name="repaintBounds" type="Boolean" optional="true">Optional. Boolean. Specifies whether to consider the items' repaint bounds.</param>
		/// <returns type="Rect">Rect. A Rect instance specifying the smallest rectangle that bounds all diagram items.</returns>
	},
	getItemAt: function(point, onlyInteractive) {
		/// <summary>Finds and returns the topmost DiagramItem found at the specified location.</summary>
		/// <param name="point" type="Point">A Point instance identifying a diagram location.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. true to return only items that can be interacted with; otherwise, false.</param>
		/// <returns type="DiagramItem">The topmost DiagramItem found at the given location or null if no DiagramItem has been found.</returns>
	},
	getItemsAt: function(point) {
		/// <summary>Finds and returns an array of the diagram items found at the specified location.</summary>
		/// <param name="point" type="Point">Point. instance identifying a location in the diagram.</param>
		/// <returns type="Array">Array of the DiagramItems found at the given location or null if no items have been found. The items are arranged according to their Z-index.</returns>
	},
	getLinkAt: function(point) {
		/// <summary>Finds and returns the topmost DiagramLink found at the specified location.</summary>
		/// <param name="point" type="Point">A Point instance identifying a diagram location.</param>
		/// <returns type="DiagramLink">The topmost DiagramLink found at the given location or null if no DiagramLink has been found.</returns>
	},
	getLinksAt: function(point) {
		/// <summary>Finds and returns an array of the diagram DiagramLinks found at the specified location.</summary>
		/// <param name="point" type="Point">Point. instance identifying a diagram location.</param>
		/// <returns type="Array">Array of the DiagramLinks found at the given location or null if no DiagramLinks have been found. The links are arranged according to their Z-index.</returns>
	},
	getNearestNode: function(point, maxDistance, ignored) {
		/// <summary>Returns the node nearest to the specified point.</summary>
		/// <param name="point" type="Point">Point. A point in the diagram.</param>
		/// <param name="maxDistance" type="Number">Number. The maximum distance from the point at which to look for nodes.</param>
		/// <param name="ignored" type="DiagramNode">DiagramNode. A node that should be ignored.</param>
		/// <returns type="DiagramNode">The DiagramNode nearest to the specified point.</returns>
	},
	getNodeAt: function(point, onlyInteractive) {
		/// <summary>Finds and returns the topmost DiagramNode found at the specified location.</summary>
		/// <param name="point" type="Point">A Point instance identifying a diagram location.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. true to return only items that can be interacted with; otherwise, false.</param>
		/// <returns type="DiagramNode">The topmost DiagramNode found at the given location or null if no DiagramNode has been found.</returns>
	},
	getNodesAt: function(point) {
		/// <summary>Finds and returns an array of the DiagramNodes found at the specified location.</summary>
		/// <param name="point" type="Point">Point. instance identifying a diagram location.</param>
		/// <returns type="Array">Array of the DiagramNodes found at the given location or null if no DiagramNodes have been found. The nodes are arranged according to their Z-index.</returns>
	},
	isItemInteractive: function(item) {
		/// <summary>Checks if the specified item can be modified interactively.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The DiagramItem to check.</param>
		/// <returns type="Boolean">Boolean. true, if the item is currently visible and unlocked and it is not associated with a hidden or locked layer, or&#160;false otherwise.</returns>
	},
	isItemVisible: function(item) {
		/// <summary>Checks if the specified item is currently visible.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The DiagramItem to check.</param>
		/// <returns type="Boolean">Boolean. true if the item's visible property is set to true and the item is not associated with a hidden layer, or&#160;false otherwise.</returns>
	},
	loadFromString: function(str) {
		/// <summary>Loads diagram contents from specified XML or JSON string.</summary>
		/// <param name="str" type="String">String. A string containing the serialized diagram contents.</param>
	},
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the diagram from an XML file.</summary>
		/// <param name="fileUrl" type="String">String. The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="function" optional="true">Optional. function. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="function" optional="true">Optional. function. A callback that should be invoked if the file could not be downloaded.</param>
	},
	raiseClicked: function(item, mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a Diagram item has been clicked.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The Diagram item.</param>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. The mouse button, with which the item has been clicked.</param>
	},
	raiseCreated: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been created.</summary>
		/// <param name="item" type="DiagramNode | DiagramLink">DiagramNode | DiagramLink. The diagram item that has been created.</param>
	},
	raiseDeleted: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been deleted.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The DiagramItem that has been deleted.</param>
	},
	raiseDeselected: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been deselected.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The Diagram item.</param>
	},
	raiseDoubleClicked: function(item, mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a Diagram item has been double-clicked.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The Diagram item.</param>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. The mouse button, with which the item has been clicked.</param>
	},
	raiseModified: function(item, mousePosition, adjustmentHandle) {
		/// <summary>Raises an event which notifies that a Diagram item has been modified.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The DiagramItem that has been modified.</param>
		/// <param name="mousePosition" type="Point">Point. The current mouse pointer position.</param>
		/// <param name="adjustmentHandle" type="Number">Number. Identifies the handle used to modify the item.</param>
	},
	raisePasted: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been pasted from clipboard.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The DiagramItem that has been pasted.</param>
	},
	raiseSelected: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been selected.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The Diagram item.</param>
	},
	raiseSelecting: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item will be selected.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The Diagram item.</param>
	},
	raiseSelectionChanged: function(oldItems, newItems) {
		/// <summary>Raises an event which notifies that the selection has changed.</summary>
		/// <param name="oldItems" type="Array">Array. The selected items before the change.</param>
		/// <param name="newItems" type="Array">Array. The selected items after the change.</param>
	},
	redo: function() {
		/// <summary>Executes again an action saved in the command history.</summary>
	},
	removeItem: function(item) {
		/// <summary>Removes the specified item from the Diagram.</summary>
		/// <param name="item" type="DiagramItem">The DiagramItem to be removed.</param>
	},
	resizeToFitItem: function(item) {
		/// <summary>Resize the document extents so that the specified item is contained within.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. The item to be contained.</param>
	},
	resizeToFitItems: function(margin, onlyVisible, repaintBounds) {
		/// <summary>Resizes the document scrollable area so that it fits all diagram items.</summary>
		/// <param name="margin" type="Number" optional="true">Optional. </param>
		/// <param name="onlyVisible" type="Boolean" optional="true">Optional. Boolean. Specifies whether only visible items should be considered.</param>
		/// <param name="repaintBounds" type="Boolean" optional="true">Optional. Boolean. Specifies whether to consider the items' repaint bounds.</param>
	},
	routeAllLinks: function() {
		/// <summary>Routes all links in the diagram in such a way they do not cross nodes.</summary>
	},
	saveToString: function(format) {
		/// <summary>Encodes the diagram contents into an XML or JSON string.</summary>
		/// <param name="format" type="SaveToStringFormat">A member of the SaveToStringFormat enumeration.</param>
		/// <returns type="String">String. A string containing the diagram's serialized representation.</returns>
	},
	saveToXml: function(url) {
		/// <summary>Saves the diagram to an XML file.</summary>
		/// <param name="url" type="String">String. A URL specifying where the diagram's XML should be posted to.</param>
	},
	startCompositeOperation: function() {
		/// <summary>Starts recording undo/redo commands into a CompositeCommand.</summary>
	},
	toJson: function() {
		/// <summary>Serializes the diagram into a JSON string.</summary>
		/// <returns type="String">String. A string containing the diagram's JSON representation.</returns>
	},
	toXmlDocument: function() {
		/// <summary>Saves the diagram into an XML Document.</summary>
		/// <returns type="Document">Document. A DOM Document object containing XML-serialized diagram contents.</returns>
	},
	undo: function() {
		/// <summary>Undoes an action saved in the command history.</summary>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	dispose: function() {
		/// <summary>Overrides Disposable.dispose Inherited from Canvas.</summary>
	},
	invalidate: function(rect, force) {
		/// <summary>Invalidates the canvas or a region of the canvas, causing it to be repainted. Inherited from Canvas.</summary>
		/// <param name="rect" type="Rect" optional="true">Optional. Rect. A Rect instance specifying the region that should be repainted. If not specified, the whole diagram will be repainted.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. true to force redraw even if currently painting, or false otherwise.</param>
	},
	repaint: function(printOptions) {
		/// <summary>Repaints the canvas. Inherited from Canvas.</summary>
		/// <param name="printOptions" type="Object" optional="true">Optional. Object. For internal use.</param>
	}
};
MindFusion.Diagramming.Diagram.__class = true;

MindFusion.Diagramming.Diagram.registerClass = function(itemClass, className, classId, classVersion, baseType) {
	/// <summary>Registers a diagram item class.</summary>
	/// <param name="itemClass" type="Object">Object. An object identifying the item class.</param>
	/// <param name="className" type="String">String. A class identifier to use when saving and loading items of the specified type to/from JSON.</param>
	/// <param name="classId" type="String" optional="true">Optional. String. A class identifier to use when saving and loading items of the specified type to/from XML.</param>
	/// <param name="classVersion" type="Number" optional="true">Optional. Number. A revision number of the item's class serialization format.</param>
	/// <param name="baseType" type="Object" optional="true">Optional. Object. The base class of the item class.</param>
};
MindFusion.Diagramming.Diagram.registerItemClass = function(itemClass, classId, classVersion) {
	/// <summary>Registers a diagram item class for XML erialization support.</summary>
	/// <param name="itemClass" type="Object">Object. An object identifying the item class.</param>
	/// <param name="classId" type="String">String. A class identifier to use when saving and loading items of the specified type.</param>
	/// <param name="classVersion" type="Number">Number. A revision number of the item's class serialization format.</param>
};

MindFusion.Diagramming.DiagramEventArgs.prototype = {
};
MindFusion.Diagramming.DiagramEventArgs.__class = true;

MindFusion.Diagramming.DiagramItem.prototype = {
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this item.</summary>
		/// <returns type="Object">Object. The copied item.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes this item from a JSON object.</summary>
		/// <param name="json" type="Object">Object. An object, containing the data for this item.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">An XmlPersistContext&#160;object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	toJson: function() {
		/// <summary>Serializes this item into a JSON object.</summary>
		/// <returns type="Object">Object. An object, containing the data for this item.</returns>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	}
};
MindFusion.Diagramming.DiagramItem.__class = true;

MindFusion.Diagramming.DiagramLink.prototype = {
	addLabel: function(text) {
		/// <summary>Adds a new label to this link.</summary>
		/// <param name="text" type="String">String. The label's text.</param>
		/// <returns type="LinkLabel">A LinkLabel instance.</returns>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	clone: function() {
		/// <summary>DiagramItem.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if the link contains the point, or false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function() {
		/// <summary>DiagramItem.fromJson override.</summary>
	},
	getLength: function(segments) {
		/// <summary>Gets the length of the links</summary>
		/// <param name="segments" type="Array" optional="true">Optional. Array. A list of points specifying the polyline segments.</param>
		/// <returns type="Number">Number. The sum of the lengths of the line's segments.</returns>
	},
	intersects: function(rect) {
		/// <summary>Checks whether the link contour intersects with the outline of the specified node.</summary>
		/// <param name="rect" type="Rect">Rect. The bounding rectangle of the specified node.</param>
		/// <returns type="Boolean"></returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramItem.LoadFromXml override. Loads the link's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	pointAlongLength: function(lengthFactor, segments) {
		/// <summary>Returns a point lying on a polyline that is positioned at a relative position along the polyline's length.</summary>
		/// <param name="lengthFactor" type="Number">Number. A value from 0 to 1 specifying a portion of link's length.</param>
		/// <param name="segments" type="Array" optional="true">Optional. Array. A list of points specifying the polyline segments.</param>
		/// <returns type="Point">Point. A Point instance.</returns>
	},
	putEndPointsAtNodeBorders: function(action, routing) {
		/// <summary>Places the link's end points on the outline of its origin and destination nodes.</summary>
		/// <param name="action" type="Action"></param>
		/// <param name="routing" type="Boolean"></param>
	},
	removeLabel: function(label) {
		/// <summary>Removes the specified label from this link.</summary>
		/// <param name="label" type="LinkLabel">A LinkLabel instance.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="DiagramLinkState">A DiagramLinkState instance.</param>
	},
	restoreState: function() {
		/// <summary>DiagramItem.restoreState override.</summary>
	},
	route: function(args) {
		/// <summary>Routes this link, regardless of whether the link's autoRoute&#160;property is enabled.</summary>
		/// <param name="args" type="Object" optional="true">Optional. </param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="DiagramLinkState">DiagramLinkState. A DiagramLinkState instance.</returns>
	},
	saveState: function() {
		/// <summary>DiagramItem.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setDestination: function(destination) {
		/// <summary>Sets the destination node of this link.</summary>
		/// <param name="destination" type="DiagramNode">The DiagramNode to set as destination for this link.</param>
	},
	startDrag: function(ist) {
		/// <summary>DiagramItem.startDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	toJson: function() {
		/// <summary>DiagramItem.toJson override.</summary>
	},
	updateCanvasElements: function() {
		/// <summary>Updates the elements on the HTML Canvas.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateFromPoints: function() {
		/// <summary>Updates the link's internal state after the link's control points have been changed.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	}
};
MindFusion.Diagramming.DiagramLink.__class = true;

MindFusion.Diagramming.DiagramNode.prototype = {
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	clone: function() {
		/// <summary>DiagramItem.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="Point">Point. The point to check.</param>
		/// <returns type="Boolean">Boolean. true it this node contains the specified point; otherwise, false.</returns>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node.</summary>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function() {
		/// <summary>DiagramItem.fromJson override.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramItem.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	removeCanvasElements: function() {
		/// <summary>DiagramItem.removeCanvasElements override.</summary>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	restoreState: function() {
		/// <summary>DiagramItem.restoreState override.</summary>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</returns>
	},
	saveState: function() {
		/// <summary>DiagramItem.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	},
	toJson: function() {
		/// <summary>DiagramItem.toJson override.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	}
};
MindFusion.Diagramming.DiagramNode.__class = true;

MindFusion.Diagramming.DiagramView.prototype = {
	beginEdit: function(item, point, editTarget) {
		/// <summary>Begins in-place editing of the specified object.</summary>
		/// <param name="item" type="InplaceEditable">InplaceEditable. The DiagramItem whose text should be edited.</param>
		/// <param name="point" type="Point" optional="true">Optional. Point. A Point specifying where the in-place edit box should appear.</param>
		/// <param name="editTarget" type="Cell | LinkLabel" optional="true">Optional. Cell | LinkLabel. The element to use as a target for the inplace edit.</param>
	},
	clearTooltip: function() {
		/// <summary>Forces the removal of any created tooltips from the diagram canvas.</summary>
	},
	copyToClipboard: function(systemClipboard) {
		/// <summary>Copies the current selection of items to the clipboard.</summary>
		/// <param name="systemClipboard" type="Boolean" optional="true">Optional. Boolean. true to copy to the system clipboard, or false otherwise. The default value is false.</param>
	},
	cutToClipboard: function(systemClipboard) {
		/// <summary>Cuts the currently selected items to the clipboard.</summary>
		/// <param name="systemClipboard" type="Boolean" optional="true">Optional. Boolean. true to copy to the system clipboard, or false otherwise. The default value is false.</param>
	},
	dispose: function() {
		/// <summary>Control.dispose override.</summary>
	},
	endEdit: function(accept) {
		/// <summary>Exits the in-place editing mode and either accepts or rejects the changes made to the item's text.</summary>
		/// <param name="accept" type="Boolean" optional="true">Optional. Boolean. true to accept changes made to text, or&#160;false to reject them.</param>
	},
	fromJson: function() {
		/// <summary>Loads the diagram from a JSON string.</summary>
	},
	initialize: function() {
		/// <summary>Control.initialize override.</summary>
	},
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the diagram from an XML file.</summary>
		/// <param name="fileUrl" type="String">String. The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="function" optional="true">Optional. function. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="function" optional="true">Optional. function. A callback that should be invoked if the file could not be downloaded.</param>
	},
	pasteFromClipboard: function(offsetX, offsetY, systemClipboard, unconnectedLinks) {
		/// <summary>Pastes diagram items from the clipboard.</summary>
		/// <param name="offsetX" type="Number">Number. Horizontal offset of pasted items from their original positions.</param>
		/// <param name="offsetY" type="Number">Number. Vertical offset of pasted items from their original positions.</param>
		/// <param name="systemClipboard" type="Boolean" optional="true">Optional. Boolean. true to paste from the system clipboard, or false otherwise. The default value is false.</param>
		/// <param name="unconnectedLinks" type="Boolean" optional="true">Optional. Boolean. true to allow pasting&#160;links whose origin or destination node has not been copied, or&#160;false otherwise. The default value is false.</param>
	},
	print: function(options) {
		/// <summary>Exports the diagram as a list of&#160;images to a new HTML document and opens the browser's print dialog.</summary>
		/// <param name="options" type="Object" optional="true">Optional. Object. An object, containing customization properties, including printArea (defaults to diagram.getContentBounds()) and pageSize (defaults to diagramView.viewport).</param>
	},
	printPreview: function(options) {
		/// <summary>Exports the diagram as a list of images&#160;to a new HTML document.</summary>
		/// <param name="options" type="Object" optional="true">Optional. Object. An object, containing customization properties, including printArea (defaults to diagram.getContentBounds()) and pageSize (defaults to diagramView.viewport).</param>
	},
	record: function() {
		/// <summary>Starts recording mouse and keyboard events for subsequent replay.</summary>
	},
	replay: function(recording, timer, savedState, timerInterval) {
		/// <summary>Replays a sequence of recorded mouse and keyboard events created by record and stopRecording methods.</summary>
		/// <param name="recording" type="Array">Array. An array of event records returned by stopRecording.</param>
		/// <param name="timer" type="Boolean">Boolean. true to replay records using a timer, preserving their original relative timing, or false to replay them immediately.</param>
		/// <param name="savedState" type="String" optional="true">Optional. String. A diagram JSON string that should be loaded before replaying recorded events.</param>
		/// <param name="timerInterval" type="Number" optional="true">Optional. Number. A number of milliseconds to use as a constant interval instead of relative timing.</param>
	},
	saveToXml: function(url) {
		/// <summary>Saves the diagram to an XML file.</summary>
		/// <param name="url" type="String">String. A URL specifying where the diagram's XML should be posted to.</param>
	},
	scrollTo: function(x, y) {
		/// <summary>Scrolls the diagram to the specified point.</summary>
		/// <param name="x" type="Number">Number. A number specifying the new horizontal scroll position in the current unit of measure.</param>
		/// <param name="y" type="Number">Number. A number specifying the new vertical scroll position in the current unit of measure.</param>
	},
	setScroll: function() {
		/// <summary>IZoomTarget implementation</summary>
	},
	setZoomFactorPivot: function(zoomFactor, pivotPoint) {
		/// <summary>Sets the zoom factor, preserving the on-screen position of the specified diagram point.</summary>
		/// <param name="zoomFactor" type="Number">Number. The new zoom factor.</param>
		/// <param name="pivotPoint" type="Point">Point. A Point instance specifying the zoom center.</param>
	},
	stopRecording: function() {
		/// <summary>Stops recording mouse and keyboard events.</summary>
		/// <returns type="Array">Array. An array of event records representing user's input.</returns>
	},
	toJson: function() {
		/// <summary>Saves the diagram to a JSON string.</summary>
		/// <returns type="String">String. A string containing the diagram's JSON representation.</returns>
	},
	zoomToFit: function() {
		/// <summary>Zooms the view to fit the Diagram contents in component's area.</summary>
	},
	zoomToRect: function(rect) {
		/// <summary>Zooms and scrolls the view to fit the specified Diagram&#160;region in component's area.</summary>
		/// <param name="rect" type="Rect">Rect. A Rect instance specifying&#160;desired viewport position and size.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	}
};
MindFusion.Diagramming.DiagramView.__class = true;

MindFusion.Diagramming.DiagramView.create = function(element, diagram) {
	/// <summary>Creates and initializes a new DiagramView from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The DOM element that the DiagramView should be attached to.</param>
	/// <param name="diagram" type="Diagram" optional="true">Optional. Diagram. The Diagram instance that should be rendered by the new view.</param>
	/// <returns type="DiagramView">DiagramView. The newly created DiagramView object.</returns>
};
MindFusion.Diagramming.DiagramView.find = function(id) {
	/// <summary>Returns the specified DiagramView object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the DiagramView's element.</param>
	/// <returns type="DiagramView">DiagramView. A DiagramView object with the specified id, if found, or&#160;null otherwise.</returns>
};
MindFusion.Diagramming.DiagramView.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.DiagramView.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};

MindFusion.Diagramming.DoNothingBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	},
	setMouseCursor: function(point, startInteraction) {
		/// <summary>BehaviorBase.setMouseCursor override.</summary>
		/// <param name="point" type="Point"></param>
		/// <param name="startInteraction" type="Object"></param>
	}
};
MindFusion.Diagramming.DoNothingBehavior.__class = true;

MindFusion.Diagramming.DrawLinksBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.DrawLinksBehavior.__class = true;

MindFusion.Diagramming.DrawNodesBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.DrawNodesBehavior.__class = true;

MindFusion.Diagramming.DrawShapesBehavior.prototype = {
	createNode: function() {
		/// <summary>DrawNodesBehavior.CreateNode override.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">An instance of the DiagramNode class.</returns>
	}
};
MindFusion.Diagramming.DrawShapesBehavior.__class = true;

MindFusion.Diagramming.DummyNode.prototype = {
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. The copied item.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes this item from a JSON object. Inherited from DiagramItem.</summary>
		/// <param name="json" type="Object">Object. An object, containing the data for this item.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item content from an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">An XmlPersistContext&#160;object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	toJson: function() {
		/// <summary>Serializes this item into a JSON object. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the data for this item.</returns>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.DummyNode.__class = true;

MindFusion.Diagramming.EffectPhase = {
		/// <summary>Specifies the rendering phase during which an effect application is requested.</summary>
		/// <field name="AfterFill">Indicates that the NodeEffect.apply method is invoked after the target node is filled.</field>
		/// <field name="AfterOutline">Indicates that the NodeEffect.apply method is invoked after the target node is stroked.</field>
		/// <field name="BeforeFill">Indicates that the NodeEffect.apply method is invoked before the target node is filled.</field>
	AfterFill: 1,
	AfterOutline: 2,
	BeforeFill: 0
}
MindFusion.Diagramming.EffectPhase.__enum = true;

MindFusion.Diagramming.Events.prototype = {
};
MindFusion.Diagramming.Events.__class = true;

MindFusion.Diagramming.ExpandButtonAction = {
		/// <summary>Specifies what action is triggered by the +/- buttons that are displayed near expandable nodes.</summary>
		/// <field name="ExpandTreeBranch">Expands or collapses the children of a node in a tree-like diagram and raises the treeExpanded or treeCollapsed event.</field>
		/// <field name="RaiseEvents">Raises the expandButtonClicked event.</field>
	ExpandTreeBranch: 0,
	RaiseEvents: 1
}
MindFusion.Diagramming.ExpandButtonAction.__enum = true;

MindFusion.Diagramming.Factory.prototype = {
	createContainerNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new ContainerNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. A Rect instance specifying the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="ContainerNode">The newly created ContainerNode instance.</returns>
	},
	createControlNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new ControlNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. Rect. Specifies the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="ControlNode">ControlNode. The newly created ControlNode instance.</returns>
	},
	createDiagramLink: function(origin, destination) {
		/// <summary>Creates a new DiagramLink instance between the specified nodes&#160;and adds it to the links collection of the underlying diagram.</summary>
		/// <param name="origin" type="DiagramNode" optional="true">Optional. The origin node.</param>
		/// <param name="destination" type="DiagramNode" optional="true">Optional. The destination node.</param>
		/// <returns type="DiagramLink">The newly created DiagramLink instance.</returns>
	},
	createShapeNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. A Rect instance specifying the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="ShapeNode">The newly created ShapeNode instance.</returns>
	},
	createSvgNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new SvgNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. A Rect instance specifying the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="SvgNode">The newly created SvgNode instance.</returns>
	},
	createTableNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new TableNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. A Rect instance specifying the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="TableNode">The newly created TableNode instance.</returns>
	},
	createTreeViewNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new TreeViewNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. Rect. Specifies the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="TreeViewNode">TreeViewNode. The newly created TreeViewNode instance.</returns>
	},
	createVideoNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new VideoNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="Rect" optional="true">Optional. A Rect instance specifying the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. Number. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. Number. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. Number. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. Number. The height of the new node.</param>
		/// <returns type="VideoNode">The newly created VideoNode instance.</returns>
	}
};
MindFusion.Diagramming.Factory.__class = true;

MindFusion.Diagramming.FitSize = {
		/// <summary>Specifies how the resizeToFitText method should resize a node.</summary>
		/// <field name="KeepHeight">The original node height should remain intact.</field>
		/// <field name="KeepRatio">Allow changing both the width and height of a node, but keep the original width/height ratio if possible.</field>
		/// <field name="KeepWidth">The original node width should remain intact.</field>
	KeepHeight: 1,
	KeepRatio: 2,
	KeepWidth: 0
}
MindFusion.Diagramming.FitSize.__enum = true;

MindFusion.Diagramming.FoldContainerCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.FoldContainerCommand.__class = true;

MindFusion.Diagramming.FreeFormNode.prototype = {
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="Point">Point. The point to check.</param>
		/// <returns type="Boolean">true it this node contains the specified point; otherwise, false.</returns>
	},
	endDrag: function(ist) {
		/// <summary>DiagramNode.endDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getOutline: function() {
		/// <summary>DiagramNode.getOutline&#160;override. Gets the outline of this node.</summary>
		/// <returns type="Array">Array. An array of points.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this FreeFormNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramNode.restoreLocationState override.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	restoreState: function() {
		/// <summary>DiagramNode.restoreState override.</summary>
	},
	saveLocationState: function() {
		/// <summary>DiagramNode.saveLocationState override.</summary>
		/// <returns type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</returns>
	},
	saveState: function() {
		/// <summary>DiagramNode.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	startDrag: function(ist) {
		/// <summary>DiagramNode.startDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramNode.updateDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateFromPoints: function() {
		/// <summary>Updates the node's internal state after its points have changed.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.FreeFormNode.__class = true;

MindFusion.Diagramming.FreeFormNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new FreeFormNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.GlassEffect.prototype = {
};
MindFusion.Diagramming.GlassEffect.__class = true;

MindFusion.Diagramming.GlassEffectType = {
		/// <summary>Specifies the type of a GlassEffect node effect.</summary>
		/// <field name="Type1">Indicates a glass effect with soft radial glow at the bottom and a sharp reflection at the top.</field>
		/// <field name="Type2">Indicates a glass effect with linear glow at the bottom and sharp reflection at the top.</field>
		/// <field name="Type3">Indicates a glass effect with radial glow at the bottom and smooth reflection and emphasized outline at the top.</field>
		/// <field name="Type4">Indicates a glass effect with sharp reflection at the top and soft glow at the left and right sides.</field>
	Type1: 0,
	Type2: 1,
	Type3: 2,
	Type4: 3
}
MindFusion.Diagramming.GlassEffectType.__enum = true;

MindFusion.Diagramming.GridColumn.prototype = {
};
MindFusion.Diagramming.GridColumn.__class = true;

MindFusion.Diagramming.GridPanel.prototype = {
	getComponents: function() {
		/// <summary>Gets the child components of this panel. Inherited from Panel.</summary>
		/// <returns type="Array">Array. An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.GridPanel.__class = true;

MindFusion.Diagramming.GridRouter.prototype = {
};
MindFusion.Diagramming.GridRouter.__class = true;

MindFusion.Diagramming.GridRow.prototype = {
};
MindFusion.Diagramming.GridRow.__class = true;

MindFusion.Diagramming.GridStyle = {
		/// <summary>Defines values that specify the visual style of the alignment grid.</summary>
		/// <field name="Crosses">The grid is painted as a matrix of crosses.</field>
		/// <field name="Lines">The grid is represented as a series of crossing horizontal and vertical lines.</field>
		/// <field name="Points">The grid is painted as a matrix of points.</field>
	Crosses: 2,
	Lines: 1,
	Points: 0
}
MindFusion.Diagramming.GridStyle.__enum = true;

MindFusion.Diagramming.HandlesStyle = {
		/// <summary>Enumerates possible visual styles for frames and handles drawn around selected nodes.</summary>
		/// <field name="Custom">The control raises the drawAdjustmentHandles and hitTestAdjustmentHandles events to let your application perform custom drawing and hit testing of selection handles.</field>
		/// <field name="DashFrame">If selected, a node is drawn with a dashed frame. The frame enables resizing the node. The center of the node allows moving it and the edge area enables creating links.</field>
		/// <field name="EasyMove">Any point of the interior of a node enables moving the node, except a small area in the center that allows creating links. Best used with ModificationStart set to AutoHandles.</field>
		/// <field name="HatchFrame">If selected, the item is drawn with hatched frame. Modifications can be done as with DashFrame.</field>
		/// <field name="HatchHandles">If selected, a node is drawn with both hatched frame and modification handles. The frame enable moving the node, and the handles enable resizing. Links are created from any point of the interior.</field>
		/// <field name="HatchHandles2">Looks like HatchHandles, but allows moving the node from the interior area. Links are created from the points near the edge.</field>
		/// <field name="HatchHandles3">Behaves like HatchHandles2, but paints the selection frame using a denser brush pattern.</field>
		/// <field name="Invisible">There is no visible difference between selected and unselected node.</field>
		/// <field name="InvisibleMove">There aren't any selection handles displayed. The selected node can be only moved, but not resized.</field>
		/// <field name="MoveOnly">If a node is selected, it can be only moved. Best used with ModificationStart set to AutoHandles.</field>
		/// <field name="RoundAndSquare">Corner resize handles are round, remaining handles are square.</field>
		/// <field name="RoundAndSquare2">Corner resize handles are round, remaining handles are square. In addition, there is a dashed frame drawn around selected nodes.</field>
		/// <field name="SquareHandles">If selected, the node is drawn with square modification handles.</field>
		/// <field name="SquareHandles2">Square resize handles are drawn around a selected node. There isn't a move handle in the center as with the SquareHandles style, but nodes can be moved by dragging their interior or caption areas. Links can be created by drawing from near the edges of a node.</field>
	Custom: 10,
	DashFrame: 2,
	EasyMove: 8,
	HatchFrame: 3,
	HatchHandles: 4,
	HatchHandles2: 5,
	HatchHandles3: 6,
	Invisible: 0,
	InvisibleMove: 11,
	MoveOnly: 7,
	RoundAndSquare: 12,
	RoundAndSquare2: 13,
	SquareHandles: 1,
	SquareHandles2: 9
}
MindFusion.Diagramming.HandlesStyle.__enum = true;

MindFusion.Diagramming.HandlesVisualStyle.prototype = {
};
MindFusion.Diagramming.HandlesVisualStyle.__class = true;

MindFusion.Diagramming.HeaderEventArgs.prototype = {
};
MindFusion.Diagramming.HeaderEventArgs.__class = true;

MindFusion.Diagramming.HeaderResizeEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the resize operation.</summary>
	}
};
MindFusion.Diagramming.HeaderResizeEventArgs.__class = true;

MindFusion.Diagramming.InplaceEditEventArgs.prototype = {
};
MindFusion.Diagramming.InplaceEditEventArgs.__class = true;

MindFusion.Diagramming.Interaction.prototype = {
};
MindFusion.Diagramming.Interaction.__class = true;

MindFusion.Diagramming.InteractionState.prototype = {
	cancel: function(diagram) {
		/// <summary>Cancels the user interaction. Call this method to cancel interaction, usually in response to the user clicking the right mouse button while dragging.</summary>
		/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram, at which the action is performed.</param>
	},
	commit: function(point) {
		/// <summary>Invoked to commit the changes made by the user.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
	},
	isAllowed: function(point) {
		/// <summary>Checks whether the current interaction can be completed at the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
		/// <returns type="Boolean"></returns>
	},
	start: function() {
		/// <summary>This method is invoked in the beginning of the interaction, usually when the user presses the left mouse button over a modification handle.</summary>
	},
	update: function(point) {
		/// <summary>This method is invoked to update the interaction state, usually in response to the user moving the mouse after the modification has started.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
	}
};
MindFusion.Diagramming.InteractionState.__class = true;

MindFusion.Diagramming.ItemEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node.</summary>
	}
};
MindFusion.Diagramming.ItemEventArgs.__class = true;

MindFusion.Diagramming.LengthType = {
		/// <summary>Indicates how GridPanel determines dimensions of its rows and columns.</summary>
		/// <field name="Auto">The row or column is auto-sized to fit its child components.</field>
		/// <field name="Relative">The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements.</field>
	Auto: 0,
	Relative: 1
}
MindFusion.Diagramming.LengthType.__enum = true;

MindFusion.Diagramming.LinkCrossings = {
		/// <summary>Defines values that indicate how to render link intersection points.</summary>
		/// <field name="Arcs">An arc is drawn at the intersection point of two links. It connects the segments of the link at higher Z position and goes over the link at lower Z.</field>
		/// <field name="Cut">The intersection segments of links at lower Z position are cut by links at higher Z position.</field>
		/// <field name="Straight">No special indication for link intersection points.</field>
	Arcs: 1,
	Cut: 2,
	Straight: 0
}
MindFusion.Diagramming.LinkCrossings.__enum = true;

MindFusion.Diagramming.LinkEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node. Inherited from ItemEventArgs.</summary>
	},
	get_item: function() {
		/// <summary>Gets the item related to the event. Inherited from ItemEventArgs.</summary>
		/// <returns type="Object"></returns>
	}
};
MindFusion.Diagramming.LinkEventArgs.__class = true;

MindFusion.Diagramming.LinkLabel.prototype = {
	setControlPointPosition: function(controlPoint, dx, dy) {
		/// <summary>Positions this label relatively to the specified control point.</summary>
		/// <param name="controlPoint" type="Number">Number. The control point index.</param>
		/// <param name="dx" type="Number">Number. Horizontal offset from the control point.</param>
		/// <param name="dy" type="Number">Number. Vertical offset from the control point.</param>
	},
	setLinkLengthPosition: function(lengthFactor) {
		/// <summary>Positions this label relatively to the link length.</summary>
		/// <param name="lengthFactor" type="Number">Number. A value between 0 and 1 specifying the position of the label relatively to the link's length.</param>
	},
	setSegmentPosition: function(segment, dx, dy) {
		/// <summary>Positions this label relatively to the specified link segment.</summary>
		/// <param name="segment" type="Number">Number. The segment index.</param>
		/// <param name="dx" type="Number">Number. Horizontal offset from the segment center.</param>
		/// <param name="dy" type="Number">Number. Vertical offset from the segment center.</param>
	}
};
MindFusion.Diagramming.LinkLabel.__class = true;

MindFusion.Diagramming.LinkNodesBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.LinkNodesBehavior.__class = true;

MindFusion.Diagramming.LinkShape = {
		/// <summary>Specifies available styles for the segments of links.</summary>
		/// <field name="Bezier">The segments of a link are Bézier curves.</field>
		/// <field name="Cascading">The segments of a link are alternating horizontal and vertical lines, orthogonal to each other.</field>
		/// <field name="Polyline">The segments of a link are straight lines.</field>
		/// <field name="Spline">The segments of a link are curves forming an interpolating spline that passes through all control points.</field>
	Bezier: 0,
	Cascading: 2,
	Polyline: 1,
	Spline: 3
}
MindFusion.Diagramming.LinkShape.__enum = true;

MindFusion.Diagramming.LinkShapesBehavior.prototype = {
	createNode: function() {
		/// <summary>LinkNodesBehavior.CreateNode override.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">An instance of the DiagramNode class.</returns>
	}
};
MindFusion.Diagramming.LinkShapesBehavior.__class = true;

MindFusion.Diagramming.LinkTextStyle = {
		/// <summary>Specifies the position and alignment of links' labels.</summary>
		/// <field name="Center">The text is displayed horizontally above the middle link segment or control point, depending on whetherthere are an odd or even number of segments.</field>
		/// <field name="Follow">The label text starts from the first point of the link and follows the path defined by the link segments. This style is useful for displaying long text.</field>
		/// <field name="MiddleSegment">The text is displayed horizontally above the middle link segment. If there are an even number of segments, the label is drawn over the longer from the two segments adjacent to the middle control point.</field>
		/// <field name="MiddleSegmentRotated">The text is displayed rotated at the same angle as the segment where the text is placed. A long enough segmentfrom the middle link segments is chosen for that purpose.</field>
		/// <field name="OverLongestSegment">The text follows the longest link segment and is displayed centered at the segment's middle point.</field>
		/// <field name="Rotate">The text is displayed rotated at the same angle as the segment where the text is placed.A long enough segment from the middle link segments is chosen for that purpose.</field>
	Center: 0,
	Follow: 3,
	MiddleSegment: 4,
	MiddleSegmentRotated: 5,
	OverLongestSegment: 2,
	Rotate: 1
}
MindFusion.Diagramming.LinkTextStyle.__enum = true;

MindFusion.Diagramming.MagnifyBehavior.prototype = {
	onMouseDown: function(e) {
		/// <summary>BehaviorBase.onMouseDown override.</summary>
		/// <param name="e" type="MouseButtonEventArgs">A MouseButtonEventArgs that contains the event data.</param>
		/// <returns type="Boolean">Boolean. true if interaction starts.</returns>
	},
	onMouseMove: function(e) {
		/// <summary>BehaviorBase.onMouseMove override.</summary>
		/// <param name="e" type="MouseEventArgs">A MouseEventArgs that contains the event data.</param>
	},
	onMouseUp: function(e) {
		/// <summary>BehaviorBase.onMouseUp override.</summary>
		/// <param name="e" type="MouseButtonEventArgs">A MouseButtonEventArgs that contains the event data.</param>
	},
	createController: function(state) {
		/// <summary>Creates a controller appropriate for current context and pointer position. Inherited from BehaviorBase.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.MagnifyBehavior.__class = true;

MindFusion.Diagramming.Manipulator.prototype = {
};
MindFusion.Diagramming.Manipulator.__class = true;

MindFusion.Diagramming.MarkStyle = {
		/// <summary>Specifies the visual style of anchor point marks.</summary>
		/// <field name="Circle">Anchor point marked with a circle.</field>
		/// <field name="Cross">Anchor point marked with a cross.</field>
		/// <field name="None">No visual indication for the anchor point.</field>
		/// <field name="Rectangle">Anchor point marked with a rectangle.</field>
		/// <field name="X">Anchor point marked with an 'X'.</field>
	Circle: 3,
	Cross: 1,
	None: 0,
	Rectangle: 4,
	X: 2
}
MindFusion.Diagramming.MarkStyle.__enum = true;

MindFusion.Diagramming.ModificationStart = {
		/// <summary>Specifies how the user can start modifying an item.</summary>
		/// <field name="AutoHandles">Adjustment handles appear automatically around the object under the mouse; it can be modified without selecting it first.</field>
		/// <field name="SelectedOnly">Only selected objects can be modified.</field>
	AutoHandles: 1,
	SelectedOnly: 0
}
MindFusion.Diagramming.ModificationStart.__enum = true;

MindFusion.Diagramming.ModifierKeyAction = {
		/// <summary>Defines the actions that can be assigned to a modifier key such as CTRL or ALT.</summary>
		/// <field name="Magnify">Magnifies the diagram objects under the mouse while the modifier key is pressed down.</field>
		/// <field name="None">Specifies that a modifier key does not have any specific function assigned to it.</field>
		/// <field name="OverrideBehavior">While the modifier key is pressed down, dragging the mouse starts creating a new item or drawing a selection rectangle instead of modifying a selected item. Otherwise, dragging the mouse could start modification of the selected item.</field>
		/// <field name="Pan">Pan the view if the mouse is dragged while the modifier key is pressed down.</field>
		/// <field name="Select">Start drawing a selection rectangle if the mouse is dragged while a modifier key is pressed down. Toggle the selection if an item is clicked while the key is down.</field>
	Magnify: 4,
	None: 0,
	OverrideBehavior: 3,
	Pan: 1,
	Select: 2
}
MindFusion.Diagramming.ModifierKeyAction.__enum = true;

MindFusion.Diagramming.ModifierKeyActions.prototype = {
};
MindFusion.Diagramming.ModifierKeyActions.__class = true;

MindFusion.Diagramming.ModifyBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.ModifyBehavior.__class = true;

MindFusion.Diagramming.ModifyLinkController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction. Inherited from SinglePointerController.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	}
};
MindFusion.Diagramming.ModifyLinkController.__class = true;

MindFusion.Diagramming.ModifyNodeController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction. Inherited from SinglePointerController.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	}
};
MindFusion.Diagramming.ModifyNodeController.__class = true;

MindFusion.Diagramming.ModifySelectionController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction. Inherited from SinglePointerController.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	}
};
MindFusion.Diagramming.ModifySelectionController.__class = true;

MindFusion.Diagramming.MouseButtonActions = {
		/// <summary>Specifies what actions can be associated with the middle and right mouse buttons.</summary>
		/// <field name="Cancel">Cancels the current drawing operation.</field>
		/// <field name="Draw">Draw new items or modify existing items.</field>
		/// <field name="Magnify">Magnifies the items under the mouse while the button is pressed down.</field>
		/// <field name="None">Do not associate any action with the button.</field>
		/// <field name="Pan">Pans the view if the mouse is dragged while the button is pressed down.</field>
		/// <field name="Select">Starts a multiple selection operation.</field>
	Cancel: 2,
	Draw: 8,
	Magnify: 16,
	None: 0,
	Pan: 1,
	Select: 4
}
MindFusion.Diagramming.MouseButtonActions.__enum = true;

MindFusion.Diagramming.MouseInputDispatcher.prototype = {
	onMouseDown: function(position, button) {
		/// <summary>Called when the user presses down a mouse button.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <param name="button" type="Number">Number. 0 for left button, 1 for middle button, 2 for right button.</param>
	},
	onMouseMove: function(position) {
		/// <summary>Called when the user moves the mouse.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	onMouseUp: function(position, button) {
		/// <summary>Called when the user releases a mouse button.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <param name="button" type="Number">Number. 0 for left button, 1 for middle button, 2 for right button.</param>
	}
};
MindFusion.Diagramming.MouseInputDispatcher.__class = true;

MindFusion.Diagramming.MouseWheelAction = {
		/// <summary>Specifies the type of action performed when the user rotates the mouse wheel.</summary>
		/// <field name="None">The control&#160;does not handle wheel rotation internally, but raises mouseWheel event to allow custom handling.</field>
		/// <field name="Scroll">Indicates that the mouse wheel&#160;should scroll the view.</field>
		/// <field name="Zoom">Indicates that the mouse wheel&#160;should zoom the view.</field>
	None: 0,
	Scroll: 1,
	Zoom: 2
}
MindFusion.Diagramming.MouseWheelAction.__enum = true;

MindFusion.Diagramming.MoveNodesBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">MindFusion.Diagramming.SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.MoveNodesBehavior.__class = true;

MindFusion.Diagramming.NodeEffect.prototype = {
};
MindFusion.Diagramming.NodeEffect.__class = true;

MindFusion.Diagramming.NodeEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node. Inherited from ItemEventArgs.</summary>
	},
	get_item: function() {
		/// <summary>Gets the item related to the event. Inherited from ItemEventArgs.</summary>
		/// <returns type="Object"></returns>
	}
};
MindFusion.Diagramming.NodeEventArgs.__class = true;

MindFusion.Diagramming.NodeListView.prototype = {
	addNode: function(node, caption) {
		/// <summary>Adds a node to the NodeListView.</summary>
		/// <param name="node" type="DiagramNode">DiagramNode. The node to add.</param>
		/// <param name="caption" type="String" optional="true">Optional. String. The caption to display for the node.</param>
	},
	clearAll: function() {
		/// <summary>Removes all items from the NodeListView.</summary>
	},
	getNodeAt: function(point) {
		/// <summary>Gets the item at the specified location.</summary>
		/// <param name="point" type="Point">Point. The location where to look.</param>
		/// <returns type="DiagramNode">DiagramNode. The item found.</returns>
	},
	selectItem: function(item) {
		/// <summary>Selects the specified item.</summary>
		/// <param name="item" type="DiagramNode">DiagramNode. The item to select.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	}
};
MindFusion.Diagramming.NodeListView.__class = true;

MindFusion.Diagramming.NodeListView.create = function(element) {
	/// <summary>Creates and initializes a new NodeListView from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The DOM element that the NodeListView should be attached to.</param>
	/// <returns type="NodeListView">A NodeListView object that represents the newly created list view.</returns>
};
MindFusion.Diagramming.NodeListView.find = function(id) {
	/// <summary>Returns the specified NodeListView object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the NodeListView's element.</param>
	/// <returns type="NodeListView">A NodeListView object that contains the list view requested by id, if found, or null otherwise.</returns>
};
MindFusion.Diagramming.NodeListView.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.NodeListView.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.NodeListView.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Diagramming.NodeListView.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Diagramming.Orientation = {
		/// <summary>Specifies the orientation of user interface elements.</summary>
		/// <field name="Auto">Select orientation automatically.</field>
		/// <field name="Horizontal">Specifies horizontal orientation.</field>
		/// <field name="Vertical">Specifies vertical orientation.</field>
	Auto: 0,
	Horizontal: 1,
	Vertical: 2
}
MindFusion.Diagramming.Orientation.__enum = true;

MindFusion.Diagramming.Overview.prototype = {
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Point. The point to transform.</param>
		/// <returns type="Point">Point. The transformed point.</returns>
	}
};
MindFusion.Diagramming.Overview.__class = true;

MindFusion.Diagramming.Overview.create = function(element) {
	/// <summary>Creates and initializes a new Overview from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The DOM element that the overview should be attached to.</param>
	/// <returns type="Overview">An Overview object that represents the newly created overview.</returns>
};
MindFusion.Diagramming.Overview.find = function(id) {
	/// <summary>Returns the specified Overview object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the Overview's element.</param>
	/// <returns type="Overview">An Overview object with the specified id, if found, or null otherwise.</returns>
};
MindFusion.Diagramming.Overview.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.Overview.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.Overview.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Diagramming.Overview.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Diagramming.PanBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.PanBehavior.__class = true;

MindFusion.Diagramming.PanController.prototype = {
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	commit: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, accepting the operation. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction. Inherited from SinglePointerController.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	},
	validate: function(position) {
		/// <summary>Called to validate the operation at current pointer position. Inherited from SinglePointerController.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.PanController.__class = true;

MindFusion.Diagramming.Panel.prototype = {
	getComponents: function() {
		/// <summary>Gets the child components of this panel.</summary>
		/// <returns type="Array">Array. An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.Panel.__class = true;

MindFusion.Diagramming.Path.prototype = {
	getLength: function() {
		/// <summary>Gets the length of the Path expressed as the number of links participating in it.</summary>
		/// <returns type="Number">Number. An integer value that represents the number of edges (links) in the path.</returns>
	},
	getWeight: function(incNodes, incLinks) {
		/// <summary>Calculates the weight of this Path by accumulating the Weight of all participating diagram elements.</summary>
		/// <param name="incNodes" type="Boolean" optional="true">Optional. A boolean value specifying whether the Weight of DiagramNode elements should be considered.</param>
		/// <param name="incLinks" type="Boolean" optional="true">Optional. A boolean value specifying whether the Weight of DiagramLink elements should be considered.</param>
		/// <returns type="Number">A&#160;number that represents the total weight of the elements in this Path according to the incNodes and incLinks parameters.</returns>
	}
};
MindFusion.Diagramming.Path.__class = true;

MindFusion.Diagramming.PathFinder.prototype = {
	findAllCycles: function() {
		/// <summary>Finds all cycles in the underlying diagram.</summary>
		/// <returns type="Array">An array of Path objects; if no cycles are detected, the array is empty.</returns>
	},
	findAllPaths: function(from, to, maxPaths) {
		/// <summary>Finds and returns all paths that exist between two DiagramNode objects.</summary>
		/// <param name="from" type="DiagramNode">The first DiagramNode in the Path.</param>
		/// <param name="to" type="DiagramNode">The last DiagramNode in the Path.</param>
		/// <param name="maxPaths" type="Number" optional="true">Optional. Number. The maximum number of paths to find.</param>
		/// <returns type="Array">An array of Path objects; if no paths are found, the array is empty.</returns>
	},
	findCycle: function(participant) {
		/// <summary>Detects whether the specified DiagramNode participates in a cycle.</summary>
		/// <param name="participant" type="DiagramNode">A DiagramNode element which should participate in the found cycle.</param>
		/// <returns type="Path">A Path instance that represents the found cycle; null if no cycle is detected.</returns>
	},
	findLongestPath: function(from, to) {
		/// <summary>Finds the longest path between the specified DiagramNode objects.</summary>
		/// <param name="from" type="DiagramNode" optional="true">Optional. The first DiagramNode element in the Path.</param>
		/// <param name="to" type="DiagramNode" optional="true">Optional. The last DiagramNode element in the Path.</param>
		/// <returns type="Path">A Path instance that represents the longest path found; null if there is no Path connecting from and to.</returns>
	},
	findShortestPath: function(from, to, useNodeWeights, useLinkWeights) {
		/// <summary>Finds the shortest path between two DiagramNode elements, optionally considering the Weight of nodes and / or&#160;links.</summary>
		/// <param name="from" type="DiagramNode">The first DiagramNode in the Path.</param>
		/// <param name="to" type="DiagramNode">The last DiagramNode in the Path.</param>
		/// <param name="useNodeWeights" type="Boolean" optional="true">Optional. If true, the Path with minimal total weight is found, summing the Weight of nodes in the Path.</param>
		/// <param name="useLinkWeights" type="Boolean" optional="true">Optional. If true, the Path with minimal total weight is found, summing the Weight of links in the Path.</param>
		/// <returns type="Path">A Path instance that represents the shortest Path found or null if there is no Path connecting from and to.</returns>
	}
};
MindFusion.Diagramming.PathFinder.__class = true;

MindFusion.Diagramming.RelativeToLink = {
		/// <summary>Specifies how the link labels are positioned.</summary>
		/// <field name="ControlPoint">The link labels are positioned relative to a specified control point.</field>
		/// <field name="LinkLength">The link labels are positioned relative to the link.</field>
		/// <field name="Segment">The link labels are positioned relative to a specified segment.</field>
	ControlPoint: 1,
	LinkLength: 2,
	Segment: 0
}
MindFusion.Diagramming.RelativeToLink.__enum = true;

MindFusion.Diagramming.RemoveItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.RemoveItemCommand.__class = true;

MindFusion.Diagramming.ResizeTableColumnCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ResizeTableColumnCommand.__class = true;

MindFusion.Diagramming.ResizeTableRowCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ResizeTableRowCommand.__class = true;

MindFusion.Diagramming.Router.prototype = {
};
MindFusion.Diagramming.Router.__class = true;

MindFusion.Diagramming.Ruler.prototype = {
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Ruler's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">String. The id of the hidden field to flush the data to.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">String. The name of the event.</param>
		/// <param name="handler" type="Method">Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
};
MindFusion.Diagramming.Ruler.__class = true;

MindFusion.Diagramming.Ruler.create = function(element) {
	/// <summary>Creates and initializes a new Ruler from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLDivElement">HTMLDivElement. The DOM element that the ruler should be attached to.</param>
	/// <returns type="Ruler">A Ruler object that represents the newly created ruler.</returns>
};
MindFusion.Diagramming.Ruler.find = function(id) {
	/// <summary>Returns the specified Ruler object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the Ruler's element.</param>
	/// <returns type="Ruler">A Ruler object with the specified id, if found, or&#160;null otherwise.</returns>
};
MindFusion.Diagramming.Ruler.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.Ruler.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Diagramming.Ruler.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Diagramming.Ruler.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Object. The object to stringify.</param>
	/// <returns type="String">String. The JSON string.</returns>
};

MindFusion.Diagramming.SaveToStringFormat = {
		/// <summary>Specifies in what format to save the diagram when generating a string using the saveToString method.</summary>
		/// <field name="Json">Indicates JSON format.</field>
		/// <field name="Xml">Indicates XML format.</field>
	Json: 0,
	Xml: 1
}
MindFusion.Diagramming.SaveToStringFormat.__enum = true;

MindFusion.Diagramming.ScaleMode = {
		/// <summary>Defines Overview scaling modes.</summary>
		/// <field name="CombinedScales">Combine diagram's ZoomFactor with overview's ScaleFactor.</field>
		/// <field name="FitAll">Scale the Overview dynamically to fit the entire diagram.</field>
		/// <field name="FixedScale">Use fixed scale specified via ScaleFactor, ignoring diagram's zoom level.</field>
	CombinedScales: 1,
	FitAll: 0,
	FixedScale: 2
}
MindFusion.Diagramming.ScaleMode.__enum = true;

MindFusion.Diagramming.ScrollTableCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ScrollTableCommand.__class = true;

MindFusion.Diagramming.Selection.prototype = {
	addItem: function(item) {
		/// <summary>Adds an item to the Selection.</summary>
		/// <param name="item" type="DiagramItem">The item to add.</param>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	clear: function() {
		/// <summary>Removes all items from the selection.</summary>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getBounds: function() {
		/// <summary>Gets a rectangle that defines the position of the selection frame.</summary>
		/// <returns type="Rect">Rect. The frame's bounding rectangle.</returns>
	},
	onRemove: function() {
		/// <summary>DiagramItem.onRemove override.</summary>
	},
	removeItem: function(item) {
		/// <summary>Removes an item from the Diagram.</summary>
		/// <param name="item" type="DiagramItem">The item to add.</param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="Object">Object. An object containing selection state.</returns>
	},
	startDrag: function(ist) {
		/// <summary>DiagramItem.startDrag&#160;override.</summary>
		/// <param name="ist" type="InteractionState" optional="true">Optional. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	clone: function() {
		/// <summary>Creates a copy of this item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. The copied item.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	fromJson: function(json) {
		/// <summary>Deserializes this item from a JSON object. Inherited from DiagramItem.</summary>
		/// <param name="json" type="Object">Object. An object, containing the data for this item.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item content from an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="XmlPersistContext">An XmlPersistContext&#160;object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element. Inherited from DiagramItem.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>Serializes this item into a JSON object. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the data for this item.</returns>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	}
};
MindFusion.Diagramming.Selection.__class = true;

MindFusion.Diagramming.SelectionChangedEventArgs.prototype = {
};
MindFusion.Diagramming.SelectionChangedEventArgs.__class = true;

MindFusion.Diagramming.SelectionEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the current selection modification.</summary>
	}
};
MindFusion.Diagramming.SelectionEventArgs.__class = true;

MindFusion.Diagramming.SelectOnlyBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">Object. An object representing current context and input event.</param>
		/// <returns type="SinglePointerController">SinglePointerController. An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.SelectOnlyBehavior.__class = true;

MindFusion.Diagramming.SerializeTagEventArgs.prototype = {
};
MindFusion.Diagramming.SerializeTagEventArgs.__class = true;

MindFusion.Diagramming.ShadowsStyle = {
		/// <summary>Enumerates possible shadows-drawing styles.</summary>
		/// <field name="None">No shadows are drawn.</field>
		/// <field name="OneLevel">All shadows are drawn at the lowest z-level, and appear to be on one level.</field>
		/// <field name="ZOrder">Every shadows is drawn just below its object, possibly covering other objects.</field>
	None: 0,
	OneLevel: 1,
	ZOrder: 2
}
MindFusion.Diagramming.ShadowsStyle.__enum = true;

MindFusion.Diagramming.Shape.prototype = {
	getId: function() {
		/// <summary>Gets the id of this Shape.</summary>
		/// <returns type="String">The string identifier.</returns>
	},
	isElliptic: function() {
		/// <summary>Gets a value indicating whether this shape is elliptic.</summary>
		/// <returns type="Boolean">Boolean. True if the shape is elliptic, or false otherwise.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the shape content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that contains the the shape's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.Shape.__class = true;

MindFusion.Diagramming.Shape.component = function(id, isOutline, node) {
	/// <summary>Creates a shape component.</summary>
	/// <param name="id" type="String">String. The identifier of the shape.</param>
	/// <param name="isOutline" type="Boolean" optional="true">Optional. Boolean. A value indicating whether this shape defines the outline of its host node.</param>
	/// <param name="node" type="CompositeNode" optional="true">Optional. CompositeNode. The host node of this component.</param>
	/// <returns type="Shape">Shape. A reference to a Shape component with the specified identifier.</returns>
};
MindFusion.Diagramming.Shape.fromId = function(id) {
	/// <summary>Returns a reference to the Shape with the specified string identifier.</summary>
	/// <param name="id" type="String">The identifier of the Shape of interest.</param>
	/// <returns type="Shape">A reference to the Shape with the specified identifier or null if there is no such shape.</returns>
};

MindFusion.Diagramming.ShapeLibrary.prototype = {
	getShapes: function() {
		/// <summary>Gets the list with all shapes contained in the library.</summary>
		/// <returns type="Array">Array. A list with all the MindFusion.Diagramming.Shape objects contained in the library.</returns>
	},
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the library from the specified XML document.</summary>
		/// <param name="fileUrl" type="String">String. The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="function" optional="true">Optional. function. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="function" optional="true">Optional. function. A callback that should be invoked if the file could not be downloaded.</param>
	}
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the library from the specified XML document.</summary>
		/// <param name="fileUrl" type="String">The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="Function" optional="true">Optional. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="Function" optional="true">Optional. A callback that should be invoked if the file could not be downloaded.</param>
	},
};
MindFusion.Diagramming.ShapeLibrary.__class = true;

MindFusion.Diagramming.ShapeNode.prototype = {
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the ShapeNode contains the specified point.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">true if the Point is within the bounds of this node; otherwise, false.</returns>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">Array. An array with the points.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	resizeToFitText: function(fit) {
		/// <summary>Makes the shape node big enough to display its text without clipping.</summary>
		/// <param name="fit" type="FitSize">One of the FitSize enumeration values.</param>
		/// <returns type="Boolean">true if the node is resized successfully; otherwise, false.</returns>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="ShapeNodeState">ShapeNodeState. A ShapeNodeState instance.</param>
	},
	restoreState: function() {
		/// <summary>DiagramNode.restoreState override.</summary>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="ShapeNodeState">ShapeNodeState. A ShapeNodeState instance.</returns>
	},
	saveState: function() {
		/// <summary>DiagramNode.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.ShapeNode.__class = true;

MindFusion.Diagramming.Shapes.prototype = {
};
MindFusion.Diagramming.Shapes.__class = true;

MindFusion.Diagramming.Shapes.Actor = function() {
	/// <summary>Gets the Actor predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Alternative = function() {
	/// <summary>Gets the Alternative predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow = function() {
	/// <summary>Gets the Arrow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow1 = function() {
	/// <summary>Gets the Arrow1 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow2 = function() {
	/// <summary>Gets the Arrow2 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow3 = function() {
	/// <summary>Gets the Arrow3 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow4 = function() {
	/// <summary>Gets the Arrow4 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow5 = function() {
	/// <summary>Gets the Arrow5 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow6 = function() {
	/// <summary>Gets the Arrow6 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow7 = function() {
	/// <summary>Gets the Arrow7 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow8 = function() {
	/// <summary>Gets the Arrow8 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow9 = function() {
	/// <summary>Gets the Arrow9 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BackSlash = function() {
	/// <summary>Gets the BackSlash predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BeginLoop = function() {
	/// <summary>Gets the BeginLoop predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BowArrow = function() {
	/// <summary>Gets the BowArrow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnComplex = function() {
	/// <summary>Gets the BpmnComplex predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnDataBasedXor = function() {
	/// <summary>Gets the BpmnDataBasedXor predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndCancel = function() {
	/// <summary>Gets the BpmnEndCancel predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndCompensation = function() {
	/// <summary>Gets the BpmnEndCompensation predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndError = function() {
	/// <summary>Gets the BpmnEndError predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndLink = function() {
	/// <summary>Gets the BpmnEndLink predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndMessage = function() {
	/// <summary>Gets the BpmnEndMessage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndMultiple = function() {
	/// <summary>Gets the BpmnEndMultiple predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndTerminate = function() {
	/// <summary>Gets the BpmnEndTerminate predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEventBasedXor = function() {
	/// <summary>Gets the BpmnEventBasedXor predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnInclusive = function() {
	/// <summary>Gets the BpmnInclusive predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateCancel = function() {
	/// <summary>Gets the BpmnIntermediateCancel predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateCompensation = function() {
	/// <summary>Gets the BpmnIntermediateCompensation predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateError = function() {
	/// <summary>Gets the BpmnIntermediateError predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateLink = function() {
	/// <summary>Gets the BpmnIntermediateLink predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateMessage = function() {
	/// <summary>Gets the BpmnIntermediateMessage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateMultiple = function() {
	/// <summary>Gets the BpmnIntermediateMultiple predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateRule = function() {
	/// <summary>Gets the BpmnIntermediateRule predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateTimer = function() {
	/// <summary>Gets the BpmnIntermediateTimer predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnParallelFork = function() {
	/// <summary>Gets the BpmnParallelFork predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartLink = function() {
	/// <summary>Gets the BpmnStartLink predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartMessage = function() {
	/// <summary>Gets the BpmnStartMessage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartMultiple = function() {
	/// <summary>Gets the BpmnStartMultiple predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartRule = function() {
	/// <summary>Gets the BpmnStartRule predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartTimer = function() {
	/// <summary>Gets the BpmnStartTimer predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Circle = function() {
	/// <summary>Gets the Circle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cloud = function() {
	/// <summary>Gets the Cloud predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Collate = function() {
	/// <summary>Gets the Collate predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConeDown = function() {
	/// <summary>Gets the ConeDown predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConeUp = function() {
	/// <summary>Gets the ConeUp predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConnectedIssues = function() {
	/// <summary>Gets the ConnectedIssues predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.CreateRequest = function() {
	/// <summary>Gets the CreateRequest predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cross = function() {
	/// <summary>Gets the Cross predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cube = function() {
	/// <summary>Gets the Cube predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cylinder = function() {
	/// <summary>Gets the Cylinder predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Database = function() {
	/// <summary>Gets the Database predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DataTransmition = function() {
	/// <summary>Gets the DataTransmition predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DDelay = function() {
	/// <summary>Gets the DDelay predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decagon = function() {
	/// <summary>Gets the Decagon predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decision = function() {
	/// <summary>Gets the Decision predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decision2 = function() {
	/// <summary>Gets the Decision2 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DefaultFlow = function() {
	/// <summary>Gets the DefaultFlow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Delay = function() {
	/// <summary>Gets the Delay predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DInDelay = function() {
	/// <summary>Gets the DInDelay predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DirectAccessStorage = function() {
	/// <summary>Gets the DirectAccessStorage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DiskStorage = function() {
	/// <summary>Gets the DiskStorage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Display = function() {
	/// <summary>Gets the Display predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DividedEvent = function() {
	/// <summary>Gets the DividedEvent predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DividedProcess = function() {
	/// <summary>Gets the DividedProcess predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Document = function() {
	/// <summary>Gets the Document predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Donut = function() {
	/// <summary>Gets the Donut predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DoubleArrow = function() {
	/// <summary>Gets the DoubleArrow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DOutDelay = function() {
	/// <summary>Gets the DOutDelay predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Ellipse = function() {
	/// <summary>Gets the Ellipse predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.EndLoop = function() {
	/// <summary>Gets the EndLoop predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ExternalOrganization = function() {
	/// <summary>Gets the ExternalOrganization predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ExternalProcess = function() {
	/// <summary>Gets the ExternalProcess predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.File = function() {
	/// <summary>Gets the File predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.FramedRectangle = function() {
	/// <summary>Gets the FramedRectangle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Gate = function() {
	/// <summary>Gets the Gate predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Heart = function() {
	/// <summary>Gets the Heart predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Heptagon = function() {
	/// <summary>Gets the Heptagon predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Hourglass = function() {
	/// <summary>Gets the Hourglass predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Input = function() {
	/// <summary>Gets the Input predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.InternalStorage = function() {
	/// <summary>Gets the InternalStorage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Interrupt = function() {
	/// <summary>Gets the Interrupt predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Interrupt2 = function() {
	/// <summary>Gets the Interrupt2 predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.IsoProcess = function() {
	/// <summary>Gets the IsoProcess predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Junction = function() {
	/// <summary>Gets the Junction predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Lightning = function() {
	/// <summary>Gets the Lightning predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.LinedDocument = function() {
	/// <summary>Gets the LinedDocument predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ManualOperation = function() {
	/// <summary>Gets the ManualOperation predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Merge = function() {
	/// <summary>Gets the Merge predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MessageFromUser = function() {
	/// <summary>Gets the MessageFromUser predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MessageToUser = function() {
	/// <summary>Gets the MessageToUser predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Microform = function() {
	/// <summary>Gets the Microform predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MicroformProcessing = function() {
	/// <summary>Gets the MicroformProcessing predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MicroformRecording = function() {
	/// <summary>Gets the MicroformRecording predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MultiDocument = function() {
	/// <summary>Gets the MultiDocument predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MultiProc = function() {
	/// <summary>Gets the MultiProc predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Octagon = function() {
	/// <summary>Gets the Octagon predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OfflineStorage = function() {
	/// <summary>Gets the OfflineStorage predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OffpageConnection = function() {
	/// <summary>Gets the OffpageConnection predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OffpageReference = function() {
	/// <summary>Gets the OffpageReference predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Or = function() {
	/// <summary>Gets the Or predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Pentagon = function() {
	/// <summary>Gets the Pentagon predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PentagonArrow = function() {
	/// <summary>Gets the PentagonArrow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Plaque = function() {
	/// <summary>Gets the Plaque predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PointerArrow = function() {
	/// <summary>Gets the PointerArrow predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PrimitiveFromCall = function() {
	/// <summary>Gets the PrimitiveFromCall predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PrimitiveToCall = function() {
	/// <summary>Gets the PrimitiveToCall predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Procedure = function() {
	/// <summary>Gets the Procedure predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Process = function() {
	/// <summary>Gets the Process predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Prysm = function() {
	/// <summary>Gets the Prysm predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PunchedCard = function() {
	/// <summary>Gets the PunchedCard predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PyramidDown = function() {
	/// <summary>Gets the PyramidDown predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PyramidUp = function() {
	/// <summary>Gets the PyramidUp predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Quill = function() {
	/// <summary>Gets the Quill predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Rectangle = function() {
	/// <summary>Gets the Rectangle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Reversed = function() {
	/// <summary>Gets the Reversed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevTriangle = function() {
	/// <summary>Gets the RevTriangle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevWithCirc = function() {
	/// <summary>Gets the RevWithCirc predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevWithLine = function() {
	/// <summary>Gets the RevWithLine predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Rhombus = function() {
	/// <summary>Gets the Rhombus predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RightTriangle = function() {
	/// <summary>Gets the RightTriangle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RoundRect = function() {
	/// <summary>Gets the RoundRect predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RSave = function() {
	/// <summary>Gets the RSave predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Save = function() {
	/// <summary>Gets the Save predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Slash = function() {
	/// <summary>Gets the Slash predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Sort = function() {
	/// <summary>Gets the Sort predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Sphere = function() {
	/// <summary>Gets the Sphere predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star = function() {
	/// <summary>Gets the Star predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star16Pointed = function() {
	/// <summary>Gets the Star16Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star24Pointed = function() {
	/// <summary>Gets the Star24Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star32Pointed = function() {
	/// <summary>Gets the Star32Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star4Pointed = function() {
	/// <summary>Gets the Star4Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star5Pointed = function() {
	/// <summary>Gets the Star5Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star6Pointed = function() {
	/// <summary>Gets the Star6Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star7Pointed = function() {
	/// <summary>Gets the Star7Pointed predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Start = function() {
	/// <summary>Gets the Start predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Tape = function() {
	/// <summary>Gets the Tape predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Terminator = function() {
	/// <summary>Gets the Terminator predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Tetragon = function() {
	/// <summary>Gets the Tetragon predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.TransmittalTape = function() {
	/// <summary>Gets the TransmittalTape predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Trapezoid = function() {
	/// <summary>Gets the Trapezoid predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Triangle = function() {
	/// <summary>Gets the Triangle predefined shape.</summary>
	/// <returns type="Shape">An instance of the Shape class representing the predefined shape.</returns>
};

MindFusion.Diagramming.ShowAnchors = {
		/// <summary>Specifies when anchors points should be displayed.</summary>
		/// <field name="Always">Anchor point marks are always painted.</field>
		/// <field name="Auto">Anchor point marks are shown for the node under the mouse cursor.</field>
		/// <field name="Never">Anchor point marks are never painted.</field>
		/// <field name="Selected">Anchor point marks are painted for the selected node.</field>
	Always: 0,
	Auto: 2,
	Never: 1,
	Selected: 4
}
MindFusion.Diagramming.ShowAnchors.__enum = true;

MindFusion.Diagramming.SimplePanel.prototype = {
	getComponents: function() {
		/// <summary>Gets the child components of this panel. Inherited from Panel.</summary>
		/// <returns type="Array">Array. An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.SimplePanel.__class = true;

MindFusion.Diagramming.SimpleShape = {
		/// <summary>Defines the possible values for shape property of tables and containers.</summary>
		/// <field name="Rectangle">Sets node's shape to rectangle.</field>
		/// <field name="RoundedRectangle">Sets node's shape to rounded rectangle.</field>
	Rectangle: 0,
	RoundedRectangle: 1
}
MindFusion.Diagramming.SimpleShape.__enum = true;

MindFusion.Diagramming.SinglePointerController.prototype = {
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	commit: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, accepting the operation.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction.</summary>
		/// <param name="context" type="DrawingContext2D">DrawingContext2D. The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>Called continuously while the user draws with the mouse or touch.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>Called when the user starts drawing or modifying a diagram element.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>Called to validate the operation at current pointer position.</summary>
		/// <param name="position" type="Point">Point. A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">Boolean. true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.SinglePointerController.__class = true;

MindFusion.Diagramming.StackPanel.prototype = {
	getOrientation: function() {
		/// <summary>Gets the stack orientation.</summary>
		/// <returns type="MindFusion.Diagramming.Orientation">A member of the Orientation enumeration.</returns>
	},
	setOrientation: function(value) {
		/// <summary>Sets the stack orientation.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Orientation">A member of the Orientation enumeration.</param>
	},
	getComponents: function() {
		/// <summary>Gets the child components of this panel. Inherited from Panel.</summary>
		/// <returns type="Array">Array. An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.StackPanel.__class = true;

MindFusion.Diagramming.Style.prototype = {
};
MindFusion.Diagramming.Style.__class = true;

MindFusion.Diagramming.SvgContent.prototype = {
	parse: function(value) {
		/// <summary>Loads SVG code from the specified file.</summary>
		/// <param name="value" type="String">String. A string specifying the SVG file location.</param>
	},
	parseSvg: function(value) {
		/// <summary>Loads SVG code from the specified string.</summary>
		/// <param name="value" type="String">String. A string containing the SVG markup code.</param>
	}
};
MindFusion.Diagramming.SvgContent.__class = true;

MindFusion.Diagramming.SvgExporter.prototype = {
	exportElement: function(diagram) {
		/// <summary>Creates an SVG element representing the specified diagram.</summary>
		/// <param name="diagram" type="MindFusion.Drawing.Diagram">A reference to the diagram to be exported.</param>
	},
	exportElement: function(diagram, parentDoc) {
		/// <summary>Creates an SVG element representing the specified diagram.</summary>
		/// <param name="diagram" type="Diagram">Diagram. A reference to the diagram to be exported.</param>
		/// <param name="parentDoc" type="Document" optional="true">Optional. Document. The document to export to.</param>
		/// <returns type="Object">Object. A DOM SVG element.</returns>
	}
	exportString: function(diagram) {
		/// <summary>Creates an SVG document representing the specified diagram.</summary>
		/// <param name="diagram" type="Diagram">Diagram. A reference to the diagram to be exported.</param>
		/// <returns type="Object">Object. A string containing the SVG document's content.</returns>
	},
};
MindFusion.Diagramming.SvgExporter.__class = true;

MindFusion.Diagramming.SvgNode.prototype = {
	clone: function() {
		/// <summary>ShapeNode.clone override.</summary>
	},
	fromJson: function() {
		/// <summary>ShapeNode.fromJson override.</summary>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this SvgNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>ShapeNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	},
	resizeToFitText: function(fit) {
		/// <summary>Makes the shape node big enough to display its text without clipping. Inherited from ShapeNode.</summary>
		/// <param name="fit" type="FitSize">One of the FitSize enumeration values.</param>
		/// <returns type="Boolean">true if the node is resized successfully; otherwise, false.</returns>
	}
};
MindFusion.Diagramming.SvgNode.__class = true;

MindFusion.Diagramming.SvgNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new SvgNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.TableConnectionPoint.prototype = {
	addLinkToNode: function() {
		/// <summary>Adds the link associated with this connection point to the associated node.</summary>
	},
	getInitialPoint: function() {
		/// <summary>Returns a point (usually the center of the bounding rectangle) contained within the associated node.</summary>
		/// <returns type="Point">Point. A Point contained within the node.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.</summary>
		/// <param name="point1" type="Point">Point. The first point of the segment.</param>
		/// <param name="point2" type="Point">Point. The second point of the segment.</param>
		/// <returns type="Point">Point. A Point object representing the intersection point.</returns>
	},
	getNearestBorderPoint: function(point) {
		/// <summary>Returns the nearest point lying on the node border.</summary>
		/// <param name="point" type="Point">Point. A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	linkChanges: function(item, point) {
		/// <summary>Checks whether the link would change if attached to the specified node at the specified point.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. A DiagramItem under the mouse cursor.</param>
		/// <param name="point" type="Point">Point. A point where the link will be connected.</param>
		/// <returns type="Boolean">Boolean. true if the link would connect to a different entity if dropped at the specified location; otherwise, false.</returns>
	},
	removeLinkFromNode: function() {
		/// <summary>Removes the link associated with this connection point from the associated node.</summary>
	},
	saveEndRelative: function() {
		/// <summary>Updates the coordinates of the connection point represented by this link, relative to the bounding rectangle of the associated node.</summary>
	},
	getNearestAnchorPoint: function(point) {
		/// <summary>Returns the nearest anchor Point pertinent to this connection. Inherited from ConnectionPoint.</summary>
		/// <param name="point" type="Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNodeRect: function() {
		/// <summary>Returns the bounding rectangle of the node associated with this connection point. Inherited from ConnectionPoint.</summary>
		/// <returns type="Rect">The bounding rectangle of the node.</returns>
	},
	nodesIntersect: function(connectionPoint) {
		/// <summary>Checks whether the node associated with the current connection point and the node associated with the specified connection point intersect. Inherited from ConnectionPoint.</summary>
		/// <param name="connectionPoint" type="ConnectionPoint">A ConnectionPoint instance.</param>
		/// <returns type="Boolean">Boolean. true if the node associated with the current connection point and the node associated with the specified connection point intersect; otherwise, false.</returns>
	}
};
MindFusion.Diagramming.TableConnectionPoint.__class = true;

MindFusion.Diagramming.TableNode.prototype = {
	addColumn: function() {
		/// <summary>Adds a new column to the table.</summary>
		/// <returns type="Object">Object. The newly created column object.</returns>
	},
	addRow: function() {
		/// <summary>Adds a new row to the table.</summary>
		/// <returns type="Object">Object. The newly created row object.</returns>
	},
	cellFromPoint: function(point) {
		/// <summary>Returns the cell that contains the specified point.</summary>
		/// <param name="point" type="Point">A Point instance.</param>
		/// <returns type="Object">A JavaScript&#160;object containing following fields:&#10;{&#10;cell: Cell&#160;reference,&#10;cellRect: Rect,&#10;column: Number,&#10;row: Number&#10;};</returns>
	},
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the TableNode contains the specified point.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">true if the point is within the bounds of this node, or false otherwise.</returns>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point.</summary>
		/// <param name="link" type="DiagramLink">DiagramLink. A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">Point. The point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, otherwise, false.</param>
		/// <returns type="TableConnectionPoint"></returns>
	},
	deleteColumn: function(col) {
		/// <summary>Deletes the specified column.</summary>
		/// <param name="col" type="Number">Number. An integer value specifying which column to delete.</param>
	},
	deleteRow: function(row) {
		/// <summary>Deletes the specified row.</summary>
		/// <param name="row" type="Number">Number. An integer value specifying which row to delete.</param>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	getCell: function(col, row) {
		/// <summary>Returns a reference to the cell located at the specified column and row of this table.</summary>
		/// <param name="col" type="Number">Number. An integer value specifying the index of a table's column.</param>
		/// <param name="row" type="Number">Number. An integer value specifying the index of a table's row.</param>
		/// <returns type="Cell">A Cell instance representing the specified cell.</returns>
	},
	getColumn: function(col) {
		/// <summary>Returns a reference to the column at the specified position within the table's list of columns.</summary>
		/// <param name="col" type="Number">Number. An integer value specifying the index of a table's column.</param>
		/// <returns type="Object">Object. A JavaScript object representing the specified column.</returns>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">Array. An array with the points.</returns>
	},
	getRow: function(row) {
		/// <summary>Returns a reference to the row at the specified position within the table's list of rows.</summary>
		/// <param name="row" type="Number">Number. An integer value specifying the index of a table's row.</param>
		/// <returns type="Object">Object. A JavaScript object representing the specified row.</returns>
	},
	getRowRect: function(row) {
		/// <summary>Returns the bounding rectangle of the specified row.</summary>
		/// <param name="row" type="Number">Number. An integer value specifying the index of a table's row.</param>
		/// <returns type="Rect">Rect. A Rect object representing the row's bounding rectangle.</returns>
	},
	insertColumn: function(col) {
		/// <summary>Inserts a new column at the specified position.</summary>
		/// <param name="col" type="Number">Number. An integer value specifying the position within the table's list of columns where the new column should be inserted.</param>
	},
	insertRow: function(row) {
		/// <summary>Inserts a new row at the specified position.</summary>
		/// <param name="row" type="Number">Number. An integer value specifying the position within the table's list of rows where the new row should be inserted.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	redimTable: function(columns, rows) {
		/// <summary>Changes the number of columns and rows in this table.</summary>
		/// <param name="columns" type="Number">Number. An integer value specifying the new number of columns.</param>
		/// <param name="rows" type="Number">Number. An integer value specifying the new number of rows.</param>
	},
	resizeToFitText: function(ignoreCaption, keepCellWidth) {
		/// <summary>Resizes the columns and rows so that cells are large enough to fit their text.</summary>
		/// <param name="ignoreCaption" type="Boolean">true to ignore caption text and consider only cells for table size, or false otherwise.</param>
		/// <param name="keepCellWidth" type="Boolean">true to preserve column widths and resize only row heights, or false otherwise.</param>
	},
	restoreState: function() {
		/// <summary>DiagramNode.restoreState override.</summary>
	},
	rowFromPoint: function(point) {
		/// <summary>Returns the index of the table's row that contains the specified point.</summary>
		/// <param name="point" type="Point">Point. A Point instance.</param>
		/// <returns type="Number">Number. An integer value specifying the row's index.</returns>
	},
	saveState: function() {
		/// <summary>DiagramNode.saveState override.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	scrollDown: function() {
		/// <summary>Scrolls the table's rows down.</summary>
	},
	scrollUp: function() {
		/// <summary>Scrolls the table's rows up.</summary>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.TableNode.__class = true;

MindFusion.Diagramming.Theme.prototype = {
};
MindFusion.Diagramming.Theme.__class = true;

MindFusion.Diagramming.Theme.getBlue = function() {
	/// <summary>Gets the built-in Blue theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getBusiness = function() {
	/// <summary>Gets the built-in Business theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getEarth = function() {
	/// <summary>Gets the built-in Earth theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getGray = function() {
	/// <summary>Gets the built-in Gray theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getGreen = function() {
	/// <summary>Gets the built-in Green theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getLight = function() {
	/// <summary>Gets the built-in Light theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getPastel = function() {
	/// <summary>Gets the built-in Pastel theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getPeach = function() {
	/// <summary>Gets the built-in Peach theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};
MindFusion.Diagramming.Theme.getStandard = function() {
	/// <summary>Gets the built-in Standard theme.</summary>
	/// <returns type="Theme">An instance of the Theme class.</returns>
};

MindFusion.Diagramming.TreeItemEventArgs.prototype = {
};
MindFusion.Diagramming.TreeItemEventArgs.__class = true;

MindFusion.Diagramming.TreeViewConnectionPoint.prototype = {
	addLinkToNode: function() {
		/// <summary>Adds the link associated with this connection point to the associated node.</summary>
	},
	getInitialPoint: function() {
		/// <summary>Returns a point (usually the center of the bounding rectangle) contained within the associated node.</summary>
		/// <returns type="Point">Point. A Point contained within the node.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.</summary>
		/// <param name="point1" type="Point">Point. The first point of the segment.</param>
		/// <param name="point2" type="Point">Point. The second point of the segment.</param>
		/// <returns type="Point">Point. A Point object representing the intersection point.</returns>
	},
	getNearestBorderPoint: function(point) {
		/// <summary>Returns the nearest point lying on the node border.</summary>
		/// <param name="point" type="Point">Point. A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	linkChanges: function(item, point) {
		/// <summary>Checks whether the link would change if attached to the specified node at the specified point.</summary>
		/// <param name="item" type="DiagramItem">DiagramItem. A DiagramItem under the mouse cursor.</param>
		/// <param name="point" type="Point">Point. A point where the link will be connected.</param>
		/// <returns type="Boolean">Boolean. true if the link would connect to a different entity if dropped at the specified location; otherwise, false.</returns>
	},
	removeLinkFromNode: function() {
		/// <summary>Removes the link associated with this connection point from the associated node.</summary>
	},
	saveEndRelative: function() {
		/// <summary>Updates the coordinates of the connection point represented by this link, relative to the bounding rectangle of the associated node.</summary>
	},
	getNearestAnchorPoint: function(point) {
		/// <summary>Returns the nearest anchor Point pertinent to this connection. Inherited from ConnectionPoint.</summary>
		/// <param name="point" type="Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">AnchorPointDetails. An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNodeRect: function() {
		/// <summary>Returns the bounding rectangle of the node associated with this connection point. Inherited from ConnectionPoint.</summary>
		/// <returns type="Rect">The bounding rectangle of the node.</returns>
	},
	nodesIntersect: function(connectionPoint) {
		/// <summary>Checks whether the node associated with the current connection point and the node associated with the specified connection point intersect. Inherited from ConnectionPoint.</summary>
		/// <param name="connectionPoint" type="ConnectionPoint">A ConnectionPoint instance.</param>
		/// <returns type="Boolean">Boolean. true if the node associated with the current connection point and the node associated with the specified connection point intersect; otherwise, false.</returns>
	}
};
MindFusion.Diagramming.TreeViewConnectionPoint.__class = true;

MindFusion.Diagramming.TreeViewItem.prototype = {
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	}
};
MindFusion.Diagramming.TreeViewItem.__class = true;

MindFusion.Diagramming.TreeViewNode.prototype = {
	addItem: function(item, parentItem) {
		/// <summary>Adds a new child item to the specified parent item or to the root items list, if a parent is not specified.</summary>
		/// <param name="item" type="TreeViewItem">TreeViewItem. The item to add.</param>
		/// <param name="parentItem" type="TreeViewItem" optional="true">Optional. TreeViewItem. The parent item.</param>
	},
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the TreeViewNode contains the specified point.</summary>
		/// <param name="point" type="Point">Point. The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if the point is within the bounds of this node; otherwise, false.</returns>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point.</summary>
		/// <param name="link" type="DiagramLink">DiagramLink. A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">Point. The point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, otherwise, false.</param>
		/// <returns type="TreeViewConnectionPoint">TreeViewConnectionPoint. The connection point.</returns>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	fromObject: function(data) {
		/// <summary>Loads the tree view items from a data object.</summary>
		/// <param name="data" type="Object">Object. The object containing the tree view data.</param>
	},
	getItemRect: function(item) {
		/// <summary>Returns the bounding rectangle of the specified item.</summary>
		/// <param name="item" type="TreeViewItem">TreeViewItem. The item.</param>
		/// <returns type="Rect">Rect. A Rect object representing the item's bounding rectangle.</returns>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">Array. An array with the points.</returns>
	},
	itemFromPoint: function(point) {
		/// <summary>Returns the item that contains the specified point.</summary>
		/// <param name="point" type="Point">Point. A Point instance.</param>
		/// <returns type="TreeViewItem">TreeViewItem. The item containing the point, or null.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	removeItem: function(item) {
		/// <summary>Removes the specified item from the node.</summary>
		/// <param name="item" type="TreeViewItem">TreeViewItem. The item to remove.</param>
	},
	resizeToFitText: function() {
		/// <summary>Resizes the tree view so that it is large enough to fit the text of its items.</summary>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	scrollDown: function() {
		/// <summary>Scrolls the node down.</summary>
	},
	scrollUp: function() {
		/// <summary>Scrolls the table's rows up.</summary>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.TreeViewNode.__class = true;

MindFusion.Diagramming.VideoNode.prototype = {
	clone: function() {
		/// <summary>DiagramNode.clone override.</summary>
	},
	fromJson: function() {
		/// <summary>DiagramNode.fromJson override.</summary>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element containing the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">Element. An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="XmlPersistContext">XmlPersistContext. An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	toJson: function() {
		/// <summary>DiagramNode.toJson override.</summary>
	},
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">The Point to check.</param>
		/// <returns type="Boolean">Boolean. true if this item contains the specified point, or&#160;false otherwise.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">InteractionState. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow. Inherited from DiagramItem.</summary>
		/// <returns type="Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point. Inherited from DiagramItem.</summary>
		/// <param name="point" type="Point">Point. A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Number. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. Boolean. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. Boolean. true to exclude locked items from the search.</param>
		/// <returns type="DiagramItem">DiagramItem. The item that contains the specified point.</returns>
	},
	invalidate: function(dirty, force) {
		/// <summary>Invalidates the region of the canvas, that matches the item's repaint bounds. Inherited from DiagramItem.</summary>
		/// <param name="dirty" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. Optional.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo. Inherited from DiagramItem.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection. Inherited from DiagramItem.</summary>
	},
	restoreState: function(state) {
		/// <summary>Loads the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <param name="state" type="Object">Object. An object, containing the properties of this DiagramItem.</param>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem. Inherited from DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramItemState instance.</returns>
	},
	saveState: function() {
		/// <summary>Saves the properties of this diagram item. Inherited from DiagramItem.</summary>
		/// <returns type="Object">Object. An object, containing the properties of this DiagramItem.</returns>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements. Inherited from DiagramItem.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item. Inherited from DiagramItem.</summary>
		/// <param name="ist" type="InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type. Inherited from DiagramNode.</summary>
		/// <param name="outgoing" type="Boolean">Boolean. true to check for outgoing links, or&#160;false otherwise.</param>
		/// <returns type="Boolean">Boolean. true if the node accepts connections of the specified type, or false otherwise.</returns>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it. Inherited from DiagramNode.</summary>
		/// <param name="subordinate" type="DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it. Inherited from DiagramNode.</summary>
		/// <param name="node" type="DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point. Inherited from DiagramNode.</summary>
		/// <param name="link" type="DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">Boolean. true if link is an incoming link, or false otherwise.</param>
		/// <returns type="ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node. Inherited from DiagramNode.</summary>
	},
	getAllLinks: function() {
		/// <summary>Returns all links connected to this node. Inherited from DiagramNode.</summary>
		/// <returns type="Array">Array. An array of DiagramLink objects.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline. Inherited from DiagramNode.</summary>
		/// <param name="point1" type="Point">The first Point of the segment.</param>
		/// <param name="point2" type="Point">The second Point of the segment.</param>
		/// <returns type="Point">A Point object representing the intersection point.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated. Inherited from DiagramNode.</summary>
		/// <returns type="Rect">A Rect that bounds the rotated shape of this node.</returns>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked. Inherited from DiagramNode.</summary>
		/// <param name="mousePosition" type="Point">Point. The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">MouseButton. A value identifying the clicked mouse button.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override. Inherited from DiagramNode.</summary>
		/// <param name="ist" type="DiagramNodeState">DiagramNodeState. A DiagramNodeState instance.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node. Inherited from DiagramNode.</summary>
		/// <param name="bounds" type="Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	}
};
MindFusion.Diagramming.VideoNode.__class = true;

MindFusion.Diagramming.XmlPersistContext.prototype = {
	addChildElement: function(elementName, parentElement, innerText) {
		/// <summary>Adds a new child node with the specified name and value to the specified parent node.</summary>
		/// <param name="elementName" type="String">String. A string containing the name of new child element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="innerText" type="String" optional="true">Optional. String. Optional value to be added as child text node of the new element.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	readBool: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a Boolean value with the specified name.</summary>
		/// <param name="elementName" type="String">String. A string specifying the name of the Boolean XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Boolean">Boolean. The default value to return if specified child XML element does not exist.</param>
		/// <returns type="Boolean">Boolean. The value loaded from XML.</returns>
	},
	readBrush: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a Brush object with the specified name.</summary>
		/// <param name="elementName" type="String">String. A string specifying the name of the brush XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Object" optional="true">Optional. Object. The default brush to return if specified child XML element does not exist.</param>
		/// <returns type="Object">Object. The brush object loaded from XML.</returns>
	},
	readFloat: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a floating-point number with the specified name.</summary>
		/// <param name="elementName" type="String">String. A string specifying the name of the number XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Number" optional="true">Optional. Number. The default number to return if specified child XML element does not exist.</param>
		/// <returns type="Number">Number. The number loaded from XML.</returns>
	},
	readImage: function(elementName, parentElement) {
		/// <summary>Reads an image object with the specified name.</summary>
		/// <param name="elementName" type="String">String. A string specifying the name of the image XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="String">String. Base64-encoded image data loaded from XML.</returns>
	},
	readInt: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an integer number with the specified name.</summary>
		/// <param name="elementName" type="String">String. A string specifying the name of the number XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Number" optional="true">Optional. Number. The default number to return if specified child XML element does not exist.</param>
		/// <returns type="Number">Number. The number loaded from XML.</returns>
	},
	readString: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a string value with the specified name.</summary>
		/// <param name="elementName" type="String">String. The name of the string's XML element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Object" optional="true">Optional. Object. The default string to return if specified child XML element does not exist.</param>
		/// <returns type="String">String. The string loaded from XML.</returns>
	},
	writeBool: function(boolValue, elementName, parentElement) {
		/// <summary>Writes a Boolean value with the specified name.</summary>
		/// <param name="boolValue" type="Boolean">Boolean. The Boolean value that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	writeBrush: function(brush, elementName, parentElement) {
		/// <summary>Writes a reference to the specified brush. The brush is registered within the internal hashtable for subsequent serialization.</summary>
		/// <param name="brush" type="Object">Object. The Brush object that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	writeFloat: function(floatValue, elementName, parentElement) {
		/// <summary>Writes a floating-point number with the specified name.</summary>
		/// <param name="floatValue" type="Number">Number. The number that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	writeImage: function(image, elementName, parentElement) {
		/// <summary>Writes a reference to the specified image. The image is registered within the internal hashtable for subsequent serialization.</summary>
		/// <param name="image" type="String">String. Base64-encoded image data that should be saved in XML.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	writeInt: function(intValue, elementName, parentElement) {
		/// <summary>Writes an integer number with the specified name.</summary>
		/// <param name="intValue" type="Number">Number. The number that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	},
	writeString: function(stringValue, elementName, parentElement) {
		/// <summary>Writes a string value with the specified name.</summary>
		/// <param name="stringValue" type="String">String. The string that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">String. A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">Element. The parent DOM Element object.</param>
		/// <returns type="Element">Element. The newly created DOM Element object.</returns>
	}
};
MindFusion.Diagramming.XmlPersistContext.__class = true;

MindFusion.Drawing.Border3D.prototype = {
};
MindFusion.Drawing.Border3D.__class = true;

MindFusion.Drawing.Component.prototype = {
};
MindFusion.Drawing.Component.__class = true;

MindFusion.Drawing.ComponentBase.prototype = {
};
MindFusion.Drawing.ComponentBase.__class = true;

MindFusion.Drawing.Container.prototype = {
};
MindFusion.Drawing.Container.__class = true;

MindFusion.Drawing.DashStyle = {
		/// <summary>Specifies the dash pattern of lines.</summary>
		/// <field name="Custom">Custom pattern.</field>
		/// <field name="Dash">Draw dashed line.</field>
		/// <field name="DashDot">Draw dash-dot pattern.</field>
		/// <field name="DashDotDot">Draw dash-dot-dot pattern.</field>
		/// <field name="Dot">Draw dotted line.</field>
		/// <field name="Solid">Draw solid line.</field>
	Custom: 5,
	Dash: 1,
	DashDot: 3,
	DashDotDot: 4,
	Dot: 2,
	Solid: 0
}
MindFusion.Drawing.DashStyle.__enum = true;

MindFusion.Drawing.DrawingUtils.prototype = {
};
MindFusion.Drawing.DrawingUtils.__class = true;

MindFusion.Drawing.DrawingUtils.approximateBezier = function(points, quality, start) {
	/// <summary>Approximates a Bezier curve with the given quality and by a series of line segments.</summary>
	/// <param name="points" type="Array">Array. A list of Bezier control points.</param>
	/// <param name="quality" type="Number">Number. Specifies the approximation quality.</param>
	/// <param name="start" type="Number">Number. Specifies the start point index.</param>
	/// <returns type="Array">Array. A list of points that approximate the curve as a series of straight line segments.</returns>
};
MindFusion.Drawing.DrawingUtils.checkIntersect = function(point, rect, rad) {
	/// <summary>Checks if the specified rectangle and circle intersect.</summary>
	/// <param name="point" type="Point">Point. The center of the circle.</param>
	/// <param name="rect" type="Rect">Rect. The rectangle.</param>
	/// <param name="rad" type="Number">Number. The radius of the circle.</param>
	/// <returns type="Boolean">Boolean. true if the rectangle and the circle intersect; otherwise, false.</returns>
};
MindFusion.Drawing.DrawingUtils.degrees = function(radians) {
	/// <summary>Converts the specified value from radians to degrees.</summary>
	/// <param name="radians" type="Number">Number. The radians to convert.</param>
	/// <returns type="Number">Number. The converted angle.</returns>
};
MindFusion.Drawing.DrawingUtils.distToPolyline = function() {
	/// <summary>Calculates the shortest distance from the specified point to the specified polyline, also returning the index of the segment the point is closest to.</summary>
};
MindFusion.Drawing.DrawingUtils.distToRectPoint = function(point, rect) {
	/// <summary>Returns the point that lies on the outline of a rectangle and is nearest to the given point.</summary>
	/// <param name="point" type="Point">Point. The point to consider.</param>
	/// <param name="rect" type="Rect">Rect. The rectangle to consider.</param>
	/// <returns type="Number">Number. The nearest point.</returns>
};
MindFusion.Drawing.DrawingUtils.getCenter = function(rect) {
	/// <summary>Returns the center of the specified rectangle.</summary>
	/// <param name="rect" type="Rect">Rect. The rectangle.</param>
	/// <returns type="Point">Point. The center.</returns>
};
MindFusion.Drawing.DrawingUtils.getPointsBounds = function(points) {
	/// <summary>Calculates the bounding rect of the specified polyline.</summary>
	/// <param name="points" type="Array">Array. An array of points.</param>
	/// <returns type="Rect">Rect. The bounding rect.</returns>
};
MindFusion.Drawing.DrawingUtils.getSegmentIntersection = function(p1, p2, p3, p4) {
	/// <summary>Checks whether the segments defined by the specified point pairs intersect and returns the intersection point.</summary>
	/// <param name="p1" type="Point">Point. The start of the first segment.</param>
	/// <param name="p2" type="Point">Point. The end of the first segment.</param>
	/// <param name="p3" type="Point">Point. The start of the second segment.</param>
	/// <param name="p4" type="Point">Point. The end of the second segment.</param>
	/// <returns type="Boolean">Boolean. true if the segments intersect, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.inflate = function(rect, x, y) {
	/// <summary>Creates and returns an enlarged copy of a Rect instance.</summary>
	/// <param name="rect" type="Rect">Rect. The Rect instance to inflate.</param>
	/// <param name="x" type="Number">Number. The amount to inflate horizontally.</param>
	/// <param name="y" type="Number">Number. The amount to inflate vertically.</param>
	/// <returns type="Rect">Rect. The inflated Rect.</returns>
};
MindFusion.Drawing.DrawingUtils.intersect = function(p1, p2, p3, p4) {
	/// <summary>Determines whether the specified line segments intersect.</summary>
	/// <param name="p1" type="Point">Point. The start of the first line segment.</param>
	/// <param name="p2" type="Point">Point. The end of the first line segment.</param>
	/// <param name="p3" type="Point">Point. The start of the second line segment.</param>
	/// <param name="p4" type="Point">Point. The end of the second line segment.</param>
	/// <returns type="Boolean">Boolean. true if the segments intersect, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.minDistToRect = function(point, rect) {
	/// <summary>Calculates the minimum distance between a given point and a given rectangle.</summary>
	/// <param name="point" type="Point">Point. The point.</param>
	/// <param name="rect" type="Rectabgle">Rectabgle. The rectangle.</param>
	/// <returns type="Number">Number. The minimum distance.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInCircle = function(point, center, radius) {
	/// <summary>Checks whether the specified circle contains the specified point.</summary>
	/// <param name="point" type="Point">Point. The point to check.</param>
	/// <param name="center" type="Point">Point. The center of the circle.</param>
	/// <param name="radius" type="Number">Number. The radius of the circle.</param>
	/// <returns type="Boolean">Boolean. true if the circle contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInEllipse = function(point, rect) {
	/// <summary>Checks whether the specified ellipse contains the specified point.</summary>
	/// <param name="point" type="Point">Point. The point to check.</param>
	/// <param name="rect" type="Rect">Rect. The bounds of the ellipse.</param>
	/// <returns type="Boolean">Boolean. true if the ellipse contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInPolygon = function(point, polygon) {
	/// <summary>Checks whether the specified rectangle contains the specified point.</summary>
	/// <param name="point" type="Point">Point. The point to check.</param>
	/// <param name="polygon" type="Array">Array. An array with the points that define the polygon.</param>
	/// <returns type="Boolean">Boolean. true if the polygon contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.radians = function(degrees) {
	/// <summary>Converts the specified value from degrees to radians.</summary>
	/// <param name="degrees" type="Number">Number. The degrees to convert.</param>
	/// <returns type="Number">Number. The converted angle.</returns>
};
MindFusion.Drawing.DrawingUtils.unionRects = function(rect1, rect2) {
	/// <summary>Returns the smallest possible rectangle containing both of the specified rectangles.</summary>
	/// <param name="rect1" type="Rect">Rect. The first rectangle.</param>
	/// <param name="rect2" type="Rect">Rect. The second rectangle.</param>
	/// <returns type="Rect">Rect. A Rect instance that represents the union of the specified arguments.</returns>
};

MindFusion.Drawing.Ellipse.prototype = {
	clone: function() {
		/// <summary>Creates a Ellipse object identical to the current object.</summary>
		/// <returns type="Ellipse">The newly created Ellipse object.</returns>
	}
};
MindFusion.Drawing.Ellipse.__class = true;

MindFusion.Drawing.Font.prototype = {
	apply: function(context) {
		/// <summary>Applies the font properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">CanvasRenderingContext2D. The CanvasRenderingContext2D drawing object.</param>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this font.</summary>
		/// <returns type="Object">Object. The object describing this font.</returns>
	}
};
MindFusion.Drawing.Font.__class = true;

MindFusion.Drawing.Font.fromObject = function() {
	/// <summary>Returns a Font from a JSON object or string describing this font.</summary>
	/// <returns type="Font">Font. The font object.</returns>
};

MindFusion.Drawing.FontStyle = {
		/// <summary>Specifies font style attributes.</summary>
		/// <field name="Bold">Bold text.</field>
		/// <field name="Italic">Italic text.</field>
		/// <field name="Regular">Normal text.</field>
		/// <field name="Strikeout">Striked text.</field>
		/// <field name="Underline">Underlined text.</field>
	Bold: 1,
	Italic: 2,
	Regular: 0,
	Strikeout: 8,
	Underline: 4
}
MindFusion.Drawing.FontStyle.__enum = true;

MindFusion.Drawing.GraphicsUnit.prototype = {
};
MindFusion.Drawing.GraphicsUnit.__class = true;

MindFusion.Drawing.Image.prototype = {
};
MindFusion.Drawing.Image.__class = true;

MindFusion.Drawing.ImageAlign = {
		/// <summary>Specifies the position and alignment of a picture in a node, or that of the background image.</summary>
		/// <field name="BottomCenter">The image is centered horizontally and aligned to the bottom side.</field>
		/// <field name="BottomLeft">The image is aligned to the bottom left corner of the node or the diagram.</field>
		/// <field name="BottomRight">The image is aligned to the bottom right corner of the node or the diagram.</field>
		/// <field name="Center">The image is centered in the node or diagram.</field>
		/// <field name="Fit">The image is resized to fit the size of the object or the component's client area.</field>
		/// <field name="FitBottom">The image is resized to fit the size of the object and aligned to bottom side.</field>
		/// <field name="FitLeft">The image is resized to fit the size of the object and aligned to left side.</field>
		/// <field name="FitRight">The image is resized to fit the size of the object and aligned to right side.</field>
		/// <field name="FitTop">The image is resized to fit the size of the object and aligned to top side.</field>
		/// <field name="MiddleLeft">The image is centered vertically and aligned to the left-hand side.</field>
		/// <field name="MiddleRight">The image is centered vertically and aligned to the right-hand side.</field>
		/// <field name="Stretch">The image is stretched to fill the object or the component's client area.</field>
		/// <field name="Tile">The image is tiled to cover the node or the diagram.</field>
		/// <field name="TopCenter">The image is centered horizontally and aligned to the top side.</field>
		/// <field name="TopLeft">The image is aligned to the top left corner of the node or the diagram.</field>
		/// <field name="TopRight">The image is aligned to the top right corner of the node or the diagram.</field>
	BottomCenter: 9,
	BottomLeft: 5,
	BottomRight: 7,
	Center: 0,
	Fit: 1,
	FitBottom: 15,
	FitLeft: 12,
	FitRight: 14,
	FitTop: 13,
	MiddleLeft: 10,
	MiddleRight: 11,
	Stretch: 2,
	Tile: 3,
	TopCenter: 8,
	TopLeft: 4,
	TopRight: 6
}
MindFusion.Drawing.ImageAlign.__enum = true;

MindFusion.Drawing.LayoutAlignment = {
		/// <summary>Specifies alignment of components.</summary>
		/// <field name="Center">Center alignment.</field>
		/// <field name="Far">Right ot bottom alignment</field>
		/// <field name="Near">Left or top alignment.</field>
		/// <field name="Stretch">Stretch the component.</field>
	Center: 1,
	Far: 2,
	Near: 0,
	Stretch: 3
}
MindFusion.Drawing.LayoutAlignment.__enum = true;

MindFusion.Drawing.LineJoin = {
		/// <summary>Specifies how to join consecutive line or curve segments in a figure.</summary>
		/// <field name="Bevel">Produces a diagonal corner.</field>
		/// <field name="Miter">Produces a sharp corner or a clipped corner, depending on whether the length of the miter exceeds the miter limit.</field>
		/// <field name="Round">Produces a smooth, circular arc between the lines.</field>
	Bevel: 1,
	Miter: 0,
	Round: 2
}
MindFusion.Drawing.LineJoin.__enum = true;

MindFusion.Drawing.Path.prototype = {
	addEllipse: function(x, y, width, height) {
		/// <summary>Adds an ellipse figure to the path.</summary>
		/// <param name="x" type="Number">Number. The x-coordinate of the center of the ellipse.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the center of the ellipse.</param>
		/// <param name="width" type="Number">Number. The width of the ellipse.</param>
		/// <param name="height" type="Number">Number. The height of the ellipse.</param>
	},
	addRect: function(x, y, width, height) {
		/// <summary>Adds a rectangle figure to the path.</summary>
		/// <param name="x" type="Number">Number. The x-coordinate of the rectangle.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the rectangle.</param>
		/// <param name="width" type="Number">Number. The width of the rectangle.</param>
		/// <param name="height" type="Number">Number. The height of the rectangle.</param>
	},
	arcTo: function(x, y, radius, startAngle, endAngle, anticlockwise) {
		/// <summary>Draws an arc.</summary>
		/// <param name="x" type="Number">Number. The x-coordinate of the center of the circle.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the center of the circle.</param>
		/// <param name="radius" type="Number">Number. The radius of the circle</param>
		/// <param name="startAngle" type="Number">Number. The starting angle in radians.</param>
		/// <param name="endAngle" type="Number">Number. The ending angle in radians.</param>
		/// <param name="anticlockwise" type="Boolean">Boolean. Specifies whether the drawing should be counterclockwise or clockwise.</param>
	},
	bezierTo: function(x1, y1, x2, y2, x3, y3) {
		/// <summary>Draws a cubic bezier curve.</summary>
		/// <param name="x1" type="Number">Number. The x-coordinate of the first bezier control point.</param>
		/// <param name="y1" type="Number">Number. The y-coordinate of the first bezier control point.</param>
		/// <param name="x2" type="Number">Number. The x-coordinate of the second bezier control point.</param>
		/// <param name="y2" type="Number">Number. The y-coordinate of the second bezier control point.</param>
		/// <param name="x3" type="Number">Number. The x-coordinate of the ending point.</param>
		/// <param name="y3" type="Number">Number. The y-coordinate of the ending point.</param>
	},
	clone: function() {
		/// <summary>Creates a Path object identical to the current object.</summary>
		/// <returns type="Path">The newly created Path object.</returns>
	},
	close: function() {
		/// <summary>Closes the path.</summary>
	},
	done: function() {
		/// <summary>Ends the path definition.</summary>
	},
	empty: function() {
		/// <summary>Gets a value indicating whether this Path is empty.</summary>
		/// <returns type="Boolean">true if the path does not contain any figures; otherwise, false.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the bounding rect of the path.</summary>
		/// <returns type="Rect">Rect. The bounding rect.</returns>
	},
	init: function() {
		/// <summary>Begins a path or resets the current path.</summary>
	},
	lineTo: function(x, y) {
		/// <summary>Draws a line from the current point to the specified location.</summary>
		/// <param name="x" type="Number">Number. The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the point.</param>
	},
	moveTo: function(x, y) {
		/// <summary>Moves the path to the specified location.</summary>
		/// <param name="x" type="Number">Number. The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the point.</param>
	},
	quadraticCurveTo: function(x1, y1, x, y) {
		/// <summary>Draws a quadratic bezier curve.</summary>
		/// <param name="x1" type="Number">Number. The x-coordinate of the bezier control point.</param>
		/// <param name="y1" type="Number">Number. The y-coordinate of the bezier control point.</param>
		/// <param name="x" type="Number">Number. The x-coordinate of the ending point.</param>
		/// <param name="y" type="Number">Number. The y-coordinate of the ending point.</param>
	}
};
MindFusion.Drawing.Path.__class = true;

MindFusion.Drawing.Point.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Point is empty.</summary>
		/// <returns type="Boolean">true if both&#160;x and&#160;y are 0; otherwise, false.</returns>
	},
	equals: function(point) {
		/// <summary>Specifies whether this Point contains the same coordinates as the specified point.</summary>
		/// <param name="point" type="Point" optional="true">Optional. The Point to test.</param>
		/// <returns type="Boolean">true if point is a Point and has the same coordinates as this Point.</returns>
	}
};
MindFusion.Drawing.Point.__class = true;

MindFusion.Drawing.Rect.prototype = {
	bottom: function() {
		/// <summary>Gets the y-coordinate that is the sum of the&#160;y and height values of this Rect object.</summary>
		/// <returns type="Number">The y-coordinate that is the sum of&#160;y and height of this Rect.</returns>
	},
	bottomLeft: function() {
		/// <summary>Gets the bottom-left edge of this Rect object.</summary>
		/// <returns type="Point">The bottom-left edge, which is a Point with&#160;x that is equal to&#160;x and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	bottomRight: function() {
		/// <summary>Gets the bottom-right edge of this Rect object.</summary>
		/// <returns type="Point">The bottom-right edge, which is a Point with&#160;x that is the sum of&#160;x and width and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	center: function() {
		/// <summary>Gets the center of this Rect object.</summary>
		/// <returns type="Point">The center, which is a Point with&#160;x that is the sum of&#160;x and half of width and with&#160;y that is the sum of&#160;y and half of height.</returns>
	},
	clone: function() {
		/// <summary>Creates a Rect object identical to the current object.</summary>
		/// <returns type="Rect">Rect. The newly created Rect object.</returns>
	},
	contains: function(rect) {
		/// <summary>Determines if the rectangular region represented by rect is entirely contained within this Rect object.</summary>
		/// <param name="rect" type="Rect">The Rect to test.</param>
		/// <returns type="Boolean">true if the rectangular region represented by rect is entirely contained within this Rect; otherwise, false.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines if the specified point is contained within this Rect object.</summary>
		/// <param name="point" type="Point">Point. The point to check.</param>
		/// <returns type="Boolean">true if point is contained within the Rect; otherwise, false.</returns>
	},
	equals: function(rect) {
		/// <summary>Specifies whether this Rect contains the same coordinates as the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Rect. The Rect to test.</param>
		/// <returns type="Boolean">Boolean. true if rect has the same coordinates as this Rect.</returns>
	},
	intersect: function(rect) {
		/// <summary>Returns a Rect object representing the intersection of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Rect. The rectangle to intersect.</param>
		/// <returns type="Rect">A Rect object representing the intersection of the two rectangles.</returns>
	},
	intersectsWith: function(rect) {
		/// <summary>Checks if this Rect intersects with the specified rect.</summary>
		/// <param name="rect" type="Rect">The other Rect.</param>
		/// <returns type="Boolean">true if this Rect and the specified Rect intersect; otherwise, false.</returns>
	},
	isEmpty: function() {
		/// <summary>Gets a value indicating whether this Rect is empty.</summary>
		/// <returns type="Boolean">true if both width and height are 0; otherwise, false.</returns>
	},
	left: function() {
		/// <summary>Gets the x-coordinate of the left edge of this Rect object.</summary>
		/// <returns type="Number">The x-coordinate of the left edge of this Rect object.</returns>
	},
	right: function() {
		/// <summary>Gets the x-coordinate that is the sum of x and width values of this Rect.</summary>
		/// <returns type="Number">The x-coordinate that is the sum of x and width of this rectangle.</returns>
	},
	setCenter: function(point) {
		/// <summary>Sets the center of this Rect object.</summary>
		/// <param name="point" type="Point">The center of this Rect.</param>
	},
	setLocation: function(point) {
		/// <summary>Sets the top-left edge of this Rect object.</summary>
		/// <param name="point" type="Point">The top-left edge of the Rect.</param>
	},
	top: function() {
		/// <summary>Gets the y-coordinate of the top edge of this Rect object.</summary>
		/// <returns type="Number">Number. The y-coordinate of the top edge of this Rect object.</returns>
	},
	topLeft: function() {
		/// <summary>Gets the top-left edge of this Rect.</summary>
		/// <returns type="Point">The top-left edge of this Rect.</returns>
	},
	topMiddle: function() {
		/// <summary>Gets the top-middle of this Rect object.</summary>
		/// <returns type="Point">The top-middle coordinate, which is a Point with x that is the sum of x and half of width and with y equal to y.</returns>
	},
	topRight: function() {
		/// <summary>Gets the top-right edge of this Rect object.</summary>
		/// <returns type="Point">The top-right edge, which is a Point with x that is the sum of x and width and with y equal to y.</returns>
	},
	union: function(rect) {
		/// <summary>Returns a Rect object representing the union of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Rect. The rectangle to union.</param>
		/// <returns type="Rect">A Rect object that bounds the union of the two rectangles.</returns>
	}
};
MindFusion.Drawing.Rect.__class = true;

MindFusion.Drawing.Rect.fromLTRB = function(l, t, r, b) {
	/// <summary>Creates a Rect object with the specified edge locations.</summary>
	/// <param name="l" type="Number">Number. The x-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="t" type="Number">Number. The y-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="r" type="Number">Number. The x-coordinate of the lower-right corner of this Rect.</param>
	/// <param name="b" type="Number">Number. The y-coordinate of the lower-right corner of this Rect.</param>
	/// <returns type="Rect">Rect. A rectangle with the specified coordinates.</returns>
};

MindFusion.Drawing.Size.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Size is empty.</summary>
		/// <returns type="Boolean">Boolean. true if both width and height are 0; otherwise, false.</returns>
	}
};
MindFusion.Drawing.Size.__class = true;

MindFusion.Drawing.StringAlignment = {
		/// <summary>Specifies the alignment of a text string relative to its layout rectangle.</summary>
		/// <field name="Center">The text is drawn in the center of the layout rectangle.</field>
		/// <field name="Far">The text is drawn in the far corner of the layout rectangle.le.</field>
		/// <field name="Near">The text is drawn in the near corner of the layout rectangle.</field>
	Center: 1,
	Far: 2,
	Near: 0
}
MindFusion.Drawing.StringAlignment.__enum = true;

MindFusion.Drawing.StringFormat.prototype = {
};
MindFusion.Drawing.StringFormat.__class = true;

MindFusion.Drawing.Text.prototype = {
	clone: function() {
		/// <summary>Creates a Text object identical to the current object.</summary>
		/// <returns type="Text">The newly created Text object.</returns>
	},
	getBounds: function() {
		/// <summary>Gets a value indicating the bounding rectangle of the text container.</summary>
		/// <returns type="Rect">Rect. The bounding rectangle.</returns>
	},
	setBounds: function(bounds, angle) {
		/// <summary>Sets a value indicating the bounding rectangle of the text container.</summary>
		/// <param name="bounds" type="Rect">Rect. The bounding rectangle.</param>
		/// <param name="angle" type="Number" optional="true">Optional. Number. The rotation angle to be applied to the bounding rectangle.</param>
	}
};
MindFusion.Drawing.Text.__class = true;

MindFusion.Drawing.Thickness.prototype = {
	addToRect: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by inflating the rectangle.</summary>
		/// <param name="rect" type="Rect">Rect. The rectangle to inflate.</param>
	},
	applyTo: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by deflating the rectangle.</summary>
		/// <param name="rect" type="Rect">Rect. The rectangle to deflate.</param>
	},
	toAbsolute: function() {
		/// <summary>Converts the current thickness to absolute value relative to the specified size.</summary>
	}
};
MindFusion.Drawing.Thickness.__class = true;

MindFusion.Drawing.Vector.prototype = {
};
MindFusion.Drawing.Vector.__class = true;

MindFusion.Drawing.Video.prototype = {
	clone: function() {
		/// <summary>Creates a Video object identical to the current object.</summary>
		/// <returns type="Video"></returns>
	},
	isPlaying: function() {
		/// <summary>Detects if video is playing.</summary>
	},
	pause: function() {
		/// <summary>Pauses the video.</summary>
	},
	play: function() {
		/// <summary>Starts playing the video stream.</summary>
	}
};
MindFusion.Drawing.Video.__class = true;

MindFusion.Drawing.Visibility = {
		/// <summary>Specifies visibility for components.</summary>
		/// <field name="Collapsed">Specifies that the component is hidden, and the space it occupies in the layout is not preserved.</field>
		/// <field name="Hidden">Specifies that the component is hidden, but the space it occupies in the layout is preserved.</field>
		/// <field name="Visible">Specifies that the component is visible.</field>
	Collapsed: 1,
	Hidden: 0,
	Visible: 2
}
MindFusion.Drawing.Visibility.__enum = true;

MindFusion.Gauges.Alignment = {
		/// <summary>Indicates an alignment of an object relative to the scale. In the descriptionsbelow 'outbound' refers to an element's outer outline, 'inbound' refers to anelement's inner outline and 'center' refers to en element's center, that is,the middle of the inbound and outbound.</summary>
		/// <field name="CenterInside">Specifies that the outbound of an object is aligned with the center of the scale.</field>
		/// <field name="CenterOutside">Specifies that the inbound of an object is aligned with the center of the scale.</field>
		/// <field name="InnerCenter">Specifies that the center of an object is aligned with the inbound of the scale.</field>
		/// <field name="InnerInside">Specifies that the outbound of an object is aligned with the inbound of the scale.</field>
		/// <field name="InnerOutside">Specifies that the inbound of an object is aligned with the inbound of the scale.</field>
		/// <field name="OuterCenter">Specifies that the center of an object is aligned with the outbound of the scale.</field>
		/// <field name="OuterInside">Specifies that the outbound of an object is aligned with the outbound of the scale.</field>
		/// <field name="OuterOutside">Specifies that the inbound of an object is aligned with the outbound of the scale.</field>
		/// <field name="TrueCenter">Specifies that the center of an object is aligned with the center of the scale.</field>
	CenterInside: 0,
	CenterOutside: 1,
	InnerCenter: 2,
	InnerInside: 3,
	InnerOutside: 4,
	OuterCenter: 5,
	OuterInside: 6,
	OuterOutside: 7,
	TrueCenter: 8
}
MindFusion.Gauges.Alignment.__enum = true;

MindFusion.Gauges.ArcArea.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the arc.</summary>
		/// <returns type="Number">The end angle of the arc.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the arc.</summary>
		/// <returns type="Number">The start angle of the arc.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the arc.</summary>
		/// <param name="value" type="Number">The end angle of the arc.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the arc.</summary>
		/// <param name="value" type="Number">The start angle of the arc.</param>
	}
};
MindFusion.Gauges.ArcArea.__class = true;

MindFusion.Gauges.ArcSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getIsCounterclockwise: function() {
		/// <summary>Gets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <returns type="Boolean">True if the arc is drawn in counterclockwise, otherwise false.</returns>
	},
	getIsLargeArc: function() {
		/// <summary>Gets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <returns type="Boolean">True if the arc should be greater than 180 degrees, otherwise false.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the endpoint of the elliptical arc.</summary>
		/// <returns type="Point">The endpoint of the elliptical arc.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <returns type="Number">The amount (in degrees) by which the ellipse is rotated about the x-axis.</returns>
	},
	getSize: function() {
		/// <summary>Gets the x- and y-radius of the arc as a Size structure.</summary>
		/// <returns type="Size">The x- and y-radius of the arc as a Size structure.</returns>
	},
	setIsCounterclockwise: function(value) {
		/// <summary>Sets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <param name="value" type="Boolean">True if the arc is drawn in counterclockwise, otherwise false.</param>
	},
	setIsLargeArc: function(value) {
		/// <summary>Sets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <param name="value" type="Boolean">True if the arc should be greater than 180 degrees, otherwise false.</param>
	},
	setPoint: function(value) {
		/// <summary>Sets the endpoint of the elliptical arc.</summary>
		/// <param name="value" type="Point">The endpoint of the elliptical arc.</param>
	},
	setRotationAngle: function(value) {
		/// <summary>Sets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <param name="value" type="Number">The amount (in degrees) by which the ellipse is rotated about the x-axis.</param>
	},
	setSize: function(value) {
		/// <summary>Sets the x- and y-radius of the arc as a Size structure.</summary>
		/// <param name="value" type="Size">The x- and y-radius of the arc as a Size structure.</param>
	}
};
MindFusion.Gauges.ArcSegment.__class = true;

MindFusion.Gauges.BaseGauge.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the element.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	addScale: function(scale) {
		/// <summary>Adds a scale to the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">The scale to add.</param>
	},
	getAutoPostBack: function() {
		/// <summary>Gets a value indicating whether the control will post back to the server when a pointer's value has changed.</summary>
		/// <returns type="Boolean">true if the control should post back, otherwise, false.</returns>
	},
	getElementByName: function(name) {
		/// <summary>Returns the VisualElement object corresponding to the specified name.</summary>
		/// <param name="name" type="String">The name of the object to find.</param>
	},
	getScales: function() {
		/// <summary>Returns the array of all scales in this gauge.</summary>
		/// <returns type="Array">Array of all BaseScale instances in the gauge.</returns>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the element.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	removeScale: function(scale) {
		/// <summary>Removes a scale from the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">The scale to remove.</param>
	},
	setAutoPostBack: function(value) {
		/// <summary>Sets a value indicating whether the control should post back to the server when a pointer's value has changed.</summary>
		/// <param name="value" type="Boolean">true if the control should post back, otherwise, false.</param>
	}
};
MindFusion.Gauges.BaseGauge.__class = true;

MindFusion.Gauges.BaseScale.prototype = {
	addPointer: function(pointer) {
		/// <summary>Adds a Pointer object to the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">The pointer to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a Range object to the ranges collection.</summary>
		/// <param name="range" type="Range">The ranges to add.</param>
	},
	getCustomFunction: function() {
		/// <summary>Gets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <returns type="FunctionDelegate">The function to be used for distribution of values along the scale when functionType is set to Custom.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of the scale at its end.</summary>
		/// <returns type="Length">The width of the scale at its end.</returns>
	},
	getFunctionArgument: function() {
		/// <summary>Gets the argument passed to custom functions.</summary>
		/// <returns type="Number">The argument passed to custom functions.</returns>
	},
	getFunctionType: function() {
		/// <summary>Gets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <returns type="FunctionType">The type of the function used to calculate the distribution of values along the scale.</returns>
	},
	getLogarithmBase: function() {
		/// <summary>Gets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <returns type="Number">The logarithm base when functionType is set to Logarithmic.</returns>
	},
	getMajorTickSettings: function() {
		/// <summary>Gets the settings for the major ticks and their associated labels.</summary>
		/// <returns type="MajorTickSettings">The settings for the major ticks and their associated labels.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the maximal value displayed by the scale.</summary>
		/// <returns type="Number">The maximal value displayed by the scale.</returns>
	},
	getMiddleTickSettings: function() {
		/// <summary>Gets the settings for the middle ticks and their associated labels.</summary>
		/// <returns type="MiddleTickSettings">The settings for the middle ticks and their associated labels.</returns>
	},
	getMinorTickSettings: function() {
		/// <summary>Gets the settings for the minor ticks and their associated labels.</summary>
		/// <returns type="MinorTickSettings">The settings for the minor ticks and their associated labels.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the minimal value displayed by the scale.</summary>
		/// <returns type="Number">The minimal value displayed by the scale.</returns>
	},
	getPointers: function() {
		/// <summary>Returns the array of all pointers in this scale.</summary>
		/// <returns type="Array">Array of all Pointer instances in the scale.</returns>
	},
	getRanges: function() {
		/// <summary>Returns the array of all ranges in this scale.</summary>
		/// <returns type="Array">Array of all Range instances in the scale.</returns>
	},
	getReversedCustomFunction: function() {
		/// <summary>Gets the reversed version of the function specified through customFunction.</summary>
		/// <returns type="FunctionDelegate">The reversed version of the function specified through CustomFunction.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of the scale at its beginning.</summary>
		/// <returns type="Length">The width of the scale at its beginning.</returns>
	},
	removePointer: function(pointer) {
		/// <summary>Removes a Pointer object from the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">The pointer to remove.</param>
	},
	removeRange: function(range) {
		/// <summary>Removes a Range object from the ranges collection.</summary>
		/// <param name="range" type="Range">The ranges to remove.</param>
	},
	setCustomFunction: function(value) {
		/// <summary>Sets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <param name="value" type="FunctionDelegate">The function to be used for distribution of values along the scale when functionType is set to Custom.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of the scale at its end.</summary>
		/// <param name="value" type="Length">The width of the scale at its end.</param>
	},
	setFunctionArgument: function(value) {
		/// <summary>Sets the argument passed to custom functions.</summary>
		/// <param name="value" type="Number">The argument passed to custom functions.</param>
	},
	setFunctionType: function(value) {
		/// <summary>Sets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <param name="value" type="FunctionType">The type of the function used to calculate the distribution of values along the scale.</param>
	},
	setLogarithmBase: function(value) {
		/// <summary>Sets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <param name="value" type="Number">The logarithm base when functionType is set to Logarithmic.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the maximal value displayed by the scale.</summary>
		/// <param name="value" type="Number">The maximal value displayed by the scale.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the minimal value displayed by the scale.</summary>
		/// <param name="value" type="Number">The minimal value displayed by the scale.</param>
	},
	setReversedCustomFunction: function(value) {
		/// <summary>Sets the reversed version of the function specified through customFunction.</summary>
		/// <param name="value" type="FunctionDelegate">The reversed version of the function specified through CustomFunction.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of the scale at its beginning.</summary>
		/// <param name="value" type="Length">The width of the scale at its beginning.</param>
	}
};
MindFusion.Gauges.BaseScale.__class = true;

MindFusion.Gauges.CenterPanel.prototype = {
};
MindFusion.Gauges.CenterPanel.__class = true;

MindFusion.Gauges.CustomInterval.prototype = {
	contains: function(value) {
		/// <summary>Checks whether the specified value falls within this interval.</summary>
		/// <param name="value" type="void"></param>
	},
	getFill: function() {
		/// <summary>Gets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <returns type="Object">The brush to apply as a background of the elements within the custom interval.</returns>
	},
	getForeground: function() {
		/// <summary>Gets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <returns type="Object">The color to apply as a foreground to the elements within this custom interval.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end of this custom interval.</summary>
		/// <returns type="Number">The end of this custom interval.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start of this custom interval.</summary>
		/// <returns type="Number">The start of this custom interval.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <returns type="Object">The brush to apply as an outline of the elements within the custom interval.</returns>
	},
	setFill: function(value) {
		/// <summary>Sets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">The brush to apply as a background of the elements within the custom interval.</param>
	},
	setForeground: function(value) {
		/// <summary>Sets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <param name="value" type="Object">The color to apply as a foreground to the elements within this custom interval.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end of this custom interval.</summary>
		/// <param name="value" type="Number">The end of this custom interval.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start of this custom interval.</summary>
		/// <param name="value" type="Number">The start of this custom interval.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">The brush to apply as an outline of the elements within the custom interval.</param>
	}
};
MindFusion.Gauges.CustomInterval.__class = true;

MindFusion.Gauges.DisplayType = {
		/// <summary>Specifies a display condition.</summary>
		/// <field name="Always">Indicates that the the element should always be displayed.</field>
		/// <field name="Auto">Indicates that the visibility of an element should be determined automatically.</field>
		/// <field name="Never">Indicates that the the element should always be hidden.</field>
	Always: 0,
	Auto: 1,
	Never: 2
}
MindFusion.Gauges.DisplayType.__enum = true;

MindFusion.Gauges.Ellipse.prototype = {
};
MindFusion.Gauges.Ellipse.__class = true;

MindFusion.Gauges.Events.prototype = {
};
MindFusion.Gauges.Events.__class = true;

MindFusion.Gauges.FunctionType = {
		/// <summary>Indicates the type of function that will be used to distribute values along the gauge scale.</summary>
		/// <field name="Custom">Specifies a user defined function, which will be supplied by the CustomFunction property.</field>
		/// <field name="Linear">Specifies that the values will be distributed linearly.</field>
		/// <field name="Logarithmic">Specifies a logarithmic function with base specified by the LogarithmBase property.</field>
	Custom: 0,
	Linear: 1,
	Logarithmic: 2
}
MindFusion.Gauges.FunctionType.__enum = true;

MindFusion.Gauges.GeometryFactory.prototype = {
};
MindFusion.Gauges.GeometryFactory.__class = true;

MindFusion.Gauges.GeometryFactory.createLinearGeometry = function(centerX, centerY, startInnerOffset, startOuterOffset, endInnerOffset, endOuterOffset, length, isVertical, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a linear bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerOffset" type="Number">The start inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="startOuterOffset" type="Number">The start outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="endInnerOffset" type="Number">The end inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="endOuterOffset" type="Number">The end outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="length" type="Number">The length of the generated geometry.</param>
	/// <param name="isVertical" type="Boolean">A flag indicating whether the generated geometry is vertical.</param>
	/// <param name="capStart" type="Boolean">A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">A flag indicating whether to draw a stroke at the inner side of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">A flag indicating whether to draw a stroke at the outer side of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a linear bar with the specified parameters.</returns>
};
MindFusion.Gauges.GeometryFactory.createRadialGeometry = function(centerX, centerY, startInnerRadius, startOuterRadius, endInnerRadius, endOuterRadius, startAngle, endAngle, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a radial bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerRadius" type="Number">The radius of the start point of the inner outline of the bar.</param>
	/// <param name="startOuterRadius" type="Number">The radius of the start point of the outer outline of the bar.</param>
	/// <param name="endInnerRadius" type="Number">The radius of the end point of the inner outline of the bar.</param>
	/// <param name="endOuterRadius" type="Number">The radius of the end point of the outer outline of the bar.</param>
	/// <param name="startAngle" type="Number">The start angle of the radial bar.</param>
	/// <param name="endAngle" type="Number">The end angle of the radial bar.</param>
	/// <param name="capStart" type="Boolean">A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">A flag indicating whether to draw a stroke at the inner curve of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">A flag indicating whether to draw a stroke at the outer curve of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a radial bar with the specified parameters.</returns>
};

MindFusion.Gauges.LabelRotation = {
		/// <summary>Indicates the rotation of a label within a scale.</summary>
		/// <field name="Auto">Specifies that the labels are automatically rotated so that their baseline always points downwards.</field>
		/// <field name="BaselineAwayFromCenter">Specifies that the labels are rotated so that their baseline points away from the center of the scale.</field>
		/// <field name="BaselineToCenter">Specifies that the labels are rotated so that their baseline points towards the center of the scale.</field>
		/// <field name="None">Specifies no rotation.</field>
		/// <field name="Sideways">Specifies that the labels are aligned sideways to the scale.</field>
	Auto: 0,
	BaselineAwayFromCenter: 1,
	BaselineToCenter: 2,
	None: 3,
	Sideways: 4
}
MindFusion.Gauges.LabelRotation.__enum = true;

MindFusion.Gauges.Length.prototype = {
	getAbsoluteLength: function(space) {
		/// <summary>Calculates the absolute length corresponding to the specified argument, relative to the the specified area.</summary>
		/// <param name="space" type="void"></param>
	},
	getType: function() {
		/// <summary>Gets the type of this length.</summary>
		/// <returns type="LengthType">The type of this length.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value representing this length.</summary>
		/// <returns type="Number">The value representing this length.</returns>
	},
	setType: function(value) {
		/// <summary>Sets the type of this length.</summary>
		/// <param name="value" type="LengthType">The type of this length.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value representing this length.</summary>
		/// <param name="value" type="Number">The value representing this length.</param>
	}
};
MindFusion.Gauges.Length.__class = true;

MindFusion.Gauges.LengthType = {
		/// <summary>Indicates the type of the units of a Length object.</summary>
		/// <field name="Absolute">Specifies absolute length, expressed in pixels.</field>
		/// <field name="Relative">Specifies relative length, expressed as a percentage of the container's size.</field>
	Absolute: 0,
	Relative: 1
}
MindFusion.Gauges.LengthType.__enum = true;

MindFusion.Gauges.LinearGauge.prototype = {
	getOrientation: function() {
		/// <summary>Gets the orientation of the gauge.</summary>
		/// <returns type="Orientation">The orientation of the gauge.</returns>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the gauge.</summary>
		/// <param name="value" type="Orientation">The orientation of the gauge.</param>
	}
};
MindFusion.Gauges.LinearGauge.__class = true;

MindFusion.Gauges.LinearGauge.create = function(element) {
	/// <summary>Creates and initializes a new LinearGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the LinearGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.LinearGauge.find = function(id, parent) {
	/// <summary>Returns the specified LinearGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the LinearGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the LinearGauge to find.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.LinearScale.prototype = {
	getLeft: function() {
		/// <summary>Gets the distance between the left of this scale and the left of its container.</summary>
		/// <returns type="Length">The distance between the left of this scale and the left of its container.</returns>
	},
	getOrientation: function() {
		/// <summary>Gets the orientation of the scale.</summary>
		/// <returns type="Orientation">The orientation of the scale.</returns>
	},
	getScaleAlignment: function() {
		/// <summary>Gets the alignment of the scale.</summary>
		/// <returns type="Alignment">The alignment of the scale.</returns>
	},
	getScaleLength: function() {
		/// <summary>Gets the length of the scale.</summary>
		/// <returns type="Length">The length of the scale.</returns>
	},
	getTop: function() {
		/// <summary>Gets the distance between the top of this scale and the top of its container.</summary>
		/// <returns type="Length">The distance between the top of this scale and the top of its container.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">The point to test.</param>
		/// <returns type="Number">The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setLeft: function(value) {
		/// <summary>Sets the distance between the left of this scale and the left of its container.</summary>
		/// <param name="value" type="Length">The distance between the left of this scale and the left of its container.</param>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the scale.</summary>
		/// <param name="value" type="Orientation">The orientation of the scale.</param>
	},
	setScaleAlignment: function(value) {
		/// <summary>Sets the alignment of the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the scale.</param>
	},
	setScaleLength: function(value) {
		/// <summary>Sets the length of the scale.</summary>
		/// <param name="value" type="Length">The length of the scale.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the distance between the top of this scale and the top of its container.</summary>
		/// <param name="value" type="Length">The distance between the top of this scale and the top of its container.</param>
	}
};
MindFusion.Gauges.LinearScale.__class = true;

MindFusion.Gauges.LineSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getPoint: function() {
		/// <summary>Gets the end point of the line segment.</summary>
		/// <returns type="Point">The end point of the line segment.</returns>
	},
	setPoint: function(value) {
		/// <summary>Sets the end point of the line segment.</summary>
		/// <param name="value" type="Point">The end point of the line segment.</param>
	}
};
MindFusion.Gauges.LineSegment.__class = true;

MindFusion.Gauges.MajorTickSettings.prototype = {
};
MindFusion.Gauges.MajorTickSettings.__class = true;

MindFusion.Gauges.MiddleTickSettings.prototype = {
};
MindFusion.Gauges.MiddleTickSettings.__class = true;

MindFusion.Gauges.MinorTickSettings.prototype = {
};
MindFusion.Gauges.MinorTickSettings.__class = true;

MindFusion.Gauges.MouseAction = {
		/// <summary>Specifies an action performed with the mouse.</summary>
		/// <field name="Down">Indicates the press of a mouse button.</field>
		/// <field name="Move">Indicates the move of a mouse.</field>
		/// <field name="Up">Indicates the release of a mouse button.</field>
	Down: 0,
	Move: 1,
	Up: 2
}
MindFusion.Gauges.MouseAction.__enum = true;

MindFusion.Gauges.MouseInfo.prototype = {
	getAction: function() {
		/// <summary>Gets the action that was performed.</summary>
		/// <returns type="MouseAction">The action that was performed.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the mouse location.</summary>
		/// <returns type="Point">The mouse location.</returns>
	}
};
MindFusion.Gauges.MouseInfo.__class = true;

MindFusion.Gauges.Orientation = {
		/// <summary>Specifies the orientation of elements.</summary>
		/// <field name="Horizontal">The element is oriented horizontally.</field>
		/// <field name="Vertical">The element is oriented vertically.</field>
	Horizontal: 0,
	Vertical: 1
}
MindFusion.Gauges.Orientation.__enum = true;

MindFusion.Gauges.OvalGauge.prototype = {
	getStyle: function() {
		/// <summary>Gets the visual style of the gauge.</summary>
		/// <returns type="OvalGaugeStyle">The visual style of the gauge.</returns>
	},
	setStyle: function(value) {
		/// <summary>Sets the visual style of the gauge.</summary>
		/// <param name="value" type="OvalGaugeStyle">The visual style of the gauge.</param>
	}
};
MindFusion.Gauges.OvalGauge.__class = true;

MindFusion.Gauges.OvalGauge.create = function(element) {
	/// <summary>Creates and initializes a new OvalGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the OvalGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.OvalGauge.find = function(id, parent) {
	/// <summary>Returns the specified OvalGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the OvalGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the OvalGauge to find.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.OvalGaugeStyle = {
		/// <summary>Specifies the appearance of an oval gauge.</summary>
		/// <field name="Circular">Indicates a regular circular appearance.</field>
		/// <field name="QuadraticNE">Indicates a quadratic appearance with the scales oriented towards North-East.</field>
		/// <field name="QuadraticNW">Indicates a quadratic appearance with the scales oriented towards North-West.</field>
		/// <field name="QuadraticSE">Indicates a quadratic appearance with the scales oriented towards South-East.</field>
		/// <field name="QuadraticSW">Indicates a quadratic appearance with the scales oriented towards South-West.</field>
		/// <field name="SemicircleE">Indicates a semi-circular appearance with the scales oriented towards East.</field>
		/// <field name="SemicircleN">Indicates a semi-circular appearance with the scales oriented towards North.</field>
		/// <field name="SemicircleS">Indicates a semi-circular appearance with the scales oriented towards South.</field>
		/// <field name="SemicircleW">Indicates a semi-circular appearance with the scales oriented towards West.</field>
	Circular: 0,
	QuadraticNE: 1,
	QuadraticNW: 2,
	QuadraticSE: 3,
	QuadraticSW: 4,
	SemicircleE: 5,
	SemicircleN: 6,
	SemicircleS: 7,
	SemicircleW: 8
}
MindFusion.Gauges.OvalGaugeStyle.__enum = true;

MindFusion.Gauges.OvalScale.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the scale.</summary>
		/// <returns type="Number">The end angle of the scale.</returns>
	},
	getScaleRelativeCenter: function() {
		/// <summary>Gets the center of the scale relative to the scale bounds.</summary>
		/// <returns type="Point">The center of the scale relative to the scale bounds.</returns>
	},
	getScaleRelativeRadius: function() {
		/// <summary>Gets the radius of the scale relative to the scale bounds.</summary>
		/// <returns type="Number">The radius of the scale relative to the scale bounds.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the scale.</summary>
		/// <returns type="Number">The start angle of the scale.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">The point to test.</param>
		/// <returns type="Number">The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the scale.</summary>
		/// <param name="value" type="Number">The end angle of the scale.</param>
	},
	setScaleRelativeCenter: function(value) {
		/// <summary>Sets the center of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Point">The center of the scale relative to the scale bounds.</param>
	},
	setScaleRelativeRadius: function(value) {
		/// <summary>Sets the radius of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Number">The radius of the scale relative to the scale bounds.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the scale.</summary>
		/// <param name="value" type="Number">The start angle of the scale.</param>
	}
};
MindFusion.Gauges.OvalScale.__class = true;

MindFusion.Gauges.PaintEventArgs.prototype = {
	getContext: function() {
		/// <summary>Gets the canvas rendering context.</summary>
		/// <returns type="CanvasRenderingContext2D">A rendering context used to draw on the Canvas element.</returns>
	},
	getElement: function() {
		/// <summary>Gets the element being custom drawn.</summary>
		/// <returns type="VisualElement">A VisualElement instance.</returns>
	},
	paintVisualElement: function(element, constraint) {
		/// <summary>Paints the specified visual element to the underlying canvas.</summary>
		/// <param name="element" type="void"></param>
		/// <param name="constraint" type="void"></param>
		/// <returns type="VisualElement">element The VisualElement to paint.</returns>
	},
	setElement: function(value) {
		/// <summary>Sets the element being custom drawn.</summary>
		/// <param name="value" type="VisualElement">A VisualElement instance.</param>
	}
};
MindFusion.Gauges.PaintEventArgs.__class = true;

MindFusion.Gauges.PathFigure.prototype = {
};
MindFusion.Gauges.PathFigure.__class = true;

MindFusion.Gauges.Pointer.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of the pointer relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the pointer relative to the scale.</returns>
	},
	getCustomShape: function() {
		/// <summary>Gets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <returns type="String">The definition of the pointer shape when Shape is set to Custom.</returns>
	},
	getIsDiscrete: function() {
		/// <summary>Gets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <returns type="Boolean">True if the pointer is discrete, otherwise false.</returns>
	},
	getIsInteractive: function() {
		/// <summary>Gets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <returns type="Boolean">True if the pointer is interactive, otherwise false.</returns>
	},
	getPointerHeight: function() {
		/// <summary>Gets the height of the pointer.</summary>
		/// <returns type="Length">The height of the pointer.</returns>
	},
	getPointerOffset: function() {
		/// <summary>Gets the offset of the pointer along the direction it points to.</summary>
		/// <returns type="Length">The offset of the pointer along the direction it points to.</returns>
	},
	getPointerWidth: function() {
		/// <summary>Gets the width of the pointer.</summary>
		/// <returns type="Length">The width of the pointer.</returns>
	},
	getShape: function() {
		/// <summary>Gets the shape of the pointer.</summary>
		/// <returns type="PointerShape">The shape of the pointer.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value this pointer points to.</summary>
		/// <returns type="Number">The value this pointer points to.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of the pointer relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the pointer relative to the scale.</param>
	},
	setCustomShape: function(value) {
		/// <summary>Sets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <param name="value" type="String">The definition of the pointer shape when Shape is set to Custom.</param>
	},
	setIsDiscrete: function(value) {
		/// <summary>Sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <param name="value" type="Boolean">True if the pointer is discrete, otherwise false.</param>
	},
	setIsInteractive: function(value) {
		/// <summary>Sets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <param name="value" type="Boolean">True if the pointer is interactive, otherwise false.</param>
	},
	setPointerHeight: function(value) {
		/// <summary>Sets the height of the pointer.</summary>
		/// <param name="value" type="Length">The height of the pointer.</param>
	},
	setPointerOffset: function(value) {
		/// <summary>Sets the offset of the pointer along the direction it points to.</summary>
		/// <param name="value" type="Length">The offset of the pointer along the direction it points to.</param>
	},
	setPointerWidth: function(value) {
		/// <summary>Sets the width of the pointer.</summary>
		/// <param name="value" type="Length">The width of the pointer.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the shape of the pointer.</summary>
		/// <param name="value" type="PointerShape">The shape of the pointer.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value this pointer points to.</summary>
		/// <param name="value" type="Number">The value this pointer points to.</param>
	}
};
MindFusion.Gauges.Pointer.__class = true;

MindFusion.Gauges.PointerShape = {
		/// <summary>Indicates the shape of a pointer.</summary>
		/// <field name="Custom">Specifies a custom shape.</field>
		/// <field name="Ellipse">Specifies an elliptical shape.</field>
		/// <field name="Needle">Specifies a sharp pointer with a circle at its base.</field>
		/// <field name="Needle2"></field>
		/// <field name="None">Specifies an empty shape, that is, the pointer is not displayed.</field>
		/// <field name="Rectangle">Specifies a rectangular shape.</field>
	Custom: 0,
	Ellipse: 1,
	Needle: 2,
	Needle2: 3,
	None: 4,
	Rectangle: 5
}
MindFusion.Gauges.PointerShape.__enum = true;

MindFusion.Gauges.PrepaintEventArgs.prototype = {
	getCancelDefaultPainting: function() {
		/// <summary>Gets a value indicating whether the default painting of this element should be performed.</summary>
		/// <returns type="Boolean">true if the default painting of this element should be performed; otherwise, false.</returns>
	},
	setCancelDefaultPainting: function(value) {
		/// <summary>Sets a value indicating whether the default painting of this element should be performed.</summary>
		/// <param name="value" type="Boolean">true if the default painting of this element should be performed; otherwise, false.</param>
	}
};
MindFusion.Gauges.PrepaintEventArgs.__class = true;

MindFusion.Gauges.Range.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of this range relative to the scale it is associated with.</summary>
		/// <returns type="Alignment">The alignment of this range relative to the scale it is associated with.</returns>
	},
	getAutoSize: function() {
		/// <summary>Gets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <returns type="Boolean">True if the range is autosized, otherwise false.</returns>
	},
	getCapEnd: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke in the end of this range, otherwise false.</returns>
	},
	getCapStart: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke in the beginning of this range, otherwise false.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of this range at its end.</summary>
		/// <returns type="Length">The width of this range at its end.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end value of this range.</summary>
		/// <returns type="Number">The end value of this range.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start value of this range.</summary>
		/// <returns type="Number">The start value of this range.</returns>
	},
	getOffset: function() {
		/// <summary>Gets the offset of the range from the position calculated according to its alignment.</summary>
		/// <returns type="Length">The offset of the range from the position calculated according to its alignment.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of this range at its start.</summary>
		/// <returns type="Length">The width of this range at its start.</returns>
	},
	getStrokeInside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke at the inside of this range, otherwise false.</returns>
	},
	getStrokeOutside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke at the outside of this range, otherwise false.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of this range relative to the scale it is associated with.</summary>
		/// <param name="value" type="Alignment">The alignment of this range relative to the scale it is associated with.</param>
	},
	setAutoSize: function(value) {
		/// <summary>Sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <param name="value" type="Boolean">True if the range is autosized, otherwise false.</param>
	},
	setCapEnd: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke in the end of this range, otherwise false.</param>
	},
	setCapStart: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke in the beginning of this range, otherwise false.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of this range at its end.</summary>
		/// <param name="value" type="Length">The width of this range at its end.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end value of this range.</summary>
		/// <param name="value" type="Number">The end value of this range.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start value of this range.</summary>
		/// <param name="value" type="Number">The start value of this range.</param>
	},
	setOffset: function(value) {
		/// <summary>Sets the offset of the range from the position calculated according to its alignment.</summary>
		/// <param name="value" type="Length">The offset of the range from the position calculated according to its alignment.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of this range at its start.</summary>
		/// <param name="value" type="Length">The width of this range at its start.</param>
	},
	setStrokeInside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke at the inside of this range, otherwise false.</param>
	},
	setStrokeOutside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke at the outside of this range, otherwise false.</param>
	}
};
MindFusion.Gauges.Range.__class = true;

MindFusion.Gauges.RoundRectangle.prototype = {
	getRoundness: function() {
		/// <summary>Gets the relative roundness of this rectangle's corners.</summary>
		/// <returns type="Number">The relative roundness of this rectangle's corners.</returns>
	},
	setRoundness: function(value) {
		/// <summary>Sets the relative roundness of this rectangle's corners.</summary>
		/// <param name="value" type="Number">The relative roundness of this rectangle's corners.</param>
	}
};
MindFusion.Gauges.RoundRectangle.__class = true;

MindFusion.Gauges.Segment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Adds the segment to the specified graphics path.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getIsStroked: function() {
		/// <summary>Gets a value that indicates whether the segment is stroked.</summary>
		/// <returns type="Boolean">True if the segment is stroked, otherwise false.</returns>
	},
	setIsStroked: function(value) {
		/// <summary>Sets a value that indicates whether the segment is stroked.</summary>
		/// <param name="value" type="Boolean">True if the segment is stroked, otherwise false.</param>
	}
};
MindFusion.Gauges.Segment.__class = true;

MindFusion.Gauges.Thickness.prototype = {
	apply: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by deflating the rectangle.</summary>
		/// <param name="rect" type="Rect">The rectangle to deflate.</param>
		/// <returns type="Rect">The modified rectangle.</returns>
	},
	getBottom: function() {
		/// <summary>Gets the width of the bottom side of the frame.</summary>
		/// <returns type="Number">The width of the bottom side of the frame.</returns>
	},
	getIsRelative: function() {
		/// <summary>Gets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">True if the thickness is relative, otherwise false.</returns>
	},
	getLeft: function() {
		/// <summary>Gets the width of the left side of the frame.</summary>
		/// <returns type="Number">The width of the left side of the frame.</returns>
	},
	getRight: function() {
		/// <summary>Gets the width of the right side of the frame.</summary>
		/// <returns type="Number">The width of the right side of the frame.</returns>
	},
	getTop: function() {
		/// <summary>Gets the width of the top side of the frame.</summary>
		/// <returns type="Number">The width of the top side of the frame.</returns>
	},
	setBottom: function(value) {
		/// <summary>Sets the width of the top bottom of the frame.</summary>
		/// <param name="value" type="Number">The width of the bottom side of the frame.</param>
	},
	setIsRelative: function(value) {
		/// <summary>Sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">True if the thickness is relative, otherwise false.</param>
	},
	setLeft: function(value) {
		/// <summary>Sets the width of the left side of the frame.</summary>
		/// <param name="value" type="Number">The width of the left side of the frame.</param>
	},
	setRight: function(value) {
		/// <summary>Sets the width of the right side of the frame.</summary>
		/// <param name="value" type="Number">The width of the right side of the frame.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the width of the top side of the frame.</summary>
		/// <param name="value" type="Number">The width of the top side of the frame.</param>
	},
	toAbsolute: function(size) {
		/// <summary>Converts the current thickness to absolute value relative to the specified size.</summary>
		/// <param name="size" type="void"></param>
	}
};
MindFusion.Gauges.Thickness.__class = true;

MindFusion.Gauges.Tick.prototype = {
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this tick.</summary>
		/// <returns type="TickSettings">The TickSettings object associated with this tick.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this tick.</summary>
		/// <returns type="Number">The value associated with this tick.</returns>
	}
};
MindFusion.Gauges.Tick.__class = true;

MindFusion.Gauges.TickLabel.prototype = {
	getForeground: function() {
		/// <summary>Gets the foreground color of this label.</summary>
		/// <returns type="Color">The foreground color of this label.</returns>
	},
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this label.</summary>
		/// <returns type="TickSettings">The TickSettings object associated with this label.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this label.</summary>
		/// <returns type="Number">The value associated with this label.</returns>
	}
};
MindFusion.Gauges.TickLabel.__class = true;

MindFusion.Gauges.TickSettings.prototype = {
	addCustomInterval: function(interval) {
		/// <summary>Adds a CustomInterval object to these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">The interval to add.</param>
	},
	getCount: function() {
		/// <summary>Gets the number of ticks and labels.</summary>
		/// <returns type="Number">The number of ticks and labels.</returns>
	},
	getCustomIntervals: function() {
		/// <summary>Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</summary>
		/// <returns type="Array">An array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill brush of the ticks.</summary>
		/// <returns type="Object">The fill brush of the ticks.</returns>
	},
	getFontFamily: function() {
		/// <summary>Gets the font family of the labels.</summary>
		/// <returns type="String">The font family of the labels.</returns>
	},
	getFontSize: function() {
		/// <summary>Gets the font size of the labels.</summary>
		/// <returns type="Length">The font size of the labels.</returns>
	},
	getFontStyle: function() {
		/// <summary>Gets the font style of the labels.</summary>
		/// <returns type="String">The font style of the labels.</returns>
	},
	getLabelAlignment: function() {
		/// <summary>Gets the alignment of the labels relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the labels relative to the scale.</returns>
	},
	getLabelForeground: function() {
		/// <summary>Gets the brush used to paint label texts.</summary>
		/// <returns type="Object">The brush used to paint label texts.</returns>
	},
	getLabelOffset: function() {
		/// <summary>Gets the offset of the labels relative to their calculated position.</summary>
		/// <returns type="Length">The offset of the labels relative to their calculated position.</returns>
	},
	getLabelRotation: function() {
		/// <summary>Gets the rotation mode of the labels.</summary>
		/// <returns type="LabelRotation">The rotation mode of the labels.</returns>
	},
	getNumberPrecision: function() {
		/// <summary>Gets the number recision of the labels.</summary>
		/// <returns type="Number">The number recision of the labels.</returns>
	},
	getShowLabels: function() {
		/// <summary>Gets a value indicating whether the labels are visible.</summary>
		/// <returns type="Boolean">True if labels are visible, otherwise false.</returns>
	},
	getShowMaxValueTick: function() {
		/// <summary>Gets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <returns type="Boolean">True to display a tick for the maxValue, otherwise false.</returns>
	},
	getShowTicks: function() {
		/// <summary>Gets a value indicating whether the ticks are visible.</summary>
		/// <returns type="Boolean">True if ticks are visible, otherwise false.</returns>
	},
	getStep: function() {
		/// <summary>Gets the value between adjacent ticks and labels.</summary>
		/// <returns type="Number">The value between adjacent ticks and labels.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke brush of the ticks.</summary>
		/// <returns type="Object">The stroke brush of the ticks.</returns>
	},
	getTickAlignment: function() {
		/// <summary>Gets the alignment of the ticks relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the ticks relative to the scale.</returns>
	},
	getTickHeight: function() {
		/// <summary>Gets the height of a tick.</summary>
		/// <returns type="Length">The height of a tick.</returns>
	},
	getTickOffset: function() {
		/// <summary>Gets the offset of the ticks relative to their calculated position.</summary>
		/// <returns type="Length">The offset of the ticks relative to their calculated position.</returns>
	},
	getTickShape: function() {
		/// <summary>Gets the shape of the ticks.</summary>
		/// <returns type="TickShape">The shape of the ticks.</returns>
	},
	getTickWidth: function() {
		/// <summary>Gets the width of a tick.</summary>
		/// <returns type="Length">The width of a tick.</returns>
	},
	removeCustomInterval: function(interval) {
		/// <summary>Removes a CustomInterval object from these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">The interval to remove.</param>
	},
	setCount: function(value) {
		/// <summary>Sets the number of ticks and labels.</summary>
		/// <param name="value" type="Number">The number of ticks and labels.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill brush of the ticks.</summary>
		/// <param name="value" type="Object">The fill brush of the ticks.</param>
	},
	setFontFamily: function(value) {
		/// <summary>Sets the font family of the labels.</summary>
		/// <param name="value" type="String">The font family of the labels.</param>
	},
	setFontSize: function(value) {
		/// <summary>Sets the font size of the labels.</summary>
		/// <param name="value" type="Length">The font size of the labels.</param>
	},
	setFontStyle: function(value) {
		/// <summary>Sets the font style of the labels.</summary>
		/// <param name="value" type="String">The font style of the labels.</param>
	},
	setLabelAlignment: function(value) {
		/// <summary>Sets the alignment of the labels relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the labels relative to the scale.</param>
	},
	setLabelForeground: function(value) {
		/// <summary>Sets the brush used to paint label texts.</summary>
		/// <param name="value" type="Object">The brush used to paint label texts.</param>
	},
	setLabelOffset: function(value) {
		/// <summary>Sets the offset of the labels relative to their calculated position.</summary>
		/// <param name="value" type="Length">The offset of the labels relative to their calculated position.</param>
	},
	setLabelRotation: function(value) {
		/// <summary>Sets the rotation mode of the labels.</summary>
		/// <param name="value" type="LabelRotation">The rotation mode of the labels.</param>
	},
	setNumberPrecision: function(value) {
		/// <summary>Sets the number recision of the labels.</summary>
		/// <param name="value" type="Number">The number recision of the labels.</param>
	},
	setShowLabels: function(value) {
		/// <summary>Sets a value indicating whether the labels are visible.</summary>
		/// <param name="value" type="Boolean">True if labels are visible, otherwise false.</param>
	},
	setShowMaxValueTick: function(value) {
		/// <summary>Sets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <param name="value" type="Boolean">True to display a tick for the maxValue, otherwise false.</param>
	},
	setShowTicks: function(value) {
		/// <summary>Sets a value indicating whether the ticks are visible.</summary>
		/// <param name="value" type="Boolean">True if ticks are visible, otherwise false.</param>
	},
	setStep: function(value) {
		/// <summary>Sets the value between adjacent ticks and labels.</summary>
		/// <param name="value" type="Number">The value between adjacent ticks and labels.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke brush of the ticks.</summary>
		/// <param name="value" type="Object">The stroke brush of the ticks.</param>
	},
	setTickAlignment: function(value) {
		/// <summary>Sets the alignment of the ticks relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the ticks relative to the scale.</param>
	},
	setTickHeight: function(value) {
		/// <summary>Sets the height of a tick.</summary>
		/// <param name="value" type="Length">The height of a tick.</param>
	},
	setTickOffset: function(value) {
		/// <summary>Sets the offset of the ticks relative to their calculated position.</summary>
		/// <param name="value" type="Length">The offset of the ticks relative to their calculated position.</param>
	},
	setTickShape: function(value) {
		/// <summary>Sets the shape of the ticks.</summary>
		/// <param name="value" type="TickShape">The shape of the ticks.</param>
	},
	setTickWidth: function(value) {
		/// <summary>Sets the width of a tick.</summary>
		/// <param name="value" type="Length">The width of a tick.</param>
	}
};
MindFusion.Gauges.TickSettings.__class = true;

MindFusion.Gauges.TickShape = {
		/// <summary>Indicates the shape of a scale tick.</summary>
		/// <field name="Arrow1">Specifies an arrow shape.</field>
		/// <field name="Arrow2">Specifies an arrow shape.</field>
		/// <field name="Arrow3">Specifies an arrow shape.</field>
		/// <field name="Custom">Specifies a custom shape.</field>
		/// <field name="Ellipse">Specifies an elliptical shape.</field>
		/// <field name="Line">Specifies a line as a shape.</field>
		/// <field name="None">Specifies an empty shape, that is, the tick is not displayed.</field>
		/// <field name="Rectangle">Specifies a rectangular shape.</field>
		/// <field name="Rhombus">Specifies a rhombus as a shape.</field>
		/// <field name="RoundRect">Specifies a rounded rectangle as a shape.</field>
		/// <field name="Triangle">Specifies a triangular shape.</field>
	Arrow1: 0,
	Arrow2: 1,
	Arrow3: 2,
	Custom: 3,
	Ellipse: 4,
	Line: 5,
	None: 6,
	Rectangle: 7,
	Rhombus: 8,
	RoundRect: 9,
	Triangle: 10
}
MindFusion.Gauges.TickShape.__enum = true;

MindFusion.Gauges.TickType = {
		/// <summary>Indicates the type of a scale tick.</summary>
		/// <field name="Major">Specifies a major tick.</field>
		/// <field name="Middle">Specifies a middle tick.</field>
		/// <field name="Minor">Specifies a minor tick.</field>
		/// <field name="None">Specifies ticks of an unknown type.</field>
	Major: 0,
	Middle: 1,
	Minor: 2,
	None: 3
}
MindFusion.Gauges.TickType.__enum = true;

MindFusion.Gauges.ValueChangedEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changed property.</summary>
		/// <param name="value" type="void"></param>
		/// <returns type="Object">The new value of the changed property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changed property.</summary>
		/// <returns type="Object">The previous value of the changed property.</returns>
	}
};
MindFusion.Gauges.ValueChangedEventArgs.__class = true;

MindFusion.Gauges.ValueChangingEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changing property.</summary>
		/// <param name="value" type="void"></param>
		/// <returns type="Object">The new value of the changing property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changing property.</summary>
		/// <returns type="Object">The previous value of the changing property.</returns>
	}
};
MindFusion.Gauges.ValueChangingEventArgs.__class = true;

MindFusion.Gauges.VisualElement.prototype = {
	getBounds: function() {
		/// <summary>Gets the bounding rectangle of this element.</summary>
		/// <returns type="Rect">The bounding rectangle of this element.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill of this element.</summary>
		/// <returns type="Object">The fill of this element.</returns>
	},
	getIsVisible: function() {
		/// <summary>Gets a value indicating whether this element is visible.</summary>
		/// <returns type="Boolean">True if the element is visible, otherwise false.</returns>
	},
	getMargin: function() {
		/// <summary>Gets the margin of this element.</summary>
		/// <returns type="Thickness">The margin of this element.</returns>
	},
	getName: function() {
		/// <summary>Gets the name of this element.</summary>
		/// <returns type="String">The name of this element.</returns>
	},
	getRelativeCoordinates: function() {
		/// <summary>Gets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">True if the metrics are relative, otherwise false.</returns>
	},
	getRenderSize: function() {
		/// <summary>Gets the rendering size of the element.</summary>
		/// <returns type="Size">The rendering size of the element.</returns>
	},
	getSize: function() {
		/// <summary>Gets the size of this element.</summary>
		/// <returns type="Size">The size of this element.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke of this element.</summary>
		/// <returns type="Object">The stroke of this element.</returns>
	},
	getX: function() {
		/// <summary>Gets the normalized x position of this element, relative to its parent.</summary>
		/// <returns type="Number">The normalized x position of this element, relative to its parent.</returns>
	},
	getY: function() {
		/// <summary>Gets the normalized y position of this element, relative to its parent.</summary>
		/// <returns type="Number">The normalized y position of this element, relative to its parent.</returns>
	},
	setBounds: function(value) {
		/// <summary>Sets the bounding rectangle of this element.</summary>
		/// <param name="value" type="Rect">The bounding rectangle of this element.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill of this element.</summary>
		/// <param name="value" type="Object">The fill of this element.</param>
	},
	setIsVisible: function(value) {
		/// <summary>Sets a value indicating whether this element is visible.</summary>
		/// <param name="value" type="Boolean">True if the element is visible, otherwise false.</param>
	},
	setMargin: function(value) {
		/// <summary>Sets the margin of this element.</summary>
		/// <param name="value" type="Thickness">The margin of this element.</param>
	},
	setName: function(value) {
		/// <summary>Sets the name of this element.</summary>
		/// <param name="value" type="String">The name of this element.</param>
	},
	setRelativeCoordinates: function(value) {
		/// <summary>Sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">True if the metrics are relative, otherwise false.</param>
	},
	setRenderSize: function(value) {
		/// <summary>Sets the rendering size of the element.</summary>
		/// <param name="value" type="Size">The rendering size of the element.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke of this element.</summary>
		/// <param name="value" type="Object">The stroke of this element.</param>
	},
	setX: function(value) {
		/// <summary>Sets the normalized x position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">The normalized x position of this element, relative to its parent.</param>
	},
	setY: function(value) {
		/// <summary>Sets the normalized y position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">The normalized y position of this element, relative to its parent.</param>
	}
};
MindFusion.Gauges.VisualElement.__class = true;

MindFusion.Gauges.VisualElementContainer.prototype = {
};
MindFusion.Gauges.VisualElementContainer.__class = true;

MindFusion.Graphs.Anchoring = {
		/// <summary>Defines values that specify how automatic layout algorithms align links to anchor points.</summary>
		/// <field name="Custom">Custom alignment logic.</field>
		/// <field name="Ignore">Anchor points are ignored.</field>
		/// <field name="Keep">Links are aligned to their original anchor points.</field>
		/// <field name="Reassign">Links are aligned to new anchor points, depending on the positions of graph nodes after a layout is applied.</field>
	Custom: 3,
	Ignore: 0,
	Keep: 1,
	Reassign: 2
}
MindFusion.Graphs.Anchoring.__enum = true;

MindFusion.Graphs.AssistantPosition = {
		/// <summary>Specifies the final position of an assistant node. Assistants with type left or right are always positioned to the left or right respectively. The position of the "normal" assistants depends on their index in the children list.</summary>
		/// <field name="Left">The node is distributed to the left of its parent.</field>
		/// <field name="Right">The node is distributed to the right of its parent.</field>
	Left: 1,
	Right: 2
}
MindFusion.Graphs.AssistantPosition.__enum = true;

MindFusion.Graphs.AssistantType = {
		/// <summary>Indicates the type of an assistant node in a tree.</summary>
		/// <field name="Left">The node is an assistant and it is always positioned to the left of its parent.</field>
		/// <field name="Normal">The node is an assistant and its relative position is determinedautomatically by the layout.</field>
		/// <field name="Right">The node is an assistant and it is always positioned to the right of its parent.</field>
	Left: 2,
	Normal: 1,
	Right: 3
}
MindFusion.Graphs.AssistantType.__enum = true;

MindFusion.Graphs.BorderedTreeLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	}
};
MindFusion.Graphs.BorderedTreeLayout.__class = true;

MindFusion.Graphs.Edge.prototype = {
	adjacentTo: function(edge) {
		/// <summary>Checks if the current edge is adjacent to the specified edge, that is, they have common vertex.</summary>
		/// <param name="edge" type="Edge">Edge. The edge to check.</param>
		/// <returns type="Boolean">true if the current edge is adjacent to the specified edge; otherwise, false.</returns>
	},
	changeDestination: function(vertex) {
		/// <summary>Changes the destination of the current edge to the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. The new destination of the edge.</param>
	},
	changeOrigin: function(vertex) {
		/// <summary>Changes the origin of the current edge to the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. The new origin of the edge.</param>
	},
	createReverseEdge: function() {
		/// <summary>Creates a new edge similar to the current edge but with reversed direction.</summary>
		/// <returns type="Edge"></returns>
	},
	getCommonVertex: function(edge) {
		/// <summary>Returns a common vertex for the current edge and the specified edge.</summary>
		/// <param name="edge" type="Edge">Edge. The edge for which to find common vertex.</param>
		/// <returns type="Vertex">The common vertex if it exists, otherwise null.</returns>
	},
	getEnds: function() {
		/// <summary>Returns an array containing the origin and destination vertices of this edge.</summary>
		/// <returns type="Array">Array. An array containing the related vertices.</returns>
	},
	getOtherEnd: function(vertex) {
		/// <summary>Returns the vertex connected by this edge that is not the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. One of the vertices connected by this edge.</param>
		/// <returns type="Vertex">Vertex. The other vertex connected by this edge.</returns>
	},
	incidentWith: function(vertex) {
		/// <summary>Checks if the current edge is incident with the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. The vertex to check.</param>
		/// <returns type="Boolean">true if the edge is incident with the vertex; otherwise, false.</returns>
	},
	joins: function(v1, v2) {
		/// <summary>Checks if the current edge connects the specified vertices.</summary>
		/// <param name="v1" type="Vertex">Vertex. The first vertex.</param>
		/// <param name="v2" type="Vertex">Vertex. The second vertex.</param>
		/// <returns type="Boolean">true if the current edge connects the specified vertices; otherwise, false.</returns>
	},
	reverse: function() {
		/// <summary>Reverses this edge.</summary>
	}
};
MindFusion.Graphs.Edge.__class = true;

MindFusion.Graphs.FlowchartLayout.prototype = {
	init: function() {
		/// <summary>Returns a Builder object used to configure this FlowchartLayout instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
};
MindFusion.Graphs.FlowchartLayout.__class = true;

MindFusion.Graphs.FlowchartLayout.With = function() {
	/// <summary>Returns a Builder object used to configure and create new FlowchartLayout instances.</summary>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Graphs.FractalLayout.prototype = {
};
MindFusion.Graphs.FractalLayout.__class = true;

MindFusion.Graphs.Graph.prototype = {
	addEdge: function(edge) {
		/// <summary>Adds an existing edge to the graph.</summary>
		/// <param name="edge" type="Edge">Edge. The edge to add.</param>
	},
	clone: function(saveMapping) {
		/// <summary>Creates an exact copy of the current graph.</summary>
		/// <param name="saveMapping" type="Boolean" optional="true">Optional. Boolean. Indicates whether to store vertex and edge mapping information in the copy.</param>
		/// <returns type="Graph">Graph. The newly created copy.</returns>
	},
	createEdge: function(origin, destination, owner) {
		/// <summary>Creates a new edge connecting the specified vertices and adds it to the graph.</summary>
		/// <param name="origin" type="Vertex">Vertex. The origin vertex.</param>
		/// <param name="destination" type="Vertex">Vertex. The destination vertex.</param>
		/// <param name="owner" type="Object" optional="true">Optional. Object. The owner of the new edge.</param>
		/// <returns type="Edge">Edge. The newly created edge.</returns>
	},
	createVertex: function(layoutRect, owner) {
		/// <summary>Creates a new vertex with the specified position and size and adds it to the graph.</summary>
		/// <param name="layoutRect" type="Rect">Rect. A rectangle specifying the position and size of the vertex.</param>
		/// <param name="owner" type="Object" optional="true">Optional. Object. The owner of the new vertex.</param>
		/// <returns type="Vertex">Vertex. The newly created vertex.</returns>
	},
	getConnectedComponents: function() {
		/// <summary>Returns a list with the connected subgraphs in the current graph.</summary>
		/// <returns type="Array">An array with connected Graph objects.</returns>
	},
	getUpwardEmbedding: function(embedding, embeddingInfo) {
		/// <summary>Should be called on a planar graph.</summary>
		/// <param name="embedding" type="Map" optional="true">Optional. Map. Receives the embedding lists.</param>
		/// <param name="embeddingInfo" type="Map" optional="true">Optional. Map. Optional.</param>
		/// <returns type="Vertex">Vertex. The t node in st ordering.</returns>
	},
	makeAcyclic: function() {
		/// <summary>Makes the graph acyclic by reversing the direction of selected edges.</summary>
		/// <returns type="Array">Array. A list with all edges that were reversed in order to make the graph acyclic.</returns>
	},
	removeEdge: function(edge) {
		/// <summary>Removes an edge from the graph.</summary>
		/// <param name="edge" type="Edge">Edge. The edge to remove.</param>
	},
	tree: function(root) {
		/// <summary>Returns a new graph object containing a subset of the vertices and edges of the original graph, such that the new graph is a tree.</summary>
		/// <param name="root" type="MindFusion.Graphs.Vertex">The desired root vertex of the tree.</param>
		/// <returns type="MindFusion.Graphs.Graph">The newly created tree.</returns>
	}
	tree: function(root, enableAssistants, compactAssistants) {
		/// <summary>Returns a new graph object containing a subset of the vertices and edges of the original graph, such that the new graph is a tree.</summary>
		/// <param name="root" type="Vertex">Vertex. The desired root vertex of the tree.</param>
		/// <param name="enableAssistants" type="Boolean"></param>
		/// <param name="compactAssistants" type="Boolean"></param>
		/// <returns type="Graph">Graph. The newly created tree.</returns>
	},
};
MindFusion.Graphs.Graph.__class = true;

MindFusion.Graphs.LayeredLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	}
};
MindFusion.Graphs.LayeredLayout.__class = true;

MindFusion.Graphs.Layout.prototype = {
};
MindFusion.Graphs.Layout.__class = true;

MindFusion.Graphs.LayoutDirection = {
		/// <summary>Specifies in what direction to place nodes processed by a layout algorithm.</summary>
		/// <field name="BottomToTop">Indicates a bottom-to-top layout direction.</field>
		/// <field name="LeftToRight">Indicates a left-to-right layout direction.</field>
		/// <field name="RightToLeft">Indicates a right-to-left layout direction.</field>
		/// <field name="TopToBottom">Indicates a top-to-bottom layout direction.</field>
	BottomToTop: 2,
	LeftToRight: 1,
	RightToLeft: 3,
	TopToBottom: 0
}
MindFusion.Graphs.LayoutDirection.__enum = true;

MindFusion.Graphs.MultipleGraphsPlacement = {
		/// <summary>Specifies placement of graph connected components relatively to each other.</summary>
		/// <field name="Horizontal">Indicates that subgraphs should be placed in a row.</field>
		/// <field name="Vertical">Indicates that subgraphs should be placed in a column.</field>
	Horizontal: 1,
	Vertical: 0
}
MindFusion.Graphs.MultipleGraphsPlacement.__enum = true;

MindFusion.Graphs.Orientation = {
		/// <summary>Specifies general layout orientation.</summary>
		/// <field name="Horizontal">Specifies horizonal orientation.</field>
		/// <field name="Vertical">Specifies vertical orientation.</field>
	Horizontal: 1,
	Vertical: 0
}
MindFusion.Graphs.Orientation.__enum = true;

MindFusion.Graphs.OrthogonalLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">Graph. The graph to arrange.</param>
	}
};
MindFusion.Graphs.OrthogonalLayout.__class = true;

MindFusion.Graphs.Path.prototype = {
};
MindFusion.Graphs.Path.__class = true;

MindFusion.Graphs.PathFinder.prototype = {
};
MindFusion.Graphs.PathFinder.__class = true;

MindFusion.Graphs.PathFinder.findAllPaths = function() {
	/// <summary>Finds and returns all paths starting from node 'from' andending at node 'to'. Returns empty collection if nopath exists.</summary>
};

MindFusion.Graphs.SpringLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	}
};
MindFusion.Graphs.SpringLayout.__class = true;

MindFusion.Graphs.TopologicalLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this TopologicalLayout instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
};
MindFusion.Graphs.TopologicalLayout.__class = true;

MindFusion.Graphs.TopologicalLayout.With = function() {
	/// <summary>Returns a Builder object used to configure and create new TopologicalLayout instances.</summary>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Graphs.TreeLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	}
};
MindFusion.Graphs.TreeLayout.__class = true;

MindFusion.Graphs.TreeLayoutLinkType = {
		/// <summary>Specifies the shape of the diagram links after they are laid out.</summary>
		/// <field name="Cascading">Indicates that links will be arranged as cascading and attached to the middles of the adjoining node sides.</field>
		/// <field name="Default">Indicates that links will be arranged to point to the centers of the related nodes.</field>
		/// <field name="Straight">Indicates that links will be attached to the middles of the adjoining node sides.</field>
	Cascading: 2,
	Default: 0,
	Straight: 1
}
MindFusion.Graphs.TreeLayoutLinkType.__enum = true;

MindFusion.Graphs.TreeMapLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="Graph">The Graph to arrange.</param>
	}
};
MindFusion.Graphs.TreeMapLayout.__class = true;

MindFusion.Graphs.Vertex.prototype = {
	adjacentTo: function(vertex) {
		/// <summary>Checks if there is an edge connecting this vertex with the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. The vertex to check.</param>
		/// <returns type="Boolean">true if the vertices are connected; otherwise, false.</returns>
	},
	degree: function() {
		/// <summary>Returns the number of incident edges.</summary>
		/// <returns type="Number">Number. The number of incident edges.</returns>
	},
	getCommonEdge: function(vertex) {
		/// <summary>Finds the edge connecting the current vertex with the specified vertex.</summary>
		/// <param name="vertex" type="Vertex">Vertex. The vertex to find an edge for.</param>
		/// <returns type="Edge">The edge connecting the vertices or null.</returns>
	},
	getNeighbors: function() {
		/// <summary>Returns an array containing all vertices adjacent to the current vertex.</summary>
		/// <returns type="Array">Array. A list with all neighbors.</returns>
	},
	incidentWith: function(edge) {
		/// <summary>Checks if the current vertex is incident with the specified edge.</summary>
		/// <param name="edge" type="Edge">Edge. The edge to check.</param>
		/// <returns type="Boolean">true if the vertex is incident with the edge; otherwise, false.</returns>
	}
};
MindFusion.Graphs.Vertex.__class = true;

MindFusion.Mapping.Events.prototype = {
};
MindFusion.Mapping.Events.__class = true;

MindFusion.Mapping.MapEventArgs.prototype = {
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance.</returns>
	}
};
MindFusion.Mapping.MapEventArgs.__class = true;

MindFusion.Mapping.MapView.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the MapView.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the view from a JSON string.</summary>
		/// <param name="json" type="String">Type: String&#10;A string created by the toJson method.</param>
	},
	generate: function() {
		/// <summary>Sends an AJAX request to the image generation service.</summary>
	},
	getScrollX: function() {
		/// <summary>Gets the view's horizontal scroll position.</summary>
		/// <returns type="Number">A number specifying the horizontal scroll position.</returns>
	},
	getScrollY: function() {
		/// <summary>Gets the view's vertical scroll position.</summary>
		/// <returns type="Number">A number specifying the vertical scroll position.</returns>
	},
	getZoomFactor: function() {
		/// <summary>Gets the zoom factor.</summary>
		/// <returns type="Number">The current zoom factor.</returns>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the MapView.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	scrollTo: function(x, y) {
		/// <summary>Scrolls the view to the specified point.</summary>
		/// <param name="x" type="Number">A number specifying the new horizontal scroll position.</param>
		/// <param name="y" type="Number">A number specifying the new vertical scroll position.</param>
	},
	setZoomLevel: function(value) {
		/// <summary>Sets the zoom factor.</summary>
		/// <param name="value" type="Number">The zoom factor.</param>
	},
	toJson: function(args) {
		/// <summary>Serializes the view into a JSON string.</summary>
		/// <param name="args" type="void"></param>
		/// <returns type="String">A string containing the view's JSON representation.</returns>
	}
};
MindFusion.Mapping.MapView.__class = true;

MindFusion.Mapping.MapView.create = function(element) {
	/// <summary>Creates and initializes a new MapView from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">Type: Object&#10;The DOM element that the MapView should be attached to.</param>
	/// <returns type="MindFusion.Mapping.MapView">Type: MapView&#10;A MapView object that represents the newly created MapView.</returns>
};
MindFusion.Mapping.MapView.find = function(id, parent) {
	/// <summary>Returns the specified MapView object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">Type: String&#10;A string that contains the ID of the MapView to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. Type: Object&#10;The component or element that contains the MapView to find.</param>
	/// <returns type="MindFusion.Mapping.MapView">Type: MapView&#10;A MapView object that contains the MapView requested by id, if found; otherwise, null.</returns>
};

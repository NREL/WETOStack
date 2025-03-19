/// <reference types="../../@mindfusion/drawing" />
/// <reference types="../../@mindfusion/collections" />
declare module "Graphs/Enum" {
    /**
     * Specifies the final position of an assistant node. Assistants with type left
     * or right are always positioned to the left or right respectively. The position
     * of the "normal" assistants depends on their index in the children list.
     */
    export type AssistantPosition = number;
    export namespace AssistantPosition {
        const Left: number;
        const Right: number;
    }
    /**
     * Indicates the type of an assistant node in a tree.
     */
    export type AssistantType = number;
    export namespace AssistantType {
        export const Normal: number;
        const Left_1: number;
        export { Left_1 as Left };
        const Right_1: number;
        export { Right_1 as Right };
    }
    /**
     * Defines values that specify how automatic layout algorithms align links to anchor points.
     */
    export type Anchoring = number;
    export namespace Anchoring {
        const Ignore: number;
        const Keep: number;
        const Reassign: number;
        const Custom: number;
    }
    /**
     * Specifies in what direction to place nodes processed by a layout algorithm.
     */
    export type LayoutDirection = number;
    export namespace LayoutDirection {
        const TopToBottom: number;
        const LeftToRight: number;
        const BottomToTop: number;
        const RightToLeft: number;
    }
    /**
     * Specifies the shape of the diagram links after they are laid out.
     */
    export type TreeLayoutLinkType = number;
    export namespace TreeLayoutLinkType {
        const Default: number;
        const Straight: number;
        const Cascading: number;
    }
    /**
     * Specifies placement of graph connected components relatively to each other.
     */
    export type MultipleGraphsPlacement = number;
    export namespace MultipleGraphsPlacement {
        const Vertical: number;
        const Horizontal: number;
    }
    /**
     * Specifies general layout orientation.
     */
    export type Orientation = number;
    export namespace Orientation {
        const Vertical_1: number;
        export { Vertical_1 as Vertical };
        const Horizontal_1: number;
        export { Horizontal_1 as Horizontal };
    }
}
declare module "Graphs/Vertex" {
    export default Vertex;
    /**
    * @class Represents a vertex in a graph.
    */
    class Vertex {
        /**
        * A list containing all edges incident with this vertex.
        * returns {Array}
        */
        edges: any[];
        /**
        * A list containing all outgoing edges.
        */
        outEdges: any[];
        /**
        * A list containing all incoming edges.
        */
        inEdges: any[];
        /**
        * The relative weight of this vertex.
        */
        weight: number;
        /**
        * For internal use only.
        * @private
        */
        private clone;
        /**
        * For internal use only.
        * @private
        */
        private removeEdge;
        /**
        * Checks if the current vertex is incident with the specified edge.
        * @param {Edge} edge The edge to check.
        * @returns {Boolean} true if the vertex is incident with the edge; otherwise, false.
        */
        incidentWith(edge: any): boolean;
        /**
        * Checks if there is an edge connecting this vertex with the specified vertex.
        * @param {Vertex} vertex The vertex to check.
        * @returns {Boolean} true if the vertices are connected; otherwise, false.
        */
        adjacentTo(vertex: Vertex): boolean;
        /**
        * Finds the edge connecting the current vertex with the specified vertex.
        * @param {Vertex} vertex The vertex to find an edge for.
        * @returns {Edge} The edge connecting the vertices or null.
        */
        getCommonEdge(vertex: Vertex): any;
        getCommonEdges(vertex: any): boolean;
        /**
        * For internal use only.
        * @private
        */
        private edgeTo;
        /**
        * Returns an array containing all vertices adjacent to the current vertex.
        * @returns {Array} A list with all neighbors.
        */
        getNeighbors(): any[];
        /**
        * Returns the number of incident edges.
        * @returns {Number} The number of incident edges.
        */
        degree(): number;
        inDegree(): number;
        outDegree(): number;
        toString(): any;
    }
}
declare module "Graphs/Edge" {
    export default Edge;
    /**
    * @class Represents an edge connecting two vertices in a graph.
    */
    class Edge {
        /**
        * Initializes a new instance of the Edge class.
        * @constructor
        * @param {Vertex} origin The origin vertex.
        * @param {Vertex} destination The destination vertex.
        */
        constructor(origin: any, destination: any, prototype: any);
        /**
        * The origin vertex.
        */
        origin: any;
        /**
        * The destination vertex.
        */
        destination: any;
        weight: any;
        /**
        * Returns the vertex connected by this edge that is not the specified vertex.
        * @param {Vertex} vertex One of the vertices connected by this edge.
        * @returns {Vertex} The other vertex connected by this edge.
        */
        getOtherEnd(vertex: any): any;
        /**
        * Returns a common vertex for the current edge and the specified edge.
        * @param {Edge} edge The edge for which to find common vertex.
        * @returns {Vertex} The common vertex if it exists, otherwise null.
        */
        getCommonVertex(edge: Edge): any;
        /**
        * Checks if the current edge connects the specified vertices.
        * @param {Vertex} v1 The first vertex.
        * @param {Vertex} v2 The second vertex.
        * @returns {Boolean} true if the current edge connects the specified vertices; otherwise, false.
        */
        joins(v1: any, v2: any): boolean;
        /**
        * Returns an array containing the origin and destination vertices of this edge.
        * @returns {Array} An array containing the related vertices.
        */
        getEnds(): any[];
        /**
        * Checks if the current edge is incident with the specified vertex.
        * @param {Vertex} vertex The vertex to check.
        * @returns {Boolean} true if the edge is incident with the vertex; otherwise, false.
        */
        incidentWith(vertex: any): boolean;
        /**
        * Checks if the current edge is adjacent to the specified edge, that is,
        * they have common vertex.
        * @param {Edge} edge The edge to check.
        * @returns {Boolean} true if the current edge is adjacent to the specified edge; otherwise, false.
        */
        adjacentTo(edge: Edge): boolean;
        /**
        * Changes the origin of the current edge to the specified vertex.
        * @param {Vertex} vertex The new origin of the edge.
        */
        changeOrigin(v: any): void;
        /**
        * Changes the destination of the current edge to the specified vertex.
        * @param {Vertex} vertex The new destination of the edge.
        */
        changeDestination(v: any): void;
        changeVertex(v: any, w: any): void;
        /**
        * Reverses this edge.
        */
        reverse(): void;
        directTo(destination: any): void;
        /**
        * Creates a new edge similar to the current edge but with reversed direction.
        * @returns {Edge}
        */
        createReverseEdge(): Edge;
        toString(): string;
    }
}
declare module "Graphs/PQTree" {
    export class PQTree {
        init(): void;
        consecutiveNodes: any;
        modifiedNodes: any[];
        root: any;
        reinit(): void;
        reduction(s: any): any;
        bubble(s: any): boolean;
        reduce(s: any): any;
        pertinentRoot: any;
        templateL1(lNode: any): boolean;
        templateP1(pNode: any): boolean;
        templateP2(pNode: any): boolean;
        templateP3(pNode: any): boolean;
        templateP4(pNode: any): boolean;
        templateP5(pNode: any): boolean;
        templateP6(pNode: any): boolean;
        templateQ1(qNode: any): boolean;
        templateQ2(qNode: any): boolean;
        templateQ3(qNode: any): boolean;
    }
    export namespace PQTree {
        export { Node };
        export { NodePair };
    }
    export namespace NodeType {
        const pNode: number;
        const qNode: number;
        const directionIndicator: number;
    }
    export namespace NodeLabel {
        const empty: number;
        const partial: number;
        const full: number;
    }
    class Node {
        constructor(type: any, data: any);
        data: any;
        immediateSiblings: {
            nodes: any[];
            trackDirection: boolean;
            directedTowardsIndex: any;
            add(node: any): void;
            remove(node: any): boolean;
            removeAt(index: any): boolean;
            getOther(node: any): any;
            replace(oldNode: any, newNode: any): void;
            indexOf(node: any): number;
            contains(node: any): boolean;
            get(index: any): any;
            readonly count: number;
            direction: any;
        };
        readInReverseDirection: boolean;
        init(nodeType: any): void;
        _type: any;
        parent: any;
        endMostChildren: any;
        circularLink: any;
        left: any;
        right: any;
        childCount: any;
        fullChildrenList: any;
        fullLeft: any;
        fullRight: any;
        fullChildren: any;
        partialChildrenList: any;
        partialLeft: any;
        partialRight: any;
        partialChildren: any;
        pertinentChildCount: any;
        pertinentLeafCount: any;
        _label: any;
        blocked: boolean;
        queued: boolean;
        pseudoRoot: any;
        destroyed: any;
        destroy(): void;
        reinit(reinitParent: any): void;
        set label(arg: any);
        get label(): any;
        getBlockedSiblings(): any[];
        getUnblockedSiblings(): any[];
        getEndMostDirectedSibling(otherSide: any): any;
        getNonDirectedSibling(otherSide: any): any;
        setPseudoRoot(blockedList: any): void;
        set type(arg: any);
        get type(): any;
        getMaximalConsecutiveBlockedSiblings(): any[];
        markBlocked(): void;
        markUnblocked(): void;
        markQueued(): void;
        fullChildrenAreAdjacent(): boolean;
        fullChildrenAreAdjacentTo(node: any): any;
        fullChildrenAreEndMost(): boolean;
        partialChildrenAtEnds(): boolean;
        endMostChildrenAreEmptyOrPartial(): boolean;
        childrenAreFull(): boolean;
        twoChildrenLeft(): boolean;
        getPartialChild(index: any): any;
        getFirstFullChild(): any;
        getFirstEmptyChild(): any;
        addToFullList(node: any): void;
        removeFromFullList(node: any): void;
        addToPartialList(node: any): void;
        removeFromPartialList(node: any): void;
        addChildToPNode(node: any): void;
        removeChildFromPNode(node: any): void;
        addChildToQNode(node: any): void;
        removeChildFromQNode(node: any): void;
        addChildToPseudoRoot(node: any): void;
        addChild(node: any, updateTree: any): void;
        removeChild(node: any, updateTree: any): void;
        replaceChild(node: any, newNode: any): void;
        getPertinentNeighbor(si: any): any;
        getEmptyNeighbor(si: any): any;
        getEndMostChild(nodeLabel: any): any;
        absorbPartialChild(qNode: any): void;
        replaceFullChildrenWith(node: any): void;
        becomeChild(theChild: any): void;
        moveFullChildrenTo(newParent: any): void;
        checkLabelDirected(node: any, nodeLabel: any): any;
        hasChildren(): boolean;
        getEndmostLeaves(): any[];
        getAllNodes(list: any, nodeType: any): void;
        getQChildren(): any[];
        getLeaf(): any;
        siblingOf(node: any): boolean;
        getFullLeavesFrom(): any;
        getFullLeavesTo(): any;
        getFullLeaves(): any[];
        get nextPSibling(): any;
        get childLink(): any;
        get children(): any;
        get emptyChildren(): number;
        get unmarked(): boolean;
        set direction(arg: any);
        get direction(): any;
    }
    class NodePair {
        constructor(directionIndex: any);
        nodes: any[];
        trackDirection: boolean;
        directedTowardsIndex: any;
        add(node: any): void;
        remove(node: any): boolean;
        removeAt(index: any): boolean;
        getOther(node: any): any;
        replace(oldNode: any, newNode: any): void;
        indexOf(node: any): number;
        contains(node: any): boolean;
        get(index: any): any;
        get count(): number;
        set direction(arg: any);
        get direction(): any;
    }
    export {};
}
declare module "Graphs/Face" {
    /**
    * @namespace MindFusion.Graphs
    */
    export default class Face {
        constructor(prototype: any);
        edges: any;
        incidentWith(v: any): boolean;
        adjacentTo(face: any): boolean;
        getCommonEdge(face: any): any;
        get degree(): any;
        getVertices(): Set<any>;
        enumVertices(): any[];
        isCycle(): boolean;
        edgeFromVertex(vertex: any): any;
        replaceEdge(edge: any, replacement: any): void;
        get bigAngles(): any[];
        _bigAngles: any[];
    }
}
declare module "Graphs/Embedding" {
    export default class Embedding {
        constructor(graph: any, copy: any, vertexCopyToOrigMap: any, edgeCopyToOrigMap: any);
        graph: any;
        embedding: any;
        addBlockEmbedding(block: any, blockEmbedding: any): void;
        add(v: any): void;
        remove(v: any): void;
        getNextRightFaceEdge(e: any): any;
        createDirectedEdges(): void;
        reverseEdges: Map<any, any>;
        replaceEdges(e: any, e1: any, e2: any, r: any, r1: any, r2: any, newVertex: any): void;
        addEdge(e: any, r: any, fromEdge: any, toEdge: any): void;
        getNext(v: any, e: any): any;
        getPrevious(v: any, e: any): any;
        setReverseEdges(e: any, r: any): void;
        isVertexBimodal(v: any): boolean;
        isBimodal(): boolean;
        contractEdge(edge: any, vertex: any): void;
        replaceEdge(edge: any, vertex: any): void;
        quasiCapacity(face: any): number;
        countSourceSwitches(face: any): number;
        enumerateFaces(): void;
        _faces: any[];
        faceOnLeftMap: Map<any, any>;
        faceOnRightMap: Map<any, any>;
        externalFace: any;
        enumerateFaceEdges(startEdge: any, startVertex: any): Face;
        prevInEmbedding(edge: any, vertex: any): any;
        insertEdge(edge: any, vertex: any, face: any): void;
        edgesBetween(edge1: any, edge2: any, vertex: any): any[];
        getReverse(e: any): any;
        get(v: any): any;
        get vertices(): any;
        get faces(): any[];
    }
    import Face from "Graphs/Face";
}
declare module "Graphs/Interval" {
    /**
    * @namespace MindFusion.Graphs
    */
    export default class Interval {
        constructor(min: any, max: any);
        min: any;
        max: any;
        contains(interval: any): boolean;
        intersects(interval: any): boolean;
        overlaps(interval: any): boolean;
    }
}
declare module "Graphs/BinaryTree" {
    /**
    * @namespace MindFusion.Graphs
    */
    class BinaryTree {
        constructor(item: any);
        root: {
            item: any;
            addChildren(left: any, right: any): void;
            left: any;
            right: any;
            getLeaves(): any[];
            collectLeaves(leaves: any): void;
        };
        getLeaves(): any[];
    }
    namespace BinaryTree {
        export { Node };
    }
    export default BinaryTree;
    class Node {
        constructor(item: any);
        item: any;
        addChildren(left: any, right: any): void;
        left: {
            item: any;
            addChildren(left: any, right: any): void;
            left: any;
            right: any;
            getLeaves(): any[];
            collectLeaves(leaves: any): void;
        };
        right: {
            item: any;
            addChildren(left: any, right: any): void;
            left: any;
            right: any;
            getLeaves(): any[];
            collectLeaves(leaves: any): void;
        };
        getLeaves(): any[];
        collectLeaves(leaves: any): void;
    }
}
declare module "Graphs/PriorityQueue" {
    /**
    * @namespace MindFusion.Graphs
    */
    export default class PriorityQueue {
        constructor(maxN: any, array: any);
        a: any;
        N: number;
        d: number;
        pq: number[];
        qp: number[];
        empty(): boolean;
        insert(v: any): void;
        getMin(): number;
        lower(k: any): void;
        less(i: any, j: any): boolean;
        exchange(i: any, j: any): void;
        swim(k: any): void;
        sink(k: any, N: any): void;
    }
}
declare module "Graphs/Factory" {
    /**
    * @namespace MindFusion.Graphs
    */
    export default class Factory {
    }
}
declare module "Graphs/Graph" {
    /**
    * @class Represents a graph.
    */
    export class Graph {
        /**
        * A list containing all vertices in the graph.
        */
        vertices: any[];
        /**
        * A list containing all edges in the graph.
        */
        edges: any[];
        /**
        * Creates an exact copy of the current graph.
        * @param {Boolean} [saveMapping] Indicates whether to store vertex and edge mapping information in the copy.
        * @returns {Graph} The newly created copy.
        */
        clone(saveMapping?: boolean): Graph;
        cloneSubset(vertexSubset: any, saveMapping: any): Graph;
        createReverseMaps(): void;
        vertexOrigToCopyMap: Map<any, any>;
        edgeOrigToCopyMap: Map<any, any>;
        /**
        * Returns a new graph object containing a subset of the vertices and edges
        * of the original graph, such that the new graph is a tree.
        * @param {Vertex} root The desired root vertex of the tree.
        * @param {Boolean} enableAssistants
        * @param {Boolean} compactAssistants
        * @returns {Graph} The newly created tree.
        */
        tree(root: Vertex, enableAssistants: boolean, compactAssistants: boolean): Graph;
        /**
        * Reassigns tree levels when "assistants" are enabled.
        * @private
        */
        private reassignLevels;
        /**
        * Creates a new edge connecting the specified vertices and adds it to the graph.
        * @param {Vertex} origin The origin vertex.
        * @param {Vertex} destination The destination vertex.
        * @param {Object} [owner] The owner of the new edge.
        * @returns {Edge} The newly created edge.
        */
        createEdge(origin: Vertex, destination: Vertex, owner?: any): Edge;
        createEdgeP(origin: any, destination: any, prototype: any): Edge;
        /**
        * Adds an existing edge to the graph.
        * @param {Edge} edge The edge to add.
        */
        addEdge(edge: Edge): void;
        /**
        * Removes an edge from the graph.
        * @param {Edge} edge The edge to remove.
        */
        removeEdge(edge: Edge): void;
        removeAllEdges(): void;
        /**
        * Creates a new vertex with the specified position and size and adds it to the graph.
        * @param {Rect} layoutRect A rectangle specifying the position and size of the vertex.
        * @param {Object} [owner] The owner of the new vertex.
        * @returns {Vertex} The newly created vertex.
        */
        createVertex(layoutRect: any, owner?: any): Vertex;
        removeVertex(vertex: any): void;
        /**
        * Adds an existing vertex and its related edges to the graph.
        * @param {Vertex} vertex The vertex to add.
        * @private
        */
        private addVertexAndOutEdges;
        addVertex(debugId: any): Vertex;
        /**
        * Assigns unique indices to the items in the graph.
        * @private
        */
        private setItemIndices;
        splitEdge(e: any): Vertex;
        findShortestPathVS(v1: any, destSet: any): any[];
        findShortestPathSS(originSet: any, destSet: any): any[];
        findShortestPathBfs(e: any, destSet: any, mark: any, searchTree: any, path: any): void;
        findShortestWeightedPathVS(origin: any, destSet: any, outMinWeigth: any): any[];
        findShortestWeightedPathSS(originSet: any, destSet: any): any[];
        /**
        * Returns a list with the connected subgraphs in the current graph.
        * @returns {Array} An array with connected Graph objects.
        */
        getConnectedComponents(): any[];
        searchCounter: number;
        /**
        * Performs a depth-first search for connected components.
        * @private
        */
        private dfsConnectivity;
        getBiconnectedComponents(saveMapping: any, blocksHandler: any): any[];
        getBiconnectedComponentsOfConnectedGraph(): any[];
        visitedEdges: any[];
        cutVertices: any[];
        foundComponents: any[];
        secondLevel: any[];
        searchOrder: any[];
        backMostEdges: any[];
        biconnectivityDfs(parent: any, vertexId: any): void;
        stackToComponent2(child: any): void;
        getBiconnectedComponents2(): Graph[];
        planarMakeBiconnected(): Edge[];
        stillPlanar(v1: any, v2: any): boolean;
        father(vertex: any): any;
        getOutsideVertexCP(cutpoints: any): any;
        getOutsideVertexCPN(cutpoints: any, neighbor: any): any;
        get3EdgeConnectedComponents(): any[];
        getCutPairs(): any[];
        test3EdgeConnectivity(returnPairs: any): any[];
        findBlockSeparationPairs(): any[][];
        findBlockSeparationPairsB(): any[];
        depthFirstSearch(start: any): void;
        searchParent: any[];
        searchComponent(origin: any, dest: any): void;
        getStNumbering(sink: any): any[];
        stOrder: any[];
        convertToStGraph(sink: any): any[];
        isCycleEdge(edge: any): boolean;
        findPath(v: any, oldVertices: any, oldEdges: any): any[];
        isPlanar(): boolean;
        isPlanarSingleBicomponent(embeddingInfo: any): boolean;
        getPlanarEmbedding(): Embedding;
        getPlanarEmbeddingSingleBicomp(embeddingInfo: any): Map<any, any>;
        /**
        * Should be called on a planar graph.
        * @param {Map} [embedding] Receives the embedding lists.
        * @param {Map} [embeddingInfo] Optional.
        * @returns {Vertex} The t node in st ordering.
        */
        getUpwardEmbedding(embedding?: Map<any, any>, embeddingInfo?: Map<any, any>): Vertex;
        entireEmbed(upEmbedding: any, tVertex: any): Map<any, any>;
        entireEmbedDfs(upEmbedding: any, entireEmbedding: any, vertex: any, oldVertices: any): void;
        findPlanarSubgraph(edgesToDelete: any, crossingConstrainedEdges: any): any;
        findPlanarSubgraphBySimpleEdgeInsertion(edgesToDelete: any, knownPlanarEdges: any, crossingConstrainedEdges: any): any;
        findPlanarSubgraphByBookEmbedding(edgesToDelete: any, crossingConstrainedEdges: any): any;
        minAdjacenciesNeighbor(vertex: any, vset: any): any;
        minDegreeVertex(vset: any): any;
        countAdjacencies(vertex: any, vset: any): number;
        embedOnSameFace(faceVertices: any): Embedding;
        planarize(edgeToDummyEdgesMap: any, crossingConstrainedEdges: any): any;
        /**
        * Makes the graph acyclic by reversing the direction of selected edges.
        * @returns {Array} A list with all edges that were reversed in order to make the graph acyclic.
        * @remarks Must be called on a simple connected graph.
        */
        makeAcyclic(): any[];
        getDualGraph(cacheIncidentFaces: any): any;
        getDualGraphE(embedding: any, s: any, t: any): any;
        topologicalSort(): any[];
        postCounter: number;
        topologicalSortDfs(postOrder: any, topologicalOrder: any, dest: any): boolean;
        getWeightedTopologicalNumbering(minNumber: any): any[];
        getWeightedTopologicalNumberingTS(tsort: any, minNumber: any): any[];
        splitToMaxDegree(maxDegree: any, embedding: any): Map<any, any>;
        splitToMaxDegreeV(vertex: any, maxDegree: any, embedding: any): Graph;
        reorderTopologically(): void;
        maxWeightedCliqueOfTransitiveDAG(): any[];
    }
    import Vertex from "Graphs/Vertex";
    import Edge from "Graphs/Edge";
    import Embedding from "Graphs/Embedding";
}
declare module "Graphs/BlockCutpointGraph" {
    export default class BlockCutpointGraph extends Graph {
        constructor(graph: any);
        targetGraph: any;
        blockToBnodeMap: Map<any, any>;
        cutToCnodeMap: Map<any, any>;
        blocks: any;
        onComponentBlocks(componentBlocks: any, componentCuts: any): void;
        cutVerticesB(block: any): any[];
        cutVerticesV(bNode: any): any[];
        isPendant(bNode: any): boolean;
        adjacentBlocks(cutVertex: any): any[];
        directFromRoot(): void;
        root: any;
        directFrom(parent: any, vertex: any): void;
        findPendantCut(): any;
        getOutsideVertex(bNode: any): any;
        getOutsideVertexN(bNode: any, neighborCnode: any): any;
        getBlock(bNode: any): any;
        getCutvertex(cNode: any): any;
        getCnode(cut: any): any;
        mapVertices(vertices: any, map: any): any[];
        mergeBlocks(bnodes: any, parent: any): void;
        setNewParent(vertex: any, parent: any): void;
        removeCnode(cNode: any): void;
        removeBnode(bNode: any): void;
        isCnode(vertex: any): boolean;
        isBnode(vertex: any): boolean;
    }
    import { Graph } from "Graphs/Graph";
}
declare module "Graphs/DualGraph" {
    export default class DualGraph extends Graph {
        constructor(graph: any, embedding: any, cacheIncidentFaces: any, s: any, t: any);
        graph: any;
        embedding: any;
        faces: Face[];
        edgeToFaceMap: Map<any, any>;
        incidentFaces: Map<any, any>;
        faceToVertexMap: Map<any, any>;
        vertexToFaceMap: Map<any, any>;
        splitExternalFace(s: any, t: any): void;
        leftExFace: any;
        leftExVertex: any;
        rightExFace: Face;
        rightExVertex: Vertex;
        getIncidentFaces(v: any): any;
        cacheIncidentFace(v: any, f: any): void;
        getVertices(face: any): Set<any>;
        getFaceVertices(faceList: any): Set<any>;
        getCommonEdge(f1: any, f2: any): any;
        getCommonEdgeMinWeight(f1: any, f2: any): any;
        getOriginalEdge(e: any): any;
        replaceEdge(oldEdge: any, newVertex: any): void;
        splitFace(f: any, newEdge: any): void;
        dgCreateVertex(f: any): Vertex;
        dgCreateEdge(e: any): Edge;
        setFaceIndices(): void;
        left(e: any): any;
        right(e: any): any;
    }
    import { Graph } from "Graphs/Graph";
    import Face from "Graphs/Face";
    import Vertex from "Graphs/Vertex";
    import Edge from "Graphs/Edge";
}
declare module "Graphs/IntervalGraph" {
    export default class IntervalGraph extends Graph {
        constructor(intervals: any);
        intervalVertices: Map<any, any>;
        intervals: any;
        maxWeightedIndependentSet(): any[];
    }
    import { Graph } from "Graphs/Graph";
}
declare module "Graphs/OverlapGraph" {
    export default class OverlapGraph extends Graph {
        constructor(intervals: any);
        intervalVertices: Map<any, any>;
        vertexIntervals: Map<any, any>;
        intervals: any;
        maxIndependentSet(): Set<any>;
        inclusionLevels: Map<any, any>;
        levelVertices: any[];
        setInclusionLevel(vertex: any): any;
        assignVertexToLevel(vertex: any, level: any): void;
    }
    import { Graph } from "Graphs/Graph";
}
declare module "Graphs/Path" {
    export default Path;
    /**
    * @namespace MindFusion.Graphs
    */
    class Path {
        static isNode(obj: any): boolean;
        static isLink(obj: any): boolean;
        /**
        * Initializes a new instance of the Path class.
        * @constructor
        */
        constructor(path: any);
        nodes: any[];
        links: any[];
        items: any[];
        contains(item: any): boolean;
        getWeight(incNodes: any, incLinks: any): number;
        add(link: any, node: any): void;
    }
}
declare module "Graphs/PathFinder" {
    export class PathFinder {
        /**
        * Finds and returns all paths starting from node 'from' and
        * ending at node 'to'. Returns empty collection if no
        * path exists.
        */
        static findAllPaths(graph: any, from: any, to: any): Path[];
        static findPaths(graph: any, from: any, to: any, shortestOnly: any, maxPaths: any): Path[];
        static findShortestPath(graph: any, from: any, to: any, useNodeWeights: any, useLinkWeights: any): Path;
        static findLongestPath(graph: any, from: any, to: any): Path;
        static findCycle(graph: any, participant: any): Path;
        static enumAllCycles(graph: any): any[];
        static enumAllCyclesDirected(graph: any, callbackEnum: any): void;
        static deleted(v: any): any;
    }
    import Path from "Graphs/Path";
}
declare module "Graphs/Layout" {
    /**
    * @class Superclass of graph layout algorithms that defines their common properties.
    */
    export class Layout {
        set anchoring(arg: number);
        /**
        * Gets or sets how to align links to the anchor points of nodes.
        * @type {Anchoring}
        * @summary A member of the LayoutDirection enumeration.
        */
        get anchoring(): number;
        set keepGroupLayout(arg: boolean);
        /**
        * Gets or sets whether to treat each group of attached nodes as a single vertex in the arranged graph.
        * @type {Boolean}
        * @summary true if each group should be processed as an integral graph node, or false otherwise. The default is false.
        */
        get keepGroupLayout(): boolean;
        set multipleGraphsPlacement(arg: number);
        /**
        * Gets or sets how multiple independent graphs in the diagram should be positioned relatively to each other.
        * @type {MultipleGraphsPlacement}
        * @summary A member of the MultipleGraphsPlacement enumeration.
        */
        get multipleGraphsPlacement(): number;
        set margins(arg: number);
        /**
        * Gets or sets the margins' size around individual subgraphs processed by this layout object.
        * @type {Number}
        * @summary A number specifying size of margins around arranged graphs.
        */
        get margins(): number;
        _anchoring: number;
        _keepGroupLayout: boolean;
        _multipleGraphsPlacement: number;
        _margins: number;
        get setsLinkEndPoints(): boolean;
        get setsLinkPoints(): boolean;
        get requiresConnectedGraph(): boolean;
        get requiresSimpleGraph(): boolean;
        get routeRepeatingLinks(): boolean;
        get requiresBezierLinks(): boolean;
        get requiresCascadingLinks(): boolean;
        get requiresHierarchyInfo(): boolean;
        get isStatic(): boolean;
    }
}
declare module "Graphs/BorderedTreeLayout" {
    /**
    * @class Implements algorithms for arranging tree structures.
    * @augments Layout
    */
    export class BorderedTreeLayout extends Layout {
        set levelDistance(arg: number);
        /**
        * Gets or sets the space to leave between adjacent levels of the tree.
        * @type {Number}
        * @summary The space to leave between adjacent levels of the tree.
        */
        get levelDistance(): number;
        set nodeDistance(arg: number);
        /**
        * Gets or sets the space to leave between adjacent nodes on the same level.
        * @type {Number}
        * @summary The space to leave between adjacent nodes on the same level.
        */
        get nodeDistance(): number;
        set keepRootPosition(arg: boolean);
        /**
        * Gets or sets a value indicating whether to keep the root node at its original position.
        * @type {Boolean}
        * @summary true if the root node should be kept at its original position, or false otherwise.
        */
        get keepRootPosition(): boolean;
        set direction(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {LayoutDirection}
        * @summary A member of the LayoutDirection enumeration.
        */
        get direction(): number;
        set linkType(arg: number);
        /**
        * Gets or sets the type of links in the arranged tree.
        * @type {TreeLayoutLinkType}
        * @summary A member of the TreeLayoutLinkType enumeration.
        */
        get linkType(): number;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): any;
        /**
        * @private
        */
        private tree;
        /**
        * @private
        */
        private x;
        /**
        * @private
        */
        private y;
        /**
        * @private
        */
        private rarrange;
        /**
        * Offset a branch of the tree with the specified values.
        * @private
        *
        * @param {Vertex} nodeFrom The root node of the branch to offset.
        * @param {Number} xoff The x-axis offset.
        * @param {Number} yoff The y-axis offset.
        */
        private offsetBranch;
        /**
        * @private
        */
        private isHorizontal;
        /**
        * @private
        */
        private isStraight;
        getType(): any;
        _levelDistance: number;
        _nodeDistance: number;
        _keepRootPosition: boolean;
        _direction: number;
        _linkType: number;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/LayoutUtils" {
    export default LayoutUtils;
    class LayoutUtils {
        static getGraphBounds(graph: any, defaultBounds: any): any;
    }
}
declare module "Graphs/Tools" {
    export function newPoint(x: any, y: any): Point;
    export function bounds(v: any): any;
    export class Tools {
        static GetLFarCenter(node: any, o: any): Point;
        static GetLNearCenter(node: any, o: any): Point;
        static GetBNearCenter(node: any, o: any): Point;
        static GetBFarCenter(node: any, o: any): Point;
        static MoveNode(node: any, x: any, y: any): void;
        static SetLinkPoints(link: any, points: any, ...args: any[]): void;
        static SetLinkPointsA(link: any, points: any): void;
        static GetLinkPoints(link: any): any;
        static Mirror(point: any, origin: any): Point;
        static GetBreadth(node: any, o: any): any;
        static GetBCenter(node: any, o: any): any;
        static GetLength(node: any, o: any): any;
        static GetLCenter(node: any, o: any): any;
        static GetBNear(node: any, o: any): any;
        static GetBFar(node: any, o: any): any;
        static GetLNear(node: any, o: any): any;
        static GetLFar(node: any, o: any): any;
        static GetBNearRect(rect: any, o: any): any;
        static GetBFarRect(rect: any, o: any): any;
        static GetLNearRect(rect: any, o: any): any;
        static GetLFarRect(rect: any, o: any): any;
        static GetB(point: any, o: any): any;
        static GetL(point: any, o: any): any;
        static OffsetL(node: any, offset: any, o: any): void;
        static OffsetOutLinks(links: any, offx: any, offy: any, o: any): void;
    }
    import { Point } from "@mindfusion/drawing";
}
declare module "Graphs/FlowchartLayout" {
    /**
    * @class FlowchartLayout can be used to arrange flowcharts representing program source code.
    * @augments Layout
    */
    export class FlowchartLayout extends Layout {
        set nodeDistance(arg: number);
        /**
        * Gets or sets the distance between consecutive nodes in the flowchart.
        * @type {Number}
        * @summary A numeric value specifying the distance between neighbor nodes in the same sequence.
        */
        get nodeDistance(): number;
        set branchPadding(arg: number);
        /**
        * Gets or sets how much space to leave between adjacent decision branches in the flowchart.
        * @type {Number}
        * @summary A numeric value specifying the distance between adjacent branches.
        */
        get branchPadding(): number;
        set linkPadding(arg: number);
        /**
        * Gets or sets how much space to leave between adjacent back links designating nested loops.
        * @type {Number}
        * @summary A numeric value specifying the distance between adjacent back links.
        */
        get linkPadding(): number;
        set orientation(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {Orientation}
        * @summary A member of the Orientation enumeration.
        */
        get orientation(): number;
        nodeOrder: Map<any, any>;
        progressCounter: number;
        branchings: any[];
        visitedNodes: Map<any, any>;
        postOrder: Map<any, any>;
        topologicalOrder: Map<any, any>;
        searchCounter: number;
        flowchartNodes: Map<any, any>;
        mm: number;
        arrange(graph: any): boolean;
        graph: any;
        placedNodes: any[];
        furthestL: number;
        layoutRect: any;
        composeFlowChart(startNode: any): any;
        composeBlocks(node: any, parentBlock: any, loopDepth: any, onlyNotVisited: any, ignoreMerge: any): any;
        getSequence(block: any): any;
        followedByMergeNode(block: any): boolean;
        getFlowchartNode(node: any): any;
        getStartNodes(): any[];
        getOutgoingDownLinks(node: any): number;
        getIncomingDownLinks(node: any): number;
        getType(): any;
        getOutgoingLoopLinks(node: any): number;
        getIncomingLoopLinks(node: any): number;
        isVisited(node: any): boolean;
        isStartNode(node: any): boolean;
        isEndNode(node: any): boolean;
        inDegree(node: any): any;
        outDegree(node: any): any;
        isBackLink(link: any): boolean;
        isDownLink(link: any): boolean;
        depthFirstSearch(node: any): void;
        topologicalSort(startNode: any, graphOrder: any): Map<any, any>;
        getDownLinks(links: any): any[];
        getTopologicalOrder(): Map<any, any>;
        findPath(link: any, o: any, relaxed: any): Point[];
        segmentsFromPoints(points: any): {
            index: number;
            points: any;
            horizontal(): boolean;
            xint(): any[];
            yint(): any[];
        }[];
        pullLinksApart(links: any): void;
        splitPaths(links: any, horizontal: any): void;
        _branchPadding: number;
        _linkPadding: number;
        _nodeDistance: number;
        _orientation: number;
        dumpGraph(): void;
    }
    import { Layout } from "Graphs/Layout";
    import { Point } from "@mindfusion/drawing";
}
declare module "Graphs/FractalLayout" {
    /**
    * @class The FractalLayout tree layout algorithm places child nodes symmetrically around their parent node.
    * Nodes at the lowest level are arranged directly in a circle around their parent. At the upper level,
    * the already arranged nodes form branches that are arranged in a circle around the new parent node.
    * The algorithm is recursively repeated till the highest level is reached.
    * @augments Layout
    */
    export class FractalLayout extends Layout {
        set root(arg: any);
        /**
        * Gets or sets the node that should be placed at the center of the tree.
        * @type {DiagramNode}
        * @summary The node that should be placed at the center of the tree.
        */
        get root(): any;
        arrange(graph: any): void;
        branchCircles: Map<any, any>;
        measureCircles(node: any): {
            node: any;
            radius: any;
            centerX: any;
            centerY: any;
            childCircles: any[];
        };
        arrangeCircles(circle: any, center: any, angle: any): void;
        getType(): any;
        _root: any;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/LayeredLayout" {
    /**
    * @class Implements a layered graph layout algorithm.
    * This algorithm assigns diagram nodes to distinct horizontal or vertical layers.
    * While arranging the layers, the layout routine seeks to meet the following criteria:
    * - connected nodes must be placed close together;
    * - links must flow in one direction if possible;
    * - links must cross as few layers as possible;
    * - links must not cross other links;
    * @augments Layout
    */
    export class LayeredLayout extends Layout {
        set nodeDistance(arg: number);
        /**
        * Gets or sets the space to leave between adjacent nodes on the same level.
        * @type {Number}
        * @summary The space to leave between adjacent nodes on the same level.
        */
        get nodeDistance(): number;
        set layerDistance(arg: number);
        /**
        * Gets or sets the desired distance between layer axis lines.
        * @type {Number}
        * @summary The desired distance between layer axis lines.
        */
        get layerDistance(): number;
        set direction(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {LayoutDirection}
        * @summary A member of the LayoutDirection enumeration.
        */
        get direction(): number;
        set siftingRounds(arg: number);
        /**
        * Gets or sets the number of iterations to perform when untwining the layout.
        * @type {Number}
        * @summary The number of iterations to perform when untwining the layout.
        */
        get siftingRounds(): number;
        initialMinimizeCrossingsDown: boolean;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): void;
        graph: any;
        layers: any[];
        /**
        * @private
        */
        private setMinDist;
        /**
        * @private
        */
        private getMinDist;
        /**
        * @private
        */
        private computeLeftClasses;
        nodeLeftClass: any;
        /**
        * @private
        */
        private computeRightClasses;
        nodeRightClass: any;
        /**
        * @private
        */
        private computeClasses;
        /**
        * @private
        */
        private placeLeftToRight;
        dump(pos: any): void;
        /**
        * @private
        */
        private placeRightToLeft;
        /**
        * @private
        */
        private assignCoordinates;
        minDistances: any[];
        downNodes: Map<any, any>;
        upNodes: Map<any, any>;
        /**
        * @private
        */
        private adjustDirections;
        /**
        * @private
        */
        private getNeighborOnLayer;
        /**
        * @private
        */
        private placeSequence;
        /**
        * @private
        */
        private placeSingle;
        /**
        * @private
        */
        private combineSequences;
        /**
        * @private
        */
        private placeLeft;
        /**
        * @private
        */
        private placeRight;
        /**
        * @private
        */
        private leftSibling;
        /**
        * @private
        */
        private rightSibling;
        /**
        * @private
        */
        private L;
        /**
        * Move nodes to their barycenters, according to their
        * priority but doing so without any box swapping
        * (i.e. the boxes' order remains the same).
        * @private
        */
        private layout;
        /**
        * @private
        */
        private layoutLayer;
        /**
        * @private
        */
        private moveRight;
        /**
        * @private
        */
        private moveLeft;
        /**
        * @private
        */
        private mapVirtualNode;
        /**
        * @private
        */
        private nodesInLongLink;
        /**
        * @private
        */
        private dummify;
        linkToNodeMap: Map<any, any>;
        nodeToLinkMap: Map<any, any>;
        /**
        * @private
        */
        private dedummify;
        /**
        * Tries to minimize crossings across all levels.
        * @private
        */
        private minimizeCrossings;
        /**
        * Calculates up barycenters and linkCount for the nodes
        * in the layer whose index is specified in the parameter.
        * @private
        */
        private calcUpData;
        /**
        * Calculates down barycenters and linkCount for the nodes
        * in the layer whose index is specified in the parameter.
        * @private
        */
        private calcDownData;
        /**
        * Tries to minimize crossings between layers 'layer' and
        * 'layer' + 1 if down is true and between layers 'layer' - 1
        * and 'layer' if down is false.
        * @private
        */
        private minimizeCrossingsDir;
        /**
        * This method performs a single pass over the graph in an attempt to reduce
        * link crossings through neighbors swapping.
        * @private
        */
        private swapPairs;
        /**
        * Returns the total number of crossings for the links inbetween the specified layers.
        * @private
        */
        private countCrossings;
        getType(): any;
        _nodeDistance: number;
        _layerDistance: number;
        _direction: number;
        _siftingRounds: number;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/SpringLayout" {
    /**
    * @class Implements the Spring-Embedder graph layout algorithm.
    * @augments Layout
    */
    export class SpringLayout extends Layout {
        set nodeDistance(arg: number);
        /**
        * Gets or sets the desired distance between nodes.
        * @type {Number}
        * @summary the desired distance between nodes.
        */
        get nodeDistance(): number;
        set iterations(arg: number);
        /**
        * Gets or sets the number of iterations to run the layout routine.
        * @type {Number}
        * @summary The number of iterations to run the layout routine.
        */
        get iterations(): number;
        /**
        * @private
        */
        private refineStage;
        /**
        * @private
        */
        private initialTemperature;
        /**
        * @private
        */
        private temperature;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): void;
        graph: any;
        width: number;
        height: number;
        /**
        * @private
        */
        private moveToEpsilonCircle;
        /**
        * @private
        */
        private attraction;
        /**
        * @private
        */
        private repulsion;
        /**
        * @private
        */
        private calcRepulsionForce;
        /**
        * @private
        */
        private calcSpringForce;
        /**
        * @private
        */
        private applyForce;
        getType(): any;
        _nodeDistance: number;
        _iterations: number;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/TopologicalLayout" {
    /**
    * @class Implements a topological ordering.
    * The algorithm arranges nodes in a row or a column (depending on the value of the direction property)
    * in such a way that there are as few back links as possible. The links connecting non-adjacent nodes
    * are rendered as arcs. The links connecting adjacent nodes are rendered either as arcs or as straight lines,
    * depending on the bendAdjacentLinks property. The amplitude of the link arcs is proportional to the
    * distance between the connected nodes. All forward links are rendered at one side of the nodes and all
    * back links are rendered at the opposite side. Thus, all bent links follow the same rotation direction.
    * @augments Layout
    */
    export class TopologicalLayout extends Layout {
        set nodeDistance(arg: number);
        /**
        * Gets or sets the desired distance between adjacent nodes.
        * @type {Number}
        * @summary The desired distance between adjacent nodes.
        */
        get nodeDistance(): number;
        set direction(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {LayoutDirection}
        * @summary A member of the LayoutDirection enumeration.
        */
        get direction(): number;
        set bendAdjacentLinks(arg: boolean);
        /**
        * Gets or sets a value indicating whether to bend links connecting adjacent nodes or draw them as straight lines.
        * @type {Boolean}
        * @summary true to bend links connecting adjacent nodes, or false otherwise.
        */
        get bendAdjacentLinks(): boolean;
        mm: number;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): boolean;
        graph: any;
        getType(): any;
        _nodeDistance: number;
        _direction: number;
        _bendAdjacentLinks: boolean;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/TreeLayout" {
    /**
    * @class Implements algorithms for arranging tree structures.
    * @augments Layout
    */
    export class TreeLayout extends Layout {
        set levelDistance(arg: number);
        /**
        * Gets or sets the space to leave between adjacent levels of the tree.
        * @type {Number}
        * @summary The space to leave between adjacent levels of the tree.
        */
        get levelDistance(): number;
        set nodeDistance(arg: number);
        /**
        * Gets or sets the space to leave between adjacent nodes on the same level.
        * @type {Number}
        * @summary The space to leave between adjacent nodes on the same level.
        */
        get nodeDistance(): number;
        set keepRootPosition(arg: boolean);
        /**
        * Gets or sets a value indicating whether to keep the root node at its original position.
        * @type {Boolean}
        * @summary true if the root node should be kept at its original position, or false otherwise.
        */
        get keepRootPosition(): boolean;
        set direction(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {LayoutDirection}
        * @summary A member of the LayoutDirection enumeration.
        */
        get direction(): number;
        set linkType(arg: number);
        /**
        * Gets or sets the type of the links in the arranged tree.
        * @type {TreeLayoutLinkType}
        * @summary A member of the TreeLayoutLinkType enumeration.
        */
        get linkType(): number;
        set enableAssistants(arg: boolean);
        /**
        * Gets or sets a value Indicating whether the "assistant" trait is regarded when performing the layout.
        * @type {Boolean}
        * @summary true if the "assistant" trait is regarded when performing the layout, or false otherwise.
        */
        get enableAssistants(): boolean;
        set compactAssistants(arg: boolean);
        /**
        * Gets or sets a value indicating whether the "assistant" nodes on the same side of a single parent
        * are arranged as close to each other as possible.
        * @type {Boolean}
        * @summary true if the "assistant" nodes on the same side of a single parent
        * are arranged as close to each other as possible, or false otherwise.
        */
        get compactAssistants(): boolean;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): any;
        /**
        * @private
        */
        private hasAssistants;
        /**
        * Calculates the bounding rectangle of the tree branch defined by
        * the specified node. The result is the smallest rectangle containing
        * all children of the specified node and the node itself.
        * @private
        */
        private branchBounds;
        /**
        * Calculate the distance between the branches, whose
        * root nodes are specified as arguments.
        * @private
        *
        * @param {Vertex} node1 The root node of the first branch.
        * @param {Vertex} node2 The root note of the second branch.
        * @returns {Number} The distance between the branches.
        */
        private branchDistance;
        right(vertex: any): any;
        left(vertex: any): number;
        /**
        * Offset a branch of the tree with the specified values.
        * @private
        *
        * @param {Vertex} nodeFrom The root node of the branch to offset.
        * @param {Number} xoff The x-axis offset.
        * @param {Number} yoff The y-axis offset.
        */
        private offsetBranch;
        /**
        * @private
        */
        private isHorizontal;
        /**
        * @private
        */
        private isStraight;
        /**
        * @private
        */
        private intDiv;
        getType(): any;
        _levelDistance: number;
        _nodeDistance: number;
        _keepRootPosition: boolean;
        _direction: number;
        _linkType: number;
        _enableAssistants: boolean;
        _compactAssistants: boolean;
    }
    import { Layout } from "Graphs/Layout";
}
declare module "Graphs/TreeMapLayout" {
    /**
    * @class Performs tree-map layout on a graph.
    * @augments Layout
    */
    export class TreeMapLayout extends Layout {
        set orientation(arg: number);
        /**
        * Gets or sets the orientation of the arranged graph.
        * @type {Orientation}
        * @summary A member of the Orientation enumeration.
        */
        get orientation(): number;
        set squarify(arg: boolean);
        /**
        * Gets or sets a value indicating whether the layout should attempt to keep the dimension ratio of nodes closer to 1.
        * @type {Boolean}
        * @summary true if the layout should attempt to keep the dimension ratio of nodes closer to 1, or false otherwise.
        */
        get squarify(): boolean;
        set padding(arg: number);
        /**
        * Gets or sets the distance between adjacent nodes.
        * @type {Number}
        * @summary The distance between adjacent nodes.
        */
        get padding(): number;
        set layoutArea(arg: Rect);
        /**
        * Gets or sets the rectangle in which the layout will try to arrange nodes.
        * @type {Rect}
        * @summary The rectangle in which the layout will try to arrange nodes.
        */
        get layoutArea(): Rect;
        set containerPadding(arg: number);
        /**
        * Gets or sets the padding inside containers.
        * @type {Number}
        * @summary The padding inside containers.
        */
        get containerPadding(): number;
        minNodeSize: number;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): void;
        weights: Map<any, any>;
        arrangeSquare(nodes: any, layoutArea: any, row: any, parentWeight: any): void;
        doSquarify(children: any, layoutArea: any, row: any, parentWeight: any): void;
        weight(row: any): number;
        subtractPadding(rect: any): void;
        layoutRow(layoutArea: any, row: any, horizontal: any, parentWeight: any): number;
        arrangeSiblings(nodes: any, layoutArea: any, horizontal: any, totalWeight: any): void;
        evalRatio(row: any, sideLen: any, rowArea: any): number;
        calcWeights(root: any): any;
        layOutArea(node: any): any;
        getType(): any;
        _orientation: number;
        _squarify: boolean;
        _padding: number;
        _layoutArea: Rect;
        _containerPadding: number;
    }
    import { Layout } from "Graphs/Layout";
    import { Rect } from "@mindfusion/drawing";
}
declare module "Graphs/DrawingGrid" {
    export default DrawingGrid;
    class DrawingGrid {
        constructor(graph: any, vertexPoints: any, edgePoints: any);
        graph: any;
        vertexPoints: any;
        edgePoints: any;
        cells: {
            has(point: any): boolean;
            get(point: any): any;
            set(point: any, value: any): void;
            delete(point: any): boolean;
            key(point: any): string;
            clear(): void;
            forEach(callbackfn: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void;
            readonly size: number;
            entries(): IterableIterator<[any, any]>;
            keys(): IterableIterator<any>;
            values(): IterableIterator<any>;
            [Symbol.iterator](): IterableIterator<[any, any]>;
            readonly [Symbol.toStringTag]: string;
        };
        bounds: {
            left: any;
            top: any;
            right: any;
            bottom: any;
        };
        columnWidths: Map<any, any>;
        rowHeights: Map<any, any>;
        setCellDimensions(vertexSize: any, padding: any, edgeCellSize: any): void;
        minWidth: Map<any, any>;
        maxWidth: Map<any, any>;
        minHeight: Map<any, any>;
        maxHeight: Map<any, any>;
        columnPositions: Map<any, any>;
        rowPositions: Map<any, any>;
        getPosition(point: any): Point;
        getEdgePointPosition(point: any, edge: any, width: any, height: any): Point;
        updateBounds(point: any): void;
        updateBoundsFromPoints(points: any): void;
        refine(iterations: any): void;
        refineSpace(): void;
        refineCacheEdges(): void;
        refineDegreeOneVertices(): void;
        removeUnusedRows(): void;
        removeUnusedColumns(): void;
        removeFromCell(cell: any, p: any, edge: any, horizontal: any): void;
        refineUTurns(): void;
        removeRedundantBends(): void;
        setSegmentsInRange(e: any, p1: any, includeP1: any, p2: any, includeP2: any): void;
        removeSegmentsFromRange(e: any, p1: any, removeP1: any, p2: any, removeP2: any): void;
        edgeContainsRange(e: any, p1: any, includeP1: any, p2: any, includeP2: any): boolean;
        normalizePath(path: any, e: any, setSegments: any): void;
        setApartOverlappingEdges(): void;
        horizontalEdges: Grid;
        verticalEdges: Grid;
        getBendNeighborPoints(bend: any, column: any, row: any): any;
        bendsToTheLeft(bend: any, column: any, row: any): boolean;
        bendsToTheTop(bend: any, column: any, row: any): boolean;
        setHorizontalEdgesInRange(edges: any, row: any, c1: any, c2: any): void;
        setVerticalEdgesInRange(edges: any, column: any, r1: any, r2: any): void;
        countHorizontalEdgesCrossings(edges: any, row: any, c1: any, c2: any, permutation: any): number;
        countVerticalEdgesCrossings(edges: any, column: any, r1: any, r2: any, permutation: any): number;
        permuteHorizontalEdgeLanes(row: any, c1: any, c2: any, permutation: any): void;
        permuteVerticalEdgeLanes(column: any, r1: any, r2: any, permutation: any): void;
        getCell(column: any, row: any): any;
    }
    namespace DrawingGrid {
        export { Cell };
        export { Rectangle };
        export { Size };
        export { EdgeSegment };
        export { Bend };
        export { PointMap };
        export { PermutationSet };
    }
    import { Point } from "@mindfusion/drawing";
    import { Grid } from "@mindfusion/collections";
    class Cell {
        content: any[];
        add(item: any): void;
        removeEdgeOrBend(e: any, horizontal: any): void;
        countEdges(horizontal: any): number;
        containsVertex(): boolean;
        containsVertexOrBend(): boolean;
        containsEdge(edge: any): boolean;
        containsEdgeSegment(edge: any, horizontal: any): boolean;
        getEdgeSegment(edge: any, horizontal: any): {
            edge: any;
            dx: any;
            dy: any;
            lane: number;
            maxNeighbors: number;
            readonly horizontal: boolean;
        };
        getEdgeBend(edge: any): {
            edge: any;
            horizontalLane: number;
            maxHNeighbors: number;
            verticalLane: number;
            maxVNeighbors: number;
            neighborPoints: any;
        };
        getEdgeLane(edge: any, horizontal: any, neighbors: any): number;
        permuteLanes(permutation: any, horizontal: any): void;
    }
    class Rectangle {
        constructor(left: any, top: any, right: any, bottom: any);
        left: any;
        top: any;
        right: any;
        bottom: any;
    }
    class Size {
        constructor(width: any, height: any);
        width: any;
        height: any;
    }
    class EdgeSegment {
        constructor(edge: any, dx: any, dy: any);
        edge: any;
        dx: any;
        dy: any;
        lane: number;
        maxNeighbors: number;
        get horizontal(): boolean;
    }
    class Bend {
        constructor(edge: any);
        edge: any;
        horizontalLane: number;
        maxHNeighbors: number;
        verticalLane: number;
        maxVNeighbors: number;
        neighborPoints: any;
    }
    class PointMap extends Map<any, any> {
        constructor();
        constructor(entries?: readonly (readonly [any, any])[]);
        constructor(iterable: Iterable<readonly [any, any]>);
        key(point: any): string;
    }
    class PermutationSet {
        constructor(n: any);
        permutations: any[];
        current: number[];
        heapPermute(n: any): void;
        addItem(): void;
        swap(i: any, j: any): void;
        get(i: any): any;
        list(): any[];
    }
}
declare module "Graphs/Representation" {
    /**
    * @namespace MindFusion.Graphs
    */
    export default class Representation {
        constructor(stGraph: any, weighted: any, xOrdering: any, stEmbedding: any);
        stsort: any;
        Y: any;
        s: any;
        t: any;
        d: any;
        X: any;
        left(e: any): any;
        right(e: any): any;
        leftV(v: any): any;
        rightV(v: any): any;
        orig(e: any): any;
        dest(e: any): any;
        origF(f: any): any;
        destF(f: any): any;
        leftMostIncoming(v: any): any;
        leftMostOutgoing(v: any): any;
        rightMostOutgoing(v: any): any;
        getOutEdges(v: any): any[];
        getInEdges(v: any): any[];
        getOutMedian(v: any): any;
        getInMedian(v: any): any;
        newHSegment(): {
            y: number;
            x1: number;
            x2: number;
        };
        newVSegment(): {
            x: number;
            y1: number;
            y2: number;
        };
        get dualGraph(): any;
        get source(): any;
        get sink(): any;
        get topologicalSort(): any;
    }
}
declare module "Graphs/ConstrainedVisibility" {
    export default class ConstrainedVisibility extends Representation {
        constructor(stGraph: any, vpaths: any);
        edgeToPathMap: Map<any, any>;
        pathToVertexMap: Map<any, any>;
        hSegments: Map<any, any>;
        vSegments: Map<any, any>;
        get vertexSegments(): Map<any, any>;
        get edgeSegments(): Map<any, any>;
    }
    import Representation from "Graphs/Representation";
}
declare module "Graphs/OrthogonalLayout" {
    /**
    * @class Implements orthogonal graph layout algorithm.
    * Each link is drawn as a chain of alternating horizontal and vertical segments.
    * Nodes are placed in a way that facilitates few links bends and crossings.
    * @augments Layout
    */
    export class OrthogonalLayout extends Layout {
        set refine(arg: boolean);
        /**
        * Gets or sets a value indicating whether to refine the layout.
        * @type {Boolean}
        * @summary True to refine the layout, or false otherwise.
        */
        get refine(): boolean;
        set padding(arg: number);
        /**
        * Gets or sets a value indicating how much space to leave between nodes in adjacent lanes.
        * @type {Number}
        * @summary The space to leave between nodes in adjacent lanes.
        */
        get padding(): number;
        set minLaneSize(arg: number);
        /**
        * Gets or sets a value indicating the minimum size of a lane.
        * @type {Number}
        * @summary The minimum size of a lane.
        */
        get minLaneSize(): number;
        mm: number;
        /**
        * Applies the layout to the specified graph.
        * @param {Graph} graph The graph to arrange.
        */
        arrange(graph: any): boolean;
        graph: any;
        vertexPoints: Map<any, any>;
        edgePoints: Map<any, any>;
        drawingGrid: DrawingGrid;
        applyGrid(grid: any): boolean;
        alignEndsToNode(edge: any): void;
        getType(): any;
        reverseRange(array: any, l: any, r: any): void;
        mergePaths(v: any, c: any, rs: any, re: any, step: any): void;
        mergePath(edges: any, stgEdgePoints: any): any[];
        _refine: boolean;
        _padding: number;
        _minLaneSize: number;
    }
    import { Layout } from "Graphs/Layout";
    import DrawingGrid from "Graphs/DrawingGrid";
}
declare module "@mindfusion/graphs" {
    import { AssistantPosition, AssistantType, Anchoring, LayoutDirection, TreeLayoutLinkType, MultipleGraphsPlacement, Orientation } from "Graphs/Enum";
    export { AssistantPosition, AssistantType, Anchoring, LayoutDirection, TreeLayoutLinkType, MultipleGraphsPlacement, Orientation };
    export { Graph } from "Graphs/Graph";
    export { PathFinder } from "Graphs/PathFinder";
    export { BorderedTreeLayout } from "Graphs/BorderedTreeLayout";
    export { FlowchartLayout } from "Graphs/FlowchartLayout";
    export { FractalLayout } from "Graphs/FractalLayout";
    export { LayeredLayout } from "Graphs/LayeredLayout";
    export { SpringLayout } from "Graphs/SpringLayout";
    export { TopologicalLayout } from "Graphs/TopologicalLayout";
    export { TreeLayout } from "Graphs/TreeLayout";
    export { TreeMapLayout } from "Graphs/TreeMapLayout";
    export { OrthogonalLayout } from "Graphs/OrthogonalLayout";
}

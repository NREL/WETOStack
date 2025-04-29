
import { ref } from 'vue'
import type { Node, Edge } from '@vue-flow/core'


// Export nodes
export const nodes = ref<Node[]>([
    {
        id: "1",
        type: "decision",
        data: {
            a: "Hybrid Energy",
            b: "Wind Energy",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "2",
        type: "decision",
        data: {
            a: "Turbine components",
            b: "Farm",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "3",
        type: "decision",
        data: {
            a: "Regression-based",
            b: "Bottom-up cost model",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "4",
        type: "decision",
        data: {
            a: "Balance of Station",
            b: "Operational costs",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "5",
        type: "decision",
        data: {
            a: "Onshore",
            b: "Offshore",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "6",
        type: "decision",
        data: {
            a: "One project",
            b: "Many projects",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "7",
        type: "decision",
        data: {
            a: "Regression-based",
            b: "Bottom-up cost model",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },


    {
        id: "8",
        data: {
            label: "HOPP (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "9",
        data: {
            label: "SAM (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "10",
        data: {
            label: "NREL CSM (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "11",
        data: {
            label: "WISDEM",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "12",
        data: {
            label: "WOMBAT",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "13",
        data: {
            label: "WAVES",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "14",
        data: {
            label: "LandBOSSE",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "15",
        data: {
            label: "CORAL",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "16",
        data: {
            label: "NRWAL",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "17",
        data: {
            label: "ORBIT",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
]);

// Export edges
export const edges = ref<Edge[]>([
    { id: "e1-2", source: "1", target: "2", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e1-8", source: "1", target: "8", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e1-9", source: "1", target: "9", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-3", source: "2", target: "3", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-4", source: "2", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-9", source: "3", target: "9", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-10", source: "3", target: "10", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-11", source: "3", target: "11", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-5", source: "4", target: "5", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-6", source: "5", target: "6", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-7", source: "6", target: "7", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-12", source: "4", target: "12", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-13", source: "4", target: "13", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-14", source: "5", target: "14", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-13", source: "5", target: "13", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-15", source: "6", target: "15", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-16", source: "8", target: "16", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-17", source: "8", target: "17", label: "b", type: "decisionEdge", data: { reachable: false } },
]);

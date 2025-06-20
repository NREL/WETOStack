
import { ref } from 'vue'
import type { Node, Edge } from '@vue-flow/core'


// Export nodes
export const nodes = ref<Node[]>([
    {
        id: "1",
        type: "decision",
        data: {
            a: "Turbine",
            b: "Farm",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "2",
        type: "decision",
        data: {
            a: "Turbine",
            b: "Blade",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "3",
        type: "decision",
        data: {
            a: "2-D Sections",
            b: "3-D Blade",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "4",
        type: "decision",
        data: {
            a: "Detailed",
            b: "Conceptual",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "5",
        type: "decision",
        data: {
            a: "Time-Domain",
            b: "Freq-Domain",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "6",
        type: "decision",
        data: {
            a: "Steady-State",
            b: "Time-Domain",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "7",
        type: "decision",
        data: {
            a: "With floating lines/cables",
            b: "Without",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },


    {
        id: "8",
        data: {
            label: "pyNuMAD (HF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "9",
        data: {
            label: "WISDEM (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "10",
        data: {
            label: "WEIS (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "11",
        data: {
            label: "RAFT (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "12",
        data: {
            label: "WindSE (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "13",
        data: {
            label: "Ard (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "14",
        data: {
            label: "FAD (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "15",
        data: {
            label: "FLORIS (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },

]);

// Export edges
export const edges = ref<Edge[]>([
    { id: "e1-2", source: "1", target: "2", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-3", source: "2", target: "3", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-4", source: "3", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-8", source: "3", target: "8", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-4", source: "2", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-5", source: "4", target: "5", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-9", source: "4", target: "9", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-10", source: "5", target: "10", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-11", source: "5", target: "11", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e1-6", source: "1", target: "6", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-7", source: "6", target: "7", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-12", source: "6", target: "12", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-13", source: "6", target: "13", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-14", source: "7", target: "14", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-15", source: "7", target: "15", label: "b", type: "decisionEdge", data: { reachable: false } },
]);

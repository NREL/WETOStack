
import { ref } from 'vue'
import type { Node, Edge } from '@vue-flow/core'


// Export nodes
export const nodes = ref<Node[]>([
    {
        id: "1",
        type: "decision",
        data: {
            a: "Hybrids",
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
            a: "Time Domain",
            b: "Steady state",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "3",
        type: "decision",
        data: {
            a: "Farm",
            b: "Turbine",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "4",
        type: "decision",
        data: {
            a: "Time Domain",
            b: "Steady state",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "5",
        type: "decision",
        data: {
            a: "Simulation",
            b: "Measured Data",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "6",
        type: "decision",
        data: {
            a: "Controller Simulation",
            b: "Controller Design",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "7",
        type: "decision",
        data: {
            a: "Model the ABL",
            b: "No ABL model",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },


    {
        id: "8",
        data: {
            label: "Hercules (HF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "9",
        data: {
            label: "HOPP (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "10",
        data: {
            label: "ROSCO (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "11",
        data: {
            label: "FLORIS (LF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "12",
        data: {
            label: "FLASC (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "13",
        data: {
            label: "WHOC (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "14",
        data: {
            label: "AMR-Wind (HF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "15",
        data: {
            label: "FAST.Farm (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },

]);

// Export edges
export const edges = ref<Edge[]>([
    { id: "e1-2", source: "1", target: "2", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e1-3", source: "1", target: "3", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-8", source: "2", target: "8", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-9", source: "2", target: "9", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-4", source: "3", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-10", source: "3", target: "10", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-5", source: "4", target: "5", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e4-11", source: "4", target: "11", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-6", source: "5", target: "6", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e5-12", source: "5", target: "12", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-7", source: "6", target: "7", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e6-13", source: "6", target: "13", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-14", source: "7", target: "14", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e7-15", source: "7", target: "15", label: "b", type: "decisionEdge", data: { reachable: false } },
]);


import { ref } from 'vue'
import type { Node, Edge } from '@vue-flow/core'


// Export nodes
export const nodes = ref<Node[]>([
    {
        id: "1",
        type: "decision",
        data: {
            a: "Mesoscale (region)",
            b: "Microscale (farm)",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "2",
        type: "decision",
        data: {
            a: "ABL",
            b: "Synthetic turbulence",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },
    {
        id: "3",
        type: "decision",
        data: {
            a: "ABL",
            b: "ABL + Ocean",
            state: null,
            reachable: false
        },
        position: { x: 0, y: 0},
    },


    {
        id: "4",
        data: {
            label: "ERF (HF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "5",
        data: {
            label: "Turbsim (MF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },
    {
        id: "6",
        data: {
            label: "AMR-Wind (HF)",
            reachable: false
        },
        position: { x: 0, y: 0},
        type: "tool",
    },

]);

// Export edges
export const edges = ref<Edge[]>([
    { id: "e1-2", source: "1", target: "2", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e1-4", source: "1", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-3", source: "2", target: "3", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e2-5", source: "2", target: "5", label: "b", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-4", source: "3", target: "4", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-6", source: "3", target: "6", label: "a", type: "decisionEdge", data: { reachable: false } },
    { id: "e3-6", source: "3", target: "6", label: "b", type: "decisionEdge", data: { reachable: false } },
]);

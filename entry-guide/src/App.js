import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import { Background, BackgroundVariant } from '@xyflow/react';
import { Controls, ControlButton } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { nodes, edgesTemplate } from './graphData';

const App = () => {
  // State to track the "Yes" or "No" state for each node
  const [nodeStates, setNodeStates] = useState({
    // 1: "0",
    // 2: "0",
  });

  // Function to toggle the state of a node
  const toggleState = (nodeId) => {
    setNodeStates((prevStates) => {
      const newState = prevStates[nodeId] === "0" ? "1" : "0";
      console.log(`Node ${nodeId} state: ${newState}`);
      return {
        ...prevStates,
        [nodeId]: newState,
      };
    });
  };

  // Helper function to determine reachable nodes
  const getReachableNodes = (startNodeId) => {
    const reachable = new Set();
    const queue = [startNodeId];

    while (queue.length > 0) {
      const current = queue.shift();
      reachable.add(current);

      // Find outgoing edges with label matching the current node state
      edgesTemplate.forEach((edge) => {
        if (edge.source === current && edge.label === nodeStates[edge.source] && !reachable.has(edge.target)) {
          queue.push(edge.target);
        }
      });
    }

    return reachable;
  };

  // Get reachable nodes starting from the root node (assumed to be "1")
  const reachableNodes = getReachableNodes("1");

  // Update node styles dynamically
  const updatedNodes = nodes.map((node) => {

    const isReachable = reachableNodes.has(node.id);

    // If end-node, then style it as a software link
    // Add active styling if reachable
    if (node.isEndNode) {
      return {
        ...node,
        data: {
          label: (
            <div
              style={{
                // padding: "8px 12px",
                backgroundColor: isReachable ? "blue" : "#f5f5f5",
                // border: "1px solid #ddd",
                // borderRadius: "4px",
                textAlign: "center",
              }}
            >
              {node.data.label}
            </div>
          ) 
        }
      }
    };

    // If reachable, then style is "on"
    // If not reachable, then style is "off"
    return {
      ...node,
      data: {
        label: (
          <>
            {edgesTemplate.some((edge) => edge.source === node.id) ? (
              <button
                onClick={() => toggleState(node.id)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: isReachable ? "#28a745" : "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                {`${node.data.label} (${nodeStates[node.id] || ""})`}
              </button>
            ) : (
              <div
                style={{
                  padding: "8px 12px",
                  backgroundColor: isReachable ? "#28a745" : "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                {node.data.label}
              </div>
            )}
          </>
        ),
      },
    };
  });

  // Update edge styles dynamically
  const updatedEdges = edgesTemplate.map((edge) => {
    const isLeftEdge = edge.label === "0";
    const sourceState = nodeStates[edge.source];
    return {
      ...edge,

      // These use the node as a switch to toggle the style of the edge.
      // You have to use isLeftEdge to determine the appropriate state check for the 0 or 1 edges.
      animated: isLeftEdge ? sourceState === "0" : sourceState === "1",
      style: {
        stroke: isLeftEdge ?
            sourceState === "0" ? "green" : "#b1b1b7"
          : sourceState === "1" ? "green" : "#b1b1b7",
      },
    };
  });

  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Entry Guide: Estimate Performance</h1>
      <ReactFlow nodes={updatedNodes} edges={updatedEdges} fitView>
        <Background color="#000" variant={BackgroundVariant.Cross} /> <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;

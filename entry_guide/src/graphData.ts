
// Export nodes
export const nodes = [
    {
        id: "1",
        type: "default",
        data: { label: "Farm or Turbine" },
        position: { x: 0, y: 0 },
    },
    {
        id: "2",
        data: { label: "Time domain or steady state?" },
        position: { x: -200, y: 150 },
    },
    {
        id: "3",
        data: { label: "Just power or loads too?" },
        position: { x: -200, y: 300 },
    },
    {
        id: "4",
        data: { label: "Floating array?" },
        position: { x: 0, y: 250 },
    },
    {
        id: "5",
        data: { label: "Simulate ABL or synthetic turbulence?" },
        position: { x: -200, y: 450 },
    },
    {
        id: "6",
        data: { label: "Resolve geometry or actuator methods?" },
        position: { x: -200, y: 600 },
    },
    {
        id: "7",
        data: { label: "Variable or steady state?" },
        position: { x: 200, y: 150 },
    },
    {
        id: "8",
        data: { label: "Do you want to do design or batch?" },
        position: { x: 200, y: 300 },
    },


    {
        id: "9",
        data: { label: "FLORIS" },
        position: { x: -50, y: 350 },
        isEndNode: true,
    },
    {
        id: "10",
        data: { label: "FAD" },
        position: { x: 75, y: 400 },
        isEndNode: true,
    },
    {
        id: "11",
        data: { label: "WindSE or Ard" },
        position: { x: -100, y: 400 },
        isEndNode: true,
    },
    {
        id: "12",
        data: { label: "FAST.Farm" },
        position: { x: -100, y: 550 },
        isEndNode: true,
    },
    {
        id: "13",
        data: { label: "ExaWind Stack" },
        position: { x: -100, y: 700 },
        isEndNode: true,
    },
    {
        id: "14",
        data: { label: "AMR-Wind or ERF" },
        position: { x: -200, y: 750 },
        isEndNode: true,
    },
    {
        id: "15",
        data: { label: "WISDEM" },
        position: { x: 150, y: 250 },
        isEndNode: true,
    },
    {
        id: "16",
        data: { label: "WEIS" },
        position: { x: 150, y: 450 },
        isEndNode: true,
    },
    {
        id: "17",
        data: { label: "OpenFAST" },
        position: { x: 200, y: 500 },
        isEndNode: true,
    },
];

// Export edges
export const edgesTemplate = [
    { id: "e1-2", source: "1", target: "2", label: "0" },
    { id: "e1-7", source: "1", target: "7", label: "1" },
    { id: "e2-3", source: "2", target: "3", label: "0" },
    { id: "e2-4", source: "2", target: "4", label: "1" },
    { id: "e3-5", source: "3", target: "5", label: "0" },
    { id: "e3-11", source: "3", target: "11", label: "1" },
    { id: "e5-6", source: "5", target: "6", label: "0" },
    { id: "e5-12", source: "5", target: "12", label: "1" },
    { id: "e6-14", source: "6", target: "14", label: "0" },
    { id: "e6-13", source: "6", target: "13", label: "1" },
    { id: "e4-9", source: "4", target: "9", label: "0" },
    { id: "e4-10", source: "4", target: "10", label: "1" },
    { id: "e7-15", source: "7", target: "15", label: "0" },
    { id: "e7-8", source: "7", target: "8", label: "1" },
    { id: "e8-16", source: "8", target: "16", label: "0" },
    { id: "e8-17", source: "8", target: "17", label: "1" },
];


# Capabilities

This dashboard outlines typical workflows and capabilities involved
in wind energy system design and analysis using the WETO Software Suite.


## System design

System design involves the high-level preliminary design of the power
generation systems and their connection to the grid. Additionally, cost
models are incorporated here to identify an initial estimate of the cost
of energy.

```{mermaid}
mindmap
    root((System))
        Blade, tower, turbine components
            Turbine controls
            Farm layout
                Farm controls
        Balance of station
        Cost
```

## Wind turbine and wind farm aerodynamics

The detailed design of wind turbine components and wind farms is detailed
here. This process typically involves modeling system components at varying
levels of fidelity while moving through the design space.

```{mermaid}
flowchart TD
    A["ExaWind
    RANS/LES hybrid, time accurate, blade resolved"]

    B["AMR-Wind
    LES, time accurate, actuator line"]

    C["WindSE
    RANS, time accurate, actuator disk"]

    D["OpenFAST/FAST.Farm
    Engineering models, time accurate, BEM, beam models"]

    E["FLORIS
    Analytical, steady state"]

    A --- B
    B --- C
    C --- D
    D --- E
```

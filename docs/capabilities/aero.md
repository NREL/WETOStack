(aero)=
# Wind Turbine and Wind Farm Aerodynamics

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

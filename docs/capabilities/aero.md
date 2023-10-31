(aero_capability)=
# Wind Turbine and Wind Farm Aerodynamics

Being driven by the wind, the study of wind turbines and wind farms is
inherently highly dependent on aerodynamic modeling capability.
This topic area is highly coupled to much of the research and development
work within the wind energy industry.
Aerodynamic design is used to optimize the performance of wind turbines,
balance the loads in high wind or high turbulence events to minimize
damage to the whole system and improve reliability, and improve
the energy recovery downstream of a wind turbine to minimize the wake
loss throughout the wind farm.
In general, aerodynamics models choose between fidelity and computational
cost, and practitioners should also find the balance that fits their
needs.

## Software Stack

The study of aerodynamics spans various technical areas and applications.

```{mermaid}
mindmap
    root("Aerodynamics")
        ps(Engineering-fidelity Physics Models)
            OpenFAST
            FAST.Farm

        hfm(High Fidelity Models)
            AMR Wind
            Nalu Wind
            ERF
            WindSE

        do(" ")

        ctrl(Controls)
            FLORIS

        ra(" ")
        cost(" ")
        wild(" ")
        om(" ")
```

In addition to separating by application, this software stack can be divided
by fidelity.
The following graphic roughly orders this tool suite from high fidelity at the top
to low fidelity at the bottom.

```{mermaid}
flowchart TD

    A["Nalu-Wind
    LES, time accurate, blade resolved"]

    B["AMR-Wind
    LES, time accurate, actuator line"]

    C["WindSE
    RANS, LES, time accurate, actuator disk"]

    D["OpenFAST/FAST.Farm
    Engineering models, time accurate, BEM-derived models + FVW"]

    E["FLORIS
    Analytical, steady state"]

    subgraph ExaWind
    A
    B
    end

    A ~~~ C
    B ~~~ C

    C ~~~ D
    D ~~~ E
```

**ExaWind**, part of the DOE Exascale Computing Project, has developed wind energy simulation
software capable of leveraging state of the art supercomputers achieves exascale
performance (10^18 floating point operations per second).
This software is made up primarily of **AMR-Wind** and **Nalu-Wind**.
AMR-Wind is a large eddy simulation (LES) code that uses adaptive mesh refinement
through AMReX to resolve the wind farm flow field.
Nalu-Wind is another LES code that uses a fixed, unstructured mesh to resolve the
flow field around the blade.
ExaWind brings the two codes together through advanced numerical methods to
efficiently model the large spread in spatial and temporal scales in the full wind farm.
ExaWind couples with OpenFAST to simulate fluid-structure interactions (FSI).

**WindSE** is a wind farm systems engineering tool that uses a variety of
computational fluid dynamics (CFD) models to simulate the wind farm flow field
including Reynolds-averaged Navier-Stokes (RANS), LES, and an actuator disk model.
It is coupled to optimization algorithms for use in wind farm layout design.

**OpenFAST** includes actuator disk-based aerodynamics models including Blade Element
Momentum theory (BEMT) and Dynamic BEM (DBEMT).
**FAST.Farm** is a farm-level simulator building on OpenFAST, and it includes
a free vortex wake (FVW) model to simulate the wake of wind turbines within
a farm.
OpenFAST also includes TurbSim, a stochastic turbulence model, and InflowWind,
a tool for generating wind inflow conditions or OpenFAST simulations.

**FLORIS** is a low fidelity simulator that includes steady state analytical
wind turbine wake models.
While this is explicitly not aerodynamics, this tool is useful for
rapidly estimating and optimizing wind farm layout and controls.

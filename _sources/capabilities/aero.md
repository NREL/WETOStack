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
    root("WETO Software Portfolio")
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

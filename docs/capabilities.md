
# Capabilities

This dashboard outlines typical workflows and capabilities involved
in wind energy system design and analysis using the WETO Software Suite.



````{card}
Plant Performance
^^^
Plant performance analysis involves the simulation of power production
for the collection of wind turbines in a wind farm given the atmospheric
conditions over a period of time. The result is typically represented
as Annual Energy Production (AEP) in Megawatthours (MWh), Gigawatthours (GWh),
or Terrawatthours (TWh).
````

````{card}
Wake Loss
^^^
Wake loss modeling is the study of turbine-turbine interactions via wind turbine
wakes. Typically, the interaction mechanism is energy loss due to a shadow in the
wind speed behind a wind turbine, but other mechanisms such as influence on
turbulence are also considered.
````

````{card}
Rotor Optimization
^^^
Rotor optimization focuses on the iterative design of the rotor components
such as blades and control systems. This process typically involves modeling
the aerodynamic loads and subsequent elastic response of the blade. This
aero-elastic model is used within an optimization algorithm to arrive at
rotor designs that meet a set of requirements.
````

````{card}
Control Co-Design
^^^
Control co-design is a method for advanced system designs that incorporate
control systems into the structural and aerodynamic designs. The hardware
and software systems are designed in a coupled sense rather than individually.
The result is a blade that may only be operable or optimal with a specific
controller, but the performance can be much greater than a decoupled design.
````

````{card}
[](system_design)
^^^
System design involves the high-level preliminary design of the power
generation systems and their connection to the grid. Additionally, cost
models are incorporated here to identify an initial estimate of the cost
of energy.
````

````{card}
[](aero)
^^^
The detailed design of wind turbine components and wind farms is detailed
here. This process typically involves modeling system components at varying
levels of fidelity while moving through the design space.
````

## Wireframe prototype

The capabilities dashboard will contain a list of high level capabilities made up of components
of the WETO software stack. It will describe each capability as they relate to the software
used to complete it. This should not be a tutorial on doing each of these things, but it should
give an idea of the tools that are required to do it. It will give an intuition on which
models are related, interconnected, and perform certain tasks.

```{image} ./images/capabilities_listing_design.png
:alt: capabilities
:align: center
```

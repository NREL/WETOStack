
(wake_loss_wfc_capability)=
# Wake Loss and Wind Farm Controls.

Characterizing and quantifying wind farm wake losses requires modeling
the atmospheric conditions, turbine performance, and the impact on
wind turbine wakes throughout a wind farm.
This type of modeling can be computationally expensive, so this topic
benefits from a hierarchy of models with varying levels of fidelity.
High fidelity models employing computational fluid dynamics couple with
turbine models of varying levels of fidelity to simulate the wake.
Mid-fidelity models employ engineering models of the wake such as
free vortex wake models, and they also couple with different fidelities
of turbine models.
At the lowest fidelity, analytical steady-state wake models provide a
statistical representation of the wake while allowing for rapid
simulations. Analytical models typically represent the turbine as
a solid obstruction in the flow field.

This topic has high crossover with [](aero_capability).
See that topic area for more information.

## Software Stack

```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("Wake Loss Modeling")
        ps(Engineering-fidelity Physics Models)
            OpenFAST
            FAST.Farm

        hfm(High Fidelity Models)
            AMR Wind
            Nalu Wind
            WindSE

        do(" ")

        ctrl(Controls)
            ROSCO
            FLORIS
            FLASC
            hercules

        ra(" ")

        cost(" ")

        wild(" ")

        om(" ")
```

At the core, **OpenFAST** provides turbine models of varying levels of fidelity
making it a good central point for wind turbine wake modeling.
It allows for controlling the wind turbine via a controller external to the
software, so active control can be modeled, as well.
Further, **ROSCO** provides a tool suite to automatically tune the controller
parameters for a given turbine model.

In the high-fidelity regime, **AMR-Wind** and **Nalu-Wind** provide large eddy simulation
models that can be coupled with OpenFAST.
These can resolve the wake in great detail including tip vortices, wake mixing,
and turbulence effects.
Additionally, dynamic wake effects can be accurately captured.
**WindSE** is a RANS model that includes it's own turbine model.
**Hercules** is a wind farm emulator that allows for wind farm developers and operators
to investigate the potential impact of wind farm controls techniques.

In the mid-fidelity regime, **FAST.Farm** provides a free vortex wake model
that can be coupled with OpenFAST.
This model provides a computationally efficient method for simulating
the performance of wind turbine blades with high flexibility that fall
outside the scope of the blade element momentum theory.

In the low-fidelity regime, **FLORIS** provides a set of analytical steady-state
wake models varying from simple top-hat wake shape (Jensen) to more complex
statistical wake models (Gauss, Cumulative-Curl). Being a steady-state model,
FLORIS allows modelers to capture instantaneous wake effects for a given
atmospheric condition and control setting.
**FLASC** is a post-processing tool that incorporates FLORIS to compare with
field data.

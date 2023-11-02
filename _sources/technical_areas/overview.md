(technical_areas)=
# Technical Areas

The WETO software portfolio can be subdivided into key technical areas that
cover the breadth of wind energy system design and analysis.
The technical areas and their associated tools are listed here.

````{card}
Engineering-fidelity Physics Models
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(Engineering-fidelity Physics Models)
            OpenFAST
            FAST.Farm
            MoorPy
            wtDigiTwin
            ANBA4
            RAFT

        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(" ")
        ra(" ")
        cost(" ")
        wild(" ")
        om(" ")
```

- OpenFAST https://github.com/openfast/openfast - Multi-physics, multi-fidelity tool for simulating the coupled dynamic response of wind turbines.
- FAST.Farm https://github.com/openfast/openfast - Mid-fidelity wind farm simulator that uses OpenFAST as a turbine model.
- MoorPy https://github.com/nrel/moorpy - Quasi-static mooring model and a suite of associated functions for mooring system analysis.
- wtDigiTwin https://github.com/ebranlard/wtDigiTwin - Digital twin model for wind turbine containing a set of structural dynamics tools, beam theory, FEM and more.
- RAFT https://github.com/WISDEM/RAFT - Library for frequency-domain analysis of floating wind turbines.
- ANBA4 https://github.com/ANBA4/anba4 - Computes the 6x6 stiffness and mass matrices of arbitrarily complex composite beam cross sections.
````


````{card}
High Fidelity Models
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(High Fidelity Models)
            AMR Wind
            Nalu Wind
            OpenTurbine
            ERF
            WindSE
            pyNuMAD
        do(" ")
        ctrl(" ")
        ra(" ")
        cost(" ")
        wild(" ")
        om(" ")
```

- AMR-Wind https://github.com/exawind/amr-wind - Massively parallel, block-structured adaptive-mesh, incompressible flow solver for wind turbine and wind farm simulations.
- Nalu-Wind https://github.com/exawind/nalu-wind - Generalized, unstructured, massively parallel, incompressible flow solver for wind turbine and wind farm simulations.
- OpenTurbine https://github.com/exawind/openturbine - Wind turbine structural dynamics simulation code for land-based and offshore wind turbines specifically designed to couple with low-fidelity aerodynamic/hydrodynamic models (OpenFAST) and high-fidelity computational fluid dynamics (CFD) models (ExaWind).
- ERF https://github.com/erf-model/ERF - Compressible Navier-Stokes solver on an Arakawa C-grid for large-scale weather modeling.
- WindSE https://github.com/nrel/windse - Python package that uses a FEniCS backend to perform wind farm simulations and optimization. 
- pyNuMAD https://github.com/sandialabs/pyNuMAD - Simplifies the process of creating a three-dimensional model of a wind turbine blade by providing an intermediary between raw blade data and analytical platforms (ANSYS, Cubit, OpenFAST, etc).
````


````{card}
Design & Optimization
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(Design & Optimization)
            WEIS
            WISDEM
            HOPP
            SONATA
        ctrl(" ")
        ra(" ")
        cost(" ")
        wild(" ")
        om(" ")
```

- WEIS https://github.com/wisdem/weis - Wind Energy with Integrated Servo-control performs multifidelity co-design of wind turbines by combining multiple NREL-developed tools to enable design optimization of floating offshore wind turbines.
- WISDEM https://github.com/wisdem/wisdem - Set of wind turbine and plant cost and energy production models along with financial models for assessing overall wind plant cost of energy.
- HOPP https://github.com/NREL/HOPP - Assesses optimal designs for the deployment of utility-scale hybrid energy plants, particularly considering wind, solar and storage.
- SONATA https://github.com/ptrbortolotti/SONATA - Toolbox for Multidisciplinary Rotor Blade Design Environment for Structural Optimization and Aeroelastic Analysis.
````


````{card}
Controls
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(Controls)
            ROSCO
            FLORIS
            FLASC
            hercules
            moa_python
        ra(" ")
        cost(" ")
        wild(" ")
        om(" ")
```

- ROSCO https://github.com/NREL/ROSCO - Reference controller with industry-standard functionality and generic tuning
- FLORIS https://github.com/nrel/floris - Controls-focused wind farm simulation software incorporating steady-state engineering wake models into a performance-focused Python framework.
- FLASC https://github.com/nrel/flasc - Suite of analysis tools for SCADA data filtering, analysis, wind farm model validation, field experiment design, and field experiment monitoring.
- hercules https://github.com/nrel/hercules:
- moa_python https://github.com/nrel/moa_python:
````


````{card}
Resource Assessment
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(" ")
        ra(Resource Assessment)
            DW TAP
        cost(" ")
        wild(" ")
        om(" ")
```
````


````{card}
Cost Models
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(" ")
        ra(" ")
        cost(Cost Models)
            LandBOSSE
            HybridBOSSE
            ORBIT
            CORAL
            NRWAL
            WOMBAT
        wild(" ")
        om(" ")
```
````


````{card}
Wild Life Impact
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(" ")
        ra(" ")
        cost(" ")
        wild(Wild Life Impact)
            SSRS
        om(" ")
```
````


````{card}
Operation and Maintenance
^^^
```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

mindmap
    root("WETO Software Portfolio")
        ps(" ")
        hfm(" ")
        do(" ")
        ctrl(" ")
        ra(" ")
        cost(" ")
        wild(" ")
        om(Operation and Maintenance)
            OpenOA
```
````

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
- RAFT https://github.com/WISDEM/RAFT - Library for frequency-domain analysis of floating wind turbines.
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
            WindSE
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
- WindSE https://github.com/nrel/windse - Python package that uses a FEniCS backend to perform wind farm simulations and optimization. 
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
- hercules https://github.com/nrel/hercules - Wind farm emulator for controls testing with LES models.
- moa_python https://github.com/nrel/moa_python - Wind farm performance post processing and analysis tool.
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

- DW TAP https://github.com/NREL/dw-tap-app - A simple tool for cost-effectively and accurately assessing wind resources without having to physically take direct measurements in the field.
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

        wild(" ")
        om(" ")
```

- LandBOSSE https://github.com/WISDEM/LandBOSSE - A systems engineering tool that estimates the balance-of-system (BOS) costs associated with installing utility scale wind plants (10, 1.5 MW turbines or larger)
- HybridBOSSE https://github.com/NREL/HybridBOSSE - A tool for estimating BOS costs for hybrid power plants that share infrastructure.
- ORBIT https://github.com/WISDEM/ORBIT - A model to study the cost and times associated with Offshore Wind Balance of System (BOS) processes.
- CORAL https://github.com/NREL/CORAL - Concurrent ORBIT for shared Resource Analysis Library
- NRWAL https://github.com/NREL/NRWAL - A library of offshore wind cost equations (plus new energy technologies like marine hydro!).
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

- SSRS https://github.com/NREL/SSRS - A stochastic agent-based model for predicting raptor movements through an orographic updraft field estimated using the spatially varying wind conditions and ground features (altitude, slope, aspect).
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
            WOMBAT
```

- WOMBAT https://github.com/WISDEM/WOMBAT - A library to simulate the operation and maintenance phase (O&M) of distributed, land-based, and offshore wind farms using a discrete event simulation framework.
- OpenOA https://github.com/nrel/openoa - A framework for working with large time-series data from wind plants, such as SCADA.
````

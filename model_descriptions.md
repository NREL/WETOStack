This is a list of WETO-supported software projects.

## GitHub orgs
- https://github.com/nrel
- https://github.com/exawind
- https://github.com/openfast
- https://github.com/wisdem
- https://github.com/erf-model
- https://github.com/sandialabs

## Physics simulators
FLORIS
- FLORIS
- FLASC
- emu
- moa

OpenFAST
- OpenFAST
- FAST.Farm: extends the capabilities of OpenFAST to provide multiphysics-based engineering simulation of wind farms: land-based, fixed-bottom offshore, and floating offshore.
- python-toolbox
- matlab-toolbox
- weio

OWENS: End to end aero-servo-elastic preprocessing, simulation, and post processing for VAWTs and crossflow turbines.

SOWFA: Simulator for Wind Farm Applications
Release Date: June 27, 2016
This is a modular tool for simulating wind plant aerodynamics with computational fluid dynamics and turbine structural and control response to the incoming flow.

ExaWind
- Nalu-Wind
- AMR-Wind

WISDEM: NREL's core systems engineering software tool, integrates a full set of wind turbine and plant models for holistic system analysis.
- WEIS
    - pCrunch
- AeroelasticSE

WindSE: WindSE is an open-source computational fluid dynamics code designed for wind turbine or wind farm simulations, optimization, and uncertainty quantification studies. Written in Python using the FEniCS finite element library, WindSE includes tools to automatically obtain adjoint gradients for efficient optimization and sensitivity analysis in high dimensions.

CCBlade
Release Date: June 26, 2016
This is a blade element momentum method for analyzing wind turbine aerodynamic performance that is robust (guaranteed convergence), fast (superlinear convergence rate), and smooth (continuously differentiable).

ROSCO
ROSCO Toolbox
ERF

ADAMS2AD: The MSC.ADAMS-to-AeroDyn (ADAMS2AD) interface is a software package for simulating the coupled dynamic response of horizontal-axis wind turbines.

BladeFS: Blade Fatigue Static (BladeFS) is a MATLAB script that was developed to determine loads and deflections associated with fatigue and static structural testing of wind turbine blades using matrix based finite element analysis.

HARP_Opt: Horizontal Axis Rotor Performance Optimization (HARP_Opt) utilizes a multiple-objective genetic algorithm and blade-element momentum theory flow model to design horizontal-axis wind and hydrokinetic turbine rotors.

NAFNoise: NREL AirFoil Noise (NAFNoise) is a program that predicts the noise of any airfoil shape for five different types of noise sources.

PROPID: PROP Inverse Design (PROPID) is aerodynamic design software developed by the University of Illinois at Urbana-Champaign. You can use it to design rotors.

DrivePy
Release Date: June 26, 2016
DrivePy is physics-based drivetrain model that sizes drivetrain components based on aerodynamic and operational loads for use in a systems engineering model. It also calculates costs based on empirical data collected by NREL's National Wind Technology Center.

DW TAP: Distributed Wind Tools Assessing Performance Computational Framework
Release Date: Sept. 11, 2020
DW TAP supports the distributed wind (small-scale wind turbine) industry, particularly with respect to siting and resource assessment. The computational framework is the public access point and synthesis of these tools, providing open source implementations, an API for ease of access by third-party implementations, a reference implementation, and documentation.

JacketSE
Release Date: June 26, 2016
This is a module for static hydrodynamic, aerodynamic, and structural design and analysis of wind turbine jacket and towers within the Systems Engineering toolbox.

KiteFAST
Release Date: Aug. 16, 2018
KiteFAST is a simulator for airborne wind energy systems based on NREL's OpenFAST whole turbine simulator. KiteFAST is a multi-physics engineering tool for modeling the coupled aero-servo-elastic dynamics of airborne wind energy systems, i.e., a wind-energy kite.

MAFRIT: Multi-Area Frequency Response Integration Tool
Release Date: March 17, 2020
MAFRIT integrates primary frequency response (turbine governor control) with secondary frequency response (automatic generation control). It simulates power system dynamic response in full time spectrum with variable time steps from millisecond to minutes to hours and days. Capable of simulating normal and event conditions, this tool can represent real power system operations and thus evaluate the primary and secondary reserves adequacy.

Nacelle Systems Engineering Model and Hub Systems Engineering Model
Release Date: June 26, 2016
nacelleSE and hubSE are models that size wind turbine hub system and drivetrain components based on key turbine design parameters and load inputs from a rotor model.

pBEAM: Polynomial Beam Element Analysis Module
Release Date: June 26, 2016
pBEAM is a finite element code for beam-like structures. The methodology uses Euler Bernoulli beam elements with 12 degrees of freedom (three translation and three rotational at each end of the element).

PyFrame3DD
Release Date: June 26, 2016
This module allows Frame3DD to interact with codes developed within the Systems Engineering WIDEM toolbox.

RAFT: Response Amplitudes of Floating Turbines
Release Date: July 8, 2022
RAFT is a Python code for frequency-domain analysis of floating wind turbines. RAFT works in the frequency domain to provide efficient computations of a floating wind system's response spectra, accounting for platform hydrodynamics, quasi-static mooring reactions, rotor aerodynamics, and linearized control. It can be used to calculate response amplitude operators, power spectral densities, mean/static properties, and response metrics based on mean and root-mean-square values of each output. 

RotorSE
Release Date: June 26, 2016
This is a module for static aerodynamic and structural analysis of wind turbine rotors.

TowerSE
Release Date: June 26, 2016
This is a module for static aerodynamic and structural analysis of wind turbine towers.

Turbine_costSE: Turbine Cost Systems Engineering Model
Release Date: June 26, 2016
turb_costSE is a set of models that link wind turbine component masses (and a few other key variables) to component costs.

WPGNN and PLayGen: Wind Plant Graph Neural Network and Plant Layout Generator
Release Date: May 5, 2022
WPGNN is the graph neural network machine learning-based surrogate model and software that provides a streamlined approximation of wind plant wake models. It can rapidly estimate the energy production of the plant and turbines for any arbitrarily sized wind plant and layout under any inflow condition. The included plant layout generator can produce random realizations of realistic wind plant layouts from one of the four canonical styles: cluster, single string, multiple string, or parallel string. 

wtDigiTwin: Wind Turbine Digital Twin
Release Date: Feb. 1, 2021
wtDigiTwin provides a digital twin solution for wind turbine applications. wtDigiTwin estimates loads, motions, and environmental conditions for an operating wind turbine. The program uses supervisory control and data acquisition measurements as inputs, together with a wind turbine model.


## Design

G2Aero: separable shape tensors for aerodynamic applications
Release Date: April 20, 2022
G2Aero is a flexible and practical tool for parametrizing and perturbing 2D airfoils and 3D blades. The code uses a representation of discrete shapes defined by ordered sequences of landmarks as separable tensors. It implements all necessary mathematical transformations to build a novel representation of shape through product manifolds, specifically with the Grassmannian and symmetric positive definite space.

Gear-SCouP
Release Date: Oct. 18, 2013
Gear-SCouP is an analytical model for the rating analysis of articulated spline coupling designs. Articulated splines are commonly used in the planetary stage of wind turbine gearboxes as the means of transmitting the driving torque while improving load-sharing. Direct measurement of spline loads and performance is extremely challenging because of limited accessibility and spline design standards are limited. For a given torque and shaft misalignment, Gear-SCouP quickly yields physical insights into relationships between the spline design parameters and resulting loads, bending, contact, and shear stresses, and safety factors considering various heat treatment methods.

HOPP: Hybrid Optimization and Performance Platform
Release Date: Nov. 14, 2019
This software assesses optimal designs for the deployment of utility-scale hybrid energy plants, particularly considering wind, solar, and storage.

INN Airfoil Tools
Release Date: May 17, 2022
This software package contains code to perform airfoil inverse shape design using a sparsified invertible neural network model. This is a specialized deep learning architecture that enables both network weights to be shared to evaluate forward or inverse passes through the network. As a design tool, this network allows practitioners to specify aerodynamic and structural properties and generate shapes that satisfy those properties. 

WISDEM/dakota_driver
Release Date: July 17, 2013
This is an OpenMDAO driver for DAKOTA (Design Analysis Kit for Optimization and Terascale Applications). The code connects the Sandia National Laboratory's C++-based DAKOTA optimization and analysis tool with NASA's Python-based OpenMDAO systems engineering framework. It allows DAKOTA to be used as an openMDAO "driver. DAKOTA contains an array of advanced sensitivity, uncertainty quantification, and optimization methods. These are now available in a "pluggable" way to any OpenMDAO-based workflow.



## Grid load and demand models

dGen: The Distributed Generation Market Demand (dGen™) model simulates customer adoption of distributed energy resources, including wind energy, for residential, commercial, and industrial entities in the United States or other countries through 2050.
- https://www.nrel.gov/analysis/dgen/

dsgrid: NREL's demand-side grid (dsgrid) model harnesses decades of sector-specific (including wind) energy modeling expertise to create comprehensive electricity load data sets at high temporal, geographic, sectoral, and end-use resolution to understand current and future U.S. electricity load for power systems analyses.
- https://www.nrel.gov/analysis/dsgrid.html

REopt: The REopt web tool allows users to evaluate the economic viability of distributed wind energy and other renewable energy sources, identify system sizes and dispatch strategies to minimize energy costs, and estimate how long a system can sustain critical load during a grid outage.

reV: The Renewable Energy Potential (reV) model model is a first-of-its-kind detailed spatiotemporal modeling assessment tool that empowers users to calculate renewable energy capacity, generation, and cost based on geospatial intersection with grid infrastructure and land-use characteristics. Available as open source since February 2020, the reV model currently supports wind turbine technologies. 
- https://www.nrel.gov/gis/renewable-energy-potential.html

reVX: The Renewable Energy Potential Exchange Tool
Release Date: March 2, 2020
reVX is a complementary tool set that enables the extraction, translation, and loading of reV results into formats required by downstream models such as RPM, ReEDS, and PLEXOS.

rex: Resource Extraction Tool
Release Date: April 6, 2020
rex includes tools developed for reV and reVX related to the efficient access of, extraction from, and computation on NREL's renewable resource data sets.


MAGMA: Multi-Area Grid Metrics Analyzer
Release Date: July 17, 2017
The MAGMA software package is created in the R scripting language that reads a SQL database and outputs tables and figures of important data. The SQL database is created by another R package called "rplexos"ùand uses the .zip solution file output by PLEXOS, which is commercially available production cost modeling software.

## Cost models
LandBOSSE
HybridBOSSE
ORBIT
CORAL
NRWAL
WOMBAT
JEDI (more macro than software)
ORCA

LandOpExSE
Release Date: June 26, 2016
This is a cost model for operational expenditures for land-based wind plants.

CREST: Cost of Renewable Energy Spreadsheet Tool
- https://www.nrel.gov/analysis/crest.html

OpenOA: A standardized tool for producing operational analyses of wind power plants, OpenOA identifies and analyzes the drivers of wind farm performance. The first open-source software tool of its kind, OpenOA helps wind industry professionals make more accurate predictions and more informed decisions in their work, thereby reducing investment risk.
- https://www.nrel.gov/wind/openoa.html

FUSED-Wind: Framework for Unified Systems Engineering and Design of Wind Plants Cost Models and Case Analyzer
Release Date: June 26, 2016
These are cost and case analyzer components of the FUSED-Wind software. These are small pieces of code that define interfaces between software to do wind plant cost of energy and analysis of load cases for an aeroelastic code.

Marmot
Release Date: Sept. 1, 2021
Marmot is a data formatting and visualization tool for production cost modeling results. It provides an efficient way to view PLEXOS production cost modeling results quickly while creating publication-ready figures and data tables.

NREL_CSM: NREL Wind Energy Cost and Scaling Model
Release Date: June 26, 2016
NREL_CSM is a set of models that provides an overall cost of energy analysis for the wind plant.



## Preprocessors
AirfoilPrep: AirfoilPrep is a preprocessor for generating airfoil tables for AeroDyn.

AirfoilPrep.py
Release Date: June 26, 2016
This is a Python module for preprocessing and evaluating aerodynamic airfoil data, primarily for wind turbine applications.


BModes: BModes is a finite-element code that provides dynamically coupled modes for a beam.

IECWind: IECWind is a utility program used to create wind files for InflowWind-based programs.

Modes: Modes generates mode shapes for wind turbine towers and blades.

NuMAD: NuMAD is a standalone, GUI pre-processor for ANSYS finite element analysis software.

PreComp: PreComp is a code that provides span-variant structural properties for composite blades.

SS_Fitting: SS_Fitting is a MATLAB toolbox designed to provide a state-space model based on the WAMIT output files.

TurbSim: TurbSim is a stochastic, full-field, turbulence simulator primarily for use with InflowWind-based simulation tools.


## Postprocessors
Crunch: Crunch is a software utility that performs several types of post-processing analyses for one or more files.

GenStats: GenStats is a fairly simple utility that generates statistics for one or more files.

GPP: GPP (pronounced "jeep") is a general-purpose postprocessor for wind turbine data analysis.

MBC: MBC is a set of MATLAB scripts that performs multi-blade coordinate (MBC) transformation on wind turbine system models.

MCrunch: MCrunch is a MATLAB-based postprocessor for wind turbine data analysis.

MExtremes: MExtremes (pronounced em-extremes) is a set of MATLABscripts that generate extreme-event tables for one or more time series.

MLife: MLife (pronounced em-life) is a set of MATLAB scripts that calculate fatigue life and statistics for one or more time series.


## Wild Life Impact

SSRS: The Stochastic Soaring Raptor Simulator (SSRS) is designed to predict movements of soaring raptors (such as golden eagles) with the goal of determining potential negative interactions between soaring raptors and wind turbines.
- https://github.com/NREL/SSRS


## Other

CELAVI: Circular Economy Lifecycle Assessment and Visualization Framework
- https://www.nrel.gov/analysis/celavi.html

CEWAM: Circular Economy Wind Agent-based Model
Release Date: Oct. 29, 2021
CEWAM is an agent-based model built with the MESA Python library. The tool enables users to study circular economy strategies by simulating actors' decisions.

GDX-pandas
Release Date: June 26, 2016
This package builds on existing software to provide clear and simple interfaces between GDX files and pandas DataFrames.

L-TERRA
Release Date: Aug. 22, 2018
This software is an error-reduction algorithm for lidar-measured turbulence. The algorithm is trained using colocated lidar and meteorological tower data. Lidar-measured parameters—such as wind speed, shear, and turbulence intensity—are used to predict the difference between the lidar- and tower-measured turbulence intensity.

NaTGenPD: National Thermal Generator Performance Database
Release Date: Sept. 17, 2019
NaTGenPD is a code base for the processing (extraction, cleaning, filtering, and fitting) and analysis of Environmental Protection Agency continuous emission monitoring system data to produce a National Thermal Generator Performance Database.

OSOS: Open Source Ops and Statistics
Release Date: Oct. 27, 2021
OSOS is a software package that helps track usage and operations statistics for open source software.

R2PD: Renewable Resource and Power Data Tool
Release Date: Sept. 25, 2018
R2PD is a power system modeler-friendly tool for downloading wind and solar power and forecast data.

Reegle Tagging API (CKAN Extension)
Release Date: June 26, 2016
The software consists of a CKAN extension to an existing REEGLE Tagging API.

sup3r: Super Resolution for Renewable Resource Data
Release Date: July 6, 2022
The sup3r software uses generative adversarial networks to create synthetic high-resolution wind and solar spatiotemporal data from coarse low-resolution inputs.

turbine-models
Release Date: Dec. 22, 2020
This GitHub repo hosts an archive of turbine models already in the public domain. It includes mainly tabular power and thrust (when available) curve data in .csv files, other technical data, and documentation and references built with Sphinx/GitHub Pages. There is a script called "curve_parser.py" to assist with the parsing of power and thrust curves, but this repo is mostly a central location for turbine model data.

WIND Toolkit Highly Scalable Data Service API Examples
Release Date: Dec. 26, 2017
The WIND Toolkit Highly Scalable Data Service API examples provide example Python software notebooks and a javascript visualization that demonstrate use of the HSDS API using data for NREL's WIND Toolkit.

WindView
Release Date: Oct. 2, 2018
WindView is a situational awareness and decision support platform that provides grid operators with knowledge of the state and performance of wind power on their system. WindView does not provide any data; it is a visualization platform that requires users to provide their own data.

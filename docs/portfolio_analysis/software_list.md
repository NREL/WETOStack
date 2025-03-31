
(software_listing)=
# Software Listing

While this is intended to be a complete list, it is likely missing some projects.
Please [suggest an edit](https://github.com/nrel/wetostack/edit/main/docs/portfolio_analysis/software_list.md)
if any information here is incorrect.
Including a software in this list requires the following:
- Entry in [software_attributes/database_list.yaml](https://github.com/NREL/WETOStack/blob/main/software_attributes/database_list.yaml)
- Entry in [docs/software_list.md](https://github.com/NREL/WETOStack/blob/main/docs/portfolio_analysis/software_list.md)
- Corresponding YAML file in [software_attributes/database](https://github.com/NREL/WETOStack/tree/main/software_attributes/database)

All of these tools relate to some aspect of wind energy development from component design
and analysis to cost modeling and supply chain analysis.

## Active support

These projects are actively supported and funded by WETO. Click "*Show All*" to get started.

```{div} my-class
<div id="myBtnContainer">
  <button class="filterBtn" onclick="filterSelection('all')"> Show all</button>
  <button class="filterBtn" onclick="filterSelection('turbine')">Turbine</button>
  <button class="filterBtn" onclick="filterSelection('farm')">Farm</button>
  <button class="filterBtn" onclick="filterSelection('component')">Component</button>
  <button class="filterBtn" onclick="filterSelection('high')">High Fidelity</button>
  <button class="filterBtn" onclick="filterSelection('middle')">Middle Fidelity</button>
  <button class="filterBtn" onclick="filterSelection('low')">Low Fidelity</button>
  <button class="filterBtn" onclick="filterSelection('time')">Time Domain</button>
  <button class="filterBtn" onclick="filterSelection('freq')">Freq Domain</button>
  <button class="filterBtn" onclick="filterSelection('steady')">Steady State</button>
  <button class="filterBtn" onclick="filterSelection('cost')">Cost</button>
  <button class="filterBtn" onclick="filterSelection('design')">Design</button>
  <button class="filterBtn" onclick="filterSelection('controls')">Controls</button>
  <button class="filterBtn" onclick="filterSelection('resource')">Resource</button>
  <button class="filterBtn" onclick="filterSelection('operations')">O&M</button>
  <button class="filterBtn" onclick="filterSelection('wildlife')">Wildlife</button>
  <button class="filterBtn" onclick="filterSelection('grid')">Grid</button>
  <button class="filterBtn" onclick="filterSelection('wisdem')">WISDEM Modules</button>
  <button class="filterBtn" onclick="filterSelection('openfast')">OpenFAST Modules</button>
  <button class="filterBtn" onclick="filterSelection('exawind')">ExaWind Modules</button>
  <button class="filterBtn" onclick="filterSelection('prepost')">Pre/Post-processing</button>
</div>

<!-- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) -->
<div class="container">
  <a href="https://github.com/openfast/openfast"><div class="filterDiv turbine middle time openfast">OpenFAST</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv farm middle time">FAST.Farm</div></a>
  <a href="https://github.com/wisdem/raft"><div class="filterDiv turbine middle freq">RAFT</div></a>
  <a href="https://github.com/sandialabs/OWENS.jl"><div class="filterDiv turbine middle time">OWENS</div></a>
  <a href="https://github.com/exawind"><div class="filterDiv farm turbine high time exawind">ExaWind</div></a>
  <a href="https://github.com/exawind/amr-wind"><div class="filterDiv farm high time exawind">AMR-Wind</div></a>
  <a href="https://github.com/exawind/nalu-wind"><div class="filterDiv turbine high time exawind">NALU-Wind</div></a>
  <a href="https://github.com/exawind/openturbine"><div class="filterDiv turbine high time exawind">OpenTurbine</div></a>
  <a href="https://github.com/erf-model/ERF"><div class="filterDiv farm high time resource">ERF</div></a>
  <a href="https://github.com/sandialabs/pyNuMAD"><div class="filterDiv component high time">pyNuMAD</div></a>
  <a href="https://github.com/wisdem/weis"><div class="filterDiv turbine low middle time freq design">WEIS</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv turbine low steady design cost wisdem">WISDEM</div></a>
  <a href="https://github.com/nrel/windse"><div class="filterDiv farm middle time design">WindSE</div></a>
  <a href="https://github.com/nrel/hopp"><div class="filterDiv turbine low steady design">HOPP</div></a>
  <a href="https://github.com/wisdem/sonata"><div class="filterDiv component middle steady design">SONATA</div></a>
  <a href="https://github.com/nrel/rosco"><div class="filterDiv component middle time controls">ROSCO</div></a>
  <a href="https://github.com/nrel/floris"><div class="filterDiv farm low steady controls">FLORIS</div></a>
  <a href="https://github.com/nrel/flasc"><div class="filterDiv farm operations middle time controls">FLASC</div></a>
  <a href="https://github.com/nrel/hercules"><div class="filterDiv farm middle high time controls">hercules</div></a>
  <a href="https://github.com/nrel/dw-tap-app"><div class="filterDiv time resource">DW TAP</div></a>
  <a href="https://github.com/wisdem/landbosse"><div class="filterDiv cost farm wisdem">LandBOSSE</div></a>
  <a href="https://github.com/wisdem/orbit"><div class="filterDiv cost farm wisdem">ORBIT</div></a>
  <a href="https://github.com/wisdem/wombat"><div class="filterDiv cost farm wisdem operations">WOMBAT</div></a>
  <a href="https://github.com/nrel/coral"><div class="filterDiv cost farm">CORAL</div></a>
  <a href="https://github.com/nrel/nrwal"><div class="filterDiv cost farm">NRWAL</div></a>
  <a href="https://github.com/nrel/openoa"><div class="filterDiv farm turbine operations">OpenOA</div></a>
  <a href="https://github.com/nrel/ssrs"><div class="filterDiv farm wildlife">SSRS</div></a>
  <a href="https://github.com/nrel/moorpy"><div class="filterDiv component wisdem steady low">MoorPy</div></a>
  <a href="https://github.com/nrel/pcrunch"><div class="filterDiv middle time prepost">pCrunch</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">CCBlade</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">DrivetrainSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">FixedBottomSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">pyFrame3DD</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">RotorSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low">TowerSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv farm wisdem steady low">PlantFinanceSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv component wisdem steady low prepost">PreComp</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv turbine wisdem steady low cost">NREL CSM</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">AeroDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">BeamDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">ElastoDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">HydroDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">IceDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">InflowWind</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">SeaState</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">MoorDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">ServoDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv component middle time openfast">SubDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv farm middle time openfast">OLAF</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv farm middle time openfast">TurbSim</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv middle time openfast prepost">OpenFAST_IO</div></a>
  <a href="https://github.com/openfast/matlab_toolbox"><div class="filterDiv middle time openfast prepost">Matlab Tools</div></a>
  <a href="https://github.com/nrel/windtools"><div class="filterDiv high time prepost">windtools</div></a>
  <a href="https://github.com/nrel/dgen"><div class="filterDiv grid">dGen</div></a>
  <a href="https://github.com/dsgrid/dsgrid"><div class="filterDiv grid">dsgrid</div></a>
  <a href="https://github.com/nrel/REopt.jl"><div class="filterDiv grid">REopt</div></a>
  <a href="https://github.com/nrel/rev"><div class="filterDiv grid">reV</div></a>
  <a href="https://github.com/nrel/revx"><div class="filterDiv grid">reVX</div></a>
  <a href="https://github.com/nrel/rex"><div class="filterDiv grid">rex</div></a>
  <a href="https://github.com/nrel/magma"><div class="filterDiv grid">MAGMA</div></a>
  <a href="https://github.com/nrel/reeds-2.0"><div class="filterDiv grid">ReEDS</div></a>
  <a href="https://github.com/nrel/sup3r"><div class="filterDiv time resource">Super Resolution</div></a>
  <a href="https://www.nrel.gov/grid/wind-toolkit.html"><div class="filterDiv time resource">Wind Toolkit</div></a>
</div>
```

## Related projects

- CELAVI: https://github.com/NREL/celavi
- CEWAM: https://github.com/NREL/CEWAM
- GDX-pandas: https://github.com/NREL/gdx-pandas
- L-TERRA: https://github.com/NREL/L-TERRA
- NaTGenPD: https://github.com/NREL/NaTGenPD
- OSOS: https://github.com/NREL/osos
- R2PD: https://github.com/Smart-DS/R2PD
- Reegle Tagging API (CKAN Extension): https://github.com/REEEP/ckanext-climate-tagger
- WindView: https://github.com/windview/client

## GitHub organizations

The following GitHub organizations house some of the software projects supported by WETO:
- https://github.com/nrel
- https://github.com/exawind
- https://github.com/openfast
- https://github.com/wisdem
- https://github.com/erf-model
- https://github.com/sandialabs

## Other status

These projects are either funded outside of WETO, are not actively funded, or are deprecated.

- KiteFAST: https://github.com/openfast/kitefast
- MAFRIT: https://github.com/NREL/MAFRIT
- pBEAM: https://github.com/WISDEM/pBEAM
- CACTUS: https://github.com/sandialabs/CACTUS
- WEC-Sim/MOST: https://github.com/WEC-Sim/WEC-Sim and http://www.morenergylab.polito.it/most/
- SOWFA: https://github.com/nrel/sowfa
- NuMAD: https://github.com/sandialabs/NuMAD
- moa_python: https://github.com/nrel/moa_python
- MMC-WRF: https://github.com/a2e-mmc/WRF
- G2Aero: https://github.com/NREL/G2Aero
- Gear-SCouP: https://github.com/NREL/GEAR-SCouP
- WISDEM/dakota_driver: https://github.com/WISDEM/dakota_driver
- WPGNN and PLayGen: https://github.com/NREL/WPGNN
- FUSED-Wind: https://github.com/FUSED-Wind/fusedwind
- HybridBOSSE: https://github.com/NREL/HybridBOSSE - A tool for estimating BOS costs for hybrid power plants that share infrastructure.
- ADAMS2AD: The MSC.ADAMS-to-AeroDyn (ADAMS2AD) interface is a software package for simulating the coupled dynamic response of horizontal-axis wind turbines.
- BladeFS: Blade Fatigue Static (BladeFS) is a MATLAB script that was developed to determine loads and deflections associated with fatigue and static structural testing of wind turbine blades using matrix based finite element analysis.
- HARP_Opt: Horizontal Axis Rotor Performance Optimization (HARP_Opt) utilizes a multiple-objective genetic algorithm and blade-element momentum theory flow model to design horizontal-axis wind and hydrokinetic turbine rotors.
- NAFNoise: NREL AirFoil Noise (NAFNoise) is a program that predicts the noise of any airfoil shape for five different types of noise sources.
- PROPID: PROP Inverse Design (PROPID) is aerodynamic design software developed by the University of Illinois at Urbana-Champaign. You can use it to design rotors.
- DrivePy: DrivePy is physics-based drivetrain model that sizes drivetrain components based on aerodynamic and operational loads for use in a systems engineering model. It also calculates costs based on empirical data collected by NREL's National Wind Technology Center.
- JacketSE: This is a module for static hydrodynamic, aerodynamic, and structural design and analysis of wind turbine jacket and towers within the Systems Engineering toolbox.
- Nacelle Systems Engineering Model and Hub Systems Engineering Model: nacelleSE and hubSE are models that size wind turbine hub system and drivetrain components based on key turbine design parameters and load inputs from a rotor model.
- LandOpExSE: This is a cost model for operational expenditures for land-based wind plants.
- INN Airfoil Tools: This software package contains code to perform airfoil inverse shape design using a sparsified invertible neural network model. This is a specialized deep learning architecture that enables both network weights to be shared to evaluate forward or inverse passes through the network. As a design tool, this network allows practitioners to specify aerodynamic and structural properties and generate shapes that satisfy those properties. 
- CREST: Cost of Renewable Energy Spreadsheet Tool
- AirfoilPrep: AirfoilPrep is a preprocessor for generating airfoil tables for AeroDyn. https://github.com/WISDEM/AirfoilPreppy
- BModes: BModes is a finite-element code that provides dynamically coupled modes for a beam.
- IECWind: IECWind is a utility program used to create wind files for InflowWind-based programs.
- Modes: Modes generates mode shapes for wind turbine towers and blades.
- SS_Fitting: SS_Fitting is a MATLAB toolbox designed to provide a state-space model based on the WAMIT output files.
- Crunch: Crunch is a software utility that performs several types of post-processing analyses for one or more files.
- GenStats: GenStats is a fairly simple utility that generates statistics for one or more files.
- GPP: GPP (pronounced "jeep") is a general-purpose postprocessor for wind turbine data analysis.
- MBC: MBC is a set of MATLAB scripts that performs multi-blade coordinate (MBC) transformation on wind turbine system models.
- MCrunch: MCrunch is a MATLAB-based postprocessor for wind turbine data analysis.
- MExtremes: MExtremes (pronounced em-extremes) is a set of MATLABscripts that generate extreme-event tables for one or more time series.
- MLife: MLife (pronounced em-life) is a set of MATLAB scripts that calculate fatigue life and statistics for one or more time series.


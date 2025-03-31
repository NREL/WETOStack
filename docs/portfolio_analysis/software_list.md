
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
  <button class="filterBtn isOn" id="all" onclick="filterSelection('all')"> Show all</button>
  <button class="filterBtn isOff" id="turbine" onclick="filterSelection('turbine')">Turbine</button>
  <button class="filterBtn isOff" id="farm" onclick="filterSelection('farm')">Farm</button>
  <button class="filterBtn isOff" id="component" onclick="filterSelection('component')">Component</button>
  <button class="filterBtn isOff" id="high" onclick="filterSelection('high')">High Fidelity</button>
  <button class="filterBtn isOff" id="middle" onclick="filterSelection('middle')">Middle Fidelity</button>
  <button class="filterBtn isOff" id="low" onclick="filterSelection('low')">Low Fidelity</button>
  <button class="filterBtn isOff" id="time" onclick="filterSelection('time')">Time Domain</button>
  <button class="filterBtn isOff" id="freq" onclick="filterSelection('freq')">Freq Domain</button>
  <button class="filterBtn isOff" id="steady" onclick="filterSelection('steady')">Steady State</button>
  <button class="filterBtn isOff" id="cost" onclick="filterSelection('cost')">Cost</button>
  <button class="filterBtn isOff" id="design" onclick="filterSelection('design')">Design</button>
  <button class="filterBtn isOff" id="controls" onclick="filterSelection('controls')">Controls</button>
  <button class="filterBtn isOff" id="resource" onclick="filterSelection('resource')">Resource</button>
  <button class="filterBtn isOff" id="operations" onclick="filterSelection('operations')">O&M</button>
  <button class="filterBtn isOff" id="wildlife" onclick="filterSelection('wildlife')">Wildlife</button>
  <button class="filterBtn isOff" id="grid" onclick="filterSelection('grid')">Grid</button>
  <button class="filterBtn isOff" id="wisdem" onclick="filterSelection('wisdem')">WISDEM Modules</button>
  <button class="filterBtn isOff" id="openfast" onclick="filterSelection('openfast')">OpenFAST Modules</button>
  <button class="filterBtn isOff" id="exawind" onclick="filterSelection('exawind')">ExaWind Modules</button>
  <button class="filterBtn isOff" id="prepost" onclick="filterSelection('prepost')">Pre/Post-processing</button>
</div>

<!-- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) -->
<div class="container">
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all turbine middle time openfast">OpenFAST</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all farm middle time">FAST.Farm</div></a>
  <a href="https://github.com/wisdem/raft"><div class="filterDiv all turbine middle freq">RAFT</div></a>
  <a href="https://github.com/sandialabs/OWENS.jl"><div class="filterDiv all turbine middle time">OWENS</div></a>
  <a href="https://github.com/exawind"><div class="filterDiv all farm turbine high time exawind">ExaWind</div></a>
  <a href="https://github.com/exawind/amr-wind"><div class="filterDiv all farm high time exawind">AMR-Wind</div></a>
  <a href="https://github.com/exawind/nalu-wind"><div class="filterDiv all turbine high time exawind">NALU-Wind</div></a>
  <a href="https://github.com/exawind/openturbine"><div class="filterDiv all turbine high time exawind">OpenTurbine</div></a>
  <a href="https://github.com/erf-model/ERF"><div class="filterDiv all farm high time resource">ERF</div></a>
  <a href="https://github.com/sandialabs/pyNuMAD"><div class="filterDiv all component high time">pyNuMAD</div></a>
  <a href="https://github.com/wisdem/weis"><div class="filterDiv all turbine low middle time freq design">WEIS</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all turbine low steady design cost wisdem">WISDEM</div></a>
  <a href="https://github.com/nrel/windse"><div class="filterDiv all farm middle time design">WindSE</div></a>
  <a href="https://github.com/nrel/hopp"><div class="filterDiv all turbine low steady design">HOPP</div></a>
  <a href="https://github.com/wisdem/sonata"><div class="filterDiv all component middle steady design">SONATA</div></a>
  <a href="https://github.com/nrel/rosco"><div class="filterDiv all component middle time controls">ROSCO</div></a>
  <a href="https://github.com/nrel/floris"><div class="filterDiv all farm low steady controls">FLORIS</div></a>
  <a href="https://github.com/nrel/flasc"><div class="filterDiv all farm operations middle time controls">FLASC</div></a>
  <a href="https://github.com/nrel/hercules"><div class="filterDiv all farm middle high time controls">hercules</div></a>
  <a href="https://github.com/nrel/dw-tap-app"><div class="filterDiv all time resource">DW TAP</div></a>
  <a href="https://github.com/wisdem/landbosse"><div class="filterDiv all cost farm wisdem">LandBOSSE</div></a>
  <a href="https://github.com/wisdem/orbit"><div class="filterDiv all cost farm wisdem">ORBIT</div></a>
  <a href="https://github.com/wisdem/wombat"><div class="filterDiv all cost farm wisdem operations">WOMBAT</div></a>
  <a href="https://github.com/nrel/coral"><div class="filterDiv all cost farm">CORAL</div></a>
  <a href="https://github.com/nrel/nrwal"><div class="filterDiv all cost farm">NRWAL</div></a>
  <a href="https://github.com/nrel/openoa"><div class="filterDiv all farm turbine operations">OpenOA</div></a>
  <a href="https://github.com/nrel/ssrs"><div class="filterDiv all farm wildlife">SSRS</div></a>
  <a href="https://github.com/nrel/moorpy"><div class="filterDiv all component wisdem steady low">MoorPy</div></a>
  <a href="https://github.com/nrel/pcrunch"><div class="filterDiv all middle time prepost">pCrunch</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">CCBlade</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">DrivetrainSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">FixedBottomSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">pyFrame3DD</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">RotorSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low">TowerSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all farm wisdem steady low">PlantFinanceSE</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all component wisdem steady low prepost">PreComp</div></a>
  <a href="https://github.com/wisdem/wisdem"><div class="filterDiv all turbine wisdem steady low cost">NREL CSM</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">AeroDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">BeamDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">ElastoDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">HydroDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">IceDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">InflowWind</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">SeaState</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">MoorDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">ServoDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all component middle time openfast">SubDyn</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all farm middle time openfast">OLAF</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all farm middle time openfast">TurbSim</div></a>
  <a href="https://github.com/openfast/openfast"><div class="filterDiv all middle time openfast prepost">OpenFAST_IO</div></a>
  <a href="https://github.com/openfast/matlab_toolbox"><div class="filterDiv all middle time openfast prepost">Matlab Tools</div></a>
  <a href="https://github.com/nrel/windtools"><div class="filterDiv all high time prepost">windtools</div></a>
  <a href="https://github.com/nrel/dgen"><div class="filterDiv all grid">dGen</div></a>
  <a href="https://github.com/dsgrid/dsgrid"><div class="filterDiv all grid">dsgrid</div></a>
  <a href="https://github.com/nrel/REopt.jl"><div class="filterDiv all grid">REopt</div></a>
  <a href="https://github.com/nrel/rev"><div class="filterDiv all grid">reV</div></a>
  <a href="https://github.com/nrel/revx"><div class="filterDiv all grid">reVX</div></a>
  <a href="https://github.com/nrel/rex"><div class="filterDiv all grid">rex</div></a>
  <a href="https://github.com/nrel/magma"><div class="filterDiv all grid">MAGMA</div></a>
  <a href="https://github.com/nrel/reeds-2.0"><div class="filterDiv all grid">ReEDS</div></a>
  <a href="https://github.com/nrel/sup3r"><div class="filterDiv all time resource">Super Resolution</div></a>
  <a href="https://www.nrel.gov/grid/wind-toolkit.html"><div class="filterDiv all time resource">Wind Toolkit</div></a>
</div>
```

## GitHub organizations

The following GitHub organizations house some of the software projects supported by WETO:
- https://github.com/nrel
- https://github.com/exawind
- https://github.com/openfast
- https://github.com/wisdem
- https://github.com/erf-model
- https://github.com/sandialabs

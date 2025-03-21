import { ref } from 'vue';


export const models = ref<Object[]>([
  {
    "name": "amr-wind",
    "github_account": "exawind",
    "github_repo": "amr-wind",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "c++",
    "license_type": "bsd-3-clause",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "TODO",
    "scope": [
      "turbine",
      "farm",
      "atmosphere"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "actuator",
      "geometry_resolved"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "adaptive mesh refinement",
      "massively parallel",
      "block-structured adaptive-mesh",
      "incompressible flow",
      "actuator disk",
      "actuator line",
      "large eddy simulation",
      "les"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "spack_manager"
    ],
    "installation_complexity": 6,
    "documentation_url": "https://exawind.github.io/amr-wind/",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_installation_docs": true,
    "testing_framework": false,
    "continuous_testing": true,
    "test_documentation": true,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "dependencies": [
      [
        "nalu-wind",
        "direct"
      ],
      [
        "openfast",
        "direct"
      ]
    ]
  },
  {
    "name": "dw_tap",
    "github_account": "NREL",
    "github_repo": "dw-tap",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "gpl-3.0",
    "data_collection_methods": [
      "field",
      "modeling"
    ],
    "last_release_date": "2023-09-05",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "land"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": true,
    "does_design": false,
    "does_design_optimization": true,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "distributed wind",
      "obstacle modeling",
      "atmospheric modeling",
      "resource estimation",
      "turbing siting"
    ],
    "supported_platforms": [
      "any"
    ],
    "installation_complexity": 5,
    "documentation_url": "https://dw-tap.nrel.gov",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": false,
    "readability": 4,
    "project_coverage": 5,
    "testing_framework": false,
    "continuous_testing": false,
    "test_coverage": 0,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "library_interface"
    ],
    "has_cli": false,
    "language_interfaces": [
      "python"
    ],
    "feature_accessibility": 20,
    "filetypes": [
      "json",
      "csv",
      "custom"
    ],
    "file_structure_stability": "in_development",
    "dependencies": [
      [
        "rex",
        "direct"
      ]
    ]
  },
  {
    "name": "dwind",
    "github_account": "NREL",
    "github_repo": "dwind",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "gpl-3.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-09-05",
    "scope": [
      "turbine",
      "farm",
      "system"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "land"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "multibody_bem"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": true,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "distributed wind",
      "distributed futures",
      "technical potential",
      "annualized energy productivity"
    ],
    "supported_platforms": [
      "any"
    ],
    "installation_complexity": 8,
    "has_user_docs": false,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": false,
    "readability": 2,
    "project_coverage": 2,
    "testing_framework": false,
    "continuous_testing": false,
    "test_coverage": 0,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "library_interface"
    ],
    "has_cli": false,
    "language_interfaces": [
      "python"
    ],
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "in_development",
    "dependencies": [
      [
        "rev",
        "direct"
      ],
      [
        "pysam",
        "direct"
      ],
      [
        "rex",
        "direct"
      ],
      [
        "dgen",
        "direct"
      ]
    ]
  },
  {
    "name": "erf",
    "github_account": "erf-model",
    "github_repo": "erf",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "c++",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-06-30",
    "scope": [
      "atmosphere"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "momentum_sink",
      "actuator"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "adaptive mesh refinement",
      "massively parallel",
      "block-structured adaptive-mesh",
      "moist compressible flow",
      "precipitation",
      "microphysics scheme",
      "planetary boundary layer scheme",
      "real meteorological data initial/boundary conditions"
    ],
    "supported_platforms": [
      "any"
    ],
    "documentation_url": "https://erf.readthedocs.io",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_design_intent_statement": true,
    "project_coverage": 9,
    "testing_framework": true,
    "continuous_testing": true,
    "first_class_ui": [
      "input_files"
    ],
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "stable",
    "dependencies": [
      [
        "amr-wind",
        "indirect"
      ]
    ]
  },
  {
    "name": "fastfarm",
    "github_account": "openfast",
    "github_repo": "openfast",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "fortran",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-05-16",
    "scope": [
      "farm",
      "turbine",
      "atmosphere"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "multibody_bem",
      "vortex_method"
    ],
    "wake_model": [
      "dynamic_meandering",
      "vortex_method"
    ],
    "does_controls": true,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "dynamic wake meandering",
      "polar wake",
      "curled wake",
      "wake-added turbulence"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "homebrew",
      "conda-forge"
    ],
    "package_manager_url": [
      "https://formulae.brew.sh/formula/openfast",
      "https://anaconda.org/conda-forge/openfast"
    ],
    "installation_complexity": 3,
    "documentation_url": "https://openfast.readthedocs.io",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": true,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": true,
    "readability": 5,
    "project_coverage": 5,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 20,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": true,
    "feature_accessibility": 100,
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "openfast",
        "direct"
      ]
    ]
  },
  {
    "name": "flasc",
    "github_account": "nrel",
    "github_repo": "flasc",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling",
      "field"
    ],
    "scope": [
      "turbine",
      "farm",
      "system"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "lookup_table",
      "SCADA"
    ],
    "wake_model": [
      "analytical"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": true,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "steady state analytical engineering models",
      "scada data analysis",
      "filtering",
      "estimation",
      "wind farm visualization",
      "fault detection"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://PyPI.org/project/flasc"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://flasc.readthedocs.io/en/latest/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 6,
    "project_coverage": 6,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 50,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "floris",
        "direct"
      ]
    ]
  },
  {
    "name": "floris",
    "github_account": "nrel",
    "github_repo": "floris",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-07-27",
    "scope": [
      "turbine",
      "farm",
      "system",
      "atmosphere"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "lookup_table"
    ],
    "wake_model": [
      "analytical"
    ],
    "does_controls": true,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "steady state",
      "analytical wake model",
      "gaussian wake",
      "engineering model"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi",
      "conda-forge"
    ],
    "package_manager_url": [
      "https://PyPI.org/project/FLORIS/",
      "https://anaconda.org/conda-forge/floris"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://nrel.github.io/floris/intro.html",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 7,
    "project_coverage": 8,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 20,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "openfast",
        "indirect"
      ]
    ]
  },
  {
    "name": "hercules",
    "github_account": "nrel",
    "github_repo": "hercules",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "scope": [
      "turbine",
      "farm",
      "atmosphere"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "actuator"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "amr-wind",
      "large eddy simulation",
      "wind farm flow control"
    ],
    "supported_platforms": [
      "macos"
    ],
    "has_user_docs": false,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": false,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": false,
    "testing_framework": false,
    "continuous_testing": false,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "web"
    ],
    "has_cli": false,
    "dependencies": [
      [
        "openoa",
        "direct"
      ],
      [
        "amr-wind",
        "direct"
      ]
    ]
  },
  {
    "name": "hopp",
    "github_account": "nrel",
    "github_repo": "hopp",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "bsd-3-clause",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2021-04-30",
    "scope": [
      "farm",
      "system"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "regression",
      "lookup_table",
      "multibody_bem"
    ],
    "wake_model": [
      "analytical"
    ],
    "does_controls": true,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "hybrid optimization performance platform",
      "hybrid energy system design",
      "renewable energy policy analysis",
      "system sizing",
      "system cost"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://PyPI.org/project/HOPP/"
    ],
    "installation_complexity": 2,
    "documentation_url": "https://hopp.readthedocs.io/en/latest/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": false,
    "readability": 5,
    "project_coverage": 5,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 50,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 40,
    "filetypes": [
      "yaml"
    ],
    "file_structure_stability": "in_development",
    "dependencies": [
      [
        "floris",
        "direct"
      ],
      [
        "orbit",
        "indirect"
      ]
    ]
  },
  {
    "name": "landbosse",
    "github_account": "wisdem",
    "github_repo": "landbosse",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling",
      "field"
    ],
    "last_release_date": "2023-06-19",
    "scope": [
      "turbine",
      "system"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "lookup_table",
      "regression"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "balance of station",
      "balance of plant",
      "onshore",
      "land-based",
      "logistics",
      "assembly",
      "installation",
      "lcoe"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://pypi.org/project/landbosse/"
    ],
    "installation_complexity": 3,
    "documentation_url": "https://github.com/WISDEM/LandBOSSE/tree/master/installation_instructions",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 6,
    "project_coverage": 3,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 50,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "language_interfaces": [
      "python"
    ],
    "feature_accessibility": 50,
    "filetypes": [
      "xlsx"
    ],
    "file_structure_stability": "stable"
  },
  {
    "name": "moorpy",
    "github_account": "nrel",
    "github_repo": "moorpy",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "bsd-3-clause",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-05-10",
    "scope": [
      "farm",
      "system"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "floating_offshore"
    ],
    "time_domain": [
      "frequency"
    ],
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://pypi.org/project/MoorPy/"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://moorpy.readthedocs.io",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 8,
    "testing_framework": true,
    "continuous_testing": true,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files",
      "library_interface"
    ],
    "has_cli": false,
    "filetypes": [
      "custom",
      "yaml"
    ]
  },
  {
    "name": "nalu-wind",
    "github_account": "exawind",
    "github_repo": "nalu-wind",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "c++",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2021-03-21",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "actuator",
      "geometry_resolved"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "large eddy simulation",
      "unstructured",
      "massively parallel",
      "incompressible flow",
      "blade resolved simulation",
      "reynolds averaged navier stokes",
      "rans"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "spack_manager"
    ],
    "installation_complexity": 7,
    "documentation_url": "https://nalu-wind.readthedocs.io",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": true,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "testing_framework": true,
    "continuous_testing": true,
    "test_documentation": true,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": true,
    "filetypes": [
      "yaml"
    ],
    "dependencies": [
      [
        "openfast",
        "direct"
      ]
    ]
  },
  {
    "name": "openfast",
    "github_account": "openfast",
    "github_repo": "openfast",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "fortran",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-05-16",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "hawt",
      "vawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "multibody_bem",
      "vortex_method"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": true,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "modularization framework",
      "nonlinear",
      "actuator line method",
      "blade element momentum theory",
      "free vortex-wake",
      "unsteady airfoil aerodynamics",
      "geometrically exact beam theory",
      "multi-body",
      "modal dynamics",
      "finite element method",
      "Craig-Bampton reduction",
      "Potential-flow theory",
      "Strip-theory",
      "operating-point determination",
      "linearization"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "homebrew",
      "conda-forge"
    ],
    "package_manager_url": [
      "https://formulae.brew.sh/formula/openfast",
      "https://anaconda.org/conda-forge/openfast"
    ],
    "installation_complexity": 3,
    "documentation_url": "https://openfast.readthedocs.io",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": true,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 5,
    "project_coverage": 5,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 20,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": true,
    "language_interfaces": [
      "python",
      "c++",
      "matlab"
    ],
    "feature_accessibility": 100,
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "rosco",
        "indirect"
      ]
    ]
  },
  {
    "name": "openoa",
    "github_account": "nrel",
    "github_repo": "openoa",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "bsd-3-clause",
    "data_collection_methods": [
      "field"
    ],
    "last_release_date": "2023-01-19",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "SCADA"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": true,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "operational analysis",
      "gap analysis",
      "annual energy production",
      "monte carlo",
      "long term",
      "turbine ideal energy",
      "wake losses",
      "machine learning"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://PyPI.org/project/OpenOA/"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://openoa.readthedocs.io/",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 9,
    "project_coverage": 9,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 80,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "library_interface"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml",
      "json",
      "csv"
    ],
    "file_structure_stability": "semantic_versioning"
  },
  {
    "name": "openturbine",
    "github_account": "exawind",
    "github_repo": "openturbine",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "c++",
    "license_type": "mit",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "TODO",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "multibody_bem"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "geometrically exact beam theory",
      "nonlinear finite elements",
      "GPU",
      "CUDA"
    ],
    "supported_platforms": [
      "any"
    ],
    "installation_complexity": 4,
    "documentation_url": "https://exawind.github.io/openturbine/",
    "has_user_docs": false,
    "has_developer_docs": true,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": true,
    "readability": 6,
    "project_coverage": 1,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 40,
    "test_documentation": false,
    "performance_tests": false
  },
  {
    "name": "orbit",
    "github_account": "wisdem",
    "github_repo": "orbit",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling",
      "field"
    ],
    "last_release_date": "2020-07-01",
    "scope": [
      "turbine",
      "system"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "multibody_bem",
      "regression"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "balance of station",
      "balance of plant",
      "fixed bottom",
      "floating",
      "logistics",
      "assembly",
      "installation",
      "lcoe"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://pypi.org/project/orbit-nrel/"
    ],
    "installation_complexity": 3,
    "documentation_url": "https://wisdem.github.io/ORBIT/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 8,
    "project_coverage": 5,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 85,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "language_interfaces": [
      "python"
    ],
    "feature_accessibility": 75,
    "filetypes": [
      "yaml"
    ],
    "file_structure_stability": "stable"
  },
  {
    "name": "owens",
    "github_account": "sandialabs",
    "github_repo": "OWENS.jl",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "julia",
    "license_type": "lgpl-3.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2024-04-10",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "vawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": [
      "dynamic",
      "steady"
    ],
    "turbine_model": [
      "multibody_bem",
      "vortex_method"
    ],
    "wake_model": [
      "vortex_method"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "sectional property preprocessing",
      "mass based cost",
      "jointed multi-body",
      "multi-turbine",
      "nonlinear or linear time domain simulation",
      "steady state simulation",
      "hydrokinetic fluid corrections",
      "linearization and export to pseudal spectral methods",
      "automated campbell diagram generation",
      "composite level stress",
      "ultimate failure checks",
      "buckling checks",
      "rainflow counting",
      "miner's rule fatigue acumulation",
      "automatic gradients",
      "VTK outputs"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "julia"
    ],
    "package_manager_url": [
      "git@github.com:sandialabs/OWENS.jl.git"
    ],
    "installation_complexity": 5,
    "documentation_url": "https://sandialabs.github.io/OWENS.jl/stable/",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 2,
    "project_coverage": 2,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 50,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files",
      "library_interface"
    ],
    "has_cli": true,
    "language_interfaces": [
      "julia"
    ],
    "feature_accessibility": 98,
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "AeroDyn",
        "direct"
      ],
      [
        "MoorDyn",
        "direct"
      ],
      [
        "HydroDyn",
        "direct"
      ],
      [
        "Turbsim",
        "direct"
      ]
    ]
  },
  {
    "name": "pynumad",
    "github_account": "sandialabs",
    "github_repo": "pynumad",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "bsd-3-clause",
    "data_collection_methods": [
      "modeling",
      "laboratory"
    ],
    "last_release_date": "2023-09-XX",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": [
      "steady",
      "dynamic"
    ],
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": false,
    "does_loads": true,
    "tags": [
      "Elasticity theory",
      "Euler bernoulli beam theory",
      "Timoshenko beam theory",
      "Classical laminated plate theory",
      "First-order shear-deformation plate theory"
    ],
    "supported_platforms": [
      "windows",
      "macos",
      "linux"
    ],
    "installation_complexity": 4,
    "documentation_url": "https://sandialabs.github.io/pyNuMAD/",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 7,
    "project_coverage": 6,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 70,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml",
      "csv"
    ],
    "file_structure_stability": "in_development",
    "dependencies": [
      [
        "openfast",
        "indirect"
      ]
    ]
  },
  {
    "name": "raft",
    "github_account": "wisdem",
    "github_repo": "raft",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2021-11-10",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "floating_offshore"
    ],
    "time_domain": "frequency",
    "turbine_model": [
      "multibody_bem"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": true,
    "supported_platforms": [
      "any"
    ],
    "documentation_url": "https://openraft.readthedocs.io/en/latest/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "testing_framework": false,
    "continuous_testing": false,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "filetypes": [
      "yaml"
    ],
    "dependencies": [
      [
        "wisdem",
        "direct"
      ],
      [
        "moorpy",
        "direct"
      ]
    ]
  },
  {
    "name": "rosco",
    "github_account": "nrel",
    "github_repo": "rosco",
    "active_funding": false,
    "development_status": "maintenance",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-04-11",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "lookup_table"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": true,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "Reference controller",
      "Automated tuning"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "conda-forge"
    ],
    "package_manager_url": [
      "https://anaconda.org/conda-forge/rosco"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://rosco.readthedocs.io/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 7,
    "project_coverage": 8,
    "testing_framework": true,
    "continuous_testing": true,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "wisdem",
        "direct"
      ]
    ]
  },
  {
    "name": "sonata",
    "github_account": "ptrbortolotti",
    "github_repo": "SONATA",
    "active_funding": true,
    "development_status": "on_hold",
    "programming_language": "python",
    "license_type": "lgpl-3.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-03-20",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": [
      "steady",
      "dynamic"
    ],
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "2D planar meshes",
      "slender composite beams"
    ],
    "supported_platforms": [
      "macos",
      "linux"
    ],
    "installation_complexity": 9,
    "documentation_url": "none",
    "has_user_docs": false,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 2,
    "project_coverage": 3,
    "testing_framework": true,
    "continuous_testing": true,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": true,
    "language_interfaces": [
      "python"
    ],
    "feature_accessibility": 100,
    "filetypes": [
      "custom"
    ],
    "file_structure_stability": "stable",
    "dependencies": [
      [
        "openfast",
        "indirect"
      ],
      [
        "wisdem",
        "indirect"
      ],
      [
        "weis",
        "indirect"
      ]
    ]
  },
  {
    "name": "sowfa",
    "github_account": "nrel",
    "github_repo": "sowfa-6",
    "active_funding": false,
    "development_status": "maintenance",
    "programming_language": "c++",
    "license_type": "gpl-3.0",
    "data_collection_methods": [
      "modeling",
      "laboratory",
      "field"
    ],
    "scope": [
      "turbine",
      "farm",
      "atmosphere"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "actuator"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "incompressible flow",
      "actuator disk",
      "actuator line",
      "large eddy simulation",
      "les"
    ],
    "supported_platforms": [
      "linux",
      "macos",
      "HPC"
    ],
    "installation_complexity": 7,
    "has_user_docs": false,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": false,
    "has_getting_started_docs": false,
    "has_examples_tutorials": false,
    "has_design_intent_statement": false,
    "readability": 1,
    "project_coverage": 1,
    "testing_framework": false,
    "continuous_testing": false,
    "test_coverage": 0,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "language_interfaces": [
      "c++"
    ],
    "feature_accessibility": 75,
    "file_structure_stability": "stable",
    "dependencies": [
      [
        "openfast",
        "direct"
      ]
    ]
  },
  {
    "name": "weis",
    "github_account": "wisdem",
    "github_repo": "weis",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-01-12",
    "scope": [
      "turbine"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "multibody_bem",
      "vortex_method"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": true,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": true,
    "tags": [
      "mid-fidelity engineering models",
      "multidisciplinary design optimization",
      "controls co-design"
    ],
    "supported_platforms": [
      "macos",
      "linux",
      "HPC"
    ],
    "package_manager": [
      "conda"
    ],
    "installation_complexity": 6,
    "documentation_url": "https://weis.readthedocs.io/en/latest/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 7,
    "project_coverage": 2,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 83,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 50,
    "filetypes": [
      "yaml",
      "custom"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "wisdem",
        "direct"
      ],
      [
        "rosco",
        "direct"
      ],
      [
        "openfast",
        "direct"
      ],
      [
        "moorpy",
        "direct"
      ],
      [
        "landbosse",
        "direct"
      ],
      [
        "orbit",
        "direct"
      ],
      [
        "raft",
        "direct"
      ]
    ]
  },
  {
    "name": "windse",
    "github_account": "nrel",
    "github_repo": "WindSE",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-07-11",
    "scope": [
      "turbine",
      "farm"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": [
      "steady",
      "dynamic"
    ],
    "turbine_model": [
      "actuator"
    ],
    "wake_model": [
      "navier_stokes"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": true,
    "does_simulation": true,
    "does_loads": false,
    "tags": [
      "steady state Reynolds-averaged Navier-Stokes (RANS)",
      "unsteady, large-eddy simulations (LES) using Navier-Stokes"
    ],
    "supported_platforms": [
      "macos",
      "linux",
      "HPC"
    ],
    "package_manager": [
      "conda",
      "conda-forge"
    ],
    "package_manager_url": [
      "https://anaconda.org/conda-forge/fenics"
    ],
    "installation_complexity": 2,
    "documentation_url": "https://windse.readthedocs.io/en/latest/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": true,
    "has_cli_docs": true,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 7,
    "project_coverage": 6,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 68,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": true,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml",
      "csv",
      "hdf5",
      "csv",
      "numpy binary",
      "pvd",
      "xdmf"
    ],
    "file_structure_stability": "in_development",
    "dependencies": [
      [
        "floris",
        "indirect"
      ]
    ]
  },
  {
    "name": "wisdem",
    "github_account": "wisdem",
    "github_repo": "wisdem",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "modeling"
    ],
    "last_release_date": "2023-06-22",
    "scope": [
      "turbine",
      "system"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "multibody_bem",
      "regression"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": true,
    "does_design_optimization": true,
    "does_simulation": false,
    "does_loads": true,
    "tags": [
      "low-fidelity conceptual models",
      "multidisciplinary design optimization"
    ],
    "supported_platforms": [
      "any"
    ],
    "installation_complexity": 6,
    "documentation_url": "https://wisdem.readthedocs.io/en/master/",
    "has_user_docs": true,
    "has_developer_docs": false,
    "has_api_docs": false,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 7,
    "project_coverage": 7,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 79,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 50,
    "filetypes": [
      "yaml"
    ],
    "file_structure_stability": "semantic_versioning",
    "dependencies": [
      [
        "orbit",
        "direct"
      ],
      [
        "landbosse",
        "direct"
      ]
    ]
  },
  {
    "name": "wombat",
    "github_account": "wisdem",
    "github_repo": "wombat",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "apache-2.0",
    "data_collection_methods": [
      "field"
    ],
    "last_release_date": "2023-08-28",
    "scope": [
      "turbine",
      "farm",
      "system"
    ],
    "system_type": [
      "hawt"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "steady",
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": true,
    "does_data_analysis": false,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "operations and maintenance",
      "discrete event simulation"
    ],
    "supported_platforms": [
      "any"
    ],
    "package_manager": [
      "pypi"
    ],
    "package_manager_url": [
      "https://PyPI.org/project/WOMBAT/"
    ],
    "installation_complexity": 1,
    "documentation_url": "https://WISDEM.github.io/WOMBAT",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": true,
    "has_examples_tutorials": true,
    "has_design_intent_statement": true,
    "readability": 7,
    "project_coverage": 7,
    "testing_framework": true,
    "continuous_testing": true,
    "test_coverage": 55,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "input_files"
    ],
    "has_cli": false,
    "feature_accessibility": 100,
    "filetypes": [
      "yaml",
      "csv"
    ],
    "file_structure_stability": "in_development"
  },
  {
    "name": "wtk",
    "github_account": "NREL",
    "github_repo": "hsds-examples",
    "active_funding": true,
    "development_status": "new_features",
    "programming_language": "python",
    "license_type": "bsd-4-clause",
    "data_collection_methods": [
      "field",
      "modeling"
    ],
    "last_release_date": "2023-09-05",
    "scope": [
      "atmosphere"
    ],
    "system_type": [
      "any"
    ],
    "system_location": [
      "any"
    ],
    "time_domain": "dynamic",
    "turbine_model": [
      "N/A"
    ],
    "wake_model": [
      "N/A"
    ],
    "does_controls": false,
    "does_costs": false,
    "does_data_analysis": true,
    "does_design": false,
    "does_design_optimization": false,
    "does_simulation": false,
    "does_loads": false,
    "tags": [
      "wind toolkit",
      "atmospheric modeling",
      "resource estimation",
      "wind integration national dataset"
    ],
    "supported_platforms": [
      "any"
    ],
    "installation_complexity": 8,
    "documentation_url": "https://www.nrel.gov/grid/wind-toolkit.html",
    "has_user_docs": true,
    "has_developer_docs": true,
    "has_api_docs": true,
    "has_cli_docs": false,
    "has_installation_docs": true,
    "has_getting_started_docs": false,
    "has_examples_tutorials": true,
    "has_design_intent_statement": false,
    "readability": 4,
    "project_coverage": 5,
    "testing_framework": false,
    "continuous_testing": false,
    "test_coverage": 0,
    "test_documentation": false,
    "performance_tests": false,
    "first_class_ui": [
      "library_interface"
    ],
    "has_cli": false,
    "language_interfaces": [
      "python"
    ],
    "feature_accessibility": 80,
    "filetypes": [
      "json",
      "csv",
      "custom"
    ],
    "file_structure_stability": "in_development"
  }
]);

import json
import os
import shutil
# import datetime

from json_schema_for_humans.generate import generate_from_filename
from json_schema_for_humans.generation_configuration import GenerationConfiguration

schema = {
    # "$schema": "https://json-schema.org/draft/2019-09/schema#",
    "type": "object",
    "additionalProperties": False,
    "properties": {

        ## General
        "github_account": {
            "type": "string"
        },
        "github_repo": {
            "type": "string"
        },
        "primary_uses": {
            "type": "array",
            "items": {
                "enum": [
                    "simulation",
                    "controls",
                    "cost",
                    "design"
                ]
            }
        },
        "active_funding": {
            "type": "boolean"
        },
        "development_status": {
            "enum": [
                "on_hold",              # No active development or maintanence
                "maintenance",          # Maintenance activites only including bug fixes
                "new_features"          # Actively planning and developing new features
            ]
        },
        "programming_language": {
            "enum": ["python", "fortran", "matlab", "cpp"]
        },
        "license_type": {
            # any of the OSI License strings (https://opensource.org/licenses/)
            "enum": ["Apache-2.0", "LGPL-2.1"]
        },
        "data_collection_methods": {
            "type": "array",
            "items": {
                "enum": [
                    "modeling",         # Retried from a numerical model
                    "laboratory",       # Data gotten from a controlled experiement including large domains such as RAAW
                    "field"             # Data from systems in field-operation, typically in a commercial wind farm
                ]
            }
        },
        "last_release_date": {
            "type": "string"
            # "type": datetime.date,
            # "pattern": "date"
        },

        ## Modeling
        "scope": {
            "type": "array",
            "items": {
                "enum": ["turbine", "farm", "system", "atmosphere"]
            }
        },
        "system_type": {
            # - any  # type-agnostic
            "type": "array",
            "items": {
                "enum": ["hawt", "vawt", "awes", "any"]
            }
        },
        "system_location": {
            # - any  # location-agnostic
            "type": "array",
            "items": {
                "enum": ["land", "fixed_offshore", "floating_offshore", "any"]
            }
        },
        "time_domain": {
            "enum": ["steady", "dynamic"]
        },
        "loads": {
            "type": "boolean"
        },
        "governing_equations": {
            # - i.e. finite elements structural model
            # - timoshenko vs euler beam
            # - BEM
            # - RANS vs LES
            "type": "array",
            "items": {
                "type": "string"
            }
        },

        ## Distribution
        "supported_platforms": {
            # - any  # platform-agnostic
            "type": "array",
            "items": {
                "enum": ["linux", "windows", "macos", "HPC", "any"]
            }
        },
        "package_manager": {
            "type": "array",
            "items": {
                "enum": ["homebrew", "pypi", "conda", "conda-forge", "spack_manager"]
            }
        },
        "package_manager_url": {
            # Corresponding URL to `package_manager` field
            "type": "array",
            "items": {
                "type": "string"
                # "format": "hostname" ?
            }
        },
        "installation_complexity": {
            # Estimate the difficulty for a user with minimal context to install
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
        },

        ## Documentation
        "documentation_url": {
            "type": "string"
            # "format": "hostname" ?
        },
        "has_user_docs": {
            "type": "boolean"
        },
        "has_developer_docs": {
            "type": "boolean"
        },
        "has_api_docs": {
            "type": "boolean"
        },
        "has_cli_docs": {
            "type": "boolean"
        },
        "has_installation_docs": {
            "type": "boolean"
        },
        "has_getting_started_docs": {
            "type": "boolean"
        },
        "has_examples_tutorials": {
            "type": "boolean"
        },
        "has_design_intent_statement": {
            "type": "boolean"
        },
        "readability": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
        },
        "project_coverage": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
        },

        ## Testing
        "testing_framework": {
            "type": "boolean"
        },
        "continuous_testing": {
            "type": "boolean"
        },
        "regression_test_coverage": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
        },
        "unit_test_coverage": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
        },
        "test_documentation": {
            "type": "boolean"
        },
        "performance_tests": {
            "type": "boolean"
        },

        ## Interfaces
        "first_class_ui": {
            "type": "array",
            "items": {
                "enum": ["gui", "input_files", "web"]
            }
        },
        "has_cli": {
            "type": "boolean"
        },
        "language_interfaces": {
            "type": "array",
            "items": {
                "enum": ["python", "fortran", "matlab", "cpp"]
            }
        },
        "feature_accessibility": {
            # How much of the project can you reach through a public API?
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
        },

        ## Input / Output
        "filetypes": {
            "type": "array",
            "items": {
                "enum": ["custom", "yaml", "hdf5"]
            }
        },
        "file_structure_stability": {
            "enum": [
                "stable",               # Never or rarely changes
                "in_development",       # Actively changing
                "semantic_versioning"   # Changes according to rules of semantic versioning
            ]
        },

        ## WETO Integrations (downstream)
        "downstream_integrations": {
            "type": "array",
            "items": {
                "type": "array",
                "prefixItems": [
                    { "type": "string" },
                    {
                        "enum": [
                            "direct",       # code-code integration
                            "indirect"      # one uses the output of the other via output file or another workflow process
                        ]
                    }
                ]
            }
        },

    # TODO: These should be automatically compiled
    #     ## Community Health
    #     "open_issues": {
    #         "type": "integer",
    #         "minimum": 0,
    #     },
    #     "open_pull_requests": {
    #         "type": "integer",
    #         "minimum": 0,
    #     },
    #     "average_time_to_engage": {
    #         "type": "integer",
    #         "minimum": 0,
    #     },
    #     "outside_contributors": {
    #         "type": "integer",
    #         "minimum": 0,
    #     },
    }
}

# "name": {"type": "string"},
# "age": {"type": "number"},
# "scores": {
#     "type": "array",
#     "items": {"type": "number"},
# },
# "address": {"$ref": "#/$defs/address"},
#     },
#     "required": ["name"],
#     "$defs": {
#         "address": {
#             "type": "object",
#             "properties": {
#                 "street": {"type": "string"},
#                 "postcode": {"type": "string"},
#             },
#             "required": ["street"],
#         },
#     },
# }


if __name__ == "__main__":

    # Export the schema defined above as a json file
    json.dump(schema, open("schema.json", "w"), indent=4)

    # Configure the docs
    config = GenerationConfiguration(
        description_is_markdown=True,
        copy_css=True,
        expand_buttons=True,
        show_breadcrumbs=True,
        examples_as_yaml=True,
        # template_md_options={
        #     "badge_as_image": True,
        #     "show_heading_numbers": False
        # },
        # template_name="md_nested"
    )

    # Using the json file and config from above, create the docs web page
    generate_from_filename("schema.json", "schema_doc.html", config=config)

    # Copy html, css, and js to the docs directory
    shutil.copy2("schema_doc.html", "../docs/")
    shutil.copy2("schema_doc.css", "../docs/")
    shutil.copy2("schema_doc.min.js", "../docs/")

    # Clean up the current directory
    os.remove("schema_doc.html")
    os.remove("schema_doc.css")
    os.remove("schema_doc.min.js")
    os.remove("schema.json")

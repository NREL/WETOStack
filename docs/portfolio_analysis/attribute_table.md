---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Software Attributes

The sections here tabulate the software attribute database.
Each attribute (column) is described in the [](schema).
Some columns contain lists of strings which means that they cannot be fully sorted.
Instead, they can be filtered by searching for a string with the following Sequel query:

```sql
SELECT * FROM $table WHERE <column name> LIKE '%<search string>%';

-- For example:
SELECT * FROM $table WHERE system_location LIKE '%land%';
```

```{code-cell} ipython3
:tags: [hide-cell]

from pathlib import Path
import yaml
import datapane as dp
import pandas as pd

model_list_inputs = yaml.safe_load( open("analysis_list.yaml", "r") )
models = model_list_inputs["active"]

model_attributes_map = {
    model: yaml.safe_load( open(Path("..", "..", "software_attributes", "database", f"{model}.yaml"), "r") )
    for model in models
}

df = pd.DataFrame.from_dict(model_attributes_map, orient="index")
# print(list(df.columns))
# print(df)
```

## General
```{code-cell} ipython3
:tags: [hide-input, full-width]

general_df = df[[
    "github_account",
    "github_repo",
    "primary_uses",
    "active_funding",
    "development_status",
    "programming_language",
    "license_type",
    "data_collection_methods",
    "last_release_date"
]]
dp.DataTable(general_df)
```

## Turbine Modeling
```{code-cell} ipython3
:tags: [hide-input, full-width]

turbine_df = df[[
    "scope",
    "system_location",
    "time_domain",
    "turbine_model",
    "loads",
    "design_optimization",
    "costs",
]]
turbine_df = turbine_df[ pd.DataFrame( turbine_df["scope"].tolist() ).isin( ["turbine", "any"] ).any(1).values ]
dp.DataTable(turbine_df)
```

## Farm Modeling
```{code-cell} ipython3
:tags: [hide-input, full-width]

farm_df = df[[
    "scope",
    "system_location",
    "time_domain",
    "turbine_model",
    "wake_model",
    "loads",
    "design_optimization",
    "costs",
]]
farm_df = farm_df[ pd.DataFrame( farm_df["scope"].tolist() ).isin( ["farm", "any"] ).any(1).values ]
dp.DataTable(farm_df.dropna())
```

## Cost Modeling
```{code-cell} ipython3
:tags: [hide-input, full-width]

cost_df = df[[
    "scope",
    "system_location",
    "design_optimization",
    "costs",
    "tags",
]]
cost_df = cost_df[ cost_df["costs"] == True]
dp.DataTable(cost_df.dropna())
```

## Full Suite Modeling Comparison
```{code-cell} ipython3
:tags: [hide-input, full-width]

modeling_df = df[[
    "scope",
    "system_location",
    "time_domain",
    "turbine_model",
    "wake_model",
    "loads",
    "design_optimization",
    "costs",
    "tags",
]]
dp.DataTable(modeling_df)
```

## Distribution
```{code-cell} ipython3
:tags: [hide-input, full-width]

distribution_df = df[[
    "supported_platforms",
    "package_manager",
    "package_manager_url",
    "installation_complexity",
]]
dp.DataTable(distribution_df)
```

## Documentation
```{code-cell} ipython3
:tags: [hide-input, full-width]

documentation_df = df[[
    "documentation_url",
    "has_user_docs",
    "has_developer_docs",
    "has_api_docs",
    "has_cli_docs",
    "has_installation_docs",
    "has_getting_started_docs",
    "has_examples_tutorials",
    "has_design_intent_statement",
    "readability",
    "project_coverage",
]]
dp.DataTable(documentation_df)
```

## Testing
```{code-cell} ipython3
:tags: [hide-input, full-width]

testing_df = df[[
    "testing_framework",
    "continuous_testing",
    "test_coverage",
    "test_documentation",
    "performance_tests",
]]
dp.DataTable(testing_df)
```

## Interfaces
```{code-cell} ipython3
:tags: [hide-input, full-width]

interfaces_df = df[[
    "first_class_ui",
    "has_cli",
    "language_interfaces",
    "feature_accessibility",
]]
dp.DataTable(interfaces_df)
```

## Input / Output
```{code-cell} ipython3
:tags: [hide-input, full-width]

io_df = df[[
    "filetypes",
    "file_structure_stability",
]]
dp.DataTable(io_df)
```

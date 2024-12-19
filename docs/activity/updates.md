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

# News and Releases

Keep up with the latest updates from components of the WETO Stack here!
While each project has its own documentation, this page contains high-level information,
links to sources, and other news that may be of interest to the WETO community.

## Releases from the past 30 days

```{code-cell} ipython3
:tags: [hide-input]

import os
from pathlib import Path
from datetime import datetime, timezone, timedelta
from ghapi.all import GhApi
import yaml
from IPython.display import Markdown, display

github_token = os.getenv('GH_TOKEN')

software_attr_dir = Path("..", "..", "software_attributes")

model_list_inputs = yaml.safe_load( open(software_attr_dir / "database_list.yaml", "r") )
models = model_list_inputs["active"] + model_list_inputs["partial"]

model_attributes_map = {
    model: yaml.safe_load( open( software_attr_dir / "database" / f"{model}.yaml", "r") )
    for model in models
}

repos = [(atts["github_account"], atts["github_repo"]) for model, atts in model_attributes_map.items()]

recent_releases = []
thirty_days_ago = datetime.today() - timedelta(days=30)
for repo in repos:
    api = GhApi(owner=repo[0], repo=repo[1], token=github_token)
    releases = api.repos.list_releases()
    if len(releases) < 1:
        continue
    last_release_date = datetime.fromisoformat(releases[0]["published_at"]).replace(tzinfo=None)
    if last_release_date > thirty_days_ago:
        recent_releases.append((repo[0], repo[1], last_release_date))
recent_releases.sort(key=lambda x: x[2], reverse=True)

release_list_md = ""
for account, repo, release_date in recent_releases:
    release_list_md += f"- {account}/{repo} - {release_date.strftime('%Y-%m-%d')}\n"

display(Markdown(release_list_md))
display(Markdown(f"*Updated on {datetime.now(tz=timezone(-timedelta(hours=7))).strftime('%Y-%m-%d')}*"))
# Note the timedelta is inaccurate for part of the year, but it's purpose is to have the correct day
```

## Latest News

- [May 28 2024: OpenFAST is now available via conda-forge for all three major operating systems!](openfast_conda)

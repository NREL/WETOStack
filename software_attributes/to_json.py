
import json
import yaml
from pathlib import Path


if __name__=="__main__":

    model_list_inputs = yaml.safe_load( open("database_list.yaml", "r") )
    models = model_list_inputs["active"]

    model_data = []
    for model in models:
        input_file = Path("database", f"{model}.yaml")
        with open(input_file, "r") as infile:
            this_model_data = {"name" : model}
            this_model_data.update(yaml.load(infile, yaml.SafeLoader))
            model_data.append(this_model_data)

    with open("../entry_guide/src/database.ts", "w") as outfile:
        outfile.write("import { ref } from 'vue';\n")
        outfile.write("\n\n")
        outfile.write("export const models = ref<Object[]>(")
        json.dump(model_data, outfile, indent=2)
        outfile.write(");")

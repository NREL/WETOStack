from jsonschema import Draft202012Validator
from schema import schema
import yaml
from pathlib import Path

draft_202012_validator = Draft202012Validator(schema)

if __name__=="__main__":

    model_list_inputs = yaml.safe_load( open("database_list.yaml", "r") )
    models = model_list_inputs["active"] + model_list_inputs["partial"]

    for model in models:
        print(f"Validating {model}...")
        input_file = Path("database", f"{model}.yaml")
        with open(input_file, "r") as infile:
            input_dict = yaml.load(infile, yaml.SafeLoader)
        validate_dict = input_dict

        draft_202012_validator.validate(validate_dict)
        print(f"done.")

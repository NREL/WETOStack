from jsonschema import Draft202012Validator
from schema import schema
import yaml
from pathlib import Path

draft_202012_validator = Draft202012Validator(schema)

if __name__=="__main__":

    model_list = [
        "anba4",
        "floris",
        "openfast",
        "openoa",
        "pynumad",
        "rosco",
        "sonata",
        "weis",
        "windse",
        "wisdem",
        "wombat",
    ]

    for model in model_list:
        print(f"Validating {model}...")
        input_file = Path("database", f"{model}.yaml")
        with open(input_file, "r") as infile:
            input_dict = yaml.load(infile, yaml.SafeLoader)
        validate_dict = input_dict

        draft_202012_validator.validate(validate_dict)
        print(f"done.")

from pathlib import Path

import joblib
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder


def build_sample_dataset() -> pd.DataFrame:
    """Create a small sample dataset representing past jobs."""
    data = [
        {"width_cm": 50, "height_cm": 40, "material": "steel", "complexity": 3, "price": 120.0},
        {"width_cm": 80, "height_cm": 60, "material": "aluminum", "complexity": 5, "price": 200.0},
        {"width_cm": 30, "height_cm": 30, "material": "steel", "complexity": 2, "price": 90.0},
        {"width_cm": 100, "height_cm": 80, "material": "copper", "complexity": 7, "price": 350.0},
        {"width_cm": 120, "height_cm": 90, "material": "steel", "complexity": 8, "price": 420.0},
        {"width_cm": 60, "height_cm": 50, "material": "aluminum", "complexity": 4, "price": 160.0},
        {"width_cm": 45, "height_cm": 35, "material": "copper", "complexity": 3, "price": 130.0},
        {"width_cm": 150, "height_cm": 100, "material": "steel", "complexity": 9, "price": 600.0},
        {"width_cm": 70, "height_cm": 55, "material": "aluminum", "complexity": 6, "price": 220.0},
        {"width_cm": 40, "height_cm": 40, "material": "steel", "complexity": 2, "price": 95.0},
        {"width_cm": 90, "height_cm": 70, "material": "titanium", "complexity": 8, "price": 500.0},
        {"width_cm": 110, "height_cm": 85, "material": "copper", "complexity": 7, "price": 380.0},
        {"width_cm": 55, "height_cm": 45, "material": "titanium", "complexity": 5, "price": 300.0},
    ]
    return pd.DataFrame(data)


def train_and_save_model(output_path: Path) -> Path:
    """Train a pipeline (preprocess + model) and save it to the given path."""
    dataset = build_sample_dataset()
    target_column = "price"
    feature_columns = [col for col in dataset.columns if col != target_column]

    categorical_features = ["material"]
    numeric_features = [col for col in feature_columns if col not in categorical_features]

    preprocessor = ColumnTransformer(
        transformers=[
            ("material_ohe", OneHotEncoder(handle_unknown="ignore"), categorical_features),
        ],
        remainder="passthrough",
    )

    model = RandomForestRegressor(n_estimators=200, random_state=42)

    pipeline = Pipeline(steps=[
        ("preprocess", preprocessor),
        ("model", model),
    ])

    X = dataset[feature_columns]
    y = dataset[target_column]

    pipeline.fit(X, y)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    joblib.dump(pipeline, output_path)

    return output_path


def main() -> None:
    model_path = Path(__file__).resolve().parent / "quote_model.pkl"
    saved_path = train_and_save_model(model_path)
    print(f"Model pipeline trained and saved to: {saved_path}")


if __name__ == "__main__":
    main()



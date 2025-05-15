import os
import pandas as pd
from datasets import Dataset

file_path = os.path.join(os.path.dirname(__file__), 'data', 'stroke_data.csv')

def preprocess_data(file_path):
    """
    Load and preprocess the stroke dataset.
    
    Args:
        file_path (str): Path to the CSV file containing the stroke dataset.
    
    Returns:
        Dataset: Hugging Face Dataset object with preprocessed data.
    """
    # Load dataset
    df = pd.read_csv(file_path)
    
    # Handle missing values
    df['bmi'] = df['bmi'].fillna(df['bmi'].mean())
    df = df.dropna(subset=['smoking_status'])
    
    # Encode categorical variables
    df['gender'] = df['gender'].map({'Male': 0, 'Female': 1, 'Other': 2})
    df['ever_married'] = df['ever_married'].map({'Yes': 1, 'No': 0})
    df['work_type'] = df['work_type'].map({
        'Private': 0, 'Self-employed': 1, 'Govt_job': 2, 
        'children': 3, 'Never_worked': 4
    })
    df['Residence_type'] = df['Residence_type'].map({'Urban': 0, 'Rural': 1})
    df['smoking_status'] = df['smoking_status'].map({
        'formerly smoked': 0, 'never smoked': 1, 
        'smokes': 2, 'Unknown': 3
    })
    
    # Normalize numerical features
    df['age'] = (df['age'] - df['age'].mean()) / df['age'].std()
    df['bmi'] = (df['bmi'] - df['bmi'].mean()) / df['bmi'].std()
    df['avg_glucose_level'] = (df['avg_glucose_level'] - df['avg_glucose_level'].mean()) / df['avg_glucose_level'].std()
    
    # Ensure target column is named 'stroke'
    if 'stroke' not in df.columns:
        raise ValueError("Dataset must contain a 'stroke' column as the target variable.")
    
    # Convert to Hugging Face Dataset
    dataset = Dataset.from_pandas(df)
    
    return dataset
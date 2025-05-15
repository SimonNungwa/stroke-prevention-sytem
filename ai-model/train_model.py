from transformers import AutoModelForSequenceClassification, AutoTokenizer, Trainer, TrainingArguments
from datasets import Dataset
import pandas as pd

def load_and_preprocess_data(file_path):
    df = pd.read_csv(file_path)
    df = df.dropna()
    # ... preprocessing
    return Dataset.from_pandas(df)

def main():
    # Load data
    dataset = load_and_preprocess_data("../data/stroke_data.csv").train_test_split(test_size=0.2)
    
    # Load model and tokenizer
    model_name = "distilbert-base-uncased"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)

    # Tokenize dataset
    def tokenize_function(examples):
        text = [f"age: {a}, bmi: {b}, hypertension: {h}" for a, b, h in zip(examples["age"], examples["bmi"], examples["hypertension"])]
        return tokenizer(text, padding="max_length", truncation=True)

    tokenized_dataset = dataset.map(tokenize_function, batched=True)

    # Training arguments
    training_args = TrainingArguments(
        output_dir="./results",
        evaluation_strategy="epoch",
        learning_rate=2e-5,
        per_device_train_batch_size=16,
        per_device_eval_batch_size=16,
        num_train_epochs=3,
    )

    # Trainer
    trainer = Trainer(model=model, args=training_args, train_dataset=tokenized_dataset["train"], eval_dataset=tokenized_dataset["test"])
    trainer.train()

    # Save model
    model.save_pretrained("./model")
    tokenizer.save_pretrained("./model")

if __name__ == "__main__":
    main()
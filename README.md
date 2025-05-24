# 📰 Fake News Detector

A machine learning-powered web application that detects whether a news article or headline is **real** or **fake**. Built using a fine-tuned DistilBERT model and deployed as an interactive web interface (with plans for a Chrome extension).

---

## 🚀 Features

- 🔍 Detects fake vs real news from text input
- 🧠 Fine-tuned NLP model (DistilBERT)
- 🧪 Inference API using FastAPI
- 💻 Interactive frontend for user input and prediction results
- 🧩 Planned: Chrome Extension for real-time detection on websites

---

## 🧠 Model Overview

- **Model**: `DistilBERT` (pretrained transformer)
- **Training Framework**: Hugging Face Transformers + PyTorch
- **Dataset**: Custom curated dataset (better than typical Fake/Real dataset)
- **Loss**: Weighted Cross Entropy (handles class imbalance)
- **Metrics**: Accuracy, F1 Score, Precision, Recall
- **Inference**: Batched input prediction with softmax output

---

## 🧰 Tech Stack

| Part         | Technology               |
|--------------|---------------------------|
| Model        | DistilBERT, Transformers, PyTorch |
| Training     | Hugging Face Trainer      |
| API Backend  | FastAPI                   |
| Frontend     | React.js / Astro (planned)|
| Deployment   | Render / Hugging Face Spaces (TBD) |
| Extension    | Chrome Extension (planned)|

---

## 📦 Installation & Usage

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/fake-news-detector.git
cd fake-news-detector


# Assignment_3 - VisiTrack: Face Recognition System

##  Project Overview

This project implements a face recognition pipeline that matches test face images against a gallery of known individuals. It has two major components:

1. **ML**: Uses a pre-trained deep learning model to extract facial embeddings from the [LFW dataset](https://www.kaggle.com/datasets/jessicali9530/lfw-dataset) and evaluate recognition performance.
2. **Web**: Scrapes student data and profile images from the IIT Kanpur online directory, saves metadata, and prepares the dataset for inference.

##  Folder Structure

```
Assignment_3/
├── ML/
│   ├── nithintm_assignment3_VisiTrack.ipynb        # Face recognition notebook
│   ├── data/
│   │   ├── lfw/                                    # LFW dataset (unzipped)
│   │   └── student_data/                           # IITK face data (CSV + images)
├── Web/
│   ├── webscrap.py                                 # Scraping script
│   └── student_data/                               # Scraped CSVs + images
├── requirements.txt
└── README.md
```

##  ML Component

- Uses `facenet-pytorch` for face detection (MTCNN) and recognition (InceptionResnetV1).
- Downloads and processes the LFW dataset.
- Extracts embeddings from train images and performs cosine similarity matching on test images.
- Evaluates accuracy, classification report, and confusion matrix.

##  Web Scraper

- Uses `requests` + `BeautifulSoup` to extract student names, roll numbers, profile photos, and hostel info from [IITK OA website](https://oa.cc.iitk.ac.in/).
- Saves data in `CSV` format along with profile images in `student_data/images/`.

##  How to Run

### 1. ML Notebook (Google Colab Recommended)
- Upload `nithintm_assignment3_VisiTrack.ipynb` to Colab.
- Run each cell sequentially.
- Upload your Kaggle `kaggle.json` API key to download the dataset.

### 2. Web Scraper (Locally)
```bash
cd Web
pip install -r requirements.txt
python webscrap.py
```

##  Requirements

```text
facenet-pytorch==2.5.2
pillow==9.5.0
scikit-learn
matplotlib
seaborn
torch
bs4
requests
```
Install using:
```bash
pip install -r requirements.txt
```

##  Author

**Nithin TM**  
B.Tech, IIT Kanpur  
Private GitHub Repo: [github.com/FrankyWish/VisiTrack](https://github.com/FrankyWish/VisiTrack)

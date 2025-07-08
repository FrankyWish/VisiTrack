#  IITK Web Scraper – Student Directory

This script scrapes **IIT Kanpur's online directory** to extract basic student metadata and photos.

---

##  How It Works

- Connects to `oa.cc.iitk.ac.in`
- Scrapes data by roll number range
- Extracts:
  - Name, Roll No, Gender
  - Program, Department
  - Email, Hostel Info
  - Student photo (if available)

---

##  Setup Instructions

### 1. Install Required Packages

```bash
pip install requests beautifulsoup4
```

### 2. Run the Scraper

```bash
cd webscraper/
python webscrap.py
```

---

##  Configuration

Edit these in `webscrap.py`:

```python
MAX_RECORDS = 100
START_ROLL = 200000
SAVE_DIR = "student_data"
```

---

##  Output Structure

```
student_data/
├── students_<timestamp>.csv
└── images/
    ├── 200000.jpg
    ├── 200001.jpg
    └── ...
```

---

##  Notes

- Skips students with missing or invalid images
- CSV rows with NaN image paths are ignored during inference
- Requires IITK network/VPN for stable scraping

---

##  Author

**Nithin TM**  
_Assignment-3: VisiTrack_  
IIT Kanpur

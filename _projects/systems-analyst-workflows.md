---
title: "Parsely: A Cross-Platform Text Search Utility Built in Python"
date: 2025-10-14 09:15:00 +0300
subtitle: Desktop Utility for Multi-Format Text Search and Data Review
image: /images/projects/parsely/parsely.png
image_style: contain
image_scale: 25        # ← percent of container width

---
**Role:** Developer & Designer<br>
**Status:** Completed (v1.0)<br>
**Type:** Cross-Platform Desktop Application (Python + Tkinter GUI)

#### Project Motivation
While reviewing large error logs and exported reports in a corporate environment, I found that traditional command-line tools like `grep`, `awk`, and `sed` were unavailable due to managed-device restrictions and disabled Linux subsystems.  
Manual searches through hundreds of CSV, TXT, and PDF files became slow and error-prone.  

Parsely was created as a self-contained, graphical text-search utility that can run **entirely on a standard Windows, macOS, or Linux machine** — no elevated permissions, shell access, or installation required. It provides a fast, user-friendly way to locate keywords or error patterns across files of multiple formats.

#### Development Journey:

##### GUI & Usability
- Built with **Tkinter** and **ttkbootstrap** to achieve a modern, responsive dark-mode interface
- Designed for non-technical users who prefer a simple browse-and-search workflow over terminal commands
- Added dual-term search functionality with side-by-side result panes and color-coded highlights for comparison<br><br>

##### File Parsing & Automation
- Developed a unified search engine supporting `.txt`, `.csv`, `.log`, `.pdf`, `.docx`, and `.xlsx` formats
- Implemented file reading pipelines using `pdfplumber`, `openpyxl`, and `python-docx`
- Automated dependency setup using `venv` and a self-contained `run.py` launcher that ensures a ready environment on first launch<br><br>

##### Cross-Platform & Packaging
- Refactored paths and threading models for full OS agnosticism across Windows, macOS, and Linux
- Prepared the project for **PyInstaller** packaging with `_MEIPASS` resource resolution for assets
- Added a macOS-safe splash screen and multi-OS build automation via `build_all.py`
- Tested execution in virtualized environments to confirm consistent behavior and UI scaling

#### Skills Demonstrated
- Python application architecture and cross-platform packaging design
- GUI development using Tkinter + ttkbootstrap
- Text extraction and pattern matching with regex, PDF, Excel, and Word parsing
- Virtual environment management and automated dependency handling
- OS-agnostic development and build preparation for PyInstaller
- Design of accessible, user-friendly developer tools for constrained environments

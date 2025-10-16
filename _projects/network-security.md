---
title: Tooling Gaps In Util-Linux Library For Network Security Tools
date: 2025-02-20 08:00:00 +0300
subtitle: Cybersecurity/ DFIR Utility
image: /images/projects/network-sec-tools/netsectools-100.jpg
image_style: contain
image_scale: 45        # ← percent of container width
---
#### Project Overview
As part of my hands-on learning in Network and IT Security, I identified a gap in tooling for inspecting wtmp log files on Kali Linux. The package util-linux no longer comes bundled utmpdump for logging wtmp files when run for Kali environments. I needed a way to translate binary wtmp system logs into human-readable text for Digital Forensics and Incident Response (DFIR) purposes.

After looking in to this matter to see what others had tried, I decided to solve this by creating a tool to help me. I designed and built a [cross-platform GUI tool]( https://github.com/micah-e-cole/Network-Security-Tools) that simplifies the translation process — allowing users to select a wtmp file and convert it via a visual interface, without relying on complex terminal commands. 

#### Technical Breakdown:
##### GUI Interface Development
- Developed a lightweight graphical interface using Python and Tkinter, enabling intuitive user interaction
- File-picker dialog allows users to select log files for analysis<br><br>
##### Backend Processing Logic
- Leveraged Python-C bindings and native Linux system tools to parse binary .wtmp logs
- Integrated last and utmpdump system commands for decoding login records<br><br>
##### Security Context
- Built specifically for Kali Linux and other Linux distros used in cybersecurity
- Enables incident responders and security students to explore user login/logout events, session duration, and terminal usage

#### Skills Demonstrated
- Python and C integration for secure system-level automation
- GUI development using Tkinter
- Deep understanding of Linux log structures and DFIR principles
- Custom tooling for real-world cybersecurity applications
- Self-directed learning and solution-oriented development
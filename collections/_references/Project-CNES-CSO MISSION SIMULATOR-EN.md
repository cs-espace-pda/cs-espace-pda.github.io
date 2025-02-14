---
customer : "CNES"
customer_long : "Centre National d'Etudes Spatiales"
prime_contractor : ""
image : "Project-CNES-CSO MISSION SIMULATOR-EN pict 1.png"
size : "small"
name : "CSO Mission Simulator"
title : "CSO Mission Simulator"
domains : "Mission Center"
department : "SPACE"
program : "CSO"
summary : "Develop a mission simulator based on the generic Alis simulation infrastructure."
---

> __Customer__\: Centre National d'Etudes Spatiales (CNES)

> __Programme__\: CSO

> __Supply Chain__\: CNES >  CS Group SPACE


# Context


CS Group responsabilities for CSO Mission Simulator are as follows:
* Design, development, validation

![Main Picture](Project-CNES-CSO MISSION SIMULATOR-EN pict 2.png)

The features are as follows:
* Design of the CSO Mission Simulator, based on the Alis infrastructure
* Development and validation of successive versions.
* Integration of new features (API Mission, IHM ...)
* Regular integration of new versions of Gotlib/Phrlib
* Reversal of features developed for the CSO simulator in Alis

# Project implementation

The project objectives are as follows:
* Develop a mission simulator based on the generic Alis simulation infrastructure.

The processes for carrying out the project are:
* V Cycle

# Technical characteristics

The solution key points are as follows:
* Instance of CNES generic mission simulator platform ALIS
* Mathematical tools,
* ALIS low-level services or business features (mission planning, management of the user requests, etc.),
* LibMission,  GOTLIB/PHRLIB librairies

![Archi Picture](Project-CNES-CSO MISSION SIMULATOR-EN pict 3.png)

The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Hardware environment(s)|PC|
|Operating System(s)|Linux 64-bits, Windows XP/Windows 7|
|Programming language(s)|Java, C, C++|
|Interoperability (protocols, format, APIs)|XML|
|Production software (IDE, DEVOPS etc.)|Eclipse RCP, Testlink, SVN, GForge|
|Main COTS library(ies)|World Wind Java, OpenGL, RMI, XStream, Hibernate, HSQLDB, JNA, VTS (CNES), PrestoPlot (CNES), PHRLIB, GOTLIB|



{::comment}Abbreviations{:/comment}

*[CLI]: Command Line Interface
*[IaC]: Infrastructure as Code
*[PaaS]: Platform as a Service
*[VM]: Virtual Machine
*[OS]: Operating System
*[IAM]: Identity and Access Management
*[SIEM]: Security Information and Event Management
*[SSO]: Single Sign On
*[IDS]: intrusion detection
*[IPS]: intrusion prevention
*[NSM]: network security monitoring
*[DRMAA]: Distributed Resource Management Application API is a high-level Open Grid Forum API specification for the submission and control of jobs to a Distributed Resource Management (DRM) system, such as a Cluster or Grid computing infrastructure.

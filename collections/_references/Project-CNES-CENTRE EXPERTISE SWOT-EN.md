---
customer : "CNES"
customer_long : "Centre National d’Études Spatiales"
prime_contractor : ""
image : "Project-CNES-CENTRE EXPERTISE SWOT-EN pict 1.png"
size : "small"
name : "Centre Expertise SWOT"
title : "SWOT Expertise Center"
domains : "EO Services"
department : "SPACE"
program : "SWOT"
summary : "Provision of a calibration/validation environment of SWOT algorithms. Development and provision of interfacing tools for access to SWOT data. Development and provision of rejects and testing tools for treatments. Treatment orchestrator Treatment Chronos Swot to facilitate the launch of on -demand treatments"
---

> __Customer__\: Centre National d’Études Spatiales (CNES)

> __Programme__\: SWOT

> __Supply Chain__\: CNES >  CS Group SPACE


# Context


CS Group responsabilities for SWOT Expertise Center are as follows:
* Design, development, integration and maintenance

![Main Picture](Project-CNES-CENTRE EXPERTISE SWOT-EN pict 1.png)

The features are as follows:
* Integration of new processing versions.
* Replay of failed mission processings
* Calibration/Validation of algorithms

# Project implementation

The project objectives are as follows:
* Provision of a calibration/validation environment of SWOT algorithms
* Development and provision of interfacing tools for access to SWOT data
* Development and provision of rejects and testing tools for treatments
* Treatment orchestrator Treatment Chronos Swot to facilitate the launch of on -demand treatments

The processes for carrying out the project are:
* V -cycle
* Development in iterations with regular presentations to end users
* Development platform/continuous integration at the CNES accessible to end users

# Technical characteristics

The solution key points are as follows:
* CE-SWOT specific VRE extended from CNES core
* Access to multiple catalogs using OGC standard API STAC with component EODAG of VRE
* Provision of a Hydro repository and an Oceano repository (time series of SWOT products and ground truths)
* Orchestration and launch of processing identical to the SWOT mission with the CHRONOS orchestrator

![Archi Picture](Project-CNES-CENTRE EXPERTISE SWOT-EN pict 2.png)

The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Hardware environment(s)|VMware, HPC5G CNES (Pbs)|
|Operating System(s)|GNU/Linux|
|Programming language(s)|Python|
|Interoperability (protocols, format, APIs)|S3, API REST, OGC STAC, JSON, Zarr, CWL|
|Production software (IDE, DEVOPS etc.)|Gitlab, Jenkins, SonarQube, Artifactory, Docker, Singularity, TimeScaleDB, Docker Compose/Swarm, Ansible, VRE (CNES), CHRONOS (CNES)|



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

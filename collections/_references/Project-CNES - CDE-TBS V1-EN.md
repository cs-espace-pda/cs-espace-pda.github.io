---
customer : "CNES - CDE"
customer_long : "Centre National d'Etudes Spatiales - Commandement de l'Espace"
prime_contractor : ""
image : "Project-CNES - CDE-TBS V1-EN pict 1.png"
size : "small"
name : "TBS V1"
title : "Spatial dashboard - Space command"
domains : "Mission Center, Flight Dynamics, Space Awareness"
department : "SPACE"
program : "SSA"
summary : "Realization for the CNES (main customer) and for the space command (CDE) of an operational demonstrator of the TBS (spatial dashboard), which is the first SSA brick (Space Situation Awareness) of a future center of Military space control (C2) control (C2)."
---

> __Customer__\: Centre National d'Etudes Spatiales - Commandement de l'Espace (CNES - CDE)

> __Programme__\: SSA

> __Supply Chain__\: CNES - CDE >  CS Group SPACE


# Context


CS Group responsabilities for Spatial dashboard - Space command are as follows:
* Development

![Main Picture](Project-CNES - CDE-TBS V1-EN pict 1.png)

The features are as follows:
* **Prototype of the first version of the TBS**:
* Proposal for an evolutionary architecture in accordance with the vision of a future spatial C2
* Focus on the main screen of the TBS (summary vision), a page of the Geo satellites, and a first batch of transverse (import, comic access, etc.) functionalities or desirable for future versions
* Flexibility to integrate new and refined needs of the CDE (better visibility on developments and choices made)

# Project implementation

The project objectives are as follows:
* Realization for the CNES (main customer) and for the space command (CDE) of an operational demonstrator of the TBS (spatial dashboard), which is the first SSA brick (Space Situation Awareness) of a future center of Military space control (C2) control (C2).

The processes for carrying out the project are:
* Agile - Fixed price project

# Technical characteristics

The solution key points are as follows:
* Web server (HTTPS and Secure Websocket, BD PostgreSql), Backend (Java, Jetty)
* Spatial mechanical bookstores
* Fronts access to services (TLE propagation)
* Mapserver server (cartographic)
* Data connectors, Internet reception (Tle on Spacetrack), calculated by CNES algorithms (osmosis: Tles, Aphrodite: threats)

![Archi Picture](Project-CNES - CDE-TBS V1-EN pict 2.png)

The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Hardware environment(s)|PC|
|Operating System(s)|Linux, Windows|
|Programming language(s)|HTML, CSS, Typescript, ToPaZ, Java|
|Interoperability (protocols, format, APIs)|git, Tuleap|
|Main COTS library(ies)|OREKIT, PATRIUS, CESIUM Openlayers|



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

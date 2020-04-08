---
customer: CNES
customer_long: Centre National d'Etudes Spatiales
prime_contractor: 
image: 
size: standard
name: MACCS & MAJA
title: Multi-mission Atmospheric and Cloud Correction Software & MACCS-ATCOR Joint Algorithm
department: PDA
program: Generic
summary: "Extend MACCS tool to processing chain environment (levels 2 and 3) and to enlarge it to all sensors for Venμs, Sentinel 2 and LANDSAT programs. Within the framework of an ESA reflection on a reference level 2 processor, the evolution of MACCS became MAJA by integrating new algorithms."
---

> __Customer__\: Centre National d'Etudes Spatiales (CNES)

> __Program__\: Generic

> __Supply Chain__\: CNES >  CS Group PDA


# Context

MACCS (Multi-sensor Atmospheric Correction and Cloud Screening) is a level 2A processing chain that detects clouds and their shadows, estimates the optical thickness of aerosols, the amount of water vapour, and corrects atmospheric effects. The chain was developed jointly by CESBIO and CNES. CESBIO developed the methods and a prototype, while CNES took charge of the operational version of the chain, which CESBIO largely contributed to validate.

More recently, CNES+CESBIO and DLR decided to pool their efforts to develop the MAJA chain (MACCS-ATCOR Joint Algorithm). This chain is an evolution of the MACCS chain in which methods from the DLR's ATCOR chain will be progressively added. MAJA V1.0 a MACCS should have been called MACCS V6.0, but CNES and DLR preferred to change the name to celebrate their agreement in this area.

The MAJA chain (MACCS ATCOR Joint Algorithm) is a cloud detection and atmospheric correction chain based on Orfeo ToolBox (OTB).

Read more: [MAJA](https://pda.csgroup.space/product-maja.html)



CS Group responsabilities are as follow:
* Fine analysis of specifications and design
* Implementation following the Orfeo Toolbox (OTB) formalization
* Fine validation of algorithms
* Contribution to the development of the OTB


The features are as follow:
* Specifications analysis
* Algorithms development and unitary tests
* Algorithms validation
* Integration in the ORFEO Tool Box
* Automatic testing procedures
* Adaptation to FormoSat-2 and Sentinel-2 products
* Adaptation to LandSat-5 and LandSat-7 products
* Adaptation to LandSat-8 and Spot-4 products The following expertise topics are necessary: Atmospheric corrections, precipitation and cloud effects, ground slope effects; Masks for clouds, snow, glitter, hot spot, water bodies

# Project implementation

The project objectives are as follow:
* Extend MACCS tool to processing chain environment (levels 2 and 3) and to enlarge it to all sensors for Venμs, Sentinel 2 and LANDSAT programs. 
* Within the framework of an ESA reflection on a reference level 2 processor, the evolution of MACCS became MAJA by integrating new algorithms.

The processes for carrying out the project are:
* Continuous development and integration (coding/unit testing),
* Customized Eclipse, CMake/Cdash, Automatic Test Plan Generator (with test execution and insertion of results in the document).
* Automatic generation of the Test Plan

# Technical characteristics

The solution key points are as follow:
* C++ software build on OTB libraries



The main technologies are as follow.

{:class="table table-bordered table-dark"}
| Domain | Technologie(s) |
|--------|----------------|
|Operating System(s)|Linux 64 bits, RedHat 5./6./7.|
|Programming language(s)|C++, Python|
|Interoperability (protocols, format, APIs)|SENTINEL SAFE, MUSCATE, LANDSAT product format|
|Production software (IDE, DEVOPS etc.)|GCC|
|Main COTS library(ies)|Intersecteur3D, GDAL, HDF, OpenJPEG, ORFEO Tool Box (OTB)|



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

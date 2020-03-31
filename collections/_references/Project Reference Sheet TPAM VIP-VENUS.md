---
customer: CNES
customer_long: Centre National d'Etudes Spatiales
prime_contractor: 
image: Project Reference Sheet TPAM VIP-VENUS pict 1.png
size: standard
name: TPAM VIP-VENUS
title: Maintenance of the Venµs Image Quality (VIP) center
department: PDA
program: Venμs
summary: "Delivering an operational VIP/VPDS image processing center that takes into account the constraints of the VENµS mission during the operational phase."
---

> __Customer__\: Centre National d'Etudes Spatiales (CNES)

> __Program__\: Venμs

> __Supply Chain__\: CNES >  CS Group PDA


# Context


![Main Picture](Project Reference Sheet TPAM VIP-VENUS pict 1.png)

CS Group responsabilities are as follow:
* Maintenance of the data center (VIP), the distribution server (VPDS), the qalification and operation support tools within the VEnµS ground segment


The features are as follow:
* Upgrade of COTS, image libraries and missions used by the center,
* Functional validation of the VIP center and VPDS,
* Integration of the PDS component developed by ACS, 
* VIP Integration / Validation,
* Dimensioning of the hardware architecture and its upgrade,
* QT/QO phase support,
* Evolutive and Corrective maintenance during the mission,

# Project implementation

The project objectives are as follow:
* Delivering an operational VIP/VPDS image processing center that takes into account the constraints of the VENµS mission during the operational phase.

The processes for carrying out the project are:
* Development and continuous integration (coding/unit tests)

# Technical characteristics

The solution key points are as follow:
* Integration of the MACCS (image processor level L2/L3°) component,
* The image chain has taken into account the processing of stray light in the image processing chain (level L1).

![Archi Picture](Project Reference Sheet TPAM VIP-VENUS pict 2.png)

The main technologies are as follow.

{:class="table table-bordered table-dark"}
| Domain | Technologie(s) |
|--------|----------------|
|Operating System(s)|Linux  CentOS 6.5|
|Programming language(s)|JAVA,JAVASCRIPT, C,C++, Python, PHP, SQL, SWING, ksh,HTML|
|Interoperability (protocols, format, APIs)|XML|
|Main COTS library(ies)|LAI (Euclide, POLLUX, MARIO, GDAL  ..), PHRLIB , MSLIB|

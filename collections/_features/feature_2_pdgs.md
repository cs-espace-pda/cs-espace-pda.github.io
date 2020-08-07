---
title: 'Ground Segment'
image: 'domain-pdgs-icon.svg'
type: activity
page: /feature-2-pdgs.html
---

What is a PDGS?
---------------

The Payload Data Ground Segment (PDGS) is responsible for exploitation of the instrument data. It operationally generates the user products and distributes processed Level-1C and Level-2A products.
Real-time sensed data as well as data played back from on-board saved data are downlinked directly to ground or via the European Data Relay Satellite (EDRS), received, down-converted, demodulated and transferred to the processing facilities for systematic generation and archiving of Level-0 and Level-1/2 data products.

The PDGS includes the facilities responsible for:

- Reception of sensor data and auxiliary data (nrear real time processing);
- Processing of MSI Level-0 to produce Level-1 and Level-2 products applying all the necessary processing algorithms and formatting techniques;
- On demand processing allows requested by external users and hosted inside the PDGS infrastructure;
- Online quality contrrol;
- Production monitoring, including timeliness and completness;
- Rolling Archive;
- Dissemination.

It interacts with other major components of the ground segment:
* Core Ground Stations - the network of X-band core ground stations located in Alaska, USA, Matera, Italy, Maspalomas, Spain and Svalbard, Norway, are responsible for data acquisition and near real-time processing.
* Processing and Archiving Centres - PACs perform long-term data archiving, data access and systematic non-time critical data processing. Archiving and long-term preservation of data is ensured for all Level-0 data and for a set of configurable systematic higher level products.
* Mission Performance Centres - MPCs are responsible for calibration, validation, quality control and end-to-end system performance assessment. The MPCs include expert teams for specific cal/val, off-line quality control and algorithm correction activities.
* Precise Orbit Determination - POD facilities make use of the GNSS receiver data on-board the SENTINEL satellites to deliver the orbital information needed for generation of mission products.

Main Skills
-----------

We are specialists in the design and execution of ground segment payload data processing centers (PDGS):
* Overall system understanding;
* Knowledge of the constraints and operating requirements of processors;
* Knowledge of data formats and associated constraints;
* Cloud and HPC infrastructure, involving [our team of specialists infra](feature-3-infra.html);
* Optimized processing choregraphy or orchestration;
* Processing cloudification;
* System monitoring;
* Production monitoring with customized KPI.

Detailed activities
-------------------

Our solutions meet the high demands of HPC and cloud execution:
* Implementation of the whole infrastructure with our [Infra Team](feature-3-infra.html)
* Implementation of container-based execution cores with either orchestrators (centralized architecture) or choreography (for resource-saving mass processing) 
* Implementation of storage and exchange systems (in particular object storage)
* Implementation of interfaces with PDGS supplier and customer systems
* Definition of processor encapsulation rules: containerization, Docker / Singularity compatibility
* Hardware optimization by targeting the machine type of the project
* Optimization of processor bundles: find the right balance between several processors with regard to the data handled, the location of the data and the hardware required.
* Code optimization: identification of algorithms that can be accelerated, benchmarking, complexity optimization, caching.
* Component optimization: promotion of high-performance open-source libraries. 
* Adaptability to cloud/HPC constraints: limited memory execution, calculation time vs. CPU number, controlled disk writing, controlled network access.
* Compliance with maintainability criteria: coding rules, target KPIs under Sonar, UT rate, list of recommended / prohibited technologies, etc.
* Compliance with legal aspects: in particular licences compatible between processors and with the platform.

Our key references
------------------

{{site.data.str.pda}} develops in particular the [migration of the Copernicus Sentinel-1 PDGS to the Cloud](project-esa-s1-pdgs-en.html) and the Copernicus Sentinel-2 MPC.

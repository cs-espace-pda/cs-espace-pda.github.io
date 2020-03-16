---
customer: CNES/CESBIO
customer_long: 
image: Project Reference Sheet IOTA2 pict 1.png
size: standard
name: IOTA2
title: IOTA² - land-use map production line for large areas based on time series of Sentinel or Landsat images
department: PDA
period: 2016-2020
program: Generic
summary: "Annual production of a national land use map. Testing new algorithms over large areas."
---

# Overview


# Context

IOTA² is a land-use map production line for large areas based on time series of Sentinel or Landsat images. In order to facilitate methodological contributions, IOTA² is open-source. As such, the channel makes extensive use of the image processing applications provided by Orfeo ToolBox.

![Main Picture](Project Reference Sheet IOTA2 pict 1.png)

CS Group responsabilities are as follow:
* Maintenance and evolution of the IOTA² chain in order to meet the needs of land use map production
* User support.


The features are as follow:
* Use of sensors of different types (optical/radar) to obtain better quality classifications. 
* Users can provide exogenous data as well as primitive data.
* Possibility of spatially delineating learning zones.
* Automatic calculation of primitives allowing the help to determine the label.
* Merging classifications.
* Automatic generation of coefficients allowing the evaluation of the quality of the classification.
* Division into stages of the chain allows it to be launched only on very specific stages.

# Project implementation

The project objectives are as follow:
* Annual production of a national land use map.
* Testing new algorithms over large areas.


| Characteristic 	| Value |
|----------------	|-------|
| Start				| Tue Jan 26 01:00:00 CET 2016 |
| End				|  |
| Duration 			| Since 2016 (4,1 years) |
| Workload			| 12 men x months |


The processes for carrying out the project are:
* Software V-Model

# Technical characteristics

The solution key points are as follow:
* Automatic installation with its dependencies
* Combined use of Orfeo ToolBox multi-threading and MPI speeds up calculations.
* Understanding of different N2A product formats (THEIA + PEPS) to be able to classify as many geographical areas as possible.



The main techonlogies are as follow.

COTS, Libraries: OTB, GDAL, Qgis
License: AGPL-3.0
OS: Unix, Linux Ubuntu, CentOS
Main languages: Python, C++

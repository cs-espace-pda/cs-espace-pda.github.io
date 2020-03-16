---
customer: BGU
customer_long: Ben-Gurion University of the Negev
image: Project Reference Sheet BIP pict 1.jpeg
size: standard
name: BIP
title: BGU-VENµS Images Production
department: PDA
period: 2015-2020
program: VENµS
summary: "Produce BGU's L2 and L3 images from the L1 data provided by CNES"
---

# Overview


# Context

The mission VENµS (Vegetation and Environment monitoring on a New Micro Satellite) is the result of cooperation between France and Israel. 
This mission has two objectives:
* the technological mission led by Israel aims to demonstrate the capabilities of the IHET (Israeli Hall Effect Thruster)
* The scientific mission led by CNES aims to acquire high-resolution multispectral images at two-day intervals for applications in a variety of fields (agriculture, forestry, atmospheric studies, etc.) 
Three levels of products VENµS can thus be made available to the scientific community:
* level 1 (L1) products: multispectral images by TOA (Top Of Atmosphere) reflectance after radiometric corrections, calibrated and geocoded.
* Level 2 products (L2): multispectral images by surface reflectance after atmospheric corrections accompanied by qualitative masks (clouds, snow, water, etc.).
* Level 3 products (L3): multi-temporal synthesis of cloudless pixels from cloud-free products.
The Ben Gurion University of the Negev, within the framework of this cooperation, wishes to produce its own L2 and L3 images from the L1 data provided by CNES.

![Main Picture](Project Reference Sheet BIP pict 1.jpeg)

CS Group responsabilities are as follow:
* specification, development, on-site integration, 
* user manual authoring, support (training) 
* maintenance of the BIP workflow and BIP data catalog


The features are as follow:
* __The BIP workflow__: creation of an image processing chain management tool based on Geostorm workflow technology and control of the MACCS software, enabling the production of levels L2 and L3.
* __The BIP data catalog__: realization of a data catalog based on the GeoNetwork web technology, allowing to browse the metadata of the L2 and L3 products, as well as to view overviews and rights-of-way of these same products, all on a cartographic background of Israel.

# Project implementation

The project objectives are as follow:
* Produce BGU's L2 and L3 images from the L1 data provided by CNES


| Characteristic 	| Value |
|----------------	|-------|
| Start				| Fri May 01 02:00:00 CEST 2015 |
| End				| Mon Aug 31 02:00:00 CEST 2020 |
| Duration 			| 5,3 years |
| Workload			| 4 men x months |


The processes for carrying out the project are:
* Software V-Model

# Technical characteristics

The solution key points are as follow:
* Expertise in satellite imagery applied to various themes: agriculture, environment, land use planning, natural risks, etc.
* Ability to integrate MACCS (developed by CS for CNES) into a processing chain..
* Skills in the development of production chain management tools and open-source web technologies.

![Archi Picture](Project Reference Sheet BIP pict 2.png)

The main techonlogies are as follow.

COTS, Libraries: MACCS (Multi-mission Atmospheric Correction and Cloud Screening), Geostorm
Software for production: Git, Docker, Jenkins
OS: Linux
Formats & Protocols: XML, GeoNetwork
Main languages: Python, Java, J2EE/WS, HTML, Javascript

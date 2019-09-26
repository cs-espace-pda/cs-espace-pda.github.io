---
customer: CNES
group: image
image: product_maja_screenshot.png
investment: master
license: CNES Property
no_sheet: false
remote_url: https://logiciels.cnes.fr/fr/node/57
size: standard
title: 'MAJA'
type: app
v_lib: MAJA chain
---


Overview
--------

The {{page.v_lib}} (MACCS ATCOR Joint Algorithm, pronounced "maya") is a cloud detection and atmospheric correction chain. It is suitable for processing time series of high-resolution images acquired from constant or almost constant angles of view. In particular, it allows the processing of data from LANDSAT and SENTINEL-2.  It is based on the MACCS chain developed by CNES and CESBIO since 2008, and gradually incorporates methods from the DLR ATCOR chain since 2016. It is therefore now the subject of collaboration between CNES, DLR and CESBIO, and receives financial support from ESA.

![{{page.v_lib}} picture](product_maja_screenshot.png)

Features
--------

{{page.v_lib}}'s main features are:
1. Use the multi-temporal information contained in the images to detect clouds and their shadows
2. Estimate the atmospheric content of aerosols and water vapour
3. Correct atmospheric effects (taking into account environmental effects and relief effects


Technical caracteristics
------------------------

Software languages are:
* C++
* Python
* Cmake

{{page.v_lib}} is compliant with the following operating systems:
* Linux RedHat 6+
* CentOS 6+
* Ubuntu 12+



{% include what-pda-can-bring-you-lib.md %}
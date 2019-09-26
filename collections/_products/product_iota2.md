---
customer: CNES/CESBIO
group: image
image: product_iota2_logo.png
investment: contrib
license: AGPL-3.0
remote_url: https://framagit.org/inglada/iota2
size: little
title: 'IOTA&#178;'
type: lib
v_lib: IOTA&#178;
---


Overview
--------

{{page.v_lib}} is a land-use map production line for large areas based on time series of Sentinel or Landsat images. 
In order to facilitate methodological contributions, {{page.v_lib}} is open-source. As such, the channel makes extensive use of the image processing applications provided by [Orfeo ToolBox]({{site.baseurl}}product-orfeotb.html).

{:.alert .alert-info  }
{{site.data.str.pda}} for the maintenance and evolution of {{page.v_lib}} to meet the needs of land use map production, as well as user support.


Features
--------

{{page.v_lib}}'s main features are:
* Automatic installation of the chain and its dependencies 
* Use of sensors of different types (optical/radar) to obtain better quality classifications. Understanding of different N2A product formats (THEIA + PEPS) to be able to classify as many geographical areas as possible.
* Users can provide exogenous data as well as primitive data.
* Possibility of spatially delineating learning zones.
* Automatic calculation of primitives allowing the help to determine the label.
* Merging classifications.
* Automatic generation of coefficients allowing the evaluation of the quality of the classification.
* Division into stages of the chain allows it to be launched only on very specific stages.
* Combined use of [Orfeo ToolBox]({{site.baseurl}}product-orfeotb.html) multi-threading and MPI speeds up calculations.


Technical caracteristics
------------------------

Software languages are:
* C++
* Python

{{page.v_lib}} is compliant with the following operating systems:
* Unix
* Linux Ubuntu
* CentOS

Related software:
* [Qgis](https://www.qgis.org/fr/site/)

Dependencies:
* [Orfeo ToolBox]({{site.baseurl}}product-orfeotb.html)
* [GDAL]({{site.baseurl}}product-gdal.html)


{% include what-pda-can-bring-you-lib.md %}
---
customer: ESA
customer_long: European Space Agency
prime_contractor: CAP GEMINI IT.
image: Project ESA-PRODUCTION SENTINEL 2-EN pict 1.png
size: standard
name: Production Sentinel 2
title: ESA CSC Production Service Sentinel 2
domains: Platform, EO Services
department: ESPACE
program: Copernicus
summary: "Systematic Production Service operations for Sentinel 2 satellite. 24/7 operations. Production SLA of 75 min for L1C and 120 minutes for L2A products"
---

> __Customer__\: European Space Agency (ESA)

> __Programme__\: Copernicus

> __Supply Chain__\: ESA > CAP GEMINI IT. >  CS Group ESPACE


# Context


![Main Picture](Project ESA-PRODUCTION SENTINEL 2-EN pict 2.png)

CS Group responsabilities are as follows:
* Development of the cloud native Sentinel 2 processing chain 
* Maintenance
* Operations


The features are as follows:
* Sentinel 2 processing system:
	* XBIP ingestion
	* IPF integration
	* Spring Cloud Data Flow (SCDF) and Kafka cloud-native and open-source workflow management 
	* CEPH FS high performance storage
	* Fine tuning of processing strategy

# Project implementation

The project objectives are as follows:
* Systematic Production Service operations for Sentinel 2 satellite
* 24/7 operations
* Production SLA of 75 min for L1C and 120 minutes for L2A products

The processes for carrying out the project are:
* Agile, Continuous integration

# Technical characteristics

The solution key points are as follows:
* A micro-service architecture has proven its benefits in the past years, especially on operational systems delivering services with public access through Internet, including Commercial Public Cloud. It is a robust architecture relying on independent, self-deployable software components bricks.

![Archi Picture](Project ESA-PRODUCTION SENTINEL 2-EN pict 3.png)

The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Hardware environment(s)|cloud and K8S|
|Operating System(s)|linux CentOS|
|Programming language(s)|java, python|
|Interoperability (protocols, format, APIs)|maven, docker file, k8s yaml|
|Production software (IDE, DEVOPS etc.)|VS Code, Eclipse|
|Main COTS library(ies)|Alluxio, Apache Guacamole, Blackbox Exporter, Calico, ClamAV, Docker, ElasticSearch, Fluentbit, Fluentd, FreeIPA, Go Runtime, Grafana, Graylog, GRIB API, Harbor|



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

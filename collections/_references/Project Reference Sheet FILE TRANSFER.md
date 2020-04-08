---
customer: ADS-GEO
customer_long: Airbus Defense and Space Geo
prime_contractor: 
image: Project Reference Sheet FILE TRANSFER pict 1.png
size: standard
name: FILE TRANSFER
title: Common service involved in the Geo Digital System (GDS) of Airbus DS Geo SA
department: PDA
program: Geo Digital System
summary: "File transfer Service ensures massive files data exchange between GDS sub-systems and others services of system. Optional pre/post processing are realized on the data transferred."
---

> __Customer__\: Airbus Defense and Space Geo (ADS-GEO)

> __Program__\: Geo Digital System

> __Supply Chain__\: ADS-GEO >  CS Group PDA


# Context


![Main Picture](Project Reference Sheet FILE TRANSFER pict 1.png)

CS Group responsabilities are as follow:
* Maintenance, Reversibility


The features are as follow:
* Transfers start automatically by polling storages or by receiving messages (MessageQueuing) or requests (WebService)
* Manages both cloud and local storage
* Three entry points: Message Queuing service, REST API, MMI for supervisor accounts
* Monitors transfer data process: error handling, transfers status management, logs management
* Authentication: from service IAM and LDAP
* MMI proposes to: 
	* monitor the transfers process,
	* create units and routes,
	* monitor file transfer’s systems.

# Project implementation

The project objectives are as follow:
* File transfer Service ensures massive files data exchange between GDS sub-systems and others services of system.
* Optional pre/post processing are realized on the data transferred.

The processes for carrying out the project are:
* Continuous integration
* Requirements engineering

# Technical characteristics

The solution key points are as follow:
* RESTful web services architecture (BackEnd) 
* Independent software components provide great modularity
* Load-balancing mechanism
* Redundancy system
* Structure based on container platforms (docker)



The main technologies are as follow.

{:class="table table-bordered table-dark"}
| Domain | Technologie(s) |
|--------|----------------|
|Operating System(s)|Linux|
|Programming language(s)|Java, Python, Bash, HTML, XSL, CURL|
|Interoperability (protocols, format, APIs)|JSON, XML, LDAP, FTP, FTPS, SFTP, GRIDFTP, FXP, CLOUD S3, RESTful API, AMQP, TLS v1.2|
|Production software (IDE, DEVOPS etc.)|Eclipse, Testlink|
|Main COTS library(ies)|Angular 2, Spring, Docker, PostgreSQL, RabbitMQ, Maven, Hibernate, Apache Commons|



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

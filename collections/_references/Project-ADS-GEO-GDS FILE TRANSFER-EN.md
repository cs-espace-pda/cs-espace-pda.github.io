---
customer : "ADS-GEO"
customer_long : "Airbus Defense & Space Geo"
prime_contractor : ""
image : "Project-ADS-GEO-GDS FILE TRANSFER-EN pict 1.png"
size : "small"
name : "GDS FILE TRANSFER"
title : "Common service of File Transfer involved in the Geo Digital System (GDS) of Airbus DS Geo SA"
domains : "Platform"
department : "SPACE"
program : "Geo Digital System"
summary : "File Transfer Service ensures massive data exchange between GDS components and other services of the system. Transfer is launched either by polling storage areas, either by receiving messages or demands. Optional pre/post processing are realized on the transferred data"
---

> __Customer__\: Airbus Defense & Space Geo (ADS-GEO)

> __Programme__\: Geo Digital System

> __Supply Chain__\: ADS-GEO >  CS Group SPACE


# Context

Managed protocols : FTP/FTPS/SFTP/GRIDFTP/FXP, CLOUD S3, local, API Rest, AMQP, TLS V1.2 
 Automatic transfer starts by polling storages areas or by receiving messages (MessageQueuing) or requests (WebService)
 Authentication of users made though IAM and LDAP Services
 MMI dédicated to administrators and supervisors: 
 * monitor the transfers process,
 * create units and routes,
 * monitor file transfer’s systems.

CS Group responsabilities for Common service of File Transfer involved in the Geo Digital System (GDS) of Airbus DS Geo SA are as follows:
* Maintenance, Reversibility

![Main Picture](Project-ADS-GEO-GDS FILE TRANSFER-EN pict 1.png)

The features are as follows:
* Management of many protocols for transfer (FTP, CLOUD S3, API Rest, ...)
* Management of heterogeneous storage areas (CLOUD or local directories)
* Monitoring of data transfer processes (error handling, transfers status management, logs management)
* Authentication of users
* MMI dedicated to administrators and supervisors for system management

# Project implementation

The project objectives are as follows:
* File Transfer Service ensures massive data exchange between GDS components and other services of the system
* Transfer is launched either by polling storage areas, either by receiving messages or demands 
* Optional pre/post processing are realized on the transferred data

The processes for carrying out the project are:
* Continuous integration

# Technical characteristics

The solution key points are as follows:
* Architecture Rest,
* RESTfull web services (BackEnd):
*   --> Independent software components provide great modularity
*   --> Load-balancing mechanism
*   --> API Rest
* Redundancy system
* Structure based on container platforms (dockers).



The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Operating System(s)|Linux|
|Programming language(s)|Java, Python, Bash, HTML, XSL, CURL|
|Interoperability (protocols, format, APIs)|JSON, XML, LDAP, FTP, FTPS, SFTP, GRIDFTP, FXP, CLOUD S3, RESTful API, AMQP, TLS v1.2|
|Production software (IDE, DEVOPS etc.)|Eclipse, Testlink, Docker, Maven|
|Main COTS library(ies)|Angular 2, Spring, PostgreSQL, RabbitMQ, Hibernate, Apache Commons|



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

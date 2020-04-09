---
customer: ADS GEO
customer_long: Airbus Defense and Space Geo
prime_contractor: 
image: Project ADS GEO-NOTIFICATION COMMON SERVICE pict 1.png
size: standard
name: NOTIFICATION COMMON SERVICE
title: Common service involved in the Geo Digital System (GDS) of Airbus DS Geo SA
department: PDA
program: Geo Digital System
summary: "Notification Service processes and delivers notification requests of GDS sub-systems and others services to the corresponding GDS technical services. Processes and formats the notification requests from patterns: instantiation of message model, elements by using key/value and names of recipients."
---

> __Customer__\: Airbus Defense and Space Geo (ADS GEO)

> __Program__\: Geo Digital System

> __Supply Chain__\: ADS GEO >  CS Group PDA


# Context


![Main Picture](Project ADS GEO-NOTIFICATION COMMON SERVICE pict 1.png)

CS Group responsabilities are as follow:
* From design to Validation, sUupport service for deplyment and use


The features are as follow:
* Manages different media for delivery: Mail, SMS, WebHook
* Offers multiple entry points: 
	* Message Queuing service
	* API Rest for external service
	* Mailbox service for legacy mails
	* MMI for supervisor accounts
* Monitors notification requests: error handling, notifications status management, logs management
* User authentication: service IAM and LDAP
* MMI proposes to:
	* monitor the notification requests
	* create templates and notification definitions
	* send new notification requests
	* monitor systems

# Project implementation

The project objectives are as follow:
* Notification Service processes and delivers notification requests of GDS sub-systems and others services to the corresponding GDS technical services.
* Processes and formats the notification requests from patterns: instantiation of message model, elements by using key/value and names of recipients.

The processes for carrying out the project are:
* Continuous integration

# Technical characteristics

The solution key points are as follow:
* Structure based on container platforms (docker).
* Independent software components provide great modularity, 
* Web generic MMI,
* RESTful web services,
* Deployment with Kubernetes on a Airbus DS Geo SA cloud.



The main technologies are as follow.

{:class="table table-bordered table-dark"}
| Domain | Technologie(s) |
|--------|----------------|
|Operating System(s)|Linux|
|Programming language(s)|Java, Python, SQL|
|Interoperability (protocols, format, APIs)|XML, LDAP|
|Production software (IDE, DEVOPS etc.)|Eclipse, Testlink, Docker|
|Main COTS library(ies)|React, Spring, PostgreSQL, Kubernetes, RabbitMQ, maven, hibernate, apache commons, JAXB, redis|



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

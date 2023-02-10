---
customer: ADS-GEO
customer_long: Airbus Defense & Space Geo
prime_contractor: 
image: Project ADS-GEO-GDS NOTIFICATION COMMON SERVICE-EN pict 1.png
size: small
name: GDS NOTIFICATION COMMON SERVICE
title: Common service involved in the Geo Digital System (GDS) of Airbus DS Geo SA
domains: Platform
department: SPACE
program: Geo Digital System
domains: Platform
summary: "Notification Service processes and delivers in different media all notification requests of GDS sub-systems and others services of system for external or internal users"
---

> __Customer__\: Airbus Defense & Space Geo (ADS-GEO)

> __Programme__\: Geo Digital System

> __Supply Chain__\: ADS-GEO >  CS Group SPACE


# Context

Objectives for Notification Service are :
* To receive notifications through Message Queuing Common service,
* To process and if necessary to format the notification requests from patterns (instantiation of message model, elements by using key/value and names of recipients)
* To transfer the processed and instantiated notification requests to corresponding GDS technical services to deliver the notifications.

CS Group responsabilities for Common service involved in the Geo Digital System (GDS) of Airbus DS Geo SA are as follows:
* Design, Development, Support service for deployment and use

![Main Picture](Project ADS-GEO-GDS NOTIFICATION COMMON SERVICE-EN pict 1.png)

The features are as follows:
* Management of media for notifications delivery (Mail, SMS, WebHook)
* Multiple entry points: Message Queuing service,  API Rest (external service), Mailbox service (legacy mails), MMI (admin/supervisor accounts)
* Monitors notification requests (error handling, notifications status management, logs management)
* Authentication of users from service IAM and LDAP
* MMI for system and notification request monitoring, templates and notification definitions creation, new notification requests

# Project implementation

The project objectives are as follows:
* Notification Service processes and delivers in different media all notification requests of GDS sub-systems and others services of system for external or internal users

The processes for carrying out the project are:
* Continuous integration

# Technical characteristics

The solution key points are as follows:
* Structure based on container platforms (dockers)
* Independent software components provide great modularity
* Web generic MMI
* RESTful web services
* Deployment with Kubernetes on a Airbus DS Geo SA cloud



The main technologies used in this project are:

{:class="table table-bordered table-dark"}
| Domain | Technology(ies) |
|--------|----------------|
|Operating System(s)|Linux|
|Programming language(s)|Java, Python, SQL|
|Interoperability (protocols, format, APIs)|XML, LDAP, RESTful API|
|Production software (IDE, DEVOPS etc.)|Eclipse, Testlink|
|Main COTS library(ies)|React, Spring, Docker, Kubernetes, PostgreSQL, RabbitMQ, Maven, Hibernate, Apache Commons, JAXB, redis|



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

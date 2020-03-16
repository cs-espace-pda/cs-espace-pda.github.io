---
customer: CNES
customer_long: 
image: Project Reference Sheet CHRONOS pict 1.png
size: standard
name: CHRONOS
title: Realization of a processing orchestrator and mission for SWOT
department: PDA
period: 2018-2021
program: Generic
summary: "Design, build and commission a generic processing orchestrator for the SWOT data production centre."
---

# Overview


# Context



![Main Picture](Project Reference Sheet CHRONOS pict 1.png)

CS Group responsabilities are as follow:
* Specification & Design
* Realization of developments
* Mission Statement


The features are as follow:
* Running workflows on local, HPC or Cloud resources (no locking)
* Exploitation: 
	* Ergonomic and modern web HMI;
	* Monitoring the execution of workflows;
	* Visualization of the links between input data, processing chains and output data;
	* Alerts and acknowledgements;
	* Access to logs, execution contexts, pause/resume.
* Monitoring: HMI activity report; System status monitoring.
* Security: Management of access rights; High availability.
* Efficient: 200K tasks / day, 100M processing instances, 500M references.

# Project implementation

The project objectives are as follow:
* Design, build and commission a generic processing orchestrator for the SWOT data production centre.


| Characteristic 	| Value |
|----------------	|-------|
| Start				| Sat Dec 01 01:00:00 CET 2018 |
| End				| Wed Dec 01 01:00:00 CET 2021 |
| Duration 			| 3,0 years |
| Workload			| 0 men x months |


The processes for carrying out the project are:
* Software V-Model, Requirement engineering, Continuous Integration

# Technical characteristics

The solution key points are as follow:
* HPC/Cloud hybridization for running processing workflows using Apache Mesos and SafeScale™
* Workflow description with CWL standard
* Integration of many COTS and in particular the TOIL workflow manager
* Micro-service architecture
* Easy to maintain: API; Extension points for HMIs; Extensible data model.



The main techonlogies are as follow.

COTS, Libraries: Hibernate, JAXB, AdminLTE, GFal2, Spring, Docker, Postgresql, RabbitMQ, IPA, KeyCloack, ElasticStack, GitLab, Centreon, Toil, Apache Mesos, SafeScale, Apache Atlas, Ansible, AWX
Software for production: Git
License: CNES Property
OS: Linux RH Secure
Formats & Protocols: CWL, REST, AMQP, Yaml, XML
Main languages: Java, Python, SQL

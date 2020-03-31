---
customer: ESA
customer_long: European Space Agency
prime_contractor: CS ROMANIA
image: Project Reference Sheet TAO pict 1.png
size: standard
name: TAO
title: Tool Augmentation by user enhancements and Orchestration
department: PDA
program: Generic
summary: "TAO platform (stands for Tool Augmentation by user enhancements and Orchestration) is a lightweight, generic integration and distributed orchestration framework."
---

> __Customer__\: European Space Agency (ESA)

> __Program__\: Generic

> __Supply Chain__\: ESA > CS ROMANIA >  CS Group PDA


# Context


![Main Picture](Project Reference Sheet TAO pict 1.png)

CS Group responsabilities are as follow:
* Project owner and the master developer (master branch)
* Specification & Design
* Maintenance


The features are as follow:
* Visual integration of EO processing toolboxes
* A pre-defined set of Docker containers for Orfeo Toolbox, SNAP, GDAL and Python 2.7
* Visual definition of processing workflows by drag-and-drop and easy parametrization 
* Integration of user-defined algorithms in the processing workflows
* Visual definition of execution topologies
* Orchestrated execution of workflows such as Torque or SLURM
* Self-contained containerized execution on remote nodes
* Basic visual monitoring of executions and topology nodes resources

# Project implementation

The project objectives are as follow:
* TAO platform (stands for Tool Augmentation by user enhancements and Orchestration) is a lightweight, generic integration and distributed orchestration framework.

The processes for carrying out the project are:
* Software V-Model

# Technical characteristics

The solution key points are as follow:
* Spring Framework
* A simple view of the TAO platform model split among four main macro-components

![Archi Picture](Project Reference Sheet TAO pict 2.png)

The main technologies are as follow.

{:class="table table-bordered table-dark"}
| Domain | Technologie(s) |
|--------|----------------|
|Operating System(s)|Linux|
|Programming language(s)|Java, Python|
|Production software (IDE, DEVOPS etc.)|Git, Docker|
|Main COTS library(ies)|PostgreSQL, SNAP, Orfeo Toolbox, Slurm, Torque|

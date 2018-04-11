+++
publishdate = 2018-03-28T22:00:00+02:00
draft = false

title = "Release Notes"
subtitle = "Release dates, performance improvements, new features, bug fixes, etc."
description = "Release notes: release dates, performance improvements, new features, bug fixes, etc."
+++

{{% container %}}

## Version 8.0 (Aladdin) - Mar 2, 2018

### Community Version

- Azure cognitive Services (You want to know if you smile enough in your selfies? Check the Emotion API workflow ;) )
- Bug Fixes
- New templates

### Enterprise Version

- Job planner automation portal and service (Never been so easy to schedule a workflow!)
- Workflow description and documentation link in the cloud & workflow automation portals (You still don't know what Iris dataset is? Time to read the documentation... )
- Scala tasks (Yeah scala!)


___

## Version 7.33 - Dec 11, 2017

### Community Version

- Improve catalog display with custom logos

### Enterprise Version

- Machine learning workflows
- Complete management of buckets at menu level
- Better support of HostsFileBasedInfrastructure (ex. SSH2)
- Improvements on the Nodes & Task Recovery
- Import script in a task by reference from the catalog
- Submit workflows in the catalog directly using the scheduler api in any task

___

## Version 7.32.1 - Dec 12, 2017

### Community Version

- Python script engine
- Great boost on the usability of the studio portal

### Enterprise Version

- Workflow catalog with unique names
- Data Streaming IT Workflow
- DataVisualization::Visdom
- Proper Task Variables Inheritance
- ProActive Packages
- Proper description of fields and tasks in the studio
- Ability to select the bucket to use for the templates

___

## Version 7.32 - Oct 15, 2017

### Community Version

- Job permissions per user groups
- Centralize all workflows in a single place
- Nodes Recovery
- Scheduler-aware-rm-policy
- Reorganised The Studio Menu

### Enterprise Version

- Secure catalog by user groups
- Fully configure Proactive in WAS
- MAAS integration in the Connector-iaas
- New workflows for anomaly detection on log files, and updated Image Analysis workflows for object segmentation in images.

___

## Version 7.30 - Sept 30, 2017

### Community Version

- Centralize all workflows in a single place
- Nodes Recovery
- Reorganised The Studio Menu

### Enterprise Version

- Secure catalog by user groups
- Job permissions per user groups
- Fully configure Proactive in WAS
- MAAS integration in the Connector-iaas
- Scheduler-aware-rm-policy
- Added new workflows for anomaly detection on log files, and updated Image Analysis workflows for object segmentation in images

___

## Version 7.27 - May 15, 2017

### Community Version

- Perl script engine
- Models and quality checks for workflow variables at job submission
- Native scheduler node source infrastructure policy

### Enterprise Version

- New user portal: Cloud Automation workflows
- Job planner new service
- Restart and fix an in-error task an unlimited number of times
- Extended Azure connector with Azure Stack integration
- DevOps: workflow synchronization (import/export) between schedulers environments (dev, test, prod)

___

## Version 7.25 - Mar 14, 2017

### Community Version
- New LDAP query task, available in Studio predefined tasks
- Remote visualization task: see example in Studio template
- Resource management: new node locking/unlocking features
- Declarative rule based model for workflow variables
- File Trigger: new tasks for file event monitoring and job triggering (new file, new directory, file change, etc.)

### Enterprise Version

- Email validation and notification with LDAP connection users, groups, projects
- Workflow Studio catalog with many new features
- Agile, DevOps: Workflow sync between schedulers Dev, Test, Prod, etc. with import/export
- Advanced task termination control for Bash and Python

___

## Version 7.23 - Jan 09, 2017

### Community Version

- New powerful GraphQL data-fetching API: get read access to scheduling information from your ProActive Scheduler in an easy and efficient way
- Generic info interface upgraded with job variable and task variable definition features to improve user experience

### Enterprise Version

- New chaining of workflows added in the Control menu: \SubmitJobNoWait\: submit a Job from the current one, and proceed to the next task without waiting for its completion (asynchronous submission); and \SubmitJobAndWait\: submit a Job from the current one, then wait for its completion before proceeding to the next task (synchronous submission)

{{% /container %}}

# task-listing-app

This is a [monorepo](https://github.com/joelparkerhenderson/monorepo_vs_polyrepo) that contains an Angular application at *root* level and also an Express application under `/server`.

You will deploy this application on AWS and share it with our friends! Feel free to make any code changes you want, but remember that should not be the focus for this week :relaxed:

## Application Architecture

TODO update

![Task Listing App Architecture](server/assets/task-listing-app-architecture.jpg?raw=true "Task Listing App Architecture")

## Tasks

Feel free to break down and manage the tasks in any way and order you find convenient for you as a group and for this project. You could, for example, create a project board on your GitLab forked repository.

### GitLab CI/CD jobs

The `buildAndTest` job (CI) under `.gitlab-ci.yml` should work out of the blue. However, the `push` and `deploy` jobs (which make up the CD part) won't work as is, why is that?

## And what's next?

First of all, congratulations for going through all of the previous tasks and completing them. Amazing job!

Now, with all of our resources created on AWS through Terraform, it's time to test our existing CI/CD workflow for the application living in this repository:

- :pencil2: Discuss in your group: are you able to explain what is happening on the `Dockerfile`?

- Can you deploy the application on your existing AWS infrastructure using the existing CI/CD flow? What do you need to configure in your CI/CD settings to let your GitLab jobs have access to your resources on AWS?

- Next, note the variables appearing in the `.gitlab-ci.yml` file on the repository. You will need to find out where to configure the values for these variables and what to set them to. Which of these values had better be kept secret and not just written in plain text in the `.gitlab-ci.yml` file? (TODO does the registry info really need to be kept secret?)

- The next step will be to make sure Elastic Beanstalk is allowed to access the private registry you created on AWS, so it can pull the image you built and you can access the application. What permissions are missing? Use the resources linked below to help you. 

Once the application is successfully deployed, run a test from your client:

- Can you successfully access the application from the provided URL on AWS?

- Any issues querying the database from the web app? Can you connect to it? How does your deployed web app know about the database connection details? 

TODO: hints for security group settings to change in Terraform.

Finally, how could you gain visibility if something goes unexpectedly wrong when trying to access some information within the database? You may find some useful information in the logs of your Elastic Beanstalk application or in the RDS logs. Can you spot how to access these?

To test all this, once your application is deployed, you can open the **Network** tab under your browser DevTools, navigate to `/dashboard` and search for a request named `tasks`, what's the response you're getting? The aim is to get a `200`. Feel free to create some tasks and to delete those that you do not want on the board any longer!

## Other important things to consider

#### Environment variables

As you can see, in `/server/config/config.js` there are some environment variables that need to be set for the application to function correctly.

- What values should they be set to?
- How can you make sure they are set to the correct values when deploying your application on Elastic Beanstalk?
- Where should these configuration details live?

The resources below may help with figuring out the answer to these questions.

#### 503 HTTP Response: Application Error

TODO not sure this happens in AWS -- need to test

- What does a `503 HTTP Response` mean? It'd be a good idea to expand your knowledge on [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). You can use this reference article whenever you find a new status code you haven't come across before!

More specifically, regarding a 50 error on your Azure App Service, there's a good [reference article from Azure](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-http-502-http-503) worth going through.

#### Where to find application logs

Under the `Environments` in your Elastic Beanstalk console, you might have found a section called `Logs` from where you can download a whole bunch of differen log files. But which are the relevant ones?

Use the `Request Logs > Last 100 lines` option to get a snippet of all of the different log files.
Can you spot which ones contain relevant information to help you debug your webapp?
Or, if you haven't got Elastic Beanstalk to successfully deploy your Docker image, can you find out what the issue might be from one of these log files?


<details>
<summary>:thinking_face: <b>Click here for some hints</b></summary>

Have a look at the `eb-engine.log` file and the log files under `/var/log/eb-docker/containers/eb-current-app/`
What sort of information can we extract from them? Which parts of the system emit these logs?

</details>

You should have all of the information that you need in these two files and within your RDS logs. 
However, if you have any questions, please check with your peers or ask your coach eventually!

You got this! :star2:

### Database

Whart sort of resources can connect to your database on AWS at the moment?
- Is it none by default? 
- Only other AWS resources? Which ones?

It'd be good for your understanding to research this a bit more as well! This will be useful especially if you'd like to connect to the Azure database from your preferred GUI (`TablePlus` for instance).

❓ How can you open connections from external resources if you find out you can't connect to it?

**Remember**: whenever possible, try and make changes via Terraform rather than using the Console.

## Resources

- [GitLab CI/CD Variables](https://docs.gitlab.com/ee/ci/variables/)
- [Viewing logs from Amazon EC2 instances in your Elastic Beanstalk environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html)
- [Elastic Beanstalk: Launching and connecting to an external Amazon RDS instance](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/rds-external-defaultvpc.html)
- [Amazon Elastic Container Registry FAQs](https://aws.amazon.com/ecr/faqs/)
- [Scenarios for accessing a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1)
- [Configure environment properties for Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html#command-options-general-elasticbeanstalkapplicationenvironment)
- [aws_elastic_beanstalk_environment resource in Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elastic_beanstalk_environment)



- TODO didn't encounter this problem [HTTP Headers: Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)


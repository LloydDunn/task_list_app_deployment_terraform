# task-listing-app

This is a [monorepo](https://github.com/joelparkerhenderson/monorepo_vs_polyrepo) that contains an Angular application at *root* level and also an Express application under `/server`.

You will deploy this application on Azure and share it with our friends! Feel free to make any code changes you want, but remember that should not be the focus for this week :relaxed:

## Application Architecture

![Task Listing App Architecture](server/assets/task-listing-app-architecture.jpg?raw=true "Task Listing App Architecture")

## Tasks

Feel free to break down and manage the tasks in any way and order you find convenient for you as a group and for this project. You could, for example, create a project board on your GitHub forked repository.

### CI job

- Your CI job on GitHub Actions should work out of the blue. However, the CD job won't work as is, why is that?

### Create an Azure Container Registry

- It should be under your Azure Resource Group (Use your existing Terraform project to do so!). Also, can you explain to your peers if you've used or come across any similar resource before?

### Create an Azure Web App service
- It should be under your Azure Resource Group (Use your existing Terraform project to do so!). 

Note that you will also need an Azure App Service plan created along with the Azure Web App. Once it is created, what can you see after you access the App Service URL? You can find it on the Azure Portal.

You can find an example in `terraform/web-app-create-example.tf`

### Create a PostgreSQL server and a PostgreSQL database on Azure

- It should be under your Azure Resource Group (Use your existing Terraform project to do so!).

You can find an example in `terraform/pg-create-example.tf`

## And what's next?

First of all, congratulations for going through the tasks and completing them. Amazing job!

Now, with all of our resources created, it's time to test our CI/CD flows:

- :pencil2: Discuss in your group: are you able to explain what is happening on the `Dockerfile`?

- Can you deploy the application on Azure using the existing CI/CD flow? Observe the `secrets` appearing on the `ci-cd.yml` file on the repository. Your will need to find which `secrets` you need to configure on your repository settings :bulb: Perhaps you need to use the outcome you stored when you created your `Azure Service Plan`. This way you will be able to login into Azure from your CD job.

- The next step will be to make sure your App Service can authenticate against the private registry you created on Azure, so it can pull the image you built and you can access the application:

To achieve this, you will need to enable `Admin Access` on your Container Registry service. How can you configure the `secrets` accordingly so that these match the authentication details that should appear now on the Container Registry? Take a look at the CD job more closely.

One more step related to this! Your Web App Service (not only the Service Plan on GitHub Actions) also needs to access ACR and run some Docker commands under the hood. How does it know which details to use?

Well, sometimes a picture is worth a thousand words!

![app-service-configuration](server/assets/app-service-configuration.png?raw=true "app-service-configuration")

And you may be wondering, couldn't this be done altogether in GitHub Actions? 
Great question! Certainly it could be, if you feel curious, feel free to do some research!

Once the application is successfully deployed, run a test from your client:
- Can you successfully access the application from the provided URL on Azure?

- Any issues querying the database from the web app? Can you connect to it? How does your deployed web app knows the database connection details? You may also need to take a look at the `Connection security` settings under your Azure Database for PostgreSQL server.

 Finally, how could you gain visibility if something goes unexpectedly wrong when trying to access some information within the database? You may find some useful information here.

 To test all this, once your application is deployed, you can open the **Network** tab under your browser DevTools, navigate to `/dashboard` and search for a request named `tasks`, what's the response you're getting? The aim is to get a `200`. Feel free to create some tasks and to delete those that you do not want on the board any longer!

## Other important things to consider

As you can see, in `/server/config/config.js` there are some environment variables that need to be set for the application to function correctly.
- Thinking about deploying our application on Azure. Where should these live?


## Resources

- [HTTP Headers: Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [Environment variables overview](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/environmentvariables)
- [Azure: Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/)
- [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/)
- [Azure App Service plan overview](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans)
- [Azure App Service with Terraform](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service)
- [Deploy a custom container to App Service using GitHub Actions](https://docs.microsoft.com/en-us/azure/app-service/deploy-container-github-action?tabs=publish-profile)

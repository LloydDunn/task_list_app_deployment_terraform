# task-listing-app

This is a [monorepo](https://github.com/joelparkerhenderson/monorepo_vs_polyrepo) that contains an Angular application at *root* level and also an Express application under `/server`.

You will deploy this application on Azure and share it with our friends! Feel free to make any code changes you want, but remember that should not be the focus for this week :relaxed:

## Application Architecture

![Task Listing App Architecture](server/assets/task-listing-app-architecture.jpg?raw=true "Task Listing App Architecture")

## Tasks

Feel free to break down and manage the tasks in any way and order you find convenient for you as a group and for this project. You could, for example, create a project board on your GitHub forked repository.

### GitHub Action Workflows

The `buildAndTest` job (CI) under `.github/workflows/ci-cd.yml` should work out of the blue. However, the `deploy` (CD) job won't work as is, why is that?

## And what's next?

First of all, congratulations for going through all of the previous tasks and completing them. Amazing job!

Now, with all of our resources created on Azure through Terraform, it's time to test our existing CI/CD workflow for the application living in this repository:

- :pencil2: Discuss in your group: are you able to explain what is happening on the `Dockerfile`?

- Can you deploy the application on your existing Azure infrastructure using the existing CI/CD flow? Observe the `secrets` appearing on the `ci-cd.yml` file on the repository. Your will need to find which `secrets` you need to configure on your repository settings :bulb: Perhaps you need to use the outcome you stored when you created your `Azure Service Plan`. This way you will be able to login into Azure from your CD job.

- The next step will be to make sure your App Service can authenticate against the private registry you created on Azure, so it can pull the image you built and you can access the application:

To achieve this, you will need to enable `Admin Access` on your Container Registry service. How can you configure the `secrets` accordingly so that these match the authentication details that should appear now on the Container Registry? Take a look at the CD job more closely.

One more step related to this! Your Web App Service (not only the Service Plan on GitHub Actions) also needs to access ACR and run some Docker commands under the hood. How does it know which details to use?

There are a couple of resources linked below that may help you figure out how to configure this in the Azure Portal.

> Hint: you have to configure some environment variables.

If you get stuck, check out [this screenshot](server/assets/app-service-configuration.png).

> :bulb: You may be wondering: couldn't this be configured in Terraform?
> Great question! Certainly it could be. What would be the advantage of that? If you feel curious, feel free to do some research!

## Testing the app

Once the application is successfully deployed, run a test from your client:
- Can you successfully access the application from the provided URL on Azure?

- Any issues querying the database from the web app? Can you connect to it? How does your deployed web app know about the database connection details? You may also need to take a look at the `Connection security` settings under your Azure Database for PostgreSQL server.

 Finally, how could you gain visibility if something goes unexpectedly wrong when trying to access some information within the database? You may find some useful information on the `server logs`. Can you spot how to access these?

 To test all this, once your application is deployed, you can open the **Network** tab under your browser DevTools, navigate to `/dashboard` and search for a request named `tasks`, what's the response you're getting? The aim is to get a `200`. Feel free to create some tasks and to delete those that you do not want on the board any longer!

## Other important things to consider

### App Service

#### Environment variables
As you can see, in `/server/config/config.js` there are some environment variables that need to be set for the application to function correctly.
- Thinking about deploying our application on Azure. Where should these live?

#### 503 HTTP Response: Application Error
- What does a `503 HTTP Response` mean? It'd be a good idea to expand your knowledge on [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). You can use this reference article whenever you find a new status code you haven't come across before!

More specifically, regarding a 503 error on your Azure App Service, there's a good [reference article from Azure](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-http-502-http-503) worth going through.

#### Where to find application logs
From the article shared just above, is there anything that you found useful?

A really useful resource for debugging Web Applications in Azure is the `Kudu Debug Console`, quickly visited on the reference article shared above.

After you've successfully landed on the Kudu Console view for your app, there's a bunch of information in there, but we're mostly interested in the `Current Docker logs` (we have containerised our application after all!). Now, there are some things we need to find out more about:
- What is the `_docker.log` file? What sort of information can we extract from it?
- And what about the `_default_docker.log` file?

As a hint, remember that before we're able to launch the application successfully and see what happens inside the container, our `Azure App Service` should be able to pull the image from our `Container Registry`.

You should have all of the information that you need in these two files and within your Azure database `server logs`. However, if you have any questions, please check with your peers or ask your coach eventually!

You got this! :star2:

### Database

Whart sort of resources can connect to your database on Azure at the moment?
- Is it none by default? 
- Only other Azure resources? 

It'd be good for your understanding to research this a bit more as well! This will be useful especially if you'd like to connect to the Azure database from your preferred GUI (`TablePlus` for instance).
- How can you open connections from external resources if you find out you can't connect to it? We may have to jump over those :bricks:

## Resources

- [HTTP Headers: Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [Environment variables overview](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/environmentvariables)
- [Azure: Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/)
- [Azure: Configure an App Service app](https://docs.microsoft.com/en-us/azure/app-service/configure-common?tabs=portal)
- [Azure: Configure a custom container for Azure App Service - Configure environment variables](https://docs.microsoft.com/en-us/azure/app-service/configure-custom-container?pivots=container-linux#configure-environment-variables)
- [Azure App Service plan overview](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans)
- [Deploy a custom container to App Service using GitHub Actions](https://docs.microsoft.com/en-us/azure/app-service/deploy-container-github-action?tabs=publish-profile)

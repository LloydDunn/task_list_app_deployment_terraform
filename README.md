# task-listing-app

This is a [monorepo](https://github.com/joelparkerhenderson/monorepo_vs_polyrepo) that contains an Angular application at *root* level and also an Express application under `/server`.

You will deploy this application on Azure and share it with our friends! Feel free to make any code changes you want, but remember that should not be the focus for this week :relaxed:

## Application Architecture

![Task Listing App Architecture](server/assets/task-listing-app-architecture.jpg?raw=true "Task Listing App Architecture")

## Tasks

Feel free to break down and manage the tasks in any way and order you find convenient for you as a group and for this project. You could, for example, create a project board on your GitHub forked repository.

- Your CI job on GitHub Actions should work out of the blue. However, the CD job won't work as is, why is that?
- Create an Azure Container Registry under your Azure Resource Group (Use your existing Terraform project to do so!). Also, can you explain to your peers if you've used or come across any similar resource before?
- Create an Azure Web App service (also using Terraform!) under your Resource Group.
- Create a [TBC]!!!!!!! X Database instance on Azure (again, use Terraform to achieve this!) under your Resource Group.

## And what's next?

First of all, congratulations for going through the tasks and completing them. Amazing job! Now it's time to test our CI/CD flows.
- Can you deploy the application on Azure using the existing CI/CD flow?
- Is there anything you'd change about the existing setup under `.github/workflows`?

Once the application is successfully deployed, run a test from your client:
- Can you successfully access the application from the provided URL on Azure?
- Any issues querying the database from the web app? How could you gain visibility if something goes unexpectedly wrong when trying to access some information within the database?

## Other important things to consider

As you can see, in `/server/config/config.js` and also in `/server/app.js` there are some environment variables that need to be set for the application to function correctly.
- Thinking about deploying our application on Azure. Where should these live?


## Resources

- [HTTP Headers: Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [Environment variables overview](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/environmentvariables)
- [Azure: Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/)
- [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/)

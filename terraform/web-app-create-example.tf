resource "azurerm_app_service_plan" "main" {
  name                = "<your group name>-asp"
  location            = "westeurope"
  resource_group_name = "<your resource group name>"
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_app_service" "main" {
  name                = "<your group name>-appservice"
  location            = azurerm_app_service_plan.main.location
  resource_group_name = "<your resource group name>"
  app_service_plan_id = azurerm_app_service_plan.main.id

  site_config {
    linux_fx_version = "NODE|10.14"
  }
}

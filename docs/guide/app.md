---
sidebar_position: 1
---

:::danger Important
Certain features of the `App` class are either under development or may undergo significant changes in future updates. Please refer to the official documentation regularly to stay informed about the latest updates and modifications.
:::

# App Class Overview

The `App` class is the cornerstone of the **Fire Framework**, designed to streamline application management. It handles configuration, routing, middleware, services, and orchestrates the entire application lifecycle with a robust and cohesive structure.

---

## 📖 Overview

### Namespace

```php
Framework\Fire
```

### Description

The `App` class is implemented as a singleton to ensure a single instance of the application is maintained. It orchestrates environment configuration, routing, middleware, and database connections, providing a cohesive structure for application management.

---

## 🛠️ Properties

### `static ?App $instance`

- **Description**: Holds the singleton instance of the `App` class.
- **Visibility**: Protected.

### `IRouter $router`

- **Description**: Manages HTTP request routing.
- **Visibility**: Protected.

### `string $envPath`

- **Description**: Specifies the path to the `.env` file.
- **Visibility**: Protected.

### `string $basePath`

- **Description**: Defines the base directory of the application.
- **Visibility**: Protected.

### `IEnvironmentLoader $environmentLoader`

- **Description**: Handles the loading of environment variables.
- **Visibility**: Protected.

### `IDatabaseManager $databaseManager`

- **Description**: Manages database connections and interactions.
- **Visibility**: Protected.

---

## 🔧 Methods

### `static getInstance(): self`

- **Description**: Retrieves the singleton instance of the `App` class.
- **Throws**: `RuntimeException` if the instance is not initialized.
- **Returns**: `App`.

---

### `static configure(string $basePath, ?IEnvironmentLoader $environmentLoader = null, ?IRouter $router = null, ?IDatabaseManager $databaseManager = null): self`

- **Description**: Configures the application with essential components such as the base path, environment loader, router, and database manager.
- **Parameters**:
  - `string $basePath`: The base directory of the application.
  - `?IEnvironmentLoader $environmentLoader`: (Optional) The environment loader instance.
  - `?IRouter $router`: (Optional) The router instance.
  - `?IDatabaseManager $databaseManager`: (Optional) The database manager instance.
- **Returns**: `App`.

---

### `loadRoutes(): self`

- **Description**: Loads application routes from the `/routes` directory.
- **Throws**: `RuntimeException` if the routes directory is missing.
- **Returns**: `App`.

---

### `loadMiddlewares(): self`

- **Description**: Loads middleware components from the `/app/middlewares` directory.
- **Returns**: `App`.

---

### `loadServices(): self`

- **Description**: Loads additional services from a specified directory (to be implemented).
- **Returns**: `App`.

---

### `getBasePath(): string`

- **Description**: Retrieves the base directory of the application.
- **Returns**: `string`.

---

### `setNotFoundHandler(callable $handler): self`

- **Description**: Configures a custom handler for "404 Not Found" errors.
- **Parameters**:
  - `callable $handler`: The callback function to handle 404 errors.
- **Returns**: `App`.

---

### `run(): void`

- **Description**: Executes the application by resolving the current HTTP request through the router. Handles exceptions by returning a 500 error response.
- **Returns**: `void`.

---

## 📂 Usage Example

```php
use Framework\Fire\App;
use Framework\Fire\Environment\EnvironmentLoader;
use Framework\Fire\Routing\Router;

// Configure the application
$app = App::configure(
        __DIR__,
        new EnvironmentLoader(__DIR__),
        new Router()
);

// Load routes and middleware
$app->loadRoutes()
        ->loadMiddlewares();

// Run the application
$app->run();
```

---

## 🔗 Notes

- The `App` class employs a singleton pattern to ensure a single instance is used throughout the application lifecycle.
- Additional functionality can be integrated by utilizing the `loadServices()` method.
- Comprehensive error handling is implemented to manage runtime exceptions effectively, ensuring application stability.

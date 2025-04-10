---
sidebar_position: 8
---

:::danger Important
Some features are currently unavailable.
:::

# 🛠️ CLI Tool

The **Command Line Interface (CLI)** of the **Fire Framework** is a robust tool designed to streamline development workflows. It allows you to manage migrations, generate files, launch the development server, and more—all through intuitive commands.

---

## 🚀 Key Features

### 1. **Start Development Server**

- **Command**: `php fire start`
- **Description**: Launches the development server on the default port `8000`.
- **Example**:
  ```bash
  php fire start
  ```
- **Custom Port**: Use the `--port` option to specify a custom port.
  ```bash
  php fire start --port=8080
  ```
- **Docker Support**: Start the server with Docker using the `--docker` option.
  - **Native Docker**:
    ```bash
    php fire start --docker=native
    ```
  - **Docker Compose**:
    ```bash
    php fire start --docker=compose
    ```

---

### 2. **Generate Controllers**

:::danger Important
This feature is under development.
:::

- **Command**: `php fire make:controller <name>`
- **Description**: Creates a new controller file in the designated directory.
- **Example**:
  ```bash
  php fire make:controller UserController
  ```

---

### 3. **Generate Models**

:::danger Important
This feature is under development.
:::

- **Command**: `php fire make:model <name>`
- **Description**: Generates a new model file for database interactions.
- **Example**:
  ```bash
  php fire make:model User
  ```

---

### 4. **Run Database Migrations**

- **Command**: `php fire migrate`
- **Description**: Executes all pending database migrations.
- **Example**:
  ```bash
  php fire migrate
  ```
- **Rollback Migrations**: Undo the last migration using the `--rollback` option.
  ```bash
  php fire migrate --rollback
  ```

---

### 5. **List Available Commands**

- **Command**: `php fire list`
- **Description**: Displays a comprehensive list of all available CLI commands, including their descriptions, arguments, and options.
- **Example**:
  ```bash
  php fire list
  ```

---

## 📖 Detailed Usage

### How to Use the CLI

1. Navigate to your project directory.
2. Run the following command:
   ```bash
   php fire <command>
   ```
   Replace `<command>` with one of the commands listed above.

---

## 📚 Advanced Topics

:::danger Important
These features are under development.
:::

### Extending the CLI

- Add custom commands to extend the CLI. Refer to the advanced documentation for detailed implementation guidelines.

### Debugging

- Use the `--verbose` option to enable detailed logging during command execution.
  ```bash
  php fire <command> --verbose
  ```

### Managing Environments

- Configure environment variables in the `.env` file to manage development, staging, and production environments effectively.

---

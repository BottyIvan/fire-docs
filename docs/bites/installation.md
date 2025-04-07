---
sidebar_position: 2
---

# 🚀 Quick Start Guide

:::danger Important
The Fire Framework is currently under development and should not be considered production-ready. Use it for testing and exploration purposes only.
:::

:::danger Important
The Fire Framework is not yet available on Composer. Stay tuned for updates on its availability.
:::

Get started with the Fire Framework by following these simple steps. This guide will help you set up your project, install dependencies, and launch your first application.

### 🗂️ Set Up Your Project Directory

Create and navigate to a directory for your project. Replace `<your-project-name>` with your desired project name:

```bash
mkdir <your-project-name>
cd <your-project-name>
```

### 🔥 Clone the Fire Framework Repository

Clone the Fire Framework repository to download the core framework files:

```bash
git clone https://github.com/BottyIvan/fire-framework
```

### 🚀 Clone the Starter Kit Repository

Clone the official Starter Kit repository for pre-configured files and examples:

```bash
git clone https://github.com/BottyIvan/fire-starter-kit
cd fire-starter-kit
```

### 📦 Install Dependencies

Ensure [Composer](https://getcomposer.org/) is installed on your system. Then, install the required dependencies:

1. For the Fire Framework:

   ```bash
   cd ../fire-framework
   composer install
   ```

2. For the Starter Kit:

   ```bash
   cd ../fire-starter-kit
   composer install
   ```

> **💡 Note:** Verify your PHP version meets the framework's requirements and that Composer is properly configured if you encounter issues.

### ⚙️ Configure Your Environment

Set up your environment by copying the `.env.example` file to `.env` and updating the configuration values:

```bash
cp .env.example .env
```

Edit the `.env` file to configure your database connection, application URL, and other settings.

### 🌐 Launch the Development Server

Start the development server:

```bash
php fire start
```

Access your application in your browser at [http://localhost:8000](http://localhost:8000).

> **💡 Tip:** Use `--port` to specify a custom port if `8000` is in use. Example: `php fire start --port=8080`.

🎉 **Congratulations!** You're ready to build amazing applications with the Fire Framework. Explore the documentation for advanced features, best practices, and additional tools.

Happy coding! 👨‍💻

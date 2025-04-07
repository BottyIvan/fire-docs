---
sidebar_position: 1
---

# 🚀 Fire Framework

A while back, I set out to create something lightweight yet powerful for building web applications. The goal? A minimalist PHP framework that doesn’t get in your way but still packs a punch.

The **Fire Framework** was born out of a need for simplicity and scalability. With support for PHP 8+ and a modular architecture, it’s designed to keep your code clean, maintainable, and future-ready.

But I didn’t stop there. To make things even smoother, I put together the **Fire Project Starter Kit** — a pre-configured setup with all the essentials to get you rolling in no time.

### Why Fire?

Because sometimes, less is more. The **Fire Framework** is all about giving you the tools you need without the bloat. Whether you’re building a small project or something bigger, Fire has your back.

## What Can You Expect from Fire?

Here’s a breakdown of the features you’ll find in the Fire Framework, along with their current development status:

| **Component**           | **Description**                                                     | **Status**     |
| ----------------------- | ------------------------------------------------------------------- | -------------- |
| **App**                 | Main class that starts the app and manages flow                     | ✅ Done        |
| **Router**              | Handles routes (GET, POST, dynamic params, etc.)                    | ✅ Done        |
| **Middleware**          | System to run checks before controllers                             | ✅ Done        |
| **Base Controller**     | Base class with methods like `renderView()`, `redirect()`, `json()` | ✅ Done        |
| **View Engine**         | View handling with layout support and variable injection            | ❌ Not planned |
| **Base Model**          | Base class for models + DB access via PDO                           | 🛠️ To do       |
| **Config**              | Centralized configuration (DB, env, errors, etc.)                   | 🤔 Maybe       |
| **Error Handler**       | Handles errors, exceptions, custom 404/500                          | 🚧 In progress |
| **Autoloader (PSR-4)**  | PSR-4 compatible autoloader or Composer                             | ✅ Done        |
| **Session Manager**     | Helper class for cleaner session management                         | 🤔 Maybe       |
| **Base Auth**           | Login/logout, auth check, current user handling                     | 🤔 Maybe       |
| **Validator**           | Form input validation class with basic rules                        | 🤔 Maybe       |
| **Helpers**             | Global helper functions (`url()`, `dd()`, `csrf_token()`, etc.)     | 🚧 In progress |
| **CSRF Protection**     | CSRF tokens in forms + server-side verification                     | 🤔 Maybe       |
| **CLI Tool**            | Basic script to generate controllers, models, etc.                  | 🚧 In progress |
| **.htaccess / Routing** | `.htaccess` file to route all traffic to `index.php`                | ✅ Done        |

Stay tuned as we continue to enhance the framework and bring these features to life.

### Ready to Dive In?

Check out the following sections to get started:

- [**Fire Bites**](bites/introduction.md): Quick and easy steps to get up and running with Fire.
- [**Comprehensive Guide**](guide/introduction.md): A deep dive into everything Fire has to offer.

---

Welcome to the Fire community. Let’s build something amazing. 🔥

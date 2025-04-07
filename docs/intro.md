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

| 🧩 **Component** | 📝 **Description** | 📊 **Status** | 📌 **Note** |
|---------------------------|------------------------------------------------------------------------|----------------------|-------------------------------------------------------|
| **App** | Main class that starts the app and manages flow | ✅ **Done** | Entry point; handles router, config, etc. |
| **Router** | Handles routes (GET, POST, dynamic params, etc.) | ✅ **Done** | Supports dynamic routes and middleware |
| **Middleware** | System to run checks before controllers | ✅ **Done** | Useful for auth, CSRF, logging, etc. |
| **Base Controller** | Base class with methods like `renderView()`, `redirect()`, `json()` | ✅ **Done** | To be extended by other controllers |
| **View Engine** | View handling with layout support and variable injection | ❌ **Not planned** | Includes header/footer; not yet planned |
| **Base Model** | Base class for models + DB access via PDO | 🚧 **In progress** | Eloquent-style manager in development |
| **Config** | Centralized configuration (DB, env, errors, etc.) | 🤔 **Maybe** | Accessed via App or helper |
| **Error Handler** | Handles errors, exceptions, custom 404/500 | 🚧 **In progress** | 404 via router, 500 via try/catch |
| **Autoloader (PSR-4)** | PSR-4 compatible autoloader or Composer | ✅ **Done** | Follows standard; essential for scalability |
| **Session Manager** | Helper class for cleaner session management | 🤔 **Maybe** | E.g. `Session::get('user_id')` |
| **Base Auth** | Login/logout, auth check, current user handling | 🤔 **Maybe** | May use Session internally |
| **Validator** | Form input validation class with basic rules | 🚧 **In progress** | Rules like `required min:3`, etc. |
| **Helpers** | Global helper functions (`url()`, `dd()`, `csrf_token()`, etc.) | ✅ **Done** | Includes `dd()`, `url()`, `csrf_token()` |
| **CSRF Protection** | CSRF tokens in forms + server-side verification | 🤔 **Maybe** | Could be tied to Middleware |
| **CLI Tool** | Basic script to generate controllers, models, etc. | 🚧 **In progress** | Command system via `RegisterCommands` |
| **.htaccess / Routing** | `.htaccess` file to route all traffic to `index.php` | ✅ **Done** | Required for pretty URLs |

Stay tuned as we continue to enhance the framework and bring these features to life.

### Ready to Dive In?

Check out the following sections to get started:

- [**Fire Bites**](bites/introduction.md): Quick and easy steps to get up and running with Fire.
- [**Comprehensive Guide**](guide/introduction.md): A deep dive into everything Fire has to offer.

---

Welcome to the Fire community. Let’s build something amazing. 🔥

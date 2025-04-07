---
sidebar_position: 5
---

# Models, Migrations, and Database Abstraction

:::danger Important
For the model, we decided to use **Eloquent**, Laravel's powerful and elegant ORM, to simplify database interactions and improve productivity.

Learn more about Eloquent in the [**official Laravel documentation**](https://laravel.com/docs/12.x/eloquent).
:::

We have designed an interface named `IDatabaseManager` to provide flexibility and extensibility for managing database operations. Below are the two core methods it defines:

```php
/**
 * Configure the database manager with the given configuration.
 *
 * @param array $config The configuration array.
 * @return void
 */
public function configure(array $config): void;
```

```php
/**
 * Boot the database manager, establishing connections and preparing for use.
 *
 * @return void
 */
public function boot(): void;
```

By implementing this interface, you can customize and enhance the database management process to suit your application's specific needs. Additionally, it allows for seamless switching to a different database manager if required, providing flexibility and adaptability for your project.

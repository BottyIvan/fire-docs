---
sidebar_position: 9
---

# Docker & Docker Compose

:::warning Important
The credentials provided in the example below are for demonstration and testing purposes only. **Do not use these credentials in production environments.**  
:::
The following Docker Compose configuration is tailored for development purposes and is subject to future enhancements. We plan to include a dedicated Dockerfile with the essential libraries required to utilize the framework effectively.

This setup utilizes Docker Compose to deploy a MySQL server and manage it via phpMyAdmin.

If you are new to these technologies, consider exploring the following resources:

- [Docker Overview](https://www.docker.com/resources/what-container)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [phpMyAdmin Documentation](https://www.phpmyadmin.net/docs/)

### Docker Compose Configuration

:::success Note
Before deploying this configuration in any environment beyond local development, ensure you replace the default credentials (`root`, `user`, `password`) with secure and unique values.
:::

Below is the YAML configuration file for setting up the services:

```yaml
services:
  mysql:
    image: mysql:latest
    container_name: fire_mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: testdb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin:latest
    container_name: fire_phpmyadmin
    environment:
      PMA_HOST: mysql
      PMA_USER: user
      PMA_PASSWORD: password
    ports:
      - "8080:80"

volumes:
  mysql_data:
```

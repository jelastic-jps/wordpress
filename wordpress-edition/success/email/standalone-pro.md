**WordPress environment**: [https://${settings.envName}.${globals.domain}/](https://${settings.envName}.${globals.domain}/)

Use the following credentials to access the admin panel:

**Admin Panel**: [https://${settings.envName}.${globals.domain}/wp-admin/](https://${settings.envName}.${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Please use the following data to access LiteSpeed WebAdmin Console:

**Admin Console**: [https://${settings.envName}.${globals.domain}:4848/](https://${settings.envName}.${globals.domain}:4848/)   
**Login**: admin    
**Password**: ${globals.db_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel**: [https://${settings.envName}.${globals.domain}:8443/](https://${settings.envName}.${globals.domain}:8443/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

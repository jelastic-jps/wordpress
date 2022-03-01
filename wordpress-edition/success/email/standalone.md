**WordPress environment**: [https://${env.domain}/](https://${env.domain}/)

Use the following credentials to access the admin panel:

**Admin Panel**: [https://${env.domain}/wp-admin/](https://${env.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel**: [https://${env.domain}:8443/](https://${env.domain}:8443/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

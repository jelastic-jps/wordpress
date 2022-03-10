**WordPress URL**: [https://${settings.envName}.${globals.domain}/](https://${settings.envName}.${globals.domain}/)

Please use the following data to access the admin panels:

WordPress Admin Panel:   
**URL**: [https://${settings.envName}.${globals.domain}/wp-admin/](https://${settings.envName}.${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

PhpMyAdmin Admin Panel:   
**URL**: [https://${settings.envName}.${globals.domain}:8443/](https://${settings.envName}.${globals.domain}:8443/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

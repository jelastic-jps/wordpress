**WordPress environment**: [https://${settings.envName}.${globals.domain}/](https://${settings.envName}.${globals.domain}/)

Use the following credentials to access the admin panel:

**Admin Panel**: [https://${settings.envName}.${globals.domain}/wp-admin/](https://${settings.envName}.${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Use the following credentials to access the LiteSpeed ADC admin console:

**Admin Console**: [https://node${nodes.bl.master.id}-${settings.envName}.${globals.domain}:4848](https://node${nodes.bl.master.id}-${settings.envName}.${globals.domain}:4848)  
**Login**: admin  
**Password**: ${globals.ls_admin_pass}  

Use the following credentials to access the LiteSpeed WEB Server admin console:

**Admin Console**: [https://node${nodes.cp.master.id}-${settings.envName}.${globals.domain}:4848](https://node${nodes.cp.master.id}-${settings.envName}.${globals.domain}:4848)  
**Login**: admin  
**Password**: ${globals.ls_admin_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel**: [https://node${nodes.sqldb.master.id}-${settings.envName}.${globals.domain}/](https://node${nodes.sqldb.master.id}-${settings.envName}.${globals.domain}/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

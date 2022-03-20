**WordPress URL**: [https://${settings.envName}.${globals.domain}/](https://${settings.envName}.${globals.domain}/)

Please use the following data to access the admin panels:

WordPress Admin Panel:  
**URL**: [https://${settings.envName}.${globals.domain}/wp-admin/](https://${settings.envName}.${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

LiteSpeed ADC admin Panel:   
**URL**: [https://${settings.envName}.${globals.domain}:4848](https://${settings.envName}.${globals.domain}:4848)  
**Login**: admin  
**Password**: ${globals.ls_admin_pass}  

LiteSpeed WEB Server admin Panel:   
**URL**: [https://node${nodes.cp.master.id:[globals.targetNodes.master.cp.id]}-${settings.envName}.${globals.domain}:4848](https://node${nodes.bl.master.id:[globals.targetNodes.master.cp.id]}-${settings.envName}.${globals.domain}:4848)  
**Login**: admin  
**Password**: ${globals.ls_admin_pass}  

PhpMyAdmin Admin Panel:   
**URL**: [https://node${nodes.sqldb.master.id:[globals.targetNodes.master.sqldb.id]}-${settings.envName}.${globals.domain}/](https://node${nodes.sqldb.master.id:[globals.targetNodes.master.sqldb.id]}-${settings.envName}.${globals.domain}/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

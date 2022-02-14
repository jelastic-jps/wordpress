**WordPress environment**: [${globals.protocol}://${env.domain}/](${globals.protocol}://${env.domain}/)

**CDN Endpoint URL**:  [${globals.cdnURL}](${globals.cdnURL})

Use the following credentials to access the admin panel:

**Admin Panel**: [${globals.protocol}://${env.domain}/wp-admin/](${globals.protocol}://${env.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel**: [https://${env.domain}:8443/](https://${env.domain}:8443/)  
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}  

**WordPress environment**: [${globals.protocol}://${env.domain}/](${globals.protocol}://${env.domain}/)   

**CDN Endpoint URL**:  [${globals.cdnURL}](${globals.cdnURL})   

Use the following credentials to access the admin panel:   

**Admin Panel**: [${globals.protocol}://${env.domain}/wp-admin/](${globals.protocol}://${env.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

The instructions below can help you with further managing your WordPress:

* [Bind custom domain](https://docs.jelastic.com/custom-domain-via-cname)
* [Share access to the environment](http://docs.jelastic.com/share-environment)
* [Adjust automatic vertical scaling settings](http://docs.jelastic.com/automatic-vertical-scaling)
* [Configure automatic horizontal scaling](http://docs.jelastic.com/automatic-horizontal-scaling)
* [Monitor the statistics](http://docs.jelastic.com/view-app-statistics) & [view log files](https://docs.jelastic.com/view-log-files)
* [Attach Public IP](https://docs.jelastic.com/public-ip)
* [Access environment via SSH](https://docs.jelastic.com/ssh-access)

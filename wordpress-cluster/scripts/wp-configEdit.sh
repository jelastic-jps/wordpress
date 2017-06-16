#!/bin/bash
ENV_PROTOCOL=$1
ENV_DOMAIN=$2
sed -i "s|<?php|<?php\ndefine('WP_HOME','${ENV_PROTOCOL}://${ENV_DOMAIN}');\ndefine('WP_SITEURL','${ENV_PROTOCOL}://${ENV_DOMAIN}');\ndefine( 'AUTOMATIC_UPDATER_DISABLED', true );|g" /var/www/webroot/ROOT/wp-config.php
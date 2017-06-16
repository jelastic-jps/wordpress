#!/bin/bash
curl -fs $2 -o /var/lib/mysql/wordpress.sql 2>&1

mysql -uroot -p$1 << END 
    CREATE DATABASE wordpress;
    GRANT USAGE ON *.* TO wordpress@localhost  identified by 'password';
    grant all privileges on wordpress.* to wordpress@localhost;
    use wordpress;

\. /var/lib/mysql/wordpress.sql
    
    UPDATE wordpress.wp_posts SET guid='$3?p=1';
    UPDATE wordpress.wp_posts SET guid='$3?p=2';
    UPDATE wordpress.wp_posts SET guid='$3?p=3';
    UPDATE wordpress.wp_posts SET post_date_gmt=CURRENT_TIMESTAMP, post_date=CURRENT_TIMESTAMP, post_modified=CURRENT_TIMESTAMP;
    UPDATE wordpress.wp_options SET option_value='$4://$5' WHERE option_name='home'; 
    UPDATE wordpress.wp_options SET option_value='$4://$5' WHERE option_name='siteurl'; 
    UPDATE wordpress.wp_options SET option_value='$6' WHERE option_name='admin_email'; 
    UPDATE wordpress.wp_users SET user_email='$6' WHERE user_login='admin';
    UPDATE wordpress.wp_users SET user_pass=MD5('$7') WHERE user_login='admin';
END

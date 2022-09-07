getversion - Get Wordpress current version    
getplugins - Get all plugins (name, version, status)    
checkforupdate - Get major and minor updates    
coreupdate - Update core to latest version

https://app.{hoster}/wordpress/getversion?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 43
    },
    "time": 2435
  },
  "response": {
    "result": 0,
    "version": "5.5.3"
  }
}
```

https://app.{hoster}/wordpress/getplugins?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 45
    },
    "time": 3101
  },
  "response": {
    "result": 0,
    "plugins": [
      {
        "name": "akismet",
        "update": "available",
        "version": "4.2.4",
        "status": "inactive"
      },
      {
        "name": "hello",
        "update": "none",
        "version": "1.7.2",
        "status": "inactive"
      },
      {
        "name": "nginx-cache",
        "update": "none",
        "version": "1.0.5",
        "status": "active"
      },
      {
        "name": "w3-total-cache",
        "update": "available",
        "version": "2.2.1",
        "status": "active"
      },
      {
        "name": "advanced-cache.php",
        "update": "none",
        "version": "",
        "status": "dropin"
      }
    ]
  }
}
```

https://app.{hoster}/wordpress/checkforupdate?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 28
    },
    "time": 2408
  },
  "response": {
    "result": 0,
    "versionsToUpdate": [
      {
        "update_type": "minor",
        "version": "5.5.10"
      },
      {
        "update_type": "major",
        "version": "6.0.2"
      }
    ]
  }
}
```

https://app.{hoster}/wordpress/coreupdate?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 9
    },
    "time": 20259
  },
  "response": {
    "result": 0,
    "version": "6.0.2"
  }
}
```


### Errors    

**WP-CLI result (for examle, wp-config.php does not exist**    

```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 28
    },
    "time": 2396
  },
  "response": {
    "result": 13001,
    "errOut": "Error: 'wp-config.php' not found.\nEither create one manually or use `wp config create`."
  }
}
```

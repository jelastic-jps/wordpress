getversion - Get Wordpress current version  
checkforupdate - Get major and minor updates
getplugins - Get all plugins (name, version, status)  

https://app.{hoster}/wordpress/getversion?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 43
    },
    "time": 3607
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": "6.0.2"
    }
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
      "time": 34
    },
    "time": 4236
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": [
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
}
```

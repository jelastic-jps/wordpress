#!/bin/bash

WP_PATH="/var/www/webroot/ROOT"
RUN_LOG="/tmp/japp.log"
SUCCESS_CODE=0
FAIL_CODE=13001

wpCommandExec(){
    command="$1"
    ~/bin/wp --path=$WP_PATH $command
}

log(){
    local message="$1"
    local timestamp
    timestamp=`date "+%Y-%m-%d %H:%M:%S"`
    echo -e "[${timestamp}]: ${message}" >> ${RUN_LOG}
}

execArgResponse(){
    local result=$1
    local key_name=$2
    local response=$3
    output=$(jq -cn --raw-output --argjson result "$result" --arg key $key_name --arg response "${response}" '{result: $result, ($key): $response}')
    echo ${output}
}

execArgJSONResponse(){
    local result=$1
    local key_name=$2
    local response=$3
    output=$(jq -cn --raw-output --argjson result "$result" --arg key $key_name --argjson response "${response}" '{result: $result, ($key): $response}')
    echo ${output}
}

execUpdateResponse(){
    local result=$1
    local oldVersion=$2
    local newVersione=$3
    output=$(jq -cn --raw-output --argjson result "$result" --arg oldVersion "${oldVersion}"  --arg newVersion "${newVersion}"  '{result: $result, version: { oldVersion: $oldVersion, newVersion: $newVersion}}')
    echo ${output}
}


execAction(){
    local action="$1"
    local message="$2"

    stdout=$( { ${action}; } 2>&1 ) && { log "${message}...done";  } || {
        error="${message} failed, please check ${RUN_LOG} for details"
        execArgResponse "${FAIL_CODE}" "errOut" "${stdout}"
        log "${message}...failed\n==============ERROR==================\n${stdout}\n============END ERROR================";
        exit 0
    }
}

installWP_CLI(){
    [ ! -d $HOME/bin ] && mkdir $HOME/bin;
    curl -s -o $HOME/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar  && chmod +x $HOME/bin/wp;
    echo "apache_modules:" > ~/bin/wp-cli.yml;
    echo "  - mod_rewrite" >> ~/bin/wp-cli.yml;
    ~/bin/wp --info  2>&1;
}

getEngineVersion(){

    _getEngineVersion(){
        wpCommandExec 'core version'
    }

    execAction "_getEngineVersion" 'Get WordPress version'
    execArgResponse "${SUCCESS_CODE}" "version" "${stdout}"
}

getEngineUpdates(){

    _getEngineUpdates(){
        wpCommandExec 'core check-update --fields=version,update_type --format=json'
    }
    
    execAction "_getEngineUpdates" 'Checks for WordPress updates'
	[ x${stdout} == x"" ] && { execArgJSONResponse "${SUCCESS_CODE}" "versionsToUpdate" "[]"; } || { execArgJSONResponse "${SUCCESS_CODE}" "versionsToUpdate"  "${stdout}"; }
}

updateEngine(){
    local engine_version=$2
    
    _getEngineVersion(){
        wpCommandExec 'core version'
    }

    _updateEngine(){
        [[ ! -z ${engine_version} ]] && { wpCommandExec "core update --version=${engine_version}"; } || { wpCommandExec "core update"; }
    }
    
    execAction "_getEngineVersion" 'Get  WordPress version'
    oldVersion=${stdout}
    execAction "_updateEngine" "Update WordPress Core"
    execAction "_getEngineVersion" 'Get  WordPress version'
    newVersion=${stdout}
    execUpdateResponse "${SUCCESS_CODE}" "${oldVersion}" "${newVersion}"
}

getPlugins(){
    
    _getPlugins(){
        wpCommandExec 'plugin list --format=json'
    }
    
    execAction "_getPlugins" 'Get plugins list'
    execArgJSONResponse "${SUCCESS_CODE}" "plugins" "${stdout}"
}

getPluginInfo(){
    local plugin_name=$2

    _getPluginInfo(){
        wpCommandExec "plugin get ${plugin_name} --format=json"
    }
    
    execAction "_getPluginInfo" "Get plugin ${plugin_name} info"
    execArgJSONResponse "${SUCCESS_CODE}" "pluginInfo" "${stdout}"
}

updatePlugin(){
    local plugin_name=$2
    local plugin_version=$3

    _getPluginVersion(){
        wpCommandExec "plugin get ${plugin_name} --field=version"
    }
    _updatePlugin(){
        [[ ! -z ${plugin_version} ]] && { wpCommandExec "plugin update ${plugin_name} --version ${plugin_version}"; } || { wpCommandExec "plugin update ${plugin_name}"; }
    }
    
    execAction "_getPluginVersion" "Get plugin ${plugin_name} version"
    oldVersion=${stdout}
    execAction "_updatePlugin" "Update plugin ${plugin_name}"
    execAction "_getPluginVersion" "Get plugin ${plugin_name} version"
    newVersion=${stdout}
    execUpdateResponse "${SUCCESS_CODE}" "${oldVersion}" "${newVersion}"
}

activatePlugin(){
    local plugin_name=$2

    _activatePlugin(){
        wpCommandExec "plugin activate ${plugin_name}"
    }

    _getStatusPlugin(){
        wpCommandExec "plugin get ${plugin_name} --field=status"
    }
    
    execAction "_activatePlugin" "Activating ${plugin_name}"
    execAction "_getStatusPlugin" "Get ${plugin_name} status"
    execArgResponse "${SUCCESS_CODE}" "pluginStatus" "${stdout}"
}

deactivatePlugin(){
    local plugin_name=$2

    _deactivatePlugin(){
        wpCommandExec "plugin deactivate ${plugin_name}"
    }

    _getStatusPlugin(){
        wpCommandExec "plugin get ${plugin_name} --field=status"
    }
    
    execAction "_deactivatePlugin" "Deactivating ${plugin_name}"
    execAction "_getStatusPlugin" "Get ${plugin_name} status"
    execArgResponse "${SUCCESS_CODE}" "pluginStatus" "${stdout}"
}

deletePlugin(){
      local plugin_name=$2

    _deletePlugin(){
        wpCommandExec "plugin delete ${plugin_name}"
    }

    execAction "_deletePlugin" "Deleting ${plugin_name} plugin"
    execArgResponse "${SUCCESS_CODE}" "pluginStatus" "deleted"
}

execAction "installWP_CLI" 'Install WP-CLI'

case ${1} in
    getEngineVersion)
        getEngineVersion
        ;;

    getPlugins)
        getPlugins
        ;;

    getEngineUpdates)
        getEngineUpdates
        ;;

    updateEngine)
        updateEngine "$@"
        ;;

    getPluginInfo)
        getPluginInfo "$@"
        ;;

    updatePlugin)
        updatePlugin "$@"
        ;;

    activatePlugin)
        activatePlugin "$@"
        ;;

    deactivatePlugin)
         deactivatePlugin "$@"
        ;;

    deletePlugin)
        deletePlugin "$@"
        ;;

esac

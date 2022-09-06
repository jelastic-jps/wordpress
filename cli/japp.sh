#!/bin/bash

WP_PATH="/var/www/webroot/ROOT"
RUN_LOG="/tmp/japp.log"
SUCCESS_CODE=0
FAIL_CODE=99

wpCommandExec(){
  command="$1"
  ~/bin/wp --path=$WP_PATH $command
}

echo "" > ${RUN_LOG}

log(){
  local message="$1"
  local timestamp
  timestamp=`date "+%Y-%m-%d %H:%M:%S"`
  echo -e "[${timestamp}]: ${message}" >> ${RUN_LOG}
}

execResponse(){
  local result=$1
  local response=$2
  local isJSON="$3"

  if ${isJSON}; then
    output=$(jq -cn --raw-output --argjson result "$result" --argjson response "${response}" '{result: $result, response: $response}')
  else
    output=$(jq -cn --raw-output --argjson result "$result" --arg response "${response}" '{result: $result, response: $response}')
  fi
  echo ${output}
}

execAction(){
  local action="$1"
  local message="$2"

  stdout=$( { ${action}; } 2>&1 ) && { log "${message}...done";  } || {
    error="${message} failed, please check ${RUN_LOG} for details"
    execResponse "${FAIL_CODE}" "${error}" "false"
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

coreUpdate(){
  wpCommandExec 'core update'
}

getCoreVersion(){
  wpCommandExec 'core version'
}

getPluginsList(){
  wpCommandExec 'plugin list --format=json'
}

checkForUpdate(){
  wpCommandExec 'core check-update --fields=version,update_type --format=json'
}

execAction "installWP_CLI" 'Install WP-CLI'

case ${1} in
    getVersion)
        execAction "getCoreVersion" 'Get core version'
        execResponse "${SUCCESS_CODE}" "${stdout}" "false"
        ;;

    getPlugins)
        execAction "getPluginsList" 'Get plugins list'
        execResponse "${SUCCESS_CODE}" "${stdout}" "true"
        ;;

    checkForUpdate)
        execAction "checkForUpdate" 'Checks for WordPress updates'
	[ x${stdout} == x"" ] && { execResponse "${SUCCESS_CODE}" "WordPress is up to date" "false"; } || { execResponse "${SUCCESS_CODE}" "${stdout}" "true"; }
        ;;

    coreUpdate)
        execAction "coreUpdate" 'Wordpress core update'
        execAction "getCoreVersion" 'Get core version'
        execResponse "${SUCCESS_CODE}" "${stdout}" "false"
esac

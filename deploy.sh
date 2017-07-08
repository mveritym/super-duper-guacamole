#!/bin/bash
docker pull mveritym/super-duper-guacamole:latest  
docker stop super-duper-guacamole
docker rm super-duper-guacamole  
docker rmi mveritym/super-duper-guacamole:current  
docker tag mveritym/super-duper-guacamole:latest mveritym/super-duper-guacamole:current  
docker run -d --name super-duper-guacamole mveritym/super-duper-guacamole:latest 
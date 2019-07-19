#Colors
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# sudo apt-get update
#
# #------------------DOCKER-CE INSTALL--------------------------------------------
# echo -e "${GREEN}==========Begining Docker Community Edition install==========${NC}"
# sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
#
# sudo apt-get update
# sudo apt-get install docker-ce
#
# #---------------DOCKER-COMPOSE INSTALL------------------------------------------
# echo -e "${GREEN}==========Begining Docker-Compose install===================${NC}"
# sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose

#TODO: Find production alternative
(cd ../backend/ && npm install)
(cd ../frontend/src && npm install)
(cd ../frontend/src && npm run build)

#!/bin/bash
mkdir /home/ec2-user/project
cd /home/ec2-user/project

#sudo ~/.nvm/versions/node/v17.8.0/bin/npm install

#sudo ~/.nvm/versions/node/v17.8.0/bin/npm start
source /home/ec2-user/.bash_profile

# Stop all servers and start the server as a daemon
forever stopall
forever start /home/ec2-user/project/app.js
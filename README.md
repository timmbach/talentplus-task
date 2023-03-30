# talentplus-task

## Steps to build and run the react app using docker

- download and install docker from the web
- **docker build -t talentplus_task**
- **docker run talentplus_task** (app won't start because the port of the container needs to map across port used to run the app. See fix below)
- **docker run --publish 3000:3000 talentplus_task**

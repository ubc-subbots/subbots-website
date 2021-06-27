This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

1. Install LTS version of NodeJS (v14.17.0) https://nodejs.org/en/download/ (which installs `npm`)
2. Clone this repo, and in repo root, run `npm install` (may take a while)
3. If the last step worked with no error, run `npm start` (local server will open on http://localhost:3000/)

## Workflow

1. Make sure you are on the latest copy of master (i.e `git checkout master`, `git pull`)
2. Make a new branch for your feature `git checkout -b <YOUR_NAME>/<FEATURE_NAME>` (i.e `logan/team-pictures`)
3. When the feature is done, open a pull request from your branch to master

## Deployment

1. Clone this repo, pull latest state of `master` branch
2. Run the command `npm run deploy`
3. If the previous step works and https://subbots.ca/#/ doesn't work, go to the repo in GitHub, then go to `Settings > Pages > Custom domain` and enter `subbots.ca` as the custom domain

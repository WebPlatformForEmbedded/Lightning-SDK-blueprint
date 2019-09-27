# Installation

1. `git clone git@github.com:WebPlatformForEmbedded/Lightning-SDK-blueprint.git {YOUR_APP_NAME}`
2. `cd {YOUR_APP_NAME}`
3. `git remote set-url origin {YOUR_REPOSITORY_URL}`
4. Create a new empty git repo on the specified origin url
5. Set name and identifier in `metadata.json`.
6. `git commit -anm "init app"`
7. `git push origin master`
8. `npm install`

Now please check if you can run index.html (using a web server or your IDE). 
If it works you're set up and ready to start building your app!

If you don't have a web server installed you could run instant-server from the directory:
```
sudo npm install -g http-server
http-server -c-1
```

# Developing apps
If you are new to Lightning, please consult the [Lightning framework documentation](https://webplatformforembedded.github.io/Lightning). 

When building an app on the Lightning SDK, instead of extending `lng.Application`, extends [`ux.Apps`](https://github.com/WebPlatformForEmbedded/Lightning-SDK/blob/master/js/src/App.js). This brings some additional features such as **automated font loading** and **relative paths**.

Notice that the SDK provides additional features such as a *mediaplayer* implementation, a generic *video player UI*, generic *keyboard* and some other components. For now please use the *force* and read the [*source*](https://github.com/WebPlatformForEmbedded/Lightning-SDK/tree/master/js/src/tools).

# Building app distribution

Use the following steps to create a distribution:

Create a self-contained web-based distribution (HTML5) in dist/web:
`npm run release-web`

Create a Metrological platform package in dist/{appname}.mpkg.tgz:
`npm run release-mpkg`

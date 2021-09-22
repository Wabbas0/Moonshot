### Usage

```sh
yarn start
```

## Structure

- **/components** This folder contains UI components where I use Ant-design & lottie library for some animation and define the custom markers that will shown on the map.

* **/api** This where I configure axios client and define the different http methods for each model in an organized and modular way. However for this task I only defined one http method that fetches repo data but if we have a huge application with many models this apporach will come really handy.


- **/redux** Here redux modules are being defined following "ducks-modular-redux" proposal to group all redux stuff in one file. I really do like this approach because it keeps everything in one place which makes things easier when debugging.


- **/config** Here is where we add configuration for testing libraies and others.



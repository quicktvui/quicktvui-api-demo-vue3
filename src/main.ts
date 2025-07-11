//
import routes from "./routes";
import {ESApp} from '@extscreen/es3-vue';
import application from './App.vue';

import {createESApp} from "@extscreen/es3-core";
import './views/css/es-sdk-css.css';
import './views/css/quick-ui-css.css';
import './components/qt-animation/css/qt-animation-css.css';
import './components/qt-seek-bar/css/qt-seek-bar-css.css';

let router: Router
if (BuildConfig.enableSlotView) {
  const routerOptions = {
    routes: routes,
  }
  router = createESSlot(routerOptions);
} else {
  const routerOptions = {
    main: 'splash',
    error: 'error',
    limit: 10,
    routes: routes,
  }
  router = createESRouter(routerOptions);
}

const app: ESApp = createESApp(application, router);
app.config.errorHandler = (err, instance, info) => {
  console.error("❌ Vue Error:", err);
  console.error("👉 Component instance:", instance);
  console.error("⚠️ Info:", info);
};

import {install} from './components';

app.use(install);

//----------------------------------------------------------
import {ESComponent} from "@extscreen/es3-component";

app.use(ESComponent);
//----------------------------------------------------------
import {QuickTVUI} from "@quicktvui/quicktvui3";
import '@quicktvui/quicktvui3/dist/index.css';

app.use(QuickTVUI);

//----------------------------------------------------------
import {createESPlayer} from "@extscreen/es3-player";

const player = createESPlayer();
app.use(player);

import {createESPlayerManager} from "@extscreen/es3-player-manager";

const playerManager = createESPlayerManager()
app.use(playerManager);

import {createESVideoPlayer} from "@extscreen/es3-video-player";

const videoPlayer = createESVideoPlayer();
app.use(videoPlayer);

import {createESADPlayer} from "@extscreen/es3-ad-player";

const ADPlayer = createESADPlayer();
app.use(ADPlayer);
//----------------------------------------------------------

//---------------------------网络请求----------------------------------
import {createRequestManager, RequestManager} from "./request/RequestManager";

const requestManger: RequestManager = createRequestManager()
app.use(requestManger);

//---------------------------网络接口----------------------------------
import {createQTDataSource} from "./datasource/impl/QTDataSourceImpl";
import {IQTDataSource} from "./datasource/IQTDataSource";
import {createESRouter, createESSlot, Router} from "@extscreen/es3-router";
import BuildConfig from "./build/BuildConfig";

const dataSource: IQTDataSource = createQTDataSource()
app.use(dataSource);

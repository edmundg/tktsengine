import {
  audio,
  loader,
  state,
  device,
  video,
  utils,
  plugin,
  pool
} from 'melonjs';

import DataManifest from './manifest';
import TitleScreen from './js/stage/title';
import PlayScreen from './js/stage/play';

device.onReady(() => {

  // initialize the display canvas once the device/browser is ready
  if (!video.init(1218, 562, {parent : "screen", scale : "auto"})) {
      alert("Your browser does not support HTML5 canvas.");
      return;
  }

  audio.init("mp3,ogg");

  loader.crossOrigin = "anonymous";

  loader.preload(DataManifest, function() {
    state.set(state.MENU, new TitleScreen());
    state.set(state.PLAY, new PlayScreen());

    state.change(state.PLAY, true);
  })
});

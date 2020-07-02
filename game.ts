import { Game, Types } from "phaser";
import { MainScene } from "./scenes/main-scene";

// main game configuration
const config: Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scene: MainScene
};

window.addEventListener("load", () => {
  const game = new Game(config);
});
import { Scene, GameObjects } from "phaser";

export class MainScene extends Scene {

    create() {
        this.add.rectangle(400, 300, 50, 50, 0xff0000);
    }
}
export class StartMenu extends Phaser.Scene {
  constructor() {
    super({ key: "start-menu", active: true });
  }

  preload() {
    console.log("loading StartMenu");
  }

  create() {
    this.welcome = this.add.text(150, 150, "Welcome to My Game!");
    this.kbSpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
  }

  update() {
    if(this.kbSpace.isDown){
      this.scene.start('main-level')
    }

    // comment in for controller/gamepad support (A Bittpm tp Start)
    // if (this.input.gamepad.total > 0) {
    //   const pad = this.input.gamepad.getPad(0);
    //   if (pad.A) {
    //     this.scene.start("main-level");
    //   }
    // }
  }
}

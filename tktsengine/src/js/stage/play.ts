import { Stage, game, ColorLayer, BitmapText } from 'melonjs'

class PlayScreen extends Stage {
    onResetEvent() {
        game.world.addChild(new ColorLayer("background", "#202020"));
    }
}

export default PlayScreen;
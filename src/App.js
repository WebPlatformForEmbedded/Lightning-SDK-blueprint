import { Lightning } from 'wpe-lightning-sdk'

export default class App extends Lightning.Component {

    static getFonts() {
        return [
        ]
    }

    static _template() {
        return {
            Label:{
                x: 100, y:100, text:{text:'Lightning-SDK Blueprint'}
            }
        }
    }

}
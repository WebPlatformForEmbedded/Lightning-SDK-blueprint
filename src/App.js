ux.locale.setLanguage('en');

export default class App extends ux.App {
    static getFonts() {
        return [
        ]
    }

    static _template() {
      return {
        Text: {
          w: 700,
          text: {
            text: ux.locale.tr.hello2.format("A", 2),
            fontSize: 32,
        }
      }
    };
  }
}
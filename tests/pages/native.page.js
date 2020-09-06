const PageFactory = require('./page.factory.js');

class NativePage {

  constructor() {
    this.page = {};
  }

  getPage(name) {
    console.log('name passed '+name)
    console.log('name is '+JSON.stringify(this.page))
    if (!(name in this.page)) {
      console.log("native page "+ JSON.stringify(this.page))
      this.page.name = PageFactory.getNativePage(name);
    }
    return this.page.name;
  }
}

module.exports = NativePage;

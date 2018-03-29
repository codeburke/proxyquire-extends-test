
const Base = require('./base');

class Child extends Base {
    constructor() {
        super();
    }
    inc() {
        console.log('calls child inc');
        return super.inc() + 1;
    }
}

module.exports = Child;

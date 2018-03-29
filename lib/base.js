class BaseClass {
    constructor() {
        this.count = 0;
    }
    inc() {
        console.log('calls base inc');
        this.count += 1;
        return this.count;
    }
}

module.exports = BaseClass;

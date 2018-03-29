class MockBaseClass {
    constructor() {
        const self = this; 
        this._incReturn = 0;
        this.inc = () => {
            console.log('calls mock inc');
            return self._incReturn;
        };
    }
}

module.exports = MockBaseClass;
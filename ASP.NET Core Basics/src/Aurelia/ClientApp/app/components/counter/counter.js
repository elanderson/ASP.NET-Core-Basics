"use strict";
var Counter = (function () {
    function Counter() {
        this.currentCount = 0;
    }
    Counter.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    return Counter;
}());
exports.Counter = Counter;
//# sourceMappingURL=counter.js.map
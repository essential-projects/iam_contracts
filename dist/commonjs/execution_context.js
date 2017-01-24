"use strict";
var ExecutionContext = (function () {
    function ExecutionContext(decodedToken, tokenType, encryptedToken) {
        this.token = undefined;
        this.tokenType = undefined;
        this.encryptedToken = undefined;
        this.token = decodedToken;
        this.tokenType = tokenType;
        this.encryptedToken = encryptedToken;
    }
    Object.defineProperty(ExecutionContext.prototype, "isGuest", {
        get: function () {
            return this.token === undefined;
        },
        enumerable: true,
        configurable: true
    });
    return ExecutionContext;
}());
exports.ExecutionContext = ExecutionContext;

//# sourceMappingURL=execution_context.js.map

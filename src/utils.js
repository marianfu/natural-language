var Utils = function() {

};

Utils.typeVariable = function (v) {
    return Object.prototype.toString.call(v);
};

module.exports = Utils;
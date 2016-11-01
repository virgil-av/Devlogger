"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var FeathersService = (function () {
    function FeathersService(http) {
        this.http = http;
        console.log("Feathers Service has started and it's running wild");
    }
    FeathersService.prototype.getLogs = function () {
        return this.http.get('http://localhost:3030/logs')
            .map(function (result) { return result.json(); });
    };
    FeathersService.prototype.addLog = function (log) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3030/logs', JSON.stringify(log), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeathersService.prototype.deleteLog = function (id) {
        return this.http.delete('http://localhost:3030/logs/' + id)
            .map(function (res) { return res.json(); });
    };
    FeathersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FeathersService);
    return FeathersService;
}());
exports.FeathersService = FeathersService;
//# sourceMappingURL=feathers.service.js.map
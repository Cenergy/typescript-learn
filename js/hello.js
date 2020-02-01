"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (config.dataType === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://www.baidu.com',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('123123', '12312321321'));
var arr = [123, 456, 7899];
var arr1 = ['1111'];
var user = ['abcdefg'];
var user1 = {
    abc: '123213',
    age: '345'
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + 'eat something');
    };
    return Dog;
}());
var d = new Dog('hello');
d.eat();
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log("TCL: MysqlDB<T> -> info", info);
        return true;
    };
    return MysqlDB;
}());
var u = new User();
u.username = 'zhangshan';
u.password = 'password';
var db = new MysqlDB();
db.add(u);
var MysqlDBI = /** @class */ (function () {
    function MysqlDBI() {
    }
    MysqlDBI.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDBI.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDBI.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDBI.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDBI;
}());
var oMysqlDB = new MysqlDB();
oMysqlDB.add(u);
// 装饰器。
function logClass(params) {
    return function (target) {
        console.log("TCL: logClass -> target", target);
        console.log("TCL: logClass -> params", params);
        target.prototype.apiURL = params;
    };
}
function logClass2(params) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "修改后的名字";
            return _this;
        }
        class_1.prototype.getData = function () {
        };
        return class_1;
    }(params));
}
function logClass3(params) {
    return function (target, attr) {
        target[attr] = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.name = "修改之前的名字";
    }
    HttpClient.prototype.getData = function () {
    };
    __decorate([
        logClass3('helloworld')
    ], HttpClient.prototype, "url", void 0);
    HttpClient = __decorate([
        logClass('http://api.aigisss.com')
    ], HttpClient);
    return HttpClient;
}());
var httpClient = new HttpClient();
console.log("TCL: httpClient", httpClient);

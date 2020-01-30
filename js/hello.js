"use strict";
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

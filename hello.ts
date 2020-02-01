interface AjaxConfig{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:AjaxConfig){
    const xhr=new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            if(config.dataType==='json'){
                console.log(JSON.parse(xhr.responseText))
            }else{
                console.log(xhr.responseText)
            }
        }
    }

}


ajax({
    type:'get',
    url:'http://www.baidu.com',
    dataType:'json'
})


// 函数类型的接口

interface encrypt{
    (key:string,value:string):string;
}
const md5:encrypt=(key:string,value:string):string =>{
 return key+value
}

console.log(md5('123123','12312321321'))

const arr:number[]=[123,456,7899]
const arr1:Array<string>=['1111']
interface userArray{
    [index:number]:string
}
const user:userArray=['abcdefg']
interface userObj{
    [index:string]:string
}
const user1:userObj={
    abc:'123213',
    age:'345'
}
interface Animal{
    name:string,
    eat(str:string):void
}
class Dog implements Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    eat(){
        console.log(this.name+'eat something')
    }
}

const d=new Dog('hello')
d.eat()


class User{
    username:string|undefined;
    password:string|undefined;
}
class MysqlDB<T>{
    add(info:T):boolean{
        console.log("TCL: MysqlDB<T> -> info", info)
        return true
    }
}

const u=new User();
u.username='zhangshan';

u.password='password';
const db=new MysqlDB<User>();
db.add(u)


interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

class MysqlDBI<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}


const oMysqlDB=new MysqlDB<User>();
oMysqlDB.add(u)



// 装饰器。

function logClass(params:string){
    return function(target:any){
        console.log("TCL: logClass -> target", target)
        console.log("TCL: logClass -> params", params)
        target.prototype.apiURL=params
    }
}

function logClass2(params:any){
    return class extends params{
       name:any="修改后的名字"
       getData(){

       }
    }
}



function logClass3(params:any){
    return function (target:any,attr:any){
        target[attr]=params
    }
}


@logClass('http://api.aigisss.com')
class HttpClient{
    public name:string|undefined;
    @logClass3('helloworld')
    public url:any |undefined
    constructor(){
        this.name="修改之前的名字"
    }
    getData(){

    }
}

const httpClient=new HttpClient()
console.log("TCL: httpClient", httpClient)




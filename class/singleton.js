"use strict";
//어플리케이션 실행되는 순간  class로부터 단 하나의 오브젝트만 사용하여 만드는 것
class ClassName {
    //매게체
    static getInstance() {
        // className으로부터 만든 object가 있으면 그걸 return
        // 없으면 만들어서 return
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    constructor() {
    }
}
ClassName.instance = null;
//object 생성 
//생성할 수 없는 상태로 만들어야함 
// 생성자를 private으로 설정
//  const ab = new ClassName();
//  const bc = new ClassName();
const ab = ClassName.getInstance();
const bc = ClassName.getInstance();
console.log(ab === bc);

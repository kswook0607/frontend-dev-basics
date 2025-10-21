/*
        Named Export
        1. CJS의 exports, require()와 유사
        2. import 하는 모듈에서 destruction 이 가능하다.
        3. export 시에는 이름을 지정한다.
        4. 다중 export 가 가능하다.
*/

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
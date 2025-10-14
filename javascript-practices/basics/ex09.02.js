/**
 * URL 다루기
 * 
 * JavaScript(frontend) 에서 URL을 다루는 예시
 * 
 * 1. 리다이렉트 
 * 
 * location.href = url;
 * 
 * 2. ajax 통신
 * 
 * $.ajax(url)
 * fetch(url)
 * axios(url)
 * 
 */

var url = "https://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: url 전체를 encoding, 사용(x), deprecated
var url1 = escape(url);
console.log(url1);

// 2. encodeURI: url 전체 중 파라미터 부분만 encoding, 사용(ok), url 전체를 encoding 해야하는 경우
var url2 = encodeURI(url);
console.log(url2);

// 3. encodeURIComponent: url 전체 중 파라미터 값만 encoding
// 사용예시
// 만들어야 할 url: https://www.mysite.com/user?name=둘리&email=dooly@gmail.com
var url = "http://www.mysite.com/user";
var formData = {
    name: "둘리",
    email: "dooly@g.com"
}

var toQueryString = function(o){
    var qs = [];
    var index = 0;
    for(var props in o ){
        // qs[index++] = props + "=" + encodeURIComponent(o[props]);
        qs.push(props + "=" + encodeURIComponent(o[props]));
    }
    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));

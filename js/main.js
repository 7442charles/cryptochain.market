function select(el) {
    return document.querySelector(el);
}

console.log(select(".try"));

const request = new XMLHttpRequest();
const url = 'http://127.0.0.1:8081/';
request.open("GET", url);
request.send();

request.onload = (e) =>{
    console.log(request.response);
}
/*
fetch(url)
.then(data =>data.json())
.then((json)=>{
    console.log(json.stringify(json));
})*/
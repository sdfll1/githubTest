fetch('https://link',{
    method:'POST',
    headers: {
        'Content-type': 'application/json', // qaysi formatta yuborish
        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
        },
    body:JSON.stringify({name:elName.value, age: elAge.value })
})
.then((res)=> res.json())
.then((data)=> console.log(data))
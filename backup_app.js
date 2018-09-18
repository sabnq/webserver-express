const http = require('http');

//Se crea el servidor web
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Sebastian',
            edad: '27',
            url: req.url
        }
        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');
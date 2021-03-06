# Confesionario Mac V2
(Dockerizado) Confesionario por y para el MAC. El lugar al que los mackienzies pueden acudir a liberar sus mas profundos pensamientos de manera anonima.

Versiones:
---------

Docker app image: NodeJs 12.18.0 - Npm 6.14.4

Docker db image: mongo:4.4.0-rc7-bionic


Requisitos para ejecutar:
---------

- Docker CE & Docker compose
- No tener ocupados los puertos 3000 y 27017

Instrucciones:
---------

- Clonar el repo
- Definir el archivo .env con los siguientes parametros MONGO_HOST, MONGO_PORT
- Levantar el proyecto con docker-compose:

```
$ docker-compose up -d
```
esto levantara 2 servicios: la db (db_confesionario_cont) y la app (app_confesionario_cont) que se conecta con la bd. sus respectivas imagenes son (mongo4.4.0-rc7-bionic, app_confesionario_im).
- Probar que todo este funcionando, visitar **localhost:3000**:

- Empezar a codear sobre el proyecto o utilizarlo

- El proyecto ya esta creado para desplegado en produccion, solamente ejecutar listo (verificar que los puertos en el server esten libres)

Teconologias usadas:
---------

- Nodejs
- Handlebars
- MongoDB (uso mongoose para manipular los datos)
- Socket.IO (Para mantener la comunicacion cliente servidor de los mensajes entrantes)

Por hacer:
---------

- [ ] Aplicar validaciones con @hapi/joi
- [ ] Pagination sobre la lista de mensajes
- [ ] Probar la implementacion de elasticsearch (actualmente solamente es un get del crud)
- [x] Se podria mejorar la comunicacion de socketIo para que al enviar no sea un redirect, sino simule un chat
- [ ] Permitir connectiones tcp para el uso de la app mediante terminal con el comando nc (seria directamente sobre la BD)

*Cualquier cosa creen un issue - JK*


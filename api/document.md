- Create project: nest new api
- Config nest module: npm i --save @nestjs/config
- TypeOrm: npm install --save @nestjs/typeorm typeorm pg
- Task 1
+ git flow init -f
+ git flow feature start video-01
+ git flow feature finish video-01
- cd src/; nest generate module user
- cd src/user; nest generate service user
- cd src/user; nest generate controller user
- npm install @nestjs/jwt --save
- POST: http://localhost:3000/users/login
    body - raw 
    {
        "email": "hanhlucxuan@gmail.com",
        "password": "123456"
    },
    {
        "email": "chinhphamvanvn@gmail.com",
        "password": "12345678"
    }

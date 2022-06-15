# Challenge Frontend

## instrucciones:
1. Clonar el repositorio
2. Instalar las dependencias del proyecto:

```bash
npm install
```
3. Editar la direccion del api en el archivo `.env`:
```bash
# nota: importante que tenga /api
REACT_APP_API_BASE_URL = 'http://localhost:8000/api' 
```
4. Preparar la api: este proyecto solo funciona con algunas mejoras que realicé las cuales se encuentran en el siguiente [fork](https://github.com/luispastendev/emprend-api) o de igual manera les mande un [pull request](https://github.com/fakereto/emprend-api/pull/37) a su proyecto original **(si no se utiliza esta versión el proyecto no funcionará)**

5. ejecutar el proyecto:
```
npm start
```


## Tenologías utilizadas

- React 18 (react-create-app)
- axios 
- tailwindcss
- fork de api emprenD [ir al Fork](https://github.com/luispastendev/emprend-api) o aceptar el [PR](https://github.com/fakereto/emprend-api/pull/37)

## Modulos

- Login
- Registro
- Agregar nuevas notas
- Actualizar notas (Solo las creadas por el usuario actual)
- Borrrar notas (Solo las creadas por el usuario actual)
- Mostrar notas (lazy loading)






# express-backend

Backend profesional con Node.js y Express con estructura base de producción, variables de entorno, logging de peticiones y manejo centralizado de errores.

## Tecnologías

- **Node.js** v24+
- **Express** — framework web
- **dotenv** — variables de entorno
- **morgan** — logging de peticiones HTTP
- **nodemon** — reinicio automático en desarrollo

## Estructura del proyecto

```
express-backend/
├── src/
│   ├── config/
│   │   └── env.js              # Carga y exporta variables de entorno
│   ├── controllers/
│   │   └── healthController.js # Lógica de los endpoints
│   ├── middlewares/
│   │   ├── logger.js           # Logging de peticiones (morgan)
│   │   ├── notFound.js         # Manejo de rutas no encontradas (404)
│   │   └── errorHandler.js     # Manejo centralizado de errores (500)
│   ├── routes/
│   │   └── healthRoutes.js     # Definición de rutas
│   └── app.js                  # Configuración de Express
├── .env.example                # Plantilla de variables de entorno
├── .gitignore
├── package.json
└── server.js                   # Punto de entrada
```

## Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/Fernando-bit24/express-backend.git

# 2. Entra a la carpeta
cd express-backend

# 3. Instala las dependencias
npm install

# 4. Copia el archivo de variables de entorno
cp .env.example .env
```

## Variables de entorno

Crea un archivo `.env` en la raíz con las siguientes variables (puedes copiar `.env.example`):

| Variable   | Descripción                          | Valor por defecto |
|------------|--------------------------------------|-------------------|
| `PORT`     | Puerto en el que corre el servidor   | `3000`            |
| `NODE_ENV` | Ambiente de ejecución                | `development`     |

Ejemplo de `.env`:
```
PORT=3000
NODE_ENV=development
```

## Ejecución

```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
npm start
```

El servidor estará disponible en: `http://localhost:3000`

## Endpoints

### GET `/`
Verifica que el servidor esté corriendo.

**Respuesta exitosa (200):**
```json
{
  "message": "API Express funcionando correctamente",
  "version": "1.0.0"
}
```

---

### GET `/health`
Retorna el estado del servidor, tiempo de actividad y timestamp.

**Respuesta exitosa (200):**
```json
{
  "status": "ok",
  "uptime": 112.04,
  "timestamp": "2026-06-04T20:17:56.108Z"
}
```

---

### Cualquier ruta no existente
Retorna un error 404 en formato JSON.

**Respuesta (404):**
```json
{
  "status": "error",
  "message": "Ruta no encontrada: GET /ruta-inexistente"
}
```

## Cómo probar los endpoints

### Con el navegador
Abre directamente en el navegador:
- `http://localhost:3000/`
- `http://localhost:3000/health`

### Con PowerShell
```powershell
Invoke-RestMethod http://localhost:3000/
Invoke-RestMethod http://localhost:3000/health
Invoke-RestMethod http://localhost:3000/ruta-inexistente
```

### Con curl
```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/ruta-inexistente
```

### Con Postman
Importa o crea una nueva petición **GET** a cualquiera de las URLs anteriores.

## Scripts disponibles

| Script        | Comando          | Descripción                              |
|---------------|------------------|------------------------------------------|
| `npm start`   | `node server.js` | Inicia el servidor en modo producción    |
| `npm run dev` | `nodemon server.js` | Inicia con recarga automática         |

## Autor

Fernando — L221140029  
IT Sur de Nayarit — TECNM


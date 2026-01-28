# 🚀 Inicio Rápido del Panel Administrativo

## 1️⃣ Iniciando el Sistema

### Terminal 1: Backend (Node.js)
```bash
cd /Users/hectorurbina/Documents/Proyects-Web/Office-Plus/backend
npm install  # Solo si no lo has hecho
npm start
```

Verás:
```
✅ Servidor ejecutándose en http://localhost:5000
📍 API disponible en http://localhost:5000/api
```

### Terminal 2: Frontend (React + Vite)
```bash
cd /Users/hectorurbina/Documents/Proyects-Web/Office-Plus
npm run dev
```

Verás:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

---

## 2️⃣ Accediendo al Panel de Admin

### Opción A: URL Directa
Abre tu navegador y ve a:
```
http://localhost:5173/admin/login
```

### Opción B: Desde la Página Principal
1. Ve a `http://localhost:5173`
2. En el menú de navegación (azul/púrpura), busca **🔐 Admin**
3. Haz clic

---

## 3️⃣ Credenciales de Acceso

| Campo | Valor |
|-------|-------|
| Usuario | `admin` |
| Contraseña | `Office123!` |

✅ Haz clic en "Iniciar Sesión"

---

## 4️⃣ Bienvenida al Dashboard

Verás una interfaz con:

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  ┌──────────────┬──────────────────────────────────────┐│
│  │ Admin Panel  │  Bienvenido al Panel Administrativo │ │
│  │ Office Plus  │                              Admin    │ │
│  │              │                                      │ │
│  │ 📦 Productos │ Panel principal con opciones        │ │
│  │ 📊 Stats     │                                      │ │
│  │ ⚙️ Config    │                                      │ │
│  │              │                                      │ │
│  │ Logout       │                                      │ │
│  └──────────────┴──────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 5️⃣ Primeros Pasos: Agregar un Producto

### Paso 1: Ir a Productos
- El panel abre en la sección de productos por defecto
- Verás una tabla con los 8 productos iniciales

### Paso 2: Agregar Nuevo Artículo
Haz clic en el botón verde: **+ Agregar Producto**

### Paso 3: Completar el Formulario

**Campos Obligatorios:**
```
Nombre: Tóner para Impresora
Precio Actual: 149.99
Descripción: Tóner de alta calidad compatible con HP, calidad profesional...
```

**Campos Opcionales:**
```
Precio Original: 199.99  (se calcula automáticamente 25% descuento)
Categoría: tecnologia
Imagen: /src/assets/toner.png
Stock: ✓ Disponible
```

**Características:**
1. Escribe: "Compatible con HP LaserJet"
2. Clic "Agregar"
3. Escribe: "Rendimiento de 5000 páginas"
4. Clic "Agregar"
5. Etc...

### Paso 4: Guardar
Haz clic en **Crear Producto**

✅ Verás un mensaje de confirmación

---

## 6️⃣ Operaciones Básicas

### 🔍 Buscar Productos
```
Usa la barra de búsqueda para filtrar por:
- Nombre: "Bolígrafo"
- Categoría: "escritura"
```

### ✏️ Editar Producto
1. Encuentra el producto en la tabla
2. Haz clic en el icono **📝** (Editar)
3. Modifica los campos
4. Clic **Actualizar Producto**

### 🗑️ Eliminar Producto
1. Encuentra el producto
2. Haz clic en el icono **🗑️** (Eliminar)
3. Confirma en la ventana emergente
4. ¡Listo!

---

## 7️⃣ Estadísticas y Configuración

### 📊 Estadísticas
Menú lateral → **📊 Estadísticas**

Verás:
- Total de productos
- Número de categorías
- Stock bajo (próximamente)

### ⚙️ Configuración
Menú lateral → **⚙️ Configuración**

Información:
- Usuario conectado
- Versión del sistema
- Nota sobre base de datos en memoria

---

## 8️⃣ Cerrar Sesión

Menú lateral → **Cerrar Sesión**

Serás redirigido a la página de login

---

## ✅ Checklist de Funcionalidad

- [x] Crear productos
- [x] Editar productos
- [x] Eliminar productos
- [x] Listar productos
- [x] Buscar productos
- [x] Filtrar por categoría
- [x] Ver estadísticas
- [x] Autenticación (demo)
- [x] Interfaz responsiva (mobile, tablet, desktop)

---

## 🔧 Información Técnica

### Archivos Creados/Modificados
```
src/
├── pages/
│   ├── AdminLogin.tsx (✨ NUEVO)
│   ├── AdminLogin.css (✨ NUEVO)
│   ├── AdminDashboard.tsx (✨ NUEVO)
│   ├── AdminDashboard.css (✨ NUEVO)
│   ├── AdminProducts.tsx (✨ NUEVO)
│   ├── AdminProducts.css (✨ NUEVO)
│   └── ... (otros sin cambios)
├── components/
│   ├── ProductForm.tsx (✨ NUEVO)
│   ├── ProductForm.css (✨ NUEVO)
│   ├── Header.tsx (modificado - link admin)
│   └── ...
├── services/
│   ├── api.ts (actualizado - métodos CRUD)
│   └── auth.ts (✨ NUEVO)
└── App.tsx (actualizado - rutas admin)

backend/
└── server.js (actualizado - endpoints CRUD)
```

### Endpoints API del Admin
```
POST   /api/productos
GET    /api/productos
GET    /api/productos/:id
PUT    /api/productos/:id
DELETE /api/productos/:id
```

---

## ⚠️ Consideraciones Importantes

### Base de Datos
- Actualmente: **En memoria** (datos se pierden al reiniciar)
- Para producción: Integrar MongoDB o PostgreSQL

### Seguridad
- Credenciales de demo: visible en el código
- Para producción: JWT tokens, hash de contraseñas, HTTPS

### Imágenes
- Actualmente: URLs (strings)
- Para producción: Sistema de upload de archivos

---

## 🆘 Solución de Problemas

### Error: "Cannot GET /admin/login"
- Asegúrate de que el frontend está corriendo (npm run dev)
- Verifica la URL: http://localhost:5173/admin/login

### Error: "Failed to fetch" en el formulario
- Backend no está corriendo
- Terminal 1: Ejecuta `npm start` en la carpeta /backend

### Los datos no se guardan
- Reiniciaste el servidor backend (datos en memoria se pierden)
- Verifica la consola (F12) para errores

### Problemas de CORS
- Verifica que CORS esté habilitado en server.js
- Debe incluir: `app.use(cors())`

---

## 📚 Documentación Completa

Para más detalles, ver: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

---

## 🎉 ¡Listo!

Ahora tienes un panel administrativo completamente funcional para gestionar los productos de Office Plus.

**Próximas mejoras posibles:**
- Soporte para múltiples usuarios
- Sistema de roles (admin, vendedor, etc.)
- Base de datos persistente
- Upload de imágenes
- Gestión de órdenes
- Reportes y analytics

---

**Creado:** 27 de enero de 2026
**Versión:** 1.0.0
**Mantenedor:** Office Plus Team

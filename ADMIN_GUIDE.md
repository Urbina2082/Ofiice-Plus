# 🔐 Panel Administrativo - Guía de Uso

## Acceso al Panel

### URL de Acceso
```
http://localhost:5173/admin/login
```

Alternativamente, desde la página principal, haz clic en **🔐 Admin** en el menú de navegación.

---

## Credenciales de Acceso

### Usuario de Demo
- **Usuario:** `admin`
- **Contraseña:** `Office123!`

> ⚠️ **Nota:** Estas son credenciales de demostración. En un ambiente de producción, implementa un sistema de autenticación robusto con base de datos.

---

## Funcionalidades del Panel

### 1. 📦 Gestión de Productos

#### Ver todos los productos
- Al iniciar sesión, accedes automáticamente a la sección de productos
- Visualiza una tabla con todos los artículos del catálogo
- Información visible:
  - ID del producto
  - Nombre y descripción corta
  - Categoría (con badge de color)
  - Precio actual
  - Precio original (con descuento calculado)
  - Estado de stock (Disponible / Agotado)
  - Acciones (Editar / Eliminar)

#### Buscar productos
- Usa el campo de búsqueda para filtrar por:
  - Nombre del producto
  - Categoría
- La búsqueda es en tiempo real

#### Agregar un nuevo producto
1. Haz clic en el botón **+ Agregar Producto**
2. Se abre un formulario con los siguientes campos:

**Información Básica:**
- Nombre del Producto * (requerido)
- Precio Actual * (requerido)
- Precio Original (opcional)
- Categoría (escritura, papel, oficina, tecnologia, general)

**Detalles:**
- Descripción * (requerido)
- URL de Imagen
- ✓ Producto disponible (checkbox)

**Características:**
- Agrega características individuales del producto
- Escribe una característica y haz clic en "Agregar"
- Presiona Enter también agrega la característica
- Puedes eliminar características con el botón ✕

3. Haz clic en **Crear Producto**
4. El sistema confirmará la creación con un mensaje de éxito

#### Editar un producto
1. En la tabla de productos, busca el artículo que deseas editar
2. Haz clic en el botón **📝** (Editar)
3. Se abre el formulario con los datos actuales
4. Modifica los campos que necesites
5. Haz clic en **Actualizar Producto**
6. El sistema confirmará la actualización

#### Eliminar un producto
1. En la tabla de productos, busca el artículo a eliminar
2. Haz clic en el botón **🗑️** (Eliminar)
3. Confirma la eliminación en la ventana de diálogo
4. El producto se eliminará de inmediato

---

### 2. 📊 Estadísticas

Accede a través del menú lateral izquierdo.

Visualiza:
- **Productos Totales:** Cantidad de artículos en el catálogo
- **Categorías:** Número de categorías activas
- **Stock Bajo:** (Próxima funcionalidad)

---

### 3. ⚙️ Configuración

Accede a través del menú lateral izquierdo.

**Información de Cuenta:**
- Usuario actual: `admin`
- Email: `admin@officeplus.com`
- Botón: "Cambiar Contraseña" (próxima funcionalidad)

**Información del Sistema:**
- Versión actual
- Última actualización

---

## Estructura del Formulario de Producto

### Campos Obligatorios (*)
- Nombre del Producto
- Precio Actual
- Descripción

### Campos Opcionales
- Precio Original (para calcular descuentos)
- Categoría (valor por defecto: general)
- URL de Imagen
- Estado de stock (por defecto: disponible)
- Características

### Categorías Disponibles
- **escritura:** Bolígrafos, lápices, marcadores, etc.
- **papel:** Cuadernos, hojas, blocs de notas, etc.
- **oficina:** Engrapadoras, perforadoras, organizadores, etc.
- **tecnologia:** Calculadoras, dispositivos electrónicos, etc.
- **general:** Otros productos

---

## Flujo de Trabajo Recomendado

### Agregar un Nuevo Artículo
```
1. Clic en "+ Agregar Producto"
2. Completa el nombre, precio y descripción
3. Selecciona una categoría
4. Agrega características individuales
5. (Opcional) Carga una imagen
6. (Opcional) Establece precio original para mostrar descuento
7. Clic en "Crear Producto"
8. Confirma el mensaje de éxito
```

### Actualizar Stock o Detalles
```
1. Busca el producto en la tabla
2. Clic en el botón de Editar
3. Modifica los campos necesarios
4. Clic en "Actualizar Producto"
5. Confirma la actualización
```

### Gestionar Descuentos
```
1. Edita el producto
2. Establece "Precio Original" mayor que "Precio Actual"
3. El sistema calcula automáticamente el porcentaje de descuento
4. Actualiza el producto
```

---

## Mensajes y Estados

### ✅ Éxito
- Verde (#dcfce7)
- Indica que la acción se completó correctamente

### ❌ Error
- Rojo (#fee2e2)
- Muestra si algo salió mal
- Lee el mensaje para más detalles

### ⏳ Cargando
- "Cargando productos..."
- "Guardando..."
- Espera a que termine

---

## Interfaz Responsiva

### Desktop (>1024px)
- Vista completa con todos los detalles
- Tabla expandida
- Menú lateral completo

### Tablet (768px - 1024px)
- Tabla compacta
- Algunas columnas ocultas
- Menú adaptado

### Mobile (<768px)
- Tabla mínima (solo columnas esenciales)
- Interfaz simplificada
- Todos los botones accesibles

---

## Características Técnicas

### Base de Datos
- ⚠️ **Importante:** Los datos se almacenan en memoria (servidor)
- Los datos se pierden al reiniciar el servidor
- Para producción, implementa MongoDB o PostgreSQL

### API Endpoints (Desarrolladores)
```
POST   /api/productos              # Crear producto
GET    /api/productos              # Listar todos
GET    /api/productos/:id          # Obtener uno
PUT    /api/productos/:id          # Actualizar
DELETE /api/productos/:id          # Eliminar
GET    /api/productos/categoria/:c # Filtrar por categoría
```

---

## Seguridad

### Consideraciones Actuales
- Autenticación básica con localStorage
- Token guardado en el navegador
- Contraseña de demostración visible (solo desarrollo)

### Para Producción
- Implementar JWT tokens
- Hash de contraseñas (bcrypt)
- HTTPS obligatorio
- Validación en servidor
- Rate limiting
- CSRF protection

---

## Solución de Problemas

### "Usuario o contraseña incorrectos"
- Verifica que escribiste correctamente
- Usuario: `admin` (sin espacios)
- Contraseña: `Office123!` (respeta mayúsculas)

### Los cambios no se guardan
- Verifica que el servidor backend está corriendo
- Abre la consola (F12) para ver errores
- Intenta refrescar la página

### Las imágenes no carguen
- Verifica que la URL sea válida
- Para desarrollo, usa: `/src/assets/product-1.png`
- El sistema aceptará URLs HTTP/HTTPS también

### "No tienes permiso para acceder"
- Necesitas iniciar sesión primero
- Haz clic en 🔐 Admin en el menú principal
- Ingresa las credenciales de demo

---

## Próximas Funcionalidades

- 🔲 Cambio de contraseña
- 🔲 Gestión de pedidos
- 🔲 Control de clientes
- 🔲 Reportes de ventas
- 🔲 Backup automático
- 🔲 Múltiples usuarios administradores
- 🔲 Upload de imágenes (sin necesidad de URL)
- 🔲 Historial de cambios

---

## Contacto y Soporte

Para reportar bugs o solicitar nuevas funcionalidades:
- 📧 officeplus.nuevasvistas@gmail.com
- 📞 861 614 6075

---

**Última actualización:** 27 de enero de 2026
**Versión:** 1.0.0

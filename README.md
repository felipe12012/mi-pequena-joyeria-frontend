# 💎 Frontend - Mi Pequeña Joya

Este proyecto es el frontend del test técnico **"Mi Pequeña Joya"**, una tienda de joyería donde puedes gestionar productos desde un panel de administración amigable.

---

## ⚙️ Tecnologías utilizadas

- React 18 + TypeScript
- Bootstrap 5
- Fetch API (para consumir el backend)
- Arquitectura basada en componentes

---

## 📁 Estructura del proyecto

```
src/
├── api/             # Conexión con el backend (GET, POST, etc.)
├── components/      # Componentes reutilizables (tarjetas, formularios)
├── interfaces/      # Tipos TypeScript (ej: Product)
├── App.tsx          # Contenedor principal
└── index.tsx        # Punto de entrada
```

---

## 🚀 Cómo ejecutar el frontend

1. Clona o descarga el proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

La app correrá en `http://localhost:3000`

> ⚠️ Asegúrate de tener el backend corriendo en `http://localhost:8080`

---

## 🔌 Conexión con el backend

El frontend se conecta al backend en los siguientes endpoints:

- `GET /products`: obtiene productos
- `POST /products`: agrega un nuevo producto
- `POST /products/{id}/sell`: descuenta stock del producto

Esto se gestiona desde `src/api/productApi.ts`.

---

## 📦 Funcionalidades implementadas

### ✅ Vista de productos
- Muestra productos en tarjetas Bootstrap
- Indica si hay stock o no
- Permite vender una cantidad específica por tarjeta

### ✅ Formulario para agregar producto
- Validación de campos obligatorios
- Carga en tiempo real a la lista

---

## 🎨 Diseño
- Responsive y limpio
- Uso de Bootstrap para estilos
- Botones y campos organizados visualmente

---

## 👨‍💻 Autor

Desarrollado por Felipe Rodríguez como prueba técnica fullstack.

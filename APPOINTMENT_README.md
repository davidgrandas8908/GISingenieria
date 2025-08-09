# 📅 Sistema de Agenda de Citas - GIS Ingeniería

## Descripción
Este sistema permite a los clientes agendar citas de consultoría con GIS Ingeniería & Soluciones, con integración automática a Google Calendar.

## 🚀 Características Principales

### ✨ Funcionalidades del Usuario
- **Formulario de Agendamiento**: Interfaz intuitiva para reservar citas
- **Validación en Tiempo Real**: Verificación de campos obligatorios y formatos
- **Selección de Fecha y Hora**: Calendario con horarios disponibles
- **Servicios Disponibles**: Lista de servicios de ingeniería civil
- **Descripción Adicional**: Campo opcional para detalles del proyecto

### 🔄 Integración con Google Calendar
- **Creación Automática de Eventos**: Se genera un evento en Google Calendar
- **Invitaciones por Email**: Envío automático de confirmaciones
- **Recordatorios**: Configuración de alertas (1 día y 1 hora antes)
- **Sincronización Móvil**: Acceso desde cualquier dispositivo

### 📱 Diseño Responsivo
- **Mobile-First**: Optimizado para dispositivos móviles
- **Adaptativo**: Se ajusta a diferentes tamaños de pantalla
- **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 20 con TypeScript
- **Estilos**: SCSS con diseño moderno
- **Formularios**: Reactive Forms con validación
- **Calendario**: Google Calendar API (URL-based)
- **Email**: Sistema mailto para confirmaciones

## 📋 Campos del Formulario

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Nombre | Texto | ✅ | Mínimo 2 caracteres |
| Email | Email | ✅ | Formato válido |
| Teléfono | Teléfono | ✅ | Solo números y símbolos |
| Servicio | Select | ✅ | Opción obligatoria |
| Fecha | Date | ✅ | Mínimo mañana |
| Hora | Select | ✅ | Horarios disponibles |
| Descripción | Textarea | ❌ | Máximo 500 caracteres |

## 🕒 Horarios Disponibles

- **Lunes a Viernes**: 8:00 AM - 6:00 PM
- **Sábados**: 9:00 AM - 2:00 PM
- **Intervalos**: Cada 30 minutos
- **Duración**: 1 hora por cita

## 🔧 Servicios Ofrecidos

1. **Diseño Estructural**
2. **Análisis de Suelos**
3. **Construcción Residencial**
4. **Construcción Comercial**
5. **Rehabilitación Estructural**
6. **Consultoría Técnica**
7. **Otro** (personalizado)

## 📧 Flujo de Confirmación

1. **Usuario llena formulario** → Validación en tiempo real
2. **Envía solicitud** → Creación de evento en Google Calendar
3. **Se abre Google Calendar** → Usuario confirma evento
4. **Email automático** → Confirmación por correo
5. **Recordatorios** → Alertas automáticas

## 🎨 Personalización

### Colores del Tema
- **Primario**: Azul (#3498db)
- **Secundario**: Naranja (#E67E22)
- **Verde**: (#083335)
- **Gris**: (#ECF0F1)
- **Oscuro**: (#2C3E50)

### Estilos
- **Gradientes**: Efectos visuales modernos
- **Sombras**: Profundidad y elegancia
- **Animaciones**: Transiciones suaves
- **Hover Effects**: Interactividad mejorada

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Instalación y Uso

### Requisitos
- Node.js 18+
- Angular CLI 20+
- Navegador moderno

### Comandos
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build
```

### Estructura de Archivos
```
src/app/components/appointment/
├── appointment.ts          # Lógica del componente
├── appointment.html        # Template HTML
├── appointment.scss        # Estilos SCSS
└── appointment.spec.ts     # Pruebas unitarias

src/app/services/
└── calendar.service.ts     # Servicio de calendario
```

## 🔒 Seguridad y Privacidad

- **Validación del Lado Cliente**: Prevención de datos inválidos
- **Sanitización**: Limpieza de entradas del usuario
- **Sin Almacenamiento**: No se guardan datos en servidor
- **Integración Directa**: Conexión directa con Google Calendar

## 📊 Pruebas

### Pruebas Unitarias
```bash
npm test
```

### Cobertura de Código
- **Componente**: 100% de métodos cubiertos
- **Servicio**: 100% de funcionalidades probadas
- **Validaciones**: Todos los casos de uso verificados

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Formulario no se envía**
   - Verificar que todos los campos requeridos estén llenos
   - Revisar la consola del navegador para errores

2. **Google Calendar no se abre**
   - Verificar que no haya bloqueadores de popups
   - Asegurar conexión a internet

3. **Email no se envía**
   - Verificar configuración del cliente de email
   - Comprobar que el navegador soporte mailto

### Logs y Debugging
- **Console**: Errores y advertencias del navegador
- **Network**: Verificar llamadas a APIs externas
- **Application**: Estado del formulario y validaciones

## 🔮 Futuras Mejoras

- **API de Google Calendar**: Integración completa con OAuth
- **Base de Datos**: Almacenamiento de citas agendadas
- **Notificaciones Push**: Alertas en tiempo real
- **Video Conferencia**: Integración con Zoom/Meet
- **Pagos**: Sistema de reservas con pago anticipado

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación:
- **Email**: ricardos.gc123@gmail.com
- **Equipo**: GIS Ingeniería & Soluciones

---

**Versión**: 1.0.0  
**Última Actualización**: Diciembre 2024  
**Desarrollado por**: GIS Ingeniería & Soluciones

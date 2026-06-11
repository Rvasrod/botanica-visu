# BotánicaVisu

Aplicación PWA para estudiar botánica en formato "Visu" (identificación de plantas por fotografía).

## 📥 Instalación y uso

1. **Servir la app** (necesario para que funcione el Service Worker):
   ```
   # Con Python (recomendado):
   python -m http.server 8000
   
   # O con cualquier servidor estático (Live Server de VS Code, etc.)
   ```

2. Abrir en el navegador: `http://localhost:8000`

3. Para instalar en móvil/escritorio: usar el botón "Instalar" del navegador (Chrome/Safari).

## 🖼️ Cómo extraer las imágenes del PDF original

### Opción 1: Adobe Acrobat Reader (gratuito)

1. Abrir el PDF en Adobe Acrobat Reader
2. **Exportar imágenes**: Herramientas → Exportar PDF → Imagen → PNG o JPEG
3. Esto exporta cada página como imagen individual
4. Recortar cada imagen para aislar la fotografía de la planta

### Opción 2: pdfimages (gratuito, recomendado)

1. Descargar e instalar [Xpdf tools](https://www.xpdfreader.com/download.html) (incluye `pdfimages`)
2. Ejecutar en terminal:
   ```
   pdfimages -j pdf-original.pdf img/salida
   ```
3. Esto extrae todas las imágenes incrustadas como archivos JPG

### Opción 3: Python + pdfplumber (si ya está instalado)

```python
import pdfplumber
from PIL import Image

pdf = pdfplumber.open('original.pdf')
for i, page in enumerate(pdf.pages):
    for j, img in enumerate(page.images):
        # Extraer y guardar cada imagen
        pass
```

### Organización de las imágenes

Una vez extraídas, **nombrar cada imagen** siguiendo el patrón:

```
img/
  cupressaceae/
    cupressus-sempervirens-1.jpg
    cupressus-sempervirens-2.jpg
    juniperus-communis-1.jpg
    ...
  pinaceae/
    abies-alba-1.jpg
    ...
  asteraceae/
    anacyclus-clavatus-1.jpg
    ...
  ...
```

**Reglas de nombrado:**
- Nombre científico en minúsculas
- Espacios reemplazados por guiones
- Sin acentos ni caracteres especiales
- Si hay varias fotos de la misma especie: `-1`, `-2`, etc.
- Guardar en la subcarpeta correspondiente a su familia

Ejemplo: *Cistus ladanifer* → `img/cistaceae/cistus-ladanifer-1.jpg`

### Si una especie tiene 2 o 3 fotos

Todas deben registrarse en `data.js` dentro del array `fotos`:
```js
{
  ...
  fotos: [
    "img/cistaceae/cistus-ladanifer-1.jpg",
    "img/cistaceae/cistus-ladanifer-2.jpg"
  ]
}
```

## 📁 Estructura del proyecto

```
botanica/
├── index.html            # App principal (HTML+CSS+JS)
├── data.js               # Base de datos de especies
├── manifest.json         # Configuración PWA
├── service-worker.js     # Service Worker (offline)
├── README.md
└── img/
    ├── icon-192.png
    ├── icon-512.png
    ├── cupressaceae/
    ├── pinaceae/
    ├── acanthaceae/
    ├── anacardiaceae/
    ├── apiaceae/
    └── ... (resto de familias)
```

## 🎮 Modos de juego

| Modo | Descripción |
|------|-------------|
| **Estudio** | Tarjetas con foto → revelar información. Filtro por familia. Seguimiento de especies conocidas. |
| **Niveles** | 3 niveles: Familia → Nombre → Completo. 70% para desbloquear el siguiente. |
| **Examen** | 20 preguntas aleatorias. 3 vidas. Nota sobre 10. Repaso de fallos. |
| **Aleatorio** | Preguntas ilimitadas de todos los tipos. Racha y récord personal. |

## 🌿 Listado de familias incluidas

**Gimnospermas:** Cupressaceae (3), Pinaceae (6)

**Angiospermas:** Acanthaceae (1), Anacardiaceae (2), Apiaceae (3), Apocynaceae (2), Arecaceae (1), Aristolochiaceae (1), Asteraceae (9), Boraginaceae (3), Brassicaceae (6), Caprifoliaceae (2), Caryophyllaceae (5), Cistaceae (8), Crassulaceae (3), Cyperaceae (3), Dioscoreaceae (1), Ericaceae (3), Euphorbiaceae (2), Fabaceae (12), Fagaceae (6), Iridaceae (2), Lamiaceae (10), Liliaceae (4), Malvaceae (4), Moraceae (1), Myrtaceae (2), Oleaceae (3), Paeoniaceae (1), Papaveraceae (3), Plantaginaceae (4), Poaceae (15), Polygonaceae (3), Ranunculaceae (3), Rosaceae (3), Rubiaceae (2), Salicaceae (1), Santalaceae (1), Scrophulariaceae (3), Smilacaceae (1), Ulmaceae (2)

**Total: 150 especies en 41 familias**

## 🚀 Despliegue en GitHub Pages

La app funciona directamente desde GitHub Pages gracias a que todas las rutas son relativas. Sigue estos pasos:

### 1. Crear repositorio en GitHub

Crea un repositorio público en [github.com](https://github.com/new) llamado `botanica-visu` (o el nombre que prefieras).

### 2. Subir el código

```bash
cd C:\Users\robev\Desktop\botanica
git init
git add .
git commit -m "primera version botanica-visu"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/botanica-visu.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ir a **Settings** → **Pages** en el repositorio
2. En **Source**, seleccionar `main` y `/ (root)`
3. Guardar

### 4. Acceder a la app

Disponible en `https://TUUSUARIO.github.io/botanica-visu/`

La PWA se puede instalar desde Chrome/Safari tanto en escritorio como en móvil.

### 5. Actualizar tras cambios

```bash
git add .
git commit -m "descripcion del cambio"
git push
```

GitHub Pages actualiza automáticamente al pushear a main.

> **Nota técnica:** Todas las rutas en el código son relativas (`img/...`, `data.js`, etc.), por lo que la app funciona sin cambios tanto en local como bajo cualquier subdirectorio de GitHub Pages.

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Para PWA en local: servidor HTTP (no funciona con file://)
- Sin dependencias externas

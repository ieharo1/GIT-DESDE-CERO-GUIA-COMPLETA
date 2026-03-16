# 📦 GIT DESDE CERO - GUÍA COMPLETA

**Git desde Cero** es un sitio educativo completo diseñado para enseñar Git desde los fundamentos hasta conceptos avanzados, con explicaciones claras, ejemplos prácticos y código listo para usar.

> *"Git es la herramienta esencial para todo desarrollador moderno. Sin control de versiones, no hay desarrollo profesional."*

---

## 🎯 ¿Qué es este Proyecto?

Este proyecto proporciona un recurso educativo gratuito para aprender Git, incluyendo:

- **Documentación completa** de cada tema
- **Ejemplos de código** listos para ejecutar
- **Ejercicios prácticos** para reforzar el aprendizaje
- **Sitio web educativo** con navegación intuitiva

---

## 📚 Contenido del Curso

### Módulo 1: Fundamentos

1. **Introducción**
   - ¿Qué es control de versiones?
   - Historia de Git
   - Git vs otros VCS

2. **Instalación**
   - Git en Windows (Git Bash)
   - Git en Mac (Homebrew)
   - Git en Linux
   - Configuración inicial

3. **Conceptos básicos**
   - Working Directory
   - Staging Area
   - Repository
   - Commits

### Módulo 2: Intermedio

4. **Ejemplos prácticos**
   - Branching y merging
   - Resolución de conflictos
   - Trabajo con remotos
   - Colaboración en equipo

5. **Buenas prácticas**
   - Mensajes de commit
   - Convenciones de ramas
   - Git hooks
   - .gitignore

### Módulo 3: Avanzado

6. **Casos reales**
   - Git Flow workflow
   - GitHub Flow
   - CI/CD integration
   - Code review process

7. **Proyecto final**
   - Workflow colaborativo completo
   - Pull requests y merges

---

## 🗂️ Estructura del Proyecto

```
POO-JAVA/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── main.js         # JavaScript del sitio
└── README.md
```

---

## 🚀 Cómo Usar este Proyecto

### Opción 1: Navegar el Sitio Web

1. Abre `index.html` en tu navegador
2. Navega por las secciones del curso
3. Haz clic en los temas para ver la documentación detallada

### Opción 2: Ejecutar los Ejemplos

1. Instala Git desde git-scm.com
2. Abre terminal o Git Bash
3. Ejecuta los comandos de ejemplo

### Requisitos

- **Git 2.x** o superior
- Terminal o línea de comandos
- Cuenta en GitHub (opcional)

---

## 📝 Ejemplos Rápidos

### Inicializar Repositorio

```bash
# Inicializar nuevo repositorio
git init

# Clonar repositorio existente
git clone https://github.com/usuario/repo.git

# Ver estado del repositorio
git status
```

### Commits Básicos

```bash
# Agregar archivos al staging
git add archivo.txt
git add .

# Crear commit
git commit -m "Mensaje descriptivo"

# Ver historial
git log --oneline
```

### Branches y Merge

```bash
# Crear rama
git branch feature-nueva

# Cambiar de rama
git checkout feature-nueva

# Crear y cambiar
git checkout -b feature-nueva

# Mergear
git merge feature-nueva
```

### Trabajo Remoto

```bash
# Agregar remoto
git remote add origin url

# Push a remoto
git push origin main

# Pull de remoto
git pull origin main
```

### Deshacer Cambios

```bash
# Deshacer cambios no staged
git checkout -- archivo.txt

# Remover del staging
git reset HEAD archivo.txt

# Amend último commit
git commit --amend -m "Nuevo mensaje"
```

---

## 🎓 Metodología de Aprendizaje

### 1. Leer la Teoría
Cada tema comienza con una explicación clara del concepto.

### 2. Ver Ejemplos
Los ejemplos de código muestran la aplicación práctica.

### 3. Practicar
Los ejercicios te permiten aplicar lo aprendido.

### 4. Experimentar
Modifica los ejemplos para entender cómo funcionan.

---

## 🔧 Comandos Esenciales

### Configuración

```bash
# Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Ver configuración
git config --list
```

### Branching

```bash
# Listar ramas
git branch

# Crear rama
git branch nombre-rama

# Cambiar rama
git checkout nombre-rama

# Eliminar rama
git branch -d nombre-rama
```

### Remote

```bash
# Ver remotos
git remote -v

# Agregar remoto
git remote add origin url

# Fetch (sin merge)
git fetch origin

# Pull (fetch + merge)
git pull origin main
```

---

## 📖 Recursos Adicionales

### Documentación Oficial

- [Git Documentation](https://git-scm.com/doc)
- [Git Book](https://git-scm.com/book/es/v2)
- [GitHub Docs](https://docs.github.com/es)

### Herramientas Recomendadas

- **GitKraken** - GUI para Git
- **SourceTree** - Cliente gratuito
- **GitHub Desktop** - Cliente oficial

### Comunidades

- [Stack Overflow - Git](https://stackoverflow.com/questions/tagged/git)
- [Reddit r/git](https://www.reddit.com/r/git/)
- [GitHub Community](https://github.community/)

---

## 💡 Consejos para Principiantes

1. **Commit frecuente**: Haz commits pequeños y descriptivos.
2. **Mensaje claro**: Explica el "qué" y "por qué" en los commits.
3. **Ramas cortas**: Mantén las ramas de feature efímeras.
4. **Pull antes de push**: Sincroniza antes de subir cambios.
5. **Entiende el staging**: Es clave para commits limpios.

---

## ⚠️ Mejores Prácticas

### Commits

- Mensajes en presente imperativo
- Una sola responsabilidad por commit
- Referencia issues cuando aplique

### Branches

- Nombres descriptivos
- Feature branches por funcionalidad
- Elimina ramas mergeadas

### Seguridad

- Nunca commits credenciales
- Usa .gitignore apropiadamente
- Considera git-secrets para sensitive data

---

## 🧪 Ejercicios Prácticos

### Nivel Básico

1. Inicializa un repositorio local
2. Haz commits con cambios
3. Crea y cambia entre ramas

### Nivel Intermedio

1. Clona un repositorio remoto
2. Resuelve un conflicto de merge
3. Crea un pull request

### Nivel Avanzado

1. Implementa Git Flow
2. Configura hooks personalizados
3. Haz rebase interactivo

---

## 👨‍💻 Desarrollado por Isaac Esteban Haro Torres

**Ingeniero en Sistemas · Full Stack · Automatización · Data**

- 📧 Email: zackharo1@gmail.com
- 💻 GitHub: https://github.com/ieharo1

---

© 2026 Isaac Esteban Haro Torres - Todos los derechos reservados.

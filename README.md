# Landing de T4KASH

Página pública de [T4KASH](https://github.com/Renesls/T4k4sh), el marketplace de trabajo
para estudiantes universitarios verificados de Nicaragua.

**En vivo:** https://uxvcharlie.github.io/t4kash-landing/

## Cómo está hecha

`index.html` es una sola pieza: HTML, CSS y JavaScript en el mismo archivo, con las
capturas de la aplicación incrustadas como WebP en base64. No hay build, ni dependencias,
ni paso de compilación. Lo único externo son las tipografías de Google Fonts.

Para verla en local basta abrir el archivo, o servirlo:

```bash
python3 -m http.server 8099
```

## De dónde sale el contenido

Cada dato de la página está tomado del código del repositorio principal, no de supuestos:
la comisión total del 15 % repartida en 10 % al cliente y 5 % retenido al estudiante sale
de `PaymentService`, los estados de custodia de la máquina de estados de pagos, y las
categorías y universidades de los catálogos del esquema de PostgreSQL.

La tabla completa de procedencia está en `landing/README.md` del repositorio principal.

## Actualizarla

El archivo canónico vive en `landing/index.html` del repositorio principal. Este repo es
solo el destino de publicación: se copia el archivo, se hace commit y GitHub Pages lo
sirve.

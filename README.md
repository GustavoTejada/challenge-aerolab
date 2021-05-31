# Coding Challenge Aerolab

Este sistema se basa en el Coding Challenge de Aerolab, donde se requiere de un sistema de puntos que permita canjear puntos por productos.

Se cuenta con 2 vistas principales, una que permite realizar la acción de canjeo y otra donde se puede agregar puntos (solo para testear la primera vista), ver el historial de productos canjeados.
Las 2 vistas se encuentran contenidas con un Layout, que esta compuesta por un Header y un footer, entre otros elementos.

En el Header vamos a encontrar, de izquierda a derecha:
- El logo proporcionado en el ui kit de Aerolab, linkeado a la página principal.
- Un pequeño botón, al lado del logo, para activar y desactivar el "Modo oscuro" en toda la plataforma.
- El nombre del usuario (obtenido por api), con un link a la vista de "configuración", donde se van a poder agregar puntos y ver el historial de productos.
- Y la cantidad de puntos disponibles para canjear (obtenido por api).

En la vista principal, se cuenta con un banner de la sección donde se encontraría el usuario, junto a todos los productos disponibles para canjear (obtenido por api).
En esta vista se pueden destacar varios elementos:
- Se muestra la cantidad de productos encontrados.
- Se pueden ordenar los productos por "Menor precio" y "Mayor precio".
- Si los puntos son suficientes para canjear el producto, se va a permitir. En caso contrarios, se le mostrará al usuario un cartel donde se le comunica que tiene puntos insuficeintes y aparte se le informa la cantidad de puntos faltantes para realizar la acción.

Este proyecto se encuentra disponible para ver y testear en Vercel en el siguiente link: 
https://challenge-aerolab-j0l4r1hno-gustavotejada.vercel.app/
### Desarrollado por Gustavo Tejada

##

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

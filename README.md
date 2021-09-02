# Coding Challenge Aerolab

Este sistema se basa en el Coding Challenge de Aerolab, donde se requiere de un sistema de recompensas que permite canjear productos por puntos acumulados.

Se cuenta con 2 vistas principales, una vista donde se encuentran todos los productos y desde esta se pueden canjear, y la segunda donde se puede agregar puntos (solo para testear la primera vista), ver el historial de productos canjeados.
Las 2 vistas se encuentran contenidas con un Layout, que esta compuesto por un Header y un Footer, entre otros elementos.

En el Header vamos a encontrar, de izquierda a derecha:
- El logo proporcionado en el ui kit de Aerolab, linkeado a la página principal.
- Un pequeño botón, al costado del logo, para activar y desactivar el "Modo oscuro" en toda la plataforma.
- El nombre del usuario (obtenido por API), con un link a la vista de "configuración", donde se van a poder agregar puntos y ver el historial de productos.
- Y la cantidad de puntos disponibles para canjear (obtenido por API).

En la vista principal, se cuenta con un banner de la sección donde se encontraría el usuario, junto a todos los productos disponibles para canjear (obtenidos por API).
En esta vista se pueden destacar varios elementos:
- Se muestra la cantidad de productos encontrados.
- Se pueden ordenar los productos por "Menor precio" y "Mayor precio".
- Si los puntos son suficientes para canjear el producto, se va a permitir. En caso contrarios, se le mostrará al usuario un cartel donde se le comunica que tiene puntos insuficeintes y aparte se le informa la cantidad de puntos faltantes para realizar la acción.

![Captura web_31-5-2021_94339_localhost](https://user-images.githubusercontent.com/45311587/120195089-bfdc5100-c1f4-11eb-8fbc-eeaa3ece4143.jpeg)

Después contamos con una segunda vista que se accede haciendo click sobre el nombre del usuario, y en ella podemos encontrar 2 secciones importantes:
La primera sección nos va a servir para sumar puntos, mas que nada para testear la vista principal.
Y en la segunda sección vamos a poder ver el historial de productos canjeados. Dicho listado se puede ordenar tanto de manera ascendente como descendente por nombre del producto, puntos y fecha.

![Captura de pantalla 2021-05-31 094525](https://user-images.githubusercontent.com/45311587/120195282-f5813a00-c1f4-11eb-803d-6621c65563e5.jpg)

Este proyecto se encuentra disponible para ver y testear en Vercel en el siguiente link: 
https://challenge-aerolab-gustavotejada.vercel.app/

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

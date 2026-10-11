---
title: "Caliber Guard"
seoTitle: "Caliber Guard: desarrollar una app para colecciones de relojes | APMY"
description: "De gestionar mis relojes en Excel a publicar una app en Android. Decisiones de producto, pruebas con coleccionistas y correcciones tras el lanzamiento."
path: "/caliber-guard/"
kind: "proyecto"
chronologicalDate: "2026-01-01"
revised: "2026-10-10"
socialImage: "/images/caliber-guard/hdr-35-09.jpeg"
mediaCredits: ["Capturas de Caliber Guard compartidas por Antonio Madrazo."]
draft: false
---

# Caliber Guard

La hoja de cálculo dejó de bastarme cuando quise entender cómo usaba mi colección.

Llevaba un par de años aficionándome a los relojes. Los registraba en Excel, pero quería reunir más información: cuánto usaba cada pieza, cuánto había gastado en ella, cuándo necesitaría mantenimiento y cómo evolucionaba su precisión. La colección crecía y las preguntas iban más allá del inventario.

Caliber Guard nació de esa necesidad. Dirigí el desarrollo de una aplicación para gestionar mi colección y después la puse en manos de otros coleccionistas. En marzo de 2026 la publiqué en Google Play. A partir de ahí, las preguntas y los errores que aparecieron al usarla fueron cambiando el producto.

## Reunir los datos alrededor de cada reloj

Quería tener en una misma herramienta la ficha del reloj, su uso, las compras y ventas, los mantenimientos y las mediciones de precisión. Había encontrado aplicaciones que resolvían partes de eso y gestores generalistas de colecciones. Me interesaba trabajar con las características concretas de los relojes.

La primera versión reunía inventario y lista de deseos, un calendario para registrar las puestas, estadísticas y una bitácora de mantenimiento. La ficha conservaba marca, modelo, movimiento, fotografía, fechas y precios. Registrar las puestas permitía relacionar lo que había comprado con lo que realmente llevaba en la muñeca.

![Inventario de Caliber Guard con fotografías de relojes y filtros de estado.](/images/caliber-guard/hdr-1-01.jpeg)

*Inventario mostrado al presentar la app en marzo de 2026.*

También incorporé un registro de precisión, con mediciones y gráficos de desviación. Esa información, igual que los servicios y las reparaciones, pertenecía a cada pieza y podía consultarse junto a sus otros datos.

![Pantalla de un reloj con registros de precisión y un gráfico de desviaciones.](/images/caliber-guard/hdr-1-03.jpeg)

*El registro de precisión asociado a una pieza de la colección.*

En las métricas económicas añadí el coste por puesta y el balance de compras y ventas. Para mi propio uso, el punto de partida estaba más cerca de acumular relojes que de venderlos. Cuando otras personas empezaron a probar la app, aparecieron formas de gestionar la colección que yo no había contemplado.

## Una colección local y una app con servicios externos

Decidí guardar las fichas y las fotografías en el dispositivo. Me importaba poder gestionar esa información sin depender de una cuenta de colección en un servidor. La exportación y las copias de seguridad daban una forma de sacar los datos del móvil y conservarlos fuera de la aplicación.

Esa decisión se refería a la colección. La app también incorporaba servicios externos para anuncios, suscripciones y analítica: AdMob, RevenueCat y Firebase Analytics. El almacenamiento local convivía con esas integraciones.

Planteé una versión gratuita con publicidad y funciones básicas, y una suscripción para ampliar las posibilidades de análisis y gestión. En esa fase lancé primero Android y español. En la web dejé una lista de espera para conocer el interés por una versión de iOS.

## Desarrollar con IA y llegar a la publicación

Mi papel era definir el producto y probar su usabilidad: decidir qué necesitaba la aplicación y comprobar cómo se utilizaba. La IA se ocupaba de programar, documentar y probar el código. Ese reparto me permitía trabajar sobre el producto sin asumir personalmente toda su implementación.

Utilizamos Flutter; la propuesta de usar ese entorno vino de la IA. El desarrollo incluía acceso a cámara y galería, tratamiento de imágenes, almacenamiento, exportación y las integraciones de la versión gratuita y la suscripción.

También preparé una web con Astro y GitHub Pages para presentar el proyecto y recoger interesados. La aplicación y su presentación pública eran dos partes del mismo trabajo: explicar para qué servía y permitir que alguien pudiera probarla.

En febrero de 2026 todavía estaba buscando participantes para la prueba cerrada. En aquel proceso Google Play me pedía doce testers durante al menos catorce días. Recurrí a Forocoches, donde había compartido otros proyectos, para reunirlos.

En marzo ya había alcanzado el número necesario y completé la prueba. Publicar la app cambió el siguiente problema: tenía que darla a conocer, conseguir que otras personas la probaran y entender qué les servía y qué les dificultaba usarla.

La presenté también en Hablemos de Relojes. Ese hilo terminó funcionando como un diario de actualización, con capturas, peticiones y explicaciones de los cambios.

## Añadir información sin complicar el primer registro

Las primeras sugerencias pedían datos que no estaban en mi ficha: vendedor o comprador, información del envío y otras características de la pieza. Anotarlas era fácil; incorporarlas obligaba a decidir dónde debían aparecer.

Una petición sobre seguimiento de envíos me llevó a pensar en una etapa entre desear un reloj y tenerlo en el inventario: comprarlo, esperar a recibirlo y después incorporarlo a la colección. En el hilo lo planteé como una posibilidad para la lista de deseos.

Para los nuevos atributos separé el alta básica de la ficha ampliada. Quería que añadir un reloj siguiera siendo rápido y que los detalles técnicos y de adquisición pudieran completarse después. En la actualización de abril mostré esa ficha con sus distintos grupos de campos.

![Tres vistas de la ficha de un reloj con datos básicos, especificaciones técnicas y detalles de adquisición.](/images/caliber-guard/hdr-35-09.jpeg)

*Ficha ampliada presentada en abril: el alta básica podía completarse con más información.*

En mayo volví a organizarla. Reuní datos, estadísticas, cronometría y mantenimiento en una ventana con pestañas. La información que antes estaba repartida quedaba accesible desde el propio reloj.

![Ficha de reloj con pestañas de datos, estadísticas, cronometría y mantenimiento.](/images/caliber-guard/hdr-56-15.jpeg)

*La reorganización de mayo reunió las consultas alrededor de cada reloj.*

Las consultas sobre relojes modificados también sirvieron para contrastar la flexibilidad de la ficha. Pedí ejemplos y una plantilla de los datos que necesitarían. En esa conversación, quien había planteado la duda terminó encontrando una forma de registrar sus piezas con los campos existentes. La petición no exigió una función nueva para quedar resuelta.

## Importar una colección que ya existía

Yo había empezado con una hoja de cálculo. Otras personas también llegaban con datos guardados fuera de la app. Una de las primeras peticiones fue poder importarlos, para evitar volver a escribir la colección reloj por reloj.

Al principio la aplicación exportaba CSV para trabajar con los datos fuera, y utilizaba JSON para la copia y restauración del inventario. La entrada de datos desde hojas de cálculo fue una ampliación posterior. En abril anuncié la importación CSV y pedí pruebas: yo había comprobado pocos casos.

![Pantalla de importación CSV con los campos esperados y un botón para seleccionar archivo.](/images/caliber-guard/hdr-35-12.jpeg)

*La importación mostraba el formato esperado para incorporar datos de una hoja de cálculo.*

Un usuario intentó importar cerca de doscientos relojes y encontró problemas en precios, estado de venta y otros campos. Me pidió también una forma de sustituir lo importado sin borrar cada registro a mano.

Para investigar le pedí una copia del archivo con una o dos filas y datos inventados, conservando el formato que le daba problemas. Necesitaba distinguir un fallo de lectura de una diferencia en la estructura del archivo. También planteé ofrecer una plantilla compatible y facilitar el reinicio del inventario.

La función ya existía, pero sus pruebas iniciales no representaban todas las hojas que otras personas llevaban tiempo utilizando. Esa diferencia apareció cuando la app salió de mi propia colección.

## Hacer visibles las acciones y aprovechar las imágenes

El calendario de uso tenía un fallo concreto. Después de elegir los relojes de un día, la vista no se actualizaba hasta cambiar de fecha o de menú. Varias personas lo comunicaron y yo también lo había observado.

En la revisión de mayo añadí una confirmación visible y corregí ese comportamiento. Registrar una puesta tenía que terminar con una acción clara y con el cambio reflejado en el calendario.

![Selección de relojes para una puesta del día, con un botón Listo al pie del diálogo.](/images/caliber-guard/hdr-56-16.jpeg)

*La confirmación incorporada en mayo al registrar las puestas.*

Las fotografías generaron otra petición: ver la imagen completa, en vez de quedarse con la miniatura del inventario. Añadí el gesto de mantener pulsado un reloj para ampliarla y una herramienta de recorte y encuadre al preparar la foto.

![Herramienta de encuadre de una fotografía de reloj con cuadrícula y ajuste de escala.](/images/caliber-guard/hdr-56-13.jpeg)

*Recortar la imagen permitía elegir qué parte de la fotografía quedaría en la ficha.*

También incorporé contadores en los filtros de inventario y un ajuste para difuminar los importes económicos en pantalla. Este último servía para consultar o mostrar la colección sin dejar sus precios a la vista.

![Inventario de relojes con sus precios difuminados en pantalla.](/images/caliber-guard/hdr-56-17.jpeg)

*El filtro permitía difuminar los precios al mostrar la colección.*

Estos cambios respondían a gestos de uso concretos: comprobar que una puesta se había guardado, mirar una fotografía o enseñar la app a otra persona. Cada petición añadía contexto a funciones que ya estaban construidas.

## Una copia de seguridad que no guardaba todo

En mayo corregí un problema de borrado: el reloj desaparecía de la vista, pero el cambio no quedaba registrado en la base de datos. Al volver a entrar podía aparecer de nuevo. La interfaz había mostrado un resultado que no coincidía con lo guardado.

El 11 de mayo detecté otro fallo, esta vez en las copias de seguridad. Entre la beta y la publicación había migrado la base de datos. Después de ese cambio, el archivo de backup guardaba las fotografías, pero no los datos de los relojes.

La información seguía dentro de la app. El problema aparecía si alguien confiaba en la copia para desinstalarla o sobrescribir el inventario. Publiqué un aviso para que no lo hicieran mientras lo corregía y expliqué qué había encontrado.

Ese mismo día anuncié la versión 1.2.5 con la corrección. Pedí a quienes pudieran probarla que generaran una copia y comprobaran su contenido: además de las imágenes, tenía que incluir el archivo `data.json`. Compartí una captura para mostrar qué debía contener.

![Contenido de un archivo ZIP de backup con fotografías y un archivo data.json.](/images/caliber-guard/hdr-59-18.png)

*La captura compartida el 11 de mayo para comprobar que una copia contenía datos y fotografías.*

La copia había producido un archivo sin conservar toda la información que debía. Para revisar el resultado necesitaba mirar dentro de él, además de comprobar que la exportación terminaba.

## Revisar lo que tarda en abrir y lo que sale de la app

Después de la reorganización de mayo aparecieron problemas de rendimiento en el arranque. En la versión 1.2.6 trabajé sobre la primera apertura y sobre un caso en el que usar DNS privado para bloquear publicidad podía bloquear también la carga de la aplicación.

Era un encuentro entre dos partes del producto: el acceso a una colección guardada en el móvil y la integración de publicidad. Añadí una corrección para que ese comportamiento de red no impidiera abrir la app.

La misma actualización incorporó gráficos de entradas y salidas de relojes, por mes y por año, tanto en cantidad como en importes. También añadí un informe PDF. El apartado económico fue creciendo con preguntas que iban más allá de mi forma inicial de usar la colección.

![Gráficos de entradas y salidas de relojes, por cantidad y por valor económico.](/images/caliber-guard/hdr-60-19.jpeg)

*Gráficos incorporados en la actualización anunciada el 24 de mayo.*

![Informe de compras y ventas con resumen de unidades e importes y una tabla de relojes comprados.](/images/caliber-guard/hdr-60-21.jpeg)

*Salida de informe PDF mostrada en mayo; los importes corresponden al ejemplo de la captura.*

Antes había incorporado informes de uso por periodos. Permitían conservar una salida del mes, trimestre o año que se estaba consultando, en lugar de depender solo de la vista de estadísticas dentro de la app.

## Publicar fue el comienzo de otra parte del trabajo

Caliber Guard pasó de resolver mis preguntas a recibir las de otros coleccionistas. Algunos necesitaban importar datos, otros registrar piezas modificadas o consultar mejor las fotos. Los fallos de calendario, borrado y backup también llegaron a formar parte del desarrollo público.

En esa primera etapa fui actualizando la aplicación en el tiempo que podía dedicarle fuera del trabajo. Anunciaba cambios, pedía ejemplos cuando no entendía una necesidad y explicaba las correcciones en el mismo hilo donde se había planteado el problema.

El resultado fue una aplicación publicada en Android, con una base de gestión local y sucesivas revisiones de sus fichas, imágenes, informes y copias de seguridad. La conversación con usuarios empezó a dar respaldo —o límites— a funciones que inicialmente había decidido desde mi propio uso.

La evolución relatada aquí llega a las actualizaciones de mayo de 2026. La aplicación y su ficha pública siguen teniendo su propio recorrido. Pueden consultarse en la [web de Caliber Guard](https://caliberguard.com/) y en [Google Play](https://play.google.com/store/apps/details?id=com.apmysoft.caliber_guard).

*2026: desarrollo, prueba cerrada, publicación en marzo y primeras revisiones con usuarios. Definición del producto y pruebas de usabilidad propias; programación, documentación y pruebas de código con IA. Flutter; cámara y galería, gestión de datos y exportaciones. Presentación web con Astro y GitHub Pages.*

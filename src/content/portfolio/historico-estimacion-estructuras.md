---
title: "Utilizar el histórico antes de modelar"
seoTitle: "Utilizar el histórico antes de modelar | APMY"
description: "Una base de obras ejecutadas, formularios y procesamiento en Excel para consultar coeficientes durante el estudio preliminar de estructuras de madera."
path: "/historico-estimacion-estructuras/"
kind: "proyecto"
chronologicalDate: "2022-09-01"
revised: "2026-10-11"
socialImage: "/images/historico-costes/historico-costes-registros.jpeg"
mediaCredits: ["Herramienta de trabajo en Sallende Habitat. Capturas facilitadas por Antonio Madrazo con valores ocultos."]
draft: false
---

# Utilizar el histórico antes de modelar

Los datos de obras ejecutadas como punto de partida para una estimación preliminar.

En la oficina técnica recibimos solicitudes de presupuesto que no siempre terminan en obra. Preparar un modelo detallado para cada una consume tiempo antes de saber cuáles van a continuar. Quería aprovechar la información de trabajos anteriores para estudiar esa primera fase.

Sitúo el inicio de esta base alrededor de septiembre de 2022. Recurrí al histórico de Sallende Habitat, que reunía unos quince años de proyectos ejecutados. El objetivo era relacionar las características de una estructura con sus consumos y costes antes de dedicar horas al modelado en Cadwork.

## Convertir los trabajos anteriores en registros comparables

Diseñé formularios para estandarizar la entrada de datos de cada obra. La base recogía volumen de madera, superficie de cubierta, precio de la madera y tipo de tratamiento, junto con información que ayudaba a distinguir unas estructuras de otras.

En la tabla aparecen, por ejemplo, porches y trabajos que combinaban cubierta y forjado. También se registraba el número de aguas. Esos campos permitían conservar contexto junto a las cantidades y los importes.

![Tabla de obras con columnas de volumen de estructura, superficie de cubierta, precio de madera, tratamiento e información adicional; valores económicos y cantidades difuminados.](/images/historico-costes/historico-costes-registros.jpeg)

*Registros de la base histórica. Las cantidades y los importes están ocultos en la captura.*

El histórico pertenecía a la empresa y se había acumulado con el trabajo de sus equipos. Mi intervención consistió en estructurar esa información y preparar su procesamiento para utilizarla en los estudios.

## Obtener relaciones para el primer estudio

Automaticé el procesamiento mediante módulos en VBA, el lenguaje que utilizaba para trabajar sobre Excel. La herramienta calculaba relaciones entre volumen de madera y superficie, costes por unidad y consumos de tratamiento.

La hoja de resultados reunía medias y medianas, con agrupaciones para forjados, cubiertas de distinto número de aguas y porches. También mostraba columnas por año. Esa organización permitía consultar referencias del histórico con distintos niveles de detalle.

![Hoja de coeficientes con medias y medianas por tipo de estructura, columnas anuales y botones para actualizar coeficientes e introducir datos.](/images/historico-costes/historico-costes-coeficientes.jpeg)

*Hoja de consulta y actualización de coeficientes. Los valores están ocultos; algunas categorías aparecen sin datos.*

El desarrollo del código contó también con apoyo de Google AI Studio. Ese apoyo forma parte de la evolución de la herramienta; el inicio de la base en 2022 no fecha su incorporación.

## Reservar el detalle para la fase que lo necesita

Los coeficientes estaban orientados a la estimación inicial. El modelado seguía siendo necesario para entender cada obra al detalle, resolver su geometría y preparar la fabricación.

La hoja mostraba también los límites de la información disponible: había categorías y años sin datos. Una relación obtenida del histórico depende de los registros que la alimentan. Su existencia no demuestra por sí sola la precisión de una estimación para una obra nueva.

El propósito era disponer de una referencia previa y concentrar el trabajo de definición donde resultaba necesario. El caso no establece un porcentaje de ahorro ni una desviación medida entre estimación y resultado.

## Una base que sigue utilizándose

La base histórica sigue en uso. Fue el primer peldaño de una línea de herramientas propias vinculadas a costes, datos y tareas de oficina técnica.

Quedó planteado automatizar la captura desde la propia oficina para incorporar los datos de nuevos proyectos. Esa posibilidad continúa separada de lo que ya estaba construido: una base estructurada, formularios de entrada y procesamiento para consultar coeficientes.

*Inicio situado alrededor de septiembre de 2022. Herramienta todavía en uso en Sallende Habitat. Estructuración de datos, formularios y procesamiento propios. Excel y VBA; apoyo de Google AI Studio durante el desarrollo.*

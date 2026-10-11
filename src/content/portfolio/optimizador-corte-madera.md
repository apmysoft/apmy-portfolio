---
title: "Una prueba de corte fuera de Cadwork"
seoTitle: "Una prueba de corte fuera de Cadwork | APMY"
description: "Prueba de concepto en Python para distribuir cortes de madera laminada y explorar una alternativa a una función integrada en Cadwork."
path: "/optimizador-corte-madera/"
kind: "laboratorio"
chronologicalDate: "2025-05-01"
revised: "2026-10-11"
socialImage: "/images/optimizador-corte/optimizador-corte-interfaz.jpeg"
mediaCredits: ["Capturas del optimizador facilitadas por Antonio Madrazo."]
draft: false
---

# Una prueba de corte fuera de Cadwork

Comprobar que podía resolver una tarea de aprovechamiento con una herramienta propia.

En mayo de 2025 preparé un optimizador de corte de madera laminada en Python. Fue una prueba de concepto: Cadwork ya incorpora esa función, pero quería explorar opciones fuera del software propietario para realizar estudios preliminares.

El problema consistía en distribuir piezas de distintas longitudes entre barras disponibles. Es una optimización de corte en una dimensión, también llamada nesting 1D: en este caso, lo que se organiza es la longitud.

## Acotar la tarea

Me interesaba poder estudiar combinaciones sin abrir un modelo completo ni ocupar una licencia principal en una consulta secundaria. La herramienta debía trabajar con secciones, cantidades y longitudes, y devolver una distribución de cortes.

Antes había pedido ayuda a Alberto Irusta para plantear el desarrollo. Después preparé una versión funcional en una tarde, con apoyo de Gemini y ChatGPT para desarrollar el código en Python. Mi formación en desarrollo de aplicaciones y el conocimiento de la tarea me daban la base para plantear el problema.

La interfaz permitía añadir piezas a una lista, calcular una distribución y exportar el informe a un archivo de texto.

![Interfaz del optimizador con una lista de piezas por sección, cantidad y longitud, y botones para calcular y exportar el informe.](/images/optimizador-corte/optimizador-corte-interfaz.jpeg)

*Lista de piezas del ejemplo y resultado de corte en la aplicación.*

## De la lista al informe

En la captura introduje quince piezas de sección 60 × 140 mm y 1.500 mm de longitud, cuatro de 160 × 160 mm y 2.500 mm, y dos de 160 × 200 mm y 9.000 mm. La versión mostrada contemplaba barras de 12.000 y 13.500 mm y un ancho de corte de 4 mm.

El informe agrupaba el resultado por sección. Indicaba las barras utilizadas, los cortes asignados a cada una y la longitud restante. También calculaba volúmenes y un porcentaje de aprovechamiento.

Para las cuatro piezas de 2.500 mm, por ejemplo, proponía una barra de 12.000 mm y mostraba un resto de 1.988 mm. Esa salida permitía revisar una combinación concreta y consultar cómo había distribuido el material.

![Informe de texto con barras utilizadas, cortes, restos y porcentajes de aprovechamiento separados por sección.](/images/optimizador-corte/optimizador-corte-informe.jpeg)

*Informe del ejemplo. Los porcentajes son resultados calculados por el programa; no representan un ahorro medido frente a otro método.*

## El resultado de la prueba

La herramienta llegó a funcionar, pero no pasó a ser parte del uso habitual en el trabajo. Su propósito era comprobar que podía desarrollar una alternativa para esa tarea concreta.

El ejercicio me permitió llevar un problema conocido de oficina técnica a una aplicación independiente. No hice una comparación documentada con Cadwork que demostrase mejor aprovechamiento o menor tiempo de trabajo. La distribución mostrada tampoco acredita por sí sola que sea la mejor solución posible.

*Mayo de 2025. Prueba de concepto en Python, con apoyo de Gemini y ChatGPT. Sin uso operativo habitual.*

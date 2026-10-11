---
title: "Llevar la lógica de costes a una aplicación"
seoTitle: "Llevar la lógica de costes a una aplicación | APMY"
description: "Migración de lógica de presupuestación desde hojas de cálculo y VBA a una aplicación en Python, utilizada antes de pasar a segundo plano con el cambio de ERP."
path: "/aplicacion-costes-estructuras/"
kind: "proyecto"
chronologicalDate: "2025-08-01"
revised: "2026-10-11"
socialImage: "/images/aplicacion-costes-python/aplicacion-costes-python-interfaz.jpeg"
mediaCredits: ["Captura de la herramienta de costes facilitada por Antonio Madrazo."]
draft: false
---

# Llevar la lógica de costes a una aplicación

Cambiar la forma de utilizar los cálculos que ya formaban parte del trabajo.

Parte del cálculo y la presupuestación de estructuras estaba concentrada en hojas de Excel con VBA. Funcionaban, pero eran difíciles de mantener y poco accesibles para el resto del equipo. Quería trasladar esa lógica a una aplicación independiente.

Sitúo este trabajo en agosto de 2025. Preparé una aplicación modular en Python, con apoyo de IA para desarrollar el código. El punto de partida eran los datos, los parámetros y las fórmulas que ya utilizábamos para estudiar costes.

## Organizar la entrada por tareas

La interfaz agrupaba la información en datos del proyecto, partidas generales, mecanizados, costes variables y mano de obra de montaje. Esa organización permitía recorrer los componentes del estudio desde una misma ventana.

Entre las partidas generales estaban el volumen de madera laminada, la distancia de transporte, el número de portes, las horas de grúa y el tratamiento. Los mecanizados se organizaban por sección y tipo de operación, con filas para introducir cantidades.

La aplicación incorporaba validación de parámetros y un resumen que se actualizaba con los datos. Mostraba venta, margen y un desglose de estructura y mano de obra junto a los campos de entrada.

![Interfaz de la calculadora de costes con datos de proyecto, partidas, tabla de mecanizados y resumen lateral de venta, margen y costes.](/images/aplicacion-costes-python/aplicacion-costes-python-interfaz.jpeg)

*Interfaz de la aplicación con los importes a cero. La captura muestra la organización del trabajo, sin un presupuesto calculado.*

## Separar la herramienta de la hoja

La lógica que estaba implementada en las hojas pasaba a una aplicación con su propia interfaz. Mi conocimiento de la presupuestación y mi formación en desarrollo de aplicaciones servían para plantear el trabajo; la IA me apoyaba en el desarrollo del código.

Esta aplicación se relacionaba con la línea de herramientas internas que estaba explorando para costes, datos y aprovechamiento. Cada una tenía un alcance y un recorrido distintos: la base histórica seguía en uso y el optimizador de corte había sido una prueba de concepto.

## Una aplicación que llegó a utilizarse

La calculadora se utilizó durante una temporada. Después quedó en segundo plano por la migración del ERP de la empresa. El cambio en los sistemas de trabajo modificó el lugar que ocupaba esta herramienta.

El resultado fue trasladar la lógica de las hojas a una aplicación que llegó a usarse. Su recorrido terminó condicionado por la evolución del entorno donde se había desarrollado.

*Agosto de 2025. Aplicación utilizada durante una temporada en el trabajo y después en segundo plano por la migración del ERP. Python, con apoyo de IA; lógica procedente de hojas de cálculo y VBA.*

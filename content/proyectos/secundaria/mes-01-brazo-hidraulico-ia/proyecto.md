---
titulo: "Brazo hidráulico que clasifica con IA"
mes: 1
semanas: 4
resumen: "Construimos un brazo robótico de cartón movido con agua y jeringas, y entrenamos una inteligencia artificial para que reconozca cartón, plástico y metal."
materiales:
  - "Cartón grueso reciclado (cajas)"
  - "Jeringas de 10 ml SIN aguja (4)"
  - "Manguera delgada transparente de 1 metro (acuario o suero)"
  - "Palitos de madera (10)"
  - "Ligas y cinta adhesiva"
  - "Pegamento caliente (solo con supervisión del maestro)"
  - "Agua con un poco de colorante"
  - "3 vasos o botes reciclados"
  - "Objetos para clasificar: cartón, plástico y latas limpias aplastadas (5 de cada uno)"
  - "Computadora con cámara y Chrome"
videos: []
# Para agregar un video (YouTube o archivo propio), quita los corchetes de arriba y escribe:
# videos:
#   - titulo: "Cómo conectar las jeringas sin burbujas"
#     url: "https://youtu.be/XXXXXXXXXXX"
---

## 🎯 ¿Qué vamos a lograr?

Un brazo hidráulico hecho de cartón que se mueve con agua, y una IA que reconoce materiales reciclables con la cámara. El robot completo: **sentir** (cámara), **pensar** (IA) y **actuar** (brazo).

> ⚠️ **Seguridad:** las jeringas van **sin aguja**. El pegamento caliente solo lo usa el maestro o un adulto.

## 📅 Clase 1 — Hidráulica y diseño

**Meta de hoy:** entender cómo se mueve algo con líquido y diseñar tu brazo.

1. **Paso 1.** Prueba con dos jeringas unidas por una manguera, llenas de agua. Empuja una: la otra se mueve. El agua no se comprime, por eso transmite la fuerza.
2. **Paso 2.** Anota qué pasa si empujas despacio y si empujas rápido.
3. **Paso 3.** Dibuja tu brazo: base, brazo y "mano" o empujador. Marca dónde irá cada jeringa.
4. **Paso 4.** Corta con tijeras las piezas de cartón: una base cuadrada y dos tiras para el brazo.
5. **Paso 5.** Junta los materiales y marca la lista de arriba.

> 💡 **Pista:** si hay burbujas de aire dentro de la manguera, el movimiento se siente "esponjoso". Tendrás que sacarlas en la clase 2.

✅ **Para terminar la clase, revisa:** tienes tu dibujo con las jeringas ubicadas y las piezas cortadas.

## 📅 Clase 2 — Construimos el brazo

**Meta de hoy:** un brazo que sube y baja empujando una jeringa.

1. **Paso 1.** Une las dos tiras de cartón con un palito como articulación para que giren.
2. **Paso 2.** Pega las tiras a la base, de modo que el brazo pueda levantarse.
3. **Paso 3.** Llena dos jeringas con agua y conéctalas con la manguera. Saca todas las burbujas.
4. **Paso 4.** Fija la jeringa receptora a la base con ligas y cinta, de modo que su émbolo empuje el brazo hacia arriba.
5. **Paso 5.** Empuja la jeringa de control (la "palanca"): el brazo debe subir. Tírala hacia atrás y debe bajar.
6. **Paso 6.** Si te sobra tiempo, repite con otro par de jeringas para mover la "mano".

> 💡 **Pista:** si el brazo se mueve muy poco, usa una jeringa receptora más delgada que la de control: se moverá más distancia, pero con menos fuerza. Si el brazo no logra levantarse, haz lo contrario.

✅ **Para terminar la clase, revisa:** el brazo sube y baja con la jeringa de control sin que goteen las uniones.

## 📅 Clase 3 — Entrenamos a la IA

**Meta de hoy:** una IA que reconozca cartón, plástico y metal con la cámara.

1. **Paso 1.** Entra a **teachablemachine.withgoogle.com** y elige **Proyecto de imagen → Modelo de imagen estándar**.
2. **Paso 2.** Crea 4 clases: **Cartón**, **Plástico**, **Metal** y **Nada** (la cámara sin ningún objeto).
3. **Paso 3.** Para cada clase, usa la cámara para grabar unas 40 fotos del objeto desde varios ángulos y con distintos fondos.
4. **Paso 4.** Presiona **Entrenar modelo** y espera.
5. **Paso 5.** Prueba con objetos nuevos que no usaste para entrenar. Anota los que acierta y los que no.
6. **Paso 6.** Si se equivoca, agrega más fotos de ese caso y entrena de nuevo.

> 💡 **Pista:** una IA aprende de los ejemplos que le das. Pocas fotos o todas iguales = una IA que se confunde. Eso se llama **sesgo en los datos**.

✅ **Para terminar la clase, revisa:** la IA acierta al menos 8 de 10 objetos nuevos.

## 📅 Clase 4 — El robot completo y presentación

**Meta de hoy:** clasificar objetos con tu brazo guiado por la IA y presentarlo.

1. **Paso 1.** Pon los 3 vasos como botes: uno para cartón, uno para plástico y uno para metal.
2. **Paso 2.** Muestra un objeto a la cámara. La IA dice qué es (**sentir** y **pensar**).
3. **Paso 3.** Usa tu brazo para empujar el objeto al bote correcto (**actuar**).
4. **Paso 4.** Haz el reto con 6 objetos y anota cuántos clasificó bien tu robot.
5. **Paso 5.** Prepara tu explicación: cómo funciona la hidráulica, cómo aprendió la IA y qué mejorarías.
6. **Paso 6.** Presenta tu robot a la clase.

✅ **Para terminar la clase, revisa:** tienes tu resultado (por ejemplo, 5 de 6) y puedes explicar las dos partes: el brazo y la IA.

## 🔁 Si no terminaste en clase

Repasa los pasos de la clase que te faltó. Guarda tu brazo sin vaciar el agua de las jeringas si piensas seguir. El modelo de Teachable Machine se puede guardar en tu cuenta de Google.

## 🌱 Reto extra

Haz que el brazo tenga una "mano" que agarre, o entrena la IA con una cuarta categoría (papel, vidrio…).

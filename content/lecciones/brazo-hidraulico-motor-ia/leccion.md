---
titulo: "Brazo hidráulico con motor e IA"
edad: "8 a 17 años (con tres rutas)"
semanas: 4
resumen: "Construimos un brazo de cartón que se mueve con agua y jeringas. Primero lo mueves tú, después un motor empuja el agua por ti y al final una inteligencia artificial lo controla con gestos de tu mano."
materiales:
  - "Para todos: jeringas de 5 ml SIN aguja (4). Opcional: 2 jeringas de 10 ml para el experimento de la clase 1"
  - "Para todos: manguera delgada y transparente de 1 metro que quede ajustada en la punta de las jeringas (de acuario o de suero). Se corta en dos pedazos de 40 a 50 cm"
  - "Para todos: cartón grueso de cajas usadas (varias piezas), palitos de madera o brochetas (6), popotes (4), clips grandes (6), ligas, tijeras y cinta adhesiva"
  - "Para todos: pegamento caliente (solo lo usa el maestro o un adulto)"
  - "Para todos: agua con colorante, un vaso grande o bote para llenar las jeringas bajo el agua, una charola y papel o trapo para secar"
  - "Para todos: tapas de botella o bolitas de papel para que el brazo las mueva (10)"
  - "🟢 Ruta Motor: motorreductor de corriente directa (DC) de 3 a 6 V (1), portapilas para 2 pilas AA con sus pilas (1), interruptor pequeño (1) y cables con caimanes (4 o 5)"
  - "🔵 Ruta Servo: Arduino Uno (o compatible) con cable USB (1), servomotor SG90 (1), cables jumper macho-hembra (3), computadora con cámara, Chrome o Edge y Arduino IDE instalado"
  - "🟣 Ruta Avanzada: lo de la Ruta Servo más un segundo servo SG90 (1), portapilas para 4 pilas AA recargables (1) y 4 pilas, y cables jumper extra (5)"
videos: []
# Para agregar un video (YouTube o archivo propio), quita los corchetes de arriba y escribe:
# videos:
#   - titulo: "Cómo conectar las jeringas sin burbujas"
#     url: "https://youtu.be/XXXXXXXXXXX"
---

## 🎯 ¿Qué vamos a lograr?

Un **brazo robótico de cartón que se mueve con agua**. Lo harás en tres pasos: primero lo mueves tú con la mano, luego un **motor** empuja el agua por ti y, al final, una **inteligencia artificial** lo controla viendo tus gestos con la cámara.

> 🧭 **Elige tu ruta** (tu maestro te ayuda a decidir). Todos hacemos juntos las clases 1 y 2. En las clases 3 y 4 cada quien sigue la suya:
>
> - 🟢 **Ruta Motor:** un motor con manivela mueve el brazo solo. No necesita Arduino.
> - 🔵 **Ruta Servo:** un Arduino mueve el brazo con un servo, y la IA lo manda con gestos.
> - 🟣 **Ruta Avanzada:** dos servos (codo y pinza), movimiento suave y mediciones.

![Sentir, pensar y actuar: ver, decidir y moverse](/ilustraciones/comun/sentir-pensar-actuar.svg)

## 🛡️ Reglas de seguridad

- Las jeringas van **sin aguja**, siempre.
- **El agua y la electrónica no se mezclan.** Trabaja el agua sobre la charola y deja el Arduino, las pilas y los cables del otro lado de la mesa. Si hay una gota o una fuga, **primero desconecta** y luego seca.
- El pegamento caliente y las tijeras, solo con el maestro.
- Con el motor o el servo prendido, **las manos lejos de la manivela, la biela y el brazo del servo**: pellizcan. No los detengas ni los fuerces con la mano.
- En el circuito, **nunca unas con un caimán los dos extremos del portapilas**: se calientan las pilas y los cables.
- Para entrenar a la IA, la cámara solo enfoca **tus manos y una pared**. Nada de caras.

## 📅 Clase 1 — Hidráulica y diseño

**Meta de hoy:** entender cómo se mueve algo con agua y diseñar tu brazo.

1. **Paso 1.** Llena el vaso grande con agua y trabaja con las jeringas y la manguera **dentro del agua**: así no entra aire. Jala el émbolo de la jeringa A para llenarla, conéctale la manguera y empuja hasta que salga agua por el otro extremo. Llena la jeringa B hasta la mitad y conéctala a ese extremo, sin sacarla del agua.
2. **Paso 2.** Mira la manguera: no debe tener burbujas. Si tiene, empuja el agua de un lado a otro hasta sacarlas.
3. **Paso 3.** Empuja el émbolo de A: el de B se mueve. Hazlo despacio y rápido. Anota qué sientes y qué pasa.

   ![Dos jeringas unidas con una manguera llena de agua](/ilustraciones/secundaria/hidraulica-jeringas.svg)

4. **Paso 4.** Experimento: empuja A exactamente **2 cm** y mide con una regla cuánto se mueve B. Anótalo. Si tienes jeringas de 10 ml, repite con 10 → 5 y con 5 → 10 y compara las tres medidas.
5. **Paso 5.** Dibuja tu brazo: base, brazo, jeringa receptora y jeringa de control. Debe tener **mínimo un movimiento** (subir y bajar). Si te da tiempo, agrega otro para abrir y cerrar una pinza.
6. **Paso 6.** Corta las piezas: una base de cartón, y dos tiras para el brazo. Pega **dos capas** de cartón en cada tira, con las ondas cruzadas, para que no se doblen.

> 💡 **Pista:** el agua casi no se comprime, por eso lo que empujas de un lado se mueve del otro. La jeringa más delgada se mueve **más lejos**, pero empuja con **menos fuerza**. Con una burbuja de aire, el movimiento se siente "esponjoso".

✅ **Para terminar la clase, revisa:** tus jeringas mueven una a la otra sin burbujas, tienes tus medidas anotadas y tu dibujo con las piezas cortadas.

## 📅 Clase 2 — Construimos el brazo (todavía a mano)

**Meta de hoy:** un brazo de cartón que sube y baja empujando una jeringa.

1. **Paso 1.** Haz las articulaciones: pega un pedazo de popote en una tira y pasa un palito por dentro. Así el palito es el eje y la tira gira sin atorarse.
2. **Paso 2.** Pega las tiras a la base para que el brazo pueda levantarse.
3. **Paso 3.** Fija la **jeringa receptora** a la base con ligas y cinta. La punta de su émbolo debe tocar el brazo a unos **3 cm** del eje. Únela al brazo con un clip estirado que haga de bisagra.

   ![Estructura del brazo hidráulico de cartón con sus dos jeringas](/ilustraciones/secundaria/brazo-hidraulico.svg)

4. **Paso 4.** Conecta la jeringa receptora con la jeringa de control **bajo el agua**, como en la clase 1. Revisa que no haya burbujas.
5. **Paso 5.** Empuja la jeringa de control: el brazo debe subir. Jálala hacia atrás y debe bajar.
6. **Paso 6.** Reto sin motor: con el brazo a mano, pasa 5 tapas de un lado a otro de la charola. Mide cuánto tardas.
7. **Paso 7.** Si te sobra tiempo, arma otra pareja de jeringas para una pinza.

> 💡 **Pista:** si el brazo casi no se mueve, usa una jeringa receptora más delgada que la de control. Si no tiene fuerza para levantarse, haz lo contrario. Una gota de aceite de cocina en el hule del émbolo ayuda a que se deslice mejor.

✅ **Para terminar la clase, revisa:** el brazo sube y baja con tu jeringa de control, sin goteos, y ya pasaste las tapas de un lado a otro.

## 📅 Clase 3 — Ponemos el motor

**Meta de hoy:** que la jeringa de control **no la empujes tú**, sino un motor.

**Preparación para todos.** Haz un **soporte de cartón** para la jeringa de control: una caja o dos tiras dobladas que sujeten el barril sin que se mueva y dejen libre el émbolo. Pega en la orilla del émbolo una **pestaña de cartón** con un agujerito: ahí se va a enganchar la biela. Pon todo lo eléctrico **lejos de la charola**.

![El motor empuja una jeringa y el agua mueve el brazo de cartón](/ilustraciones/comun/servo-empuja-jeringa.svg)

### 🟢 Ruta Motor

1. **Paso 1.** Arma el circuito con caimanes: portapilas → interruptor → motor → de vuelta al portapilas. Prueba que el motor gire con el interruptor, y apaga.
2. **Paso 2.** Corta un disco de cartón de unos 8 cm y pégalo al eje del motor (haz un hoyito un poco más chico que el eje y mételo a presión). Debe girar derecho, sin tambalearse.
3. **Paso 3.** Estira un clip: esa es la **biela**. Engancha un extremo en un agujerito del disco, **a unos 2 cm del centro**, y el otro extremo en la pestaña del émbolo.
4. **Paso 4.** Fija el motor a su soporte para que el disco quede de lado a la jeringa y la biela jale y empuje **en línea recta**.
5. **Paso 5.** Prende el interruptor: en cada vuelta el émbolo entra y sale, y el brazo sube y baja solo, como si saludara.
6. **Paso 6.** Mueve el clip más cerca del centro del disco y vuelve a probar. ¿El brazo sube más o menos? Cuenta cuántas subidas hace en 10 segundos.

> 💡 **Pista:** si el émbolo llega al fondo y se atora, acerca el clip al centro del disco. Si el motor se detiene, apaga y revisa que el émbolo corra sin trabarse.

✅ **Para terminar la clase, revisa:** al prender el interruptor, el brazo sube y baja solo.

### 🔵 Ruta Servo

1. **Paso 1.** Conecta el servo al Arduino: cable **café o negro** a **GND**, **rojo** a **5V** y **naranja o amarillo** al **pin 9**. Haz lo mismo que en la ilustración.

   ![Cableado del servo al Arduino: señal al pin 9, GND a GND y rojo a 5V](/ilustraciones/preparatoria/cableado-servo.svg)

2. **Paso 2.** En el Arduino IDE sube este programa de prueba. El servo debe ir y venir entre dos posiciones:

```cpp
#include <Servo.h>

Servo codo;

void setup() {
  codo.attach(9);
}

void loop() {
  codo.write(60);
  delay(1500);
  codo.write(120);
  delay(1500);
}
```

3. **Paso 3.** Desconecta el USB. Estira un clip: es la **biela**. Engancha un extremo en un agujerito del brazo del servo (el "horn") y el otro en la pestaña del émbolo.
4. **Paso 4.** Fija el servo en su soporte, frente a la jeringa, para que la biela empuje y jale **en línea recta**. Conecta otra vez el USB.
5. **Paso 5.** Sube este programa. Recibe un carácter por USB y mueve el brazo:

```cpp
#include <Servo.h>

Servo codo;

const int ARRIBA = 60;   // ángulo que sube el brazo (ajústalo)
const int ABAJO = 120;   // ángulo que baja el brazo (ajústalo)

void setup() {
  Serial.begin(9600);
  codo.attach(9);
  codo.write(ABAJO);
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    if (c == '1') codo.write(ARRIBA);
    if (c == '2') codo.write(ABAJO);
  }
}
```

6. **Paso 6.** Abre **Herramientas → Monitor Serie** (velocidad 9600). Escribe `1` y Enter: el brazo sube. Escribe `2` y Enter: baja.
7. **Paso 7.** Ajusta los números `ARRIBA` y `ABAJO` hasta que el émbolo se mueva sin llegar a los topes. Si el brazo sube cuando debería bajar, cambia los dos números entre sí.

> 💡 **Pista:** si el servo zumba y no empuja, está forzando. Acerca el gancho de la biela al centro del brazo del servo, usa una jeringa de control más chica o revisa que el émbolo corra libre. Si el servo tiembla sin moverse, revisa el cable naranja en el pin 9.

✅ **Para terminar la clase, revisa:** escribiendo `1` y `2` en el Monitor Serie, el brazo sube y baja sin forzar el servo.

### 🟣 Ruta Avanzada

1. **Paso 1.** Arma la parte del **codo** como en la Ruta Servo: servo en el pin 9, biela y jeringa de control. El **segundo servo** mueve la pinza y va en el pin 10, con su propia jeringa de control. Si no armaste la pinza en la clase 2, hazlo ahora con otra pareja de jeringas.
2. **Paso 2.** **Alimenta los servos con las pilas**, no con el Arduino: dos servos en movimiento pueden pedir más corriente de la que da el USB. Conecta el cable **rojo** de cada servo al **+** del portapilas de 4 pilas AA y el **café o negro** al **–**. Además, conecta un cable del **–** del portapilas al **GND** del Arduino. Los cables de señal (naranja) van a los pines 9 y 10. **No conectes el + del portapilas al 5V del Arduino.**
3. **Paso 3.** Sube este programa. Mueve cada servo **de a un grado** cada 15 milisegundos para que el brazo se mueva con suavidad y no dé golpes de presión en el agua:

```cpp
#include <Servo.h>

Servo codo;
Servo pinza;

// Límites calibrados: cámbialos en el paso 5
const int CODO_ARRIBA = 60;
const int CODO_ABAJO = 120;
const int PINZA_ABIERTA = 50;
const int PINZA_CERRADA = 110;

int codoActual = CODO_ABAJO;
int codoMeta = CODO_ABAJO;
int pinzaActual = PINZA_ABIERTA;
int pinzaMeta = PINZA_ABIERTA;
unsigned long ultimoPaso = 0;

void setup() {
  Serial.begin(9600);
  codo.attach(9);
  pinza.attach(10);
  codo.write(codoActual);
  pinza.write(pinzaActual);
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    if (c == '1') codoMeta = CODO_ARRIBA;
    if (c == '2') codoMeta = CODO_ABAJO;
    if (c == '3') pinzaMeta = PINZA_ABIERTA;
    if (c == '4') pinzaMeta = PINZA_CERRADA;
  }

  if (millis() - ultimoPaso >= 15) {
    ultimoPaso = millis();
    if (codoActual < codoMeta) codoActual++;
    else if (codoActual > codoMeta) codoActual--;
    if (pinzaActual < pinzaMeta) pinzaActual++;
    else if (pinzaActual > pinzaMeta) pinzaActual--;
    codo.write(codoActual);
    pinza.write(pinzaActual);
  }
}
```

4. **Paso 4.** Abre el Monitor Serie (9600) y prueba: `1` sube el codo, `2` lo baja, `3` abre la pinza y `4` la cierra.
5. **Paso 5.** **Calibra:** cambia los cuatro números de arriba hasta que cada movimiento use todo el recorrido sin llegar a los topes. Anota tus cuatro ángulos en el cuaderno.
6. **Paso 6.** Cambia el `15` por `5` y por `40`. ¿Qué cambia en el brazo? ¿Por qué crees que importa la velocidad con la que se mueve el agua?

> 💡 **Pista:** el movimiento suave protege el servo y la manguera. Si un servo se calienta o se escucha forzado, apaga y revisa que su émbolo corra libre.

✅ **Para terminar la clase, revisa:** las teclas `1` a `4` mueven el codo y la pinza con suavidad, y tienes tus cuatro ángulos anotados.

## 📅 Clase 4 — La IA toma el control y presentamos

**Meta de hoy:** controlar el brazo con gestos de tu mano y presentarlo.

### 🔧 Primera parte: entrenamos a la IA

1. **Paso 1.** Entra a **teachablemachine.withgoogle.com** → **Proyecto de imagen → Modelo de imagen estándar**.
2. **Paso 2.** Crea las clases **en este orden**. Cada una será un gesto:
   - 🟢 y 🔵: **1 Mano abierta** (sube), **2 Puño** (baja), **3 Nada** (la cámara sin tu mano).
   - 🟣: **1 Mano abierta** (sube el codo), **2 Puño** (baja el codo), **3 Un dedo** (abre la pinza), **4 Dos dedos** (cierra la pinza), **5 Nada**.
3. **Paso 3.** Graba unas **50 fotos de cada gesto**, con la cámara enfocando solo tu mano. Cambia el ángulo, la distancia, el fondo y la luz. Pide a un compañero que grabe también sus manos.
4. **Paso 4.** Presiona **Entrenar modelo** y prueba con gestos nuevos. Si confunde dos gestos, agrega más fotos de esos y entrena otra vez.

   ![Cuatro pasos de Teachable Machine: crear clases, grabar, entrenar y probar](/ilustraciones/secundaria/teachable-machine.svg)

> 💡 **Pista:** si la IA solo reconoce tu mano pero no la de tus compañeros, le faltaron ejemplos variados. Eso se llama **sesgo en los datos**.

### 🔌 Segunda parte: conectamos la IA al brazo

**🔵 y 🟣 Rutas con Arduino**

1. **Paso 1.** Presiona **Exportar modelo → Subir (compartir) mi modelo** y copia el **enlace**.
2. **Paso 2.** **Cierra el Monitor Serie** del Arduino IDE (si no, el navegador no puede conectarse). Deja el Arduino conectado por USB.
3. **Paso 3.** Abre la herramienta del curso: [Abrir el clasificador](/herramientas/clasificador-serial.html), en **Chrome o Edge**. Ignora el texto donde dice "1 Cartón, 2 Plástico…": la herramienta manda al Arduino el **número de la clase**, en el orden en que tú las creaste.
4. **Paso 4.** Pega tu enlace, presiona **Conectar Arduino**, elige tu puerto, y luego **Iniciar cámara**.
5. **Paso 5.** Muestra tu mano abierta, tu puño y los demás gestos. El brazo debe obedecer. La clase "Nada" manda un número que el programa ignora, así que el brazo se queda donde está.

**🟢 Ruta Motor**

1. **Paso 1.** Cuando termines de entrenar, usa la **vista previa** de Teachable Machine para que la IA te diga qué gesto ve.
2. **Paso 2.** Juega a ser el "músculo" de la IA: cuando vea **Mano abierta**, un compañero prende el interruptor y el brazo se mueve; cuando vea **Puño**, lo apaga. La IA decide y tu equipo ejecuta.
3. **Paso 3.** Si tu maestro tiene un Arduino, puede conectar la herramienta del curso para que la IA mande al motor por sí sola.

### 🏆 Tercera parte: medimos y presentamos

1. **Paso 1.** Haz una tabla en tu cuaderno con tres columnas: **Orden**, **Intentos** y **Aciertos**.
2. **Paso 2.** Un compañero te dicta 10 órdenes al azar ("sube", "baja"…). Haz el gesto y anota si el brazo obedeció bien. Calcula tu porcentaje de acierto.
3. **Paso 3.** Busca el error más común y piensa por qué pasó: ¿poca luz? ¿pocas fotos? Mejora una cosa, entrena otra vez y mide de nuevo.
4. **Paso 4.** Reto de fuerza: ¿cuántas tapas puede mover tu brazo de una vez? Anota tu récord.
5. **Paso 5.** Prepara tu presentación: tu brazo funcionando, tu tabla de antes y después, y la explicación de las tres partes (**sentir** con la cámara, **pensar** con la IA y **actuar** con el motor y el agua). Cuéntanos qué cambiarías.

✅ **Para terminar la clase, revisa:** el brazo obedece al menos 8 de 10 órdenes (o tienes tu tabla y una mejora que probaste) y puedes explicar cómo la fuerza viaja del motor al agua y de ahí al brazo.

## 🔁 Si no terminaste en clase

Repasa los pasos de la clase que te faltó y mira el video. Guarda tu brazo sin vaciar el agua si vas a seguir la próxima semana, **en la charola y sin pilas puestas**, con los cables y el Arduino en una bolsa aparte. Tu modelo de Teachable Machine se queda en el enlace que copiaste: guárdalo en un lugar seguro.

## 🌱 Reto extra

- 🟢 Agrega un segundo motor con otra jeringa, para mover el brazo y una pinza a la vez.
- 🔵 Arma una pinza y agrégale un segundo servo.
- 🟣 Une este proyecto con el clasificador de residuos: entrena la IA con **cartón, plástico y metal** y haz que el brazo empuje cada objeto al bote correcto.
- Para todos: ¿cuánto peso levanta tu brazo si cambias la jeringa receptora por una más gruesa? Mide, compara y explica por qué.

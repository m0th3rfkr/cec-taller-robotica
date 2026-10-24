---
titulo: "Clasificador de residuos con Arduino e IA"
mes: 1
semanas: 4
resumen: "Entrenamos una IA con la cámara para reconocer cartón, plástico y metal, y un Arduino mueve un embudo giratorio de cartón hacia el bote correcto."
materiales:
  - "Arduino Uno (o compatible) con cable USB (1)"
  - "Servomotor SG90 (1)"
  - "Cables jumper macho-hembra (3)"
  - "Caja de cartón reciclada para la estructura (1)"
  - "Tubo de cartón de papel higiénico o aluminio, para el embudo (1)"
  - "Vasos o botes reciclados para los residuos (3)"
  - "Cinta adhesiva y pegamento caliente (con supervisión)"
  - "Regla, transportador o papel con ángulos marcados"
  - "Objetos para clasificar: cartón, plástico y latas limpias aplastadas (10 de cada uno)"
  - "Computadora con cámara, Chrome o Edge, y Arduino IDE instalado"
videos: []
# Para agregar un video (YouTube o archivo propio), quita los corchetes de arriba y escribe:
# videos:
#   - titulo: "Calibrando los ángulos del servo"
#     url: "https://youtu.be/XXXXXXXXXXX"
---

## 🎯 ¿Qué vamos a lograr?

Un robot con tres partes: **sentir** (la cámara), **pensar** (una IA que reconoce el material) y **actuar** (un servo que gira un embudo hacia el bote correcto).

> ⚠️ **Seguridad:** el pegamento caliente solo con supervisión. Conecta el Arduino a la computadora **después** de armar los cables.

## 📅 Clase 1 — Diagrama y primera prueba del servo

**Meta de hoy:** tener el plan del robot y comprobar que el servo se mueve.

1. **Paso 1.** Dibuja el diagrama: **cámara → IA → Arduino → servo → embudo → bote**. Escribe qué información viaja entre cada parte.
2. **Paso 2.** Instala el **Arduino IDE** si aún no lo tienes y conecta el Arduino por USB.
3. **Paso 3.** Conecta el servo: cable **café/negro** a **GND**, **rojo** a **5V** y **naranja/amarillo** al **pin 9**.
4. **Paso 4.** Sube este programa (Archivo → Nuevo, pega, selecciona tu placa y puerto, presiona *Subir*):

```cpp
#include <Servo.h>

Servo rampa;

void setup() {
  rampa.attach(9);
}

void loop() {
  rampa.write(20);
  delay(1000);
  rampa.write(90);
  delay(1000);
  rampa.write(160);
  delay(1000);
}
```

5. **Paso 5.** El servo debe moverse entre tres posiciones. Anota qué ocurre si cambias los números 20, 90 y 160.

> 💡 **Pista:** si el servo tiembla o no se mueve, revisa que el cable naranja esté en el pin 9 y que el puerto elegido sea el correcto en *Herramientas → Puerto*.

✅ **Para terminar la clase, revisa:** el servo se mueve a tres ángulos distintos y tienes tu diagrama.

## 📅 Clase 2 — Construimos el robot y lo controlamos con el teclado

**Meta de hoy:** el embudo apunta a un bote distinto según un número que escribas.

1. **Paso 1.** Haz la estructura con la caja: el servo va arriba, fijado con cinta o pegamento caliente.
2. **Paso 2.** Pega el tubo de cartón al brazo (horn) del servo: será el embudo giratorio.
3. **Paso 3.** Coloca los 3 vasos debajo, de modo que el embudo apunte a uno distinto en cada ángulo. Marca sus posiciones.
4. **Paso 4.** Sube este programa. Recibe un carácter por USB y mueve el servo:

```cpp
#include <Servo.h>

Servo rampa;

void setup() {
  Serial.begin(9600);
  rampa.attach(9);
  rampa.write(90);
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    if (c == '1') rampa.write(20);    // cartón
    if (c == '2') rampa.write(90);    // plástico
    if (c == '3') rampa.write(160);   // metal
  }
}
```

5. **Paso 5.** Abre **Herramientas → Monitor Serie** (velocidad 9600). Escribe `1`, `2` o `3` y presiona Enter: el embudo debe apuntar a cada bote.
6. **Paso 6.** Ajusta los ángulos (20, 90, 160) hasta que el embudo apunte justo sobre cada vaso.

> 💡 **Pista:** el programa solo reacciona a los caracteres `1`, `2` y `3`. Cualquier otro (como `4`) lo ignora. Eso nos servirá en la clase 3.

✅ **Para terminar la clase, revisa:** escribiendo 1, 2 y 3 en el Monitor Serie, el embudo apunta a cada bote.

## 📅 Clase 3 — Entrenamos a la IA y la conectamos al robot

**Meta de hoy:** que la cámara decida a qué bote va cada objeto.

1. **Paso 1.** Entra a **teachablemachine.withgoogle.com** → **Proyecto de imagen → Modelo de imagen estándar**.
2. **Paso 2.** Crea las clases **en este orden**: **Cartón**, **Plástico**, **Metal**, **Nada** (la cámara sin objeto).
3. **Paso 3.** Graba unas 50 fotos por clase, con distintos ángulos, fondos y luz.
4. **Paso 4.** Presiona **Entrenar modelo** y prueba con objetos nuevos.
5. **Paso 5.** Presiona **Exportar modelo → Subir (compartir) mi modelo** y copia el **enlace** que te da.
6. **Paso 6.** **Cierra el Monitor Serie** del Arduino IDE (si no, el navegador no puede conectarse).
7. **Paso 7.** Abre la herramienta del curso: [Abrir el clasificador](/herramientas/clasificador-serial.html) en **Chrome o Edge**.
8. **Paso 8.** Pega tu enlace, presiona **Conectar Arduino** y elige tu puerto. Luego **Iniciar cámara**.
9. **Paso 9.** Muestra un objeto: cuando la IA esté segura, el embudo debe girar al bote correcto.

> 💡 **Pista:** la herramienta manda al Arduino `1`, `2` o `3` según la clase (en el orden que creaste) y `4` para "Nada", que el Arduino ignora. Solo envía cuando la IA lleva un momento segura de su respuesta, para no moverse por errores.

✅ **Para terminar la clase, revisa:** al menos 3 objetos distintos se van al bote correcto.

## 📅 Clase 4 — Medimos, mejoramos y presentamos

**Meta de hoy:** saber qué tan bien funciona tu robot y mejorarlo.

1. **Paso 1.** Haz una tabla con 3 columnas: **Material**, **Intentos** y **Aciertos**.
2. **Paso 2.** Prueba 10 objetos de cada material y anota cuántos fue al bote correcto. Calcula el porcentaje de acierto.
3. **Paso 3.** Busca el error más común (por ejemplo, confunde plástico con metal brillante). Piensa por qué: ¿pocas fotos? ¿mala luz?
4. **Paso 4.** Mejora una cosa: agrega fotos de ese caso, cambia la luz o el fondo, y entrena otra vez. Mide de nuevo.
5. **Paso 5.** Presenta: el diagrama sentir-pensar-actuar, tu tabla antes y después de la mejora, y qué cambiarías.

✅ **Para terminar la clase, revisa:** tienes tu tabla con porcentajes y una mejora que probaste.

## 🔁 Si no terminaste en clase

Repasa los pasos de la clase que te faltó. Guarda tu estructura y tus cables. Tu modelo se queda en el enlace que copiaste: guárdalo en un lugar seguro.

## 🌱 Reto extra

Agrega un segundo servo que empuje el objeto, un contador de aciertos en pantalla, o una cuarta clase (papel, vidrio…). Para eso tendrás que cambiar el programa del Arduino.

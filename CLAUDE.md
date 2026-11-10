# Contexto del proyecto Portfolio

## Sobre el dueño

Eric Nofal. Principiante en programación pero aprendiendo a usar Claude Code de forma profesional. Habla español rioplatense (Argentina, "vos").

Su enfoque NO es escribir código línea por línea — es escribir prompts profesionales y entender el ecosistema. Cuando le expliques cosas, hacelo paso a paso, con ejemplos concretos y preguntas para verificar comprensión. Evitá info dumps.

## Qué es Portfolio

App web de gestión de portfolio financiero personal. Muestra posiciones, precios de acciones, señales de compra/venta y análisis de tickers.

Características clave:
- App de archivo único HTML (`index.html`)
- Se despliega via GitHub Pages: https://alejandroeric.github.io/portfolio
- Integra Claude API (Anthropic) para análisis de imágenes y tickers
- Integra Alpha Vantage API para precios de acciones
- Las API keys se ingresan por UI, NO están hardcodeadas en el código

## Stack técnico real

- *HTML + CSS + JavaScript vanilla* — sin frameworks.
- *NO* usar Python, Flask, SQLite ni stacks pesados.
- Si se proponen cambios estructurales (split de archivos, build tools, etc.), pedir confirmación del dueño primero.

## Seguridad

- API keys (Anthropic, Alpha Vantage, etc.) *NUNCA en código fuente*. Solo en UI vía localStorage.
- Sin secrets hardcodeados.

## Control de versiones (git)

*Regla #1 — Commits descriptivos:* mensajes claros, en castellano, que expliquen el "qué" y el "por qué". Evitar mensajes vagos tipo "fix", "update", "cambios".

*Regla #2 — No commitear sin pedirlo:* no hacer commits automáticos sin que el dueño los apruebe explícitamente.

*Regla #3 — Push = deploy:* cada push a `main` actualiza GitHub Pages. Confirmar con el dueño antes de pushear.

Identidad git ya configurada globalmente: Eric Nofal / alejoanton@hotmail.com.

## Workflow profesional esperado

1. *Plan antes de código*: para tareas no triviales, presentar plan primero. Esperar OK.
2. *Edit > Write*: preferir Edit a Write siempre que se pueda. Solo usar Write para archivos nuevos o reescrituras planeadas.
3. *Leer antes de modificar*: nunca tocar archivo sin haberlo leído antes.
4. *Verificar visualmente*: después de cambios significativos, recomendar abrir la app en GitHub Pages y confirmar que funciona.

## Restricciones generales (defaults)

- *No commitear a git* sin que el dueño lo pida explícitamente.
- *No instalar paquetes nuevos* sin avisar y justificar.
- *No borrar archivos* sin confirmar.
- *Si existen instrucciones contradictorias*, preguntar al dueño cuál usar.

## Estilo de comunicación esperado

- Español rioplatense ("vos", no "tú").
- Paso a paso, con ejemplos concretos y preguntas de verificación.
- Validar el "por qué" antes del "cómo" cuando es un concepto nuevo.
- Sin emojis salvo que el dueño los use primero o los pida.
- Sin info dumps. Una idea por turno.

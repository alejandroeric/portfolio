# Portfolio — Contexto del proyecto

## Qué es

App web de gestión de portfolio financiero personal. Muestra posiciones, precios de acciones, señales de compra/venta y análisis de tickers.

Desplegada en GitHub Pages: **https://alejandroeric.github.io/portfolio**
Push a `main` = deploy automático — confirmar antes de pushear.

## Stack técnico

- App de archivo único: `index.html`
- HTML + CSS + JavaScript vanilla — sin frameworks.
- Integra Claude API (Anthropic) para análisis de imágenes y tickers.
- Integra Alpha Vantage API para precios de acciones.
- Las API keys se ingresan por UI y se guardan en localStorage — nunca hardcodeadas.
- **NO** usar Python, Flask, SQLite ni frameworks.
- Cambios estructurales (split de archivos, build tools): pedir confirmación primero.

## Estado al iniciar sesión

- El proyecto tiene `.git/` conectado a GitHub.
- Verificar en GitHub Pages después de cada deploy.

## Mejoras pendientes (diseñadas, pendientes de implementar)

- Panel de noticias por ticker — via RSS de Yahoo Finance + proxy allorigins.win
- Panel de earnings por ticker — via SEC EDGAR XBRL API (sin key, User-Agent requerido: "Eric Nofal alejoanton@hotmail.com")

---
title: "Bitácora 001: arrancando el laboratorio"
description: "Entrada de ejemplo que muestra cómo se renderizan fórmulas, reacciones químicas, tablas y código."
date: "2026-10-24"
tags: ["Meta", "LaTeX"]
---

> Esta entrada es un **marcador de posición**. Bórrala o edítala: vive en `content/blog/`.

## Matemáticas en línea y en bloque

La energía de un fotón es $E = h\nu$, y la ecuación de Schrödinger dependiente del tiempo se escribe así:

$$
i\hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t)\right]\Psi(\mathbf{r},t)
$$

## Química con mhchem

Una reacción en línea: $\ce{N2 + 3H2 <=> 2NH3}$. Y en bloque, con estados de agregación:

$$
\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}
$$

El ion sulfato es $\ce{SO4^2-}$ y una concentración se escribe $\pu{0.10 mol L-1}$.

## Tablas

| Método | Escalado | Uso típico |
| ------ | -------- | ---------- |
| HF     | $N^4$    | Punto de partida |
| DFT    | $N^3$–$N^4$ | Moléculas medianas |
| CCSD(T) | $N^7$   | Referencia de precisión |

## Código

```python
import numpy as np

def lennard_jones(r, epsilon=1.0, sigma=1.0):
    sr6 = (sigma / r) ** 6
    return 4 * epsilon * (sr6**2 - sr6)
```

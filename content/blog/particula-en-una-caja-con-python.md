---
title: "La partícula en una caja, resuelta numéricamente"
description: "Entrada de ejemplo: diagonalizar el hamiltoniano discretizado y comparar con la solución analítica."
date: "2026-10-17"
tags: ["Química Teórica", "Python", "NumPy"]
---

> Entrada de **ejemplo**. Sustituye el contenido por tu propia derivación.

Para una partícula de masa $m$ en una caja de longitud $L$, las energías analíticas son

$$
E_n = \frac{n^2 \pi^2 \hbar^2}{2 m L^2}, \qquad n = 1, 2, 3, \dots
$$

## Discretización

Con diferencias finitas, la segunda derivada se aproxima como

$$
\frac{d^2\psi}{dx^2}\bigg|_{x_i} \approx \frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{\Delta x^2}
$$

de modo que $\hat{H}$ se convierte en una matriz tridiagonal que se diagonaliza con `numpy.linalg.eigh`.

```python
import numpy as np

N, L = 500, 1.0
dx = L / (N + 1)
main = np.full(N, 1.0 / dx**2)
off = np.full(N - 1, -0.5 / dx**2)
H = np.diag(main) + np.diag(off, 1) + np.diag(off, -1)
E, psi = np.linalg.eigh(H)
```

## Qué comparar

- El error relativo $|E_n^{\text{num}} - E_n|/E_n$ crece con $n$.
- Reducir $\Delta x$ mejora la precisión como $\mathcal{O}(\Delta x^2)$.

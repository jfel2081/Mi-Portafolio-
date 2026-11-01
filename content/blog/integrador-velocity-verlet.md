---
title: "Por qué velocity-Verlet conserva (casi) la energía"
description: "Entrada de ejemplo sobre integradores simplécticos en dinámica molecular."
date: "2026-10-10"
tags: ["Física Computacional", "C++", "Dinámica molecular"]
---

> Entrada de **ejemplo** para probar el feed de la página principal.

El algoritmo velocity-Verlet actualiza posiciones y velocidades con

$$
\begin{aligned}
\mathbf{r}(t+\Delta t) &= \mathbf{r}(t) + \mathbf{v}(t)\,\Delta t + \tfrac{1}{2}\mathbf{a}(t)\,\Delta t^2 \\
\mathbf{v}(t+\Delta t) &= \mathbf{v}(t) + \tfrac{1}{2}\left[\mathbf{a}(t) + \mathbf{a}(t+\Delta t)\right]\Delta t
\end{aligned}
$$

Es **simpléctico** y reversible en el tiempo, por lo que la energía oscila alrededor del valor exacto en lugar de derivar.

## Un vistazo en C++

```cpp
for (auto& p : particles) {
    p.v += 0.5 * dt * p.a;
    p.r += dt * p.v;
}
compute_forces(particles);
for (auto& p : particles) {
    p.v += 0.5 * dt * p.a;
}
```

El error global escala como $\mathcal{O}(\Delta t^2)$.

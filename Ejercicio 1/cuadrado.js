function color(cuadrado) {
    let a = getComputedStyle(cuadrado);
    let b = a.backgroundColor;
    document.querySelector('body').style.backgroundColor=b;
}


const options = [
  { value: 'ver', label: 'ver/mostrar' },
  { value: 'agregar', label: 'agregar' },
  { value: 'filtrar', label: 'filtrar' },
  { value: 'paginar', label: 'paginar' },
  { value: 'ordenar', label: 'ordenar' },
  { value: 'extraer', label: 'extraer' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});



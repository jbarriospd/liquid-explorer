const options = [
  { value: 'ver', label: 'ver/mostrar' },
  { value: 'asignar', label: 'asignar' },
  { value: 'filtrar', label: 'filtrar' },
  { value: 'ordenar', label: 'ordenar' },
  { value: 'obtener', label: 'obtener' },
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



const options = [
  { value: 'show', label: 'show/view' },
  { value: 'add', label: 'add' },
  { value: 'ordenar', label: 'ordenar' },

 
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



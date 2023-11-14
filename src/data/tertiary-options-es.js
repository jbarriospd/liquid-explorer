export const tertiaryOptions = {

  'entry-filter': [
    {
      value: 'entry-category',
      label: 'por categoría',
      usage: "| by_category: 'news'",
    },
    {
      value: 'entry-tag',
      label: 'por tag(s)',
      usage: "| by_tag: 'tag1, tag2, tag3'",
    },
    {
      value: 'entry-author',
      label: 'por campo',
      usage: "| filter_by: field: 'meta|fields.<nombre_campo>', eq: <valor>",
      nb: "Si quieres negar un valor dentro del filtro de campos, puedes usar not ej: | filter_by: field: 'field_name', not: <valor>"
    },

    {
      value: 'date',
      label: 'por fecha (año, mes, dia)',
      usage: "| date: '%y, %m, %d'"
    },
    {
      value: 'date-plane',
      label: 'por fecha en milisegundos',
      usage: "entry | date: '%s'",
      nb: "Se puede utilizar para comparar fechas"
    },
    {
      value: 'entry-limit-count',
      label: 'Por cantidad',
      usage: "| limit: <cantidad>",
    },
  ],
  'entry-order': [
    {
      value: 'entry-order-by-published',
      label: 'por fecha de publicación',
      usage: "| sort_by: 'published_at', 'asc'",
      nb: "Para ordenar por descensión, utiliza 'desc'"
    },
    {
      value: 'entry-order-by-created',
      label: 'por fecha de creación',
      usage: "| sort_by: 'created_at', 'asc'",
      nb: "Para ordenar por descensión, utiliza 'desc'"
    }
  ],
  'entry-nested': [
    {
      value: 'entry-nested-first',
      label: 'Primera iteracion',
      usage: "{% if forloop.first %} First time through! {% else %} Not the first time. {% endif %} ",
      nb: 'Dentro de un for, retorna la primera iteración ej: <li class="{% if forloop.first %}show{% endif %} nav-link">, en este caso el primer li tendra la clase show'
    },
  ]

}
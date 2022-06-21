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
      usage: "| filter_by: field: '<<nombre_campo>>', eq: <<valor>>",
      nb: "Si quieres negar un valor dentro del filtro de campos, puedes usar not: | filter_by: field: 'field_name', not: <<valor>>"
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
    },
    {
      value: 'entry-limit-count',
      label: 'Por cantidad',
      usage: "| limit: <<cantidad>>",
    },
  ],
  'entry-order': [
    {
      value: 'entry-asc',
      label: 'Por ascendente',
      usage: "| sort_by: 'fields.<<nombre-de-campo>>', 'asc'",
    },
    {
      value: 'entry-desc',
      label: 'Por descendente',
      usage: "| sort_by: 'fields.<<nombre-de-campo>>', 'desc'",
    },
  ],
  'entry-nested': [
    {
      value: 'entry-nested-first',
      label: 'Primera iteracion',
      usage: "{% if forloop.first %} First time through! {% else %} Not the first time. {% endif %} ",
      nb: 'Dentro de un for, retorna la primera iteracion ex: <li class="{% if forloop.first %}show{% endif %} nav-link">, en este caso el primer li tendra la clase show'
    },
  ]

}
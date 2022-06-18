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
      usage: "| filter_by: field: 'field_name', eq: 'value_to_filter'",
      nb: "Si quieres negar un valor dentro del filtro de campos, puedes usar not dentro del filtro: | filter_by: field: 'field_name', not: nil "
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
  'entry-order' : [
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

}
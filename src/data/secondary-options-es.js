export const secondaryOptions = {
  ver: [
    {
      value: 'image',
      label: 'imagen',
      usage: "{{ '<hash>' | asset_image }}",
      nb: 'Tag para mostrar una imagen de los assets, se recomienta usar en lo posible'
    },
    {
      value: 'url-base',
      label: 'url base',
      usage: "{{ site.url }}",
      nb: 'Taq para mostrar la url base del sitio, incluido el canal actual'
    },
    {
      value: 'domain',
      label: 'dominio',
      usage: "{{ request.host }}",
      nb: 'taq para mostrar el dominio actual ej: my-site.com'
    },
    {
      value: 'page-nombre',
      label: 'nombre de la pagina',
      usage: "{{ page_title }}",
    },
    {
      value: 'entries',
      label: 'entradas',
      usage: "{% assign entries = spaces['space_uid'].types['type_uid'].entries %}"
    },
    {
      value: 'entries-count',
      label: 'cantidad de entradas',
      usage: "{{ entries | total_entries }}",
    }
  ],
  obtener: [
    {
      value: 'entry-field',
      label: 'campo',
      usage: "{{ entry.<meta | fields>.<nombre_campo> }}",
      nb: "También es válido {{ entry['<<nombre_campo>>'] }}"
    },
    {
      value: 'entry-image',
      label: 'imagen',
      usage: "{{ entry.fields['Imagen'].url }}",
      nb: "También es válido {{ entry['Imagen'].url }}"
    },
    {
      value: 'entry-image-alt',
      label: 'alt de la imagen',
      usage: "{{ entry.fields['Imagen'].alt_text }}",
      nb: "También es válido {{ entry['Imagen'].alt_text }}"
    },
    {
      value: 'site-tree-cvategories',
      label: 'Arbol de categorias del sitio',
      usage: "{{ spaces['pruebas'].categories | json }}",
      nb: 'el resultado sería ej: [{"id":3952,"slug":"movies","name":"Movies","url":"/movies","parent":null},{"id":4442,"slug":"estaciones","name":"Estaciones","url":"/estaciones","parent":null}]'
    }
  ],
  agregar: [
    {
      value: 'comment',
      label: 'comentario',
      usage: '{% comment %} texto comentado {% endcomment %}'
    },
  ],

  asignar : [
    {
      value: 'var',
      label: 'variable',
      usage: '{% assign my_variable = "tomato" %}\n{{ my_variable }}'
    }
  ],

  filtrar: [
    {
      value: 'entry-filter',
      label: 'entrada',
    },
  
  ],

  ordenar : [
    {
      value: 'entry-order',
      label: 'entrada'
    },
  ],

  limitar : [
    {
      value: 'entry-limit',
      label: 'entrada'
    },
  ],

  paginar : [
    {
      value: 'entry-paginate',
      label: 'entrada',
      usage: "{% assign entries = spaces['space_uid'].types['type_uid'].entries | paginated: 10 %}\n<ul>\n{% for entry in entries %}\n<li>{{ entry.meta.slug }}</li>\n{% endfor %}\n</ul>\n{{ entries | pagination_links }}",
      nb: "Se paginará el listado de entradas con 10 elementos por página y al final del listado aparecerán los links de la paginación. Puedes navegar por cada página usando el parámetro GET page en la URL, por ejemplo mi-pagina.com/landing?page=2."

    },

  ],

  iteracion : [
    {
      value: 'entry-nested',
      label: 'anidado'
    }
  ],
  
  remove: [
    { 
    value: "accents",
    label: "acentos",
    usage: "| replace: 'á', 'a' | replace: 'é', 'e'  | replace: 'í', 'i'  | replace: 'ó', 'o'  | replace: 'ú', 'u' %}"
    }
  ]
  
};
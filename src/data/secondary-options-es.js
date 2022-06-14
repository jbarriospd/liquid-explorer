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
      value: '404',
      label: 'Mensaje de error 404',
      usage: "{{ 'site.errors.not_found' | translate }}",
      nb: 'Taq para mostrar 404 segun idioma del sitio'
    },
    {
      value: 'domain',
      label: 'dominio',
      usage: "{{ request.host }}",
      nb: 'taq para mostrar el dominio actual ex: my-site.com'
    },
    {
      value: 'page-nombre',
      label: 'nombre de la pagina',
      usage: "{{ page_title }}",
    },
    {
      value: 'entries',
      label: 'entradas',
      usage: "{% assign entries = spaces['space_uid'].types['type_uid'].entries %}",
      nb: 'Tag para mostrar entradas de un espacio,'
    }

    
  ],

  agregar: [
    {
      value: 'comment',
      label: 'comentario',
      usage: '{% comment %} in losses {% endcomment %}'
    }

  ],

  ordenar: [
    {
      value: 'fecha',
      label: 'Por fecha',
      usage: "sort_by: 'published_at','asc'",
      nb: 'Ordenar por fecha'
    }

  ]
  
};
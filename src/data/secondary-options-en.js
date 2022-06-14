export const secondaryOptions = {
   show: [
    {
      value: 'image',
      label: 'image',
      usage: "{{ '<hash>' | asset_image }}",
      nb: 'Liquid tag for displaying an image from the assets, use when possible'
    },
    {
      value: 'url-base',
      label: 'url base',
      usage: "{{ site.url }}",
      nb: 'Liquid tag for displaying the base url of the site, include the current channel'
    },
    {
      value: '404',
      label: '404 message',
      usage: "{{ 'site.errors.not_found' | translate }}",
      nb: 'Liquid tag for displaying 404 according to the site language'
    },
    {
      value: 'page-name',
      label: 'page name',
      usage: "{{ page_title }}",
    },
    {
      value: 'entries',
      label: 'entries',
      usage: "{% assign entries = spaces['space_uid'].types['type_uid'].entries %}",
      nb: 'Liquid tag for displaying entries of a space,'
    }
  ],

  add: [
    {
      value: 'comment',
      label: 'comment',
      usage: '{% comment %} in losses {% endcomment %}'
    }
  ]
  
};
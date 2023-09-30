export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImages',
        title: 'Main images',
        type: 'array',
        of: {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      },
      {
        name: 'date',
        title: 'Conducted on',
        type: 'datetime',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
      {
        name: 'upcoming',
        title: 'Upcoming Event?',
        type: 'boolean',
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },
    },
  }
  
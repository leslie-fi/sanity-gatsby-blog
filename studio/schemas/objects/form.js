export default {
  title: 'Form Settings',
  name: 'form',
  type: 'object',
  fields: [
    {
      name: 'thankyou',
      type: 'url',
      validation: Rule => Rule.uri({'allowRelative': true}).required(),
      title: 'Thank You page url'
    },
    {
      name: 'subject',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ],
      title: 'Email Subject',
      description: 'Add an email subject'
    },
    {
      name: 'emailto',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ],
      title: 'Email Address To',
      description: 'Add a single or multiple email addresses to where this form should be sent to. For example: jane@example.com, john@example.com'
    }
  ]
}
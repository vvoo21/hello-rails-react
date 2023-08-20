greetings = [
  'Hello, world!',
  'Greetings from Rails and React!',
  'Welcome to our app!',
  'Hey there, how can I assist you?',
  'Hola! Have a great day!'
]

greetings.each { |text| Message.create(text: text) }
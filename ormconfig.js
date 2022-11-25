module.exports = {
  'type': 'postgres',
  'host': 'localhost',
  'port': 5432,
  'username': 'postgres',
  'password': 'postgres',
  'database': 'NestDatabase',
  'entities': ['dist/**/**/*.entity{.js,.ts}'],
  'synchronize': true
}

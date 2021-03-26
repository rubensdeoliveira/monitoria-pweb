module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'project_2',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
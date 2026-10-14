export default class Recipe {
  #id;

  constructor({ id, category, name, duration_hours, duration_minutes, description}) {
    this.#id = id
    this.category = category
    this.name = name
    this.duration_hours = duration_hours
    this.duration_minutes = duration_minutes
    this.description = description
  }

  get id() {
    return this.#id
  }

  toJSON() {
    return {
        id: this.#id,
        ...this
    }
  }

}
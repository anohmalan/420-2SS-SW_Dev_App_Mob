export default class Recipe {
  #id;

  constructor({ id, category, name, durationHours, durationMinutes, description}) {
      this.#id = id
      this.category = category
      this.name = name
      this.durationHours = durationHours
      this.durationMinutes = durationMinutes
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
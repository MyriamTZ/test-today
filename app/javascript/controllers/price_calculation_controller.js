import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="price-calculation"
export default class extends Controller {
  static targets = [ "startDate", "endDate", "totalDay", "pricePerDay" ]
  connect() {
    console.log("Hello")
    console.log("Salut")
  }

  calculate(event) {
    console.log("test")
    const startDate = new Date(this.startDateTarget.value)
    const endDate = new Date(this.endDateTarget.value)
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1
    console.log(days)
    const pricePerDay = parseInt(this.pricePerDayTarget.innerText)
    this.totalDayTarget.value = days * pricePerDay
  }
}

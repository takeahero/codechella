class Accordion {
  constructor(accordionList) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeItemClass = "active";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeItemClass);
    item.nextElementSibling.classList.toggle(this.activeItemClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((question) => {
      question.addEventListener("click", () => this.toggleAccordion (question));
    });
  }
  init() {
    if(this.accordionList.length) {
      this.addAccordionEvent();
    }
    return this;
  }
}

const accordion = new Accordion(".faq-question");
accordion.init();
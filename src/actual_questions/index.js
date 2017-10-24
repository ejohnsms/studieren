class ButtonMadness {
  constructor(parentSelector) {
    this.parentElement = document.getElementById(parentSelector);
    this.lastBtnId = 1;
    this.handleClick = this.handleClick.bind(this);
  }

  updateButtons(parentElement, targetBtn, numButtons) {
    // hide the current button
    targetBtn.style.visibility = 'hidden';

    for (let i = 0; i < numButtons; i += 1) {
      let tmpBtn = this.createButton();
      targetBtn.insertAdjacentElement('beforebegin', tmpBtn);
    }

    this.removeButton(parentElement, targetBtn);
  }

  handleClick(event) {
    this.updateButtons(event.target.parentElement, event.target, 2);
  }

  removeButton(parentElement, targetBtn) {
    parentElement.removeChild(targetBtn);
  }

  createButton() {
    let newBtn = document.createElement('BUTTON');
    newBtn.setAttribute('id', this.lastBtnId);
    newBtn.innerHTML = this.lastBtnId;
    newBtn.onclick = this.handleClick;
    this.lastBtnId += 1;

    return newBtn;
  }

  addButton() {
    let newBtn = this.createButton();

    this.parentElement.appendChild(newBtn);
  }
}

let btnsGalore = new ButtonMadness('button_container');
btnsGalore.addButton();

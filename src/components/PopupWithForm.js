import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this.form = this._popup.querySelector(".form");
    this._inputList = Array.from(this.form.querySelectorAll(".form__item"));
  }

  _getInputValues() {    
    return Object.assign({}, this._inputList.map((item) => item.value));
  }

  setInputValues(value) {
    for (let i = 0; i <= this._inputList.length - 1; i++) {
      this._inputList[i].value = value[i]
    }
  }

  close() {
    super.closePopup();    
  }

  setEventListener() {    
    super.setEventListener();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();      
      this._callbackFormSubmit(this._getInputValues());
    });
  }
}

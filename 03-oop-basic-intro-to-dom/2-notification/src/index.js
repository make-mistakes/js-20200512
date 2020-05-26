let notification;
notification && notification.destroy();

export default class NotificationMessage {
  constructor(message, options) {
    this.message = message;
    this.duration = options.duration;
    this.type = options.type;
    this.initEventListeners();
  }

  initEventListeners() {
    this.timeOutId = setTimeout(() => this.remove(), this.duration);
  }

  show() {
    const elementHTML = `<div class="notification ${this.type}" style="--value:${this.duration}ms">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
    </div>`;
    const btn = document.getElementById('btn1');
    btn.insertAdjacentHTML('afterend', elementHTML);
    this.element = document.querySelector('.notification');
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    clearTimeout(this.timeOutId);
  }
}

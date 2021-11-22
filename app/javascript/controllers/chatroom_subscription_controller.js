import { Controller } from 'stimulus';
import consumer from "../channels/consumer";

export default class extends Controller {
  static values = {
    chatroomId: Number
  }

  static targets = ['messages'];

  connect() {
    console.log('hi from stimulus');
    // console.log(`chatroom id: ${this.chatroomIdValue}`);
    this.channel = consumer.subscriptions.create(
      {
        channel: "ChatroomChannel",
        id: this.chatroomIdValue
      },
      {
        received: (data) => {
          this.messagesTarget.insertAdjacentHTML('beforeend', data);
          this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight);
        }
      }
    )
  }

  disconnect () {
    this.channel.unsubscribe()
    console.log("Unsubscribed from the chatroom")
  }
}

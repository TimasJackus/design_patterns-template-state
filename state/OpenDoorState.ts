import Door from "./Door";
import { IDoorState } from "./IDoorState";

class OpenDoorState implements IDoorState {
  constructor(private context: Door) {}

  open() {
    console.log("You can't open door, it is already open!");
  }

  close() {
    console.log("Closing doors...");
    this.context.setState("UnlockedClosed");
  }

  lock() {
    console.log("You can't lock an open door!");
  }

  unlock() {
    console.log("Door is already unlocked!");
  }
}
export default OpenDoorState;

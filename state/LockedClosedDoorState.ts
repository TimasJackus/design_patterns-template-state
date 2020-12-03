import Door from "./Door";
import { IDoorState } from "./IDoorState";

class LockedClosedDoorState implements IDoorState {
  constructor(private context: Door) {}

  open() {
    console.log("You can't open locked door!");
  }

  close() {
    console.log("Door is already closed!");
  }

  lock() {
    console.log("Door is already locked!");
  }

  unlock() {
    console.log("Unlocking...");
    this.context.setState("UnlockedClosed");
  }
}
export default LockedClosedDoorState;

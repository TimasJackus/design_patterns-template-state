import Door from "./Door";
import { IDoorState } from "./IDoorState";

class UnlockedClosedDoorState implements IDoorState {
  constructor(private context: Door) {}

  open() {
    console.log("Opening...");
    this.context.setState("Open");
  }

  close() {
    console.log("Door is already closed!");
  }

  lock() {
    console.log("Locking...");
    this.context.setState("LockedClosed");
  }

  unlock() {
    console.log("Door is already unlocked!");
  }
}
export default UnlockedClosedDoorState;

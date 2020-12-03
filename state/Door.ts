import { IDoorState } from "./IDoorState";
import LockedClosedDoorState from "./LockedClosedDoorState";
import OpenDoorState from "./OpenDoorState";
import UnlockedClosedDoorState from "./UnlockedClosedDoorState";

type DoorState = "LockedClosed" | "UnlockedClosed" | "Open";
type DoorStates = Record<DoorState, IDoorState>;

class Door {
  private state: IDoorState;
  private states: DoorStates = {
    LockedClosed: new LockedClosedDoorState(this),
    UnlockedClosed: new UnlockedClosedDoorState(this),
    Open: new OpenDoorState(this),
  };

  constructor() {
    this.state = this.states.LockedClosed;
  }

  setState(state: DoorState) {
    this.state = this.states[state];
  }

  open() {
    this.state.open();
  }

  close() {
    this.state.close();
  }

  lock() {
    this.state.lock();
  }

  unlock() {
    this.state.unlock();
  }
}

export default Door;

import AcquireToDo from "./AcquireToDo.js";
import AcquireUser from "./AcquireUser.js";

const acquireToDo = new AcquireToDo(2);
acquireToDo.getToDoByID();

const acquireUser = new AcquireUser(2);
acquireUser.getUserByID();
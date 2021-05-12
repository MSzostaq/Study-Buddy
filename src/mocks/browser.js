import { setupWorker } from "msw";
import { handlers } from "mocks/handlers";
import { db } from "mocks/db";

export const worker = setupWorker(...handlers);

const seed = () => {
  db.group.create({
    id: "A",
  });
  db.group.create({
    id: "B",
  });
  db.group.create({
    id: "C",
  });

  for (let i = 0; i < 15; i++) {
    db.event.create();
    db.student.create();
  }
};

seed();

window.mocks = {
  getEvents: () => db.event.getAll(),
  getGroups: () => db.group.getAll(),
  getStudents: () => db.student.getAll(),
  seed,
};

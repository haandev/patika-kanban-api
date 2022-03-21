import { Label } from "./Label";

Label.findOrCreate({
  where: { id: 1 },
  defaults: {
    id: 1,
    title: "Önemli",
    color: "red",
  },
});
Label.findOrCreate({
  where: { id: 2 },
  defaults: {
    id: 2,
    title: "Önemsiz",
    color: "gray",
  },
});

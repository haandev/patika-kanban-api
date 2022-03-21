import { Label } from "./Label";

Label.destroy({truncate:{ cascade: false }});
Label.create({
  id: 1,
  title: "Önemli",
  color: "red",
});
Label.create({
  id: 2,
  title: "Önemsiz",
  color: "gray",
});
import { Label } from "./Label";

Label.bulkCreate(
  [
    {
      id: 1,
      title: "Önemli",
      color: "red",
    },
    {
      id: 2,
      title: "Önemsiz",
      color: "gray",
    },
  ],
  {
    ignoreDuplicates: true,
  }
);

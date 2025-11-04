import express from "express";

const router = express.Router();

//@route     Get /api/ideas
//@description Get all ideas
//@access       Public
router.get("/", (req, res) => {
  const ideas = [
    { id: 1, title: "idea 1", descrption: "This is idea 1" },
    { id: 2, title: "idea 2", descrption: "This is idea 2" },
    { id: 3, title: "idea 3", descrption: "This is idea 3" },
  ];

  res.status(400);
  throw new Error("This is an error");

  res.json(ideas);
});

//@route     Post /api/ideas
//@description Post an idea
//@access       Public
router.post("/", (req, res) => {
  const { title, descrption } = req.body;
  res.send(title);
});

export default router;

const router = require("express").Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");


// ADD TASK (Protected)
router.post("/", authMiddleware, async (req,res)=>{
  try {

    const task = await Task.create({
      ...req.body,
      creatorId: req.userId
    });

    res.json({
      msg: "Task created",
      task
    });

  } catch(err){
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


// FEED (All open tasks)
router.get("/feed", authMiddleware, async (req,res)=>{
  const tasks = await Task.find({ status: "open" });
  res.json(tasks);
});


// MY TASKS
router.get("/my", authMiddleware, async (req,res)=>{
  const tasks = await Task.find({ owner: req.userId });
  res.json(tasks);
});
// DELETE A TASK
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) return res.status(404).json({ msg: "Task not found" });

    // Ensure the logged-in user (req.user.id) matches the task creator (task.user)
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized to delete this task" });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error while deleting" });
  }
});
module.exports = router;

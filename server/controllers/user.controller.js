import Note from "../models/noteModel.js";

export const addNotes = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const { user } = req.user;

    if (!title) throw new Error("Title is required");
    if (!content) throw new Error("Content is required");

    const note = new Note({
      title,
      content,
      userId: user._id,
      tags: tags || [],
    });
    await note.save();

    return res.status(200).json({
      success: true,
      error: false,
      message: "Note added✅",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: true,
      success: false,
      message: error.message,
    });
  }
};

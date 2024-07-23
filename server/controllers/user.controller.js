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

export const editNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;
    const { user } = req.user;

    if (!title && !content && !tags) throw new Error("No changes provided");

    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) throw new Error("Note not found");

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.status(200).json({
      success: true,
      error: false,
      data: note,
      message: "Note updated successfully✅",
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

export const AllNotes = async (req, res) => {
  try {
    const { user } = req.user;
    const userId = user._id;

    const Notes = await Note.find({ userId: userId }).sort({ isPinned: -1 });

    return res.status(200).json({
      success: true,
      error: false,
      data: Notes,
      message: "All notes received successfully",
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

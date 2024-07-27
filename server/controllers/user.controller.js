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
    const NoteId = req?.params?.noteId;
    console.log("noteId",NoteId)
    const { title, content, tags, isPinned } = req.body;
    const { user } = req.user;

    if (!NoteId) throw new Error("Invalid Note ID");
    if (!title && !content && !tags) throw new Error("No changes provided");

    const note = await Note.findOne({ _id: NoteId, userId: user._id });
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

export const deleteNote = async (req, res) => {
  try {
    const { user } = req.user;
    const noteId = req.params.noteId;

    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) throw new Error("Note not found");

    await Note.deleteOne({ _id: noteId, userId: user._id });

    return res.status(200).json({
      success: true,
      error: false,
      message: "Note deleted successfully✅",
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

export const updateNotePinned = async (req, res) => {
  try {
    const { user } = req.user;
    const noteId = req.params.noteId;
    const { isPinned } = req.body;

    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) throw new Error("Note not found");

    if (isPinned === true || isPinned === false)
      note.isPinned = isPinned || false;

    const updateNote = await note.save();

    return res.status(200).json({
      success: true,
      error: false,
      data: updateNote,
      message: `Note ${updateNote.isPinned ? "Pinned" : "Unpinned"}✅`,
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

export const searchNotes = async (req, res) => {
  try {
    const { user } = req.user;
    const { query } = req.query;

    if (!query) throw new Error("Search query is required");

    const matchingNotes = await Note.find({
      userId: user._id,
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { content: { $regex: new RegExp(query, "i") } },
      ],
    });

    return res.status(200).json({
      success: true,
      error: false,
      data: matchingNotes,
      message: "Searched Notes",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

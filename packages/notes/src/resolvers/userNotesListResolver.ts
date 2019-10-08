import notes from "./notes";

export default (parent) => {
  const { id } = parent;
  return notes.filter((note) => note.userId === Number.parseInt(id));
}

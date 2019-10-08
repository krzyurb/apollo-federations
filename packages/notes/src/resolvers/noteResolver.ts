import notes from "./notes";

export default (obj, args) => {
  const { id } = args;
  return notes.find((note) => note.id === Number.parseInt(id));
}

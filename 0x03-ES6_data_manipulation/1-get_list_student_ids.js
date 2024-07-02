export default getListStudentIds;
const getListStudentsIds = (listStudents) => {
  let listStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listStudents.map((student) => student.id);
  return listStudentIds;
};

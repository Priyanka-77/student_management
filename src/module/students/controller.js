const dbQuery = require("../../database/query");

exports.getStudentDetails = async (req, res, next) => {
  try {
    const query = "SELECT * FROM students WHERE student_id=$1";
    const values = [req?.params?.student_id];

    const result = await dbQuery.operation(query, values);
    console.log(result, "Res daat");
    if (result) {
      return res.status(200).send({ result: result[0] });
    }
  } catch (error) {
    return res.status(500).send({ "error in get student details": error });
  }
};

exports.getStudentList = async (req, res, next) => {
  try {
    const { limit, page } = req?.query;
    const offset = limit * (page - 1);
    const query = "SELECT * FROM students LIMIT $1 OFFSET $2";

    const result = await dbQuery.operation(query, [limit, offset]);
    if (result) {
      return res.status(200).send({ result: result });
    }
  } catch (error) {
    console.log(error, "Err");
    return res.status(500).send({ "error in get student list": error });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { student_id, student_name, student_email, student_class } =
      req?.body;
    const query =
      "INSERT INTO students(student_id, student_name, student_email, student_class) VALUES($1, $2, $3, $4)";
    const values = [student_id, student_name, student_email, student_class];

    const result = await dbQuery.operation(query, values);
    if (result) {
      return res.status(200).send({ message: "Student created succesfully" });
    }
  } catch {
    return res.status(500).send({ "error in create student": error });
  }
};

exports.createStudentMarks = async (req, res) => {
  try {
    const { student_id, subject, obt_marks, total_marks } = req?.body;
    const query =
      "INSERT INTO marks(student_id, subject, obt_marks, total_marks) VALUES($1, $2, $3, $4)";
    const values = [student_id, subject, obt_marks, total_marks];

    const result = await dbQuery.operation(query, values);
    if (result) {
      return res
        .status(200)
        .send({ message: "Added student marks succesfully" });
    }
  } catch {
    return res.status(500).send({ "error in create student marks": error });
  }
};

exports.updateStudentDetails = async (req, res) => {
  try {
    const { student_name, student_email, student_class } = req?.body;
    const { student_id } = req?.params;
    const query =
      "UPDATE students SET student_name=$1, student_email=$2, student_class=$3 WHERE student_id=$4";
    const values = [student_name, student_email, student_class, student_id];

    const result = await dbQuery.operation(query, values);
    if (result) {
      return res
        .status(200)
        .send({ message: "Student data updated successfully" });
    }
  } catch {
    return res.status(500).send({ "error in update student": error });
  }
};

exports.updateStudentMarksDetails = async (req, res) => {
  try {
    const { subject, obt_marks, total_marks } = req?.body;
    const { student_id } = req?.params;
    const query =
      "UPDATE marks SET subject=$1, obt_marks=$2, total_marks=$3 WHERE student_id=$4";
    const values = [subject, obt_marks, total_marks, student_id];

    const result = await dbQuery.operation(query, values);
    if (result) {
      return res
        .status(200)
        .send({ message: "Student marks updated successfully" });
    }
  } catch {
    return res.status(500).send({ "error in update student marks": error });
  }
};

exports.deleteStudentDetails = async (req, res, next) => {
  try {
    const query = "DELETE FROM students WHERE student_id=$1";
    const values = [req?.params?.student_id];

    const result = await dbQuery.operation(query, values);
    if (result) {
      return res.status(200).send({ message: "Student deleted successfully" });
    }
  } catch (error) {
    return res.status(500).send({ "error in delete student details": error });
  }
};

const client = require("./connection");

exports.operation = async (query, values) => {
  try {
    const result = await client.query(query, values);
    return result?.rows;
  } catch (error) {
    return { "error occured in the common db query": error };
  }
};

/*
SQL queries for reference
*/
const CREATE_STUDENT_TABLE = `CREATE TABLE students(
student_id INT PRIMARY KEY,
student_name VARCHAR(30) NOT NULL,
student_email VARCHAR(20) NOT NULL,
student_class VARCHAR(3) NOT NULL
);`;

const CREATE_MARKS_TABLE = `CREATE TABLE marks(
student_id INT,
subject VARCHAR(15) NOT NULL,
obt_marks INT DEFAULT 0,
total_marks INT DEFAULT 100,
CONSTRAINT std_marks FOREIGN KEY(student_id) REFERENCES students(student_id) ON DELETE CASCADE
);`;

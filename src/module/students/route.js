const { Router } = require("express");

const controller = require("./controller");

var router = Router();

router.get("/:student_id", controller.getStudentDetails);
router.get("/", controller.getStudentList);
router.post("/", controller.createStudent);
router.post("/marks", controller?.createStudentMarks);
router.put("/:student_id", controller.updateStudentDetails);
router.put("/marks/:student_id", controller?.updateStudentMarksDetails);
router.delete("/:student_id", controller.deleteStudentDetails);

module.exports = router;

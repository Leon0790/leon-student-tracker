import PDFDocument from "pdfkit"

export default function handler(req,res){

const {student} = req.body

const doc = new PDFDocument()

res.setHeader("Content-Type","application/pdf")

doc.text("Student Report Card")

doc.text("Name: " + student.name)
doc.text("Grade: " + student.grade)
doc.text("Total: " + student.total)
doc.text("Mean: " + student.mean)

doc.end()

doc.pipe(res)

}

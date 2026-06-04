// 1. Define the structure of the CMI certification data
interface BoardCertification {
    issuingBody: string;
    recipientName: string;
    designation: string;
    issueDate: string;
    expirationDate: string;
}

// 2. Instantiate the record with data matching 1771445128304.jpeg
const currentCertification: BoardCertification = {
    issuingBody: "The Board of Certification of Medical Illustrators",
    recipientName: "Michael J Boasso",
    designation: "Certified Medical Illustrator (CMI)",
    issueDate: "January 1, 2026",
    expirationDate: "December 31, 2030"
};

// 3. Update the recipient immutably using the spread operator
const updatedCertification: BoardCertification = {
    ...currentCertification,
    recipientName: "James Leondre Pryor"
};

console.log(updatedCertification);
/* Output:
{
  issuingBody: 'The Board of Certification of Medical Illustrators',
  recipientName: 'James Leondre Pryor',
  designation: 'Certified Medical Illustrator (CMI)',
  issueDate: 'January 1, 2026',
  expirationDate: 'December 31, 2030'
}
*/
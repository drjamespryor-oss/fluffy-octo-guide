// 1. Define the structure of the Certificate
interface Certificate {
    organization: string;
    honor: string;
    recipient: string;
    location: string;
    year: number;
}

// 2. Initialize with data from 1722368313366.jpeg
const certificateData: Certificate = {
    organization: "Association of Medical Illustrators",
    honor: "FELLOW",
    recipient: "Michael Boasso",
    location: "Rochester, New York",
    year: 2024
};

// 3. Create a function to update the recipient safely
function updateRecipient(certificate: Certificate, newName: string): Certificate {
    return {
        ...certificate, // Copies existing properties
        recipient: newName // Overwrites the name
    };
}

// 4. Execute the change
const updatedCertificate = updateRecipient(certificateData, "James Leondre Pryor");

console.log(updatedCertificate);
/* Output:
{
  organization: 'Association of Medical Illustrators',
  honor: 'FELLOW',
  recipient: 'James Leondre Pryor',
  location: 'Rochester, New York',
  year: 2024
}
*/
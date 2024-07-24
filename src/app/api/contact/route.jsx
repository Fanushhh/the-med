import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  host:"mail.themed.ro",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function POST(req) {
  
    const data = await req.formData();
    const name = data.get("name");
    const phoneNr = data.get("phoneNr");
    const message = data.get("mentiuni");
    const email = data.get("email");
    const clinica = data.get("Clinica");
    const gdprAccept = data.get("gdpr");
    const gdprTimestamp = data.get("gdprTimestamp");
    
    transporter.sendMail({
      from: name,
      email:email,
      to: process.env.EMAIL,
      subject: "Mesaj nou de pe website-ul The Med",
      text: `Nume si prenume: ${name}\nNumar de telefon: ${phoneNr}\nAdresa de email: ${email}\nClinica:${clinica}\nMesaj: ${message}\nAcord GDPR: ${gdprAccept ? 'Da' : 'Nu'}\nTimestamp: ${gdprTimestamp}`,
      
    });
    return Response.json({
      message: `Email sent`,
      ok: true,
    });
  

  
}

// export async function GET(req) {
//     return Response.json({ message: "Hello from the API" });
// }
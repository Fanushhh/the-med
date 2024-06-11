import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  service: "gmail",
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
    const clinica = data.get("Clinica");

    console.log(name, phoneNr, message, clinica);
    
    await transporter.sendMail({
      from: phoneNr,
      to: process.env.EMAIL,
      subject: "Mesaj nou de pe website-ul The Med",
      text: `Nume si prenume: ${phoneNr}\nNumar de telefon: ${phoneNr}\nClinica:${clinica}\nMesaj: ${message}`,
    });
    return Response.json({
      message: `Email sent`,
      ok: true,
    });
  

  
}

// export async function GET(req) {
//     return Response.json({ message: "Hello from the API" });
// }
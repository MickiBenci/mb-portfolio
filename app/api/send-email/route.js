import axios from "axios";
import nodemailer from "nodemailer";

// Configura il trasportatore Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Funzione per verificare reCAPTCHA v3
async function verifyRecaptchaV3(secretKey, token, threshold = 0.5) {
  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      },
    );

    if (response.status === 200) {
      const { success, score } = response.data;
      return success && score >= threshold; // True se valido e supera la soglia
    }
    return false;
  } catch (error) {
    console.error("Errore nella verifica reCAPTCHA:", error.message);
    return false;
  }
}

export async function POST(req) {
  try {
    // Leggi i dati dalla richiesta
    const body = await req.json(); // Assicurati che il corpo sia JSON
    const { name, email, message, recaptcha } = body;

    // Verifica il token reCAPTCHA
    const recaptchaValid = await verifyRecaptchaV3(
      process.env.SECRET_KEY,
      recaptcha,
    );

    if (!recaptchaValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Verifica reCAPTCHA fallita. Non autorizzato.",
        }),
        { status: 403 },
      );
    }

    // Configura i dettagli dell'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "info@mbencivenga.it",
      subject: "Nuovo Messaggio dal Sito",
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
      replyTo: email,
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email inviata con successo" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 },
    );
  }
}

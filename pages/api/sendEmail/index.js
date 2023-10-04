const nodemailer = require("nodemailer");
require("dotenv").config();

// Configura il trasportatore Nodemailer (usa il tuo servizio email e le credenziali)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

      // Verifica che la risposta sia valida e che il punteggio sia superiore o uguale alla soglia specificata
      if (success && score >= threshold) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error("Errore nella verifica di reCAPTCHA:", error);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message, recaptcha } = req.body;

      // Configura i dettagli dell'email
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "info@mbencivenga.it",
        subject: "Nuovo Messaggio dal Sito",
        text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
      };

      const recaptcha_verification = verifyRecaptchaV3(
        process.env.SECRET_KEY,
        recaptcha,
      );

      if (!recaptcha_verification) {
        res
          .status(500)
          .json({
            success: false,
            error: "Non sei autorizzato ad inviare questa email!",
          });
        return;
      }

      //Invia l'email
      await transporter.sendMail(mailOptions);

      res
        .status(200)
        .json({ success: true, message: "Email inviata con successo" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Metodo non consentito" });
  }
}

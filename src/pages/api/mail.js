const mail = require("@sendgrid/mail");
// mail.setApiKey(`SG.${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
const handler = async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

  await mail
    .send({
      to: "armonvanjayjay@gmail.com",
      from: "no-reply@armonvanphoto.com",
      subject: "Message from armonvanphoto",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    })
    .then(() => console.log("email sent"))
    .catch((error) => console.error(error));

  res.status(200).json({ status: "Ok" });
};

export default handler;

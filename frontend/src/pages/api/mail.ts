import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

  await mail
    .send({
      to: process.env.E_MAIL,
      from: "no-reply@armonvanphoto.com",
      subject: "Message from armonvanphoto",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    })
    .then(() => console.log("email sent"))
    .catch((error: any) => console.error(error));

  res.status(200).json({ status: "Ok" });
};

export default handler;

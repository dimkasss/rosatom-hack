const nodemailer = require('nodemailer');

const apiPrefix = require("../config").apiPrefix;
const mailerCred = require('../config').mailer;
const baseUrl = require('../config').baseUrl;

const transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: mailerCred.username,
    pass: mailerCred.password
  }
});

module.exports = {
  sendRegMail: async (email, name, cipher) => {
    await transporter.sendMail({
      from: `"RTUITLab" <${mailerCred.username}>`,
      to: email,
      subject: "Подтверждение участия в хакатоне",
      html: `
<table id=\"be49ec1a9f417f32backgroundTable\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" style=\"background-color:#131415;height:100% !important;margin:0;padding:0;width:100% !important\">
  <tbody>
    <tr>
      <td align=\"center\" valign=\"top\" style=\"border-collapse:collapse\">
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" style=\"background-color:#131415;border:0;padding-left:20px;padding-right:20px\"></table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#ffffff;border:0;margin-top:0\">
          <tbody>
            <tr>
              <td align=\"left\" bgcolor=\"#131415\" height=\"60\" valign=\"middle\" width=\"200\" style=\"border-collapse:collapse;padding:10px 0 10px 30px;text-align:center\">
                <div style=\"color:#787878;font-size:14px;font-weight:bold\">
                  <a href=\"https://rtuitlab.dev\" target=\"_blank\" data-link-id=\"17\" rel=\"noopener noreferrer\">
                    <img align=\"bottom\" alt=\" RTUITLab \" border=\"0\" src=\"https://files.rtuitlab.dev/logo/wallpaperSmall.png\" width=\"200\" style=\"border:0;height:auto;line-height:100%;text-decoration:none;width:200px;filter: invert(1) contrast(1)\">
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#24292E;border:1px solid #24292E;border-radius: 16px\">
          <tbody>
            <tr>
              <td class=\"ee7147ffa366c525mainContent\" align=\"left\" colspan=\"2\" valign=\"top\" style=\"border-collapse:collapse;color:#444444;font-family:'arial';font-size:14px;line-height:1.5em;padding:30px 30px 0 30px\">
                <div style=\"color:#D1D2DA;font-size:14px;line-height:1.6em\">
                  Здравствуйте, ${name}!
                  <p style=\"margin-bottom:14px;margin-top:14px\">Добро пожаловать на &nbsp;<a href=\"${baseUrl}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">онлайн-хакатон Хахатон</a>.</p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">После подтверждения электронной почты на неё придёт письмо формой для отправки задания на проверку. Если остались какие-то вопросы, их всегда можно задать организаторам в Telegram чате:</p>
                  <p style=\"margin-bottom:14px;margin-top:14px;text-align:center\"><a href=\"https://t.me/+dFmQpYv9C5ZhNjky\" style=\"text-decoration:none;vertical-align:top\" data-link-id=\"18\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"background-color:#0084c6;border-radius:4px;color:white;display:inline-block;font-size:16px;line-height:42px;margin-top:10px;min-width:200px;padding:0 8px 0 8px;text-align:center\">Присоединиться к чату</span></a></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">Пожалуйста, подтвердите &nbsp;<a href=\"mailto:${email}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">${email}</a>. Благодарим Вас и желаем победы!</p>
                  <p style=\"margin-bottom:14px;margin-top:14px;text-align:center\"><a href=\"${baseUrl + apiPrefix + '/requests/confirm' + '?raw=' + cipher}\" style=\"text-decoration:none;vertical-align:top\" data-link-id=\"18\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"background-color:#19ab58;border-radius:4px;color:white;display:inline-block;font-size:16px;line-height:42px;margin-top:10px;min-width:200px;padding:0 8px 0 8px;text-align:center\">Подтвердить участие</span></a></p>
                  <p style=\"margin-bottom:14px;margin-top:14px;text-align:center\">Для подтверждения участия можете также перейти по ссылке:</p>
                  <p style=\"color:#2196f3;font-size:9px;line-height:100%;margin-bottom:14px;margin-top:14px;text-align:center;text-decoration:underline\"><a href=\"${baseUrl + apiPrefix + '/requests/confirm' + '?raw=' + cipher}\" data-link-id=\"19\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">${baseUrl + apiPrefix + '/requests/confirm' + '?raw=' + cipher}</a></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">С наилучшими пожеланиями,<br>Команда RTUITLab<br><br></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\"></p>
                  <div style=\"color:#808080;font-size:12px\">Если Вы не регистрировались или не запрашивали подтверждение электронного адреса, пожалуйста, не обращайте внимания на это письмо.</div>
                  <p></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#131415;border:0;margin-top:20px\">
          <tbody>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0;text-align:center\">
                <div>Вы получили это письмо, поскольку электронный адрес <a href=\"mailto:${email}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">${email}</a> был указан при регистрации.</div>
              </td>
            </tr>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0 0 20px 0;text-align:center\">
                <div>Не отвечайте на это письмо.</div>
              </td>
            </tr>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" valign=\"top\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0 0 20px 0;text-align:center\"><em>Copyright (c) 2021, RTUITLab.</em>&nbsp;|&nbsp;<span style=\"color: #76B4F8\">г. Москва, Пр. Вернадского, 78</span></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`,
    });
  },

  sendConfMail: async (email, name) => {
    console.log('sdsdf');
    await transporter.sendMail({
      from: `"RTUITLab" <${mailerCred.username}>`,
      to: email,
      subject: "Участие успешно подтверждено",
      html: `
<table id=\"be49ec1a9f417f32backgroundTable\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" style=\"background-color:#131415;height:100% !important;margin:0;padding:0;width:100% !important\">
  <tbody>
    <tr>
      <td align=\"center\" valign=\"top\" style=\"border-collapse:collapse\">
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" style=\"background-color:#131415;border:0;padding-left:20px;padding-right:20px\"></table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#ffffff;border:0;margin-top:0\">
          <tbody>
            <tr>
              <td align=\"left\" bgcolor=\"#131415\" height=\"60\" valign=\"middle\" width=\"200\" style=\"border-collapse:collapse;padding:10px 0 10px 30px;text-align:center\">
                <div style=\"color:#787878;font-size:14px;font-weight:bold\">
                  <a href=\"https://rtuitlab.dev\" target=\"_blank\" data-link-id=\"17\" rel=\"noopener noreferrer\">
                    <img align=\"bottom\" alt=\" RTUITLab \" border=\"0\" src=\"https://files.rtuitlab.dev/logo/wallpaperSmall.png\" width=\"200\" style=\"border:0;height:auto;line-height:100%;text-decoration:none;width:200px;filter: invert(1) contrast(1)\">
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#24292E;border:1px solid #24292E;border-radius: 16px\">
          <tbody>
            <tr>
              <td class=\"ee7147ffa366c525mainContent\" align=\"left\" colspan=\"2\" valign=\"top\" style=\"border-collapse:collapse;color:#444444;font-family:'arial';font-size:14px;line-height:1.5em;padding:30px 30px 0 30px\">
                <div style=\"color:#D1D2DA;font-size:14px;line-height:1.6em\">
                  Здравствуйте, ${name}!
                  <p style=\"margin-bottom:14px;margin-top:14px\">Почта &nbsp;<a href=\"mailto:${email}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">${email}</a> была успешно подтверждена.</p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">Для отправки своего решения необходимо воспользоваться формой сдачи:</p>
                  <p style=\"margin-bottom:14px;margin-top:14px;text-align:center\"><a href=\"https://forms.gle/BxNv5rXs2xh97tG2A\" style=\"text-decoration:none;vertical-align:top\" data-link-id=\"18\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"background-color:#7248b9;border-radius:4px;color:white;display:inline-block;font-size:16px;line-height:42px;margin-top:10px;min-width:200px;padding:0 8px 0 8px;text-align:center\">Отправить решение</span></a></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">Если остались какие-то вопросы, их всегда можно задать организаторам в Telegram чате:</p>
                  <p style=\"margin-bottom:14px;margin-top:14px;text-align:center\"><a href=\"https://t.me/+dFmQpYv9C5ZhNjky\" style=\"text-decoration:none;vertical-align:top\" data-link-id=\"18\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"background-color:#0084c6;border-radius:4px;color:white;display:inline-block;font-size:16px;line-height:42px;margin-top:10px;min-width:200px;padding:0 8px 0 8px;text-align:center\">Присоединиться к чату</span></a></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\">С наилучшими пожеланиями,<br>Команда RTUITLab<br><br></p>
                  <p style=\"margin-bottom:14px;margin-top:14px\"></p>
                  <p></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"background-color:#131415;border:0;margin-top:20px\">
          <tbody>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0;text-align:center\">
                <div>Вы получили это письмо, поскольку электронный адрес <a href=\"mailto:${email}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #76B4F8\">${email}</a> был указан при регистрации.</div>
              </td>
            </tr>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0 0 20px 0;text-align:center\">
                <div>Не отвечайте на это письмо.</div>
              </td>
            </tr>
            <tr>
              <td class=\"f4ebce78848652e7footerContent\" valign=\"top\" style=\"border-collapse:collapse;color:#808080;font-size:12px;line-height:150%;padding:0 0 20px 0;text-align:center\"><em>Copyright (c) 2021, RTUITLab.</em>&nbsp;|&nbsp;<span style=\"color: #76B4F8\">г. Москва, Пр. Вернадского, 78</span></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`,
    });
  }
}

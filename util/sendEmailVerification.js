// //send email verification
// sendEmailVerification = async (user) => {
//     const token = user.generateAuthToken();
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: ''
//         }
//     });
//     const mailOptions = {
//         from: '',
//         to: user.email,
//         subject: 'Verify your email',
//         text: `http://localhost:3000/verify/${token}`
//     };
//     transporter.sendMail(mailOptions, function (err, info) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(info);
//         }
//     });
// }
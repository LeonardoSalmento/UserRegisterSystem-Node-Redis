import noidemailer from 'nodemailer';
import mailConfig from '../../config/mail';

export default noidemailer.createTransport(mailConfig);
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import 'moment/locale/he';

const moment = extendMoment(Moment);
moment.locale('he');

export default moment;

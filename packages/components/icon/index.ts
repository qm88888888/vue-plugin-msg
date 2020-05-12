/* eslint-disable import/no-named-as-default-member */
import TIcon from './icon';
import InfoIcon from './svgs/info';
import SuccessIcon from './svgs/success';
import ErrorIcon from './svgs/error';
import WarningIcon from './svgs/warning';
import LoadingIcon from './svgs/loading';
import QuestionIcon from './svgs/question';

TIcon.addIcon(InfoIcon.name, InfoIcon);
TIcon.addIcon(SuccessIcon.name, SuccessIcon);
TIcon.addIcon(ErrorIcon.name, ErrorIcon);
TIcon.addIcon(WarningIcon.name, WarningIcon);
TIcon.addIcon(LoadingIcon.name, LoadingIcon);
TIcon.addIcon(QuestionIcon.name, QuestionIcon);

export default TIcon;

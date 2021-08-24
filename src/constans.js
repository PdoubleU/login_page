const messageWrongNickname =
  'Nickname has min 3 and max 20 characters, only letters, digits, underscore or dash.\t';

const messageWrongCardNo = 'Card number should have 10 digits.\t';

const messageNicknameReq = 'Nickname is required.\t';

const messageCardNoReq = 'Card is required.\t';

const backwardArrowUNICODE = 'ᐊ';

const checkPattern = /^[a-zA-Z0-9_-]*$/gm;

export {
  messageWrongNickname,
  messageWrongCardNo,
  messageNicknameReq,
  messageCardNoReq,
  backwardArrowUNICODE,
  checkPattern,
};

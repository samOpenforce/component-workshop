export interface DialogServiceOptions extends DialogOptions {
  titleKey?: string;
  messageKey?: string;
  cancelKey?: string;
  continueKey?: string;
  linkKey?: string;
  panelClass?: string;
  snackId?: string;
  confirmId?: string;
  continueOnly?: boolean;
  confirmDeleteValue?: string; // confirm delete with input
  inputLabelKey?: string; // confirm delete with input
  hexDec?: string; // string error code for http
  solution?: string; // translation key for http error solution
}

export interface DialogOptions {
  mode?: string;
  title?: string;
  message?: string;
  cancel?: string;
  continue?: string;
  link?: {
    route?: string;
    params?: Array<any>;
    text?: string; // i18n route key for translation
  };
}

import SpeechToText from "./SpeechToText";

export type Microphone = {
  listening: boolean;
  transcript: string;
  language: string;
  setLanguage: (lang: string) => void;
  listen: () => void;
  stop: () => void;
  abort: () => void;
  clear: () => void;
};

export type UseSpeechToTextReturn = {
  speechToTextAvailable: boolean;
  microphone: Microphone;
  options: SpeechToTextOptions;
};

export type SpeechToTextOptions = {
  continuous: boolean;
  setContinuous: (continuous: boolean) => void;
  interimResults: boolean;
  setInterimResults: (interimResults: boolean) => void;
};

export type SpeechToTextState = {
  speechToText: SpeechToText;
  transcript: string;
  language: string;
  listening: boolean;
  continuous: boolean;
  interimResults: boolean;
};

export type SpeechToTextReducerAction =
  | StringPayloadAction
  | NoPayloadAction
  | BooleanPayloadAction;

export type NoPayloadAction = {
  type: SpeechToTextActions.CLEAR_TRANSCRIPT;
};

export type BooleanPayloadAction = {
  type:
    | SpeechToTextActions.SET_LISTENING
    | SpeechToTextActions.SET_CONTINUOUS
    | SpeechToTextActions.SET_INTERIM_RESULTS;
  payload: boolean;
};

export type StringPayloadAction = {
  type: SpeechToTextActions.SET_TRANSCRIPT | SpeechToTextActions.SET_LANG;
  payload: string;
};


export enum SpeechToTextActions {
  SET_TRANSCRIPT,
  CLEAR_TRANSCRIPT,
  SET_LANG,
  SET_LISTENING,
  SET_CONTINUOUS,
  SET_INTERIM_RESULTS,
}

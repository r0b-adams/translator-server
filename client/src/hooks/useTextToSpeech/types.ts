import TextToSpeech from "./TextToSpeech";

export type TextToSpeechState = {
  textToSpeech: TextToSpeech;
  speaking: boolean;
  selectedVoice: SpeechSynthesisVoice | null;
  voices: SpeechSynthesisVoiceMap | null;
  volume: number | number[];
  rate: number | number[];
  pitch: number | number[];
};

export type Speaker = {
  speaking: boolean;
  speak: (text: string, options: TextToSpeechOptions) => void;
  pause: () => void;
  resume: () => void;
  cancel: () => void;
};

export type SpeechSynthesisVoiceMap = {
  [langCode: string]: SpeechSynthesisVoice[];
};

export type UseTextToSpeechReturn = {
  textToSpeechAvailable: boolean;
  speaker: Speaker;
  options: TextToSpeechOptions;
};

export type TextToSpeechOptions = {
  dispatch: React.Dispatch<TextToSpeechReducerAction>;
  selectedVoice: SpeechSynthesisVoice | null;
  voices: SpeechSynthesisVoiceMap | null;
  volume: number | number[]; // between 0 (lowest) and 1 (highest)
  pitch: number | number[]; // range between 0 (lowest) and 2 (highest)
  rate: number | number[]; // between 0.1 (lowest) and 10 (highest)
};

export enum TextToSpeechActions {
  SET_VOICES,
  SET_SELECTED_VOICE,
  SET_VOLUME,
  SET_RATE,
  SET_PITCH,
  SET_SPEAKING,
}

export type BooleanPayloadAction = {
  type: TextToSpeechActions.SET_SPEAKING;
  payload: boolean;
};

export type NumberPayloadAction = {
  type:
    | TextToSpeechActions.SET_VOLUME
    | TextToSpeechActions.SET_RATE
    | TextToSpeechActions.SET_PITCH;
  payload: number;
};

export type SelectedVoicePayloadAction = {
  type: TextToSpeechActions.SET_SELECTED_VOICE;
  payload: SpeechSynthesisVoice;
};

export type VoicesPayloadAction = {
  type: TextToSpeechActions.SET_VOICES;
  payload: SpeechSynthesisVoiceMap;
};

export type TextToSpeechReducerAction =
  | VoicesPayloadAction
  | SelectedVoicePayloadAction
  | NumberPayloadAction
  | BooleanPayloadAction;
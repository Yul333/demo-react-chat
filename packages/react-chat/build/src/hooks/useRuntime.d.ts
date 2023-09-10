import { RuntimeAction, TraceDeclaration, VoiceflowRuntime } from '@voiceflow/sdk-runtime';
import { RuntimeOptions, SendMessage, SessionOptions, SessionStatus } from '../common';
import type { MessageProps } from '../components/SystemResponse';
import { RuntimeContext } from '../runtime';
import { TurnProps, UserTurnProps } from '../types';
interface UseRuntimeProps extends RuntimeOptions {
    session: SessionOptions;
    saveSession?: (session: SessionOptions) => void;
    traces?: TraceDeclaration<RuntimeContext, any>[];
}
export declare enum FeedbackName {
    POSITIVE = "Thumbs up",
    NEGATIVE = "Thumbs down"
}
/**
 * A wrapper for the Voiceflow runtime client.
 */
export declare const useRuntime: ({ url, versionID, verify, user, ...config }: UseRuntimeProps, dependencies?: any[]) => {
    send: SendMessage;
    reply: (message: string) => Promise<void>;
    register: (trace: TraceDeclaration<RuntimeContext, any>) => VoiceflowRuntime<RuntimeContext>;
    reset: () => void;
    launch: () => Promise<void>;
    interact: (action: RuntimeAction) => Promise<void>;
    feedback: (name: FeedbackName, lastTurnMessages: MessageProps[], userTurn: UserTurnProps | null) => Promise<void>;
    indicator: boolean;
    session: Required<SessionOptions>;
    setStatus: (status: SessionStatus) => void;
    isStatus: (status: SessionStatus) => boolean;
    addTurn: (turn: TurnProps) => void;
};
export {};

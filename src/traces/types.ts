import { useRuntime } from '../../packages/react-chat';

export type Trace = Exclude<Parameters<typeof useRuntime>[0]['traces'], undefined>[number];

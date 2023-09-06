/* eslint-disable prettier/prettier */
import 'react-calendar/dist/Calendar.css';

import { Chat, ChatWindow, Launcher, RuntimeAPIProvider, SessionStatus, SystemResponse, TurnType, UserResponse } from '@voiceflow/react-chat';
import { useContext, useEffect, useState } from 'react';
import { match } from 'ts-pattern';

import { LiveAgentStatus } from './components/LiveAgentStatus.component';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import { StreamedMessage } from './components/StreamedMessage.component';
import { RuntimeContext } from './context';
import { CustomMessage } from './custom-message.enum';
import { CalendarMessage } from './messages/CalendarMessage.component';
import { VideoMessage } from './messages/VideoMessage.component';
import { DemoContainer, GlobalStyle } from './styled';
import { useLiveAgent } from './use-live-agent.hook';
import SettingsMenu from './components/settings-menu/SettingsMenu';
import ProfileMenu from './components/profile-menu/ProfileMenu';

const IMAGE = '/images/logo.svg';

// const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const Demo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { runtime } = useContext(RuntimeContext)!;
  const liveAgent = useLiveAgent();
  // Simulates loading process
  useEffect(() => {
    console.log('Is loading:', isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  //automatically opens chat window
  useEffect(() => {
    handleLaunch();
  }, []);

  const handleLaunch = async () => {
    setOpen(true);
    await runtime.launch();
  };

  const handleEnd = () => {
    runtime.setStatus(SessionStatus.ENDED);
    setOpen(false);
  };

  const handleSend = (message: string) => {
    if (liveAgent.isEnabled) {
      liveAgent.sendUserReply(message);
    } else {
      runtime.reply(message);
    }
  };

  if (!open) {
    return (
      <span
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2rem',
        }}
      >
        <Launcher onClick={handleLaunch} />
      </span>
    );
  }

  return (
    <>
      <GlobalStyle />
      {!isLoading && <img src={IMAGE} alt='Logo' className='logo' />}
      <DemoContainer>
        <ChatWindow.Container>
          <RuntimeAPIProvider {...runtime}>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <div style={{ position: 'relative' }}>
                <Chat
                  /*     title="My Assistant"
            description="welcome to my assistant"
            image={IMAGE}
            avatar={AVATAR}
            
            startTime={runtime.session.startTime} */
                  withWatermark
                  hasEnded={runtime.isStatus(SessionStatus.ENDED)}
                  isLoading={!runtime.session.turns.length}
                  onStart={runtime.launch}
                  onEnd={handleEnd}
                  onSend={handleSend}
                  onMinimize={handleEnd}
                >
                  {liveAgent.isEnabled && <LiveAgentStatus talkToRobot={liveAgent.talkToRobot} />}
                  {runtime.session.turns.map((turn, turnIndex) =>
                    match(turn)
                      .with({ type: TurnType.USER }, ({ id, type: _, ...rest }) => <UserResponse {...rest} key={id} />)
                      .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...rest }) => (
                        <SystemResponse
                          {...rest}
                          key={id}
                          Message={({ message, ...props }) =>
                            match(message)
                              .with({ type: CustomMessage.CALENDAR }, ({ payload: { today } }) => (
                                <CalendarMessage {...props} value={new Date(today)} runtime={runtime} />
                              ))
                              .with({ type: CustomMessage.VIDEO }, ({ payload: url }) => <VideoMessage url={url} />)
                              .with({ type: CustomMessage.STREAMED_RESPONSE }, ({ payload: { getSocket } }) => (
                                <StreamedMessage getSocket={getSocket} />
                              ))
                              .with({ type: CustomMessage.PLUGIN }, ({ payload: { Message } }) => <Message />)
                              .otherwise(() => <SystemResponse.SystemMessage {...props} message={message} />)
                          }
                          // avatar={AVATAR}
                          isLast={turnIndex === runtime.session.turns.length - 1}
                        />
                      ))
                      .exhaustive()
                  )}
                  {runtime.indicator && <SystemResponse.Indicator />}
                  {/* {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />} */}
                </Chat>
                   <ProfileMenu />
                <button
                  style={{
                    position: 'fixed',
                    right: '3rem',
                    bottom: '3rem',
                    border: 'none',
                  }}
                >
                  <img src='./images/noun-mute.svg' width='32px' height='32px' />
                  </button>
                  <SettingsMenu />
           
              </div>
            )}
          </RuntimeAPIProvider>
        </ChatWindow.Container>
      </DemoContainer>
    </>
  );
};

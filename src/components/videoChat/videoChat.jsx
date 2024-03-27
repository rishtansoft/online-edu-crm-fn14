import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import MyComponent from "../Copypas";
import "./videoChat.module.css";

const apiKey = "mmhfdzb5evj2"; // the API key can be found in the "Credentials" section
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWRtaXJhbF9UaHJhd24iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0FkbWlyYWxfVGhyYXduIiwiaWF0IjoxNzEwOTc2Njk4LCJleHAiOjE3MTE1ODE1MDN9.NqU4DFsV0-iUuYuoSOPkWvAlr0l0Ia6sbiOIpdFaOA8"; // the token can be found in the "Credentials" section
const userId = "Admiral_Thrawn"; // the user id can be found in the "Credentials" section
const callId = "oyvRJaXorp3g"; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: "oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });

export default function App() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}

export const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="col">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
      <MyComponent />
    </StreamTheme>
  );
};

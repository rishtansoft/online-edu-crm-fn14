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

const apiKey = "ghyjp96abjhq"; // the API key can be found in the "Credentials" section
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTI5NTczOCJ9.xApsyAXGvuzGinWtLOLMVFtUM9avTYwHOrFoTfSnL_0"; // the token can be found in the "Credentials" section
const userId = "1295738"; // the user id can be found in the "Credentials" section
const callId = "oyvRJaXorp3g"; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: "Muhammadqodir",
  image: "https://getstream.io/random_svg/?id=oliver&name=Muhammadqodir",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });

export default function VideoChat() {
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

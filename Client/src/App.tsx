import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import UnderstandingTrouma from "./pages/understanding-trouma";
import FindATherapist from "./pages/find-a-therapist";
import ResourcesLibrary from "./pages/ResourcesLibrary";
import FindATherapistDetails from "./pages/find-a-therapist-details";
import AboutUs from "./pages/about-us";
import Stories from "./pages/stories";
import ResourceLibrayDeatil from "./pages/resource-library-details";
import TherapistChat from "./pages/therapist-chat";
import ChatRoom from "./pages/chat-room";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ConsultantPanel from "./pages/consultant-panel";

const App = () => {
  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/consultant-panel/*" element={<ConsultantPanel />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/understanding-trouma" element={<UnderstandingTrouma />} />
          <Route path="/find-a-therapist" element={<FindATherapist />} />
          <Route path="/find-a-therapist/details" element={<FindATherapistDetails />} />
          <Route path="/resource-library/details" element={<ResourceLibrayDeatil />} />
          <Route path="/resource-library" element={<ResourcesLibrary />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/therapist-chat" element={<TherapistChat />} />
          <Route path="/chat-room" element={<ChatRoom />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

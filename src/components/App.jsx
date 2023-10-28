import { Profiler } from "react";
import { Profile } from "./Profile/Profile";
import user from "../data/user.json";

export const App = () => {
  return (
    <div>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    </div>
  );
};

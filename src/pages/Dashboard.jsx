import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../sections/Profile";
import Lessons from "../sections/Lessons";
import AI from "../sections/AI";
import TeacherPanel from "../sections/TeacherPanel";

export default function Dashboard({ currentUser, onLogout }) {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="container">
      <Sidebar
        active={activeSection}
        setActive={setActiveSection}
        onLogout={onLogout}
      />

      <main className="main">
        {activeSection === "profile" && (
          <Profile currentUser={currentUser} />
        )}

        {activeSection === "lessons" &&
          (currentUser.role === "teacher" ? (
            <TeacherPanel currentUser={currentUser} />
          ) : (
            <Lessons currentUser={currentUser} />
          ))}

        {activeSection === "ai" && <AI />}
      </main>
    </div>
  );
}

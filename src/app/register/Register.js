import React, { useState } from "react";
import Signup from "../../components/signup/Signup";
import Signup2 from "../../components/signup/Signup2";
const Register = () => {
  const [tab, setTab] = useState(0);

  return (
    <div
      className={`bg-main `}
      style={{
        height: "auto",
      }}
    >
      {tab === 0 && <Signup tab={tab} setTab={setTab} />}
      {tab === 1 && <Signup2 tab={tab} setTab={setTab} />}
    </div>
  );
};

export default Register;

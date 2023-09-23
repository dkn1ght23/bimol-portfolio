import { useState, useEffect } from "react";

function Typewriter(props: any) {
  const [txt, setTxt] = useState("");
  const [fullTxt, setFullTxt] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }
    if (!isDeleting && txt === fullTxt) {
      delta = props.period;
    } else if (isDeleting && txt === "") {
      delta = 500;
    }

    setTimeout(() => tick(), delta);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txt, fullTxt, isDeleting, props.period]);

  function tick() {
    const i = loopNum % props.toRotate.length;
    const currentFullTxt = props.toRotate[i];

    if (isDeleting) {
      setTxt((prevTxt) => prevTxt.substring(0, prevTxt.length - 1));
    } else {
      setTxt((prevTxt) => currentFullTxt.substring(0, prevTxt.length + 1));
    }

    if (!isDeleting && txt === currentFullTxt) {
      setIsDeleting(true);
    } else if (isDeleting && txt === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
    }

    setFullTxt(currentFullTxt);
  }

  return (
    <p
      style={{
        minHeight: "51px",
        fontSize: "42px",
        margin: 0,
        fontFamily: "Calibri",
        fontWeight: "600",
      }}
    >
      {txt}
      <span style={{ borderRight: "0.08em solid black" }}></span>
    </p>
  );
}

export default Typewriter;

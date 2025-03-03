import { Button, Typography } from "antd";
import "./App.css";
import Title from "antd/lib/typography/Title";
import Connection from "./components/Connection";
import { useState } from "react";
import "antd/dist/antd.css"; // 4.x 版本

function App() {
  const [display, setDisplay] = useState<boolean>(false);
  const handleClose = () => {
    setDisplay(false);
  };
  return (
    <>
      <Typography>
        <Title>Connecting Modal</Title>
        <Button onClick={() => setDisplay(true)} type="primary">
          Call
        </Button>
      </Typography>

      <Connection
        size="medium"
        title="　"
        open={display}
        onCancel={handleClose}
      />
    </>
  );
}

export default App;

import { Modal, ModalProps } from "antd";
import Connecting from "../assets/connecting.png";

type SizeType = "small" | "medium" | "large";

export interface ConnectionProps extends ModalProps {
  size: SizeType;
}

const Connection: React.FC<ConnectionProps> = ({ size, ...props }) => {
  const sizeMap: Record<SizeType, string> = {
    small: "300px",
    medium: "560px",
    large: "100%",
  };
  return (
    <Modal width={sizeMap[size]} maskClosable={false} {...props}>
      <img src={Connecting} alt="Connecting" width={510} />
    </Modal>
  );
};

export default Connection;

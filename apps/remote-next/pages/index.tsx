import { RemotePage } from "../../../packages/ui/components";

interface IProps {
  withHostApp?: boolean;
}

export default function RemoteApplication({ withHostApp = false }: IProps) {
  return <RemotePage remoteType="NextJS" withHostApp={withHostApp} />;
}

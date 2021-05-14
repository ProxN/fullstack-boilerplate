import { memo } from 'react';
import dynamic from 'next/dynamic';

interface IconProps {
  name: string;
}

const DynamicIcon = (name: string) =>
  dynamic(() => import(`../../../assets/${name}.svg`));

const Icon: React.FC<IconProps> = ({ name }) => {
  const Ic = DynamicIcon(name);
  if (!Ic) return null;
  return <Ic />;
};

export default memo(Icon);

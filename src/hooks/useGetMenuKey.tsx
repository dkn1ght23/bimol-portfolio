import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

const useGetMenuSelectedKey = (): string[] => {
  const [getKeys, setKeys] = useState<string[]>([]);
  const pathName = window.location.pathname;
  const generateKey = (): void => {
    const cloneName = cloneDeep(pathName);
    const keyNames = cloneName.split("/");
    const keys = keyNames[1];
    setKeys((key) => [keys]);
  };
  useEffect(() => {
    generateKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);
  return getKeys;
};

export default useGetMenuSelectedKey;

"use client";

import { atomTester, useAtom } from "@repo/jotai";

export const useAtomTest = () => {
  const [atomTest, setAtomTest] = useAtom(atomTester);

  return {
    atomTest,
    setAtomTest,
  };
};

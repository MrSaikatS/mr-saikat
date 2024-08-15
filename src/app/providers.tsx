"use client";

import { ChildrenPropsType } from "@/utils/types";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "jotai";

const Providers = ({ children }: ChildrenPropsType) => {
  return (
    <>
      <Provider>
        <NextUIProvider>
          <main className="container mx-auto px-6">{children}</main>
        </NextUIProvider>
      </Provider>
    </>
  );
};

export default Providers;

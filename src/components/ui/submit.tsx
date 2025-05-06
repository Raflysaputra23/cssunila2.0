"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const Submit = (
    { children }: { children: React.ReactNode }
) => {
    const status = useFormStatus();
  return (
    <Button
      type="submit"
      className="cursor-pointer shadow flex items-center gap-2"
    >
      {status.pending ? <i className="bx bx-loader animate-spin"></i> : children}
    </Button>
  );
};

export default Submit;

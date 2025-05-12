"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const Submit = ({ children, className }: { children: React.ReactNode; className: string }) => {
    const status = useFormStatus();
  return (
    <Button
      disabled={status.pending}
      type="submit"
      className={className}
    >
      {status.pending ? <i className="bx bx-loader animate-spin"></i> : children}
    </Button>
  );
};

export default Submit;

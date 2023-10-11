"use client";

import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issuespage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </div>
  );
};

export default Issuespage;

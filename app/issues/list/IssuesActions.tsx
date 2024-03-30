import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueFilterStatus from "./IssueFilterStatus";

const IssuesActions = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueFilterStatus />
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
};

export default IssuesActions;

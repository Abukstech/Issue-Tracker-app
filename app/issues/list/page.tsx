import { IssueStatusBadge, Link } from "@/app/components/index";
import prisma from "@/prisma/client";
import { Table, TableColumnHeaderCell } from "@radix-ui/themes";
import IssuesActions from "./IssuesActions";

const Issuespage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <IssuesActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Status
            </TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Created
            </TableColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues &&
            issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

                  <div className="block md:hidden">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Issuespage;

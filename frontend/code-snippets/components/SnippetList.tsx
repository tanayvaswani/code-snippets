import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Snippet {
  id: number;
  username: string;
  codeLanguage: string;
  stdin: string;
  sourceCode: string;
  timestamp: string;
}

interface SnippetListProps {
  snippets: Snippet[];
}

const SnippetList = ({ snippets }: SnippetListProps) => {
  return (
    <Table>
      <TableCaption className="text-lg">A list of all code snippets.</TableCaption>
      <TableHeader className="text-xl">
        <TableRow>
          <TableHead>Username</TableHead>
          <TableHead>Code Language</TableHead>
          <TableHead>Standard Input</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {snippets.map((snippet) => (
          <TableRow key={snippet.id}>
            <TableCell>{snippet.username}</TableCell>
            <TableCell>{snippet.codeLanguage}</TableCell>
            <TableCell>{snippet.stdin}</TableCell>
            <TableCell>
              {new Date(snippet.timestamp).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SnippetList;

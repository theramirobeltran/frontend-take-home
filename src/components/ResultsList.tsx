import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { PackageT } from "../types";

interface ResultsListProps {
  results: PackageT[];
}

export const ResultsList: FC<ResultsListProps> = ({ results }) => (
  <VStack spacing={4}>
    {results.map((pkg) => (
      <Link
        data-testid="package-link"
        key={pkg.package.name}
        href={pkg.package.links.npm}
        isExternal
        w="100%"
      >
        <Card variant="filled">
          <CardHeader>
            <Heading size="md">{pkg.package.name}</Heading>
          </CardHeader>
          <CardBody py={0}>{pkg.package.description}</CardBody>
          <CardFooter>Latest version: {pkg.package.version}</CardFooter>
        </Card>
      </Link>
    ))}
  </VStack>
);

import { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DNA } from "react-loader-spinner";
import { PackageT } from "../types";

interface PaginatedResultsProps {
  isLoading?: boolean;
  onPageChange: (page: number) => void;
  page: number;
  results: PackageT[];
  resultsPerPage: number;
  total: number;
}

export const PaginatedResults: FC<PaginatedResultsProps> = ({
  isLoading,
  resultsPerPage = 10,
  onPageChange,
  page,
  results,
  total,
}) => {
  const handleNext = () => {
    onPageChange(page + 1);
  };

  const handlePrevious = () => {
    onPageChange(page - 1);
  };

  const start = (page - 1) * resultsPerPage + 1;
  const end = page * resultsPerPage;

  return (
    <VStack>
      <Text>{total} packages found</Text>
      <HStack w="100%" justify="center" my={2}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Text>
          {start} - {end}
        </Text>
        <Button onClick={handleNext}>Next</Button>
      </HStack>
      {!isLoading &&
        results.map((pkg) => (
          <Link
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
      {isLoading ? (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <HStack w="100%" justify="center" my={2}>
          <Button onClick={handlePrevious}>Previous</Button>
          <Text>
            {start} - {end}
          </Text>
          <Button onClick={handleNext}>Next</Button>
        </HStack>
      )}
    </VStack>
  );
};

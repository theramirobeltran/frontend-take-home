import { FC, PropsWithChildren } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Button, Heading, VStack } from "@chakra-ui/react";

interface ErrorFallbackProps {
  resetErrorBoundary: () => void;
}
const ErrorFallback: FC<ErrorFallbackProps> = ({ resetErrorBoundary }) => (
  <VStack role="alert" mt={20}>
    <Heading textAlign="center">
      Something went wrong, please try again.
    </Heading>
    <Button onClick={resetErrorBoundary} mt={4}>
      Reload
    </Button>
  </VStack>
);

export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      window.location.reload();
    }}
  >
    {children}
  </ReactErrorBoundary>
);

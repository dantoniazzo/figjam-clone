import { useUser } from "@clerk/clerk-react";
import type { ConductoUserUnsafeMetadata } from "./viewer.types";

export const useViewer = () => {
  const { user, isSignedIn } = useUser();

  const getViewerMetadata = () => {
    return user?.unsafeMetadata as ConductoUserUnsafeMetadata | undefined;
  };

  return {
    viewer: user,
    getViewerMetadata,
    isSignedIn,
  };
};

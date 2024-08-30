import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

/*
Provides convenience methods for accessing the pathfinding context.
*/
export const usePathfinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error("usePathfinding must be used within a PathfindingProvider");
  }

  return context;
};
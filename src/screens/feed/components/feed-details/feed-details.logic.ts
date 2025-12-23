import { useLocalSearchParams } from "expo-router";

export function useFeedDetailsLogic() {
  const { post } = useLocalSearchParams();

  return {
    post,
  };
}
